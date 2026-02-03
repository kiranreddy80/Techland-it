# Production Deployment Guide (VPS + Nginx + PM2)

This guide outlines the steps to deploy the Techland website, admin panel, and backend to a Linux VPS.

## 1. Project Structure
- **/var/www/techland-api**: Node.js Backend API
- **/var/www/techland-site**: Main Website (Frontend)
- **/var/www/techland-admin**: Admin Panel

## 2. Prepare Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/techland
JWT_SECRET=your_production_secret_key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=recipient-email@gmail.com
CORS_ORIGIN=https://yourdomain.com,https://admin.yourdomain.com
```

### Website (`frontend/.env`)
```env
VITE_API_URL=https://api.yourdomain.com
```

### Admin Panel (`admin/.env`)
```env
VITE_API_URL=https://api.yourdomain.com
```

## 3. Server Setup (Ubuntu)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git
sudo npm install -g pm2
```

## 4. Deployment Steps

### A. Backend Deployment
1. Upload the `backend` folder to `/var/www/techland-api`.
2. `cd /var/www/techland-api && npm install --production`.
3. Start with PM2: `pm2 start src/server.js --name techland-api`.

### B. Website Deployment
1. Build locally: `cd frontend && npm run build`.
2. Upload `frontend/dist` contents to `/var/www/techland-site`.

### C. Admin Panel Deployment
1. Build locally: `cd admin && npm run build`.
2. Upload `admin/dist` contents to `/var/www/techland-admin`.

## 5. Nginx Configuration

`sudo nano /etc/nginx/sites-available/techland`

```nginx
# Main Website
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        root /var/www/techland-site;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}

# Admin Panel
server {
    listen 80;
    server_name admin.yourdomain.com;
    location / {
        root /var/www/techland-admin;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}

# Backend API
server {
    listen 80;
    server_name api.yourdomain.com;
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    location /uploads/ {
        alias /var/www/techland-api/public/uploads/;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/techland /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx
```

## 6. SSL (HTTPS)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d admin.yourdomain.com -d api.yourdomain.com
```
