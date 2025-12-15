# GitHub Pages Setup Checklist

This checklist ensures the website is properly configured for GitHub Pages deployment.

## ✅ Configuration Complete

- [x] **Base URL Updated** - `quartz.config.ts` set to `refidao.github.io/ReFi-Mediterranean`
- [x] **GitHub Actions Workflow** - `.github/workflows/deploy.yml` configured
- [x] **.nojekyll File** - Will be created automatically during build
- [x] **Node.js Version** - Workflow uses Node.js 22 (matches package.json requirements)
- [x] **Build Command** - Uses `npx quartz build`
- [x] **Deployment** - Uses GitHub Actions `deploy-pages` action

## Required GitHub Repository Settings

To enable GitHub Pages, you need to configure the repository settings:

1. **Go to Repository Settings**
   - Navigate to: `https://github.com/ReFiDAO/ReFi-Mediterranean/settings/pages`

2. **Configure Pages Source**
   - Under "Source", select: **"GitHub Actions"**
   - Do NOT select "Deploy from a branch"

3. **Verify Permissions**
   - Repository must have "Pages" write permission enabled
   - The workflow already requests `pages: write` and `id-token: write` permissions

## Deployment Process

Once configured, deployment happens automatically:

1. **Push to main branch** → Triggers workflow
2. **Workflow builds site** → Creates `public/` directory
3. **Workflow creates .nojekyll** → Prevents Jekyll processing
4. **Workflow uploads artifact** → Prepares for deployment
5. **Workflow deploys** → Publishes to GitHub Pages

## Expected URL

After deployment, the site will be available at:
**https://refidao.github.io/ReFi-Mediterranean**

**Note:** The URL path matches the repository name exactly (case-sensitive).

## Verification Steps

After pushing to main:

1. **Check GitHub Actions**
   - Go to: `https://github.com/ReFiDAO/ReFi-Mediterranean/actions`
   - Verify the workflow completed successfully (green checkmark)

2. **Check GitHub Pages**
   - Go to: `https://github.com/ReFiDAO/ReFi-Mediterranean/settings/pages`
   - Verify deployment status shows "Published"

3. **Visit the Site**
   - Open: `https://refidao.github.io/ReFi-Mediterranean`
   - Verify all pages load correctly
   - Check navigation links work
   - Verify images and assets load

## Troubleshooting

### Workflow Fails

- Check Node.js version compatibility
- Verify all dependencies install correctly (`npm ci`)
- Check build logs for specific errors

### Pages Not Updating

- Ensure "GitHub Actions" is selected as Pages source (not branch)
- Clear browser cache
- Wait a few minutes for DNS propagation

### 404 Errors

- Verify `baseUrl` in `quartz.config.ts` matches GitHub Pages URL
- Check that internal links use relative paths
- Ensure `.nojekyll` file exists (created automatically by workflow)

## Next Steps

1. **Push changes to main branch** to trigger first deployment
2. **Configure GitHub Pages** to use GitHub Actions as source
3. **Verify deployment** by visiting the site URL
4. **Monitor** GitHub Actions for any build issues

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [Quartz Documentation](https://quartz.jzhao.xyz/)
