// app/reset-password/ResetPassword.tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { supabase } from "../../database/supabaseClient";
import { useSearchParams, useRouter } from "next/navigation";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sessionSet, setSessionSet] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const hashAccessToken = hashParams.get("access_token");
    const hashRefreshToken = hashParams.get("refresh_token");
    const hashType = hashParams.get("type");

    const type = searchParams?.get("type") || hashType;
    const access_token = searchParams?.get("access_token") || hashAccessToken;
    const refresh_token =
      searchParams?.get("refresh_token") || hashRefreshToken;

    console.log("URL params:", { type, access_token, refresh_token });

    if (type === "recovery" && access_token) {
      if (!refresh_token) {
        setError("Invalid reset link. Refresh token is missing.");
        return;
      }

      supabase.auth
        .setSession({
          access_token,
          refresh_token,
        })
        .then(({ error }) => {
          if (error) {
            console.error("Session error:", error);
            setError(
              "Invalid or expired reset link. Please request a new one."
            );
          } else {
            setSessionSet(true);
          }
        });
    } else if (type === "recovery") {
      setError("Invalid reset link. Access token is missing.");
    }
  }, [searchParams]);

  const handleResetPassword = async () => {
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Please enter both password fields");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!sessionSet) {
      setError("No valid reset session. Please use the link from your email.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;

      setSuccess("Your password has been reset successfully!");
      setTimeout(() => {
        window.location.href = "https://findmyroomy.com";
      }, 2000);
    } catch (err: unknown) {
      console.error("Password update error:", err);
      if (err instanceof Error) {
        setError(err.message || "Failed to reset password");
      } else {
        setError("Failed to reset password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <svg
            style={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
        </div>

        <h2 style={styles.title}>Reset Your Password</h2>
        <p style={styles.subtitle}>
          {sessionSet
            ? "Choose a strong password to secure your account"
            : "Waiting for secure session from email link"}
        </p>

        {error && (
          <div style={styles.errorContainer}>
            <svg
              style={styles.alertIcon}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div style={styles.successContainer}>
            <svg
              style={styles.alertIcon}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{success}</span>
          </div>
        )}

        {sessionSet && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleResetPassword();
            }}
            style={styles.form}
          >
            <div style={styles.field}>
              <label style={styles.label}>New Password</label>
              <div style={styles.inputWrapper}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewPassword(e.target.value)
                  }
                  style={styles.input}
                  placeholder="Enter new password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  style={styles.toggle}
                  disabled={loading}
                >
                  <svg
                    style={styles.toggleIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showNewPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <p style={styles.hint}>Must be at least 6 characters</p>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Confirm Password</label>
              <div style={styles.inputWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                  style={styles.input}
                  placeholder="Confirm new password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  style={styles.toggle}
                  disabled={loading}
                >
                  <svg
                    style={styles.toggleIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showConfirmPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {}),
              }}
              disabled={loading}
            >
              {loading ? (
                <span style={styles.buttonContent}>
                  <svg style={styles.spinner} viewBox="0 0 24 24">
                    <circle
                      style={styles.spinnerCircle}
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                  Resetting Password...
                </span>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        )}

        {!sessionSet && !error && (
          <div style={styles.loadingState}>
            <svg style={styles.spinner} viewBox="0 0 24 24">
              <circle
                style={styles.spinnerCircle}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <p style={styles.loadingText}>Verifying your reset link...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.loadingState}>
            <svg style={styles.spinner} viewBox="0 0 24 24">
              <circle
                style={styles.spinnerCircle}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <p style={styles.loadingText}>Loading...</p>
          </div>
        </div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
    padding: "1rem",
  },
  card: {
    background: "#fff",
    padding: "3rem 2.5rem",
    borderRadius: "16px",
    maxWidth: "440px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  iconContainer: {
    width: "64px",
    height: "64px",
    margin: "0 auto 1.5rem",
    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "32px",
    height: "32px",
    color: "#fff",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#1F2937",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "15px",
    color: "#6B7280",
    marginBottom: "2rem",
    textAlign: "center",
    lineHeight: "1.5",
  },
  form: {
    width: "100%",
  },
  field: {
    marginBottom: "1.5rem",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "#374151",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "12px 48px 12px 16px",
    borderRadius: "10px",
    border: "2px solid #E5E7EB",
    fontSize: "15px",
    transition: "all 0.2s ease",
    outline: "none",
    color: "black"
  },
  hint: {
    fontSize: "12px",
    color: "#9CA3AF",
    marginTop: "0.5rem",
    marginLeft: "4px",
  },
  toggle: {
    position: "absolute",
    right: "12px",
    padding: "6px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6B7280",
    transition: "color 0.2s ease",
  },
  toggleIcon: {
    width: "20px",
    height: "20px",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    marginTop: "0.5rem",
  },
  buttonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
    transform: "none",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  errorContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    borderRadius: "10px",
    color: "#DC2626",
    fontSize: "14px",
    marginBottom: "1.5rem",
  },
  successContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    background: "#F0FDF4",
    border: "1px solid #BBF7D0",
    borderRadius: "10px",
    color: "#16A34A",
    fontSize: "14px",
    marginBottom: "1.5rem",
  },
  alertIcon: {
    width: "20px",
    height: "20px",
    flexShrink: 0,
  },
  loadingState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "2rem 0",
  },
  loadingText: {
    fontSize: "14px",
    color: "#6B7280",
    margin: 0,
  },
  spinner: {
    width: "24px",
    height: "24px",
    animation: "spin 1s linear infinite",
  },
  spinnerCircle: {
    strokeDasharray: "63",
    strokeDashoffset: "20",
    transformOrigin: "center",
  },
};

// Add keyframe animation via injected style
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    input:focus {
      border-color: #3B82F6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }
    button[type="submit"]:not(:disabled):hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    }
    button[type="button"]:hover {
      color: #3B82F6;
    }
  `;
  document.head.appendChild(style);
}