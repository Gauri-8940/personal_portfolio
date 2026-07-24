import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Typewriter = ({ words, speed = 100, delayBetweenWords = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Word complete, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, wordIndex, isDeleting, words, speed, delayBetweenWords]);

  return (
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        color: "primary.main",
        minHeight: "3.5rem",
        display: "flex",
        alignItems: "center",

        "&::after": {
          content: '" |"',
          animation: "blink 0.7s infinite",
          marginLeft: "0.1rem",
        },

        "@keyframes blink": {
          "0%, 49%": {
            opacity: 1,
          },
          "50%, 100%": {
            opacity: 0,
          },
        },

        "@media (max-width: 600px)": {
          variant: "h5",
        },
      }}
    >
      {displayedText}
    </Typography>
  );
};

export default Typewriter;
