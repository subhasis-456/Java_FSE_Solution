# Exercise 19.2

## Customizing Bootstrap with Sass

1. Create a `_custom-variables.scss` file in your `scss` folder.
2. Override Bootstrap variables before importing Bootstrap. For example:
   ```scss
   // _custom-variables.scss
   $primary: #ff5722;
   $border-radius: 2rem;
   ```
3. In your `main.scss`:
   ```scss
   // main.scss
   @import "_custom-variables";
   @import "../node_modules/bootstrap/scss/bootstrap";
   ```
4. Recompile your SCSS:
   ```bash
   npx sass scss/main.scss css/main.css
   ```
5. Reload your HTML page to see the changes. 