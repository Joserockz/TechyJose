import React, { useState } from 'react';
import { Award, Briefcase, BookOpen, Settings } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'systems', label: 'Systems & OS' },
    { id: 'cloud', label: 'Cloud & Directory' },
    { id: 'network', label: 'Network & Security' },
    { id: 'tools', label: 'ITSM & Automation' }
  ];

  const skills = [
    // Systems & OS
    { name: 'Windows Server 2016/2019/2022', category: 'systems', level: 93, glow: 'rgba(0, 120, 212, 0.4)' },
    { name: 'Hyper-V Virtualization', category: 'systems', level: 90, glow: 'rgba(46, 204, 113, 0.4)' },
    { name: 'Linux System Administration', category: 'systems', level: 85, glow: 'rgba(230, 126, 34, 0.4)' },
    { name: 'Hardware (Desktops, Laptops, Printers)', category: 'systems', level: 95, glow: 'rgba(241, 196, 15, 0.4)' },
    
    // Cloud & Directory
    { name: 'Active Directory (On-Prem)', category: 'cloud', level: 94, glow: 'rgba(52, 152, 219, 0.4)' },
    { name: 'Entra ID (Azure AD)', category: 'cloud', level: 88, glow: 'rgba(142, 68, 173, 0.4)' },
    { name: 'Microsoft 365 Exchange Online', category: 'cloud', level: 92, glow: 'rgba(0, 120, 212, 0.4)' },
    { name: 'Cisco Spaces Cloud platform', category: 'cloud', level: 82, glow: 'rgba(0, 240, 255, 0.4)' },

    // Network & Security
    { name: 'DNS & DHCP Configuration', category: 'network', level: 91, glow: 'rgba(50, 108, 230, 0.4)' },
    { name: 'FortiClient VPN & Endpoints', category: 'network', level: 88, glow: 'rgba(231, 76, 60, 0.4)' },
    { name: 'Network Troubleshooting (Wireshark)', category: 'network', level: 85, glow: 'rgba(211, 84, 0, 0.4)' },
    { name: 'Cybersecurity Fundamentals (Cisco)', category: 'network', level: 84, glow: 'rgba(46, 204, 113, 0.4)' },

    // ITSM & Automation
    { name: 'ServiceNow ITSM Ticketing', category: 'tools', level: 92, glow: 'rgba(50, 108, 230, 0.4)' },
    { name: 'Acronis System OS Imaging', category: 'tools', level: 90, glow: 'rgba(0, 120, 212, 0.4)' },
    { name: 'Jira & Zendesk Helpdesk', category: 'tools', level: 88, glow: 'rgba(142, 68, 173, 0.4)' },
    { name: 'PowerShell & CMD Scripting', category: 'tools', level: 80, glow: 'rgba(241, 196, 15, 0.4)' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            About <span className="text-gradient">Josemon Placid</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            An overview of my professional IT philosophy, core expertise, and technology matrix.
          </p>
        </div>

        {/* Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          alignItems: 'flex-start'
        }} className="about-grid">

          {/* Left Column: Biography */}
          <div className="glass-card animate-fade-in delay-1" style={{ padding: '3rem 2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award style={{ color: 'var(--accent-cyan)' }} />
              Systems Admin & Technical Support
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              I am an experienced IT support professional specializing in deploying server infrastructure, administering user directories (Active Directory & Entra ID), and managing virtualization environments.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              My focus is on minimizing business downtime, keeping operations secure, and utilizing automation tools like Acronis system imaging and PowerShell to speed up repeat service desk operations.
            </p>

            {/* Quick Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ 
                  background: 'rgba(0, 240, 255, 0.1)', 
                  padding: '0.6rem', 
                  borderRadius: '12px', 
                  display: 'flex' 
                }}>
                  <Briefcase size={20} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>6+ Years</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Active Experience</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ 
                  background: 'rgba(138, 43, 226, 0.1)', 
                  padding: '0.6rem', 
                  borderRadius: '12px', 
                  display: 'flex' 
                }}>
                  <BookOpen size={20} style={{ color: 'var(--accent-purple)' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>5+ Certs</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>IT & Security Badges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="animate-fade-in delay-2">
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              fontFamily: 'var(--font-display)'
            }}>
              <Settings style={{ color: 'var(--accent-purple)' }} className="spin-slow" />
              Technical Core & Competencies
            </h3>

            {/* Category tabs */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.6rem', 
              marginBottom: '2rem' 
            }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    background: activeTab === cat.id 
                      ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))'
                      : 'rgba(255, 255, 255, 0.03)',
                    color: activeTab === cat.id ? '#05050a' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: activeTab === cat.id ? 'transparent' : 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '30px',
                    padding: '0.5rem 1.2rem',
                    fontSize: '0.85rem',
                    fontWeight: activeTab === cat.id ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={(e) => {
                    if (activeTab !== cat.id) {
                      e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== cat.id) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skills grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.2rem',
              maxHeight: '420px',
              overflowY: 'auto',
              paddingRight: '8px'
            }} className="skills-scroll-container">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 0 10px rgba(0, 0, 0, 0.1)`
                  }}
                  className="skill-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = skill.glow.replace('0.4', '0.6');
                    e.currentTarget.style.boxShadow = `0 8px 20px ${skill.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                  
                  {/* Gauge Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '6px', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: `${skill.level}%`, 
                        height: '100%', 
                        background: `linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))`,
                        borderRadius: '3px'
                      }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, width: '28px', textAlign: 'right' }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .spin-slow {
          animation: spin 12s linear infinite;
        }
        .skills-scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .skills-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 3px;
        }
        .skills-scroll-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
        }
        .skills-scroll-container::-webkit-scrollbar-thumb:hover {
          background: var(--accent-cyan);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
