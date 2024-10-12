export const HTMLintermediate = [
    {
      "exercise": 1,
      "title": "Create a Multi-Column Layout",
      "description": "Use div elements to create a multi-column layout.",
      "requirements": [
        "Use CSS to create two columns with 50% width each."
      ],
      "hint": "<div style='width: 50%; float: left;'>Column 1</div>\n<div style='width: 50%; float: left;'>Column 2</div>"
    },
    {
      "exercise": 2,
      "title": "Responsive Image",
      "description": "Make an image responsive.",
      "requirements": [
        "Use the width attribute or CSS to set the image width to 100% of its container."
      ],
      "hint": "<img src='image.jpg' style='width: 100%;' alt='Responsive Image'>"
    },
    {
      "exercise": 3,
      "title": "Create a Form with Different Input Types",
      "description": "Build a form that includes different input types like text, password, email, and checkbox.",
      "requirements": [
        "Use <input> tags with type='text', type='password', type='email', and type='checkbox'."
      ],
      "hint": "<form>\n  <input type='text' placeholder='Name'><br>\n  <input type='password' placeholder='Password'><br>\n  <input type='email' placeholder='Email'><br>\n  <input type='checkbox'> I agree<br>\n</form>"
    },
    {
      "exercise": 4,
      "title": "Embed a YouTube Video",
      "description": "Embed a YouTube video using the <iframe> element.",
      "requirements": [
        "Use the <iframe> tag with the correct YouTube video URL."
      ],
      "hint": "<iframe width='560' height='315' src='https://www.youtube.com/embed/videoid' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "exercise": 5,
      "title": "Create a Dropdown Menu",
      "description": "Design a simple dropdown menu using the <select> and <option> tags.",
      "requirements": [
        "Use <select> and <option> tags to create a dropdown."
      ],
      "hint": "<select>\n  <option value='1'>Option 1</option>\n  <option value='2'>Option 2</option>\n</select>"
    },
    {
      "exercise": 6,
      "title": "Add a Favicon",
      "description": "Include a favicon in your HTML document.",
      "requirements": [
        "Use the <link> tag to add a favicon in the <head> section."
      ],
      "hint": "<link rel='icon' href='favicon.ico' type='image/x-icon'>"
    },
    {
      "exercise": 7,
      "title": "Create an HTML Table with a Caption",
      "description": "Build an HTML table with rows, columns, and a caption at the top.",
      "requirements": [
        "Use <table>, <tr>, <th>, <td>, and <caption> tags."
      ],
      "hint": "<table>\n  <caption>Table Caption</caption>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>"
    },
    {
      "exercise": 8,
      "title": "Create a Responsive Navigation Bar",
      "description": "Design a responsive navigation bar that stacks on smaller screens.",
      "requirements": [
        "Use <nav> and <ul> tags, and CSS media queries for responsiveness."
      ],
      "hint": "<nav>\n  <ul>\n    <li><a href='#'>Home</a></li>\n    <li><a href='#'>About</a></li>\n  </ul>\n</nav>\n<style>\n  nav ul { list-style-type: none; }\n  nav ul li { display: inline-block; margin-right: 10px; }\n  @media (max-width: 600px) {\n    nav ul li { display: block; }\n  }\n</style>"
    },
    {
      "exercise": 9,
      "title": "Create a Form with Validation",
      "description": "Build a form with HTML5 validation features.",
      "requirements": [
        "Use required, minlength, and maxlength attributes in input fields."
      ],
      "hint": "<form>\n  <input type='text' required minlength='3' maxlength='10' placeholder='Enter text'><br>\n  <input type='submit'>\n</form>"
    },
    {
      "exercise": 10,
      "title": "Create a Semantic HTML Page",
      "description": "Use semantic HTML5 elements like <header>, <main>, and <footer>.",
      "requirements": [
        "Include at least three semantic HTML5 elements."
      ],
      "hint": "<header><h1>Header Title</h1></header>\n<main><p>Main content goes here.</p></main>\n<footer><p>Footer content here.</p></footer>"
    },
    {
      "exercise": 11,
      "title": "Create an HTML Table with Colspan and Rowspan",
      "description": "Use colspan and rowspan to merge cells in an HTML table.",
      "requirements": [
        "Use <td> with colspan and rowspan attributes."
      ],
      "hint": "<table>\n  <tr>\n    <td colspan='2'>Merged Column 1 and 2</td>\n  </tr>\n  <tr>\n    <td rowspan='2'>Merged Row 1 and 2</td>\n    <td>Row 1 Column 2</td>\n  </tr>\n  <tr>\n    <td>Row 2 Column 2</td>\n  </tr>\n</table>"
    },
    {
      "exercise": 12,
      "title": "Create a Progress Bar",
      "description": "Add a progress bar to your webpage using the <progress> tag.",
      "requirements": [
        "Use the <progress> tag to indicate progress on a task."
      ],
      "hint": "<progress value='70' max='100'></progress>"
    },
    {
      "exercise": 13,
      "title": "Use HTML Data Attributes",
      "description": "Add custom data attributes to HTML elements.",
      "requirements": [
        "Use the data-* attributes to store additional information in HTML elements."
      ],
      "hint": "<div data-user='JohnDoe'>This div has a data attribute</div>"
    },
    {
      "exercise": 14,
      "title": "Create a Fieldset with a Legend",
      "description": "Group form elements using <fieldset> and <legend>.",
      "requirements": [
        "Use <fieldset> and <legend> to group related form fields."
      ],
      "hint": "<fieldset>\n  <legend>Personal Information</legend>\n  <label for='name'>Name:</label>\n  <input type='text' id='name'><br>\n  <label for='email'>Email:</label>\n  <input type='email' id='email'><br>\n</fieldset>"
    },
    {
      "exercise": 15,
      "title": "Create an HTML Definition List",
      "description": "Design a definition list using <dl>, <dt>, and <dd> tags.",
      "requirements": [
        "Use <dl> for the definition list, <dt> for the term, and <dd> for the description."
      ],
      "hint": "<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>"
    },
    {
      "exercise": 16,
      "title": "Create an Image Gallery",
      "description": "Build a simple image gallery using <figure> and <figcaption> tags.",
      "requirements": [
        "Use <figure> for images and <figcaption> for captions."
      ],
      "hint": "<figure>\n  <img src='image1.jpg' alt='Image 1'>\n  <figcaption>Image 1 Description</figcaption>\n</figure>"
    },
    {
      "exercise": 17,
      "title": "Create a Contact Form with Action Attribute",
      "description": "Build a contact form that sends data to a server using the action attribute.",
      "requirements": [
        "Use <form> with the action attribute and method='post'."
      ],
      "hint": "<form action='submit.php' method='post'>\n  <label for='name'>Name:</label>\n  <input type='text' id='name'><br>\n  <label for='message'>Message:</label>\n  <textarea id='message'></textarea><br>\n  <input type='submit'>\n</form>"
    },
    {
      "exercise": 18,
      "title": "Add Placeholder Text in Input Fields",
      "description": "Use the placeholder attribute in text and email fields.",
      "requirements": [
        "Use the placeholder attribute in input fields to show hints."
      ],
      "hint": "<input type='text' placeholder='Enter your name'>\n<input type='email' placeholder='Enter your email'>"
    },
    {
      "exercise": 19,
      "title": "Create a Tooltip with Title Attribute",
      "description": "Add tooltips to elements using the title attribute.",
      "requirements": [
        "Use the title attribute to display tooltips when hovering over elements."
      ],
      "hint": "<button title='Click here to submit'>Submit</button>"
    },
    {
      "exercise": 20,
      "title": "Create a Fixed Header",
      "description": "Create a fixed header that stays at the top of the page when scrolling.",
      "requirements": [
        "Use CSS to position the header at the top of the page using position: fixed."
      ],
      "hint": "<header style='position: fixed; top: 0; width: 100%;'>Fixed Header</header>"
    }
  ]
  