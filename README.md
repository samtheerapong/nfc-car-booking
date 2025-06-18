# Vehicle Booking Dashboard

A modern dashboard for managing vehicle bookings, maintenance issues, and fleet management built with Next.js, Tailwind CSS, and Shadcn UI.

## Prerequisites

- [Bun](https://bun.sh) (Latest version)
- Node.js 18+ (for some Next.js dependencies)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nfc-car-booking.git
cd nfc-car-booking
```

2. Install dependencies using Bun:
```bash
bun install
```

## Development

To start the development server:

```bash
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Build

To create a production build:

```bash
bun run build
```

To start the production server:

```bash
bun run start
```

## Project Structure

```
├── app/                     # Next.js 13+ app directory
│   ├── admin/              # Admin dashboard
│   ├── approvals/          # Booking approvals
│   ├── dashboard/          # Main dashboard
│   ├── drivers/            # Driver management
│   ├── issues/            # Vehicle issues and reports
│   ├── login/             # Authentication
│   ├── register/          # User registration
│   ├── request/           # Vehicle booking requests
│   └── vehicles/          # Vehicle management
├── components/            # Reusable React components
│   ├── layout/           # Layout components
│   └── ui/               # UI components (Shadcn)
├── lib/                  # Utilities and configurations
├── public/              # Static assets
└── styles/             # Global styles
```

## Features

- 🚗 Vehicle Management
- 📅 Booking System
- 🔧 Issue Tracking
- 👥 Driver Management
- ✅ Approval Workflow
- 📊 Dashboard Analytics
- 🔐 Authentication
- 📱 Responsive Design

## Technologies

- [Next.js](https://nextjs.org/) - React Framework
- [Bun](https://bun.sh/) - JavaScript Runtime & Package Manager
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Shadcn UI](https://ui.shadcn.com/) - UI Component Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
