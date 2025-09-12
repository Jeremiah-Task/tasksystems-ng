from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()

    # Desktop viewport
    page = context.new_page()
    page.set_viewport_size({'width': 1280, 'height': 720})
    page.goto("http://localhost:3000")
    page.wait_for_timeout(5000) # Wait for animations
    page.screenshot(path="jules-scratch/verification/desktop_home.png")
    page.locator("#team").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/desktop_team.png")

    # Mobile viewport
    page.set_viewport_size({'width': 375, 'height': 667})
    page.goto("http://localhost:3000")
    page.wait_for_timeout(5000)
    page.screenshot(path="jules-scratch/verification/mobile_home.png")

    # Test hamburger menu
    page.locator('.hamburger').click()
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification/mobile_menu_open.png")

    # Test solutions accordion
    page.locator("#solutions").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.locator('.solution-item').nth(1).click()
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification/mobile_solutions_accordion.png")

    # Test team section
    page.locator("#team").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/mobile_team.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
