# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot
Mobile version
![Mobile Version](https://bit.ly/48H2eeg)

Desktop version
![Desktop Version](https://bit.ly/3NXu91F)

### Links

- Solution URL: [click here](https://www.frontendmentor.io/solutions/pricing-component-with-toggle-VO6SUhPXgz)
- Live Site URL: [click here](https://odagora.github.io/pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

1. Toggle button creation:
    ```html
    <label class="toggle-button">
      <input type="checkbox">
      <span class="swipe"></span>
    </label>
    ```
    ```css
    .toggle-button {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 32px;

      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      & input:checked + .swipe::before {
        transform: translateX(28px);
      }

      & .swipe {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 30px;
        background-color: var(--primary-gradient-color);
        cursor: pointer;

        &::before {
          position: absolute;
          display: block;
          content: '';
          height: 24px;
          width: 24px;
          background-color: var(--neutral-text-color-01);
          border-radius: 50%;
          top: 4px;
          left: 4px;
          transition: transform 0.5s;
        }
      }
    }
    ```
2. Use of CSS nesting + `:has()` selector to check for input `check` state and create a toggle button without JavaScript:
    ```css
    .pricing-container {
      min-width: 375px;

      &:has(.toggle-button input:checked) {
        /* Hide annual prices */
        & .card__price--annually {
          display: none;
        }
        /* Show monthly prices */
        & .card__price--monthly {
          display: flex;
        }
      }
    }
    ``````
3. Multiple images in background CSS property:
    ```css
    body {
      background-image: url('../images/bg-bottom.svg'), url('../images/bg-top.svg');
      background-size: auto, auto;
      background-position: left 0 bottom 0, right 0px top 0px;
    }
    ``````
4. Wildcard CSS and JS selectors
    ```css
      /* Class ending by a string */
      [class*="monthly"] {
        display: none;
      }
    ```
    ```js
      // Classes ending by a string
      const prices = document.querySelectorAll('[class$="annually"], [class$="monthly"]');
    ``````
5. Use of REGEX to test a class value in JavaScript:
    ```js
      // Function to check if an element's class list contains a specified keyword
      function classHasKeyword(element, keyword) {
        return new RegExp(keyword).test(element.classList.value);
      }
    ```
6. Use of `toggle` JavaScript method with force assertion as second argument:
    ```js
      prices.forEach(price => {
        const isMonthly = classHasKeyword(price, 'monthly');
        // Toggle 'hidden' class based on whether the price is monthly and checkbox is checked
        price.classList.toggle('hidden', isMonthly !== showMonthly);
      });
    ```

### Continued development

- Use of new CSS features like container queries
- Use of CSS Grid in complex layouts
- Use of transformations and animations with CSS
- Implementation of UI testing
- Use of accessibility principles
- Cross-browser support
- Use of web components for reusability

### Useful resources

- [MDN CSS :has](https://developer.mozilla.org/es/docs/Web/CSS/:has) - This helped me for understanding the concept of the pseudo-class `:has()` and for leveraging the power of css avoiding the use of JavaScript in simple DOM rendering.


## Author

- Website - [Daniel González](https://odagora.com)
- Frontend Mentor - [@odagora](https://www.frontendmentor.io/profile/odagora)
- Twitter - [@odagora](https://www.twitter.com/odagora)


## Acknowledgments

- MDN documentation
- ChatGPT for code refactoring
