import { useState, useEffect, useRef } from 'react';
import './styles.scss';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // handle de video y evento
      const handleVideoEnd = () => {
        setVideoEnded(true);
        setTimeout(() => {
          onComplete();
        }, 300); // Small delay for fade out animation
      };
      
      video.addEventListener('ended', handleVideoEnd);
      
      // autoplay
      video.play().catch(error => {
        console.error('Error playing video:', error);
        // If video can't play, skip to completion
        onComplete();
      });
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [onComplete]);

  return (
    <div className={`splash-screen ${videoEnded ? 'splash-screen--fade-out' : ''}`}>
      <video 
        ref={videoRef}
        className="splash-screen__video"
        src="/AnimacionMarvel.webm"
        muted
        playsInline
      >
        <source src="/AnimacionMarvel.webm" type="video/webm" />
        Tu navegador no soporta videos.
      </video>
    </div>
  );
};

export default SplashScreen; 