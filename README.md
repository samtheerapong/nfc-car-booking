# Vehicle Booking Dashboard

A modern dashboard for managing vehicle bookings, maintenance issues, and fleet management built with Next.js, Tailwind CSS, and Shadcn UI.

ระบบจัดการการจองยานพาหนะ พร้อมระบบติดตามปัญหาและการบำรุงรักษา สร้างด้วย Next.js, Tailwind CSS และ Shadcn UI

## Prerequisites | การเตรียมความพร้อม

- [Bun](https://bun.sh) (Latest version)
- Node.js 18+ (for some Next.js dependencies)

## Installation | การติดตั้ง

1. Clone the repository | โคลนโปรเจกต์:
```bash
git clone https://github.com/yourusername/vehicle-booking-dashboard.git
cd vehicle-booking-dashboard
```

2. Install dependencies using Bun | ติดตั้ง Dependencies ด้วย Bun:
```bash
bun install
```

## Development | การพัฒนา

To start the development server | เริ่มต้น Development Server:

```bash
bun run dev
```

The application will be available at | แอพพลิเคชันจะทำงานที่ [http://localhost:3000](http://localhost:3000)

## Build | การ Build โปรเจกต์

To create a production build | สร้าง Production Build:

```bash
bun run build
```

To start the production server | เริ่มต้น Production Server:

```bash
bun run start
```

## Project Structure | โครงสร้างโปรเจกต์

```
├── app/                     # Next.js 13+ app directory | โฟลเดอร์หลักของ Next.js
│   ├── admin/              # Admin dashboard | หน้าจัดการสำหรับผู้ดูแลระบบ
│   ├── approvals/          # Booking approvals | การอนุมัติการจอง
│   ├── dashboard/          # Main dashboard | หน้าแดชบอร์ดหลัก
│   ├── drivers/            # Driver management | จัดการข้อมูลคนขับ
│   ├── issues/            # Vehicle issues and reports | ปัญหาและรายงาน
│   ├── login/             # Authentication | การเข้าสู่ระบบ
│   ├── register/          # User registration | การลงทะเบียน
│   ├── request/           # Vehicle booking requests | คำขอจองยานพาหนะ
│   └── vehicles/          # Vehicle management | จัดการข้อมูลยานพาหนะ
├── components/            # Reusable components | คอมโพเนนต์ที่ใช้ซ้ำได้
├── lib/                  # Utilities and configs | ยูทิลิตี้และการตั้งค่า
├── public/              # Static assets | ไฟล์สื่อต่างๆ
└── styles/             # Global styles | สไตล์ชีตหลัก
```

## Features | คุณสมบัติ

- 🚗 Vehicle Management | การจัดการยานพาหนะ
- 📅 Booking System | ระบบการจอง
- 🔧 Issue Tracking | ติดตามปัญหาและการซ่อม
- 👥 Driver Management | จัดการข้อมูลคนขับ
- ✅ Approval Workflow | ขั้นตอนการอนุมัติ
- 📊 Dashboard Analytics | การวิเคราะห์ข้อมูล
- 🔐 Authentication | ระบบยืนยันตัวตน
- 📱 Responsive Design | รองรับทุกขนาดหน้าจอ

## Technologies | เทคโนโลยีที่ใช้

- [Next.js](https://nextjs.org/) - React Framework | เฟรมเวิร์ค React
- [Bun](https://bun.sh/) - JavaScript Runtime & Package Manager | ตัวรันโค้ดและจัดการแพ็คเกจ
- [Prisma](https://www.prisma.io/) - Database ORM | ตัวจัดการฐานข้อมูล
- [PostgreSQL](https://www.postgresql.org/) - Database | ฐานข้อมูล
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework | เฟรมเวิร์ค CSS
- [Shadcn UI](https://ui.shadcn.com/) - UI Component Library | ไลบรารีคอมโพเนนต์
- [TypeScript](https://www.typescriptlang.org/) - Type Safety | ภาษาที่มีการตรวจสอบประเภทข้อมูล

## Database Setup | การติดตั้งฐานข้อมูล

This project uses Prisma as the ORM with PostgreSQL. Below are the steps to set up your database:

โปรเจกต์นี้ใช้ Prisma เป็น ORM ร่วมกับ PostgreSQL ต่อไปนี้เป็นขั้นตอนการติดตั้งฐานข้อมูล:

1. Install PostgreSQL | ติดตั้ง PostgreSQL:
   - Download and install from [PostgreSQL website](https://www.postgresql.org/download/)
   - ดาวน์โหลดและติดตั้งจาก [เว็บไซต์ PostgreSQL](https://www.postgresql.org/download/)

2. Set up environment variables | ตั้งค่าตัวแปรสภาพแวดล้อม:
   ```bash
   # Create .env file | สร้างไฟล์ .env
   cp .env.example .env
   ```
   
   Update DATABASE_URL in .env:
   แก้ไข DATABASE_URL ในไฟล์ .env:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/vehicle_booking"
   ```

3. Initialize Prisma | เริ่มต้นใช้งาน Prisma:
   ```bash
   # Install Prisma CLI | ติดตั้ง Prisma CLI
   bun add -d prisma
   
   # Generate Prisma Client | สร้าง Prisma Client
   bun prisma generate
   
   # Run migrations | รันการอัพเดทโครงสร้างฐานข้อมูล
   bun prisma migrate dev
   ```

4. Seed the database (optional) | เพิ่มข้อมูลตัวอย่าง (ไม่บังคับ):
   ```bash
   bun prisma db seed
   ```

### Database Management | การจัดการฐานข้อมูล

- View your data | ดูข้อมูลในฐานข้อมูล:
  ```bash
  bun prisma studio
  ```

- Reset database | รีเซ็ตฐานข้อมูล:
  ```bash
  bun prisma migrate reset
  ```

- Create new migration | สร้างการอัพเดทโครงสร้างฐานข้อมูลใหม่:
  ```bash
  bun prisma migrate dev --name describe_your_change
  ```

### Database Schema | โครงสร้างฐานข้อมูล

The database includes tables for | ฐานข้อมูลประกอบด้วยตารางต่างๆ ดังนี้:

- Users (ผู้ใช้)
- Vehicles (ยานพาหนะ)
- Bookings (การจอง)
- Issues (ปัญหาและการซ่อมบำรุง)
- Maintenance Records (ประวัติการซ่อมบำรุง)

View the complete schema in `prisma/schema.prisma`
ดูโครงสร้างฐานข้อมูลทั้งหมดได้ที่ไฟล์ `prisma/schema.prisma`
