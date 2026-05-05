import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ data }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data ? data : ["Gestão Ágil", "Engenharia de Software", "Desenvolvedor Fullstack", "Soluções com IA", "DevOps"], // Strings to display
      typeSpeed: 100,
      backSpeed: 75,
      backDelay: 500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <div className="subtitle subtitle-typed" ref={el}></div>;
};
export default TypingAnimation;
