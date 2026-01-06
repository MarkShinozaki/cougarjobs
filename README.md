# 🐾 CougarJobs

**Your AI-powered career companion for Washington State University students**

CougarJobs is a modern job search platform designed specifically for WSU Cougars. Find jobs, get certified, and land your dream position with smart automation.

## ✨ Features

### 📋 Job Resources
Curated resources organized by profession to help you prepare for your career journey.

### 🏆 Certifications
Browse industry-recognized certifications filtered by category and difficulty level.

### 💼 Job Swipe
Tinder-style job matching - swipe right on jobs you love, left on ones you don't.

### 🤖 Auto Apply
AI-powered automatic job applications that work while you sleep.

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (v1.0+)
- Node.js 18+ (optional, Bun handles this)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cougarjobs.git
cd cougarjobs

# Install dependencies
bun install

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun

## 📁 Project Structure

```
cougarjobs/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── resources/    # Job resources page
│   │   ├── certifications/ # Certifications page
│   │   ├── swipe/        # Job swipe interface
│   │   └── auto-apply/   # Auto-apply dashboard
│   ├── components/       # Reusable React components
│   ├── lib/              # Utility functions and data
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── package.json
```

## 🎨 Design System

CougarJobs uses WSU's brand colors:
- **Crimson**: `#981e32`
- **Gray**: `#5e6a71`
- **Gold**: `#c69214`

## 📝 Scripts

```bash
bun dev      # Start development server
bun build    # Build for production
bun start    # Start production server
bun lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Go Cougs! 🐾**
