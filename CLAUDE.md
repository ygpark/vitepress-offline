# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress documentation site project. VitePress is a static site generator optimized for creating fast, content-focused documentation websites.

## Development Commands

```bash
# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Project Structure

- `docs/` - Contains all documentation source files
  - `docs/index.md` - Main documentation entry point
  - `docs/.vitepress/` - VitePress configuration and cache directory
- `package.json` - Project configuration with VitePress as the only dependency

## Architecture Notes

- Complete VitePress demo site with Korean content for beginners
- Custom configuration in `docs/.vitepress/config.js` with navigation and sidebar
- Documentation content is written in Markdown format with Vue components
- Includes comprehensive examples: basic markdown, advanced features, Vue components, and API documentation
- The site builds to static HTML/CSS/JS for deployment
- Designed for offline usage (node_modules included in git)

## Demo Content Structure

- **Home page** (`docs/index.md`): Hero layout with features showcase
- **Guide section** (`docs/guide/`): Getting started, installation, and configuration
- **Examples section** (`docs/examples/`): Basic markdown, advanced features, and Vue components
- **API section** (`docs/api/`): Configuration options and API reference