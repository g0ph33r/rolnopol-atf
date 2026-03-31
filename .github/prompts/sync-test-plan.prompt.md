---
name: sync-test-plan
description: Review TEST_PLAN.md for accuracy against implemented tests and update it accordingly
agent: agent
---

Review `TEST_PLAN.md` and verify that it matches the current implemented tests in the `tests/` directory.

For each test plan entry:
1. Check whether a corresponding test exists in the codebase.
2. If implemented, mark it `[x]` and ensure the description accurately reflects what the test actually asserts — including correct expected outcomes (e.g. redirect targets, visible elements, HTTP status).
3. If a test only **partially** fulfils a requirement, correct the description to match what is actually covered and leave unimplemented aspects as separate unchecked entries.
4. If not yet implemented, leave it unchecked `[ ]` — do not remove entries.

Update `TEST_PLAN.md` with any corrections found. Do not change test code.
