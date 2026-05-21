const { test, expect } = require('@playwright/test');

test('sanity', async () => {
  expect(1 + 1).toBe(2);
});
