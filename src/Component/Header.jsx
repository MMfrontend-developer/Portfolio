import React, { useState, useEffect } from 'react';

const socials = [
  { name: 'github', url: 'https://github.com/MMfrontend-developer' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-muhyideen-a84707348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'twitter', url: 'https://x.com/Muhamma10472056?t=0hvVDKgpRBeG9f_HIp0o9g&s=09' },
  { name: 'whatsapp', url: 'https://wa.me/2347083528377' },
  { name: 'envelope', url: 'mailto:mmuhyideen1234@gmail.com' },
];

const subtitle = "Frontend Developer & UI Enthusiast";
const message = "I craft modern, accessible, and engaging web experiences.\nLet’s build something amazing together!";


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
  const typedSubtitle = useTypewriter(subtitle, 100);
  const subtitleDone = typedSubtitle.length === subtitle.length;
  const typedMessage = useTypewriter(subtitleDone ? message : '', 60);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Muhammad Muhyideen</h1>
        <h2>{typedSubtitle}</h2>
        <p style={{ minHeight: 60 }}>
          {subtitleDone
            ? typedMessage.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))
            : null}
          {subtitleDone && (
            <span className="blinking-cursor">|</span>
          )}
        </p>
        <div className="header-buttons">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
      </div>
      <div className="social-links">
        {socials.map(social => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${social.name}`}></i>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;