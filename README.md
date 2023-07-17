This repository contains a  automation test framework written with Javacript and Playwright and implements Page Object Model Pattern.

If you want to run test locally, please follow these steps:

1. Clone this repository.
2. Make sure you have node.js installed. If you don't, please visit official website for instructions
3. Run  'npm install' and 'npx playwright install' to install the modules
4. You can run the tests with npx playwright test "ui.spec.js" - it will run test in 3 browsers (chromium, firefox, webkit) in parallel. And you can run with npx playwright test "api.spec.js" to run the test related to the API section
