# 🔧 Fix Railway MongoDB Connection - IMPORTANT

## ⚠️ Problem Detected

You used the **INTERNAL** Railway MongoDB URL, which only works inside Railway's network.
Render cannot access it!

Error: `getaddrinfo ENOTFOUND mongodb.railway.internal`

---

## ✅ Solution: Get the PUBLIC MongoDB URL

### Step 1: Go Back to Railway
1. Open https://railway.app/
2. Click on your **MongoDB** service
3. Go to **"Variables"** tab

### Step 2: Find the CORRECT URL
You need the **PUBLIC** connection string, not the internal one.

Look for one of these variables:
- `MONGO_URL` (public)
- `DATABASE_URL` (public)
- `MONGODB_PUBLIC_URL`

**The URL should look like:**
```
mongodb://mongo:PASSWORD@monorail.proxy.rlwy.net:12345
```

**NOT like this (internal - won't work):**
```
mongodb://mongo:PASSWORD@mongodb.railway.internal:27017  ❌ WRONG
```

### Step 3: Copy the Correct URL
1. Find the variable that has `rlwy.net` or `railway.app` in it
2. Click to reveal the full value
3. Copy the ENTIRE URL

---

## Alternative: Get Public URL from Railway Settings

If you can't find the public URL in Variables:

1. Click on your MongoDB service in Railway
2. Go to **"Settings"** tab
3. Scroll down to **"Networking"** section
4. Look for **"Public Networking"** or **"TCP Proxy"**
5. You should see a public hostname like: `monorail.proxy.rlwy.net:12345`
6. The full URL format is:
   ```
   mongodb://mongo:YOUR_PASSWORD@monorail.proxy.rlwy.net:PORT
   ```

---

## Step 4: Update Render Environment Variable

1. Go to **Render Dashboard**: https://dashboard.render.com/
2. Click on your backend service
3. Go to **"Environment"** tab
4. Find `MONGO_URI` variable
5. Click **"Edit"**
6. **Replace** with the PUBLIC Railway URL (the one with `rlwy.net`)
7. Click **"Save Changes"**

Render will automatically redeploy (takes 1-2 minutes).

---

## Step 5: Verify It Works

After Render finishes deploying:

1. Check: https://techland-backend.onrender.com/health
2. You should see:
   ```json
   {
     "status": "OK",
     "database": {
       "status": "connected",
       "readyState": 1
     }
   }
   ```

---

## 🆘 Still Can't Find Public URL?

Railway might not have exposed the MongoDB publicly by default.

### Enable Public Access in Railway:
1. Go to your MongoDB service in Railway
2. Click **"Settings"** tab
3. Scroll to **"Networking"**
4. Enable **"Public Networking"** or **"TCP Proxy"**
5. Railway will generate a public URL
6. Copy that URL and use it in Render

---

## 📝 Summary

✅ Fixed: Trust proxy error (code pushed to GitHub)
⏳ Pending: Update MongoDB URL in Render to use PUBLIC Railway URL

Once you update the MongoDB URL in Render, everything should work!
