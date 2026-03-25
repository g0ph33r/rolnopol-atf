# Rolnopol – Test Plan

**App:** Rolnopol | **URL:** http://localhost:3000 | **Docs:** [docs.html](http://localhost:3000/docs.html)

---

## 0. Page Availability

- [x] Page title contains "Rolnopol" `@smoke`
- [x] Login page is visible and loaded `@smoke`
- [x] Register page is visible and loaded `@smoke`
- [x] Documentation page is visible and loaded `@smoke`
- [x] Swagger / API Explorer page is visible and loaded `@smoke`

## 1. Authentication

- Register with valid data → logged in, redirected to `/profile.html` `@auth` `@register` `@smoke`
- Register with duplicate email → error shown `@auth` `@register` `@negative`
- Login with valid credentials → cookies set (`rolnopolToken`, `rolnopolLoginTime`) `@auth` `@login` `@smoke`
- Login with invalid credentials → error shown `@auth` `@login` `@negative`
- Logout → cookies cleared, session ended `@auth` `@logout` `@smoke`

## 2. Farm Management

- Add / edit / delete a field `@farm` `@fields` `@smoke`
- Add animal and assign to a field `@farm` `@animals`
- Add staff and assign to a field `@farm` `@staff`
- Deleting an assigned field/animal is blocked `@farm` `@negative`

## 3. Marketplace

- Browse active offers `@marketplace` `@smoke`
- Create offer for unassigned asset → status `active` `@marketplace` `@offers`
- Create offer for assigned asset → status `unavailable` `@marketplace` `@offers` `@negative`
- Buy offer with sufficient funds → ownership and balances updated, offer `sold` `@marketplace` `@purchase` `@smoke`
- Buy offer with insufficient funds → blocked with "Insufficient funds" error `@marketplace` `@purchase` `@negative`
- Cancel own offer → status `cancelled` `@marketplace` `@offers`

## 4. Financials

- View balance and transaction history `@financials` `@smoke`
- Balance updates correctly after a sale/purchase `@financials`
- Transfer funds between users `@financials` `@transfer`
- Overdraft attempt is blocked `@financials` `@transfer` `@negative`

## 5. Access Control

- Farmer cannot access admin pages (403 / redirect) `@rbac` `@negative`
- Farmer cannot edit another user's resources `@rbac` `@negative`

## 6. End-to-End Scenarios

- **E2E-1 – Setup farm:** Register → login → add field, animals, staff → confirm farm overview `@e2e` `@smoke`
- **E2E-2 – Marketplace sale:** User A creates offer → User B buys it → verify ownership and balance transfer `@e2e` `@marketplace`
- **E2E-3 – Insufficient funds:** User attempts purchase beyond balance → blocked with error `@e2e` `@negative`
