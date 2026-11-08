# Millena Sandes — Portfolio

Personal portfolio for Millena Sandes, built with [Next.js](https://nextjs.org) and published as a static site on GitHub Pages.

**Live site:** https://davioliveirapn.github.io/portifolio-millena/

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command         | What it does                                        |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Development server with live reload                 |
| `npm run build` | Builds the static site into `out/`                  |
| `npm test`      | Runs the tests                                      |
| `npm run deploy`| Tests, builds and publishes the site to GitHub Pages |

## Editing the content

All text lives in **`src/content/site.ts`**: profile, numbers, press, projects, testimonial, résumé and contacts.

- **Photo:** put the image in `public/` (e.g. `public/millena.jpg`) and set `photo: '/millena.jpg'`.
- **Résumé PDF:** save it as `public/curriculo-millena-sandes.pdf`.

## Publishing on GitHub Pages

The site is published from the **`gh-pages` branch**. That branch holds only the built site (the contents of `out/`) and is created by `npm run deploy`. Never edit it by hand.

### Publishing an update

```bash
npm run deploy
```

This one command:
1. runs the tests (stops if any fail);
2. builds the static site into `out/` with the `/portifolio-millena` path;
3. pushes `out/` to the `gh-pages` branch.

GitHub then publishes it in about 1 minute at **https://davioliveirapn.github.io/portifolio-millena/**.
Pushing to `master` does **not** update the site, so run `npm run deploy` after your changes.

> `npm run deploy` pushes to GitHub over HTTPS, so git must be able to log in. If it fails with *"could not read Username"*, run `gh auth setup-git` once (with the GitHub CLI logged in), or use the credentials of your editor.

### One-time setup (already done)

If you ever need to redo it, for example in a new repository:

1. Run `npm run deploy` once so the `gh-pages` branch exists.
2. Open the repository on GitHub: https://github.com/DaviOliveiraPN/portifolio-millena
3. Go to **Settings → Pages** (left sidebar, under **Code and automation**).
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, pick **`gh-pages`** and folder **`/ (root)`**, then click **Save**.
6. Keep the repository **public**, because Pages on a free plan requires it.

> Same thing from the terminal:
>
> ```bash
> gh api -X PUT repos/DaviOliveiraPN/portifolio-millena/pages \
>   -f build_type=legacy -f 'source[branch]=gh-pages' -f 'source[path]=/'
> ```

You can follow each publish in the **Actions** tab, in the *pages build and deployment* run.

### Troubleshooting

| Problem | Fix |
| ------- | --- |
| *"could not read Username for 'https://github.com'"* | Git has no GitHub login. Run `gh auth setup-git` once. |
| *"a branch named 'gh-pages' already exists"* | A previous deploy left a cache behind. Run `npx gh-pages-clean`, then `npm run deploy` again. |
| Site shows the old README instead of the portfolio | **Settings → Pages → Branch** isn't `gh-pages`. Fix it (setup step 5). |
| Site didn't change after deploying | Wait a minute and hard-refresh (Ctrl + Shift + R). If it still doesn't change, check the *pages build and deployment* run in **Actions**. |
| Page loads without styles, or 404 for images/CSS | The repository was renamed. Update the path in the `build:pages` script in `package.json` to the new name. |
| Publish run fails with *"account is locked due to a billing issue"* | Even branch publishing uses a GitHub job. Fix the issue at https://github.com/settings/billing. |

### Using a custom domain (optional)

1. Create `public/CNAME` containing just the domain (e.g. `millenasandes.com.br`), so it's included on every deploy.
2. In `package.json`, change the `build:pages` script to `next build` (no `NEXT_PUBLIC_BASE_PATH`), because the site will live at the domain root.
3. Run `npm run deploy`.
4. In **Settings → Pages → Custom domain**, type the domain and save.
5. At your domain registrar, create the DNS records from [GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
6. Check **Enforce HTTPS** once it becomes available.

## How the GitHub Pages build works

- `next.config.ts` uses `output: 'export'`, so the build creates plain HTML/CSS/JS in `out/` with no server needed.
- The site is served from `/portifolio-millena/`, not the root. `npm run build:pages` passes this as `NEXT_PUBLIC_BASE_PATH`. Locally it is empty, so `npm run dev` runs at the root.
- Files from `public/` referenced in code must go through `asset()` (`src/lib/asset.ts`) so they get that prefix.
- `public/.nojekyll` stops GitHub from hiding the `_next/` folder. `--dotfiles` in the deploy script makes sure it gets published.
