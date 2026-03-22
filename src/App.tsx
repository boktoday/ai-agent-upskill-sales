import { useState } from 'react';
import {
  Rocket, Clock, Users, Shield, Zap, FileText, Code, Mic,
  LayoutDashboard, Cpu, CheckCircle2, ChevronDown, Star, ArrowRight,
  Bot, GraduationCap, Briefcase, Home, Building2, Menu, X,
  MessageCircle, Download
} from 'lucide-react';

const BRAND = {
  rosePink: '#F0839D',
  slateCharcoal: '#37464F',
  paleCream: '#FEF9EC',
  softApricot: '#FFCD94',
  burntOrange: '#F4A261',
  headlineBlack: '#3D3935',
  buildingTeal: '#8DA6B0',
  midGrey: '#555555',
};

const phases = [
  {
    num: 1,
    title: 'Foundations – Career & Responsibility',
    icon: Shield,
    color: BRAND.rosePink,
    topics: [
      'New AI Roles & Career Pathways',
      'Career and Transition Personal Pathway Plan',
      'Governance, Security, Privacy, Ethics and Guardrails',
      'SAFERAI Implementation Framework',
    ],
  },
  {
    num: 2,
    title: 'Core AI Literacy & Creative Empowerment',
    icon: Zap,
    color: BRAND.burntOrange,
    topics: [
      'Prompt Engineering Frameworks for Everyone',
      'Working with Documents, Analysis & AI Agents',
      'Multimodal AI Use',
      'Vibe Coding & No-Code AI Tools',
    ],
  },
  {
    num: 3,
    title: 'Build Your AI-Powered Personal Presence',
    icon: Bot,
    color: BRAND.buildingTeal,
    topics: [
      'Build an Interactive Online CV and Portfolio',
      'Build Voice AI Coach / Conversational Thought Partner',
    ],
  },
  {
    num: 4,
    title: 'Scale with AI Agents & Automation',
    icon: Cpu,
    color: BRAND.softApricot,
    topics: [
      'Build Your 2026 Lifestyle and Business Dashboards',
      'Build Automation Workflows',
    ],
  },
  {
    num: 5,
    title: 'Advanced Deployment & Sovereignty',
    icon: Code,
    color: BRAND.slateCharcoal,
    topics: [
      'Local & Private AI Setup',
    ],
  },
];

const whoCards = [
  {
    icon: Home,
    title: 'For Yourself',
    desc: 'Automate your life and work',
  },
  {
    icon: Briefcase,
    title: 'For Your Employer',
    desc: 'Bring AI skills to your current role',
  },
  {
    icon: GraduationCap,
    title: 'For Job Seeking',
    desc: 'Stand out in AI-driven hiring',
  },
  {
    icon: Rocket,
    title: 'For Your Business',
    desc: 'Build AI-powered operations',
  },
];

