'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Globe,
  Code, TrendingUp, Coffee, Star, X, CheckCircle, Upload,
  ChevronDown, BookOpen, Lightbulb, Award, Smile, DollarSign,
  Monitor, Handshake, GraduationCap, Building
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Data ──────────────────────────────────────────────────────────────────
const openRoles = [
  {
    id: 1,
    title: 'Business Development Executive (BDE)',
    department: 'Sales',
    location: 'Remote',
    experience: '1–3 Years',
    type: 'Full-time',
    gradient: 'from-sky-500 to-cyan-400',
    bgLight: 'from-sky-50 to-cyan-50',
    glowColor: 'rgba(14,165,233,0.25)',
    tags: ['B2B Sales', 'Lead Gen', 'CRM'],
    description: 'Drive pipeline growth by identifying new business opportunities, securing client meetings, and consistently exceeding targets.',
    responsibilities: [
      'Identify and build targeted lead lists across global B2B sectors',
      'Execute multi-channel outbound campaigns (LinkedIn, Email, Cold Calling)',
      'Qualify inbound leads and book discovery calls for senior leadership',
      'Maintain diligent records in the CRM tracking daily metrics',
    ],
    requirements: [
      '1–3 years experience in B2B sales or lead generation',
      'Strong phone presence and relentless persistence',
      'Familiarity with CRM tools (HubSpot, Salesforce)',
      'Excellent written and verbal communication skills',
    ],
    benefits: ['Competitive base + uncapped commission', 'Fast-track promotion path', 'Remote work flexibility'],
  },
  {
    id: 2,
    title: 'Social Media Manager (SSM)',
    department: 'Marketing',
    location: 'Hybrid',
    experience: '2–4 Years',
    type: 'Full-time',
    gradient: 'from-cyan-500 to-teal-400',
    bgLight: 'from-cyan-50 to-teal-50',
    glowColor: 'rgba(20,184,166,0.25)',
    tags: ['Content', 'Community', 'Branding'],
    description: 'Be the voice of AMNXT DIGITAL across all social channels, crafting compelling narratives that engage our global audience.',
    responsibilities: [
      'Develop and execute comprehensive social media calendars',
      'Create high-quality, engaging visual and written content daily',
      'Monitor brand reputation and engage rapidly with community comments',
      'Track social metrics and adjust strategies for maximum viral impact',
    ],
    requirements: [
      '2+ years managing high-growth corporate social accounts',
      'Expertise in LinkedIn, Instagram, X, and TikTok algorithms',
      'Graphic design/video editing basics (Canva, CapCut, Premiere)',
      'Creative mindset capable of turning dry tech topics into viral hooks',
    ],
    benefits: ['Creative autonomy', 'Budget for viral experiments', 'Weekly team lunches'],
  },
  {
    id: 3,
    title: 'Digital Marketer',
    department: 'Marketing',
    location: 'Remote',
    experience: '3–5 Years',
    type: 'Full-time',
    gradient: 'from-blue-500 to-sky-400',
    bgLight: 'from-blue-50 to-sky-50',
    glowColor: 'rgba(59,130,246,0.25)',
    tags: ['SEO', 'Content Strategy', 'Analytics'],
    description: 'Orchestrate our global organic growth by engineering high-converting SEO content, email funnels, and brand campaigns.',
    responsibilities: [
      'Optimize website architecture and on-page content for search engines',
      'Design targeted email marketing workflows to nurture leads',
      'Write highly technical blog posts, whitepapers, and case studies',
      'Monitor web traffic using GA4 and deliver actionable monthly insights',
    ],
    requirements: [
      '3+ years of robust full-stack digital marketing experience',
      'Deep understanding of technical SEO and content marketing',
      'Proficiency in Google Analytics, Ahrefs, and Mailchimp',
      'Strong copywriting background with flawless grammar',
    ],
    benefits: ['Remote mobility', 'Performance bonuses', 'Budget for industry courses'],
  },
  {
    id: 4,
    title: 'Virtual Assistant',
    department: 'Operations',
    location: 'Remote',
    experience: '1–3 Years',
    type: 'Full-time',
    gradient: 'from-emerald-500 to-teal-400',
    bgLight: 'from-emerald-50 to-teal-50',
    glowColor: 'rgba(16,185,129,0.25)',
    tags: ['Admin', 'Scheduling', 'Operations'],
    description: 'Ensure smooth daily operations by acting as the organizational backbone for our executive leadership team.',
    responsibilities: [
      'Manage complex calendars, coordinate meetings, and handle travel arrangements',
      'Monitor executive inboxes, drafting emails and prioritizing urgent requests',
      'Assist in light bookkeeping, data entry, and CRM database hygiene',
      'Prepare agendas and take detailed action-item notes during team calls',
    ],
    requirements: [
      '1+ years of experience as an executive or virtual assistant',
      'Extreme attention to detail and hyper-organized mindset',
      'Fluent English speaker with impeccable written communication',
      'Ability to thrive in a fast-paced, async, remote environment',
    ],
    benefits: ['Stable remote hours', 'Health insurance stipend', 'Home office budget'],
  },
  {
    id: 5,
    title: 'Web Developer',
    department: 'Engineering',
    location: 'Remote',
    experience: '2–5 Years',
    type: 'Full-time',
    gradient: 'from-sky-500 to-blue-400',
    bgLight: 'from-sky-50 to-blue-50',
    glowColor: 'rgba(14,165,233,0.25)',
    tags: ['React', 'Next.js', 'Tailwind'],
    description: 'Build fast, accessible, and scalable web products that power our clients across multiple global industries.',
    responsibilities: [
      'Develop pixel-perfect, responsive React/Next.js frontends from Figma designs',
      'Integrate frontend components with modern REST/GraphQL APIs',
      'Maintain code quality through rigorous PR reviews and testing protocols',
      'Optimize web performance to maintain 95+ Core Web Vitals scores',
    ],
    requirements: [
      '2+ years of professional web development experience using React',
      'Strong grasp of semantic HTML, modern CSS, and TypeScript',
      'Familiarity with version control (Git) and CI/CD deployment logic',
      'Ability to problem solve independently inside an async team',
    ],
    benefits: ['Top-tier salary', 'Flexible async hours', 'New MacBook Pro provided'],
  },
  {
    id: 6,
    title: 'Business Development Manager',
    department: 'Leadership',
    location: 'Hybrid',
    experience: '5+ Years',
    type: 'Full-time',
    gradient: 'from-amber-500 to-orange-400',
    bgLight: 'from-amber-50 to-orange-50',
    glowColor: 'rgba(245,158,11,0.25)',
    tags: ['Leadership', 'Sales', 'Strategy'],
    description: 'Lead a high-performing sales team, architecting GTM strategies, and closing enterprise-level technology contracts.',
    responsibilities: [
      'Train, mentor, and manage a team of ambitious Business Development Executives',
      'Pitch and present to C-level executives at major enterprise targets',
      'Develop long-term strategic partnerships and channel sales networks',
      'Analyze market trends and competitor activity to adjust strategy',
    ],
    requirements: [
      '5+ years in aggressive B2B tech/SaaS sales, with 2+ years managing teams',
      'Proven track record of consistently exceeding 7-figure quotas',
      'Exceptional presentation, negotiation, and contract closing skills',
      'Strategic thinker capable of modeling sales trajectories',
    ],
    benefits: ['Highly competitive base + overrides', 'Equity options', 'Executive retreats'],
  },
  {
    id: 7,
    title: 'HR Acquisition Specialist',
    department: 'Human Resources',
    location: 'Remote',
    experience: '3–5 Years',
    type: 'Full-time',
    gradient: 'from-cyan-500 to-blue-400',
    bgLight: 'from-cyan-50 to-blue-50',
    glowColor: 'rgba(6,182,212,0.25)',
    tags: ['Recruiting', 'Talent', 'Culture'],
    description: 'Serve as the gatekeeper to our culture, sourcing and hiring world-class talent to fuel our global scaling efforts.',
    responsibilities: [
      'Manage the full-cycle recruitment process from sourcing to offer negotiation',
      'Actively headhunt passive talent on LinkedIn and specialist platforms',
      'Collaborate with department leads to define exact role requirements',
      'Enhance our employer brand and optimize the candidate experience pipeline',
    ],
    requirements: [
      '3+ years experience as a technical or corporate recruiter',
      'Deep understanding of boolean search strings and sourcing tactics',
      'Stellar interpersonal skills and emotional intelligence',
      'Experience managing ATS software (Grayscale, Lever, etc.)',
    ],
    benefits: ['Placement bonuses', 'Flexible hours', 'Company wellness program'],
  },
  {
    id: 8,
    title: 'Performance Marketing',
    department: 'Marketing',
    location: 'Remote',
    experience: '3–6 Years',
    type: 'Full-time',
    gradient: 'from-blue-500 to-indigo-400',
    bgLight: 'from-blue-50 to-indigo-50',
    glowColor: 'rgba(99,102,241,0.25)',
    tags: ['PPC', 'Meta Ads', 'Conversion'],
    description: 'Be the quantitative engine of our marketing efforts, driving measurable ROI through hyper-optimized paid media campaigns.',
    responsibilities: [
      'Architect and deploy high-converting ad campaigns across Google, Meta, and LinkedIn',
      'A/B test ad copy, creative assets, and landing pages to reduce CAC',
      'Manage 6-figure monthly ad budgets pacing against strict ROAS targets',
      'Analyze daily campaign data to pivot strategies in real time',
    ],
    requirements: [
      '3+ years managing large-scale paid media budgets in a B2B setting',
      'Expert level knowledge of Google Ads Tag Manager and Pixel tracking',
      'Highly analytical background—decisions made strictly by data',
      'Familiarity with landing page optimization software',
    ],
    benefits: ['Aggressive performance bonuses', '$2,000 tech budget', 'Remote mobility'],
  }
];

