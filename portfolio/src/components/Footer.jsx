import { useEffect, useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import '../assets/css/Footer.css';

function Footer() {
  const footerRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Animation du footer
    gsap.fromTo(footerRef.current,
      { 
        y: 100,
        opacity: 0 
      },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Animation des icônes sociales
    iconsRef.current.forEach((icon, index) => {
      gsap.fromTo(icon,
        { 
          scale: 0,
          opacity: 0 
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.2 * index,
          ease: "back.out(1.7)"
        }
      );
    });
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="social-icons">
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp ref={el => iconsRef.current[0] = el} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook ref={el => iconsRef.current[1] = el} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok ref={el => iconsRef.current[2] = el} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub ref={el => iconsRef.current[3] = el} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin ref={el => iconsRef.current[4] = el} />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 