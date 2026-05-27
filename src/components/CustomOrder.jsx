import { useState } from 'react';
import '../styles/CustomOrder.css';

export default function CustomOrder({ setActiveTab }) {
  const [formData, setFormData] = useState({
    vision: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (formData.vision.trim()) {
      // Handle next step logic
      console.log('Moving to next step:', formData);
      // Could redirect to step 2 or show next form
    }
  };

  return (
    <div className="custom-order-page">
      {/* Header/Navigation */}
      <header className="custom-order-header">
        <div className="header-content">
          <h1 className="logo">ArtisanHub</h1>
          <nav className="header-nav">
            <button onClick={() => setActiveTab && setActiveTab('GALLERY')} className="nav-link">GALLERY</button>
            <button onClick={() => setActiveTab && setActiveTab('ARTISTS')} className="nav-link">ARTISTS</button>
            <button onClick={() => setActiveTab && setActiveTab('CUSTOM ORDERS')} className="nav-link active">CUSTOM ORDERS</button>
            <button onClick={() => setActiveTab && setActiveTab('EXHIBITIONS')} className="nav-link">EXHIBITIONS</button>
          </nav>
          <div className="header-icons">
            <button className="icon-btn">♡</button>
            <button className="icon-btn">👤</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="custom-order-main">
        {/* Hero Section */}
        <section className="commission-hero">
          <h2>Start Your Custom Commission</h2>
          <p>Collaborate directly with master artisans to bring your unique vision to life.</p>
        </section>

        {/* Steps Indicator */}
        <section className="steps-indicator">
          <div className="step">
            <div className="step-number">1</div>
            <p className="step-label">VISION</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p className="step-label">REFERENCE</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p className="step-label">LOGISTICS</p>
          </div>
        </section>

        {/* Content Container */}
        <div className="commission-container">
          {/* Left Section - Form */}
          <section className="vision-section">
            <div className="form-wrapper">
              <h3>Describe your vision</h3>
              <p className="form-description">
                What are you looking to create? Mention colors, size, mood, and any specific elements.
              </p>
              
              <textarea
                name="vision"
                value={formData.vision}
                onChange={handleInputChange}
                placeholder="I'm looking for a large-scale oil painting of a coastal landscape at dusk, focusing on deep violets and warm terracotta tones..."
                className="vision-textarea"
              ></textarea>

              <div className="location-info">
                <span className="location-icon">📍</span>
                <p>Example: "I want a 2x3 ft abstract place for my study that evokes a sense of calm and order."</p>
              </div>

              <button className="next-btn" onClick={handleNextStep}>
                NEXT STEP <span>→</span>
              </button>
            </div>
          </section>

          {/* Right Section - Artist Info & Tips */}
          <aside className="artist-section">
            {/* Meet the Artist */}
            <div className="artist-card">
              <h4 className="section-title">MEET THE ARTIST</h4>
              
              <div className="artist-info">
                <img src="/api/placeholder/80/80" alt="Elena Ross" className="artist-image" />
                <div className="artist-details">
                  <h5>Elena Ross</h5>
                  <p className="artist-role">OIL PAINTER & MURALIST</p>
                </div>
              </div>

              <p className="artist-quote">
                "I love translating personal stories into visual landscapes. Let's create something meaningful for your home."
              </p>

              <div className="artist-stats">
                <div className="stat">
                  <p className="stat-number">120+</p>
                  <p className="stat-label">COMMISSIONS</p>
                </div>
                <div className="stat">
                  <p className="stat-number">4.8/5</p>
                  <p className="stat-label">RATING</p>
                </div>
              </div>
            </div>

            {/* Commission Tips */}
            <div className="tips-card">
              <h4>COMMISSION TIPS</h4>
              <div className="tips-list">
                <div className="tip">
                  <span className="tip-icon">💭</span>
                  <p>Be specific about what you "don't" want — it's just as helpful as what you do</p>
                </div>
                <div className="tip">
                  <span className="tip-icon">📐</span>
                  <p>Measure your wall space before requesting a size to ensure a perfect fit.</p>
                </div>
                <div className="tip">
                  <span className="tip-icon">⏱</span>
                  <p>Good art takes time. Most custom oil paintings require 4-6 weeks for drying and varnishing.</p>
                </div>
              </div>
            </div>

            {/* Security & Support */}
            <div className="security-support">
              <p>🔒 SECURE CHECKOUT</p>
              <p>🎨 24/7 ARTIST SUPPORT</p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="custom-order-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h5>ArtisanHub</h5>
            <p>Connecting discerning collectors with the world's most talented independent artisans.</p>
          </div>
          
          <div className="footer-section">
            <h6>COLLECTIONS</h6>
            <ul>
              <li><a href="#ceramics">Ceramics</a></li>
              <li><a href="#paintings">Oil Paintings</a></li>
              <li><a href="#sculptures">Sculptures</a></li>
              <li><a href="#photography">Photography</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h6>SUPPORT</h6>
            <ul>
              <li><a href="#shipping">Shipping Policy</a></li>
              <li><a href="#refunds">Refunds</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h6>NEWSLETTER</h6>
            <div className="newsletter-form">
              <input type="email" placeholder="Email address" />
              <button>→</button>
            </div>
          </div>
        </div>

        {/* <div className="footer-bottom">
          <p>© 2024 ArtisanHub. All rights reserved.</p>
          <div className="social-icons">
            <a href="#github">🔗</a>
            <a href="#dribbble">🎨</a>
            <a href="#share">📤</a>
          </div>
        </div> */}
      </footer>
    </div>
  );
}
