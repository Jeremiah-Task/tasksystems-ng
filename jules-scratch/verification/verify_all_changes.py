from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()

    # Desktop viewport
    page = context.new_page()
    page.set_viewport_size({'width': 1280, 'height': 720})
    page.goto("http://localhost:3000")
    page.wait_for_timeout(5000) # Wait for 5 seconds
    page.screenshot(path="jules-scratch/verification/desktop_home.png")
    page.locator("#about").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/desktop_about.png")
    page.locator("#solutions").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/desktop_solutions.png")

    # Mobile viewport
    page.set_viewport_size({'width': 375, 'height': 667})
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")
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

    # Test floating back to top button
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/mobile_footer_with_button.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
