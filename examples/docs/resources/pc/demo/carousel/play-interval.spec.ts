import { test, expect } from '@playwright/test';

test('轮播间隔时间', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull());
    await page.goto('http://localhost:7130/pc/carousel/play-interval');
    const preview = page.locator('#preview');
    const carouselItems = preview.locator('div.tiny-carousel__item');
    // 等待1秒后幻灯片切换
    await page.waitForTimeout(1000);
    // 当前应该显示第二张幻灯片
    await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    // 等待1秒后幻灯片切换
    await page.waitForTimeout(1000);
    // 当前应该显示第三张幻灯片
    await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    // 等待1秒后幻灯片切换
    await page.waitForTimeout(1000);
    // 当前应该显示第四张幻灯片
    await expect(carouselItems.nth(3)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
})