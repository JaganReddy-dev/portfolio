"use client";
import { useState, useEffect } from "react";

const Typewriter = ({ tech }) => {
  const fullText = tech.join(", ");
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
      } else {
        setCursor(false);
        clearInterval(type);
      }
    }, 50);

    return () => clearInterval(type);
  }, [fullText]);

  return (
    <div className="relative">
      {/* Invisible text to reserve space */}
      <p className="text-lg font-mono invisible" aria-hidden="true">
        {fullText}
      </p>
      {/* Visible typewriter text positioned absolutely */}
      <p className="text-lg font-mono absolute top-0 left-0">
        {displayed}
        {cursor && <span className="animate-pulse">|</span>}
      </p>
    </div>
  );
};

export default Typewriter;
