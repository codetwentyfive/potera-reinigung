# Security Updates Needed

Last audited: 2026-03-21

---

## Critical

### 1. Upgrade Next.js (Critical CVE)
**File**: `package.json`

Next.js 14.2.11 has **8 known CVEs** (all versions up to 15.5.13 are affected). This is the most urgent fix.

| CVE | Issue |
|-----|-------|
| GHSA-7m27-7ghc-44w9 | DoS via Server Actions |
| GHSA-3h52-269p-cp9r | Information exposure in dev server (missing origin verification) |
| GHSA-g5qg-72qw-gw5v | Cache Key Confusion for Image Optimization API Routes |
| GHSA-7gfc-8cq8-jh5f | Authorization bypass |
| GHSA-4342-x723-ch2f | Middleware redirect → SSRF |
| GHSA-xv57-4mr9-wg8v | Content injection via Image Optimization |
| GHSA-qpjv-v59x-3qc4 | Race condition → cache poisoning |
| GHSA-mwv6-3258-q52c | DoS via Server Components |

```bash
npm install next@latest
```

---

## High Priority

### 2. Add HTTP Security Headers
**File**: `next.config.mjs`

Currently the config is completely empty — no security headers are set. Add the following:

```js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",  // tighten once inline scripts are removed
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self'",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 3. Fix the Contact Form — It Does Nothing
**Files**: `app/contact/page.tsx` (line 16–17) and `pages/contact.tsx` (same issue)

The form currently just logs to the console — submissions are silently dropped. Options:
- **Option A (recommended)**: Use a service like [Resend](https://resend.com), [EmailJS](https://www.emailjs.com), or [Formspree](https://formspree.io) with a server-side API route
- **Option B**: Create `app/api/contact/route.ts` with server-side validation and rate limiting before sending email

Either way, **never process raw form input on the server without sanitizing it first**.

### 4. Add Rate Limiting to Any Future API Routes
If you add a `/api/contact` route, protect it from spam/abuse:
```bash
npm install @upstash/ratelimit  # or use a middleware solution
```

---

## Medium Priority

### 5. Update Remaining Vulnerable Dependencies
Run this to fix auto-fixable issues:
```bash
npm audit fix
```

For major-version bumps that require manual review:
```bash
npm audit fix --force  # review changes carefully after running
```

Known vulnerable packages (from `npm audit`):
| Package | Severity | Issue |
|---------|----------|-------|
| `@babel/runtime` | Moderate | ReDoS via named capturing groups |
| `nanoid` | Moderate | Predictable ID generation in older versions |
| `cross-spawn` | High | Command injection |
| `minimatch` | High | ReDoS |
| `flatted` | High | Prototype pollution |
| `@typescript-eslint/*` | High | Multiple issues |

### 6. Protect `.env` Files Properly
**File**: `.gitignore` (line 29)

Currently only `.env*.local` is ignored. Add broader protection:
```
.env
.env.*
!.env.example
```

---

## Low Priority / Best Practices

### 7. Add a `robots.txt` and `sitemap.xml`
Prevents search engines from indexing pages you don't want public, and improves SEO hygiene. Place in `public/`.

### 8. Audit Third-Party Scripts
If you add Google Analytics, Facebook Pixel, or any other third-party script in the future, ensure they are loaded with `strategy="lazyOnload"` via `next/script` and reflected in your CSP.

### 9. Clean Up Duplicate Config Files
The project has duplicate configuration files — remove the extras to avoid confusion:
- `postcss.config.js` and `postcss.config.mjs` — keep only one
- `tailwind.config.js` and `tailwind.config.ts` — keep only one

### 10. Set Up Dependency Monitoring
Since this sat untouched for 2 years, set up automated alerts going forward:
- Enable **GitHub Dependabot** (free, adds PRs for outdated deps automatically)
- Or use `npm audit` in CI/CD to block deploys with critical vulnerabilities

---

## Summary Checklist

- [ ] `npm install next@latest` — fix critical CVE
- [ ] Add security headers to `next.config.mjs`
- [ ] Implement actual contact form submission (server-side, with validation)
- [ ] `npm audit fix` — fix auto-fixable vulnerabilities
- [ ] Broaden `.env` entries in `.gitignore`
- [ ] Enable Dependabot on GitHub repo
- [ ] Remove duplicate config files (`postcss.config.mjs`, `tailwind.config.ts` or `.js`)
