# GitHub Pages Deployment Guide

## ✅ Deployment Configuration Complete!

Your FCUB CGPA Calculator is now configured for automatic deployment to GitHub Pages.

## What Has Been Configured

### 1. **Vite Base Path** ✅
- Updated `vite.config.ts` with correct base path: `/vue-cgpa-calculator/`
- This ensures all assets load correctly on GitHub Pages

### 2. **GitHub Actions Workflow** ✅
- Created `.github/workflows/deploy.yml`
- Automatically builds and deploys on every push to `main` branch
- Uses Node.js 20 for compatibility

### 3. **Jekyll Prevention** ✅
- Added `public/.nojekyll` file
- Prevents GitHub from processing the site with Jekyll
- Ensures Vite-built assets work correctly

## Enable GitHub Pages (One-Time Setup)

You need to enable GitHub Pages in your repository settings:

### Step 1: Go to Repository Settings
1. Visit: https://github.com/tarikmanoar/vue-cgpa-calculator/settings/pages
2. Or navigate: Repository → Settings → Pages (in left sidebar)

### Step 2: Configure Source
Under "Build and deployment":
- **Source**: Select **GitHub Actions**
- Save the changes

### Step 3: Wait for Deployment
- The workflow will automatically run
- Check progress: https://github.com/tarikmanoar/vue-cgpa-calculator/actions
- First deployment takes 1-2 minutes

## Your Live Site

Once deployed, your app will be available at:

🌐 **https://tarikmanoar.github.io/vue-cgpa-calculator/**

## Workflow Details

### Automatic Deployment Triggers
- ✅ Push to `main` branch
- ✅ Manual trigger via Actions tab

### Build Process
1. **Checkout** - Fetches latest code
2. **Setup Node.js** - Installs Node.js 20
3. **Install dependencies** - Runs `npm ci`
4. **Build** - Runs `npm run build` with production env
5. **Upload artifact** - Prepares build for deployment
6. **Deploy** - Publishes to GitHub Pages

### Build Output
- Built files: `dist/` directory
- Service worker: Generated for PWA
- All assets: Properly prefixed with base path

## Testing Deployment

After enabling GitHub Pages:

1. **Check Actions Tab**
   ```
   https://github.com/tarikmanoar/vue-cgpa-calculator/actions
   ```
   - You should see a "Deploy to GitHub Pages" workflow running

2. **Wait for Green Checkmark**
   - Build job should complete successfully
   - Deploy job should complete successfully

3. **Visit Your Site**
   ```
   https://tarikmanoar.github.io/vue-cgpa-calculator/
   ```

4. **Test PWA Features**
   - Click "Install" prompt to install as PWA
   - Test offline functionality
   - Test all 8 departments

## Troubleshooting

### Deployment Not Starting?
- Ensure GitHub Pages source is set to **GitHub Actions**
- Check that workflow file exists in `.github/workflows/deploy.yml`
- Verify you have write permissions for the repository

### 404 Errors on Assets?
- Check that `vite.config.ts` has correct base path
- Ensure `.nojekyll` file exists in `public/` directory
- Rebuild: Push a new commit to trigger rebuild

### Build Failures?
- Check Actions tab for error messages
- Verify `package.json` dependencies are correct
- Ensure TypeScript compilation passes locally: `npm run typecheck`

### Service Worker Issues?
- Clear browser cache and reload
- Check browser console for service worker errors
- Verify manifest.json is accessible

## Local Testing of Production Build

Before pushing changes, test production build locally:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Visit: `http://localhost:5000`

## Updating the App

Every time you push to `main`, the site automatically redeploys:

```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push origin main

# GitHub Actions will automatically:
# 1. Build the app
# 2. Deploy to GitHub Pages
# 3. Update your live site
```

## Custom Domain (Optional)

To use a custom domain:

1. Add CNAME file: `public/CNAME` with your domain
2. Configure DNS at your domain provider
3. Enable HTTPS in repository settings

Example `public/CNAME`:
```
cgpa.yourdomain.com
```

## Performance Optimization

The app is already optimized:
- ✅ Code splitting (vue-core, pwa-utils, db-utils chunks)
- ✅ Terser minification
- ✅ CSS minification
- ✅ Service worker caching
- ✅ PWA offline support
- ✅ Hidden source maps for production

## Monitoring Deployments

### GitHub Actions Badge
Add to README.md:
```markdown
[![Deploy](https://github.com/tarikmanoar/vue-cgpa-calculator/actions/workflows/deploy.yml/badge.svg)](https://github.com/tarikmanoar/vue-cgpa-calculator/actions/workflows/deploy.yml)
```

### Deployment History
View all deployments:
```
https://github.com/tarikmanoar/vue-cgpa-calculator/deployments
```

## Security & Permissions

The workflow uses:
- ✅ `contents: read` - Read repository contents
- ✅ `pages: write` - Write to GitHub Pages
- ✅ `id-token: write` - OIDC token for secure deployment

## Next Steps

1. **Enable GitHub Pages** (follow Step 2 above)
2. **Wait for deployment** (check Actions tab)
3. **Visit your live site**
4. **Share with FCUB students!** 🎉

## Support

If you encounter issues:
1. Check Actions tab for error logs
2. Review this guide's troubleshooting section
3. Verify all configuration files are in place
4. Test build locally before pushing

---

## 🎉 You're All Set!

Your FCUB CGPA Calculator will be live at:
**https://tarikmanoar.github.io/vue-cgpa-calculator/**

Just enable GitHub Pages in repository settings and you're done! 🚀
