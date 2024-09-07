
export const HTMLIntro = [
    {
      "exercise": 1,
      "title": "Basic HTML Structure",
      "description": "Create a simple HTML document with the proper doctype declaration, head, and body.",
      "requirements": [
        "Include a title for the document.",
        "Create a heading and a paragraph inside the body."
      ],
      "hint": "<!DOCTYPE html>\n<html>\n<head>\n<title>My First Page</title>\n</head>\n<body>\n<h1>Hello World!</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>"
    },
    {
      "exercise": 2,
      "title": "Adding Links",
      "description": "Create an HTML page that contains a hyperlink.",
      "requirements": [
        "Add a link that navigates to an external website.",
        "Use appropriate anchor tag attributes."
      ],
      "hint": "<a href='https://www.example.com'>Visit Example</a>"
    },
    {
      "exercise": 3,
      "title": "Creating Lists",
      "description": "Create both ordered and unordered lists.",
      "requirements": [
        "Create an unordered list with 3 items.",
        "Create an ordered list with 3 items."
      ],
      "hint": "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>"
    },
    {
      "exercise": 4,
      "title": "Adding Images",
      "description": "Embed an image into your HTML document.",
      "requirements": [
        "Use the img tag to include an image.",
        "Ensure the image has an alt attribute."
      ],
      "hint": "<img src='image.jpg' alt='Description of image'>"
    },
    {
      "exercise": 5,
      "title": "Using Tables",
      "description": "Create a basic table with rows and columns.",
      "requirements": [
        "Create a table with 3 rows and 2 columns.",
        "Include a table header."
      ],
      "hint": "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Row 1, Column 1</td>\n    <td>Row 1, Column 2</td>\n  </tr>\n  <tr>\n    <td>Row 2, Column 1</td>\n    <td>Row 2, Column 2</td>\n  </tr>\n</table>"
    },
    {
      "exercise": 6,
      "title": "Form Elements",
      "description": "Create a form with different input fields.",
      "requirements": [
        "Create a form with text input, email input, and a submit button."
      ],
      "hint": "<form>\n  <label for='name'>Name:</label>\n  <input type='text' id='name' name='name'>\n  <br>\n  <label for='email'>Email:</label>\n  <input type='email' id='email' name='email'>\n  <br>\n  <input type='submit' value='Submit'>\n</form>"
    },
    {
      "exercise": 7,
      "title": "Adding Comments",
      "description": "Add comments in your HTML document.",
      "requirements": [
        "Add a comment inside the body of the HTML document."
      ],
      "hint": "<!-- This is a comment -->"
    },
    {
      "exercise": 8,
      "title": "Nested Elements",
      "description": "Nest HTML elements inside each other.",
      "requirements": [
        "Create a paragraph with a bolded word.",
        "Include a link inside the paragraph."
      ],
      "hint": "<p>This is a <b>bold</b> word and <a href='https://www.example.com'>this is a link</a>.</p>"
    },
    {
      "exercise": 9,
      "title": "Adding Audio",
      "description": "Embed an audio file into your HTML page.",
      "requirements": [
        "Use the audio tag to embed an audio file.",
        "Provide controls for playback."
      ],
      "hint": "<audio controls>\n  <source src='audio.mp3' type='audio/mpeg'>\n  Your browser does not support the audio tag.\n</audio>"
    },
    {
      "exercise": 10,
      "title": "Video Embedding",
      "description": "Embed a video in your HTML page.",
      "requirements": [
        "Use the video tag to embed a video file.",
        "Add video controls."
      ],
      "hint": "<video controls>\n  <source src='video.mp4' type='video/mp4'>\n  Your browser does not support the video tag.\n</video>"
    },
    {
      "exercise": 11,
      "title": "Using Divs and Spans",
      "description": "Create and style div and span elements.",
      "requirements": [
        "Create a div and place some text inside it.",
        "Use a span to highlight a specific part of the text."
      ],
      "hint": "<div>This is a <span style='color: red;'>highlighted text</span> inside a div.</div>"
    },
    {
      "exercise": 12,
      "title": "Creating a Navigation Menu",
      "description": "Build a simple navigation bar using an unordered list.",
      "requirements": [
        "Create a navigation bar with at least 3 links.",
        "Style the navigation bar horizontally."
      ],
      "hint": "<ul>\n  <li><a href='#'>Home</a></li>\n  <li><a href='#'>About</a></li>\n  <li><a href='#'>Contact</a></li>\n</ul>"
    },
    {
      "exercise": 13,
      "title": "Adding Metadata",
      "description": "Include metadata in your HTML document.",
      "requirements": [
        "Add meta tags for charset and viewport settings.",
        "Include a meta description."
      ],
      "hint": "<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<meta name='description' content='This is a basic HTML page.'>"
    },
    {
      "exercise": 14,
      "title": "Using Iframes",
      "description": "Embed an external website using an iframe.",
      "requirements": [
        "Use the iframe tag to embed an external webpage.",
        "Ensure the iframe has appropriate width and height attributes."
      ],
      "hint": "<iframe src='https://www.example.com' width='300' height='200'></iframe>"
    },
    {
      "exercise": 15,
      "title": "Basic HTML Styling",
      "description": "Add inline styles to your HTML elements.",
      "requirements": [
        "Create a heading and apply a custom color using the style attribute.",
        "Change the background color of a div."
      ],
      "hint": "<h1 style='color: blue;'>This is a heading</h1>\n<div style='background-color: yellow;'>This is a div</div>"
    },
    {
      "exercise": 16,
      "title": "Creating a Contact Form",
      "description": "Build a contact form with input fields and a textarea.",
      "requirements": [
        "Include fields for name, email, and a message textarea.",
        "Add a submit button."
      ],
      "hint": "<form>\n  <label for='name'>Name:</label>\n  <input type='text' id='name' name='name'>\n  <br>\n  <label for='email'>Email:</label>\n  <input type='email' id='email' name='email'>\n  <br>\n  <label for='message'>Message:</label>\n  <textarea id='message' name='message'></textarea>\n  <br>\n  <input type='submit' value='Send'>\n</form>"
    },
    {
      "exercise": 17,
      "title": "Defining Links with Target Attribute",
      "description": "Create a link that opens in a new tab.",
      "requirements": [
        "Use the target attribute in the anchor tag to open the link in a new tab."
      ],
      "hint": "<a href='https://www.example.com' target='_blank'>Open in New Tab</a>"
    },
    {
      "exercise": 18,
      "title": "Creating a Simple Footer",
      "description": "Add a footer to your HTML page.",
      "requirements": [
        "Create a footer element at the bottom of the page.",
        "Include copyright information inside the footer."
      ],
      "hint": "<footer>\n  <p>&copy; 2024 My Website</p>\n</footer>"
    },
    {
      "exercise": 19,
      "title": "Text Formatting",
      "description": "Use text formatting tags in an HTML document.",
      "requirements": [
        "Create a paragraph with bold, italic, and underlined text.",
        "Use the appropriate HTML tags for each style."
      ],
      "hint": "<p>This is <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>"
    },
    {
      "exercise": 20,
      "title": "Using Blockquote",
      "description": "Create a blockquote element.",
      "requirements": [
        "Add a blockquote element with a citation.",
        "Ensure the citation is properly formatted."
      ],
      "hint": "<blockquote>\n  This is a quoted text.\n  <cite>— Source Name</cite>\n</blockquote>"
    }
  ]
  