import {
    MapPin,
    Users,
    Home,
    Zap,
    Search,
    CheckCircle,
    Shield,
    Filter,
    MessageCircle,
    RefreshCw,
  } from "lucide-react";
  
  // Features Section
  export const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Draw Your Zone",
      description:
        "Select your exact living area using intuitive touch gestures on our interactive map.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Match by Vibe",
      description:
        "Find compatible roommates based on lifestyle preferences, values, and daily routines.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Group Applications",
      description:
        "Apply together and split costs easily with built-in group coordination tools.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Matching",
      description:
        "Get notified the moment someone who fits your criteria joins your zone — no manual searching.",
      color: "from-orange-500 to-red-500",
    },
  ];
  
  // How It Works Steps
  export const steps = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Draw Your Zone",
      description:
        "Use the interactive map to draw your exact neighborhood or commute radius. No more filtering through listings in the wrong part of town.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Browse Real People",
      description:
        "Every profile is verified. Filter by lifestyle — sleep schedule, pets, cleanliness — and message anyone for free.",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Move In Confidently",
      description:
        "Chat, meet up, decide together. No subscription required to connect — just real roommates, real conversations.",
    },
  ];
  
  // Pain Points Section
  export const painPoints = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      problem: "Paywalls Just to Say Hi",
      solution: "Messaging is free here — always. No subscription. No credit card. Ever.",
      color: "text-purple-600",
      impact: "Save $360+/year vs. Roomster",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      problem: "90% Fake Profiles",
      solution: "Gov ID verification + background checks on every account. Zero bots.",
      color: "text-red-600",
      impact: "Avoid the avg. $2,400 scam loss",
    },
    {
      icon: <Filter className="w-6 h-6" />,
      problem: "Broken Location Filters",
      solution: "Draw your zone on the map. Commute radius, neighborhood, block — you decide.",
      color: "text-orange-600",
      impact: "Find matches in your actual area",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      problem: "Ghost Listings",
      solution: "Active listings only — profiles auto-hide after 60 days of inactivity.",
      color: "text-blue-600",
      impact: "No more wasted messages",
    },
  ];
  
  // Guarantees Section
  export const guarantees = [
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
      title: "Free to Message. Forever.",
      description:
        "We will never charge you to read or send a message. That's the founding promise — locked in for beta testers permanently.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Verified or Removed",
      description:
        "Every profile goes through identity verification. Unverified accounts are hidden. Fake profiles are banned within 24 hours of report.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Founding Member Status",
      description:
        "Beta testers get a permanent founding member badge, 6 months of free premium, and first access to every feature we ship.",
    },
  ];
  