import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    try:
        async with async_playwright() as p:
            print("Launching browser...")
            browser = await p.chromium.launch()
            page = await browser.new_page()

            print("Navigating to http://localhost:3001/demo ...")
            # Navigate to the demo page
            await page.goto('http://localhost:3001/demo', timeout=120000)

            # Additional small wait to ensure JS is executed
            await page.wait_for_timeout(10000)

            os.makedirs("verification", exist_ok=True)
            screenshot_path = "verification/demo_page_final.png"

            print(f"Taking screenshot to {screenshot_path}...")
            # Take a full page screenshot
            await page.screenshot(path=screenshot_path, full_page=True)
            print("Screenshot taken successfully!")

            await browser.close()
    except Exception as e:
        print(f"Error during verification: {e}")

if __name__ == "__main__":
    asyncio.run(main())
