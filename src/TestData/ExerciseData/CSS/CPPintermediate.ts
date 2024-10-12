export const CSSintermediate = [
    {
      "exercise": 1,
      "title": "Flexbox Layout",
      "description": "Create a flex container that displays three items in a row, evenly spaced.",
      "requirements": [
        "Use display: flex; and justify-content: space-between."
      ],
      "hint": ".container { display: flex; justify-content: space-between; }"
    },
    {
      "exercise": 2,
      "title": "CSS Grid Layout",
      "description": "Create a 3-column grid layout with equal column widths.",
      "requirements": [
        "Use display: grid; and grid-template-columns."
      ],
      "hint": ".grid { display: grid; grid-template-columns: repeat(3, 1fr); }"
    },
    {
      "exercise": 3,
      "title": "CSS Variables",
      "description": "Define and use CSS variables for color and font size.",
      "requirements": [
        "Use :root to define variables."
      ],
      "hint": ":root { --main-color: #3498db; --font-size: 16px; }\nbody { color: var(--main-color); font-size: var(--font-size); }"
    },
    {
      "exercise": 4,
      "title": "Transitions",
      "description": "Create a smooth transition effect for button background color on hover.",
      "requirements": [
        "Use transition property."
      ],
      "hint": "button { transition: background-color 0.3s; }\nbutton:hover { background-color: lightcoral; }"
    },
    {
      "exercise": 5,
      "title": "Media Queries",
      "description": "Change the font size of the body to 18px on screens smaller than 600px.",
      "requirements": [
        "Use media queries."
      ],
      "hint": "@media (max-width: 600px) { body { font-size: 18px; } }"
    },
    {
      "exercise": 6,
      "title": "Z-Index Management",
      "description": "Layer two overlapping elements using z-index.",
      "requirements": [
        "Use position and z-index properties."
      ],
      "hint": ".box1 { position: relative; z-index: 1; }\n.box2 { position: relative; z-index: 2; }"
    },
    {
      "exercise": 7,
      "title": "Pseudo-elements",
      "description": "Add a decorative element before each <h2> heading using ::before.",
      "requirements": [
        "Use content property."
      ],
      "hint": "h2::before { content: '★'; margin-right: 5px; }"
    },
    {
      "exercise": 8,
      "title": "CSS Filters",
      "description": "Apply a grayscale filter to all images.",
      "requirements": [
        "Use filter property."
      ],
      "hint": "img { filter: grayscale(100%); }"
    },
    {
      "exercise": 9,
      "title": "Custom Scrollbars",
      "description": "Style the scrollbar for webkit browsers.",
      "requirements": [
        "Use ::-webkit-scrollbar and related properties."
      ],
      "hint": "::-webkit-scrollbar { width: 10px; }\n::-webkit-scrollbar-thumb { background: darkgray; }"
    },
    {
      "exercise": 10,
      "title": "Keyframe Animations",
      "description": "Create a keyframe animation that moves an element from left to right.",
      "requirements": [
        "Use @keyframes and animation properties."
      ],
      "hint": "@keyframes slide { from { transform: translateX(0); } to { transform: translateX(100px); } }\n.element { animation: slide 2s; }"
    },
    {
      "exercise": 11,
      "title": "Responsive Images",
      "description": "Make images responsive using max-width.",
      "requirements": [
        "Use max-width property."
      ],
      "hint": "img { max-width: 100%; height: auto; }"
    },
    {
      "exercise": 12,
      "title": "Background Gradient",
      "description": "Create a linear gradient background.",
      "requirements": [
        "Use background-image property."
      ],
      "hint": "body { background-image: linear-gradient(to right, #ff7e5f, #feb47b); }"
    },
    {
      "exercise": 13,
      "title": "Sticky Footer",
      "description": "Create a footer that sticks to the bottom of the viewport.",
      "requirements": [
        "Use flexbox and min-height."
      ],
      "hint": "html, body { height: 100%; }\n.container { display: flex; flex-direction: column; min-height: 100vh; }\n.footer { margin-top: auto; }"
    },
    {
      "exercise": 14,
      "title": "Box Model",
      "description": "Demonstrate the box model by adding padding, margin, and border.",
      "requirements": [
        "Use box-sizing and related properties."
      ],
      "hint": "box { box-sizing: border-box; margin: 10px; padding: 20px; border: 2px solid black; }"
    },
    {
      "exercise": 15,
      "title": "Text Shadow",
      "description": "Add a text shadow effect to all <h1> headings.",
      "requirements": [
        "Use text-shadow property."
      ],
      "hint": "h1 { text-shadow: 2px 2px 5px gray; }"
    },
    {
      "exercise": 16,
      "title": "Circular Image",
      "description": "Create a circular image using border-radius.",
      "requirements": [
        "Use border-radius property."
      ],
      "hint": "img { border-radius: 50%; }"
    },
    {
      "exercise": 17,
      "title": "Positioning Elements",
      "description": "Use absolute positioning to place an element 20px from the top right.",
      "requirements": [
        "Use position and top/right properties."
      ],
      "hint": ".element { position: absolute; top: 20px; right: 20px; }"
    },
    {
      "exercise": 18,
      "title": "Combine Selectors",
      "description": "Style all links within a specific class.",
      "requirements": [
        "Use class and element selectors."
      ],
      "hint": ".special a { color: red; }"
    },
    {
      "exercise": 19,
      "title": "Shadow on Hover",
      "description": "Add a shadow effect to buttons on hover.",
      "requirements": [
        "Use box-shadow property on hover."
      ],
      "hint": "button:hover { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }"
    },
    {
      "exercise": 20,
      "title": "CSS Custom Properties in Media Queries",
      "description": "Use CSS variables within media queries to change styles.",
      "requirements": [
        "Define variables and use them in media queries."
      ],
      "hint": ":root { --font-size: 16px; }\n@media (max-width: 600px) { body { font-size: var(--font-size); } }"
    }
  ]
  