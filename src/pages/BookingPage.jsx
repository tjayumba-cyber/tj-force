import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GOOGLE_CALENDAR_BOOKING_URL, isCalendarConfigured } from '../config/calendar';

const SETUP_STEPS = [
  'Open Google Calendar at calendar.google.com with your Gmail account.',
  'Click Create → Appointment schedule.',
  'Set your availability, meeting duration, and booking page details.',
  'Copy your booking page URL from the schedule settings.',
  'Add it to .env as VITE_GOOGLE_CALENDAR_BOOKING_URL and restart the dev server.',
];

export default function BookingPage() {
  const calendarReady = isCalendarConfigured();

  return (
    <div className="min-h-screen flex flex-col bg-perforce-gray">
      <Navbar />

      <main className="flex-1">
        <section className="bg-perforce-navy text-white py-14">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              to="/"
              className="text-white/70 hover:text-perforce-orange text-sm font-medium transition-colors mb-6 inline-block"
            >
              ← Back to home
            </Link>
            <p className="text-perforce-orange font-bold text-xs uppercase tracking-widest mb-3">
              Start your Trial
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Book Your 30-Minute Onboarding Call</h1>
            <p className="text-white/80 max-w-xl text-lg">
              Pick a time below. I'll confirm via Gmail and walk you through how we'll deliver 2 set &amp; held, organically sourced outbound meetings.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white border border-perforce-gray-dark shadow-card">
            <div className="h-1 bg-perforce-orange" />
            <div className="p-6 md:p-8">
              {calendarReady ? (
                <>
                  <div className="flex items-center gap-2 mb-6 text-sm text-perforce-muted">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Organically Sourced Outbound Trial · 30 minutes
                  </div>
                  <iframe
                    src={GOOGLE_CALENDAR_BOOKING_URL}
                    title="Book onboarding call"
                    className="w-full border border-perforce-gray-dark"
                    style={{ minHeight: '650px' }}
                    allow="camera; microphone"
                  />
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-perforce-navy mb-3">Calendar Not Connected</h2>
                  <p className="text-perforce-muted mb-8 max-w-md mx-auto">
                    Add your Google Appointment Schedule URL to enable booking:
                  </p>
                  <ol className="text-left max-w-lg mx-auto space-y-3 mb-8">
                    {SETUP_STEPS.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-perforce-text">
                        <span className="flex-shrink-0 w-6 h-6 bg-perforce-navy text-white flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <a
                    href="https://calendar.google.com/calendar/u/0/r/appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open Google Calendar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
