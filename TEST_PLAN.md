# Rolnopol – Test Plan

**App:** Rolnopol | **URL:** http://localhost:3000 | **Docs:** [docs.html](http://localhost:3000/docs.html)

---

## 1. Authentication
- Register with valid data → logged in, redirected to `/profile.html`
- Register with duplicate email → error shown
- Login with valid credentials → cookies set (`rolnopolToken`, `rolnopolLoginTime`)
- Login with invalid credentials → error shown
- Logout → cookies cleared, session ended

## 2. Farm Management
- Add / edit / delete a field
- Add animal and assign to a field
- Add staff and assign to a field
- Deleting an assigned field/animal is blocked

## 3. Marketplace
- Browse active offers
- Create offer for unassigned asset → status `active`
- Create offer for assigned asset → status `unavailable`
- Buy offer with sufficient funds → ownership and balances updated, offer `sold`
- Buy offer with insufficient funds → blocked with "Insufficient funds" error
- Cancel own offer → status `cancelled`

## 4. Financials
- View balance and transaction history
- Balance updates correctly after a sale/purchase
- Transfer funds between users
- Overdraft attempt is blocked

## 5. Access Control
- Farmer cannot access admin pages (403 / redirect)
- Farmer cannot edit another user's resources

## 6. End-to-End Scenarios
- **E2E-1 – Setup farm:** Register → login → add field, animals, staff → confirm farm overview
- **E2E-2 – Marketplace sale:** User A creates offer → User B buys it → verify ownership and balance transfer
- **E2E-3 – Insufficient funds:** User attempts purchase beyond balance → blocked with error
