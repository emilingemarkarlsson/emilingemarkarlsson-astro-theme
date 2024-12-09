# Emil Karlsson's Blog and Portfolio Theme

This is a personalized version of the **Dante - Astro & Tailwind CSS Theme** originally created by [justgoodui.com](https://justgoodui.com/). The theme provides a clean, modern design optimized for blogging and showcasing projects. It has been tailored to suit my needs as a data engineer, project manager, and hockey analytics enthusiast.

![Preview of the Theme](public/dante-preview.jpg)

This theme is built using **Astro.js** and **Tailwind CSS** and includes features such as dark mode, tags, a subscription form, and more.

---

## Why This Theme?

I chose this theme because of its sleek, content-focused design and flexibility, making it ideal for my portfolio and blog. It's a great starting point for showcasing work in fields like data engineering, hockey analytics, and beyond.

Original theme credit: [justgoodui.com](https://justgoodui.com/).

---

## Features

This project comes with the following features out of the box:

- ✅ Dark and light mode toggle
- ✅ Hero section with a personal bio
- ✅ Portfolio collection for projects
- ✅ Pagination for easy navigation
- ✅ Tags for blog posts
- ✅ Subscription form for email capture
- ✅ View transitions for a modern feel
- ✅ Tailwind CSS for styling
- ✅ Mobile-first responsive layout
- ✅ SEO optimizations (canonical URLs, OpenGraph data)
- ✅ Sitemap generation
- ✅ RSS Feed support
- ✅ Markdown & MDX support

---

## Technologies and Integrations

This project uses the following integrations and technologies:

- [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) - Tailwind CSS integration
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - Automatic sitemap generation
- [@astrojs/mdx](https://docs.astro.build/en/guides/markdown-content/) - MDX support for enhanced markdown
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/) - RSS feed generation

---

## Project Structure

Here’s how the project is organized:

```text
├── public/
├── src/
│   ├── components/   # Reusable components
│   ├── content/      # Blog posts and project collections
│   ├── data/         # Configurations and metadata
│   ├── icons/        # Icon assets
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes and individual pages
│   ├── styles/       # Global and utility CSS
│   └── utils/        # Utility functions
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json

Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:4321
npm run build	Builds the production site to ./dist/
npm run preview	Previews the production build locally
npm run astro ...	Run CLI commands like astro add, astro check
npm run astro -- --help	Get help using the Astro CLI