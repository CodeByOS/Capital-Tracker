# 💰 CapitalTracker

CapitalTracker is a full-stack AI-powered finance platform built with **Next.js 15**, **React 19**, **Prisma**, **Tailwind CSS**, **Shadcn UI**, **Clerk.js** authentication, **Google Generative AI** (Gemini), **Inngest** for serverless workflows, and **Arcjet** for rate limiting and bot protection.

Manage your personal finances effortlessly with smart AI-powered insights, receipt scanning, budgeting, and secure authentication.

---

## 🚀 Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS, Shadcn UI, Radix UI components
- **Authentication:** Clerk.js
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL (via Prisma)
- **AI Integration:** Google Generative AI (`@google/generative-ai`)
- **Serverless Workflows:** Inngest
- **Security:** Arcjet (rate limiting & bot protection)
- **Email:** Resend + React Email components
- **Utility Libraries:** react-hook-form, framer-motion, recharts

---

## ⚙️ Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/CodeByOS/capitaltracker.git
cd capitaltracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a *.env* file in the root with these variables:

```bash
# =======================
# Clerk Authentication
# =======================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Clerk Custom Routes (Optional but recommended for custom sign-in pages)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# =======================
# Supabase Database URLs
# =======================

# Connection pooling (used by the app during runtime)
DATABASE_URL=postgresql://username:password@db-host:5432/capitaltracker?sslmode=require

# Direct connection (used for Prisma CLI commands/migrations)
DIRECT_URL=postgresql://username:password@db-host:5432/capitaltracker?sslmode=require

# =======================
# Arcjet (Rate Limiting / Bot Protection)
# =======================
ARCJET_KEY=arcjet_test_XXXXXXXXXXXXXXXXXXXX

# =======================
# Resend (Transactional Email API)
# =======================
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXXXX

# =======================
# Gemini AI (Google Generative AI)
# =======================
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX

```
### 4. Setup your database and Prisma client

```bash
npx prisma db push
```
### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your app.
