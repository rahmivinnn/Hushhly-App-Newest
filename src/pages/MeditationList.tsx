import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Grid, List, Clock, Users, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNavigation from '@/components/BottomNavigation';
import LottieAnimation from '@/components/LottieAnimation';
import LoadingAnimation from '@/components/LoadingAnimation';
import { meditationData, meditationCategories, searchMeditations } from '@/data/meditationData';
import { getLottieAnimation } from '@/data/lottieAnimations';
import { useToast } from "@/hooks/use-toast";

const MeditationList: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredMeditations, setFilteredMeditations] = useState(meditationData);
  const [isLoading, setIsLoading] = useState(false);

  // Filter meditations based on search and category
  useEffect(() => {
    setIsLoading(true);
    
    let filtered = meditationData;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(meditation => meditation.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      filtered = searchMeditations(searchQuery);
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(meditation => meditation.category === selectedCategory);
      }
    }
    
    setFilteredMeditations(filtered);
    
    // Simulate loading delay for better UX
    setTimeout(() => setIsLoading(false), 300);
  }, [searchQuery, selectedCategory]);

  const handleMeditationClick = (meditation: any) => {
    navigate('/category-meditation', {
      state: {
        title: meditation.title,
        category: meditation.category,
        duration: meditation.duration
      }
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const MeditationCard = ({ meditation, index }: { meditation: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => handleMeditationClick(meditation)}
      className={`${viewMode === 'grid' ? 'w-full' : 'w-full flex items-center space-x-4'} bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden`}
    >
      {viewMode === 'grid' ? (
        <div className="p-4">
          <div className="relative mb-4">
            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <motion.span
                className="text-4xl"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {meditation.icon}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Lottie Animation */}
              {meditation.lottieAnimation && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LottieAnimation
                    animationData={getLottieAnimation(meditation.lottieAnimation)}
                    className="w-16 h-16 opacity-60"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              )}
            </div>
            <div className="absolute top-2 right-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(meditation.difficulty)}`}>
                {meditation.difficulty}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800 line-clamp-2">{meditation.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{meditation.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{meditation.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={14} />
                <span>{meditation.listeners} • synced just now</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {meditation.tags.slice(0, 3).map((tag: string, idx: number) => (
                <motion.span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center relative overflow-hidden flex-shrink-0">
            <motion.span
              className="text-2xl"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {meditation.icon}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Lottie Animation */}
            {meditation.lottieAnimation && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LottieAnimation
                  animationData={getLottieAnimation(meditation.lottieAnimation)}
                  className="w-8 h-8 opacity-60"
                  loop={true}
                  autoplay={true}
                />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-800 truncate">{meditation.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(meditation.difficulty)} ml-2 flex-shrink-0`}>
                {meditation.difficulty}
              </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-1 mb-2">{meditation.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{meditation.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={14} />
                  <span>{meditation.listeners} • synced just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Meditation Library</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search meditations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === 'All' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All ({meditationData.length})
            </button>
            {meditationCategories.map((category) => {
              const count = meditationData.filter(m => m.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingAnimation message="Loading meditations..." size="medium" />
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredMeditations.length} meditation{filteredMeditations.length !== 1 ? 's' : ''} found • synced just now
              </p>
            </div>
            
            <AnimatePresence>
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4' : 'space-y-2 sm:space-y-3'}`}>
                {filteredMeditations.map((meditation, index) => (
                  <MeditationCard key={meditation.id} meditation={meditation} index={index} />
                ))}
              </div>
            </AnimatePresence>
            
            {filteredMeditations.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No meditations found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default MeditationList;
