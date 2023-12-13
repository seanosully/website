import React, { useEffect, useRef, useState } from 'react';
import './AnimatedText.css'; 

function AnimatedText({ text }) {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px', // margin around the root
            threshold: 1.0 // triggers when 10% of the target is visible
        };
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Optional: Stop observing after animation
                }
            });
        }, observerOptions);
    
        observer.observe(textRef.current);
    
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    
    return (
        <div ref={textRef} className={`animated-text ${isVisible ? 'animate' : ''}`}>
            {text}
        </div>
    );
}

export default AnimatedText;
