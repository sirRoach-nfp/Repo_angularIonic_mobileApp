export const HTMLabintermediate = [
    {
      "exercise": 1,
      "title": "Create a Responsive Grid Layout with Flexbox",
      "description": "Design a responsive grid layout using Flexbox.",
      "requirements": [
        "Use the <div> tag and CSS Flexbox to create a 3-column grid that adjusts to screen size.",
        "On smaller screens, make the grid layout adjust to 1 column."
      ],
      "hint": "<div style='display: flex; flex-wrap: wrap;'>\n  <div style='flex: 1 1 33%;'>Column 1</div>\n  <div style='flex: 1 1 33%;'>Column 2</div>\n  <div style='flex: 1 1 33%;'>Column 3</div>\n</div>"
    },
    {
      "exercise": 2,
      "title": "Create a Responsive Grid Using CSS Grid",
      "description": "Build a grid layout using CSS Grid.",
      "requirements": [
        "Create a grid with 4 equal columns on larger screens.",
        "On smaller screens, adjust the grid to 2 columns."
      ],
      "hint": "<div style='display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;'>\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n  <div>Item 4</div>\n</div>\n<style>\n@media (max-width: 600px) {\n  div { grid-template-columns: repeat(2, 1fr); }\n}\n</style>"
    },
    {
      "exercise": 3,
      "title": "Build a Sticky Navigation Bar",
      "description": "Create a navigation bar that sticks to the top of the page when scrolling.",
      "requirements": [
        "Use the <nav> tag and CSS position: sticky to keep the navigation bar fixed at the top when scrolling."
      ],
      "hint": "<nav style='position: sticky; top: 0; background-color: #333; padding: 10px;'>\n  <a href='#'>Home</a>\n  <a href='#'>About</a>\n  <a href='#'>Contact</a>\n</nav>"
    },
    {
      "exercise": 4,
      "title": "Create a Form with Custom Validation",
      "description": "Add custom HTML5 form validation using the pattern attribute.",
      "requirements": [
        "Use the pattern attribute in input fields to add a custom validation for email and phone number formats."
      ],
      "hint": "<form>\n  <input type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' required placeholder='Enter email'><br>\n  <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required placeholder='123-456-7890'><br>\n  <input type='submit'>\n</form>"
    },
    {
      "exercise": 5,
      "title": "Create a Modal Popup",
      "description": "Build a modal popup window using HTML, CSS, and JavaScript.",
      "requirements": [
        "Use the <div> tag for the modal container, and style it to be hidden by default.",
        "Show the modal using JavaScript when a button is clicked."
      ],
      "hint": "<button onclick='document.getElementById(\"modal\").style.display=\"block\";'>Open Modal</button>\n<div id='modal' style='display: none; background-color: rgba(0, 0, 0, 0.8); position: fixed;'>\n  <div style='background-color: white;'>\n    <p>Modal Content</p>\n    <button onclick='document.getElementById(\"modal\").style.display=\"none\";'>Close</button>\n  </div>\n</div>"
    },
    {
      "exercise": 6,
      "title": "Create a Scroll-Spy Navigation",
      "description": "Design a scroll-spy navigation that highlights the current section as the user scrolls.",
      "requirements": [
        "Use the <nav> tag for the navigation menu and anchor links to different sections.",
        "Use JavaScript to highlight the current section as the user scrolls."
      ],
      "hint": "<nav>\n  <a href='#section1'>Section 1</a>\n  <a href='#section2'>Section 2</a>\n</nav>\n<section id='section1'>Section 1 Content</section>\n<section id='section2'>Section 2 Content</section>\n<script>\nwindow.addEventListener('scroll', function() {\n  // Add scroll-spy logic here\n});\n</script>"
    },
    {
      "exercise": 7,
      "title": "Create a Parallax Scrolling Effect",
      "description": "Implement a parallax scrolling effect using HTML and CSS.",
      "requirements": [
        "Use CSS background-attachment property to create the parallax effect."
      ],
      "hint": "<div style='background-image: url(\"image.jpg\"); background-attachment: fixed; height: 500px;'>\n  Parallax Content\n</div>"
    },
    {
      "exercise": 8,
      "title": "Create a Fullscreen Background Video",
      "description": "Add a fullscreen background video to your webpage.",
      "requirements": [
        "Use the <video> tag with the autoplay, loop, and muted attributes.",
        "Set the video to cover the entire background using CSS."
      ],
      "hint": "<video autoplay loop muted style='position: fixed; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;'>\n  <source src='video.mp4' type='video/mp4'>\n</video>"
    },
    {
      "exercise": 9,
      "title": "Create an Accessible Form",
      "description": "Build a form that is fully accessible using <label> and aria attributes.",
      "requirements": [
        "Use <label> tags for all input fields and include aria-label or aria-labelledby for accessibility."
      ],
      "hint": "<form>\n  <label for='name'>Name</label>\n  <input type='text' id='name' aria-label='Full Name' required><br>\n  <label for='email'>Email</label>\n  <input type='email' id='email' aria-labelledby='emailHelp' required>\n</form>"
    },
    {
      "exercise": 10,
      "title": "Lazy Load Images",
      "description": "Implement lazy loading for images to improve performance.",
      "requirements": [
        "Use the loading='lazy' attribute for images to delay loading until they are in view."
      ],
      "hint": "<img src='image1.jpg' loading='lazy' alt='Lazy Loaded Image'>"
    },
    {
      "exercise": 11,
      "title": "Create a Custom Checkbox and Radio Button",
      "description": "Design custom checkboxes and radio buttons using CSS.",
      "requirements": [
        "Hide the default input elements and style the custom version using <span> and CSS."
      ],
      "hint": "<label>\n  <input type='checkbox' style='display: none;'>\n  <span style='width: 20px; height: 20px; background-color: lightgray;'></span>\n</label>"
    },
    {
      "exercise": 12,
      "title": "Build a Multi-Step Form",
      "description": "Create a form that spans multiple steps using fieldsets.",
      "requirements": [
        "Use <fieldset> to group steps and JavaScript to navigate between them."
      ],
      "hint": "<form>\n  <fieldset>\n    <legend>Step 1</legend>\n    <input type='text' placeholder='Name'><br>\n    <button type='button' onclick='nextStep()'>Next</button>\n  </fieldset>\n  <fieldset style='display: none;'>\n    <legend>Step 2</legend>\n    <input type='email' placeholder='Email'>\n    <button type='button'>Submit</button>\n  </fieldset>\n</form>"
    },
    {
      "exercise": 13,
      "title": "Create a Content Accordion",
      "description": "Build an accordion that toggles sections open and closed.",
      "requirements": [
        "Use HTML <div> elements for the content sections and JavaScript to toggle visibility."
      ],
      "hint": "<div onclick='toggleContent()'>Section 1</div>\n<div id='content1' style='display: none;'>Content for Section 1</div>\n<script>\nfunction toggleContent() {\n  var content = document.getElementById('content1');\n  content.style.display = content.style.display === 'none' ? 'block' : 'none';\n}\n</script>"
    },
    {
      "exercise": 14,
      "title": "Create a Dark Mode Toggle",
      "description": "Add a dark mode toggle feature to your webpage using CSS and JavaScript.",
      "requirements": [
        "Use a button to switch between light and dark themes."
      ],
      "hint": "<button onclick='toggleDarkMode()'>Toggle Dark Mode</button>\n<script>\nfunction toggleDarkMode() {\n  document.body.classList.toggle('dark-mode');\n}\n</script>"
    },
    {
      "exercise": 15,
      "title": "Create a Sticky Footer",
      "description": "Design a footer that sticks to the bottom of the page.",
      "requirements": [
        "Use CSS flexbox and position techniques to keep the footer at the bottom of the viewport."
      ],
      "hint": "<footer style='position: sticky; bottom: 0; width: 100%;'>Sticky Footer</footer>"
    },
    {
      "exercise": 16,
      "title": "Build a Custom HTML Progress Bar",
      "description": "Create a custom progress bar using HTML <progress> or <div> elements.",
      "requirements": [
        "Style the progress bar using CSS to display current progress."
      ],
      "hint": "<progress value='70' max='100'></progress>\n<div style='width: 70%; background-color: green; height: 20px;'></div>"
    },
    {
      "exercise": 17,
      "title": "Create a Drop-Down Menu",
      "description": "Build a drop-down navigation menu using HTML and CSS.",
      "requirements": [
        "Use <ul> and <li> elements for the menu and CSS to show/hide the drop-down."
      ],
      "hint": "<nav>\n  <ul>\n    <li>Menu Item 1\n      <ul>\n        <li>Sub Item 1</li>\n        <li>Sub Item 2</li>\n      </ul>\n    </li>\n  </ul>\n</nav>"
    },
    {
      "exercise": 18,
      "title": "Implement Responsive Images",
      "description": "Use the <picture> element to provide responsive images based on screen size.",
      "requirements": [
        "Use the <picture> element with <source> and <img> to serve different images for different screen sizes."
      ],
      "hint": "<picture>\n  <source media='(min-width: 800px)' srcset='large.jpg'>\n  <img src='small.jpg' alt='Responsive Image'>\n</picture>"
    },
    {
      "exercise": 19,
      "title": "Create a Custom Scrollbar",
      "description": "Style the scrollbar using CSS to create a custom design.",
      "requirements": [
        "Use ::-webkit-scrollbar and ::-webkit-scrollbar-thumb to style the scrollbar."
      ],
      "hint": "::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: darkgray;\n}"
    },
    {
      "exercise": 20,
      "title": "Create a Back-to-Top Button",
      "description": "Add a button that scrolls the user back to the top of the page.",
      "requirements": [
        "Use JavaScript to detect scrolling and show the button after a certain point.",
        "Add smooth scrolling when the button is clicked."
      ],
      "hint": "<button onclick='window.scrollTo({ top: 0, behavior: \"smooth\" });'>Back to Top</button>"
    }
  ]
  