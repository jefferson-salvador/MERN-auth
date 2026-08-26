# Jefferson Salvador - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a contact form powered by EmailJS.

## Features

- 🎨 Clean, minimalist design with light/dark mode support
- 📱 Fully responsive layout
- 💼 Portfolio sections: Hero, About, Experience, Skills, Projects, Contact
- 📧 EmailJS-powered contact form with spam prevention
- 🎭 Modal-based message system
- 🔒 Rate limiting and form validation
- ⚡ Fast performance with Vite

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 8
- **Email Service:** EmailJS
- **Styling:** Custom CSS with CSS variables
- **Deployment Ready:** Static site generation

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)
- Git

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/jefferson-salvador/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
cd client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `client` directory:

```bash
cp .env.example .env
```

Edit `.env` and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

#### Getting EmailJS Credentials:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name
4. Copy your Service ID, Template ID, and Public Key

### 4. Run the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the `client` directory:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
client/
├── src/
│   ├── assets/              # Images and static files
│   │   └── profile.png      # Profile photo
│   ├── components/
│   │   └── portfolio/       # Portfolio components
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Experience.jsx
│   │       ├── Footer.jsx
│   │       ├── Hero.jsx
│   │       ├── Navbar.jsx
│   │       ├── Portfolio.jsx
│   │       ├── Projects.jsx
│   │       ├── Skills.jsx
│   │       └── shared/      # Reusable components
│   ├── data/                # Portfolio data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── .env                     # Environment variables (not committed)
├── .env.example             # Environment variables template
├── package.json
└── vite.config.js
```

## Building for Production

### Build the project:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview the production build:

```bash
npm run preview
```

## Deployment

The portfolio is a static site and can be deployed to:

- **Vercel:** `npm i -g vercel && vercel`
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use GitHub Actions
- **Cloudflare Pages:** Connect your repository

### Environment Variables for Deployment

Don't forget to add your EmailJS environment variables in your hosting platform:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

## Customization

### Update Profile Information

1. **Profile Photo:** Replace `client/src/assets/profile.png`
2. **Personal Info:** Edit components in `client/src/components/portfolio/`
3. **Portfolio Data:** Update files in `client/src/data/`
4. **Theme Colors:** Modify CSS variables in `client/src/index.css` (`:root` section)

### Color Scheme

The portfolio uses CSS variables for theming. Edit these in `index.css`:

```css
:root {
  --accent: #aa3bff;           /* Primary accent color */
  --bg: #fff;                  /* Background */
  --text: #6b6375;             /* Body text */
  --text-h: #08060d;           /* Headings */
  /* ... more variables */
}
```

## Contact Form Features

- ✅ Required field validation
- ✅ Email format validation
- ✅ Character limits (Name: 2-100, Subject: 3-200, Message: 10-2000)
- ✅ Spam keyword filtering
- ✅ Link count limitation (max 3 links)
- ✅ Rate limiting (60-second cooldown)
- ✅ Character counter
- ✅ Success/error messages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project, but suggestions are welcome! Feel free to open an issue.

## License

MIT License - feel free to use this as inspiration for your own portfolio!

## Contact

- **Email:** jeffsalvador.dev@gmail.com
- **GitHub:** [@jefferson-salvador](https://github.com/jefferson-salvador)
- **Portfolio:** [Your deployed URL]

---

Built with ❤️ by Jefferson Salvador
