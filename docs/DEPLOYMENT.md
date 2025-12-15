# Deployment Guide

This document describes how the ReFi Mediterranean website is deployed to GitHub Pages.

## GitHub Pages Configuration

The website is automatically deployed to GitHub Pages at:
**https://refidao.github.io/ReFi-Mediterranean**

### Automatic Deployment

Deployment happens automatically via GitHub Actions when changes are pushed to the `main` branch.

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs the following steps:

1. **Checkout** - Checks out the repository code
2. **Setup Node.js** - Sets up Node.js v22
3. **Install Dependencies** - Runs `npm ci` to install dependencies
4. **Build Quartz** - Runs `npx quartz build` to build the site
5. **Create .nojekyll** - Creates `.nojekyll` file to disable Jekyll processing
6. **Upload Artifact** - Uploads the `public/` directory as a Pages artifact
7. **Deploy** - Deploys to GitHub Pages using the `deploy-pages` action

### GitHub Pages Settings

To enable GitHub Pages:

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy when changes are pushed to `main`

### Base URL Configuration

The `baseUrl` in `quartz.config.ts` is set to:
```
refidao.github.io/ReFi-Mediterranean
```

This matches the GitHub Pages URL structure: `{username}.github.io/{repository-name}`

**Note:** GitHub Pages URLs are case-sensitive. The repository name `ReFi-Mediterranean` determines the URL path.

## Manual Deployment

If you need to deploy manually:

```bash
# Build the site
npm run quartz build

# The public/ directory contains the built site
# You can manually upload it to GitHub Pages if needed
```

## Troubleshooting

### Build Failures

If the GitHub Actions build fails:

1. Check the Actions tab in GitHub for error messages
2. Verify Node.js version compatibility (requires Node.js 22+)
3. Ensure all dependencies are properly listed in `package.json`

### Pages Not Updating

If changes aren't appearing on GitHub Pages:

1. Check that the workflow completed successfully
2. Verify the `baseUrl` in `quartz.config.ts` matches the GitHub Pages URL
3. Clear browser cache or try incognito mode
4. Check GitHub Pages settings to ensure "GitHub Actions" is selected as the source

### 404 Errors

If pages return 404 errors:

1. Verify the `baseUrl` is correct in `quartz.config.ts`
2. Check that internal links use relative paths (not absolute paths)
3. Ensure the `.nojekyll` file is present in the `public/` directory

## Custom Domain (Future)

If you want to use a custom domain like `mediterranean.refidao.com`:

1. Update `baseUrl` in `quartz.config.ts` to the custom domain
2. Create a `CNAME` file in the `public/` directory with the domain name
3. Configure DNS settings to point to GitHub Pages
4. Update GitHub Pages settings to use the custom domain

See [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.