const whyJoinUs = [
  { icon: DollarSign, title: 'Competitive Salary', desc: 'Market-leading pay with equity and performance bonuses.', gradient: 'from-emerald-500 to-teal-400' },
  { icon: GraduationCap, title: 'Learning & Development', desc: '$2,000/yr budget for courses, books and conferences.', gradient: 'from-sky-500 to-cyan-400' },
  { icon: Smile, title: 'Friendly Culture', desc: 'Collaborative, inclusive team that celebrates wins together.', gradient: 'from-cyan-500 to-teal-400' },
  { icon: Monitor, title: 'Work-Life Balance', desc: 'Async-first, flexible hours — results matter, not clock-watching.', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Globe, title: 'Global Client Exposure', desc: 'Work on projects for clients across 30+ countries worldwide.', gradient: 'from-amber-500 to-orange-400' },
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear progression paths with quarterly career reviews.', gradient: 'from-sky-500 to-cyan-400' },
];

const highlights = [
  { icon: Lightbulb, label: 'Innovation-Driven Culture', desc: 'We experiment boldly, iterate fast and learn from every outcome.' },
  { icon: TrendingUp, label: 'Growth Opportunities', desc: 'Accelerated career paths with mentorship and leadership tracks.' },
  { icon: Coffee, label: 'Flexible Work Environment', desc: 'Remote-first with async collaboration — your schedule, your way.' },
  { icon: Globe, label: 'Global Client Exposure', desc: 'Build products used by businesses across 30+ countries.' },
];

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

