import { ScrollShadow } from "@heroui/react";
import { useCallback, useEffect, useRef, useState } from "react";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  scrollSpeed?: number; // pixels per frame
};

export default function Carousel({
  children,
  className = "",
  scrollSpeed = 2,
}: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check if we can scroll in either direction
  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
  }, []);

  // Set up scroll checking
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollability();
    el.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);

    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  // Handle the scrolling animation
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let animationFrameId: number;
    const scroll = () => {
      if (isLeftHovered && canScrollLeft) {
        el.scrollLeft -= scrollSpeed;
      } else if (isRightHovered && canScrollRight) {
        el.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    if (isLeftHovered || isRightHovered) {
      animationFrameId = requestAnimationFrame(scroll);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    isLeftHovered,
    isRightHovered,
    canScrollLeft,
    canScrollRight,
    scrollSpeed,
  ]);

  return (
    <div className="relative w-full">
      {/* Left scroll trigger */}
      {canScrollLeft && (
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 cursor-pointer"
          onMouseEnter={() => setIsLeftHovered(true)}
          onMouseLeave={() => setIsLeftHovered(false)}
        />
      )}

      {/* Right scroll trigger */}
      {canScrollRight && (
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 cursor-pointer"
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
        />
      )}

      <ScrollShadow
        orientation="horizontal"
        className={`w-full ${className}`}
        hideScrollBar
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-4 pb-4 overflow-x-auto hide-scrollbar"
        >
          {children}
        </div>
      </ScrollShadow>
    </div>
  );
}
