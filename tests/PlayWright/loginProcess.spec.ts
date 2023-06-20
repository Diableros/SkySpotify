import { test, expect } from '@playwright/test'
import { Route } from '@/providers/routes'

const BASE_URL = 'http://localhost:3000'

test('Test login', async ({ page }) => {
  await page.goto(`${BASE_URL}${Route.Login}`)
  await page.getByPlaceholder('e-mail').click()
  await page.getByPlaceholder('e-mail').fill('user@mail.rururu')
  await page.getByPlaceholder('e-mail').press('Tab')
  await page.getByPlaceholder('Пароль').fill('asdfasdf321')
  await page.getByRole('button', { name: 'Войти' }).click()

  await expect(page).toHaveTitle('SkySpotify')
  await page.screenshot({
    path: 'tests/PlayWright/screenShots/loginpageBeforeLogin.jpg',
  })
  await page.waitForTimeout(3000)
  await page.screenshot({
    path: 'tests/PlayWright/screenShots/loginpageAfterLogin.jpg',
  })
})
