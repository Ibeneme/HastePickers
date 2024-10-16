import { useEffect, useRef } from "react";

const ScrollingBanner = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return; // Ensure banner is not null

    let startPosition = banner.scrollWidth;

    const scrollBanner = () => {
      startPosition -= 2; // Adjust the speed by changing the number
      if (startPosition < -banner.scrollWidth) {
        startPosition = window.innerWidth; // Reset to the right side of the screen
      }
      banner.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(scrollBanner);
    };

    scrollBanner();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#FFD700",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "10px 0",
      }}
    >
      <div
        ref={bannerRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          color: "#030C21",
          fontWeight: "bold",
          fontSize: "16px",
          paddingLeft: "100%", // Start off the screen
        }}
      >
        Services - Only in Port Harcourt, Nigeria 🇳🇬
      </div>
    </div>
  );
};

export default ScrollingBanner;