# Deployment Guide

## Quick Start with Vercel

This guide walks you through deploying the Smartup Random website to Vercel.

### Prerequisites

- GitHub account with access to this repository
- Vercel account (free: https://vercel.com)

---

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Connect to Vercel
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Search for `smartup_random_website` repository
5. Select it and click **"Import"**

### Step 2: Configure Project
1. **Project Name:** `smartup-random-website` (or your choice)
2. **Framework Preset:** `Other` (it's a static site)
3. **Root Directory:** Leave empty
4. **Build Command:** Leave empty
5. **Output Directory:** Leave empty
6. **Install Command:** Leave empty

### Step 3: Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes
3. You'll get a URL like: `https://smartup-random-website-xxxx.vercel.app`

✅ **Done!** Your site is now live!

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd /path/to/smartup_random_website
vercel
```

### Step 3: Follow Prompts
- Set project name: `smartup-random-website`
- Link to existing project? `No`
- Accept default settings
- Deployment will start automatically

---

## Method 3: GitHub Integration (Auto-Deploy)

### Step 1: Connect Repository
1. In Vercel dashboard, go to **Settings** → **Git Integration**
2. Connect your GitHub account
3. Select `smartup_random_website` repository

### Step 2: Configure Auto-Deployment
1. Go to **Project Settings** → **Git**
2. **Production Branch:** Select `main` (or `master`)
3. **Deploy on every push to production branch:** Enabled

### Step 3: Automatic Deployment
- Every time you push to `main`/`master`, Vercel automatically deploys
- Pull requests get preview deployments automatically

---

## Environment Configuration

### Connect to Your Own Vercel Project

If you want to use GitHub Actions to deploy:

1. **Create Vercel Tokens:**
   - Go to [https://vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create a new token (name it `VERCEL_TOKEN`)
   - Copy the token

2. **Get Project IDs:**
   - Go to your Vercel project settings
   - Copy **Organization ID** and **Project ID**

3. **Add GitHub Secrets:**
   - Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
   - Click **"New repository secret"** and add:
     - `VERCEL_TOKEN` = (paste your token)
     - `VERCEL_ORG_ID` = (your org ID)
     - `VERCEL_PROJECT_ID` = (your project ID)

4. **Enable GitHub Actions:**
   - Workflows are in `.github/workflows/`
   - They will automatically deploy on push to main/master

---

## Update Bot Links

After deployment, you need to update the bot links in `js/script.js`:

### Line 216: Telegram Bot
```javascript
const botUsername = 'smartup_random_bot'; // Replace with your actual bot
```

### Line 225: WhatsApp Bot
```javascript
const phoneNumber = '1234567890'; // Replace with your actual number
```

**Example:**
```javascript
const botUsername = 'mybot'; // Your actual bot username
const phoneNumber = '+998901234567'; // Your WhatsApp number with country code
```

After updating, commit and push:
```bash
git add js/script.js
git commit -m "Update bot links"
git push
```

Vercel will automatically redeploy!

---

## Add Missing Assets

The `assets/` directory is empty. Add these files:

### 1. Favicon
- Place PNG file at: `assets/favicon.png` (512×512px)
- Generate favicon set: https://realfavicongenerator.net/

### 2. App Store Badges
- Download from:
  - **Google Play:** https://play.google.com/intl/en_us/badges/
  - **App Store:** https://developer.apple.com/app-store/marketing/guidelines/
- Save as: `assets/google-play-badge.svg`, `assets/app-store-badge.svg`

### 3. Screenshots (Optional)
- Add app screenshots to `assets/screenshots/`
- Update `index.html` to reference them

After adding files:
```bash
git add assets/
git commit -m "Add landing page assets"
git push
```

Vercel will automatically redeploy!

---

## Custom Domain Setup

### Add Your Domain in Vercel

1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain: `smartuprandom.com`
4. Choose DNS provider:
   - **Vercel Nameservers** (easiest)
   - **CNAME Record** (if using existing DNS)
5. Follow instructions
6. SSL certificate auto-provisioned within 5-30 minutes

---

## Testing Your Deployment

### Verify Site is Live
```bash
curl https://your-vercel-url.vercel.app
```

### Run Lighthouse Audit
1. Open your site in Chrome
2. Press F12 to open DevTools
3. Go to **Lighthouse** tab
4. Click **"Analyze page load"**
5. Verify scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

### Test Responsiveness
1. Open site in browser
2. Press F12
3. Click responsive design mode icon
4. Test at different screen sizes:
   - Mobile: 375×667
   - Tablet: 768×1024
   - Desktop: 1920×1080

### Test Bot Links
1. Click Telegram button → should open Telegram
2. Click WhatsApp button → should open WhatsApp

---

## Monitoring & Analytics

### Enable Vercel Analytics
1. Go to **Project Settings** → **Analytics**
2. Enable **Web Analytics**
3. View real-time metrics:
   - Page views
   - Unique visitors
   - Bounce rate
   - Top pages

### View Deployment Logs
1. Go to **Deployments** tab
2. Click on any deployment
3. View build logs and error messages

---

## Troubleshooting

### Site Shows 404
- Check root directory setting in Vercel project
- Ensure `index.html` is in root directory
- Verify `.vercelignore` is correct

### Images Not Loading
- Ensure image files are in `assets/` directory
- Check file paths in HTML match actual files
- Use relative paths: `./assets/image.png`

### Slow Performance
- Run Lighthouse audit
- Compress images using TinyPNG: https://tinypng.com/
- Check network tab in DevTools for large files

### Bot Links Not Working
- Verify bot username is correct in `js/script.js`
- Ensure Telegram bot is running and published
- Check WhatsApp number format (include country code)

### Deploy Fails in GitHub Actions
- Check GitHub secrets are set correctly
- Verify `VERCEL_TOKEN` is valid (not expired)
- View workflow logs for error details
- Manually deploy via Vercel dashboard as fallback

---

## Making Updates

### Local Development
```bash
# Clone the repository
git clone https://github.com/Asadbek5932/smartup_random_website.git
cd smartup_random_website

# Make changes to HTML/CSS/JS
# Test locally by opening index.html in browser

# Commit changes
git add .
git commit -m "feat: Update landing page"
git push
```

### Automatic Redeployment
- Push to `main` → Production deploys
- Push to other branch → Preview deploys
- Vercel handles everything automatically

---

## Rollback to Previous Deployment

If you deploy something broken:

### Via Vercel Dashboard
1. Go to **Deployments** tab
2. Find the last working deployment
3. Click **"..."** → **"Promote to Production"**
4. Done! Site rolls back instantly

### Via Git Revert
```bash
# Find the commit to revert
git log --oneline

# Revert the commit
git revert <commit-hash>
git push

# Vercel will redeploy automatically
```

---

## Performance Tips

1. **Compress Images:** Use https://tinypng.com/
2. **Use WebP Format:** Convert images to WebP for smaller size
3. **Lazy Load Images:** Mark images with `loading="lazy"`
4. **Remove Unused CSS:** Delete unused styles from `css/style.css`
5. **Minify Files:** Use online minifiers for CSS/JS (optional for small sites)

---

## Security Tips

1. Never commit API keys or secrets
2. Use Vercel environment variables for sensitive data
3. Keep Google Fonts CDN URL in HTML
4. Avoid inline scripts, use external `js/script.js`
5. Security headers are configured in `vercel.json`

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test and verify
3. ✅ Add custom domain
4. ✅ Update bot links
5. ✅ Add missing assets
6. ✅ Monitor analytics
7. ✅ Share the URL!

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Actions:** https://docs.github.com/en/actions
- **HTML/CSS/JS:** https://developer.mozilla.org/

---

**Questions?** Open an issue on GitHub or check the README.md
