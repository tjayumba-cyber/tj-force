import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GOOGLE_CALENDAR_BOOKING_URL, isCalendarConfigured } from '../config/calendar';

const STEPS = [
  'Choose an available 30-minute slot on Google Calendar',
  'Enter your name and email to confirm',
  'Receive a Gmail calendar invite automatically',
  'We kick off your organically sourced outbound trial',
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
              Pick a time on Google Calendar. I'll confirm via Gmail and walk you through how we'll deliver 2 set &amp; held, organically sourced outbound meetings.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white border border-perforce-gray-dark shadow-card">
            <div className="h-1 bg-perforce-orange" />
            <div className="p-8 md:p-12 text-center">
              {calendarReady ? (
                <>
                  <div className="w-16 h-16 bg-perforce-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-perforce-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-4 text-sm text-perforce-muted">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Organically Sourced Outbound Trial · 30 minutes
                  </div>

                  <h2 className="text-2xl font-bold text-perforce-navy mb-3">Select Your Time</h2>
                  <p className="text-perforce-muted mb-8 max-w-md mx-auto">
                    Google Calendar opens in a new tab so you can pick a slot and receive an instant confirmation.
                  </p>

                  <a
                    href={GOOGLE_CALENDAR_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-10 py-4 inline-flex"
                  >
                    Open Booking Calendar →
                  </a>

                  <ol className="text-left max-w-sm mx-auto mt-10 space-y-3">
                    {STEPS.map((step, i) => (
                      <li key={step} className="flex gap-3 text-sm text-perforce-text">
                        <span className="flex-shrink-0 w-6 h-6 bg-perforce-navy text-white flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <div className="py-4">
                  <h2 className="text-2xl font-bold text-perforce-navy mb-3">Calendar Not Connected</h2>
                  <p className="text-perforce-muted mb-6">
                    Set <code className="text-sm bg-perforce-gray px-1">VITE_GOOGLE_CALENDAR_BOOKING_URL</code> in your Vercel environment variables.
                  </p>
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
