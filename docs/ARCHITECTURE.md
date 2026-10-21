# Sharkny Extensions

A full-stack marketplace starter for building, managing, and selling WordPress extension ideas and plugin boilerplates using modern tooling.

## Project goals
- Build a marketplace UI for WordPress extensions
- Create a Laravel API to manage products, users, extension metadata, and admin workflows
- Use Next.js + Tailwind for the public-facing app and dashboard
- Provide starter PHP plugin folders for extension development
- Keep each project area in separate folders for learning and scaling

## Repo structure

- `apps/web` — Next.js storefront and admin dashboard
- `apps/api` — Laravel API backend
- `extensions/` — starter WordPress extension plugin folders
- `postman/` — request samples for API testing
- `docs/` — architecture and learning notes

## Planned extension ideas
1. SEO Optimization Pack
2. WooCommerce Conversion Booster
3. Performance & Cache Manager
4. Security Hardening Suite
5. AI Content Assistant
6. Form Builder Pro
7. Booking & Reservations
8. Multilingual Content Pack
9. Analytics Dashboard
10. Social Share & Growth Toolkit

## Quick start

- Frontend: `cd apps/web && npm install && npm run dev`
- Backend: `cd apps/api && composer install && php artisan serve`

## Notes
This is a starter architecture only. The repositories are intentionally separated to make the stack easier to learn and grow.
