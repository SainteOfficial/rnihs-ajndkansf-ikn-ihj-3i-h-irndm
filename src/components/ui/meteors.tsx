import { cn } from "../../lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => {
        // Generate random travel distances for each meteor
        const travelX = Math.floor(Math.random() * (1200 - 600) + 600);
        const travelY = Math.floor(Math.random() * (500 - 200) + 200);
        const tailLength = Math.floor(Math.random() * (80 - 30) + 30);
        
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute top-1/2 left-1/2 rounded-[9999px] bg-slate-300 shadow-[0_0_0_1px_#ffffff20] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              top: Math.floor(Math.random() * -10) + "px",
              left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
              "--meteor-travel-x": travelX + "px",
              "--meteor-travel-y": travelY + "px",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
              width: Math.random() * 1 + 0.5 + "px",
              height: Math.random() * 1 + 0.5 + "px",
              opacity: Math.random() * 0.8 + 0.2,
              // Add custom styles for the tail
              "&::before": {
                width: tailLength + "px",
                height: "1px",
              }
            } as React.CSSProperties}
          ></span>
        );
      })}
    </>
  );
}; 