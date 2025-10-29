import React from 'react';
import LottieAnimation from './LottieAnimation';
import { getLottieAnimation } from '@/data/lottieAnimations';

interface LoadingAnimationProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  message = "Loading...", 
  size = 'medium',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <LottieAnimation
        animationData={getLottieAnimation('breathing-circle')}
        className={sizeClasses[size]}
        loop={true}
        autoplay={true}
      />
      <p className="text-gray-600 mt-4 text-sm">{message}</p>
    </div>
  );
};

export default LoadingAnimation;



