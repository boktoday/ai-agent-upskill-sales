import { useState } from 'react'
import {
  Bot, BookOpen, Laptop, BarChart3, Users, Award,
  Rocket, Zap, Wrench, Target, CheckCircle2, ChevronDown,
  Menu, X, ArrowRight, Star, Clock, Shield, GraduationCap,
  Infinity, Check, Briefcase, Home, Building2, Download,
  Mail, Globe
} from 'lucide-react'

const COLORS = {
  rosePink: '#F0839D',
  slateCharcoal: '#37464F',
  paleCream: '#FEF9EC',
  softApricot: '#FFCD94',
  burntOrange: '#F4A261',
  headlineBlack: '#3D3935',
  buildingTeal: '#8DA6B0',
  midGrey: '#555555',
  pureWhite: '#FFFFFF',
}

function App() {
  const [selectedTier, setSelectedTier] = useState('early')
  const [showCheckout, setShowCheckout] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tiers = [
    {
      id: 'cohort',
      name: 'Live Cohort',
      price: 297,
      originalPrice: null,
      badge: 'Most Popular',
      features: [
        'Your own AI agent that teaches you CoPaw',
        '2 Live Sessions per Week',
        'Cohort Community',
        'Catch-up Recordings',
        'WhatsApp Support Group',
        'Personalized Agent Setup',
      ],
      highlight: true,
    },
  ]

  const modules = [
    { num: 1, name: 'The Agentic Revolution', duration: '45 min', icon: Bot },
    { num: 2, name: 'The Tech Stack of 2026', duration: '45 min', icon: Zap },
    { num: 3, name: 'Deep Dive into CoPaw', duration: '60 min', icon: Wrench },
    { num: 4, name: 'Strategy, Ethics & Application', duration: '30 min', icon: Target },
    { num: 5, name: 'Knowledge Check & Practice', duration: 'Variable', icon: CheckCircle2 },
  ]

  const features = [
    { icon: GraduationCap, title: 'Live Training', desc: '2 cohort sessions per week with real-time Q&A' },
    { icon: Bot, title: 'Your Agent Team', desc: 'Build and keep working AI agents for your business' },
    { icon: Laptop, title: 'Own Your Install', desc: "CoPaw on your laptop — it's yours forever" },
    { icon: BarChart3, title: 'Interactive Learning', desc: 'Flashcards, quizzes, progress tracking' },
    { icon: Users, title: 'Cohort Community', desc: 'Network with others on the same journey' },
    { icon: Award, title: 'Certificate', desc: 'Prove your AI orchestration skills' },
  ]

  const steps = [
    { step: '1', title: 'Set Up CoPaw', desc: "We'll help you install CoPaw on your laptop. Works on Windows, Mac, or Linux.", time: 'Before Day 1' },
    { step: '2', title: 'Join Your Cohort', desc: 'Monday sessions — morning for new starters, evening for catch-up with the previous cohort.', time: 'Mondays' },
    { step: '3', title: 'Learn & Build', desc: '5 modules covering everything from AI basics to building your own agent ecosystems.', time: 'Week 1-2' },
    { step: '4', title: 'Graduate', desc: 'Get your certificate and keep all the agents you built.', time: 'End of Week 2' },
  ]

  const faqs = [
    { q: 'Do I need coding experience?', a: 'No! This course is designed for non-technical people. If you can use a computer, you can do this.' },
    { q: 'What computer do I need?', a: "Any laptop from the last 5 years will work. Windows, Mac, or Linux. We'll help you set up CoPaw." },
    { q: 'What if I miss a session?', a: "You get catch-up recordings and can join the next cohort's evening session." },
    { q: 'How long do I have access?', a: 'Forever! The course materials, agents, and community access are all yours after you pay.' },
    { q: 'What makes this different from other AI courses?', a: 'You leave with working AI agents — not just knowledge. Your personal AI coach is built into the course.' },
    { q: 'Can I use this for my business?', a: 'Absolutely! You own the agents you build and can use them in your business.' },
  ]

  const requirements = [
    { icon: Mail, label: 'Gmail account' },
    { icon: Laptop, label: 'Desktop / Laptop' },
    { icon: Globe, label: 'Chrome Browser' },
    { icon: Download, label: 'CoPaw installed (we teach you how)' },
  ]

  return (
    <div style={{ background: `linear-gradient(180deg, ${COLORS.paleCream} 0%, ${COLORS.softApricot} 40%, ${COLORS.burntOrange} 100%)`, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Sticky Nav */}
      <nav className="site-nav">
        <div className="nav-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Bot size={24} color={COLORS.rosePink} />
            <span style={{ fontSize: 20, fontWeight: 800, color: COLORS.headlineBlack }}>AI Agent Upskill</span>
          </div>
          <div className="desktop-nav">
            <a href="#course" className="nav-link">Course</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#pricing" className="nav-cta">Enroll Now</a>
          </div>
          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} color={COLORS.headlineBlack} /> : <Menu size={24} color={COLORS.headlineBlack} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <a href="#course" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>Course</a>
        <a href="#pricing" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <a href="#faq" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
        <a href="#pricing" className="mobile-menu__cta" onClick={() => setMobileMenuOpen(false)}>Enroll Now</a>
      </div>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">
          <Rocket size={14} />
          Now Enrolling — Next Cohort Starts Monday
        </div>
        <div className="hero-image-wrapper">
          <img src="/hero-crab.jpg" alt="CoPaw AI Agent" className="hero-image" />
        </div>
        <h1 className="hero-title">
          Master AI Agents with Your<br />
          <span style={{ color: COLORS.rosePink }}>Personal AI Coach</span>
        </h1>
        <p className="hero-desc">
          Learn to build, customize, and deploy AI agent ecosystems using CoPaw.
          You leave with <strong>working agents</strong> — not just theory.
        </p>
        <div className="requirements-row">
          {requirements.map((r, i) => (
            <div key={i} className="requirement-pill">
              <r.icon size={15} />
              <span>{r.label}</span>
            </div>
          ))}
        </div>
        <p className="requirements-note">
          We'll show you how to install CoPaw on your computer, laptop, or mini PC.
        </p>
        <div className="hero-buttons">
          <a href="#pricing" className="btn-primary">
            Start Learning <ArrowRight size={18} />
          </a>
          <a href="#course" className="btn-secondary">
            <BookOpen size={18} /> View Course
          </a>
        </div>
      </section>

      {/* What You Get */}
      <section id="course" className="section-light">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">What You Get</h2>
            <p className="section-subtitle">A complete AI agent training with your own personal AI coach</p>
          </div>

          <div className="modules-grid">
            {modules.map(m => (
              <div key={m.num} className="module-card">
                <div style={{ color: COLORS.rosePink, marginBottom: 10 }}>
                  <m.icon size={34} strokeWidth={1.5} />
                </div>
                <div className="module-num">{m.num}</div>
                <h3 className="module-name">{m.name}</h3>
                <p className="module-time">
                  <Clock size={13} /> {m.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">
                  <f.icon size={22} color={COLORS.rosePink} />
                </div>
                <div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="section-cream">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Who Is This For?</h2>
            <p className="section-subtitle">This course meets you where you are</p>
          </div>
          <div className="who-grid">
            <div className="who-card">
              <div className="who-icon">
                <Rocket size={28} color={COLORS.rosePink} />
              </div>
              <h3 className="who-title">Making agents for your business</h3>
              <p className="who-desc">Automate workflows, cut overhead, scale smarter</p>
            </div>
            <div className="who-card">
              <div className="who-icon">
                <Briefcase size={28} color={COLORS.rosePink} />
              </div>
              <h3 className="who-title">A new side hustle</h3>
              <p className="who-desc">Build AI products and services on the side</p>
            </div>
            <div className="who-card">
              <div className="who-icon">
                <Home size={28} color={COLORS.rosePink} />
              </div>
              <h3 className="who-title">For your family</h3>
              <p className="who-desc">Organise, plan, and stay connected with AI</p>
            </div>
            <div className="who-card">
              <div className="who-icon">
                <Building2 size={28} color={COLORS.rosePink} />
              </div>
              <h3 className="who-title">Your current role in business</h3>
              <p className="who-desc">Stand out, move faster, deliver more</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-dark">
        <div className="section-inner">
          <h2 className="section-title section-title--light">How It Works</h2>
          <div className="steps-list">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{s.step}</div>
                <div className="step-body">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
                <div className="step-time">
                  <Clock size={12} /> {s.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-cream">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Invest in Your Future</h2>
            <p className="section-subtitle">One payment. Keep everything you build. Forever.</p>
          </div>

          <div className="pricing-scroll">
            <div className="pricing-grid">
              {tiers.map(tier => (
                <div key={tier.id} className={`pricing-card ${tier.highlight ? 'pricing-card--highlight' : ''}`}>
                  {tier.badge && (
                    <div className="pricing-badge-ribbon">
                      <Star size={9} /> {tier.badge}
                    </div>
                  )}
                  <h3 className="pricing-name">{tier.name}</h3>
                  <div className="pricing-price-row">
                    <span className="pricing-price">${tier.price}</span>
                    {tier.originalPrice && (
                      <span className="pricing-original">${tier.originalPrice}</span>
                    )}
                  </div>
                  <ul className="pricing-features">
                    {tier.features.map((f, i) => (
                      <li key={i} className="pricing-feature-item">
                        <Check size={14} color="#22c55e" style={{ flexShrink: 0 }} />
                        <span style={{ overflowWrap: 'break-word' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`pricing-btn ${selectedTier === tier.id ? 'pricing-btn--selected' : ''}`}
                    onClick={() => { setSelectedTier(tier.id); setShowCheckout(true) }}
                  >
                    {selectedTier === tier.id ? <><Check size={14} /> Selected</> : 'Enroll Now'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <Shield size={14} color={COLORS.buildingTeal} /> Secure payment via Square. Afterpay available
            </div>
            <div className="trust-item">
              <Infinity size={14} color={COLORS.buildingTeal} /> 30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-light">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Questions?</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} color={COLORS.rosePink} className="faq-chevron" />
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <h2 className="cta-title">Ready to Build Your AI Team?</h2>
        <p className="cta-desc">
          Join the next cohort. Set up your CoPaw. Leave with working AI agents.
        </p>
        <a href="#pricing" className="btn-primary cta-btn">
          Enroll Now — From $297 <ArrowRight size={20} />
        </a>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2026 AI Agent Upskill Course · Built with CoPaw</p>
      </footer>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="modal-overlay" onClick={() => setShowCheckout(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCheckout(false)}>
              <X size={20} color={COLORS.midGrey} />
            </button>
            <h3 className="modal-title">Enroll in AI Agent Upskill</h3>
            <p className="modal-subtitle">
              {tiers.find((t: any) => t.id === selectedTier)?.name} — ${tiers.find((t: any) => t.id === selectedTier)?.price}
            </p>
            <form onSubmit={(e: any) => { e.preventDefault(); alert('Square checkout would open here') }}>
              <input type="text" placeholder="Full Name" required className="form-input" />
              <input type="email" placeholder="Email Address" required className="form-input" />
              <button type="submit" className="btn-primary modal-submit">
                Pay ${tiers.find((t: any) => t.id === selectedTier)?.price} Securely <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* ===========================
           BASE
           =========================== */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        /* ===========================
           NAVIGATION
           =========================== */
        .site-nav {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(254, 249, 236, 0.97);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .desktop-nav {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-link {
          color: #3D3935;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #F0839D; }

        .nav-cta {
          background: #F0839D;
          color: #fff;
          padding: 9px 20px;
          border-radius: 20px;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          transition: background 0.2s, transform 0.2s;
          display: inline-block;
        }
        .nav-cta:hover { background: #e0708a; transform: translateY(-1px); }

        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 56px;
          left: 0;
          right: 0;
          background: #fff;
          z-index: 199;
          padding: 12px 24px 24px;
          flex-direction: column;
          border-bottom: 1px solid #eee;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          transform: translateY(-110%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          pointer-events: none;
          display: flex;
          gap: 2px;
        }

        .mobile-menu--open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu__link {
          color: #3D3935;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          padding: 13px 0;
          border-bottom: 1px solid #f2f2f2;
          display: block;
        }

        .mobile-menu__cta {
          background: #F0839D;
          color: #fff;
          padding: 14px;
          border-radius: 16px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          font-size: 16px;
          margin-top: 10px;
          display: block;
        }

        /* ===========================
           HERO
           =========================== */
        .hero-section {
          text-align: center;
          padding: 40px 20px 64px;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .hero-image {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(240,131,157,0.3);
          box-shadow: 0 8px 40px rgba(240,131,157,0.25);
        }
        @media (min-width: 768px) {
          .hero-image { width: 220px; height: 220px; }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F0839D;
          color: #fff;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(30px, 7vw, 60px);
          font-weight: 900;
          color: #3D3935;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .hero-desc {
          font-size: clamp(16px, 2.5vw, 20px);
          color: #555;
          max-width: 560px;
          margin: 0 auto 36px;
          line-height: 1.65;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .requirements-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .requirement-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.75);
          border: 1.5px solid rgba(240,131,157,0.3);
          color: #3D3935;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: background 0.2s, border-color 0.2s;
        }
        .requirement-pill:hover {
          background: rgba(255,255,255,0.95);
          border-color: rgba(240,131,157,0.5);
        }

        .requirements-note {
          color: #555;
          font-size: 14px;
          margin-bottom: 28px;
          text-align: center;
        }

        /* ===========================
           BUTTONS
           =========================== */
        .btn-primary {
          background: #F0839D;
          color: #fff;
          padding: 14px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: clamp(15px, 2.5vw, 18px);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(240,131,157,0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .btn-primary:hover { background: #e0708a; transform: translateY(-2px); box-shadow: 0 6px 28px rgba(240,131,157,0.45); }

        .btn-secondary {
          background: #37464F;
          color: #fff;
          padding: 14px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: clamp(15px, 2.5vw, 18px);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-secondary:hover { background: #2a3540; transform: translateY(-2px); }

        /* ===========================
           SECTIONS
           =========================== */
        .section-light { background: #fff; padding: 60px 20px; }
        .section-dark { padding: 60px 20px; background: linear-gradient(135deg, #37464F 0%, #1a2a33 100%); }
        .section-cream { background: #FEF9EC; padding: 60px 20px; }
        .section-cta { padding: 64px 20px; background: linear-gradient(135deg, #37464F 0%, #1a2a33 100%); text-align: center; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 48px; }

        .section-title {
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 900;
          color: #3D3935;
          margin-bottom: 12px;
          line-height: 1.15;
        }
        .section-title--light { color: #fff; }
        .section-subtitle { color: #555; font-size: clamp(15px, 2.5vw, 18px); }

        /* ===========================
           MODULES GRID
           =========================== */
        .modules-grid {
          display: grid;
          gap: 14px;
          margin-bottom: 48px;
          grid-template-columns: 1fr;
        }

        .module-card {
          background: #FEF9EC;
          border-radius: 16px;
          padding: 22px 18px;
          text-align: center;
          border: 1px solid rgba(240,131,157,0.12);
          transition: transform 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .module-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }

        .module-num {
          background: #F0839D;
          color: #fff;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin: 0 auto 10px;
          font-size: 13px;
        }

        .module-name {
          font-size: 15px;
          font-weight: 700;
          color: #3D3935;
          margin-bottom: 8px;
          line-height: 1.3;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .module-time {
          color: #8DA6B0;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        /* ===========================
           FEATURES GRID
           =========================== */
        .features-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr;
        }

        .feature-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .feature-icon {
          background: rgba(240,131,157,0.1);
          border-radius: 12px;
          padding: 10px;
          flex-shrink: 0;
        }

        .feature-title {
          font-weight: 700;
          color: #3D3935;
          margin-bottom: 4px;
          font-size: 16px;
        }

        .feature-desc {
          color: #555;
          font-size: 14px;
          line-height: 1.55;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        /* ===========================
           WHO IS THIS FOR
           =========================== */
        .who-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .who-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          border: 2px solid rgba(240, 131, 157, 0.12);
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .who-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(240, 131, 157, 0.18);
          border-color: rgba(240, 131, 157, 0.35);
        }

        .who-icon {
          width: 56px;
          height: 56px;
          background: rgba(240, 131, 157, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .who-title {
          font-size: 17px;
          font-weight: 800;
          color: #3D3935;
          line-height: 1.3;
        }

        .who-desc {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        /* ===========================
           STEPS
           =========================== */
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .step-card {
          display: flex;
          gap: 14px;
          align-items: center;
          background: rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          flex-wrap: wrap;
        }

        .step-number {
          background: #F0839D;
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 18px;
          flex-shrink: 0;
        }

        .step-body { flex: 1; min-width: 0; }

        .step-title {
          color: #fff;
          font-weight: 700;
          font-size: 17px;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .step-desc {
          color: rgba(255,255,255,0.65);
          line-height: 1.5;
          font-size: 14px;
        }

        .step-time {
          background: rgba(240,131,157,0.18);
          color: #F0839D;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 4px;
          align-self: flex-start;
        }

        /* ===========================
           PRICING
           =========================== */
        .pricing-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 12px;
          scroll-snap-type: x mandatory;
        }
        .pricing-scroll::-webkit-scrollbar { height: 4px; }
        .pricing-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.06); border-radius: 2px; }
        .pricing-scroll::-webkit-scrollbar-thumb { background: rgba(240,131,157,0.4); border-radius: 2px; }

        .pricing-grid {
          display: flex;
          gap: 16px;
          min-width: auto;
          padding: 4px 4px 12px;
          justify-content: center;
        }

        .pricing-card {
          background: #fff;
          border: 3px solid transparent;
          border-radius: 20px;
          padding: 28px 22px;
          width: 276px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          scroll-snap-align: start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pricing-card:hover { transform: translateY(-3px) !important; }

        .pricing-card--highlight {
          border-color: #F0839D;
          box-shadow: 0 8px 32px rgba(240,131,157,0.25);
          transform: scale(1.02);
        }

        .pricing-badge-ribbon {
          position: absolute;
          top: 14px;
          right: -28px;
          background: #F0839D;
          color: #fff;
          padding: 5px 36px;
          font-size: 11px;
          font-weight: 700;
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pricing-name {
          font-size: 20px;
          font-weight: 800;
          color: #3D3935;
          margin-bottom: 12px;
        }

        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 20px;
        }

        .pricing-price {
          font-size: 42px;
          font-weight: 900;
          color: #F0839D;
          line-height: 1;
        }

        .pricing-original {
          font-size: 18px;
          color: #555;
          text-decoration: line-through;
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
        }

        .pricing-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 0;
          color: #555;
          font-size: 13px;
          border-bottom: 1px solid #eee;
          line-height: 1.4;
        }

        .pricing-btn {
          width: 100%;
          padding: 13px;
          border-radius: 30px;
          background: transparent;
          border: 2px solid #F0839D;
          color: #F0839D;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .pricing-btn:hover { background: rgba(240,131,157,0.08); }
        .pricing-btn--selected { background: #F0839D; color: #fff; }
        .pricing-btn--selected:hover { background: #e0708a; }

        .trust-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #555;
          font-size: 13px;
        }

        /* ===========================
           FAQ
           =========================== */
        .faq-list { display: flex; flex-direction: column; }
        .faq-item { border-bottom: 1px solid #eee; padding: 16px 0; }

        .faq-question {
          cursor: pointer;
          font-weight: 700;
          color: #3D3935;
          font-size: clamp(15px, 2.5vw, 17px);
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          line-height: 1.4;
        }
        .faq-question::-webkit-details-marker { display: none; }

        .faq-chevron {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        details[open] .faq-chevron { transform: rotate(180deg); }

        .faq-answer {
          color: #555;
          margin-top: 10px;
          line-height: 1.65;
          font-size: 15px;
        }

        /* ===========================
           CTA SECTION
           =========================== */
        .cta-title {
          font-size: clamp(26px, 5vw, 42px);
          font-weight: 900;
          color: #fff;
          margin-bottom: 14px;
          line-height: 1.15;
        }

        .cta-desc {
          color: rgba(255,255,255,0.7);
          font-size: clamp(15px, 2.5vw, 18px);
          max-width: 480px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .cta-btn {
          font-size: clamp(15px, 2.5vw, 20px) !important;
          padding: 16px 40px !important;
          box-shadow: 0 4px 30px rgba(240,131,157,0.45) !important;
        }

        /* ===========================
           FOOTER
           =========================== */
        .site-footer {
          padding: 24px 20px;
          background: #3D3935;
          text-align: center;
          color: rgba(255,255,255,0.45);
          font-size: 13px;
        }

        /* ===========================
           MODAL
           =========================== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 300;
          padding: 20px;
          backdrop-filter: blur(4px);
        }

        .modal-box {
          background: #fff;
          border-radius: 24px;
          padding: 36px 28px;
          max-width: 440px;
          width: 100%;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .modal-title {
          font-size: 22px;
          font-weight: 800;
          color: #3D3935;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          color: #555;
          margin-bottom: 24px;
          font-size: 15px;
        }

        .form-input {
          width: 100%;
          padding: 13px;
          border-radius: 12px;
          border: 2px solid #eee;
          margin-bottom: 12px;
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: #F0839D; }

        .modal-submit {
          width: 100%;
          margin-top: 4px;
          justify-content: center;
          font-size: 16px !important;
          padding: 15px !important;
        }

        /* ===========================
           TABLET (≥ 640px)
           =========================== */
        @media (min-width: 640px) {
          .modules-grid { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .who-grid { grid-template-columns: repeat(2, 1fr); }
          .step-card { flex-wrap: nowrap; }
          .pricing-card { width: 300px; }
          .section-light,
          .section-dark,
          .section-cream { padding: 80px 40px; }
          .section-cta { padding: 80px 40px; }
        }

        /* ===========================
           DESKTOP (≥ 1024px)
           =========================== */
        @media (min-width: 1024px) {
          .modules-grid { grid-template-columns: repeat(5, 1fr); }
          .features-grid { grid-template-columns: repeat(3, 1fr); }
          .who-grid { grid-template-columns: repeat(4, 1fr); }
          .nav-inner { padding: 14px 40px; }
          .hero-section { padding: 60px 40px 80px; }
          .section-light,
          .section-dark,
          .section-cream { padding: 80px 40px; }
          .section-cta { padding: 100px 40px; }
          .cta-btn { padding: 20px 56px !important; }
        }

        /* ===========================
           LARGE DESKTOP (≥ 1200px)
           =========================== */
        @media (min-width: 1200px) {
          .section-light,
          .section-dark,
          .section-cream { padding: 100px 20px; }
          .pricing-scroll { overflow-x: visible; }
          .pricing-grid { min-width: auto; flex-wrap: wrap; justify-content: center; }
          .pricing-card { width: 300px; }
        }

        /* ===========================
           MOBILE-SPECIFIC OVERRIDES
           =========================== */
        @media (max-width: 639px) {
          /* Hamburger visible, desktop nav hidden */
          .hamburger-btn { display: block !important; }
          .desktop-nav { display: none !important; }
          /* Hero buttons full width on small screens */
          .hero-buttons { flex-direction: column; align-items: center; }
          .hero-buttons .btn-primary,
          .hero-buttons .btn-secondary { width: 100%; max-width: 320px; justify-content: center; }
          /* Mobile sections: half padding */
          .section-light,
          .section-cream { padding: 40px 16px; }
          .section-dark { padding: 40px 16px; }
          .section-cta { padding: 48px 16px; }
          /* Compact module cards */
          .module-card { padding: 18px 14px; }
          .module-name { font-size: 14px; }
          /* Step cards: stack time below */
          .step-time { align-self: auto; }
          /* Pricing: narrow cards */
          .pricing-card { width: 260px; padding: 24px 18px; }
          /* FAQ */
          .faq-item { padding: 14px 0; }
          /* CTA btn full width on mobile */
          .cta-btn { width: 100%; max-width: 360px; justify-content: center; }
          /* Modal: full width on mobile */
          .modal-box { padding: 28px 20px; border-radius: 20px; }
          /* Section header tighter on mobile */
          .section-header { margin-bottom: 32px; }
          .steps-list { gap: 12px; }
        }
      `}</style>
    </div>
  )
}

export default App
