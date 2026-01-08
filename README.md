# Jeff Heytow Portfolio

Professional portfolio website showcasing software engineering projects, children's book, and journey from music to tech.

## Features

- 🐛 **Animated Characters** - Bug illustrations with CSS animations
- 🚀 **Featured Projects** - KubeLearn and future projects
- 📖 **Children's Book** - "The Little Bug and the Big Surprise"
- 💼 **Journey Timeline** - Music → Tech career transition
- 🛠️ **Technical Skills** - React, Java, Security, DevOps
- 📬 **Contact Section** - Multiple ways to connect

## Tech Stack

- React 18
- CSS3 with animations
- Responsive design
- Deployed on Vercel

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## Deployment to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create portfolio --public --source=. --remote=origin --push
```

2. Deploy with Vercel:
```bash
vercel
```

3. Add custom domain:
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add `jeffheytow.com`
   - Update GoDaddy DNS:
     - A Record: `@` → `76.76.21.21`
     - CNAME: `www` → `cname.vercel-dns.com`

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── bug-hello.png
│   │   └── bug-jug.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   ├── Journey.js
│   │   ├── Skills.js
│   │   ├── Book.js
│   │   └── Contact.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Features to Add Later

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering
- [ ] Animations on scroll
- [ ] Contact form with backend

## License

© 2026 Jeffrey Heytow. All rights reserved.
