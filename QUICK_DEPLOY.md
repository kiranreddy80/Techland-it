# 🚀 Quick Deployment Reference

## Before You Deploy - Update These 3 Files

### 1. backend/.env.production
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/techland
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@yourdomain.com
CORS_ORIGIN=https://yourdomain.com,https://admin.yourdomain.com
```

### 2. frontend/.env.production
```env
VITE_API_URL=https://api.yourdomain.com
```

### 3. Admin/.env.production
```env
VITE_API_URL=https://api.yourdomain.com
```

---

## Quick Deploy Commands

### Build Frontend
```bash
cd frontend
npm run build
# Upload dist/ folder to your hosting
```

### Build Admin
```bash
cd Admin
npm run build
# Upload dist/ folder to your hosting
```

### Deploy Backend (VPS)
```bash
cd backend
npm install --production
pm2 start src/server.js --name techland-api
pm2 save
```

---

## Test Your Deployment

### Health Check
```bash
curl https://api.yourdomain.com/health
```

### API Test
```bash
curl https://api.yourdomain.com/api/projects
```

---

## MongoDB Atlas Setup (5 minutes)

1. Go to https://cloud.mongodb.com
2. Create free account
3. Create cluster (Free M0)
4. Database Access → Add User
5. Network Access → Add IP (0.0.0.0/0 for testing)
6. Connect → Get connection string
7. Update MONGO_URI in .env.production

---

## Gmail App Password (2 minutes)

1. Enable 2FA: https://myaccount.google.com/security
2. App Passwords: https://myaccount.google.com/apppasswords
3. Generate password
4. Update EMAIL_PASS in .env.production

---

## Deployment Platforms

### Option 1: VPS (Full Control)
- DigitalOcean ($6/month)
- Linode ($5/month)
- AWS Lightsail ($5/month)

### Option 2: PaaS (Easier)
**Backend:**
- Railway (Free tier)
- Render (Free tier)
- Heroku ($7/month)

**Frontend/Admin:**
- Vercel (Free)
- Netlify (Free)

---

## Need Help?

See `DEPLOYMENT_COMPLETE.md` for detailed instructions.
