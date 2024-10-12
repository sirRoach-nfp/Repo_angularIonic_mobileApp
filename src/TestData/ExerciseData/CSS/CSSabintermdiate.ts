export const CSSabintermediate = [
    {
      "exercise": 1,
      "title": "CSS Grid with Named Areas",
      "description": "Create a grid layout using named grid areas.",
      "requirements": [
        "Define grid areas in CSS."
      ],
      "hint": ".container { display: grid; grid-template-areas: 'header header' 'sidebar content' 'footer footer'; }"
    },
    {
      "exercise": 2,
      "title": "Advanced Flexbox Alignment",
      "description": "Create a layout with items aligned at different positions using flexbox.",
      "requirements": [
        "Use align-items and justify-content."
      ],
      "hint": ".container { display: flex; align-items: flex-end; justify-content: space-between; }"
    },
    {
      "exercise": 3,
      "title": "CSS Custom Properties for Theming",
      "description": "Create a dark and light theme using CSS custom properties.",
      "requirements": [
        "Define themes using CSS variables and toggle between them."
      ],
      "hint": ":root { --bg-color: white; --text-color: black; }\n.dark-theme { --bg-color: black; --text-color: white; }\nbody { background-color: var(--bg-color); color: var(--text-color); }"
    },
    {
      "exercise": 4,
      "title": "Transitions on Multiple Properties",
      "description": "Create an element that transitions on multiple properties on hover.",
      "requirements": [
        "Use transition on background-color and transform."
      ],
      "hint": ".box { transition: background-color 0.5s, transform 0.5s; }\n.box:hover { background-color: blue; transform: scale(1.1); }"
    },
    {
      "exercise": 5,
      "title": "CSS Animations with Multiple Keyframes",
      "description": "Create an animation that moves an element in a circular path.",
      "requirements": [
        "Use keyframes for complex animations."
      ],
      "hint": "@keyframes move { 0% { transform: translate(0, 0); } 50% { transform: translate(100px, 100px); } 100% { transform: translate(0, 0); } }\n.element { animation: move 4s infinite; }"
    },
    {
      "exercise": 6,
      "title": "Responsive Typography with clamp()",
      "description": "Use the clamp() function to create responsive font sizes.",
      "requirements": [
        "Use min, preferred, and max values."
      ],
      "hint": "h1 { font-size: clamp(1rem, 5vw, 2rem); }"
    },
    {
      "exercise": 7,
      "title": "Clip-path for Custom Shapes",
      "description": "Create a custom-shaped element using clip-path.",
      "requirements": [
        "Use polygon() for the shape."
      ],
      "hint": ".shape { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }"
    },
    {
      "exercise": 8,
      "title": "Parallax Scrolling Effect",
      "description": "Create a parallax scrolling effect using background-attachment.",
      "requirements": [
        "Use background-attachment: fixed."
      ],
      "hint": ".parallax { background-image: url('image.jpg'); background-attachment: fixed; background-size: cover; height: 500px; }"
    },
    {
      "exercise": 9,
      "title": "Grid with Automatic Row Heights",
      "description": "Create a grid layout where rows have automatic heights based on content.",
      "requirements": [
        "Use grid-auto-rows."
      ],
      "hint": ".grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: minmax(100px, auto); }"
    },
    {
      "exercise": 10,
      "title": "CSS Variables in Media Queries",
      "description": "Use CSS variables to adjust layout properties in media queries.",
      "requirements": [
        "Change properties using CSS custom properties."
      ],
      "hint": ":root { --spacing: 20px; }\n@media (max-width: 600px) { :root { --spacing: 10px; } .container { padding: var(--spacing); } }"
    },
    {
      "exercise": 11,
      "title": "CSS Grid with Responsive Columns",
      "description": "Create a responsive grid layout that changes the number of columns based on screen size.",
      "requirements": [
        "Use media queries with grid-template-columns."
      ],
      "hint": ".grid { display: grid; grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
    },
    {
      "exercise": 12,
      "title": "Mix Blend Mode",
      "description": "Use mix-blend-mode to create a blend effect between two overlapping elements.",
      "requirements": [
        "Use mix-blend-mode property."
      ],
      "hint": ".background { background: red; }\n.overlay { background: blue; mix-blend-mode: screen; }"
    },
    {
      "exercise": 13,
      "title": "CSS Filters for Effects",
      "description": "Apply a blur effect to an image using CSS filters.",
      "requirements": [
        "Use filter: blur()."
      ],
      "hint": "img { filter: blur(5px); }"
    },
    {
      "exercise": 14,
      "title": "CSS Variables for Dynamic Styling",
      "description": "Change element styles dynamically using CSS variables.",
      "requirements": [
        "Set CSS variables using JavaScript."
      ],
      "hint": "document.documentElement.style.setProperty('--main-color', 'blue');"
    },
    {
      "exercise": 15,
      "title": "CSS Grid with Fractional Units",
      "description": "Create a grid layout using fractional units (fr) for responsive design.",
      "requirements": [
        "Use fr units in grid-template-columns."
      ],
      "hint": ".grid { display: grid; grid-template-columns: 1fr 2fr 1fr; }"
    },
    {
      "exercise": 16,
      "title": "Animation Delay and Iteration Count",
      "description": "Create an animation that delays its start and runs for a specific number of iterations.",
      "requirements": [
        "Use animation-delay and animation-iteration-count."
      ],
      "hint": ".element { animation: bounce 2s infinite; animation-delay: 1s; }"
    },
    {
      "exercise": 17,
      "title": "Sticky Elements with Positioning",
      "description": "Create a sticky header that stays at the top while scrolling.",
      "requirements": [
        "Use position: sticky."
      ],
      "hint": "header { position: sticky; top: 0; }"
    },
    {
      "exercise": 18,
      "title": "Using content in Pseudo-elements",
      "description": "Add content before and after a list item using pseudo-elements.",
      "requirements": [
        "Use ::before and ::after."
      ],
      "hint": "li::before { content: '•'; } li::after { content: '(item)'; }"
    },
    {
      "exercise": 19,
      "title": "Advanced Media Queries for Device Orientation",
      "description": "Use media queries to apply styles based on device orientation.",
      "requirements": [
        "Use @media with orientation."
      ],
      "hint": "@media (orientation: landscape) { body { background-color: lightblue; } }"
    },
    {
      "exercise": 20,
      "title": "Custom Pagination Styles",
      "description": "Style a pagination component with hover effects and active states.",
      "requirements": [
        "Use :hover and .active selectors."
      ],
      "hint": ".pagination a { padding: 10px; }\n.pagination a:hover { background-color: gray; }\n.pagination .active { font-weight: bold; }"
    }
  ]
  