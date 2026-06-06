import React, { useState, useEffect, useCallback } from 'react';

interface HeroSectionProps {
  isHybrid?: boolean;
}

interface ResponsiveStyles {
  container: React.CSSProperties;
  title: React.CSSProperties;
  description: React.CSSProperties;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isHybrid = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [responsiveStyles, setResponsiveStyles] = useState<ResponsiveStyles>({
    container: {},
    title: {},
    description: {},
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get responsive styles based on window width
  const getResponsiveStyles = useCallback((): ResponsiveStyles => {
    const isMobile = windowWidth < 768;
    return {
      container: {
        paddingTop: isMobile ? '6rem' : '10rem',
        paddingBottom: isMobile ? '4rem' : '8rem',
      },
      title: {
        fontSize: isMobile ? '2rem' : '3.75rem',
        fontWeight: 'bold',
        lineHeight: 1.2,
        marginBottom: '1.5rem',
      },
      description: {
        fontSize: isMobile ? '1rem' : '1.25rem',
        color: '#e9d5ff',
        marginBottom: '2rem',
        maxWidth: '36rem',
      },
    };
  }, [windowWidth]);

  useEffect(() => {
    setResponsiveStyles(getResponsiveStyles());
  }, [getResponsiveStyles]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add keyframes animation to document
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.05); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .hover-scale:hover {
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  // Handle anchor click for smooth scroll
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      position: 'relative',
      background: 'linear-gradient(to right, #4c1d95, #3730a3, #4c1d95)',
      color: 'white',
      overflow: 'hidden',
    },
    bgPattern: {
      position: 'absolute',
      inset: 0,
      opacity: 0.1,
    },
    patternInner: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(white 2px, transparent 0)',
      backgroundSize: '40px 40px',
      backgroundPosition: '-19px -19px',
    },
    orb1: {
      position: 'absolute',
      top: '5rem',
      left: '2.5rem',
      width: '16rem',
      height: '16rem',
      backgroundColor: '#a855f7',
      borderRadius: '9999px',
      mixBlendMode: 'multiply' as const,
      filter: 'blur(48px)',
      opacity: 0.2,
      animation: 'pulse 3s ease-in-out infinite',
    },
    orb2: {
      position: 'absolute',
      bottom: '5rem',
      right: '2.5rem',
      width: '20rem',
      height: '20rem',
      backgroundColor: '#ec4899',
      borderRadius: '9999px',
      mixBlendMode: 'multiply' as const,
      filter: 'blur(48px)',
      opacity: 0.2,
      animation: 'pulse 3s ease-in-out infinite 1s',
    },
    contentWrapper: {
      maxWidth: '1280px',
      margin: '0 auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      position: 'relative',
      zIndex: 10,
    },
    contentWrapperMd: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center',
    },
    gridLg: {
      gridTemplateColumns: '1fr 1fr',
    },
    textSection: {
      transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.7s ease-out',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '9999px',
      padding: '0.25rem 1rem',
      marginBottom: '1.5rem',
      border: '1px solid rgba(168, 85, 247, 0.3)',
    },
    badgeText: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    gradientText: {
      display: 'block',
      background: 'linear-gradient(to right, #d8b4fe, #f9a8d4, #a5b4fc)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      marginBottom: '2rem',
    },
    buttonGroupSm: {
      flexDirection: 'row' as const,
    },
    primaryButton: {
      background: 'linear-gradient(to right, #a855f7, #ec4899)',
      color: 'white',
      fontWeight: 500,
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
    },
    secondaryButton: {
      background: 'transparent',
      color: 'white',
      fontWeight: 500,
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: '1px solid #c084fc',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    statsRow: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1.5rem',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    statsRowSm: {
      flexWrap: 'nowrap' as const,
      gap: '2rem',
    },
    statItem: {
      textAlign: 'center' as const,
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#d8b4fe',
    },
    statValueMd: {
      fontSize: '1.875rem',
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#e9d5ff',
    },
    statDivider: {
      display: 'none',
      width: '1px',
      height: '3rem',
      backgroundColor: '#7e22ce',
    },
    statDividerSm: {
      display: 'block',
    },
    ratingSection: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1.5rem',
      alignItems: 'center',
      marginTop: '1.5rem',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logoBox: {
      width: '3rem',
      height: '3rem',
      borderRadius: '9999px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoBoxOffset: {
      marginLeft: '-0.5rem',
    },
    logoText: {
      marginLeft: '0.75rem',
      color: '#e9d5ff',
      fontSize: '0.875rem',
    },
    stars: {
      color: '#fde047',
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    ratingText: {
      marginLeft: '0.5rem',
      color: '#e9d5ff',
      fontSize: '0.875rem',
    },
    cardSection: {
      display: 'flex',
      justifyContent: 'center',
      transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.7s ease-out 0.3s',
    },
    cardWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '28rem',
    },
    cardGlow: {
      position: 'absolute',
      inset: '-2px',
      borderRadius: '1rem',
      background: 'linear-gradient(to right, #a855f7, #ec4899)',
      opacity: 0.75,
      filter: 'blur(20px)',
      animation: 'pulse 3s ease-in-out infinite',
    },
    cardInner: {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      borderRadius: '1rem',
      padding: '1.5rem',
      overflow: 'hidden',
    },
    cardBadge: {
      background: 'linear-gradient(to right, #9333ea, #db2777)',
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      position: 'absolute',
      right: '1.5rem',
      top: '1.5rem',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
    },
    cardTitleIcon: {
      marginRight: '0.5rem',
      color: '#d8b4fe',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '0.75rem',
      fontSize: '0.875rem',
      color: '#e9d5ff',
    },
    featureCheck: {
      color: '#d8b4fe',
      marginRight: '0.5rem',
    },
    pricingSection: {
      marginTop: '1.5rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(168, 85, 247, 0.2)',
    },
    pricingHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.75rem',
    },
    pricingLabel: {
      fontSize: '0.875rem',
      color: '#e9d5ff',
    },
    discountBadge: {
      backgroundColor: '#22c55e',
      color: 'white',
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
    },
    venuePricing: {
      marginBottom: '0.5rem',
    },
    venueName: {
      fontSize: '1.25rem',
      fontWeight: 500,
      opacity: 0.9,
      marginRight: '0.5rem',
    },
    priceAmount: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    priceStrike: {
      marginLeft: '0.5rem',
      fontSize: '0.75rem',
      textDecoration: 'line-through',
      opacity: 0.7,
    },
    bookingNote: {
      fontSize: '0.75rem',
      color: '#e9d5ff',
      marginTop: '0.25rem',
    },
    infoBox: {
      marginTop: '1rem',
      backgroundColor: 'rgba(107, 33, 168, 0.3)',
      borderRadius: '0.5rem',
      padding: '0.75rem',
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
    },
    infoRowLast: {
      marginBottom: 0,
    },
    enrollButton: {
      marginTop: '1rem',
      display: 'flex',
      width: '100%',
      background: 'linear-gradient(to right, #a855f7, #ec4899)',
      color: 'white',
      textAlign: 'center' as const,
      fontWeight: 'bold',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
    },
    enrollText: {
      fontSize: '0.875rem',
      textAlign: 'center' as const,
      marginTop: '0.75rem',
      color: '#d8b4fe',
    },
    waveDivider: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  };

  const isLargeScreen = windowWidth >= 1024;
  const isMediumScreen = windowWidth >= 768;
  const isSmallScreen = windowWidth >= 640;

  return (
    <section style={{ ...styles.container, ...responsiveStyles.container }}>
      {/* Background Pattern */}
      <div style={styles.bgPattern}>
        <div style={styles.patternInner}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div style={styles.orb1}></div>
      <div style={styles.orb2}></div>

      {/* Content Container */}
      <div style={{ ...styles.contentWrapper, ...(isMediumScreen ? styles.contentWrapperMd : {}) }}>
        <div style={{ ...styles.grid, ...(isLargeScreen ? styles.gridLg : {}) }}>
          {/* Text Section */}
          <div style={styles.textSection}>
            <div style={styles.badge}>
              <span style={styles.badgeText}>🎓 AIGA Self-Paced Program 2026</span>
            </div>

            <h1 style={responsiveStyles.title}>
              AIGA – AI for Generation & Automation
              <span style={styles.gradientText}>Self-Paced Learning</span>
            </h1>

            <p style={responsiveStyles.description}>
              Master Generative AI, LLMs, RAG pipelines, and AI Agents at your own pace.
              <br />Complete 12 comprehensive modules with quizzes, assignments, and 4 capstone projects.
              <br />Start immediately • Learn anytime, anywhere • Lifetime access to content.
            </p>

            <div style={{ ...styles.buttonGroup, ...(isSmallScreen ? styles.buttonGroupSm : {}) }}>
              <a
                href="https://rzp.io/rzp/JCoC0fof"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.primaryButton}
                className="hover-scale"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #9333ea, #db2777)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #a855f7, #ec4899)';
                }}
              >
                Start Learning - ₹1,999 Only
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a
                href="#technologies"
                onClick={(e) => handleAnchorClick(e, '#technologies')}
                style={styles.secondaryButton}
                className="hover-scale"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                View Full Syllabus
              </a>
            </div>

            {/* Stats Row */}
            <div style={{ ...styles.statsRow, ...(isSmallScreen ? styles.statsRowSm : {}) }}>
              <div style={styles.statItem}>
                <div style={{ ...styles.statValue, ...(isMediumScreen ? styles.statValueMd : {}) }}>12</div>
                <div style={styles.statLabel}>Comprehensive Modules</div>
              </div>
              <div style={styles.statItem}>
                <div style={{ ...styles.statValue, ...(isMediumScreen ? styles.statValueMd : {}) }}>40+</div>
                <div style={styles.statLabel}>Topics Covered</div>
              </div>
              <div style={{ ...styles.statDivider, ...(isSmallScreen ? styles.statDividerSm : {}) }}></div>
              <div style={styles.statItem}>
                <div style={{ ...styles.statValue, ...(isMediumScreen ? styles.statValueMd : {}), color: '#f9a8d4' }}>
                  4
                </div>
                <div style={styles.statLabel}>
                  Capstone Projects
                </div>
              </div>
            </div>

            <div style={styles.ratingSection}>
              <div style={styles.logoContainer}>
                <div style={styles.logoBox}>
                  <img src="/logos/aicte.png" alt="AICTE" style={{ height: '2rem', width: 'auto' }} />
                </div>
                <div style={{ ...styles.logoBox, ...styles.logoBoxOffset }}>
                  <img src="/logos/apsche.png" alt="APSCHE" style={{ height: '2rem', width: 'auto' }} />
                </div>
                <span style={styles.logoText}>AICTE & APSCHE Approved</span>
              </div>
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKnMzctLKzIyYLRSNagwTkpOsjROMTMysEw1SDNIsTKoMDcyNLJINDQ1MzI1NEszT_PiSSpKzMzLL8sszszPAwCiDxRO&q=brainovision&rlz=1C1CHBF_enIN1140IN1140&oq=brainovision&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBwgCEAAYgAQyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEINzAyOWowajeoAgiwAgHxBT7mvW8zJTtx8QU-5r1vMyU7cQ&sourceid=chrome&ie=UTF-8#lrd=0x3bcb93d6209e0f0d:0x72128a1562516f7f,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
              >
                <span style={styles.stars}>★★★★★</span>
                <span style={styles.ratingText}>Rated 4.7/5 by 2140+ students</span>
              </a>
            </div>
          </div>

          {/* Program Highlights Card */}
          <div style={styles.cardSection}>
            <div style={styles.cardWrapper}>
              <div style={styles.cardGlow}></div>
              <div style={styles.cardInner}>
                <div style={styles.cardBadge}>🎓 Self-Paced Learning</div>

                <h3 style={styles.cardTitle}>
                  <span style={styles.cardTitleIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor"/>
                      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor"/>
                    </svg>
                  </span>
                  Program Highlights
                </h3>

                <ul style={styles.featureList}>
                  <li style={styles.featureItem}>
                    <span style={styles.featureCheck}>✓</span>
                    12 Comprehensive Modules 
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.featureCheck}>✓</span>
                    Module-wise Quizzes & Auto-graded Assignments
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.featureCheck}>✓</span>
                    4 Real-world Capstone Projects
                  </li>
                
                  <li style={styles.featureItem}>
                    <span style={styles.featureCheck}>✓</span>
                    Industry-recognized Certificate on Completion
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.featureCheck}>✓</span>
                    Doubt Resolution
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.featureCheck}>✓</span>
                    Live Classes Every Weekend
                  </li>
                </ul>

                <div style={styles.pricingSection}>
                  <div style={styles.pricingHeader}>
                    <span style={styles.pricingLabel}>Program Fee</span>
                    <span style={styles.discountBadge}>87% OFF</span>
                  </div>
                  
                  <div style={styles.venuePricing}>
                    <span style={styles.venueName}>Self-Paced:</span>
                    <span style={styles.priceAmount}>₹1,999</span>
                    <span style={styles.priceStrike}>₹14,999</span>
                  </div>
                  <div style={styles.bookingNote}>One-time payment • Lifetime access</div>

                  <div style={styles.infoBox}>
                    <div style={styles.infoRow}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', color: '#d8b4fe' }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                        <polyline points="12 6 12 12 16 14" stroke="currentColor"/>
                      </svg>
                      <span>Start Immediately • Self-Paced Learning</span>
                    </div>
                    <div style={{ ...styles.infoRow, ...styles.infoRowLast }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', color: '#d8b4fe' }}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor"/>
                        <circle cx="9" cy="7" r="4" stroke="currentColor"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor"/>
                      </svg>
                      <span>Unlimited Access • Learn at your own pace</span>
                    </div>
                  </div>

                  <a
                    href="https://rzp.io/rzp/JCoC0fof"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.enrollButton}
                    className="hover-scale"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #9333ea, #db2777)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #a855f7, #ec4899)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" fill="none"/>
                    </svg>
                    Enroll Now @ ₹1,999
                  </a>

                  <p style={styles.enrollText}>
                    ✓ Instant access ✓ Lifetime content ✓ Certificate on completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div style={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;