// ─── Job Card ─────────────────────────────────────────────────────────────
function JobCard({ role, onView, onApply, delay }: { role: typeof openRoles[0]; onView: () => void; onApply: () => void; delay: number }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className="job-card group">
      <div className="job-card-inner">
        {/* Top */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shrink-0 shadow-md`}>
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${role.type === 'Internship' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-brand-50 text-brand-600 border border-brand-100'}`}>
                {role.type}
              </span>
              <span className="text-xs text-gray-400">{role.department}</span>
            </div>
            <h3 className="font-display font-bold text-gray-900 text-base leading-tight">{role.title}</h3>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-brand-400" />{role.location}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-400" />{role.experience}</span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">{role.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {role.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={onView}
            className="flex-1 text-sm font-medium py-2.5 rounded-xl border border-brand-200 text-brand-600 bg-white hover:bg-brand-50 hover:border-brand-400 transition-all duration-200"
          >
            View Details
          </button>
          <button
            onClick={onApply}
            className="flex-1 text-sm font-medium py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-500 to-accent-violet hover:brightness-110 hover:shadow-brand transition-all duration-200"
          >
            Apply Now
          </button>
        </div>
      </div>
      {/* Glow on hover */}
      <div className="job-card-glow" style={{ background: `radial-gradient(circle at center, ${role.glowColor} 0%, transparent 70%)` }} />
    </div>
  );
}

