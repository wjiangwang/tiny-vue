import { test, expect } from '@playwright/test';

test('是否开启多选模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/show-checkbox')

  const checkbox1 = page.getByRole('treeitem', { name: '三级 1-1-2' }).locator('.tiny-checkbox')
  const checkbox2 = page.getByRole('treeitem', { name: '二级 3-2' }).locator('.tiny-checkbox')
  const checkbox3 = page.getByRole('treeitem', { name: '三级 1-1-1' }).locator('.tiny-checkbox')
  const checkbox4 = page.getByRole('treeitem', { name: '三级 3-3-1' }).locator('.tiny-checkbox')
  const checkedClass = /is-checked/

  await expect(checkbox1).toBeVisible()
  await checkbox1.click()
  await expect(checkbox1).toHaveClass(checkedClass)
  await checkbox1.click()
  await expect(checkbox1).not.toHaveClass(checkedClass)

  await expect(checkbox2).not.toHaveClass(checkedClass)
  await page.getByRole('button', { name: '通过 data 设置节点的勾选状态' }).click()
  await expect(checkbox2).toHaveClass(checkedClass)

  await expect(checkbox3).not.toHaveClass(checkedClass)
  await page.getByRole('button', { name: '通过 key 设置节点的当前选中状态' }).click();
  await expect(checkbox3).toHaveClass(checkedClass)

  await expect(checkbox1).not.toHaveClass(checkedClass)
  await page.getByRole('button', { name: '通过 node 设置节点的当前选中状态' }).click();
  await expect(checkbox1).toHaveClass(checkedClass)

  await expect(checkbox4).not.toBeVisible()
  await page.getByRole('button', { name: '通过 keys 设置节点子元素' }).click();
  await expect(checkbox4).toBeVisible()
});