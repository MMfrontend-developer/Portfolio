import React, { useState, useEffect } from 'react';

const socials = [
  { name: 'github', url: 'https://github.com/MMfrontend-developer' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-muhyideen-a84707348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'twitter', url: 'https://x.com/Muhamma10472056?t=0hvVDKgpRBeG9f_HIp0o9g&s=09' },
  { name: 'whatsapp', url: 'https://wa.me/2347083528377' },
  { name: 'envelope', url: 'mailto:mmuhyideen1234@gmail.com' },
];

const subtitle = "Software Developer • UI Enthusiast • Problem Solver";
const message =
  "I design and build modern, accessible, and impactful web experiences that delight users and drive results.\nLet's collaborate and turn your ideas into reality!";

function useTypewriter(text, speed = 40) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const Header = () => {
  const typedSubtitle = useTypewriter(subtitle, 80);
  const subtitleDone = typedSubtitle.length === subtitle.length;
  const typedMessage = useTypewriter(subtitleDone ? message : '', 30);

return (
  <header id="header"
    className="header"
    style={{
      background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Decorative SVG or gradient overlay for extra flair */}
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fill="#007bff"
        fillOpacity="0.12"
        d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div
      className="header-content"
      style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        color: 'white'
      }}
    >
      {/* <div className="profile-img">
        <img
          src="/professional profile picture.jpg"
          alt="Muhammad Muhyideen"
            style={{
              width: 110,
              height: 110,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #007bff',
              marginBottom: 18,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
            }}
          />
        </div> */}
        <h1 style={{ fontWeight: 700, fontSize: '2.5rem', marginBottom: 8 }}>
          Hi, I'm Muhammad Muhyideen
        </h1>
        <h2 style={{ color: 'white', fontWeight: 500, fontSize: '1.3rem', marginBottom: 16 }}>
          {typedSubtitle}
          <span className="blinking-cursor" />
        </h2>
        <p style={{ minHeight: 90, fontSize: '1.1rem', color: '#ffff', marginBottom: 24 }}>
          {subtitleDone
            ? typedMessage.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))
            : null}
        </p>
        <div className="header-buttons" style={{ marginBottom: 18 }}>
          <a href="#contact" className="btn btn-primary" style={{ marginRight: 12 }}>
            <i className="fas fa-paper-plane" style={{ marginRight: 10 }}></i>
            Contact Me
          </a>
          <a href="#projects" className="btn btn-secondary">
            <i className="fas fa-briefcase" style={{ marginRight: 6 }}></i>
            View My Work
          </a>
        </div>
        <div className="social-links" style={{ marginTop: 50 }}>
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: '0 10px',
                color: '#ffff',
                fontSize: 22,
                transition: 'color 0.2s'
              }}
              title={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
            >
              <i className={`fa${social.name === 'envelope' ? 's' : 'b'} fa-${social.name}`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;