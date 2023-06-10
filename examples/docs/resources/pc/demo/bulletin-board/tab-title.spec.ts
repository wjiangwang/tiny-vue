import { test, expect } from '@playwright/test'
import exp from 'constants'

test('BulletinBoard 选项卡标题(', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/bulletin-board/tab-title')

  const preview = page.locator('#preview')
  const tabTitle = preview.locator('.tiny-tabs__item')

  await expect(tabTitle).toHaveCount(3)
  for (let i = 0; i < 3; i++) {
    await expect(tabTitle.nth(i)).toBeVisible()
  }
})
