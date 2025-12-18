# We Are IRL 💙

_Read this in other languages: [Português](README.md)_

<div align="center">
  <img src="./src/assets/img/elementos/logo.png" alt="IRL Logo" width="200"/>
</div>

## 📋 About the Project

Institutional website for the **Dr. Rocha Lima Institute for Child Protection and Assistance**, a non-profit organization dedicated to protecting and assisting children and adolescents in situations of social vulnerability.

This project was developed with React and Vite, offering a modern and responsive experience to showcase the institute's social programs, team, mission, and ways to contribute.

## 🚀 Technologies Used

- **React** 19.0.0 - JavaScript library for building user interfaces
- **Vite** 6.2.0 - Build tool and development server
- **React Router DOM** - Page navigation
- **Tailwind CSS** 4.0.13 - Utility-first CSS framework
- **Swiper** - Responsive carousels and sliders
- **React Icons** - Icon library
- **React Hook Form** - Form management
- **EmailJS** - Email sending service
- **React Hot Toast** - Elegant toast notifications
- **React CountUp** - Number animations
- **React Modal** - Accessible modal components

## 📁 Project Structure

```
irl/
├── public/              # Static public files
├── src/
│   ├── assets/          # Images, videos and resources
│   │   ├── img/
│   │   │   ├── documentos/
│   │   │   ├── elementos/
│   │   │   ├── fotos/
│   │   │   ├── ods/
│   │   │   └── parceiros/
│   │   └── videos/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── Programas/
│   │   └── ...
│   ├── pages/           # Application pages
│   │   ├── Home.jsx
│   │   ├── Programas.jsx
│   │   ├── FacaParte.jsx
│   │   └── Transparencia.jsx
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Features

- ✨ **Responsive Interface** - Adaptive design for desktop, tablet, and mobile
- 📱 **Mobile Menu** - Navigation optimized for mobile devices
- 🎠 **Interactive Carousels** - Testimonials, programs, and partners
- 📝 **Contact Form** - EmailJS integration
- 💰 **Donation System** - Modal with banking information and donation options
- 📄 **Transparency Area** - Documents and certifications
- 🎯 **SDGs (Sustainable Development Goals)** - Alignment with global goals
- 📊 **Institute Numbers** - Statistics with CountUp animations
- 🖼️ **Photo Gallery** - Display of activities and programs
- ⚡ **Optimized Performance** - Optimized build with Vite

## 🛠️ Installation and Execution

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/flaviare1s/irl.git
   cd irl
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the project in development mode**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deploy

The project is configured for deployment on Vercel through the `vercel.json` file.

To deploy:

1. Install Vercel CLI

   ```bash
   npm install -g vercel
   ```

2. Run deploy
   ```bash
   vercel
   ```

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates the production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint linter

## 📧 Contact

**Dr. Rocha Lima Institute**

- Website: [www.irl.org.br](https://www.irl.org.br)
- Instagram: [@instituto_rocha_lima](https://instagram.com/instituto_rocha_lima)
- Email: contato@irl.org.br

## 💖 Support

If you wish to support the Dr. Rocha Lima Institute, visit the donations page or contact them to learn more about how to contribute.

---

<div align="center">
  Developed for the Dr. Rocha Lima Institute
</div>
