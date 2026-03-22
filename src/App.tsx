import { useState } from 'react'
import {
  Bot, BookOpen, Laptop, BarChart3, Users, Award,
  Rocket, Zap, Wrench, Target, CheckCircle2, ChevronDown,
  Menu, X, ArrowRight, Star, Clock, Shield, GraduationCap,
  MessageCircle, Download, Infinity, Headphones, Check
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
      id: 'early',
      name: 'Early Bird',
      price: 147,
      originalPrice: 297,
      badge: 'Limited Spots',
      features: [
        'AI Upskill Course',
        'Agent Ecosystem Download',
        'Setup Guide (All Platforms)',
        'Interactive Flashcards',
        'Progress Tracking',
        'Certificate of Completion',
      ],
      highlight: false,
    },
    {
      id: 'cohort',
      name: 'Live Cohort',
      price: 297,
      originalPrice: null,
      badge: 'Most Popular',
      features: [
        'Everything in Early Bird',
        '2 Live Sessions per Week',
        'Cohort Community',
        'Catch-up Recordings',
        'WhatsApp Support Group',
        'Personalized Agent Setup',
      ],
      highlight: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 497,
      originalPrice: 997,
      badge: 'Best Value',
      features: [
        'Everything in Cohort',
        '1-on-1 Strategy Call',
        'Custom Agent Build',
        'Priority Support',
        'Lifetime Access',
        'Agency License Rights',
      ],
      highlight: false,
    },
  ]

  const modules = [
    { num: 1, name: 'The Agentic Revolution', duration: '45 min', icon: Bot },
    { num: 2, name: 'The Tech Stack of 2026', duration: '45 min', icon: Zap },
    { num: 3, name: 'Deep Dive into OpenClaw', duration: '60 min', icon: Wrench },
    { num: 4, name: 'Strategy, Ethics & Application', duration: '30 min', icon: Target },
    { num: 5, name: 'Knowledge Check & Practice', duration: 'Variable', icon: CheckCircle2 },
  ]

  const features = [
    { icon: GraduationCap, title: 'Live Training', desc: '2 cohort sessions per week with real-time Q&A' },
    { icon: Bot, title: 'Your Agent Team', desc: 'Build and keep working AI agents for your business' },
    { icon: Laptop, title: 'Own Your Install', desc: "OpenClaw on your laptop — it's yours forever" },
    { icon: BarChart3, title: 'Interactive Learning', desc: 'Flashcards, quizzes, progress tracking' },
    { icon: Users, title: 'Cohort Community', desc: 'Network with others on the same journey' },
    { icon: Award, title: 'Certificate', desc: 'Prove your AI orchestration skills' },
  ]

  const steps = [
    { step: '1', title: 'Set Up OpenClaw', desc: "We'll help you install OpenClaw on your laptop. Works on Windows, Mac, or Linux.", time: 'Before Day 1' },
    { step: '2', title: 'Join Your Cohort', desc: 'Monday sessions — morning for new starters, evening for catch-up with the previous cohort.', time: 'Mondays' },
    { step: '3', title: 'Learn & Build', desc: '5 modules covering everything from AI basics to building your own agent ecosystems.', time: 'Week 1-2' },
    { step: '4', title: 'Graduate', desc: 'Get your certificate and keep all the agents you built.', time: 'End of Week 2' },
  ]

  const faqs = [
    { q: 'Do I need coding experience?', a: 'No! This course is designed for non-technical people. If you can use a computer, you can do this.' },
    { q: 'What computer do I need?', a: "Any laptop from the last 5 years will work. Windows, Mac, or Linux. We'll help you set up OpenClaw." },
    { q: 'What if I miss a session?', a: "You get catch-up recordings and can join the next cohort's evening session." },
    { q: 'How long do I have access?', a: 'Forever! The course materials, agents, and community access are all yours after you pay.' },
    { q: 'What makes this different from other AI courses?', a: 'You leave with working AI agents — not just knowledge. Your personal AI coach is built into the course.' },
    { q: 'Can I use this for my business?', a: 'Absolutely! Premium tier includes an agency license so you can use the agents with clients.' },
  ]

  return (
    <div style={{ background: `linear-gradient(180deg, ${COLORS.paleCream} 0%, ${COLORS.softApricot} 40%, ${COLORS.burntOrange} 100%)`, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Bot size={28} color={COLORS.rosePink} />
          <span style={{ fontSize: 22, fontWeight: 800, color: COLORS.headlineBlack }}>AI Upskill</span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="hidden-mobile">
          <a href="#course" style={{ color: COLORS.headlineBlack, textDecoration: 'none', fontWeight: 500 }}>Course</a>
          <a href="#pricing" style={{ color: COLORS.headlineBlack, textDecoration: 'none', fontWeight: 500 }}>Pricing</a>
          <a href="#faq" style={{ color: COLORS.headlineBlack, textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
          <a href="#pricing" style={{ background: COLORS.rosePink, color: COLORS.pureWhite, padding: '10px 24px', borderRadius: 20, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>
            Enroll Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="show-mobile" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          {mobileMenuOpen ? <X size={24} color={COLORS.headlineBlack} /> : <Menu size={24} color={COLORS.headlineBlack} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div style={{ background: COLORS.pureWhite, padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid #eee' }}>
          <a href="#course" onClick={() => setMobileMenuOpen(false)} style={{ color: COLORS.headlineBlack, textDecoration: 'none', fontWeight: 500 }}>Course</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: COLORS.headlineBlack, textDecoration: 'none', fontWeight: 500 }}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: COLORS.headlineBlack, textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ background: COLORS.rosePink, color: COLORS.pureWhite, padding: '12px 24px', borderRadius: 20, fontWeight: 600, textDecoration: 'none', textAlign: 'center', fontSize: 14 }}>
            Enroll Now
          </a>
        </div>
      )}

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '60px 20px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: COLORS.rosePink, color: COLORS.pureWhite, padding: '6px 16px', borderRadius: 20, fontSize: 14, fontWeight: 600, marginBottom: 20 }}>
          <Rocket size={16} />
          Now Enrolling — Next Cohort Starts Monday
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, color: COLORS.headlineBlack, lineHeight: 1.1, marginBottom: 24 }}>
          Master AI Agents with Your<br />
          <span style={{ color: COLORS.rosePink }}>Personal AI Coach</span>
        </h1>
        <p style={{ fontSize: 20, color: COLORS.midGrey, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Learn to build, customize, and deploy AI agent ecosystems using OpenClaw.
          You leave with <strong>working agents</strong> — not just theory.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing" style={{ background: COLORS.rosePink, color: COLORS.pureWhite, padding: '16px 36px', borderRadius: 30, fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: `0 4px 20px ${COLORS.rosePink}40`, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Start Learning <ArrowRight size={18} />
          </a>
          <a href="#course" style={{ background: COLORS.slateCharcoal, color: COLORS.pureWhite, padding: '16px 36px', borderRadius: 30, fontWeight: 700, fontSize: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <BookOpen size={18} /> View Course
          </a>
        </div>
      </section>

      {/* What You Get */}
      <section id="course" style={{ background: COLORS.pureWhite, padding: '80px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: COLORS.headlineBlack, marginBottom: 16 }}>What You Get</h2>
            <p style={{ color: COLORS.midGrey, fontSize: 18 }}>A complete AI agent training with your own personal AI coach</p>
          </div>

          {/* Modules */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
            {modules.map(m => (
              <div key={m.num} style={{ background: COLORS.paleCream, borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <div style={{ color: COLORS.rosePink, marginBottom: 12 }}>
                  <m.icon size={40} strokeWidth={1.5} />
                </div>
                <div style={{ background: COLORS.rosePink, color: COLORS.pureWhite, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 12px', fontSize: 14 }}>{m.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.headlineBlack, marginBottom: 8, lineHeight: 1.3 }}>{m.name}</h3>
                <p style={{ color: COLORS.buildingTeal, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <Clock size={13} /> {m.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: `${COLORS.rosePink}15`, borderRadius: 12, padding: 12, flexShrink: 0 }}>
                  <f.icon size={24} color={COLORS.rosePink} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: COLORS.headlineBlack, marginBottom: 4 }}>{f.title}</h4>
                  <p style={{ color: COLORS.midGrey, fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', background: `linear-gradient(135deg, ${COLORS.slateCharcoal} 0%, #1a2a33 100%)` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: COLORS.pureWhite, textAlign: 'center', marginBottom: 50 }}>How It Works</h2>
          <div style={{ display: 'grid', gap: 24 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 24 }}>
                <div style={{ background: COLORS.rosePink, color: COLORS.pureWhite, width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 22, flexShrink: 0 }}>
                  {s.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: COLORS.pureWhite, fontWeight: 700, fontSize: 20, marginBottom: 4 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
                <div style={{ background: 'rgba(240,131,157,0.2)', color: COLORS.rosePink, padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={13} /> {s.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '80px 20px', background: COLORS.paleCream }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: COLORS.headlineBlack, marginBottom: 12 }}>Simple Pricing</h2>
            <p style={{ color: COLORS.midGrey, fontSize: 18 }}>One payment. Keep everything you build. Forever.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
            {tiers.map(tier => (
              <div key={tier.id} onClick={() => setSelectedTier(tier.id)} style={{
                background: COLORS.pureWhite,
                border: tier.highlight ? `3px solid ${COLORS.rosePink}` : '3px solid transparent',
                borderRadius: 24, padding: 32, cursor: 'pointer',
                boxShadow: tier.highlight ? `0 8px 40px ${COLORS.rosePink}30` : '0 4px 20px rgba(0,0,0,0.08)',
                transform: tier.highlight ? 'scale(1.02)' : 'scale(1)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {tier.badge && (
                  <div style={{
                    position: 'absolute', top: 16, right: -32, background: COLORS.rosePink, color: COLORS.pureWhite,
                    padding: '6px 40px', fontSize: 12, fontWeight: 700, transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', gap: 4
                  }}>
                    <Star size={10} /> {tier.badge}
                  </div>
                )}
                <h3 style={{ fontSize: 22, fontWeight: 800, color: COLORS.headlineBlack, marginBottom: 8 }}>{tier.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
                  <span style={{ fontSize: 48, fontWeight: 900, color: COLORS.rosePink }}>${tier.price}</span>
                  {tier.originalPrice && (
                    <span style={{ fontSize: 20, color: COLORS.midGrey, textDecoration: 'line-through' }}>${tier.originalPrice}</span>
                  )}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                  {tier.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', color: COLORS.midGrey, borderBottom: '1px solid #eee' }}>
                      <Check size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowCheckout(true)}
                  style={{
                    width: '100%', padding: 16, borderRadius: 30,
                    background: selectedTier === tier.id ? COLORS.rosePink : 'transparent',
                    border: `2px solid ${COLORS.rosePink}`,
                    color: selectedTier === tier.id ? COLORS.pureWhite : COLORS.rosePink,
                    fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                  }}
                >
                  {selectedTier === tier.id ? <><Check size={16} /> Selected</> : 'Enroll Now'}
                </button>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: COLORS.midGrey, fontSize: 14 }}>
              <Shield size={16} color={COLORS.buildingTeal} /> Secure payment via Stripe
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: COLORS.midGrey, fontSize: 14 }}>
              <Infinity size={16} color={COLORS.buildingTeal} /> 30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 20px', background: COLORS.pureWhite }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: COLORS.headlineBlack, textAlign: 'center', marginBottom: 50 }}>Questions?</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700, color: COLORS.headlineBlack, fontSize: 18, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.q}
                <ChevronDown size={20} color={COLORS.rosePink} style={{ flexShrink: 0 }} />
              </summary>
              <p style={{ color: COLORS.midGrey, marginTop: 12, lineHeight: 1.6 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 20px', background: `linear-gradient(135deg, ${COLORS.slateCharcoal} 0%, #1a2a33 100%)`, textAlign: 'center' }}>
        <h2 style={{ fontSize: 42, fontWeight: 900, color: COLORS.pureWhite, marginBottom: 16 }}>Ready to Build Your AI Team?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 500, margin: '0 auto 40px' }}>
          Join the next cohort. Set up your OpenClaw. Leave with working AI agents.
        </p>
        <a href="#pricing" style={{ background: COLORS.rosePink, color: COLORS.pureWhite, padding: '20px 48px', borderRadius: 30, fontWeight: 800, fontSize: 20, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: `0 4px 30px ${COLORS.rosePink}50` }}>
          Enroll Now — From ${tiers.find((t: any) => t.id === selectedTier)?.price || 297} <ArrowRight size={20} />
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px 20px', background: COLORS.headlineBlack, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
        <p>© 2026 AI Upskill Course · Built with OpenClaw</p>
      </footer>

      {/* Checkout Modal */}
      {showCheckout && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 }}>
          <div style={{ background: COLORS.pureWhite, borderRadius: 24, padding: 40, maxWidth: 480, width: '100%', position: 'relative' }}>
            <button onClick={() => setShowCheckout(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={20} color={COLORS.midGrey} />
            </button>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: COLORS.headlineBlack, marginBottom: 8 }}>Enroll in AI Upskill</h3>
            <p style={{ color: COLORS.midGrey, marginBottom: 24 }}>
              {tiers.find((t: any) => t.id === selectedTier)?.name} — ${tiers.find((t: any) => t.id === selectedTier)?.price}
            </p>
            <form onSubmit={(e: any) => { e.preventDefault(); alert('Stripe checkout would open here') }}>
              <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: 14, borderRadius: 12, border: '2px solid #eee', marginBottom: 12, fontSize: 16, boxSizing: 'border-box' }} />
              <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: 14, borderRadius: 12, border: '2px solid #eee', marginBottom: 12, fontSize: 16, boxSizing: 'border-box' }} />
              <button type="submit" style={{ width: '100%', padding: 18, borderRadius: 12, background: COLORS.rosePink, color: COLORS.pureWhite, fontWeight: 700, fontSize: 18, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                Pay ${tiers.find((t: any) => t.id === selectedTier)?.price} Securely <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default App
