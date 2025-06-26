"use client"
// app/downloadApp/page.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip } from '@mui/material';
import { Phone, Download, Sparkles, Users, Bell } from 'lucide-react';

export default function DownloadAppPage() {
  const [open, setOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const searchParams = useSearchParams();

  // Check URL parameters on mount
  useEffect(() => {
    const shouldOpen = searchParams.get('open') === 'true';
    const platform = searchParams.get('platform') || 'iOS';
    
    if (shouldOpen) {
      setSelectedPlatform(platform);
      setOpen(true);
    }
  }, [searchParams]);

  const handleQRClick = (platform: string) => {
    setSelectedPlatform(platform);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlatform('');
  };

  const handleJoinEarlyAdopters = () => {
    // Add your early adopter signup logic here
    console.log('User wants to join early adopters for:', selectedPlatform);
    window.location.href = "https://forms.gle/qJQXtqEgHb45Y2Y8A";
    handleClose();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-24">
        <div className="max-w-4xl text-center">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Coming Soon</span>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Get the MyRoomie App
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              We're crafting an amazing mobile experience for finding your perfect roommate. 
              Scan below to join our exclusive early access program.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ Early Adopters</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span>Notify Me First</span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-lg mx-auto">
            {/* iOS QR Code */}
            <div 
              onClick={() => handleQRClick('iOS')}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">iOS App</h3>
                  <Chip 
                    label="iPhone & iPad" 
                    size="small" 
                    className="bg-blue-100 text-blue-700 mb-4"
                  />
                </div>
                
                <div className="relative">
                  <Image 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://findmyroomy.com/downloadApp?open=true&platform=iOS" 
                    alt="iOS QR Code" 
                    width={200} 
                    height={200} 
                    className="mx-auto rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-2xl transition-colors duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">Scan to join iOS early access</p>
              </div>
            </div>

            {/* Android QR Code */}
            <div 
              onClick={() => handleQRClick('Android')}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Android App</h3>
                  <Chip 
                    label="Google Play" 
                    size="small" 
                    className="bg-green-100 text-green-700 mb-4"
                  />
                </div>
                
                <div className="relative">
                  <Image 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://findmyroomy.com/downloadApp?open=true&platform=Android" 
                    alt="Android QR Code" 
                    width={200} 
                    height={200} 
                    className="mx-auto rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-2xl transition-colors duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">Scan to join Android early access</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              🚀 Be among the first to experience seamless roommate matching on mobile
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: '24px',
            padding: '8px',
            minWidth: '400px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }
        }}
      >
        <DialogTitle className="text-center pb-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              selectedPlatform === 'iOS' ? 'bg-blue-100' : 'bg-green-100'
            }`}>
              {selectedPlatform === 'iOS' ? (
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
                </svg>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Join Early Access for {selectedPlatform}
          </h2>
        </DialogTitle>
        <DialogContent className="text-center px-6">
          <p className="text-gray-600 mb-4 leading-relaxed">
            We're putting the finishing touches on our {selectedPlatform} app! Join our exclusive early adopters program and be the first to experience the future of roommate matching.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Bell className="w-4 h-4" />
                <span>Priority Access</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Beta Features</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                <span>Special Perks</span>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="px-6 pb-4 gap-3">
          <Button 
            onClick={handleClose}
            variant="outlined"
            className="rounded-full px-6"
          >
            Maybe Later
          </Button>
          <Button 
            onClick={handleJoinEarlyAdopters}
            variant="contained" 
            className={`rounded-full px-6 ${
              selectedPlatform === 'iOS' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
            startIcon={<Bell className="w-4 h-4" />}
          >
            Join Early Access
          </Button>
        </DialogActions>
      </Dialog>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}