import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 150}px`;
        glowRef.current.style.top = `${e.clientY - 150}px`;
        glowRef.current.style.opacity = "0.6";
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box
      ref={glowRef}
      sx={{
        position: "fixed",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0, 184, 217, 0.3) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 0.3s ease",
        zIndex: 0,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default MouseGlow;
