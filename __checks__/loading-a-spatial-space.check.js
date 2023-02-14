/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

const DEFAULT_URL_BASE = "https://staging.spatial.io"
const DEFAULT_STAGING_TEST_SPACE_PATH =
  "/s/Michael-Jurkas-Immersive-Hangout-632a639ababb6b0001b11b4d?share=6515398055532374563"
const URL = "https://browserleaks.com/webgl"

// You can use test.describe to declare a group of related test cases
test.describe('Spatial space', () => {
  // The callback in test.beforeEach will be executed before each test.
  test.beforeEach(async ({ page }) => {
    // Each test will be given a new page instance navigated to the this URL
    // For deployments Checkly will inject the deployment url as ENVIRONMENT_URL
    await page.goto(process.env.ENVIRONMENT_URL || URL || `${DEFAULT_URL_BASE}${DEFAULT_STAGING_TEST_SPACE_PATH}`)
  })
  // Other useful hooks: test.beforeAll, test.afterEach, test.afterAll

  test('has a dialog containing "Type your name here"', async ({ page }) => {
    expect(
      await page.waitForSelector('input[placeholder="Type your name here"]', {
        timeout: 50000,
      })
    ).toBeTruthy()
    //await expect(page).toHaveTitle(/Playwright/)
  })

  // test("has a 'get started' link linking to the intro page", async ({ page }) => {
  //   // Create a locator based on a text selector.
  //   const getStarted = page.getByText('Get Started')
  //   // Use the locator for runtime 2022.02:
  //   // const getStarted = page.locator('text=Get Started')

  //   // Expect an attribute "to be strictly equal" to the value.
  //   await expect(getStarted).toHaveAttribute('href', '/docs/intro')

  //   // Click the get started link.
  //   await getStarted.click()

  //   // Expects the URL to contain intro.
  //   await expect(page).toHaveURL(/.*intro/)
  // })

  // test.describe('has Open Graph tags', () => {
  //   const tags = ['description', 'title', 'url']

  //   // You can create tests from an array, by calling "test()" in a loop
  //   tags.forEach((tag) => {
  //     test(`has the Open Graph tag "${tag}"`, async ({ page }) => {
  //       await expect(page.locator(`meta[property="og:${tag}"]`)).toHaveCount(1)
  //     })
  //   })
  // })
})
