import { useState } from 'react';

const METHODOLOGIES = [
  {
    tab: 'MEDDPICC',
    title: 'Identify & Fill Qualification Gaps',
    description:
      'Systematically audit every opportunity against MEDDPICC — surfacing missing Metrics, Economic Buyers, Decision Criteria, and Champions before they stall pipeline. Gaps get a plan, not a prayer.',
    points: ['Gap analysis on live opportunities', 'Champion & EB mapping', 'Decision process documentation'],
  },
  {
    tab: 'Full-Cycle Process',
    title: 'Start-to-Finish Sales Execution',
    description:
      'Own the sales process from first touch through close — strategic outreach, discovery, qualification, multi-threading, and handoff. No dropped balls between stages.',
    points: ['Strategic account targeting', 'Discovery & qualification rigor', 'Seamless AE handoff with context'],
  },
  {
    tab: 'Relational Selling',
    title: 'Relationships That Move Deals',
    description:
      'Build trust through preparation, intention, and follow-through — not scripts. Every interaction validates understanding, digs below the surface, and earns the right to advance.',
    points: ['Skills-based, preparation-first approach', 'Active listening & follow-up questions', 'Long-term account relationships'],
  },
  {
    tab: 'Executive Expansion',
    title: 'Senior Stakeholder Navigation',
    description:
      'Map org charts, identify power centers, and engage senior decision-makers to expand deal scope. Move up and across accounts — not just deeper into a single thread.',
    points: ['Multi-threading across stakeholders', 'Executive-level outreach', 'Land-and-expand positioning'],
  },
  {
    tab: 'Forecast Planning',
    title: 'Backwards Mapping & Dynamic Forecasting',
    description:
      'Build forecasts from the close date backward, then update plans every ~3 months as real data accumulates. Replace gut-feel projections with evidence-based confidence intervals.',
    points: ['Backwards-mapped deal plans', 'Quarterly forecast recalibration', 'Uncertainty reduction over time'],
  },
];

export default function MethodologyTabs() {
  const [active, setActive] = useState(0);
  const method = METHODOLOGIES[active];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">A Sales Approach Built for Enterprise Complexity</h2>
          <p className="text-perforce-muted text-lg max-w-3xl mx-auto">
            Five interconnected strategies — from qualification rigor to forecast confidence — designed for high-stakes B2B sales at scale.
          </p>
        </div>

        <div className="border-b border-perforce-gray-dark overflow-x-auto">
          <div className="flex min-w-max">
            {METHODOLOGIES.map((m, i) => (
              <button
                key={m.tab}
                type="button"
                onClick={() => setActive(i)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-4 transition-colors ${
                  active === i
                    ? 'text-perforce-navy border-perforce-orange bg-perforce-gray'
                    : 'text-perforce-muted border-transparent hover:text-perforce-navy hover:bg-perforce-gray/50'
                }`}
              >
                {m.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-perforce-gray border border-perforce-gray-dark border-t-0">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-perforce-navy mb-4">{method.title}</h3>
              <p className="text-perforce-muted leading-relaxed mb-6 text-lg">{method.description}</p>
              <ul className="space-y-2 mb-8">
                {method.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-perforce-text">
                    <span className="text-perforce-orange mt-0.5">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-perforce-navy p-10 md:p-14 flex items-center justify-center min-h-[280px]">
              <div className="w-full max-w-sm">
                <div className="bg-perforce-navy-light rounded p-6 border border-white/10 shadow-lg">
                  <p className="text-perforce-teal text-xs font-bold uppercase tracking-wider mb-4">
                    {method.tab}
                  </p>
                  <div className="space-y-3">
                    {method.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-perforce-orange flex-shrink-0" />
                        <p className="text-white/70 text-sm">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
