// app/verify-email/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { supabase } from "../../database/supabaseClient";

function VerifyEmailContent() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Parse tokens from URL hash (Supabase sends them in the hash fragment)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");
        const type = hashParams.get("type");

        console.log("Verify email params:", { type, hasAccessToken: !!accessToken });

        if (type === "signup" && accessToken && refreshToken) {
          // Set the session to confirm the email verification
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error("Session error:", error);
            setErrorMessage("Verification failed. The link may have expired.");
            setStatus("error");
          } else {
            setStatus("success");
            // Auto-redirect to app after 3 seconds
            setTimeout(() => {
              window.location.href = "myroomie://auth/callback" + window.location.hash;
            }, 3000);
          }
        } else if (type === "signup") {
          setErrorMessage("Invalid verification link. Missing tokens.");
          setStatus("error");
        } else {
          // No type=signup means this might be a direct visit
          setErrorMessage("No verification token found. Please use the link from your email.");
          setStatus("error");
        }
      } catch (err) {
        console.error("Verification error:", err);
        setErrorMessage("An unexpected error occurred.");
        setStatus("error");
      }
    };

    verifyEmail();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {status === "loading" && (
          <>
            <div style={styles.iconContainer}>
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
            </div>
            <h2 style={styles.title}>Verifying Your Email</h2>
            <p style={styles.subtitle}>Please wait while we confirm your email address...</p>
          </>
        )}

        {status === "success" && (
          <>
            <div style={{ ...styles.iconContainer, background: "linear-gradient(135deg, #10B981 0%, #059669 100%)" }}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 style={styles.title}>Email Verified!</h2>
            <p style={styles.subtitle}>Your email has been confirmed. You can now sign in to MyRoomie.</p>
            
            <a href="myroomie://auth/callback" style={styles.button}>
              Open MyRoomie App
            </a>
            
            <p style={styles.storeLink}>
              Don't have the app?{" "}
              <a 
                href="https://play.google.com/store/apps/details?id=com.myroomie.app" 
                style={styles.link}
              >
                Download on Google Play
              </a>
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div style={{ ...styles.iconContainer, background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)" }}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 style={styles.title}>Verification Failed</h2>
            <p style={styles.subtitle}>{errorMessage}</p>
            
            <a href="https://findmyroomy.com" style={styles.buttonSecondary}>
              Go to Homepage
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense
      fallback={
        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.iconContainer}>
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
            </div>
            <h2 style={styles.title}>Loading...</h2>
          </div>
        </div>
      }
    >
      <VerifyEmailContent />
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
    textAlign: "center",
  },
  iconContainer: {
    width: "80px",
    height: "80px",
    margin: "0 auto 1.5rem",
    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "40px",
    height: "40px",
    color: "#fff",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "0.75rem",
    color: "#1F2937",
  },
  subtitle: {
    fontSize: "15px",
    color: "#6B7280",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    width: "100%",
    padding: "14px 24px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    marginBottom: "1rem",
  },
  buttonSecondary: {
    display: "inline-block",
    width: "100%",
    padding: "14px 24px",
    borderRadius: "10px",
    border: "2px solid #E5E7EB",
    fontSize: "16px",
    fontWeight: 600,
    background: "transparent",
    color: "#374151",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  storeLink: {
    fontSize: "14px",
    color: "#6B7280",
    marginTop: "1rem",
  },
  link: {
    color: "#3B82F6",
    textDecoration: "none",
    fontWeight: 500,
  },
  spinner: {
    width: "40px",
    height: "40px",
    color: "#fff",
    animation: "spin 1s linear infinite",
  },
  spinnerCircle: {
    strokeDasharray: "63",
    strokeDashoffset: "20",
    transformOrigin: "center",
  },
};

// Add keyframe animation
if (typeof document !== "undefined") {
  const existingStyle = document.getElementById("verify-email-styles");
  if (!existingStyle) {
    const style = document.createElement("style");
    style.id = "verify-email-styles";
    style.textContent = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      a[href^="myroomie://"]:hover,
      a[href*="play.google.com"]:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
      }
    `;
    document.head.appendChild(style);
  }
}
