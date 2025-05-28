# Exercise 19.1

## Setting up Bootstrap 5 with Sass using npm

1. Initialize your project:
   ```bash
   npm init -y
   ```
2. Install Bootstrap and Sass:
   ```bash
   npm install bootstrap sass
   ```
3. Create a `scss` folder and add a custom `main.scss` file:
   ```scss
   // main.scss
   @import "../node_modules/bootstrap/scss/bootstrap";
   ```
4. Compile your SCSS to CSS:
   ```bash
   npx sass scss/main.scss css/main.css
   ```
5. Link the generated CSS in your HTML file:
   ```html
   <link rel="stylesheet" href="css/main.css">
   ``` 