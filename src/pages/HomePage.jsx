import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MethodologyTabs from '../components/MethodologyTabs';

const PILLARS = [
  { label: 'Qualify', desc: 'MEDDPICC gap analysis on every opportunity.' },
  { label: 'Execute', desc: 'Full-cycle ownership from outreach to close.' },
  { label: 'Expand', desc: 'Senior stakeholder navigation & deal growth.' },
  { label: 'Forecast', desc: 'Backwards-mapped plans that update with data.' },
];

const CREDENTIALS = [
  { value: '2', label: 'Set & Held Meetings', sub: 'Trial deliverable' },
  { value: '8+', label: 'Years Experience', sub: 'Sales & marketing' },
  { value: '~3 mo', label: 'Forecast Cycles', sub: 'Dynamic recalibration' },
  { value: '100%', label: 'Organic Outbound', sub: 'No purchased lists' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-perforce-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-perforce-teal/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-perforce-orange/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-perforce-orange font-bold text-sm uppercase tracking-widest mb-4">
                Organically Sourced Outbound
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6">
                2 Set &amp; Held Meetings. Delivered.
              </h1>
              <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-xl">
                Enterprise outbound sales built on MEDDPICC rigor, relational selling, and forecast discipline — for teams that can't afford pipeline guesswork.
              </p>
              <Link to="/book-trial" className="btn-primary">
                Start your Trial
              </Link>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <div className="bg-perforce-navy-light/60 border border-white/10 rounded-lg p-8 backdrop-blur-sm w-full max-w-md">
                <div className="flex items-center gap-5 mb-6">
                  <img
                    src="/tj-profile.jpg"
                    alt="T.J. Ayumba"
                    className="w-20 h-20 rounded-full border-2 border-perforce-orange object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold">T.J. Ayumba</h2>
                    <p className="text-white/70 text-sm">Sales Development Representative</p>
                    <p className="text-perforce-teal text-sm font-medium">Perforce Software</p>
                  </div>
                </div>
                <p className="text-white/75 leading-relaxed text-sm mb-4">
                  The DevOps environment is always improving. I aim to be at the forefront of progress — developing strategic sales plans, targeting key accounts, and building the relationships that move enterprise deals forward.
                </p>
                <p className="text-white/50 text-xs">
                  Minneapolis, MN · University of Minnesota, B.A. Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars strip */}
      <section className="bg-perforce-gray border-b border-perforce-gray-dark py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-perforce-muted mb-8 max-w-3xl mx-auto">
            A structured approach to outbound — from qualification through forecast — designed for Perforce-level enterprise complexity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PILLARS.map((p) => (
              <div key={p.label} className="text-center p-4">
                <div className="w-10 h-10 bg-perforce-navy rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-perforce-orange font-bold text-sm">{p.label[0]}</span>
                </div>
                <p className="font-bold text-perforce-navy text-sm mb-1">{p.label}</p>
                <p className="text-perforce-muted text-xs leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MethodologyTabs />

      {/* About / trial promise */}
      <section id="about" className="py-20 bg-perforce-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Built for Leaders Who Measure Pipeline in Meetings, Not Activity</h2>
              <p className="text-perforce-muted leading-relaxed mb-4">
                As an SDR at Perforce Software, I develop and execute strategic sales plans, collaborate with cross-functional teams to identify key accounts, and use strong communication and negotiation skills to build lasting client relationships.
              </p>
              <p className="text-perforce-muted leading-relaxed mb-4">
                This trial is a direct proof point: <strong className="text-perforce-navy">2 organically sourced, set, and held outbound meetings</strong> — sourced through research-driven outreach, qualified against MEDDPICC, and booked with stakeholders who show up.
              </p>
              <p className="text-perforce-muted leading-relaxed">
                No purchased lists. No spray-and-pray. Just disciplined outbound that respects your buyers' time and your leadership's forecast.
              </p>
            </div>
            <div className="bg-white border border-perforce-gray-dark shadow-card">
              <div className="h-1 bg-perforce-orange" />
              <div className="p-10">
                <p className="text-perforce-orange text-xs font-bold uppercase tracking-wider mb-3">The Trial</p>
                <h3 className="text-2xl font-bold text-perforce-navy mb-4">
                  2 Set &amp; Held Organically Sourced Outbound Meetings
                </h3>
                <ul className="space-y-3 text-perforce-muted text-sm mb-8">
                  <li className="flex gap-2"><span className="text-perforce-orange">▸</span> Research-driven account targeting</li>
                  <li className="flex gap-2"><span className="text-perforce-orange">▸</span> MEDDPICC-qualified discovery</li>
                  <li className="flex gap-2"><span className="text-perforce-orange">▸</span> Meetings held with decision-influencing stakeholders</li>
                  <li className="flex gap-2"><span className="text-perforce-orange">▸</span> Full context handoff for your AE team</li>
                </ul>
                <Link to="/book-trial" className="btn-primary w-full text-center">
                  Start your Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-14">What You Can Measure</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CREDENTIALS.map((stat) => (
              <div key={stat.label} className="text-center border border-perforce-gray-dark py-10 px-4">
                <p className="text-4xl md:text-5xl font-bold text-perforce-orange mb-1">{stat.value}</p>
                <p className="text-perforce-navy text-sm font-semibold mb-1">{stat.label}</p>
                <p className="text-perforce-muted text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="trial" className="py-20 bg-perforce-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See the Approach in Action</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book a 30-minute onboarding call. I'll walk you through the methodology and get started on delivering 2 set &amp; held meetings — organically sourced, fully qualified.
          </p>
          <Link to="/book-trial" className="btn-primary">
            Start your Trial
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
