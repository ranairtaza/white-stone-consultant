import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Menu,
  X,
  Briefcase,
  Target,
  Compass,
  Layers,
  MessageCircle,
  Building,
  Star,
  FileText,
  Send,
  ExternalLink,
  BarChart3,
  Cpu,
  Coins,
  Shield,
  HelpCircle
} from 'lucide-react';

const TRUST_PARTNERS = [
  { name: 'OmniGlobal Health', metric: '+34% Operational Margin' },
  { name: 'Vanguard FinTech', metric: '$420M Asset Restructure' },
  { name: 'Aegis Industrial', metric: '6.4x Digital Throughput' },
  { name: 'Quantix AI Labs', metric: 'Series-B Scaleup Partner' },
  { name: 'Meridian Capital', metric: '99.8% Regulatory Audit' },
];

const SERVICES_DATA = [
  {
    id: 'management-consulting',
    category: 'Operations',
    title: 'Management & Operational Consulting',
    shortDesc: 'Streamline departmental friction, overhaul workflows, and institutionalize high-efficiency operating frameworks.',
    fullDesc: 'We diagnose structural bottlenecks across executive, human capital, and operational divisions to eliminate redundancies and engineer agile accountability frameworks.',
    deliverables: [
      'Comprehensive Org Health & Process Audit',
      'Target Operating Model (TOM) Blueprint',
      'Cross-functional Change Management Roadmap',
      'Executive KPI Dashboards & Performance Metric Trees'
    ],
    timeline: '4 - 8 Weeks',
    badge: 'Core Specialty',
    impact: 'Avg. 28% overhead cost reduction'
  },
  {
    id: 'digital-transformation',
    category: 'Digital',
    title: 'Enterprise Digital Transformation',
    shortDesc: 'Modernize legacy infrastructure, automate manual workstreams, and deploy production-ready intelligent workflows.',
    fullDesc: 'From cloud consolidation to AI-assisted data pipelines, we architect modern technology stacks that empower your team without operational disruption.',
    deliverables: [
      'Legacy Tech Debt Evaluation & Modernization Stack',
      'Cloud Architecture & Security Governance Plan',
      'Autonomous Workflow Automation Implementation',
      'Data Warehouse & Business Intelligence Pipeline'
    ],
    timeline: '6 - 12 Weeks',
    badge: 'High Demand',
    impact: '4x faster time-to-market for products'
  },
  {
    id: 'strategy-advisory',
    category: 'Strategy',
    title: 'Corporate Strategy & Market Advisory',
    shortDesc: 'Data-driven market entry, M&A due diligence, and capital allocation strategies to dominate sector shifts.',
    fullDesc: 'We equip C-suites and founders with rigorous empirical research, scenario testing, and risk-hedged strategic plans that ensure sustained market dominance.',
    deliverables: [
      'Total Addressable Market (TAM) Depth Analysis',
      'Competitive Moat & Defensive Positioning Plan',
      'M&A Target Feasibility & Synergies Valuation',
      '5-Year Capital Allocation & Strategic Masterplan'
    ],
    timeline: '3 - 6 Weeks',
    badge: 'Executive Level',
    impact: '$1.4B cumulative client transaction value'
  },
  {
    id: 'financial-optimization',
    category: 'Financial',
    title: 'Financial Restructuring & Optimization',
    shortDesc: 'Refine working capital, structure debt obligations, and unlock bottom-line profitability with forensic precision.',
    fullDesc: 'Our certified financial strategists unearth hidden liquidity, renegotiate vendor matrices, and model cash-flow resilience against macro volatility.',
    deliverables: [
      'Zero-Based Budgeting (ZBB) Restructuring',
      'Cash Flow Sensitivity & Stress-Test Simulation',
      'Procurement & Supply-Chain Unit Cost Audit',
      'Pre-Audit Forensic Ledger Hygiene'
    ],
    timeline: '4 - 10 Weeks',
    badge: 'High ROI',
    impact: 'Typical 3.8x ROI on consulting fee'
  },
  {
    id: 'esg-risk-governance',
    category: 'Strategy',
    title: 'Risk Governance & Regulatory Compliance',
    shortDesc: 'Safeguard enterprise reputation, withstand stringent regulatory audits, and build bulletproof compliance frameworks.',
    fullDesc: 'Proactive mitigation frameworks addressing multinational data privacy, cross-border trade guidelines, and internal whistleblowing channels.',
    deliverables: [
      'Multi-jurisdictional Regulatory Compliance Matrix',
      'Enterprise Risk Management (ERM) Scorecard',
      'Cybersecurity & Data Privacy Protocol Audit',
      'Board-Level Contingency Drill Playbooks'
    ],
    timeline: '3 - 5 Weeks',
    badge: 'Protection',
    impact: '100% compliance pass rate across 80+ audits'
  },
  {
    id: 'talent-leadership',
    category: 'Operations',
    title: 'Executive Leadership & Talent Architecture',
    shortDesc: 'Align compensation packages, executive succession, and high-performance engineering incentives.',
    fullDesc: 'Culture without metrics fails; metrics without culture burn out talent. We synthesize high-trust retention structures and succession systems.',
    deliverables: [
      'Executive Succession Matrix & Bench Strength Audit',
      'Performance-Linked Equity & Bonus Architecture',
      'Culture Pulse Diagnostics & Retention Strategies',
      'High-Performance Leadership Training Workshops'
    ],
    timeline: '4 - 6 Weeks',
    badge: 'Human Capital',
    impact: '42% decrease in senior talent churn'
  }
];

