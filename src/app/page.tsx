'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';
import {
  Users,
  Target,
  CheckSquare,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Zap,
  MessageSquare,
  Layers,
  Sparkles,
  ChevronRight,
  Star,
  Clock,
  Calendar,
  Mail,
  Phone,
  Building2,
  Award,
  Globe2,
  Headphones,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAuthenticated, router]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* Top Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500" />

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-75 blur-sm" />
              <Image
                src="/images/tivra-logo.jpg"
                alt="Tivra CRM Logo"
                width={44}
                height={44}
                className="relative rounded-full object-cover border-2 border-white"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl font-black tracking-tight text-slate-900">TIVRA</h1>
                <span className="text-orange-600 font-bold text-xs px-1.5 py-0.5 bg-orange-50 rounded-md border border-orange-200">CRM</span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.15em] font-semibold text-slate-400">
                Connect • Share • Grow
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition">Features</Link>
            <Link href="#solutions" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition">Solutions</Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition">Pricing</Link>
            <Link href="#resources" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition">Resources</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold rounded-lg hover:from-orange-700 hover:to-orange-600 shadow-lg shadow-orange-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-[120px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-100 shadow-sm text-orange-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-orange-500" />
                AI-Powered Cloud CRM Platform
                <ChevronRight className="w-3 h-3" />
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-slate-900">The CRM That</span><br />
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Actually Works
                </span><br />
                <span className="text-slate-900">For Your Team</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Tivra combines intelligent automation, deep analytics, and a delightful interface to help sales teams close deals faster. Trusted by 15,000+ growing businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="group flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-200 shadow-xl shadow-slate-900/20 hover:shadow-orange-600/25 active:scale-[0.98]"
                >
                  Start 14-Day Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="#features"
                  className="flex items-center justify-center gap-2 border-2 border-slate-200 bg-white px-8 py-4 rounded-xl font-semibold text-slate-700 hover:border-orange-300 hover:bg-orange-50 transition-all"
                >
                  Watch Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 border-2 border-white" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="ml-2 text-sm font-medium text-slate-600">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>

            {/* Hero Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 text-xs text-slate-400 font-mono">dashboard.tivra.com | Pipeline Overview</div>
                </div>
                <Image
                  src="/images/tivra-logo.jpg"
                  alt="Tivra CRM Dashboard Preview"
                  width={550}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Company', 'Brand', 'Enterprise', 'Startup', 'Global Inc'].map((name) => (
              <div key={name} className="text-slate-400 font-bold text-lg tracking-wide">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Zap className="w-3.5 h-3.5" />
              Powerful Features
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Everything You Need to Scale Sales
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Modern CRM capabilities packed into an intuitive platform that your team will actually love using.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Smart Lead Scoring"
              description="AI-powered lead scoring that prioritizes high-intent prospects and automatically routes them to the right sales rep."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Unified Customer View"
              description="360-degree customer profiles with complete interaction history, notes, documents, and communication logs."
            />
            <FeatureCard
              icon={<CheckSquare className="w-6 h-6" />}
              title="Automated Workflows"
              description="Create powerful automation rules for lead assignment, follow-ups, task creation, and email sequences."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Visual Pipeline Management"
              description="Drag-and-drop deals across customizable stages with real-time pipeline analytics and forecasting."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Advanced Analytics & Reports"
              description="40+ pre-built reports and custom dashboards for revenue forecasting, team performance, and conversion rates."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Enterprise-Grade Security"
              description="SOC 2 Type II compliant, end-to-end encryption, SSO, and role-based access control for your data."
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-orange-100">
                <Layers className="w-3.5 h-3.5" />
                Seamless Integrations
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Connects With Your Favorite Tools</h2>
              <p className="text-slate-500 mb-6">Sync data across Gmail, Outlook, Slack, Zoom, Stripe, and 100+ other business apps. No coding required.</p>
              <Link href="#" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                Explore all integrations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['Gmail', 'Slack', 'Zoom', 'Stripe', 'Salesforce', 'HubSpot'].map((app) => (
                <div key={app} className="bg-white rounded-xl p-4 text-center border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Users className="w-5 h-5" />} number="15,000+" label="Active Businesses" />
            <StatCard icon={<MessageSquare className="w-5 h-5" />} number="2.5M+" label="Deals Closed" />
            <StatCard icon={<Globe2 className="w-5 h-5" />} number="99.99%" label="Uptime SLA" />
            <StatCard icon={<Award className="w-5 h-5" />} number="40%+" label="Avg Revenue Growth" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Loved by Sales Teams Worldwide</h2>
            <p className="text-slate-500 mt-2">See what our customers are saying about Tivra CRM</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"Tivra completely transformed our sales process. We've seen a 35% increase in conversion rates within 3 months."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-400" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Sarah Johnson</p>
                    <p className="text-xs text-slate-400">VP of Sales, TechCorp</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Start for free, scale as you grow. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard title="Starter" price="$29" period="/month" features={["Up to 5 users", "10,000 contacts", "Basic analytics", "Email support"]} buttonText="Get Started" highlighted={false} />
            <PricingCard title="Professional" price="$79" period="/month" features={["Up to 20 users", "50,000 contacts", "Advanced analytics", "Priority support", "Custom reports"]} buttonText="Start Free Trial" highlighted={true} />
            <PricingCard title="Enterprise" price="Custom" period="" features={["Unlimited users", "Unlimited contacts", "Custom AI models", "24/7 dedicated support", "SLA guarantee"]} buttonText="Contact Sales" highlighted={false} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden p-12 lg:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500 rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500 rounded-full blur-[100px] opacity-20" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to Grow Faster?
            </h2>
            <p className="text-slate-300 text-lg">
              Join 15,000+ businesses that use Tivra to manage relationships and close more deals.
            </p>
            <div className="pt-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40 active:scale-[0.98]"
              >
                Start Your Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-slate-400 mt-4">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-black text-xl text-slate-900">TIVRA</span>
                <span className="text-orange-600 font-bold text-xs px-1.5 py-0.5 bg-orange-100 rounded">CRM</span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm">The modern CRM that helps sales teams connect smarter, share velocity, and grow exponentially.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-orange-600">Features</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Pricing</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Integrations</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-orange-600">About Us</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Careers</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Blog</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-orange-600">Help Center</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} Tivra CRM. All rights reserved.</p>
            <div className="flex gap-4">
              <Headphones className="w-4 h-4 text-slate-400 hover:text-orange-600 cursor-pointer" />
              <Mail className="w-4 h-4 text-slate-400 hover:text-orange-600 cursor-pointer" />
              <MessageSquare className="w-4 h-4 text-slate-400 hover:text-orange-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Sub-components
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-600 transition-colors duration-300">
        <div className="text-orange-600 group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3">
        <div className="text-orange-600">{icon}</div>
      </div>
      <h3 className="text-3xl font-bold text-slate-900">{number}</h3>
      <p className="text-sm text-slate-500 mt-1">{label}</p>
    </div>
  );
}

function PricingCard({ title, price, period, features, buttonText, highlighted }: { title: string; price: string; period: string; features: string[]; buttonText: string; highlighted: boolean }) {
  return (
    <div className={`rounded-2xl p-8 ${highlighted ? 'bg-gradient-to-b from-orange-600 to-orange-700 text-white shadow-2xl scale-105' : 'bg-white border border-slate-100'}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-black">{price}</span>
        {period && <span className="text-sm opacity-80">{period}</span>}
      </div>
      <ul className="space-y-2 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="text-sm flex items-center gap-2">
            <CheckSquare className="w-4 h-4" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/register" className={`block text-center py-3 rounded-xl font-semibold transition-all ${highlighted ? 'bg-white text-orange-700 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-orange-600'}`}>
        {buttonText}
      </Link>
    </div>
  );
}