# Free MongoDB Setup - Railway (Easiest Option)

## 🚂 Railway - FREE MongoDB (500 hours/month)

### Step 1: Sign Up (30 seconds)
1. Go to: https://railway.app/
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (easiest and fastest)
4. Authorize Railway to access your GitHub

### Step 2: Create MongoDB Database (1 minute)
1. After login, click **"New Project"**
2. Select **"Deploy MongoDB"** or **"Add MongoDB"**
3. Railway will automatically create a MongoDB instance
4. Wait 30 seconds for it to deploy

### Step 3: Get Connection String (30 seconds)
1. Click on the **MongoDB service** card
2. Go to the **"Variables"** tab
3. Look for `MONGO_URL` or `DATABASE_URL`
4. Click the **copy icon** to copy the connection string
5. It will look like: `mongodb://mongo:PASSWORD@containers-us-west-xxx.railway.app:PORT/railway`

### Step 4: Add to Render (1 minute)
1. Go to your Render dashboard
2. Select your backend service
3. Go to **Environment** tab
4. Add variable:
   - **Key:** `MONGO_URI`
   - **Value:** Paste the Railway MongoDB URL
5. Click **Save Changes**
6. Wait for Render to redeploy (1-2 minutes)

---

## Alternative: MongoDB.com Free Tier (If Available in Your Region)

If MongoDB Atlas still doesn't show free tier, it might be:
- Regional restriction
- Account already has a free cluster
- Try logging out and signing up with a different email

---

## 🆘 If Nothing Works

Let me know and I can help you:
1. Convert your app to use PostgreSQL (also free on Render)
2. Set up a local MongoDB tunnel
3. Find another free MongoDB provider

---

**Time estimate: 2-3 minutes total**