// ─── Job Modal ─────────────────────────────────────────────────────────────
function JobModal({ role, onClose, onApply }: { role: typeof openRoles[0]; onClose: () => void; onApply: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={`modal-header bg-gradient-to-br ${role.gradient}`}>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-white/70 text-sm font-medium">{role.department}</span>
              <h2 className="text-2xl font-display font-bold text-white mt-1">{role.title}</h2>
              <div className="flex flex-wrap gap-3 mt-3 text-white/80 text-sm">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{role.location}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{role.experience}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{role.type}</span>
              </div>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-section">
            <h4><BookOpen className="w-4 h-4 inline-block mr-2 text-brand-500" />About the Role</h4>
            <p>{role.description}</p>
          </div>

          <div className="modal-section">
            <h4><Zap className="w-4 h-4 inline-block mr-2 text-brand-500" />Responsibilities</h4>
            <ul>{role.responsibilities.map((r, i) => <li key={i}><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /><span>{r}</span></li>)}</ul>
          </div>

          <div className="modal-section">
            <h4><Award className="w-4 h-4 inline-block mr-2 text-brand-500" />Requirements</h4>
            <ul>{role.requirements.map((r, i) => <li key={i}><CheckCircle className="w-4 h-4 text-brand-400 shrink-0" /><span>{r}</span></li>)}</ul>
          </div>

          <div className="modal-section">
            <h4><Star className="w-4 h-4 inline-block mr-2 text-amber-400" />Benefits</h4>
            <div className="benefits-grid">
              {role.benefits.map((b, i) => <span key={i} className="benefit-tag">{b}</span>)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn-secondary text-sm py-2.5 px-5">Close</button>
          <button onClick={onApply} className="btn-primary text-sm py-2.5 px-6">
            Apply for this Role <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Application Form ──────────────────────────────────────────────────────
function ApplicationForm({ prefillRole, lang, onClose }: { prefillRole?: string; lang: string; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: prefillRole || '', cover: '' });
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'A valid email is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,}$/.test(form.phone)) errs.phone = 'A valid phone number is required';
    if (!form.position) errs.position = 'Please select a position';
    if (!fileName) errs.resume = 'Please upload your resume';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header bg-gradient-to-br from-brand-600 to-accent-violet">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display font-bold text-white">Apply for a Position</h2>
              <p className="text-white/70 text-sm mt-1">Fill in the details below and we'll get back to you shortly.</p>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-5 animate-scaleIn shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">Application Submitted!</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto">
                Thanks, <strong>{form.name.split(' ')[0]}</strong>! Our team will review your application and reach out within 3–5 business days.
              </p>
              <button onClick={onClose} className="btn-primary mt-6 text-sm py-2.5 px-6">Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 py-1" noValidate>
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className={cn('input-base', errors.name && 'border-red-400 bg-red-50')} placeholder="John Doe" value={form.name}
                    onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input type="email" className={cn('input-base', errors.email && 'border-red-400 bg-red-50')} placeholder="john@example.com" value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Position */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className={cn('input-base', errors.phone && 'border-red-400 bg-red-50')} placeholder="+1 555 000 0000" value={form.phone}
                    onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>
                <div>
                  <label className="form-label">Position Applying For *</label>
                  <div className="relative">
                    <select
                      className={cn('input-base appearance-none pr-10', errors.position && 'border-red-400 bg-red-50')}
                      value={form.position}
                      onChange={(e) => setForm(f => ({ ...f, position: e.target.value }))}
                    >
                      <option value="">Select a position…</option>
                      {openRoles.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
                      <option value="Open Application">Open Application</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.position && <p className="form-error">{errors.position}</p>}
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="form-label">Resume / CV * <span className="text-gray-400 text-xs font-normal">(PDF or DOC, max 5MB)</span></label>
                <label className={cn('resume-upload-box', errors.resume && 'border-red-300 bg-red-50', fileName && 'border-emerald-400 bg-emerald-50')}>
                  <input type="file" accept=".pdf,.doc,.docx" className="sr-only"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }} />
                  {fileName ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                      <span className="text-sm font-medium text-emerald-700">{fileName}</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-sm text-gray-500">Click to upload or drag & drop</span>
                    </>
                  )}
                </label>
                {errors.resume && <p className="form-error">{errors.resume}</p>}
              </div>

              {/* Cover Letter */}
              <div>
                <label className="form-label">Cover Letter <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                <textarea
                  rows={4}
                  className="input-base resize-none"
                  placeholder="Tell us why you'd be a great fit for AMNXT DIGITAL…"
                  value={form.cover}
                  onChange={(e) => setForm(f => ({ ...f, cover: e.target.value }))}
                />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full btn-primary justify-center py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting…</>
                ) : (
                  <><span>Submit Application</span><ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────
export default function CareersClient({ lang }: { lang: string }) {
  const [viewRole, setViewRole] = useState<typeof openRoles[0] | null>(null);
  const [applyRole, setApplyRole] = useState<string | undefined>(undefined);
  const [showApply, setShowApply] = useState(false);

  // section refs
  const heroTagRef = useReveal(0);
  const aboutRef = useReveal(0);
  const rolesHeadRef = useReveal(0);
  const whyHeadRef = useReveal(0);
  const cultureRef = useReveal(0);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div ref={heroTagRef}>
            <div className="section-label mx-auto mb-5 w-max">We're Hiring</div>
            <h1 className="font-display font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl mb-5 text-gray-900">
              Build the Future <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
              Join a driven team of engineers, designers and strategists who are passionate about
              transforming businesses through technology.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => { setApplyRole(undefined); setShowApply(true); }} className="btn-primary">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#open-roles" className="btn-secondary">See Open Roles</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Working With Us ────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: copy */}
            <div ref={aboutRef}>
              <div className="section-label mb-5">About Working With Us</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-gray-900 mb-5">
                A Place Where <span className="text-gradient">Great Careers Happen</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                At AMNXT DIGITAL, we believe that exceptional people do the best work of their careers
                when they're challenged, trusted and supported. We're a remote-first, globally
                distributed team building technology that makes a real difference for our clients
                across 30+ countries.
              </p>
              <div className="space-y-4">
                {highlights.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-900 mb-0.5">{label}</h4>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '80+', label: 'Team Members', gradient: 'from-brand-500 to-accent-purple' },
                { value: '30+', label: 'Countries', gradient: 'from-blue-500 to-cyan-400' },
                { value: '4.9★', label: 'Glassdoor Rating', gradient: 'from-amber-500 to-orange-400' },
                { value: '94%', label: 'Retention Rate', gradient: 'from-emerald-500 to-teal-400' },
              ].map((stat, i) => {
                const r = useReveal(i * 80);
                return (
                  <div key={stat.label} ref={r}
                    className="relative rounded-3xl overflow-hidden border border-brand-100 p-8 bg-gradient-to-br from-surface-1 to-white text-center">
                    <div className={`text-3xl font-display font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text`}
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</p>
                    <div className={`absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br ${stat.gradient} opacity-5`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Join Us ──────────────────────────────────────────────── */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom">
          <div className="text-center mb-14" ref={whyHeadRef}>
            <div className="section-label mx-auto mb-4 w-max">Why AMNXT DIGITAL</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900">
              Why You'll Love It Here
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoinUs.map(({ icon: Icon, title, desc, gradient }, i) => {
              const r = useReveal(i * 80);
              return (
                <div key={title} ref={r} className="card-base p-6 h-full hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Roles ───────────────────────────────────────────────── */}
      <section id="open-roles" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14" ref={rolesHeadRef}>
            <div className="section-label mx-auto mb-4 w-max">Open Positions</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900">
              Find Your Role
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We're hiring across engineering, design, marketing and more. Click a card to learn more, or apply directly.
            </p>
          </div>

          <div className="roles-grid">
            {openRoles.map((role, i) => (
              <JobCard
                key={role.id}
                role={role}
                delay={i * 70}
                onView={() => setViewRole(role)}
                onApply={() => { setApplyRole(role.title); setShowApply(true); }}
              />
            ))}
          </div>

          {/* open application CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Don't see a role that fits? We'd still love to hear from you.</p>
            <button onClick={() => { setApplyRole('Open Application'); setShowApply(true); }} className="btn-secondary">
              Send an Open Application <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Culture / CTA banner ─────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-brand-600 via-brand-700 to-accent-violet relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10 text-center" ref={cultureRef}>
          <div className="section-label mx-auto mb-6 w-max" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Join the Team
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-5">
            Start Your Journey Today
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Take the next step in your career. Apply now — we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { setApplyRole(undefined); setShowApply(true); }}
              className="btn-primary" style={{ background: 'white', color: '#7e22ce' }}>
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
            <Link href={`/${lang}/contact`} className="btn-secondary"
              style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Modals ───────────────────────────────────────────────────── */}
      {viewRole && (
        <JobModal
          role={viewRole}
          onClose={() => setViewRole(null)}
          onApply={() => { setApplyRole(viewRole.title); setViewRole(null); setShowApply(true); }}
        />
      )}
      {showApply && (
        <ApplicationForm
          prefillRole={applyRole}
          lang={lang}
          onClose={() => setShowApply(false)}
        />
      )}
    </>
  );
}
