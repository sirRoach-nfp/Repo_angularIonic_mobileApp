export const HTMLintroduction = [
    {
      "exercise": 1,
      "title": "Basic HTML Document Structure",
      "description": "Create a simple HTML document with a head and body section.",
      "requirements": [
        "Include <!DOCTYPE html>, <html>, <head>, and <body> tags."
      ],
      "hint": "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>"
    },
    {
      "exercise": 2,
      "title": "Headings and Paragraphs",
      "description": "Use headings and paragraphs to create a small article.",
      "requirements": [
        "Use <h1> to <h6> for headings and <p> for paragraphs."
      ],
      "hint": "<h1>Article Title</h1>\n<p>This is a paragraph explaining the title.</p>"
    },
    {
      "exercise": 3,
      "title": "Adding Images",
      "description": "Insert an image into the HTML document.",
      "requirements": [
        "Use the <img> tag with a src attribute."
      ],
      "hint": "<img src='image.jpg' alt='Description of image'>"
    },
    {
      "exercise": 4,
      "title": "Creating Links",
      "description": "Create a hyperlink that points to an external website.",
      "requirements": [
        "Use the <a> tag with an href attribute."
      ],
      "hint": "<a href='https://www.example.com'>Visit Example</a>"
    },
    {
      "exercise": 5,
      "title": "Creating Lists",
      "description": "Create an unordered list and an ordered list.",
      "requirements": [
        "Use <ul> for unordered and <ol> for ordered lists."
      ],
      "hint": "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>"
    },
    {
      "exercise": 6,
      "title": "Using Div and Span",
      "description": "Use <div> and <span> elements to structure content.",
      "requirements": [
        "Differentiate between block and inline elements."
      ],
      "hint": "<div>This is a block element.</div>\n<span>This is an inline element.</span>"
    },
    {
      "exercise": 7,
      "title": "Adding Comments",
      "description": "Add comments to your HTML document.",
      "requirements": [
        "Use <!-- comment --> syntax."
      ],
      "hint": "<!-- This is a comment -->"
    },
    {
      "exercise": 8,
      "title": "Creating Tables",
      "description": "Create a simple table with headers and rows.",
      "requirements": [
        "Use <table>, <tr>, <th>, and <td> tags."
      ],
      "hint": "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>"
    },
    {
      "exercise": 9,
      "title": "Forms and Inputs",
      "description": "Create a basic form with input fields.",
      "requirements": [
        "Use <form>, <input>, and <button> tags."
      ],
      "hint": "<form>\n  <label for='name'>Name:</label>\n  <input type='text' id='name'>\n  <button type='submit'>Submit</button>\n</form>"
    },
    {
      "exercise": 10,
      "title": "Using Meta Tags",
      "description": "Include meta tags for character set and viewport.",
      "requirements": [
        "Use <meta> tags in the head section."
      ],
      "hint": "<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    },
    {
      "exercise": 11,
      "title": "HTML Entities",
      "description": "Use HTML entities to display special characters.",
      "requirements": [
        "Use entities like &lt;, &gt;, and &amp;."
      ],
      "hint": "Use &lt; for less than, &gt; for greater than, &amp; for ampersand."
    },
    {
      "exercise": 12,
      "title": "Embedding Videos",
      "description": "Embed a video into the HTML document using <iframe>.",
      "requirements": [
        "Use <iframe> tag with src attribute."
      ],
      "hint": "<iframe src='https://www.youtube.com/embed/example' width='560' height='315' frameborder='0'></iframe>"
    },
    {
      "exercise": 13,
      "title": "Creating a Navigation Bar",
      "description": "Create a simple navigation bar using links.",
      "requirements": [
        "Use <nav> element and <a> tags."
      ],
      "hint": "<nav>\n  <a href='#'>Home</a>\n  <a href='#'>About</a>\n</nav>"
    },
    {
      "exercise": 14,
      "title": "Using Iframes",
      "description": "Create a page with an iframe that loads another webpage.",
      "requirements": [
        "Set src attribute of <iframe>."
      ],
      "hint": "<iframe src='https://www.example.com' width='600' height='400'></iframe>"
    },
    {
      "exercise": 15,
      "title": "Semantic HTML Elements",
      "description": "Use semantic HTML elements like <header>, <footer>, and <article>.",
      "requirements": [
        "Use at least three semantic elements."
      ],
      "hint": "<header><h1>Title</h1></header>\n<article><p>Content...</p></article>\n<footer><p>Footer content...</p></footer>"
    },
    {
      "exercise": 16,
      "title": "Responsive Images",
      "description": "Use the <img> tag to create responsive images.",
      "requirements": [
        "Use the srcset attribute."
      ],
      "hint": "<img src='small.jpg' srcset='large.jpg 1200w, medium.jpg 600w' alt='Responsive Image'>"
    },
    {
      "exercise": 17,
      "title": "Using the <meta> Description Tag",
      "description": "Include a meta description for SEO.",
      "requirements": [
        "Use <meta name='description'>."
      ],
      "hint": "<meta name='description' content='This is a description of the webpage.'>"
    },
    {
      "exercise": 18,
      "title": "Creating a Contact Form",
      "description": "Build a simple contact form with multiple input types.",
      "requirements": [
        "Use <input> types such as text, email, and textarea."
      ],
      "hint": "<form>\n  <label for='email'>Email:</label>\n  <input type='email' id='email'>\n  <label for='message'>Message:</label>\n  <textarea id='message'></textarea>\n  <button type='submit'>Send</button>\n</form>"
    },
    {
      "exercise": 19,
      "title": "Using the <button> Element",
      "description": "Create a button that performs an action.",
      "requirements": [
        "Use <button> with an onclick event."
      ],
      "hint": "<button onclick='alert(\"Button Clicked!\")'>Click Me</button>"
    },
    {
      "exercise": 20,
      "title": "Creating a Footer with Links",
      "description": "Design a footer section with links to privacy policy and terms of service.",
      "requirements": [
        "Use <footer> and <a> tags."
      ],
      "hint": "<footer>\n  <a href='#'>Privacy Policy</a>\n  <a href='#'>Terms of Service</a>\n</footer>"
    }
  ]
  