const faqs = [
  {
    q: 'Do I need coding experience?',
    a: "No! This course is designed for non-technical people.",
  },
  {
    q: 'What do I need to join?',
    a: 'Gmail account, desktop/laptop, Chrome browser, reliable internet.',
  },
  {
    q: 'What if I miss the live session?',
    a: 'Catch-up recordings available.',
  },
  {
    q: 'How long do I have access?',
    a: "Forever! Materials are yours after you pay.",
  },
  {
    q: 'Can I use this for my business?',
    a: 'Absolutely! Premium includes agency license.',
  },
  {
    q: "What's the SAFERAI Framework?",
    a: 'A structured approach to responsible AI adoption we teach during Phase 1.',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: BRAND.paleCream, color: BRAND.headlineBlack }}>
      {/* ── STICKY NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: BRAND.headlineBlack, letterSpacing: '-0.02em' }}>
            AI Skills Workshop
          </span>

          {/* desktop links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {[['Course', 'workshop'], ['Pricing', 'pricing'], ['FAQ', 'faq']].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500, color: BRAND.midGrey }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('pricing')}
              style={{
                backgroundColor: BRAND.rosePink,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '0.5rem 1.25rem',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              Enrol Now
            </button>
          </div>

          {/* hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            className="show-mobile"
          >
            {menuOpen ? <X size={24} color={BRAND.headlineBlack} /> : <Menu size={24} color={BRAND.headlineBlack} />}
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: '#fff', borderTop: '1px solid #eee', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[['Course', 'workshop'], ['Pricing', 'pricing'], ['FAQ', 'faq']].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 500, color: BRAND.midGrey, textAlign: 'left' }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('pricing')}
              style={{
                backgroundColor: BRAND.rosePink,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '0.6rem 1rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Enrol Now
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 640px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 639px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(135deg, ${BRAND.paleCream} 0%, ${BRAND.softApricot} 50%, ${BRAND.burntOrange} 100%)`,
        padding: '4rem 1.5rem 5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#fff',
            borderRadius: 999,
            padding: '0.35rem 1.1rem',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: BRAND.rosePink,
            marginBottom: '1.5rem',
            border: `1.5px solid ${BRAND.rosePink}33`,
          }}>
            <Clock size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            3hr Pre-Work + 4hr Live Workshop
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, color: BRAND.headlineBlack, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Learn AI Skills That Work for<br />
            You, Your Employer or Your Business
          </h1>
          <p style={{ fontSize: '1.1rem', color: BRAND.midGrey, marginBottom: '2.5rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
            Everything you learn is transferable — to your career, your job search, or your own business.
          </p>

          <img
            src="/hero-crab.jpg"
            alt="Workshop mascot"
            style={{ width: '100%', maxWidth: 420, borderRadius: 20, marginBottom: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          />

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['Gmail account', 'Desktop/Laptop', 'Chrome Browser'].map((r) => (
              <span key={r} style={{
                backgroundColor: '#fff',
                border: `1.5px solid ${BRAND.buildingTeal}55`,
                borderRadius: 999,
                padding: '0.3rem 0.9rem',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: BRAND.buildingTeal,
              }}>
                {r}
              </span>
            ))}
          </div>

          <button
            onClick={() => scrollTo('pricing')}
            style={{
              backgroundColor: BRAND.rosePink,
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: `0 4px 20px ${BRAND.rosePink}55`,
            }}
          >
            Secure Your Spot <ArrowRight size={18} />
          </button>
          <p style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: BRAND.midGrey }}>
            Secure payment via Square. Afterpay available
          </p>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section id="workshop" style={{ padding: '5rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: BRAND.headlineBlack }}>
          Who Is This For?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {whoCards.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              backgroundColor: '#fff',
              borderRadius: 16,
              padding: '1.75rem',
              border: `1.5px solid ${BRAND.buildingTeal}22`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                backgroundColor: `${BRAND.rosePink}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <Icon size={22} color={BRAND.rosePink} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: BRAND.headlineBlack }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: BRAND.midGrey }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKSHOP FLOW ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', marginBottom: '0.5rem', color: BRAND.headlineBlack }}>
            What You'll Learn
          </h2>
          <p style={{ textAlign: 'center', color: BRAND.midGrey, marginBottom: '3rem', fontSize: '1rem' }}>
            5 phases over 7 hours — 3 hours at your desk, 4 hours live
          </p>

          {/* Timeline on desktop, stacked on mobile */}
          <div style={{ position: 'relative' }}>
            {/* vertical line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0, bottom: 0,
              width: 2,
              backgroundColor: `${BRAND.rosePink}22`,
              transform: 'translateX(-50%)',
            }} className="timeline-line" />

            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;
              const Icon = phase.icon;
              return (
                <div key={phase.num} style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '2.5rem',
                  position: 'relative',
                }}>
                  {/* connector dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '1.5rem',
                    width: 16, height: 16,
                    borderRadius: '50%',
                    backgroundColor: phase.color,
                    border: '3px solid #fff',
                    boxShadow: `0 0 0 2px ${phase.color}`,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                  }} />

                  <div style={{
                    width: '45%',
                    backgroundColor: BRAND.paleCream,
                    borderRadius: 16,
                    padding: '1.5rem',
                    border: `1.5px solid ${phase.color}22`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }} className={`phase-card ${isLeft ? 'phase-right' : 'phase-left'}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        backgroundColor: `${phase.color}22`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={18} color={phase.color} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Phase {phase.num}
                        </span>
                        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: BRAND.headlineBlack, lineHeight: 1.3 }}>
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      {phase.topics.map((t) => (
                        <li key={t} style={{ fontSize: '0.88rem', color: BRAND.midGrey, marginBottom: '0.35rem', lineHeight: 1.4 }}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 639px) {
          .timeline-line { display: none !important; }
          .phase-card { width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
        }
      `}</style>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '5rem 1.5rem', backgroundColor: BRAND.paleCream }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: BRAND.headlineBlack }}>
            Simple, Transparent Pricing
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

            {/* Live Cohort */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: '2rem',
              border: `1.5px solid ${BRAND.buildingTeal}22`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              position: 'relative',
            }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: `${BRAND.buildingTeal}18`,
                borderRadius: 8,
                padding: '0.25rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: BRAND.buildingTeal,
                marginBottom: '1rem',
              }}>
                LIVE COHORT
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: BRAND.headlineBlack }}>$297</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  '3hr pre-work + 4hr live workshop',
                  'Cohort community access',
                  'Catch-up recordings',
                  'WhatsApp support',
                ].map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.9rem', color: BRAND.midGrey }}>
                    <CheckCircle2 size={16} color={BRAND.rosePink} style={{ marginTop: 2, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo('pricing')}
                style={{
                  width: '100%',
                  backgroundColor: BRAND.rosePink,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  padding: '0.85rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Enrol Now
              </button>
            </div>

            {/* Premium */}
            <div style={{
              backgroundColor: BRAND.slateCharcoal,
              borderRadius: 20,
              padding: '2rem',
              color: '#fff',
              position: 'relative',
              boxShadow: `0 8px 32px rgba(55,70,79,0.25)`,
            }}>
              <div style={{
                position: 'absolute',
                top: -12,
                right: 20,
                backgroundColor: BRAND.rosePink,
                borderRadius: 999,
                padding: '0.25rem 0.9rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#fff',
              }}>
                MOST POPULAR
              </div>
              <div style={{
                display: 'inline-block',
                backgroundColor: `${BRAND.rosePink}22`,
                borderRadius: 8,
                padding: '0.25rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: BRAND.rosePink,
                marginBottom: '1rem',
              }}>
                PREMIUM
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900 }}>$497</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Everything in Live Cohort',
                  '1-on-1 Strategy Call',
                  'Custom Agent Build',
                  'Priority support',
                  'Lifetime access',
                  'Agency License',
                ].map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color={BRAND.rosePink} style={{ marginTop: 2, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo('pricing')}
                style={{
                  width: '100%',
                  backgroundColor: BRAND.rosePink,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  padding: '0.85rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Get Premium
              </button>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.82rem', color: BRAND.midGrey }}>
            Secure payment via Square. Afterpay available
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '5rem 1.5rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: BRAND.headlineBlack }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i} style={{
                border: `1.5px solid ${BRAND.buildingTeal}22`,
                borderRadius: 12,
                overflow: 'hidden',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '1.1rem 1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: BRAND.headlineBlack,
                    textAlign: 'left',
                  }}
                >
                  {q}
                  <ChevronDown
                    size={18}
                    color={BRAND.midGrey}
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.25rem 1.1rem', fontSize: '0.9rem', color: BRAND.midGrey, lineHeight: 1.6 }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        backgroundColor: BRAND.slateCharcoal,
        padding: '5rem 1.5rem',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
          Ready to Build Your AI Skills?
        </h2>
        <p style={{ color: `${BRAND.softApricot}cc`, marginBottom: '2rem', fontSize: '1rem' }}>
          Join the next cohort and start transforming how you work.
        </p>
        <button
          onClick={() => scrollTo('pricing')}
          style={{
            backgroundColor: BRAND.rosePink,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          Secure Your Spot <ArrowRight size={18} />
        </button>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        backgroundColor: BRAND.headlineBlack,
        padding: '1.5rem 1.5rem',
        textAlign: 'center',
      }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>AI Skills Workshop</span>
        <span style={{ color: `${BRAND.buildingTeal}88`, fontSize: '0.82rem', display: 'block', marginTop: 4 }}>
          © 2026 AI Skills Workshop. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
