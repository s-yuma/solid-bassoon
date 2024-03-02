import { test, expect } from '@playwright/test';

test.describe("データ取得テスト", () => {


test('正常', async ({ page }) => {

  await page.route('http://localhost:3000/api/user',async (route) => {
    const method = route.request().method()
    if ('GET' === method) {
    const json = [{
        name: 'bbb',
        birth: '2023-11-30',
        email: 'aaa@gmail.com'
    }]
    await route.fulfill({json})
}});

await page.goto('http://localhost:3000/form');
await page.getByLabel('名前:').fill('aaa');
await page.getByLabel('誕生日:').fill('2023-11-30');
await page.getByLabel('メール:').click();
await page.getByLabel('メール:').fill('aaa@gmail.com');
await page.getByRole('button', { name: '送信' }).click();

await expect(page.getByTestId('name')).toHaveText("aaa")
await expect(page.getByTestId('birth')).toHaveText("2023-11-30")
await expect(page.getByTestId('email')).toHaveText("aaa@gmail.com")

await page.getByRole('link', { name: '登録' }).click();
await page.waitForURL("http://localhost:3000/comp");
await expect(page.getByText('登録完了')).toContainText("登録完了");

});
  test('非正常', async ({ page }) => {
    await page.route('**/*', async (route) => {
      if (route.request().url() === 'http://localhost:3000/specific-url') {
        await route.fulfill({
          status: 200,
          body: 'Mock response',
        });
      } else {
        route.continue();
      }
    });
  await page.goto('http://localhost:3000/form');
  await page.getByLabel('名前:').fill('aaa');
  await page.getByLabel('誕生日:').fill('2023-11-30');
  await page.getByLabel('メール:').click();
  await page.getByLabel('メール:').fill('aaa@gmail.com');
  await page.getByRole('button', { name: '送信' }).click();

});

})