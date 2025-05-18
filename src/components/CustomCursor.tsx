
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isHoverable =
        hoveredElement &&
        (hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.tagName === "INPUT" ||
          hoveredElement.tagName === "TEXTAREA" ||
          hoveredElement.getAttribute("role") === "button");

      setIsPointer(isHoverable || false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", updateCursorType);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", updateCursorType);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [position.x, position.y]);

  return (
    <div
      className={`custom-cursor ${isPointer ? "scale-150" : ""} ${
        isClicking ? "scale-75" : ""
      } ${isHidden ? "opacity-0" : "opacity-100"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 0.15s ease-out, opacity 0.3s ease",
      }}
    />
  );
};

export default CustomCursor;
