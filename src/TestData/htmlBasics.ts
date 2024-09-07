
export const HTMLbasic = [
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
    "title": "Paragraphs and Headings",
    "description": "Create an HTML document with different heading levels and paragraphs.",
    "requirements": [
      "Use heading levels h1 to h6.",
      "Add at least two paragraphs."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Sub-subheading</h3>\n<p>First paragraph.</p>\n<p>Second paragraph.</p>\n</body>\n</html>"
  },
  {
    "exercise": 3,
    "title": "Lists",
    "description": "Create an HTML document containing an ordered and unordered list.",
    "requirements": [
      "Include at least 3 items in both lists."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>\n</body>\n</html>"
  },
  {
    "exercise": 4,
    "title": "Links",
    "description": "Create a webpage with links to external websites and another page within your own site.",
    "requirements": [
      "Use both absolute and relative URLs."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<a href=\"https://www.google.com\">Go to Google</a>\n<a href=\"about.html\">About Us</a>\n</body>\n</html>"
  },
  {
    "exercise": 5,
    "title": "Images",
    "description": "Create a webpage that displays an image with proper alt text.",
    "requirements": [
      "Include an image from a URL and give it a descriptive alt attribute."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<img src=\"https://www.example.com/image.jpg\" alt=\"A description of the image\">\n</body>\n</html>"
  },
  {
    "exercise": 6,
    "title": "Tables",
    "description": "Create a table with 3 rows and 3 columns.",
    "requirements": [
      "Add a table header.",
      "Include a border for the table."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<table border=\"1\">\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n    <th>Header 3</th>\n  </tr>\n  <tr>\n    <td>Row 1, Col 1</td>\n    <td>Row 1, Col 2</td>\n    <td>Row 1, Col 3</td>\n  </tr>\n  <tr>\n    <td>Row 2, Col 1</td>\n    <td>Row 2, Col 2</td>\n    <td>Row 2, Col 3</td>\n  </tr>\n</table>\n</body>\n</html>"
  },
  {
    "exercise": 7,
    "title": "Forms: Text Inputs",
    "description": "Create a form with text input fields.",
    "requirements": [
      "Include fields for 'name' and 'email'.",
      "Include a submit button."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<form>\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\"><br><br>\n  <input type=\"submit\" value=\"Submit\">\n</form>\n</body>\n</html>"
  },
  {
    "exercise": 8,
    "title": "Forms: Radio Buttons and Checkboxes",
    "description": "Create a form that contains radio buttons and checkboxes.",
    "requirements": [
      "Add a group of radio buttons to select a gender.",
      "Include checkboxes to select multiple hobbies."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<form>\n  <label>Gender:</label><br>\n  <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n  <label for=\"male\">Male</label><br>\n  <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n  <label for=\"female\">Female</label><br><br>\n  <label>Hobbies:</label><br>\n  <input type=\"checkbox\" id=\"reading\" name=\"hobbies\" value=\"reading\">\n  <label for=\"reading\">Reading</label><br>\n  <input type=\"checkbox\" id=\"sports\" name=\"hobbies\" value=\"sports\">\n  <label for=\"sports\">Sports</label><br>\n  <input type=\"checkbox\" id=\"music\" name=\"hobbies\" value=\"music\">\n  <label for=\"music\">Music</label><br>\n  <input type=\"submit\" value=\"Submit\">\n</form>\n</body>\n</html>"
  },
  {
    "exercise": 9,
    "title": "Forms: Select Dropdown",
    "description": "Create a form with a select dropdown list.",
    "requirements": [
      "Add options for a user to select their country.",
      "Include at least 5 options."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<form>\n  <label for=\"country\">Choose a country:</label>\n  <select id=\"country\" name=\"country\">\n    <option value=\"usa\">USA</option>\n    <option value=\"canada\">Canada</option>\n    <option value=\"uk\">UK</option>\n    <option value=\"germany\">Germany</option>\n    <option value=\"france\">France</option>\n  </select>\n  <input type=\"submit\" value=\"Submit\">\n</form>\n</body>\n</html>"
  },
  {
    "exercise": 10,
    "title": "Links with Images",
    "description": "Create a webpage with an image that serves as a link.",
    "requirements": [
      "Use an image as a clickable link to another webpage."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<a href=\"https://www.example.com\">\n  <img src=\"https://www.example.com/image.jpg\" alt=\"Click me\">\n</a>\n</body>\n</html>"
  },
  {
    "exercise": 11,
    "title": "Embedding a Video",
    "description": "Embed a YouTube video into a webpage.",
    "requirements": [
      "Use the iframe tag to embed the video."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allowfullscreen></iframe>\n</body>\n</html>"
  },
  {
    "exercise": 12,
    "title": "Audio",
    "description": "Create a webpage that embeds an audio file.",
    "requirements": [
      "Use the audio tag to embed the audio file.",
      "Add controls for play, pause, and volume."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  Your browser does not support the audio element.\n</audio>\n</body>\n</html>"
  },
  {
    "exercise": 13,
    "title": "Inline vs Block Elements",
    "description": "Create a webpage to demonstrate the difference between inline and block elements.",
    "requirements": [
      "Use inline elements like <span> and <strong>.",
      "Use block elements like <div> and <p>."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<div>This is a block element.</div>\n<p>This is also a block element.</p>\n<span>This is an inline element.</span>\n<strong>This is another inline element.</strong></body>\n</html>"
  },
  {
    "exercise": 14,
    "title": "Anchor Links",
    "description": "Create anchor links within the same webpage to navigate to different sections.",
    "requirements": [
      "Include at least 2 anchor links pointing to different sections."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<a href=\"#section1\">Go to Section 1</a>\n<a href=\"#section2\">Go to Section 2</a>\n<h2 id=\"section1\">Section 1</h2>\n<p>This is section 1.</p>\n<h2 id=\"section2\">Section 2</h2>\n<p>This is section 2.</p>\n</body>\n</html>"
  },
  {
    "exercise": 15,
    "title": "Meta Tags",
    "description": "Add meta tags to an HTML document.",
    "requirements": [
      "Include a meta description tag.",
      "Add a viewport meta tag for responsive design."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"description\" content=\"This is a test description\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Meta Tags</title>\n</head>\n<body>\n<h1>Meta Tags Example</h1>\n</body>\n</html>"
  },
  {
    "exercise": 16,
    "title": "Button Elements",
    "description": "Create a webpage with different types of buttons.",
    "requirements": [
      "Include a button with type 'submit'.",
      "Add a button with type 'button'."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<button type=\"submit\">Submit</button>\n<button type=\"button\" onclick=\"alert('Hello!')\">Click Me</button>\n</body>\n</html>"
  },
  {
    "exercise": 17,
    "title": "Adding Styles",
    "description": "Use inline CSS to style elements on a webpage.",
    "requirements": [
      "Style a heading and a paragraph with different colors and font sizes."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<h1 style=\"color:blue; font-size:30px;\">Styled Heading</h1>\n<p style=\"color:red; font-size:18px;\">Styled paragraph</p>\n</body>\n</html>"
  },
  {
    "exercise": 18,
    "title": "Favicon",
    "description": "Add a favicon to your webpage.",
    "requirements": [
      "Use the link tag in the head section to add a favicon."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">\n<title>Favicon Example</title>\n</head>\n<body>\n<h1>Favicon Example</h1>\n</body>\n</html>"
  },
  {
    "exercise": 19,
    "title": "Nested Lists",
    "description": "Create a webpage with a nested list.",
    "requirements": [
      "Create an unordered list with one list item that contains another ordered list."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<ul>\n  <li>Item 1\n    <ol>\n      <li>Subitem 1</li>\n      <li>Subitem 2</li>\n    </ol>\n  </li>\n  <li>Item 2</li>\n</ul>\n</body>\n</html>"
  },
  {
    "exercise": 20,
    "title": "HTML Comments",
    "description": "Use HTML comments within a webpage.",
    "requirements": [
      "Add comments to explain the purpose of different sections of the HTML document."
    ],
    "hint": "<!DOCTYPE html>\n<html>\n<body>\n<!-- This is the header section -->\n<h1>Welcome to My Page</h1>\n<!-- This is a paragraph section -->\n<p>This is a paragraph.</p>\n</body>\n</html>"
  }
]