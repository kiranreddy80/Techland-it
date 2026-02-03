# TechLand Development Guide

## Quick Start (After Laptop Restart)

### ⚡ Option 1: Use the Startup Script (RECOMMENDED)
Simply double-click this file:
```
start-dev.bat
```
This will automatically start all three services in separate windows.

### 🔧 Option 2: Manual Start
If you prefer to start services manually, run these commands in order:

1. **Backend (MUST START FIRST)**
   ```bash
   cd c:\techland\techland\backend
   npm run dev
   ```
   Wait until you see: `MongoDB Connected` and `Server running on port 5000`

2. **Frontend**
   ```bash
   cd c:\techland\techland\frontend
   npm run dev
   ```

3. **Admin Panel**
   ```bash
   cd c:\techland\techland\Admin
   npm run dev
   ```

## Why Does It Fail After Closing Laptop?

When you close your laptop:
- ❌ **Backend server stops** (Node.js process terminates)
- ❌ Admin panel tries to connect to `http://localhost:5000`
- ❌ Connection fails → "Failed to load projects, teams, activities, clients"

**Solution:** Always ensure the backend is running before using the Admin panel!

## Service URLs

- **Backend API:** http://localhost:5000
- **Frontend:** http://localhost:3000
- **Admin Panel:** http://localhost:3001

## Troubleshooting

### "Failed to load" errors in Admin Panel
**Cause:** Backend is not running
**Fix:** Start the backend server first (see Quick Start above)

### MongoDB Connection Error
**Cause:** MongoDB is not running
**Fix:** 
```bash
# Start MongoDB service
net start MongoDB
```

### Port Already in Use
**Cause:** Previous process still running
**Fix:**
```bash
# Find and kill the process using the port
netstat -ano | findstr :5000
taskkill /PID <process_id> /F
```

## Production Deployment

See `PRODUCTION_DEPLOYMENT.md` for production deployment instructions.
