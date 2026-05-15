# Negation Affirmation

Independent publication — accountability & line struggle on the US left.

## Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial"
gh repo create negation-affirmation --public
git push -u origin main
```

### 2. Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect your GitHub repo
3. Build settings: leave blank (static site, no build command)
4. Click Deploy

### 3. Enable Netlify Identity + Git Gateway (for CMS)

1. In Netlify dashboard → **Identity** → Enable Identity
2. Under Identity → **Registration** → set to Invite only
3. Under Identity → **Services** → Enable Git Gateway
4. Invite yourself as a user under Identity → Invite users
5. Go to `yoursite.netlify.app/admin/` to access the CMS

### 4. Adding articles via CMS

1. Go to `/admin/`
2. Click **New Article**
3. Fill in: Title, Author, Date, Tags (Accountability / Line Struggle), Excerpt, Body
4. Click **Publish** — the article commits to your GitHub repo and the site rebuilds automatically

## Read time

Read time is calculated automatically at 238 words per minute. It appears in the byline on the homepage and article header.

## File structure

```
negation-affirmation/
├── index.html          # Main site (edit articles here directly if preferred)
├── netlify.toml        # Netlify config
├── admin/
│   ├── index.html      # CMS panel
│   └── config.yml      # CMS configuration
└── _articles/          # Article markdown files (managed by CMS)
    ├── frso-politically-lynched.md
    └── oromia-palestine.md
```

## Adding articles manually (without CMS)

Create a new `.md` file in `_articles/` with this frontmatter:

```yaml
---
title: "Your Title"
author: "Author Name"
date: "2026-05-15"
tags:
  - accountability       # or line-struggle, or both
excerpt: "One paragraph summary."
---

Your article body here in markdown.
```

Then add the article to `index.html` following the existing patterns.
