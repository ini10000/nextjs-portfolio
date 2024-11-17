// hooks/useSound.ts
import { useCallback } from "react";

const useSound = (src: string): (() => void) => {
  const playSound = useCallback(() => {
    const audio = new Audio(src);

    // Try to play the sound and catch any errors if playback fails
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  }, [src]);

  return playSound;
};

export default useSound;
