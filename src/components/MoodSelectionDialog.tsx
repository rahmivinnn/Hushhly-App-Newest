import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MoodIcon from './MoodIcon';
import MoodSelector from './MoodSelector';
import { motion, AnimatePresence } from "framer-motion";
import confetti from 'canvas-confetti';

interface MoodSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMood: (mood: 'overwhelmed' | 'calm' | 'exhausted' | 'anxious' | 'tired') => void;
}

const MoodSelectionDialog: React.FC<MoodSelectionDialogProps> = ({
  isOpen,
  onClose,
  onSelectMood
}) => {
  const [hoveredMood, setHoveredMood] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  const handleSelectMood = (mood: 'overwhelmed' | 'calm' | 'exhausted' | 'anxious' | 'tired') => {
    setSelectedMood(mood);

    // Confetti burst to emphasize the new mood-tuning experience
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });

    // Wait a moment before closing the dialog
    setTimeout(() => {
      onSelectMood(mood);
      onClose();

      // Reset state after dialog closes
      setTimeout(() => {
        setSelectedMood(null);
        setShowConfetti(false);
      }, 500);
    }, 800);
  };

  // Map MoodSelector values to dialog mood types used by Home
  const handleSelectFromNewSelector = (mood: string) => {
    let mapped: 'overwhelmed' | 'calm' | 'exhausted' | 'anxious' | 'tired' = 'calm';
    switch (mood) {
      case 'anxious':
        mapped = 'anxious';
        break;
      case 'tired':
        mapped = 'tired';
        break;
      case 'sad':
      case 'confused':
      case 'frustrated':
        mapped = 'overwhelmed';
        break;
      case 'focus':
      case 'motivated':
        mapped = 'overwhelmed';
        break;
      case 'happy':
      case 'grateful':
      case 'loving':
      case 'growing':
      case 'calm':
      default:
        mapped = 'calm';
        break;
    }
    handleSelectMood(mapped);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-2xl border-0 bg-white shadow-lg overflow-hidden p-0 z-[100]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <DialogHeader className="mb-0 p-6 pb-4">
            <motion.div variants={titleVariants}>
              <DialogTitle className="text-center text-xl font-bold text-gray-800">
                How are you feeling today?
              </DialogTitle>
              <div className="mt-2 flex items-center justify-center">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">New</span>
                <span className="ml-2 text-xs text-gray-500">Smarter mood-based recommendations</span>
              </div>
            </motion.div>
          </DialogHeader>

          {/* Modern MoodSelector embedded with gradient background for contrast */}
          <div className="p-4">
            <div className="rounded-xl overflow-hidden">
              <div className="bg-gradient-to-b from-purple-700 to-indigo-800 p-4">
                <MoodSelector onSelect={handleSelectFromNewSelector} />
              </div>
            </div>
          </div>

          {/* Animated message when a mood is selected */}
          <AnimatePresence>
            {selectedMood && (
              <motion.div
                className="mt-2 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600">Thank you for sharing how you feel!</p>
                <p className="text-gray-600 text-sm mt-1">Mood‑tuned recommendations applied. Personalizing your experience...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default MoodSelectionDialog;
