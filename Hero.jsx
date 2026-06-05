import React, { useState, useEffect } from 'react';
import { Cloud, Server, Shield, Cpu } from 'lucide-react';

const Hero = () => {
  const roles = ['Cloud Architect', 'DevOps Engineer', 'IT Solutions Consultant', 'Full-Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 2500;

    if (!isDeleting && currentText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentFullText.substring(0, currentText.length - 1)
            : currentFullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleCTA = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const metrics = [
    { label: 'Cloud Migrations', value: '50+', icon: <Cloud size={18} style={{ color: 'var(--accent-cyan)' }} /> },
    { label: 'System Uptime', value: '99.99%', icon: <Server size={18} style={{ color: 'var(--accent-purple)' }} /> },
    { label: 'Security Audits', value: '100%', icon: <Shield size={18} style={{ color: 'var(--accent-pink)' }} /> }
  ];

  return (
    <section
      id="home"
      className="section flex-center"
      style={{
        minHeight: '100vh',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Left Side text and information */}
        <div className="animate-fade-in" style={{ zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            padding: '0.4rem 1rem',
            borderRadius: '30px',
            color: 'var(--accent-cyan)',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '1.5rem'
          }}>
            <Cpu size={14} className="animate-float" />
            Infrastructure Specialist
          </div>

          <h1 style={{
            fontSize: '3.6rem',
            marginBottom: '1.5rem',
            lineHeight: '1.15',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700
          }}>
            Hi, I'm <span className="text-gradient">Josemon Placid</span>
            <br />
            <span style={{ fontSize: '2.5rem', color: 'var(--text-secondary)' }}>
              I am a <span className="typewriter" style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{currentText}</span>
            </span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.15rem',
            marginBottom: '2.5rem',
            maxWidth: '580px',
            lineHeight: '1.7'
          }}>
            I architect resilient cloud platforms, streamline complex CI/CD pipelines, and deploy robust microservices. Let's optimize your enterprise systems and drive seamless technical sales.
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleCTA('projects')}
              className="btn btn-primary"
            >
              Explore My Projects
            </button>
            <button
              onClick={() => handleCTA('contact')}
              className="btn btn-outline"
            >
              Let's Consult
            </button>
          </div>

          {/* Key IT Achievements Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }} className="hero-metrics-grid">
            {metrics.map((metric, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  position: 'relative'
                }}
                className="metric-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)'
                  }}>{metric.value}</span>
                  {metric.icon}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side visual image display */}
        <div className="animate-fade-in delay-2 flex-center" style={{ position: 'relative', width: '100%' }}>
          {/* Neon accent glows */}
          <div style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
            top: '10%',
            left: '10%',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
            bottom: '10%',
            right: '10%',
            zIndex: 0
          }}></div>

          {/* Floating Cyber Frame */}
          <div style={{
            position: 'relative',
            width: '320px',
            height: '320px',
            zIndex: 2,
          }} className="animate-float">
            {/* Outer rotating/glowing edge */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: '50%',
              border: '2px dashed rgba(0, 240, 255, 0.4)',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)',
              animation: 'spin 40s linear infinite',
              zIndex: 1
            }}></div>

            {/* Profile image wrapper */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              zIndex: 2,
              background: 'var(--bg-secondary)'
            }}>
              <img
                src="./profile.png"
                alt="Josemon Placid Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(15%)'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Micro Badge Overlay 1 */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '-20px',
              background: 'rgba(10, 10, 20, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '12px',
              padding: '0.6rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
              zIndex: 3
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} className="pulse"></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>Available for Projects</span>
            </div>

            {/* Micro Badge Overlay 2 */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-30px',
              background: 'rgba(10, 10, 20, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(138, 43, 226, 0.3)',
              borderRadius: '12px',
              padding: '0.6rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
              zIndex: 3
            }}>
              <Cloud size={16} style={{ color: 'var(--accent-purple)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>AWS Architect</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .pulse {
          animation: pulseGlow 1.8s infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 240, 255, 0.2);
        }
        @media (max-width: 900px) {
          #home .container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          #home .container > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-metrics-grid {
            width: 100%;
            max-width: 500px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 2.5rem !important;
          }
          h1 span {
            font-size: 1.8rem !important;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
