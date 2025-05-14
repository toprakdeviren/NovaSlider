# NovaSlider - Accessible & Interactive Product Carousel

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/toprakdeviren/NovaSlider?style=social)](https://github.com/toprakdeviren/NovaSlider/stargazers)

NovaSlider is a modern, touch-friendly, and accessible product card carousel component. Built with vanilla JavaScript and CSS, it's perfect for showcasing products or content with smooth animations, rich features, and a strong focus on user experience and accessibility.

**Live Demo:** [https://toprakdeviren.github.io/NovaSlider/](https://toprakdeviren.github.io/NovaSlider/)
![NovaSlider Preview](novaslider-preview.png)

## ✨ Features

*   **Vanilla JavaScript:** No external libraries or frameworks needed. Lightweight and fast.
*   **CSS Powered Animations:** Smooth transitions and effects using modern CSS.
*   **Responsive Design:** Adapts seamlessly to various screen sizes.
*   **Touch & Swipe Friendly:** Intuitive navigation on mobile devices.
*   **Keyboard Accessible:** Fully navigable using a keyboard (Arrow keys, Home, End, Tab).
*   **ARIA Compliant:** Built with accessibility best practices in mind (roles, states, properties).
*   **Lazy Loading for Images:** Improves initial page load performance.
*   **Customizable Data:** Easily adaptable product data structure.
*   **Interactive Elements:** Clickable cards, action buttons within cards.
*   **Visual Feedback:** Loading state, progress bar, pagination dots, keyboard hints.
*   **Notifications:** Simple notification system for user actions.
*   **Predefined Icons:** Comes with a set of SVG icons for common actions.
*   **Clean & Well-commented Code:** (Though the user requested no comments in the final JS/CSS, the original structure was clear).

## 🛠️ Tech Stack

*   HTML5
*   CSS3 (with CSS Custom Properties for theming)
*   Vanilla JavaScript (ES6+)

## 🚀 Getting Started

1.  **Clone the repository (or download the files):**
    ```bash
    git clone https://github.com/toprakdeviren/NovaSlider.git
    cd NovaSlider
    ```

2.  **Include the CSS and JavaScript files in your HTML:**
    ```html
    <head>
        <link rel="stylesheet" href="card.css">
    </head>
    <body>
        <script src="card.js" defer></script>
    </body>
    ```

3.  **Structure your HTML:**
    Follow the HTML structure provided in `index.html`. The main container should have the ID `productCarousel` (or an ID of your choice, which you'd then update in `card.js`).

4.  **Customize Product Data (Optional):**
    The product data is defined in the `PRODUCTS_DATA` array within `card.js`. You can modify this array to fit your own products or content. Each product object typically includes:
    *   `id`: Unique identifier
    *   `imageSrc`: URL for the product image
    *   `name`: Product name
    *   `rating`: Numerical rating (e.g., 4.5)
    *   `reviews`: Number of reviews
    *   `sku`: Stock Keeping Unit (optional)
    *   `price`: Price string
    *   `category`: An object with `name`, `class` (for CSS styling), and `iconSvg`
    *   `featured`: Boolean, true if the product is featured
    *   `actionButtons`: Array of objects for buttons on the image (`label` (SVG), `aria` (aria-label))

## 🔧 Configuration

You can adjust some behavior through the `CONFIG` object at the top of `card.js`:
*   `animationDuration`: Duration of slide animations.
*   `swipeThreshold`: Minimum pixel distance for a swipe to register.
*   `touchMovementScaleFactor`: How much the card moves relative to touch movement.
*   `initialLoadDelay`: Simulated delay for loading (can be removed for production).
*   `notificationTimeout`: How long notifications stay visible.
*   `debounceResizeTime`: Debounce time for window resize events.

## 🎨 Styling

The component is styled using `card.css`. It heavily utilizes CSS Custom Properties (variables) defined in the `:root` selector, making it easy to theme:
*   Colors (surface, text, accent, categories, etc.)
*   Shadows
*   Transitions and Animations (durations, timing functions)
*   Typography (font family, sizes)
*   Spacing and Radii

Feel free to modify these variables to match your project's design system.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/toprakdeviren/NovaSlider/issues). <!-- Repoyu oluşturunca kullanıcı adını ve repo adını güncelle -->

1.  Fork the Project
2.  Make your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

Developed with ❤️ by [Uğur Toprakdeviren](https://github.com/toprakdeviren).
