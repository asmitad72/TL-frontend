### Project name: TL-frontend

---
### Install dependencies

Install project packages:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Faker.js is used to generate random test data:

```bash
npm install @faker-js/faker
```

---

### Run tests

Run all tests:

```bash
npx playwright test
```

Run with visible browser:

```bash
npx playwright test --headed
```

---

### Environment variables

This project uses an environment variable:

APP_URL → base application URL

The test reads it using:

```ts
await page.goto(process.env.APP_URL!);
```

The value is stored securely in **GitHub Actions Secrets**, not in a `.env` file.

GitHub configuration:

```
Repository → Settings → Secrets → Actions
```

Create a secret:

```
Name: APP_URL
Value: https://your-app-url.com
```

In the CI workflow (`playwright.yml`):

```yml
env:
  APP_URL: ${{ secrets.APP_URL }}
```

This allows tests to run in CI without exposing the URL in code.
