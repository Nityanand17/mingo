<h1 align="center">✨ Fullstack Chat & Video Calling App ✨</h1>

![Demo App](/frontend/public/screenshot-for-readme.jpg)

Highlights:

- 🌐 Real-time Messaging with Typing Indicators & Reactions
- 📹 1-on-1 and Group Video Calls with Screen Sharing & Recording
- 🔐 JWT Authentication & Protected Routes
- 🌍 Language Exchange Platform with 32 Unique UI Themes
- ⚡ Tech Stack: React + Express + MongoDB + TailwindCSS + TanStack Query
- 🧠 Global State Management with Zustand
- 🚨 Error Handling (Frontend & Backend)
- 🚀 Free Deployment
- 🎯 Built with Scalable Technologies like Stream
- ⏳ And much more!

---

## 🧪 .env Setup

### Backend (`/backend`)

```
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`/frontend`)

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

# Mingo Chat App

A real-time chat application with video call support.

## Deployment Instructions for Vercel

### Prerequisites
- GitHub repository with the code
- Vercel account

### Steps to Deploy

1. **Push your code to GitHub**
   Make sure all your changes are committed and pushed to your GitHub repository.

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign in with your account
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Project Settings**
   - Select the repository
   - Keep the default settings
   - Set the Production Branch to your main branch
   - Click "Deploy"

### Configuration Files

The following files are already configured for Vercel deployment:

- `vercel.json` - Configures the build settings and routing
- `package.json` - Contains the build scripts for Vercel
- `frontend/package.json` - Contains the frontend build scripts
- `frontend/vite.config.js` - Configures Vite for production builds

### Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs for errors
2. Ensure the `dist` directory is correctly referenced in `vercel.json`
3. Make sure all dependencies are properly installed

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
cd frontend && npm run dev
```

### Building for Production

```bash
npm run build
```
