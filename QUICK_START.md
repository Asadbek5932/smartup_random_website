# 🚀 Quick Start - Deploy to Vercel in 3 Steps

## Step 1: Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

## Step 2: Create New Project
1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Search for: `smartup_random_website`
4. Click **"Import"**

## Step 3: Deploy
1. **Project Name:** `smartup-random-website` (or your choice)
2. **Framework Preset:** `Other`
3. Click **"Deploy"**
4. Wait 1-2 minutes ⏳

✅ **Done!** Your site is live!

You'll get a URL like: `https://smartup-random-website-xxxx.vercel.app`

---

## ⚙️ After Deployment

### Update Bot Links (Important!)
Edit `js/script.js` lines 216 and 225:

```javascript
// Line 216 - Replace with your Telegram bot
const botUsername = 'smartup_random_bot';

// Line 225 - Replace with your WhatsApp number
const phoneNumber = '1234567890';
```

Then commit and push:
```bash
git add js/script.js
git commit -m "Update bot links"
git push
```

Vercel will automatically redeploy! ✨

### Add Assets
Place files in `assets/` directory:
- `favicon.png` (512×512px)
- `google-play-badge.svg`
- `app-store-badge.svg`

Then commit and push. Vercel auto-redeploys!

---

## 📖 Need More Info?
- **Full Guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Contributing:** See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Main README:** See [README.md](./README.md)

---

## ✅ Automated CI/CD

Your repository includes:
- ✅ **GitHub Actions** - Quality checks on every PR
- ✅ **Lighthouse** - Performance audits
- ✅ **Vercel Deploy** - Auto-deploy on push to main
- ✅ **Security Headers** - Already configured
- ✅ **Caching** - Static files cached for 1 year

Everything is set up. Just push to main and watch it deploy! 🎲

---

## 🔗 Links

- **Repository:** https://github.com/Asadbek5932/smartup_random_website
- **Vercel Dashboard:** https://vercel.com/dashboard

---

**Questions?** Check DEPLOYMENT.md or open an issue on GitHub!
