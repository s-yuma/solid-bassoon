import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

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

// // pages/api/user.js
// export default (req, res) => {
//   if (req.method === 'POST') {
//     const requestData = req.body;

//     // リクエストの内容をそのままレスポンスとして返す
//     res.status(200).json(requestData);
//   } else {
//     res.status(405).end(); // POSTメソッド以外はエラー
//   }
// };


// // test.js
// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // テスト用のデータ
//   const requestData = {
//     id: 1,
//     name: 'aaa',
//     birth: '2022-12-12',
//     email: 'test@gmail.com',
//   };

//   // サーバーにPOSTリクエストを送信
//   await page.goto('http://localhost:3000/api/user', { method: 'POST', postData: JSON.stringify(requestData) });

//   // サーバーからのレスポンスを取得
//   const response = await page.evaluate(() => {
//     return fetch('http://localhost:3000/api/user').then((res) => res.json());
//   });

//   // レスポンスをコンソールに表示
//   console.log(response);

//   await browser.close();
// })();