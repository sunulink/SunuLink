import React from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
