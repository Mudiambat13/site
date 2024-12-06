import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import '../assets/css/Home.css';

export default function Home() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descRef = useRef(null);
    const socialRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Animation du titre
        gsap.fromTo(titleRef.current, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

        // Animation du sous-titre
        gsap.fromTo(subtitleRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" });

        // Animation de la description
        gsap.fromTo(descRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" });

        // Animation des icônes sociales
        gsap.fromTo(socialRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" });

        // Animation de l'image
        gsap.fromTo(imageRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: "back.out(1.7)" });
    }, []);

    return (
        <div className="home-container">
            <div className="profile-section">
                <div className="profile-image" ref={imageRef}>
                    <img src="/assets/img/profile.jpeg" alt="Profile" />
                </div>
                <h1 ref={titleRef}>Jonathan Code</h1>
                <h2 ref={subtitleRef}>Python developer & data analytics</h2>
                <p ref={descRef}>
                    I&apos;m a passionate Python developer & data analytics,
                    living in Democratic Republic of congo (DRC).
                    focused on data analytics and machine learning
                </p>
                <div className="social-links" ref={socialRef}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}