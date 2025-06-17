import React from "react";
import { MapPin, Phone, Mail, X, Facebook, Linkedin, Youtube } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactUs({ onClose }) {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x9x3x5e",
        "template_g1qck6c",
        e.target,
        "4D_p0Cy6YqcSa4sPU"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
          onClose();
        },
        (error) => {
          console.error("❌ Error sending email:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    // Always center the modal on screen, even on mobile
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4">
      <div
        className="
          bg-white
          w-full max-w-md sm:max-w-lg md:max-w-4xl
          mx-auto rounded-2xl shadow-2xl
          overflow-hidden relative animate-fade-in
          max-h-[90vh]
        "
      >
        {/* 🚪 Exit button */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 z-30
            bg-white p-2 rounded-full shadow-md
            text-gray-600 hover:text-gray-800
            transition-all duration-200
          "
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* — Form Section — */}
          <div className="md:w-1/2 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 sm:p-8 overflow-y-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 text-base border border-black rounded-xl bg-white/80 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="youremail@mail.com"
                required
                className="w-full p-4 text-base border border-black rounded-xl bg-white/80 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              <textarea
                name="message"
                placeholder="Type your message..."
                required
                className="w-full p-4 h-32 sm:h-40 text-base border border-black rounded-xl bg-white/80 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl active:scale-[0.98] transition-all duration-200 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* — Contact Info — */}
          <div className="md:w-1/2 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-6 sm:p-8 flex flex-col justify-center text-white overflow-y-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Contact Information
            </h3>
            <p className="text-slate-300 mb-6 text-base sm:text-lg">
              Have a question, want to connect, or work together?
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2.5 rounded-full">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-200 text-base">Chicago, IL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2.5 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-200 text-base">000-000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 p-2.5 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-200 text-base break-all">
                  cryptocodesace@gmail.com
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-slate-300 mb-2 text-base">Follow us on:</div>
              <div className="flex space-x-3">
                <div className="bg-blue-600 p-2.5 rounded-full">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="bg-blue-700 p-2.5 rounded-full">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="bg-red-600 p-2.5 rounded-full">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
