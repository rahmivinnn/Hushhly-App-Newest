import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  direction?: 1 | -1;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  onEnterFrame?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
  speed = 1,
  direction = 1,
  onComplete,
  onLoopComplete,
  onEnterFrame,
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      speed={speed}
      direction={direction}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
      onEnterFrame={onEnterFrame}
    />
  );
};

export default LottieAnimation;



