// Connect your Gmail calendar by creating a Google Appointment Schedule:
// 1. Open Google Calendar (calendar.google.com) with your Gmail account
// 2. Click Create → Appointment schedule
// 3. Set your availability, duration, and booking page title
// 4. Copy the booking page URL and paste it in .env as VITE_GOOGLE_CALENDAR_BOOKING_URL

export const GOOGLE_CALENDAR_BOOKING_URL =
  import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL || '';

export const GOOGLE_CALENDAR_EMBED_URL =
  import.meta.env.VITE_GOOGLE_CALENDAR_EMBED_URL ||
  'https://calendar.google.com/calendar/embed?src=tjayumba%40gmail.com&ctz=America%2FChicago';

export const isCalendarConfigured = () =>
  Boolean(GOOGLE_CALENDAR_BOOKING_URL?.trim());
