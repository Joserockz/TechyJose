import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, X, Cpu, Server, CheckCircle, HelpCircle, ShieldAlert } from 'lucide-react';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const tags = ['All', 'Infrastructure', 'Virtualization', 'Cloud', 'Automation'];

  const projects = [
    {
      title: "Enterprise Infrastructure Modernization",
      description: "Deployed core server racks, network switches, and firewalls to secure communications and eliminate packet loss.",
      category: "Infrastructure",
      tech: ["Core Servers", "Switches & Firewalls", "Wireshark", "Jira", "Resource Monitor"],
      challenge: "The client suffered from unexpected latency spikes and packet drops during trade times, hindering user connectivity.",
      architecture: [
        { label: "Client Request", color: "var(--accent-cyan)" },
        { label: "Enterprise Firewall", color: "var(--accent-pink)" },
        { label: "Core Layer-3 Switch", color: "var(--accent-purple)" },
        { label: "Internal Server Clusters", color: "var(--accent-cyan)" }
      ],
      outcome: "Installed and configured hardware nodes, optimizing system throughput. Reduced network latency by 35% and achieved zero packet drops.",
      github: "https://github.com/Joserockz"
    },
    {
      title: "Hyper-V Consolidation Engine",
      description: "Consolidated physical server environments into isolated Hyper-V clusters, establishing automated backup scripts.",
      category: "Virtualization",
      tech: ["Hyper-V", "Windows Server", "Active Directory", "Backup Tools", "PowerShell"],
      challenge: "High operations costs due to physical server sprawl, hosting individual network services on separate physical machines.",
      architecture: [
        { label: "Hardware Host", color: "var(--accent-pink)" },
        { label: "Hyper-V Virtualizer", color: "var(--accent-purple)" },
        { label: "VM Server Nodes", color: "var(--accent-cyan)" },
        { label: "Domain Controllers", color: "var(--accent-cyan)" }
      ],
      outcome: "Virtualized 15 legacy physical servers into 3 scalable Hyper-V physical host configurations. Reduced server hosting hardware utility bills by 60%.",
      github: "https://github.com/Joserockz"
    },
    {
      title: "Microsoft 365 & Entra ID Sync",
      description: "Migrated legacy on-premise email databases to Microsoft 365 Exchange Online and connected user identities via Entra ID.",
      category: "Cloud",
      tech: ["Microsoft 365", "Entra ID (Azure AD)", "Exchange Online", "Active Directory"],
      challenge: "On-premises Exchange server databases hit capacity bounds and lacked modern Multi-Factor Authentication (MFA) rules.",
      architecture: [
        { label: "Local AD Account", color: "var(--accent-cyan)" },
        { label: "Entra ID Directory Sync", color: "var(--accent-purple)" },
        { label: "M365 Exchange Online", color: "var(--accent-cyan)" },
        { label: "Conditional Access MFA", color: "var(--accent-pink)" }
      ],
      outcome: "Successfully migrated 300+ corporate mailboxes with zero email loss. Activated centralized Single Sign-On (SSO) and strict access policies.",
      github: "https://github.com/Joserockz"
    },
    {
      title: "Workstation Deployment Automation",
      description: "Designed a centralized system imaging framework using Acronis to automate OS installation and software setups.",
      category: "Automation",
      tech: ["Acronis Imaging", "System Deployment", "PXE Boot", "DHCP Services", "Windows OS"],
      challenge: "IT support engineers spent over 2 hours manually installing drivers, applications, and operating systems for each employee workstation.",
      architecture: [
        { label: "Laptop PXE Request", color: "var(--accent-cyan)" },
        { label: "DHCP Server Hook", color: "var(--accent-purple)" },
        { label: "Acronis Deployment Server", color: "var(--accent-cyan)" },
        { label: "Fully Imaged OS Target", color: "var(--accent-pink)" }
      ],
      outcome: "Reduced employee laptop pre-configuration times from 2 hours to 15 minutes. Eliminated setup human errors by introducing standardized master images.",
      github: "https://github.com/Joserockz"
    }
  ];

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = activeTag === 'All' || project.category === activeTag;

    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Systems integration, cloud directory migration, and infrastructure automation deployments.
          </p>
        </div>

        {/* Search & Tag Filter Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }} className="projects-controls-container">
          
          {/* Tag filters */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  background: activeTag === tag ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.02)',
                  color: activeTag === tag ? '#05050a' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: activeTag === tag ? 'transparent' : 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '30px',
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.85rem',
                  fontWeight: activeTag === tag ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search input field */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '300px'
          }} className="search-box-wrapper">
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '30px',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-cyan)';
                e.target.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <Search size={16} style={{
              position: 'absolute',
              left: '0.9rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }} />
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card animate-fade-in"
              style={{
                display: 'flex',
                flexDirection: 'column',
                animationDelay: `${0.1 * index}s`,
                minHeight: '380px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: 'rgba(0, 240, 255, 0.08)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '30px'
                }}>
                  {project.category}
                </span>
                <Cpu size={18} style={{ color: 'var(--text-muted)' }} />
              </div>

              <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                {project.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '8px',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                View Architecture & Outcomes
              </button>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No projects match your current filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Case Study / Architecture Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-pink)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <X size={24} />
            </button>

            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              {selectedProject.category} Case Study
            </span>

            <h3 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
              {selectedProject.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Problem/Challenge */}
              <div>
                <h4 style={{ color: 'var(--accent-pink)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={18} />
                  The Operational Challenge
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Architecture Blueprint Block */}
              <div>
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Server size={18} />
                  Infrastructure Deployment Flow
                </h4>
                <div style={{
                  background: 'rgba(5, 5, 10, 0.5)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }} className="architecture-diagram">
                  {selectedProject.architecture.map((node, idx) => (
                    <React.Fragment key={idx}>
                      <div style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid ${node.color}`,
                        boxShadow: `0 0 10px ${node.color}20`,
                        padding: '0.6rem 1.2rem',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}>
                        {node.label}
                      </div>
                      {idx < selectedProject.architecture.length - 1 && (
                        <div style={{
                          color: 'var(--text-muted)',
                          fontSize: '1.2rem',
                          fontWeight: 700
                        }} className="diagram-arrow">
                          →
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h4 style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={18} />
                  Measurable Outcomes
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                  {selectedProject.outcome}
                </p>
              </div>

              {/* Footer Links */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '1.5rem',
                marginTop: '1rem'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
                >
                  View Code Source <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .architecture-diagram {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .diagram-arrow {
            text-align: center !important;
            transform: rotate(90deg) !important;
            margin: 0.2rem 0 !important;
          }
          .modal-content {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
