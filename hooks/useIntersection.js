import { useState, useEffect } from "react";

export default function useIntersection(element, rootMargin) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        console.log(entry);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    const temp = element.current;
    // return () => observer.unobserve(temp);
  }, []);

  return isVisible;
}
