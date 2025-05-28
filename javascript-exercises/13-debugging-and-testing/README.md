# Exercise 13. Debugging and Testing

**Scenario:** Registration is failing silently. You need to debug.

**Objective:** Use browser tools to inspect and fix issues.

## Tasks

- **Use Chrome Dev Tools Console and Network tab:**
  1. Open your registration page in Chrome.
  2. Press `F12` or right-click and choose "Inspect" to open DevTools.
  3. Use the "Console" tab to view logs and errors from your script.
  4. Use the "Network" tab to check the fetch request and response payload.

- **Add breakpoints and inspect variables:**
  1. Go to the "Sources" tab in DevTools.
  2. Click the line number in your JS file to add a breakpoint.
  3. Reload the page and submit the form to pause and inspect variables.

- **Log form submission steps and check fetch request payload:**
  1. Add `console.log()` statements in your JS to trace form submission steps.
  2. Check the Network tab to ensure the correct data is sent and received.

---

You can also use VS Code's built-in debugger for advanced JS debugging in your project. 