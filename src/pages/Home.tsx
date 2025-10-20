import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, Moon, ArrowRight, Calendar, Play, Clock, Sparkles, Brain, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import VideoPopup from '@/components/VideoPopup';
import BottomNavigation from '@/components/BottomNavigation';
import MoodIcon from '@/components/MoodIcon';
import SideMenu from '@/components/SideMenu';

import MoodSelectionDialog from '@/components/MoodSelectionDialog';
import AIRecommendations from '@/components/AIRecommendations';
import FeaturesPopup from '@/components/FeaturesPopup';
import CategoryDetail from '@/components/CategoryDetail';
import MeditationChat from '@/components/MeditationChat';
import WorkingMeditationChat from '@/components/WorkingMeditationChat';
import HeaderWithLogo from '@/components/HeaderWithLogo';
import { motion } from 'framer-motion';

interface MoodOption {
  icon: React.ReactNode;
  label: string;
  color: string;
  type: 'calm' | 'relax' | 'focus' | 'anxious';
}

interface MeditationCard {
  title: string;
  description: string;
  duration: string;
  image: string;
  icon?: string;
}

interface CategoryCard {
  icon: string;
  title: string;
  description: string;
  subtext: string;
  color: string;
  promptTitle?: string;
  promptText?: string;
  duration?: string;
  image?: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userName, setUserName] = useState<string>("Guest");
  const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<{title: string, duration: string}>({title: "", duration: ""});
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [selectedMood, setSelectedMood] = useState<'calm' | 'relax' | 'focus' | 'anxious' | 'overwhelmed' | 'tired' | null>(null);
  const [showMoodFeedback, setShowMoodFeedback] = useState<boolean>(false);
  const [showMoodSelection, setShowMoodSelection] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showAIRecommendation, setShowAIRecommendation] = useState<boolean>(false);
  const [showFeaturesPopup, setShowFeaturesPopup] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryCard | null>(null);
  const [showMeditationChat, setShowMeditationChat] = useState<boolean>(false);
  const [showHeaderPulse, setShowHeaderPulse] = useState<boolean>(false);
  const [showWhatsNewTip, setShowWhatsNewTip] = useState<boolean>(false);

  useEffect(() => {
    // Try to get user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.fullName) {
          setUserName(userData.fullName);
        } else if (userData.name) {
          setUserName(userData.name);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    // Check if this is the first time the app is being opened in this session
    const isFirstVisit = sessionStorage.getItem('home_visited') !== 'true';

    // Show features popup on first visit, otherwise auto-open mood popup
    if (isFirstVisit) {
      // Mark that the home page has been visited in this session
      sessionStorage.setItem('home_visited', 'true');

      // Show the features popup (free trial) first
      setShowFeaturesPopup(true);
      // Pulse header once to emphasize new update feel
      setShowHeaderPulse(true);
      setTimeout(() => setShowHeaderPulse(false), 1500);
    } else {
      // For returning visits in the same session, open the mood selection immediately
      setShowMoodSelection(true);
    }
  }, []);

  const moodOptions: MoodOption[] = [
    {
      icon: <MoodIcon iconType="calm" />,
      label: "Calm",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      type: "calm"
    },
    {
      icon: <MoodIcon iconType="relax" />,
      label: "Relax",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      type: "relax"
    },
    {
      icon: <MoodIcon iconType="focus" />,
      label: "Focus",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      type: "focus"
    },
    {
      icon: <MoodIcon iconType="anxious" />,
      label: "Anxious",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      type: "anxious"
    }
  ];

  const dailyMeditations: MeditationCard[] = [
    {
      title: "Meditation 101",
      description: "Techniques, Benefits, and a Beginner's How-To",
      duration: "15 Min",
      image: "/lovable-uploads/meditation 101.png",
      icon: "🧘"
    },
    {
      title: "Cardio Meditation",
      description: "Basics of Yoga for Beginners Professionals",
      duration: "10 Min",
      image: "/lovable-uploads/cardio meditation.png",
      icon: "🧘"
    }
  ];

  const quickReliefMeditations: MeditationCard[] = [
    {
      title: "5-Minute Breath Focus",
      description: "A quick reset for busy moments",
      duration: "5 Min",
      image: "/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png",
      icon: "🧠"
    },
    {
      title: "Instant Calm",
      description: "Rapid stress relief technique",
      duration: "3 Min",
      image: "/lovable-uploads/601731bf-474a-425f-a8e9-132cd7ffa027.png",
      icon: "🧠"
    },
    {
      title: "Mindful Minute",
      description: "Reset your nervous system quickly",
      duration: "1 Min",
      image: "/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png",
      icon: "🧠"
    }
  ];

  const categoryCards: CategoryCard[] = [
    {
      icon: "🧠",
      title: "Quick Reset",
      description: "For overwhelmed moments, school runs, or toddler tantrums.",
      subtext: "Breathe and reset in under 5 minutes.",
      color: "bg-gradient-to-r from-blue-400 to-blue-500",
      duration: "5 Min",
      image: "/lovable-uploads/peaceful-garden.jpg",
      promptTitle: "Instant Calm – 5-Minute Mental Reset",
      promptText: "Feeling overwhelmed? Let's take 5 minutes to breathe, refocus, and find your center again. This session is perfect for chaotic mornings, school runs, or toddler tantrums. Inhale peace, exhale pressure."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Mindful Parenting",
      description: "For patience, emotional regulation, and presence with kids.",
      subtext: "Show up grounded, even on the messy days.",
      color: "bg-gradient-to-r from-pink-400 to-pink-500",
      duration: "10 Min",
      image: "/lovable-uploads/child-meditation.jpg",
      promptTitle: "Mindful Moments with Your Child",
      promptText: "Rebuild your emotional strength while staying present with your children. Practice deep breathing, compassionate listening, and patience. Every mindful parent creates ripples of love."
    },
    {
      icon: "🌙",
      title: "Deep Sleep Recovery",
      description: "For bedtime wind-down, racing thoughts, or night wakings.",
      subtext: "Let go of the day and drift into deep rest.",
      color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
      duration: "15 Min",
      image: "/lovable-uploads/moonlight-magic.jpg",
      promptTitle: "Let Go Into Deep Sleep",
      promptText: "For sleepless minds, racing thoughts, and 3AM worries—this meditation is your lullaby. Let each breath lead you closer to restful dreams. Ideal for end-of-day recovery."
    },
    {
      icon: "🌞",
      title: "Start Your Day Calm",
      description: "Morning affirmations, grounding meditations, or intention-setting.",
      subtext: "Begin with clarity, not chaos.",
      color: "bg-gradient-to-r from-amber-400 to-amber-500",
      duration: "10 Min",
      image: "/lovable-uploads/sunrise-meditation.jpg",
      promptTitle: "Morning Mindset Reset",
      promptText: "Start your day with clarity, confidence, and calm. This session includes affirmations, grounding, and intention-setting to align your morning with purpose."
    },
    {
      icon: "👩‍👧‍👦",
      title: "Parent–Child Bonding",
      description: "Shared meditations, breathing games, or bedtime stories.",
      subtext: "Connect through calm.",
      color: "bg-gradient-to-r from-green-400 to-green-500",
      duration: "8 Min",
      image: "/lovable-uploads/child-meditation.jpg",
      promptTitle: "Shared Stillness with Your Child",
      promptText: "Join your child in calming breathing games, bedtime affirmations, or guided mindfulness. Strengthen your bond through stillness and love."
    },
    {
      icon: "❤️",
      title: "Emotional First Aid",
      description: "For anxiety, mom guilt, frustration, or when you're touched out.",
      subtext: "Press pause and recalibrate.",
      color: "bg-gradient-to-r from-red-400 to-red-500",
      duration: "7 Min",
      image: "/lovable-uploads/mountain-serenity.jpg",
      promptTitle: "Emotional Rescue & Release",
      promptText: "For stress, guilt, fear, or frustration—this is your safe space. Press pause, acknowledge your emotions, and let go through guided healing."
    },
    {
      icon: "🔮",
      title: "Affirmations & Mantras",
      description: "For mental clarity, confidence, or emotional support.",
      subtext: "Reframe your thoughts, reclaim your calm.",
      color: "bg-gradient-to-r from-purple-400 to-purple-500",
      duration: "7 Min",
      image: "/lovable-uploads/mountain-serenity.jpg",
      promptTitle: "Empowering Affirmations for the Soul",
      promptText: "Rewire your thoughts. Reclaim your worth. This session blends modern mantras and ancient affirmations to reinforce confidence, peace, and clarity."
    }
  ];

  const handleWatchNow = (title: string, duration: string) => {
    if (title === "Meditation 101") {
      navigate('/meditation-101');
    } else {
      setCurrentVideo({title, duration});
      setShowVideoPopup(true);
    }
  };

  const handleStartMeditation = () => {
    navigate('/category-meditation', {
      state: {
        title: "Meditation 101",
        category: "default",
        duration: "15 Min"
      }
    });
  };

  const goToSleepStories = () => {
    navigate('/stories');
  };

  const handleMoodSelection = (moodType: 'calm' | 'relax' | 'focus' | 'anxious') => {
    setSelectedMood(moodType);
    toast({
      title: `Feeling ${moodType}`,
      description: "Recommendations updated based on your mood.",
    });
  };

  const handleMoodSelectionFromDialog = (mood: 'overwhelmed' | 'calm' | 'exhausted' | 'anxious' | 'tired') => {
    // Map the mood from the dialog to the mood types used in the app
    let mappedMood: 'calm' | 'relax' | 'focus' | 'anxious';

    switch(mood) {
      case 'overwhelmed':
      case 'exhausted':
        mappedMood = 'focus';
        break;
      case 'anxious':
        mappedMood = 'anxious';
        break;
      case 'tired':
        mappedMood = 'relax';
        break;
      case 'calm':
      default:
        mappedMood = 'calm';
        break;
    }

    setSelectedMood(mappedMood);

    // Mark the mood change and show a toast (no popup)
    sessionStorage.setItem('mood_feedback_shown', 'true');
    toast({
      title: "Mood applied",
      description: "Personalized recommendations updated.",
    });
  };

  // Function to open the mood selection dialog
  const openMoodSelectionDialog = () => {
    setShowMoodSelection(true);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleNotificationClick = () => {
    if (!showNotification) {
      setShowNotification(true);
      toast({
        title: "New Notification",
        description: "You have a meditation session scheduled in 30 minutes!",
      });

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  const handleAIRecommendationClick = () => {
    setShowAIRecommendation(true);
  };

  const handleMeditationChatClick = () => {
    setShowMeditationChat(true);
  };

  const handleQuickSessionClick = (duration: string, title: string) => {
    toast({
      title: `${title}`,
      description: `Starting your ${duration} session now.`,
    });

    setTimeout(() => {
      navigate('/category-meditation-screen', {
        state: {
          title: title,
          category: 'Quick Reset',
          duration: duration
        }
      });
    }, 1500);
  };

  const handleScheduleSession = (category: string) => {
    // Find the category object
    const categoryObj = categoryCards.find(c => c.title === category) || categoryCards[0];

    // Show schedule modal instead of navigating to work page
    setSelectedCategory(categoryObj);

    // Use setTimeout to ensure the category detail is rendered first
    setTimeout(() => {
      // This will trigger the handleScheduleCategory function in CategoryDetail
      const scheduleButton = document.querySelector('.category-schedule-button') as HTMLButtonElement;
      if (scheduleButton) {
        scheduleButton.click();
      }
    }, 100);
  };

  const handleStartNow = (category: string) => {
    toast({
      title: `Starting ${category}`,
      description: `Beginning your ${category} session now.`,
    });

    setTimeout(() => {
      navigate('/category-meditation-screen', {
        state: {
          title: `${category} Meditation`,
          category: category,
          duration: '15 Min'
        }
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-y-auto pb-24">
      {/* Header with properly centered logo */}
      <div className={`${showHeaderPulse ? 'animate-pulse' : ''}`}>
        <HeaderWithLogo
          logoColor="blue"
          bgColor="bg-transparent"
          textColor="text-gray-800"
          rightElement={
            <div className="flex items-center space-x-4">
              <button
                className={`text-gray-800 ${showNotification ? 'animate-bounce' : ''}`}
                onClick={handleNotificationClick}
              >
                <Bell size={20} />
              </button>
              <button
                className="text-yellow-500"
                onClick={() => navigate('/stories')}
              >
                <Moon size={20} fill="currentColor" />
              </button>
            </div>
          }
        />

        {/* Welcome Section */}
        <section className="px-4 pt-1 pb-3">
          <h1 className="text-xl font-semibold text-gray-900">Welcome back, {userName}!</h1>

          <div className="flex justify-between mt-3">
            {moodOptions.map((mood, index) => (
              <button
                key={index}
                className={`flex flex-col items-center ${mood.color} w-14 h-14 rounded-2xl text-white p-1 transition-transform hover:scale-105 active:scale-95`}
                aria-label={`Feeling ${mood.label}`}
                onClick={openMoodSelectionDialog}
              >
                <div className="mb-1 text-white">{mood.icon}</div>
                <span className="text-xs">{mood.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* AI Meditation Section */}
        <section className="px-4 mb-3">
          <motion.div
            onClick={handleMeditationChatClick}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 relative text-white flex justify-between items-center cursor-pointer hover:shadow-lg transition-shadow active:opacity-90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showWhatsNewTip && (
              <motion.div
                className="absolute -top-2 right-2 bg-white/90 text-indigo-700 text-xs rounded-full px-2 py-0.5 shadow-sm"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
              >
                What’s New
              </motion.div>
            )}
            <div>
              <h2 className="font-medium text-sm flex items-center">
                <Sparkles size={14} className="mr-1" />
                AI Meditation
                <span className="ml-2 text-[10px] font-semibold bg-white/20 text-white rounded-full px-2 py-0.5">New</span>
              </h2>
              <div className="flex items-center mt-1">
                <p className="text-xs">Chat with our AI meditation assistant — now mood‑tuned</p>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <MessageSquare size={24} className="text-white" />
            </div>
          </motion.div>
        </section>

        {/* Simple Meditation Section */}
        <section className="px-4 mb-3">
          <motion.div
            onClick={() => navigate('/meditation-screen')}
            className="bg-blue-500 rounded-xl p-3 text-white flex justify-between items-center cursor-pointer hover:shadow-lg transition-shadow active:opacity-90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <h2 className="font-medium text-sm flex items-center">
                <Brain size={14} className="mr-1" />
                Meditation
              </h2>
              <div className="flex items-center mt-1">
                <p className="text-xs">Guided breathing meditation</p>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <Clock size={24} className="text-white" />
            </div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="px-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold">Meditation Categories</h2>
            <button
              onClick={goToSleepStories}
              className="text-blue-500 flex items-center text-xs"
            >
              View All <ArrowRight size={12} className="ml-1" />
            </button>
          </div>

          <div className="space-y-3">
            {categoryCards.map((category, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-3 border border-blue-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-2">
                    <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-xs text-gray-600 mb-1">{category.description}</p>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {category.duration}
                    </div>
                  </div>
                  <img src={category.image || '/forest-cover.png'} alt={category.title} onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/forest-cover.png'; }} className="w-16 h-16 rounded-xl object-cover" />
                </div>
                <div className="flex space-x-2 mt-2">
                  <Button
                    onClick={() => handleWatchNow(category.title, category.duration || "")}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-xs flex items-center"
                  >
                    Watch Now <div className="ml-1 p-0.5 bg-white rounded-full"><ArrowRight size={10} className="text-blue-500" /></div>
                  </Button>
                  <Button
                    onClick={() => handleStartNow(category.title)}
                    className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-300 rounded-full px-3 py-1 text-xs"
                  >
                    Start Meditation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Meditation (updated to match design) */}
        <section className="px-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold">Daily Meditation</h2>
            <button
              onClick={goToSleepStories}
              className="text-blue-500 flex items-center text-xs"
            >
              View More <ArrowRight size={12} className="ml-1" />
            </button>
          </div>

          {/* Card: Meditation 101 */}
          <div className="bg-blue-50 rounded-2xl p-3 mb-3 border border-blue-100">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm font-semibold text-gray-900">Meditation 101</h3>
                <p className="text-xs text-gray-600 mb-1">Techniques, Benefits, and a Beginner's How-To</p>
                <div className="flex items-center text-gray-500 text-xs mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  15 Min
                </div>
              </div>
              <img src="/lovable-uploads/meditation 101.png" alt="Meditation 101" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex space-x-2 mt-2">
              <Button
                onClick={() => handleWatchNow('Meditation 101', '15 Min')}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-xs flex items-center"
              >
                Watch Now <div className="ml-1 p-0.5 bg-white rounded-full"><ArrowRight size={10} className="text-blue-500" /></div>
              </Button>
              <Button
                onClick={handleStartMeditation}
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-300 rounded-full px-3 py-1 text-xs"
              >
                Start Meditation
              </Button>
            </div>
          </div>

          {/* Card: Cardio Meditation */}
          <div className="bg-blue-50 rounded-2xl p-3 mb-1 border border-blue-100">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm font-semibold text-gray-900">Cardio Meditation</h3>
                <p className="text-xs text-gray-600 mb-1">Basics of Yoga for Beginners Professionals</p>
                <div className="flex items-center text-gray-500 text-xs mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  10 Min
                </div>
              </div>
              <img src="/lovable-uploads/cardio meditation.png" alt="Cardio Meditation" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex space-x-2 mt-2">
              <Button
                onClick={() => handleWatchNow('Cardio Meditation', '10 Min')}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-xs flex items-center"
              >
                Watch Now <div className="ml-1 p-0.5 bg-white rounded-full"><ArrowRight size={10} className="text-blue-500" /></div>
              </Button>
              <Button
                onClick={handleStartMeditation}
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-300 rounded-full px-3 py-1 text-xs"
              >
                Start Meditation
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stress Relief (updated to match design) */}
        <section className="px-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold">Quick Stress Relief</h2>
            <button
              onClick={goToSleepStories}
              className="text-blue-500 flex items-center text-xs"
            >
              View More <ArrowRight size={12} className="ml-1" />
            </button>
          </div>

          {/* Card: Focused meditation */}
          <div className="bg-blue-50 rounded-2xl p-3 mb-3 border border-blue-100">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm font-semibold text-gray-900">Focused meditation</h3>
                <p className="text-xs text-gray-600 mb-1">Quick meditation for stress relief and focus</p>
                <div className="flex items-center text-gray-500 text-xs mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  5 Min
                </div>
              </div>
              <img src="/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png" alt="Focused meditation" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex space-x-2 mt-2">
              <Button
                onClick={() => handleWatchNow('Focused meditation', '5 Min')}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-xs flex items-center"
              >
                Watch Now <div className="ml-1 p-0.5 bg-white rounded-full"><ArrowRight size={10} className="text-blue-500" /></div>
              </Button>
              <Button
                onClick={handleStartMeditation}
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-300 rounded-full px-3 py-1 text-xs"
              >
                Start Meditation
              </Button>
            </div>
          </div>

          {/* Card: 1-Minute Reset */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-3 mb-1 text-white">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm font-semibold">Quick relaxation before picking up kids</h3>
                <div className="flex items-center text-white/80 text-xs mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  02:58 PM
                </div>
                <Button
                  onClick={handleStartMeditation}
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-3 py-1 text-xs"
                >
                  1-Minute Reset
                </Button>
              </div>
              <div className="bg-white/20 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                  <path d="M12 2C7 2 2 7 2 12s5 10 10 10 10-5 10-10S17 2 12 2z" fill="currentColor" opacity="0.15" />
                  <path d="M12 8c-2 0-4 1-4 3v5h8v-5c0-2-2-3-4-3z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Side Menu */}
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
          userName={userName}
        />

        {/* Mood Selection Dialog - only shown when user clicks the button */}
        <MoodSelectionDialog
          isOpen={showMoodSelection}
          onClose={() => setShowMoodSelection(false)}
          onSelectMood={handleMoodSelectionFromDialog}
        />



        {/* Video Popup */}
        {showVideoPopup && (
          <VideoPopup
            title={currentVideo.title}
            duration={currentVideo.duration}
            onClose={() => setShowVideoPopup(false)}
          />
        )}

        {/* Features Popup */}
        <FeaturesPopup
          isOpen={showFeaturesPopup}
          onClose={() => {
            setShowFeaturesPopup(false);
            // Show mood selection dialog after closing features popup
            // but only during the first visit to home in this session
            if (sessionStorage.getItem('home_visited') === 'true') {
              setShowMoodSelection(true);
            }
            // Trigger one-time "What's New" tip after closing
            if (sessionStorage.getItem('whats_new_tip_shown') !== 'true') {
              setShowWhatsNewTip(true);
              sessionStorage.setItem('whats_new_tip_shown', 'true');
              setTimeout(() => setShowWhatsNewTip(false), 4000);
            }
          }}
        />

        {/* Category Detail */}
        {selectedCategory && (
          <CategoryDetail
            isOpen={!!selectedCategory}
            onClose={() => setSelectedCategory(null)}
            category={selectedCategory}
          />
        )}

        {/* AI Meditation Chat */}
        <WorkingMeditationChat
          isOpen={showMeditationChat}
          onClose={() => setShowMeditationChat(false)}
        />

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
      </div>
    );
};

export default Home;
