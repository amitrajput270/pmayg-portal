# Copilot instructions for pmayg-portal

Purpose: quick, repository-specific guidance for Copilot sessions so suggestions and automated edits align with project structure, commands, and conventions.

---

## Project layout (high level)
- Monorepo with two top-level workspaces:
  - client/ — React (Vite) single-page app. Entry: src/main.jsx. Routes in src/App.jsx. API calls centralized in src/services.
  - server/ — Express API. Entry: server.js. Routes live in server/routes, business logic in server/controllers; DB access via server/config/db.js.

## Build, run & lint commands
- Client (frontend)
  - Install: cd client && npm install
  - Dev (hot-reload): cd client && npm run dev
  - Build (production): cd client && npm run build
  - Lint: cd client && npm run lint
  - Preview build: cd client && npm run preview
  - Tests: none present in the client folder.

- Server (backend)
  - Install: cd server && npm install
  - Dev (with auto-reload): cd server && npm run dev  # uses nodemon
  - Start (production): cd server && npm run start
  - Tests: none present in the server folder (package.json has a placeholder test script)

- Running both during development: open two terminals — run client dev in one and server dev in the other.

- Note: client/src/services/authService.js sets axios baseURL to `http://localhost:3001/api/v1`. The Express server defaults to PORT=5000 (server.js). Adjust the client baseURL or server PORT via environment variables to match your local setup.

## Environment variables (server)
- server reads environment variables from a .env file via dotenv. Common keys used:
  - PORT (server HTTP port)
  - CLIENT_URL (used for CORS origin)
  - DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT (Postgres connection)

## API & DB conventions
- API base path: /api/v1 (see server.js)
- Database access: server/config/db.js exports `query(text, params)` — use parameterized queries ($1, $2, ...) through this helper.
- Controllers return JSON using server/helper/responseHelper.js. Standard response shape used across the codebase:
  - { status: boolean, message: string, errors: object|null, data: object }
- Validation: express-validator is used for request validation. On failure, controllers pass errors to responseHelper.validationError to format the response.
- Sanitation: use server/utils/sanitize.js (wraps sanitize-html) to clean user inputs before DB queries.

## Frontend conventions
- Path aliases (configured in client/vite.config.js and client/jsconfig.json):
  - @ → src
  - @assets → src/assets
  - @components → src/components
  - @pages → src/pages
  - @services → src/services
- Authentication: successful login stores the user object in localStorage under the key `user` (see src/pages/LoginPage.jsx).
- API calls: centralized under client/src/services/*.js; update baseURL there for local/production differences.

## Code patterns & conventions to preserve in edits
- Keep SQL queries parameterized; never interpolate user input into SQL strings.
- Use responseHelper.success/error/validationError to keep API responses consistent.
- Use express-validator middleware arrays (server/validations/*) for route-level validation and call validationResult in controllers.
- Sanitize any user-provided values before passing to queries (sanitizeInput from utils/sanitize.js).
- Frontend: prefer using services/* for API interaction; components should read/write to localStorage only for small session data (login user).

## What to look for when modifying behavior
- If changing an API route, update both server/routes and server/controllers and confirm client service points (client/src/services) match the route path.
- If changing response shapes, update responseHelper so every controller remains consistent.
- If changing ports or CORS origin, update server .env and client service baseURL accordingly.

---

If this file should include additional focused instructions (e.g., monorepo scripts, test harness, or CI steps), say which area to cover and Copilot will append them.
