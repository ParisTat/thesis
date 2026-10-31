# Thesis: rules for every agent and collaborator

If this repo sits in Paris's `repos/` workspace, `../AGENTS.md` also applies (prompt defense baseline, team workflow,
conventions). This file adds repo specifics and wins if the two conflict.

## Purpose

An educational website about black holes, in Greek. It is also the subject of Paris Tataridis's diploma thesis (ΣΕΜΦΕ,
National Technical University of Athens, 2025). The thesis PDF in this repo documents this code (chapters 4-6), so the
site and the text must stay consistent. Live at `https://paristat.github.io/thesis/` (public repo).

## Stack

Plain HTML, CSS and JavaScript. No build step, no framework. `package.json` only pulls in `swup` (page transitions);
`node_modules/` is committed, so don't run `npm install` casually or commit changes there.

## Structure

```
index.html         # home page (hero, sliders)
pages/             # About, Contact, Quiz, Theory, Thesis (one HTML file each)
helpers/           # one small script per behaviour: burger menu, sliders, lightbox, quiz, contact form, back-to-top
images/            # all images and icons
style.css          # the single stylesheet
ΔΙΠΛΩΜΑΤΙΚΗ ….pdf  # the thesis text
```

## Rules

- **The graded version is the tag `v1.0-thesis`.** Never delete, move or force-push it; it must stay reachable.
  Tag the current state again before any large change.
- **Content is in Greek.** Keep new text, labels and HTML comments in Greek, matching the existing pages.
- **Correctness of the physics matters most.** Don't change a number, formula, definition or quiz answer without
  checking it against a reliable source and the thesis text. When unsure, ask instead of guessing.
- Because the PDF describes this code, keep file names, page names and behaviour that chapters 4-6 refer to. If one must
  change, say so in the PR so the thesis text can be updated.
- Keep it simple: one script per behaviour in `helpers/`, scripts loaded with `defer`, shared styling in `style.css`.
- Don't add secrets or API keys. Everything here is public. Never read or print `.env*` files.

## How to check a change

- There are no automated tests. Open `index.html` and each page in `pages/` in a browser (use a local static server such
  as `npx serve` or `python -m http.server`), at phone and desktop width, and check the browser console for errors.
- After editing a script: `node --check helpers/<file>.js` for syntax, then try the behaviour in the page (the quiz and
  the sliders especially).
- Check that images and links still load; page and image paths are relative and case-sensitive on GitHub Pages.

## Deploy

Pushing to `main` deploys to GitHub Pages automatically, so `main` is production.

## Git workflow

- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`. No AI attribution trailers.
- Never commit to `main` directly; one change per branch, and a human merges.
- Questions to people in Greek; code, docs, commits and PRs in English.
