import React from 'react'
import  { useState } from "react";
import './ScrollTop.css'
import { IoMdArrowUp } from "react-icons/io";
export default function ScrollTop() {
      const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.onscroll = handleScroll;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <button
    onClick={scrollToTop}
    className={`scroll-to-top ${isVisible ? "Scroll-show" : ""}`}
>
    <IoMdArrowUp className="ScrollArrow" />
</button>
  )
}
