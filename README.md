# Company Communication Calendar

A React-based application for managing and tracking company communications, featuring a calendar view, notification system, and communication history tracking.

The company-communication-calendar deployment project url: [Company Communication Calendar] https://euphonious-frangollo-2e7b4d.netlify.app/

## Features

- Interactive calendar view for communication scheduling
- Company management dashboard
- Communication method tracking
- Notification system for overdue and upcoming communications
- Responsive design for desktop and mobile

## Prerequisites

- Node.js
- npm

## Setup Instructions

1. Clone the repository:
```bash
git clone [<repository-url>](https://github.com/Subhadipghorai/company-communication-calendar.git)
cd company-communication-calendar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically in your default browser at `http://localhost:3000`.

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── admin/         # Admin dashboard components
│   ├── user/          # User dashboard components
│   └── ui/            # Reusable UI components
├── lib/               # Utility functions
├── store/             # State management (Zustand)
└── types/             # TypeScript type definitions
```

## Key Features

### Admin Dashboard
- Company management (Add, Edit, Delete)
- Communication method configuration
- Multiple contact methods per company

### User Dashboard
- Calendar view of communications
- Notification panel for overdue and upcoming communications
- Company communication grid with history

1. **Browser Support**
   - Optimized for modern browsers
   - Requires JavaScript enabled

2. **Data Persistence**
   - Currently uses in-memory storage
   - Data is lost on page refresh

3. **Calendar View**
   - Limited to monthly view
   - No drag-and-drop functionality

## Technical Stack

- React
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Vite (Build Tool)
- Radix UI (UI Components)
- Lucide React (Icons)

## Browser Compatibility

Tested and supported in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Use `npm run lint` to check for code style issues
- The project uses strict TypeScript configuration
- Follow the existing code style and component structure
