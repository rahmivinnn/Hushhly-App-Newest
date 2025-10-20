import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface MoodOption {
  emoji: string;
  label: string;
  value: string;
}

interface MoodSelectorProps {
  onSelect: (mood: string) => void;
}

const STREAK_KEY = 'hushhly_streak';

const getTodayStr = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const getYesterdayStr = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const readStreak = () => {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { count: 0, lastDate: '' };
    const parsed = JSON.parse(raw);
    return { count: parsed.count || 0, lastDate: parsed.lastDate || '' };
  } catch {
    return { count: 0, lastDate: '' };
  }
};

const writeStreak = (count: number, lastDate: string) => {
  localStorage.setItem(STREAK_KEY, JSON.stringify({ count, lastDate }));
};

const updateStreakOnAction = () => {
  const { count, lastDate } = readStreak();
  const today = getTodayStr();
  const yesterday = getYesterdayStr();

  if (lastDate === today) {
    // no change if already active today
    return count;
  }
  if (lastDate === yesterday) {
    const next = count + 1;
    writeStreak(next, today);
    return next;
  }
  // reset streak
  writeStreak(1, today);
  return 1;
};

const prompts = [
  'How are you feeling right now?',
  'How’s your mood today?',
  'Choose your mood — we’ll tailor the experience.',
  'What do you need right now?',
  'Looking to relax, focus, or find calm?',
  'How’s your energy today?',
  'New: Smarter mood-based recommendations',
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [streak, setStreak] = useState<number>(readStreak().count);
  const [prompt, setPrompt] = useState<string>('How are you feeling right now?');

  useEffect(() => {
    const pick = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(pick);
  }, []);
  
  const moods: MoodOption[] = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😌', label: 'Calm', value: 'calm' },
    { emoji: '😔', label: 'Sad', value: 'sad' },
    { emoji: '😰', label: 'Anxious', value: 'anxious' },
    { emoji: '😴', label: 'Tired', value: 'tired' },
    { emoji: '🙏', label: 'Grateful', value: 'grateful' },
    { emoji: '🤔', label: 'Confused', value: 'confused' },
    { emoji: '😤', label: 'Frustrated', value: 'frustrated' },
    { emoji: '🧠', label: 'Need Focus', value: 'focus' },
    { emoji: '💪', label: 'Motivated', value: 'motivated' },
    { emoji: '❤️', label: 'Loving', value: 'loving' },
    { emoji: '🌱', label: 'Growing', value: 'growing' },
  ];

  const handleSelect = (mood: string) => {
    setSelectedMood(mood);
    const next = updateStreakOnAction();
    setStreak(next);
    onSelect(mood);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Streak badge */}
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm shadow-sm">
          <Flame size={16} className="text-amber-300" />
          <span className="font-medium">Streak</span>
          <span className="font-bold">{streak} day{streak === 1 ? '' : 's'}</span>
        </div>
      </motion.div>

      {/* Modern prompt */}
      <h3 className="text-white text-lg mb-4 text-center font-semibold">
        {prompt}
      </h3>
      
      {/* Emoji Mood Selector with modern cards */}
      <div className="grid grid-cols-4 gap-3">
        {moods.map((mood) => (
          <motion.button
            key={mood.value}
            onClick={() => handleSelect(mood.value)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all backdrop-blur-sm shadow-sm border border-white/10 ${
              selectedMood === mood.value 
                ? 'bg-white/30 ring-2 ring-white' 
                : 'bg-white/10 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="text-3xl mb-1 drop-shadow-sm">{mood.emoji}</span>
            <span className="text-white text-[11px] opacity-90">{mood.label}</span>
          </motion.button>
        ))}
      </div>
      
      {/* Mood Intensity Slider - Optional */}
      {selectedMood && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-sm mb-2 text-center">How intense does this feel?</p>
          <input 
            type="range" 
            min="1" 
            max="10" 
            defaultValue="5"
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-white/70 text-xs mt-1">
            <span>Light</span>
            <span>Moderate</span>
            <span>Strong</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MoodSelector;
