# Contributing to Smartup Random Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Respect others' time and effort
- No harassment or discrimination

---

## Getting Started

### 1. Fork the Repository
```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/smartup_random_website.git
cd smartup_random_website
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-name
```

### 3. Make Your Changes
- Edit HTML in `index.html`
- Edit CSS in `css/style.css`
- Edit JavaScript in `js/script.js`
- Add assets to `assets/` directory

### 4. Test Locally
```bash
# Open in browser (any simple HTTP server works)
python -m http.server 8000
# Visit http://localhost:8000
```

### 5. Commit Your Changes
```bash
git add .
git commit -m "feat: Add new feature"
# or
git commit -m "fix: Fix bug description"
```

### 6. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 7. Create Pull Request
- Go to GitHub
- Click "Pull Request"
- Describe your changes
- Submit

---

## Commit Message Format

Follow conventional commits:

```
type: subject

body

footer
```

### Types
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, missing semicolons, etc.
- `refactor:` Code restructuring
- `perf:` Performance improvements
- `test:` Adding tests

### Examples
```
feat: Add dark mode support

fix: Correct mobile menu positioning

docs: Update deployment guide

style: Format JavaScript code

refactor: Simplify bot link handler
```

---

## Code Style

### HTML
- Use semantic HTML5 tags
- Include `alt` text on all images
- Use meaningful `id` and `class` names
- Proper indentation (2 spaces)

### CSS
- Use CSS variables for colors/sizes
- Mobile-first design (mobile styles first, then media queries)
- Proper indentation (2 spaces)
- Keep selectors simple and reusable

### JavaScript
- Use `const` by default, `let` if needed, avoid `var`
- Use arrow functions
- Add comments for complex logic
- Use meaningful variable names
- Proper indentation (2 spaces)

---

## Before Submitting

### Testing Checklist
- [ ] Site loads without errors
- [ ] No console errors (open DevTools)
- [ ] Mobile responsive (test at 375px, 768px, 1920px)
- [ ] All links work
- [ ] Bot buttons function correctly
- [ ] Animations smooth

### Quality Checks
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test on Chrome, Firefox, Safari
- [ ] Verify accessibility (WCAG 2.1 AA)
- [ ] No broken images or missing files

### Code Review
- [ ] Clear commit messages
- [ ] Follows code style guidelines
- [ ] No unnecessary dependencies added
- [ ] Documentation updated if needed

---

## Types of Contributions

### Bug Fixes
1. Describe the bug clearly
2. Provide reproduction steps
3. Include screenshots if relevant
4. Test your fix thoroughly

### New Features
1. Discuss in issues first (for major features)
2. Follow the project structure
3. Maintain responsive design
4. Update documentation

### Documentation
1. Fix typos and clarifications
2. Add deployment examples
3. Update README with new features
4. Add code comments

### Performance Improvements
1. Benchmark before/after
2. Document the improvement
3. Ensure no functionality breaks
4. Update performance notes

---

## PR Review Process

### What We Look For
- Code quality and style
- No breaking changes
- Performance impact
- Browser compatibility
- Mobile responsiveness
- Accessibility compliance

### How We Communicate
- We'll review within 7 days
- Comments are constructive feedback
- We may request changes
- Discussion is always welcome

### After Approval
- Squash commits if requested
- We'll merge when ready
- Automatic deployment to staging
- Production deploy after testing

---

## Development Tips

### Testing Tool Links
- **Lighthouse:** Press F12 → Lighthouse tab
- **Responsive Design:** Press F12 → Toggle device toolbar
- **Cross-browser:** Test in Chrome, Firefox, Safari
- **Accessibility:** Use WAVE extension or axe DevTools

### Useful URLs
- **Color Picker:** https://htmlcolorcodes.com/
- **Image Optimization:** https://tinypng.com/
- **Icon Library:** https://fontawesome.com/
- **Fonts:** https://fonts.google.com/

### Common Tasks

**Change primary color:**
1. Open `css/style.css`
2. Find `--primary-color: #383899;`
3. Change to your color
4. All elements using this variable update automatically

**Update bot links:**
1. Open `js/script.js` (lines 216, 225)
2. Replace bot username and phone number
3. Test the links work

**Add new section:**
1. Add HTML to `index.html`
2. Add CSS styling to `css/style.css`
3. Add JavaScript behavior to `js/script.js`
4. Test responsiveness at all breakpoints

---

## Getting Help

- **Questions?** Open an issue on GitHub
- **Bug Report?** Describe steps to reproduce
- **Feature Request?** Explain use case clearly
- **Documentation?** Suggest improvements
- **Contact:** Mention @maintainer in issues

---

## Project Structure

```
smartup_random_website/
├── index.html              # Main page
├── css/style.css          # All styles
├── js/script.js           # All JavaScript
├── assets/                # Images, icons, badges
│   ├── favicon.png
│   ├── google-play-badge.svg
│   ├── app-store-badge.svg
│   └── screenshots/
├── vercel.json            # Deployment config
├── .github/
│   └── workflows/         # GitHub Actions
├── README.md              # Main documentation
├── DEPLOYMENT.md          # Deployment guide
└── CONTRIBUTING.md        # This file

```

---

## Deployment

After your PR is merged:

1. **Preview Deploy:** Automatic on PR (not merged)
2. **Staging Deploy:** Automatic on merge to develop
3. **Production Deploy:** Automatic on merge to main

**Check deployment:** Go to [Vercel Dashboard](https://vercel.com/dashboard)

---

## License

By contributing, you agree your code is licensed under the same license as the project.

---

## Thank You!

We appreciate your contributions! Every improvement makes Smartup Random better for everyone. 🎲

---

**Happy Contributing!** 🚀