const TESTIMONIALS = [
  {
    quote: 'White Stone Consultant rebuilt our operational pipeline within 90 days. We scaled from $18M ARR to $45M without increasing non-technical headcount. The precision was surgical.',
    author: 'Elena Rostova',
    role: 'Chief Operating Officer',
    company: 'Novus Logistics Intl',
    rating: 5,
    metrics: '+150% Operational Velocity',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    quote: 'Their financial restructuring team uncovered $3.2M in annual procurement leakages in our first three weeks. The ROI on their advisory retainer paid for itself tenfold.',
    author: 'Marcus Vance',
    role: 'Chief Financial Officer',
    company: 'Vanguard Industrial Group',
    rating: 5,
    metrics: '$3.2M Annual Savings Found',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  {
    quote: 'Unlike traditional consulting giants that deliver 200-page slide decks and disappear, White Stone Consultant embedded into our teams and executed the actual digital roadmap.',
    author: 'Dr. Sarah Chen',
    role: 'VP of Technology & Strategy',
    company: 'Apex Health Systems',
    rating: 5,
    metrics: 'System Downtime Reduced 94%',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  }
];

const FAQS = [
  {
    q: 'How fast can a White Stone Consultant engagement team begin?',
    a: 'Following our initial 30-minute discovery session and mutual NDA signature, our dedicated engagement partners can initiate discovery interviews and data ingestion within 3 to 5 business days.'
  },
  {
    q: 'What is your typical pricing structure and fee model?',
    a: 'We operate on transparent, value-aligned milestones: Fixed-Scope Engagements with guaranteed deliverables, Monthly Advisory Retainers for C-Suite advisory, or Performance-Tied Incentive structures for qualified restructuring programs.'
  },
  {
    q: 'How is proprietary client data and IP protected?',
    a: 'We implement bilateral strict NDAs, zero-trust encrypted document rooms, and strict air-gapped data retention policies. We never reuse proprietary formulas or internal client documentation across competitive engagements.'
  },
  {
    q: 'What tangible deliverables will our team receive at completion?',
    a: 'You receive comprehensive audit scorecards, ready-to-execute operational SOPs, interactive KPI dashboards, full executive summary decks, and 60 days of post-handover advisory check-ins.'
  },
  {
    q: 'Can White Stone Consultant assist with the actual execution or just strategy?',
    a: 'We are hands-on operators. While we author high-level strategic blueprints, our senior engagement leads work side-by-side with your teams to manage the implementation and overcome roadblock resistance.'
  }
];

const MILESTONES = [
  { year: '2016', title: 'Firm Inception', desc: 'Founded by former Tier-1 senior partners with a mission to eliminate consulting fluff.' },
  { year: '2019', title: 'Global Expansion', desc: 'Established secondary advisory presence in London, facilitating transatlantic cross-border M&A.' },
  { year: '2022', title: 'Digital & AI Practice', desc: 'Inaugurated dedicated enterprise data intelligence and algorithmic workflow arm.' },
  { year: '2025', title: '$1B+ Client Milestone', desc: 'Surpassed over $1.2B in verified measurable EBITDA improvements across 280+ clients.' }
];

function Navbar({ activePage, setActivePage, onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Badge */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1c4b] to-blue-900 p-[2px] shadow-lg shadow-blue-900/30">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1a1c4b]/5 group-hover:bg-[#1a1c4b]/10 transition-colors" />
                <span className="font-extrabold text-2xl text-[#1a1c4b] tracking-wider flex items-center">
                  W<span className="text-[#d31118] text-2xl leading-none">/</span>S
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#1a1c4b] flex items-center">
                WHITE<span className="text-[#d31118] ml-1">STONE</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase -mt-1">
                Overseas Consultant
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-200 ${
                  activePage === link.id
                    ? 'bg-[#1a1c4b] text-white shadow-md shadow-[#1a1c4b]/30'
                    : 'text-slate-600 hover:text-[#1a1c4b] hover:bg-slate-200/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+18005559821" 
              className="text-xs text-slate-600 hover:text-[#1a1c4b] flex items-center gap-2 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d31118]" />
              <span>+1 (800) 555-9821</span>
            </a>
            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#d31118] to-red-700 hover:from-red-600 hover:to-red-800 shadow-lg shadow-red-700/30 hover:shadow-red-600/40 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#d31118]"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#1a1c4b] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-bold flex items-center justify-between ${
                activePage === link.id
                  ? 'bg-[#1a1c4b]/10 text-[#1a1c4b] border border-[#1a1c4b]/20'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-[#d31118] hover:bg-red-700 shadow-md shadow-red-600/20"
            >
              Schedule Free 30-Min Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function ConsultationModal({ isOpen, onClose, preselectedService, onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'management-consulting',
    datePreference: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      onNotify('Your consultation request has been reserved! Our senior practice director will contact you within 2 business hours.');
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 border-b border-slate-200 flex justify-between items-start">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-[#d31118] border border-red-200 mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Complimentary Strategic Evaluation</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#1a1c4b]">Book a Confidential Strategy Call</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">30 minutes with a Senior Practice Partner. Zero pitch pressure.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg bg-slate-100 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
              <input
                required
                type="text"
                placeholder="e.g. Jonathan Cole"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b] focus:ring-1 focus:ring-[#1a1c4b]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
              <input
                required
                type="email"
                placeholder="jonathan@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b] focus:ring-1 focus:ring-[#1a1c4b]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
              <input
                required
                type="text"
                placeholder="Enterprise Ltd."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b] focus:ring-1 focus:ring-[#1a1c4b]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Area of Inquiry</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1a1c4b]"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value="other">General Strategic Advisory</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Timeframe / Target Start</label>
            <input
              type="text"
              placeholder="e.g. Immediate (Next 2 weeks) or Q3 2026"
              value={formData.datePreference}
              onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Primary Challenge or Objective</label>
            <textarea
              rows={3}
              placeholder="Briefly describe your objectives, operational roadblocks, or desired milestones..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b] resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-[#d31118] hover:bg-red-700 disabled:opacity-50 shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Securing Calendar...</span>
                </>
              ) : (
                <>
                  <span>Confirm Strategy Session</span>
                  <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function HeroSection({ onOpenConsultation, onExploreSolutions }) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Subtle background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1a1c4b]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-[#d31118]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#1a1c4b]/5 border border-[#1a1c4b]/10 text-[#1a1c4b] shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d31118] animate-pulse" />
            <span>Tier-1 Executive & Enterprise Advisory</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-mono">Q3/Q4 2026 Cohort Open</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Engineering Measurable Growth &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1c4b] via-blue-800 to-[#d31118]">
              Strategic Dominance.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We partner with mid-market enterprises and Fortune 500 leaders to streamline operating models, 
            optimize capital structures, and execute mission-critical digital transformations.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-[#d31118] to-red-700 hover:from-red-600 hover:to-red-800 shadow-xl shadow-red-700/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onExploreSolutions}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-[#1a1c4b] bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Practice Areas</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Guarantee / Micro-trust */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Strict Bilateral NDA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#1a1c4b]" />
              <span>Response in &lt; 2 Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#d31118]" />
              <span>Results-Tied Fee Models</span>
            </div>
          </div>
        </div>

        {/* Hero KPI Stat Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
          <div className="text-center md:border-r border-slate-100 p-2">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center">
              $1.2B<span className="text-[#d31118]">+</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-bold uppercase tracking-wider">Quantified Impact</div>
          </div>
          <div className="text-center md:border-r border-slate-100 p-2">
            <div className="text-3xl sm:text-4xl font-black text-[#1a1c4b] tracking-tight flex items-center justify-center">
              99.4<span className="text-blue-800 text-2xl">%</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-bold uppercase tracking-wider">Client Retention</div>
          </div>
          <div className="text-center md:border-r border-slate-100 p-2">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center">
              280<span className="text-[#d31118]">+</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-bold uppercase tracking-wider">Engagements</div>
          </div>
          <div className="text-center p-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center justify-center">
              4.9<span className="text-amber-400 text-xl ml-1">★</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-bold uppercase tracking-wider">Advisory Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
          Selected Strategic Engagements & Portfolio Case Studies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {TRUST_PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-3.5 text-center hover:border-[#1a1c4b]/30 hover:shadow-md transition-all duration-200"
            >
              <div className="font-bold text-sm text-slate-700 flex items-center justify-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#1a1c4b]" />
                {partner.name}
              </div>
              <div className="text-[11px] font-bold text-emerald-600 mt-1">
                {partner.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview({ onSelectService, onViewAllServices }) {
  const featured = SERVICES_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Practices</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
              Specialized Consulting Architecture
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl text-sm sm:text-base font-medium">
              Each practice is led by senior operators with deep P&L accountability, not theoretical junior analysts.
            </p>
          </div>
          <button
            onClick={onViewAllServices}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1a1c4b] hover:text-blue-800 group"
          >
            <span>Explore All 6 Practice Disciplines</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((svc) => (
            <div
              key={svc.id}
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#1a1c4b]/30 hover:shadow-xl hover:shadow-[#1a1c4b]/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-md bg-[#1a1c4b]/10 text-[#1a1c4b] border border-[#1a1c4b]/20 uppercase tracking-wider">
                    {svc.category}
                  </span>
                  <span className="text-xs font-bold text-[#d31118] bg-red-100 px-2.5 py-0.5 rounded-full border border-red-200">
                    {svc.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#1a1c4b] transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">
                  {svc.shortDesc}
                </p>

                {/* Impact Stat */}
                <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">
                    Demonstrated Outcome: <span className="text-emerald-600">{svc.impact}</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Timeline: <strong className="text-slate-700 font-bold">{svc.timeline}</strong>
                </span>
                <button
                  onClick={() => onSelectService(svc.id)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#1a1c4b] hover:bg-blue-900 active:scale-95 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>Inquire Practice</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const pillars = [
    {
      icon: Target,
      title: 'Data-Validated Empirical Models',
      desc: 'We discard anecdotal intuition in favor of quantitative diagnostics, multivariate forecasting, and stress-tested financial models.'
    },
    {
      icon: Shield,
      title: 'Partner-Led Direct Advisory',
      desc: 'No "bait-and-switch" staffing. Your engagement is supervised and executed directly by 15+ year industry veteran directors.'
    },
    {
      icon: Cpu,
      title: 'Agile Execution & Enablement',
      desc: 'We work directly in your slack, project boards, and systems to ensure strategic handoffs actually transform into company habits.'
    },
    {
      icon: Coins,
      title: 'Value-Tied Fee Alignment',
      desc: 'We design consulting fees tied to measurable financial expansion, operational throughput increases, and verified ROI.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Competitive Moat</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Why Enterprise Leaders Retain White Stone Consultant
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
            Consulting shouldn't be an abstract academic exercise. We provide relentless execution backed by fiduciary transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#1a1c4b]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a1c4b]/5 border border-[#1a1c4b]/10 flex items-center justify-center text-[#1a1c4b] mb-5 group-hover:scale-105 group-hover:bg-[#1a1c4b] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowWeWork({ onOpenConsultation }) {
  const steps = [
    {
      step: '01',
      title: 'Audit & Diagnostic Sprint',
      desc: 'Deep forensic review of P&L statements, operational work logs, and stakeholder interviews to pinpoint friction drivers.',
      deliverable: '14-Day Diagnostic Health Report'
    },
    {
      step: '02',
      title: 'Strategic Blueprinting',
      desc: 'Collaborative development of the Target Operating Model with prioritized workstreams, milestone gates, and budget parameters.',
      deliverable: 'Board-Approved Execution Matrix'
    },
    {
      step: '03',
      title: 'Phased Enablement & Pilot',
      desc: 'On-the-ground execution. We build sprints alongside your department heads, resolving adoption inertia in real-time.',
      deliverable: 'Live Automated Dashboards & SOPs'
    },
    {
      step: '04',
      title: 'KPI Verification & Scale',
      desc: 'Rigorous post-deployment review verifying bottom-line EBITDA gains, followed by governance handover to internal leadership.',
      deliverable: 'Final Impact Audit & 60-Day Support'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Our 4-Stage Engagement Framework
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
            Predictable, phased delivery designed to deliver fast wins within 30 days while constructing lasting structural advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#1a1c4b] font-mono">
                    {s.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d31118] animate-pulse" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider block mb-1">
                  Primary Milestone
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {s.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-extrabold text-white bg-[#1a1c4b] hover:bg-blue-900 transition-all shadow-lg shadow-[#1a1c4b]/20"
          >
            <span>Review Engagement Protocols with a Partner</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <Star className="w-3.5 h-3.5 fill-[#d31118]" />
            <span>Verified Case Outcomes</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Trusted by Leaders with Capital on the Line
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
            Read direct feedback from C-Suite executives who entrusted us with their high-stakes operational transitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 font-medium italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="mb-4 inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-extrabold">
                  {t.metrics}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{t.author}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}, <span className="text-slate-700 font-bold">{t.company}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Fiduciary Clarity</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Advisory Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-medium">
            Everything you need to understand our timelines, legal frameworks, and engagement scopes.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-slate-900 font-extrabold hover:text-[#1a1c4b] transition-colors"
                >
                  <span className="text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1a1c4b]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CallToActionBanner({ onOpenConsultation }) {
  return (
    <section className="py-16 bg-[#1a1c4b] border-t border-b border-blue-900 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#d31118]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-blue-950 to-[#1a1c4b] border border-blue-800 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#d31118]/20 text-red-200 border border-[#d31118]/30 mb-3">
              Confidential Discovery Session
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to Accelerate Growth & Eradicate Operational Waste?
            </h2>
            <p className="mt-3 text-blue-100 text-sm sm:text-base leading-relaxed font-medium">
              Book a 30-minute strategic consultation with our managing partner. We analyze your current bottlenecks and present a clear preliminary action thesis.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-[#d31118] to-red-700 hover:from-red-600 hover:to-red-800 shadow-xl shadow-red-900/40 transition-all text-center"
            >
              Schedule Consultation
            </button>
            <a
              href="https://wa.me/18005559821?text=Hello%20White%20Stone,%20I%20would%20like%20to%20discuss%20a%20strategic%20consultancy%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl text-base font-bold text-[#1a1c4b] bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ onOpenConsultation }) {
  const values = [
    {
      title: 'Fiduciary Integrity',
      desc: 'We tell leadership the truth they need to hear, not flattering platitudes that protect executive comfort.'
    },
    {
      title: 'Obsessive Rigor',
      desc: 'Every recommendation is supported by hard financial analysis, empirical evidence, and tested downside controls.'
    },
    {
      title: 'Execution Over Theory',
      desc: 'We do not hand over theoretical slides. We stand beside your operational leaders through implementation and validation.'
    },
    {
      title: 'Measurable ROI',
      desc: 'If our advisory engagements do not clearly generate multi-fold returns on investment, we have not succeeded.'
    }
  ];

  const leaders = [
    {
      name: 'Alexander Sterling',
      role: 'Managing Partner & Founder',
      bio: 'Ex-McKinsey Principal with 18+ years directing cross-border restructurings and private equity portfolio turnarounds.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Katherine Davenport, CFA',
      role: 'Head of Financial Optimization',
      bio: 'Former VP of Capital Markets at Morgan Stanley. Oversees financial governance, liquidity architecture, and M&A diligence.',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Director of Digital Transformation',
      bio: 'Cloud and AI architect who previously scaled enterprise SaaS platforms from series A to multi-billion IPO filings.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="py-16 sm:py-24 animate-in fade-in duration-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <Building className="w-3.5 h-3.5" />
            <span>Firm Profile & Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Built by Operators for Leaders Facing High Stakes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            White Stone Consultant was founded with a singular conviction: the traditional corporate advisory model is bloated, 
            academic, and detached from frontline reality. We created an agile, battle-tested practice engineered 
            to generate immediate velocity.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-[#1a1c4b]/10 text-[#1a1c4b] flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Core Mission</h3>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              To empower enterprise executives with forensic clarity, decisive operational strategies, and high-impact digital tools 
              that turn vulnerable cost structures into defensible market advantages.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-[#d31118] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our 2030 Vision</h3>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              To remain the most trusted partner of choice for mid-market and enterprise leadership navigating complex technological 
              disruption, global regulation, and capital market transformation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Guiding Values</h2>
            <p className="text-slate-600 font-medium text-sm mt-2">The four immutable commitments we make to each executive partnership.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#d31118] mb-3" />
                <h4 className="text-lg font-extrabold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Practice Leadership</h2>
            <p className="text-slate-600 font-medium text-sm mt-2">Seasoned managing directors who directly spearhead every engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((person, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900">{person.name}</h3>
                  <p className="text-xs font-black text-[#1a1c4b] mb-3">{person.role}</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Firm Milestones & Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="relative border-l-2 border-[#d31118]/40 pl-4">
                <span className="text-xs font-black text-[#d31118] uppercase tracking-wider">{m.year}</span>
                <h4 className="text-base font-extrabold text-slate-900 mt-1">{m.title}</h4>
                <p className="text-xs text-slate-600 font-medium mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Strategy', 'Operations', 'Digital', 'Financial'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="py-16 sm:py-24 animate-in fade-in duration-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Practice Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Tailored Consulting Solutions
          </h1>
          <p className="mt-4 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            Choose a practice area below to inspect scope deliverables, execution timelines, and request an executive proposal.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1a1c4b] text-white shadow-lg shadow-[#1a1c4b]/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-[#1a1c4b] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#1a1c4b]/30 hover:shadow-xl shadow-sm flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black px-3 py-1 rounded bg-[#1a1c4b]/10 text-[#1a1c4b] border border-[#1a1c4b]/20 uppercase tracking-wider">
                    {svc.category}
                  </span>
                  <span className="text-xs font-bold text-[#d31118] bg-red-100 px-3 py-1 rounded-full border border-red-200">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3">{svc.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">{svc.fullDesc}</p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    Included Engagement Deliverables:
                  </h4>
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1a1c4b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold text-slate-500">Estimated Duration:</div>
                  <div className="text-xs font-black text-slate-900">{svc.timeline}</div>
                </div>
                <button
                  onClick={() => onSelectService(svc.id)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#d31118] hover:bg-red-700 shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Custom Scope & Fee</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage({ onNotify }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Digital Transformation',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: 'Digital Transformation',
        message: ''
      });
      onNotify('Your communication was received securely. A Senior Principal will reply within 2 business hours.');
    }, 800);
  };

  return (
    <div className="py-16 sm:py-24 animate-in fade-in duration-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#d31118] uppercase tracking-widest mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Advisory Inquiry</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Connect with Our Managing Partners
          </h1>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
            Every inquiry is treated with strict confidentiality under our standard preliminary NDA guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Global Advisory Presence</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1c4b]/10 text-[#1a1c4b] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">New York Headquarters</h4>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      767 Fifth Avenue, 28th Floor<br />
                      New York, NY 10153, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1c4b]/10 text-[#1a1c4b] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">London Advisory Office</h4>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      100 Bishopsgate, Suite 1400<br />
                      London EC2N 4AG, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-[#d31118] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">Direct Line</h4>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      Toll-Free: +1 (800) 555-9821<br />
                      UK Direct: +44 20 7946 0912
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1c4b]/10 text-[#1a1c4b] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">Confidential Inquiries</h4>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      advisory@whitestoneconsultant.com<br />
                      partners@whitestoneconsultant.com
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link Card */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a
                  href="https://wa.me/18005559821?text=Hello%20White%20Stone,%20I%20have%20an%20urgent%20consultancy%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-emerald-100 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Start Live WhatsApp Chat with Practice Lead</span>
                </a>
              </div>
            </div>

            {/* SLA Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#1a1c4b] shrink-0" />
              <div>
                <h4 className="text-xs font-extrabold text-slate-900">Guaranteed Response SLA</h4>
                <p className="text-[11px] font-medium text-slate-600 mt-0.5">
                  All enterprise communications receive an initial assessment within 2 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xl">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Initiate Engagement Inquiry</h3>
              <p className="text-xs text-slate-600 font-medium mb-6">
                Complete this form and our engagement desk will pair you with the corresponding practice partner.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Richard Hendricks"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="richard@piedpiper.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Direct Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      required
                      type="text"
                      placeholder="Enterprise Group"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Practice of Interest</label>
                  <select
                    value={contactForm.serviceInterest}
                    onChange={(e) => setContactForm({ ...contactForm, serviceInterest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1a1c4b]"
                  >
                    <option value="Management Consulting">Management & Operational Consulting</option>
                    <option value="Digital Transformation">Enterprise Digital Transformation</option>
                    <option value="Strategy & Advisory">Corporate Strategy & Market Advisory</option>
                    <option value="Financial Optimization">Financial Restructuring & Optimization</option>
                    <option value="Risk & Governance">Risk Governance & Regulatory Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Engagement Brief / Key Objectives *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Outline your timeline, goals, and any current roadblocks..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a1c4b] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-[#d31118] to-red-700 hover:from-red-600 hover:to-red-800 shadow-xl shadow-red-700/30 transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Secure Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Dispatch</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/18005559821?text=Hello%20White%20Stone,%20I%20would%20like%20to%20inquire%20about%20a%20consulting%20engagement."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-900/50 flex items-center gap-3 group transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold tracking-wide pr-1">
        Quick Chat
      </span>
    </a>
  );
}

function Footer({ setActivePage, onOpenConsultation }) {
  const navigate = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1c4b] border-t border-blue-900 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-2xl">
                <span className="text-[#1a1c4b]">W</span><span className="text-[#d31118]">/</span><span className="text-[#1a1c4b]">S</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white flex items-center">
                WHITE<span className="text-[#d31118] ml-1">STONE</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-sm leading-relaxed">
              Premier management, strategic advisory, and overseas consulting. Delivering proven ROI through empirical metrics and partner-led execution.
            </p>
            <div className="pt-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Registered Corporate Entity: White Stone PTE Ltd.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="hover:text-white transition-colors">
                  Practice Areas
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-white transition-colors">
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practices */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">Practices</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => navigate('services')} className="hover:text-white transition-colors">
                  Management Advisory
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="hover:text-white transition-colors">
                  Digital Transformation
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="hover:text-white transition-colors">
                  Financial Restructuring
                </button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="hover:text-white transition-colors">
                  Overseas Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Fiduciary & Contact */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">Direct Contact</h4>
            <p className="text-xs text-slate-400 font-medium mb-2">New York: +1 (800) 555-9821</p>
            <p className="text-xs text-slate-400 font-medium mb-4">Email: advisory@whitestoneconsultant.com</p>
            <button
              onClick={() => onOpenConsultation()}
              className="px-4 py-2 rounded-lg text-xs font-extrabold text-white bg-[#d31118] hover:bg-red-700 shadow-md shadow-red-900/20"
            >
              Book Strategy Call
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} White Stone PTE Overseas Consultant. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Bilateral NDA Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">Data Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Fiduciary Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 5000);
  };

  const handleOpenConsultation = (serviceId = '') => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  };

  const handleViewAllServices = () => {
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#d31118] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 max-w-md bg-white border border-slate-200 text-slate-900 px-5 py-4 rounded-xl shadow-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-bold leading-snug">{toastMessage}</div>
          <button 
            onClick={() => setToastMessage('')}
            className="text-slate-400 hover:text-slate-700 ml-auto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content Router */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <HeroSection
              onOpenConsultation={() => handleOpenConsultation()}
              onExploreSolutions={handleViewAllServices}
            />
            <TrustBar />
            <ServicesOverview
              onSelectService={(id) => handleOpenConsultation(id)}
              onViewAllServices={handleViewAllServices}
            />
            <WhyChooseUs />
            <HowWeWork onOpenConsultation={() => handleOpenConsultation()} />
            <TestimonialsSection />
            <FaqSection />
            <CallToActionBanner onOpenConsultation={() => handleOpenConsultation()} />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage onOpenConsultation={() => handleOpenConsultation()} />
        )}

        {activePage === 'services' && (
          <ServicesPage onSelectService={(id) => handleOpenConsultation(id)} />
        )}

        {activePage === 'contact' && (
          <ContactPage onNotify={showNotification} />
        )}
      </main>

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppFloating />

      {/* Universal Consultation / Quote Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedServiceId}
        onNotify={showNotification}
      />

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
