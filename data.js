
const quizData = [
    // HTML Questions
    {
        question: "What does HTML stand for?",
        options: ["A. HyperText Markup Language", "B. HyperText Machine Language", "C. HyperText Marking Language", "D. HyperTransfer Markup Language"],
        correctAnswer: "A. HyperText Markup Language"
    },
    {
        question: "What is the purpose of the `<head>` tag in HTML?",
        options: ["A. To store meta-information about the document", "B. To display the header content", "C. To create a heading", "D. To create a footer"],
        correctAnswer: "A. To store meta-information about the document"
    },
    {
        question: "How do you create a hyperlink in HTML?",
        options: ["A. `<a href='url'>link text</a>`", "B. `<link href='url'>link text</link>`", "C. `<hyperlink url='url'>link text</hyperlink>`", "D. `<a link='url'>link text</a>`"],
        correctAnswer: "A. `<a href='url'>link text</a>`"
    },
    {
        question: "What is the difference between `<div>` and `<span>` in HTML?",
        options: ["A. `<div>` is block-level, `<span>` is inline", "B. `<div>` is inline, `<span>` is block-level", "C. Both are inline elements", "D. Both are block-level elements"],
        correctAnswer: "A. `<div>` is block-level, `<span>` is inline"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["A. `<br>`", "B. `<lb>`", "C. `<break>`", "D. `<newline>`"],
        correctAnswer: "A. `<br>`"
    },
    {
        question: "How do you add an image to a webpage in HTML?",
        options: ["A. `<img src='url'>`", "B. `<image src='url'>`", "C. `<picture src='url'>`", "D. `<pic src='url'>`"],
        correctAnswer: "A. `<img src='url'>`"
    },
    {
        question: "What is the use of the `<title>` tag in HTML?",
        options: ["A. To define the title of the document", "B. To create a heading", "C. To create a section", "D. To add a subtitle"],
        correctAnswer: "A. To define the title of the document"
    },
    {
        question: "What is the difference between `<ol>` and `<ul>` in HTML?",
        options: ["A. `<ol>` is ordered, `<ul>` is unordered", "B. `<ol>` is unordered, `<ul>` is ordered", "C. Both create unordered lists", "D. Both create ordered lists"],
        correctAnswer: "A. `<ol>` is ordered, `<ul>` is unordered"
    },
    {
        question: "How do you create a form in HTML?",
        options: ["A. `<form></form>`", "B. `<input></input>`", "C. `<formfield></formfield>`", "D. `<field></field>`"],
        correctAnswer: "A. `<form></form>`"
    },
    {
        question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
        options: ["A. To provide alternative text if the image cannot be displayed", "B. To add a tooltip", "C. To change the image size", "D. To link the image"],
        correctAnswer: "A. To provide alternative text if the image cannot be displayed"
    },
    {
        question: "How do you create a table in HTML?",
        options: ["A. `<table></table>`", "B. `<tbl></tbl>`", "C. `<tab></tab>`", "D. `<t></t>`"],
        correctAnswer: "A. `<table></table>`"
    },
    {
        question: "What is the difference between `<th>` and `<td>` in HTML tables?",
        options: ["A. `<th>` is for table headers, `<td>` is for table data cells", "B. `<th>` is for table data cells, `<td>` is for table headers", "C. Both are used for table headers", "D. Both are used for table data cells"],
        correctAnswer: "A. `<th>` is for table headers, `<td>` is for table data cells"
    },
    {
        question: "How do you create a checkbox in HTML?",
        options: ["A. `<input type='checkbox'>`", "B. `<input type='check'>`", "C. `<check></check>`", "D. `<checkbox></checkbox>`"],
        correctAnswer: "A. `<input type='checkbox'>`"
    },
    {
        question: "What is the purpose of the `action` attribute in an HTML form?",
        options: ["A. It specifies where to send the form data when submitted", "B. It defines the method used for form submission", "C. It styles the form", "D. It clears the form after submission"],
        correctAnswer: "A. It specifies where to send the form data when submitted"
    },
    {
        question: "How do you create a radio button in HTML?",
        options: ["A. `<input type='radio'>`", "B. `<radio></radio>`", "C. `<input type='rad'>`", "D. `<radiobutton></radiobutton>`"],
        correctAnswer: "A. `<input type='radio'>`"
    },
    {
        question: "What is the purpose of the `placeholder` attribute in an `<input>` element?",
        options: ["A. It provides a hint to the user about what to enter", "B. It sets a default value", "C. It changes the input type", "D. It validates the input"],
        correctAnswer: "A. It provides a hint to the user about what to enter"
    },
    {
        question: "How do you create a drop-down list in HTML?",
        options: ["A. `<select></select>`", "B. `<dropdown></dropdown>`", "C. `<list></list>`", "D. `<option></option>`"],
        correctAnswer: "A. `<select></select>`"
    },
    {
        question: "What is the correct way to comment out code in HTML?",
        options: ["A. `<!-- Comment -->`", "B. `// Comment`", "C. `/* Comment */`", "D. `# Comment`"],
        correctAnswer: "A. `<!-- Comment -->`"
    },
    {
        question: "How do you create an ordered list in HTML?",
        options: ["A. `<ol></ol>`", "B. `<ul></ul>`", "C. `<list></list>`", "D. `<order></order>`"],
        correctAnswer: "A. `<ol></ol>`"
    },
    {
        question: "What is the purpose of the `<meta>` tag in HTML?",
        options: ["A. To provide metadata about the HTML document", "B. To create a table", "C. To insert media content", "D. To define navigation links"],
        correctAnswer: "A. To provide metadata about the HTML document"
    },
    
    // CSS Questions
    {
        question: "What does CSS stand for?",
        options: ["A. Cascading Style Sheets", "B. Computer Style Sheets", "C. Colorful Style Sheets", "D. Creative Style Sheets"],
        correctAnswer: "A. Cascading Style Sheets"
    },
    {
        question: "What is the purpose of the `class` attribute in HTML?",
        options: ["A. To apply CSS styles to multiple elements", "B. To define an element's ID", "C. To create an inline element", "D. To set a unique style for one element"],
        correctAnswer: "A. To apply CSS styles to multiple elements"
    },
    {
        question: "How do you apply CSS styles to a specific HTML element?",
        options: ["A. By using selectors", "B. By using the `style` attribute", "C. By using the `id` attribute", "D. By using the `link` tag"],
        correctAnswer: "A. By using selectors"
    },
    {
        question: "What is the difference between `id` and `class` in CSS?",
        options: ["A. `id` is unique, `class` can be reused", "B. `class` is unique, `id` can be reused", "C. Both are unique", "D. Both can be reused"],
        correctAnswer: "A. `id` is unique, `class` can be reused"
    },
    {
        question: "How do you change the background color of an element in CSS?",
        options: ["A. `background-color`", "B. `color`", "C. `bg-color`", "D. `background`"],
        correctAnswer: "A. `background-color`"
    },
    {
        question: "What is the purpose of the `box-shadow` property in CSS?",
        options: ["A. To add a shadow around an element", "B. To add a border around an element", "C. To change the background color", "D. To set the size of an element"],
        correctAnswer: "A. To add a shadow around an element"
    },
    {
        question: "How do you create a border around an HTML element in CSS?",
        options: ["A. `border`", "B. `outline`", "C. `frame`", "D. `edge`"],
        correctAnswer: "A. `border`"
    },
    {
        question: "What is the purpose of the `margin` property in CSS?",
        options: ["A. To create space outside an element", "B. To create space inside an element", "C. To change the font size", "D. To set the background color"],
        correctAnswer: "A. To create space outside an element"
    },
    {
        question: "How do you center a div horizontally using CSS?",
        options: ["A. `margin: 0 auto;`", "B. `text-align: center;`", "C. `padding: 0 auto;`", "D. `center: true;`"],
        correctAnswer: "A. `margin: 0 auto;`"
    },
    {
        question: "What is the difference between `padding` and `margin` in CSS?",
        options: ["A. Padding is inside the element, margin is outside", "B. Padding is outside the element, margin is inside", "C. Both are inside the element", "D. Both are outside the element"],
        correctAnswer: "A. Padding is inside the element, margin is outside"
    },
    {
        question: "How do you make text bold in CSS?",
        options: ["A. `font-weight: bold;`", "B. `text-weight: bold;`", "C. `font-bold: true;`", "D. `bold: true;`"],
        correctAnswer: "A. `font-weight: bold;`"
    },
    {
        question: "What is the use of the `display` property in CSS?",
        options: ["A. To control how an element is displayed", "B. To change the background color", "C. To set the text alignment", "D. To change the element's size"],
        correctAnswer: "A. To control how an element is displayed"
    },
    {
        question: "How do you apply a font style to text in CSS?",
        options: ["A. `font-family`", "B. `text-font`", "C. `font-style`", "D. `font`"],
        correctAnswer: "A. `font-family`"
    },
    {
        question: "What is the difference between `inline` and `block` elements in CSS?",
        options: ["A. Inline elements don't start on a new line, block elements do", "B. Block elements don't start on a new line, inline elements do", "C. Both start on a new line", "D. Neither start on a new line"],
        correctAnswer: "A. Inline elements don't start on a new line, block elements do"
    },
    {
        question: "How do you create a responsive layout in CSS?",
        options: ["A. Using media queries", "B. Using flexbox", "C. Using grid", "D. Using all of the above"],
        correctAnswer: "D. Using all of the above"
    },
    {
        question: "What is the purpose of the `position` property in CSS?",
        options: ["A. To define how an element is positioned in a document", "B. To set the text alignment", "C. To control the element's size", "D. To change the background color"],
        correctAnswer: "A. To define how an element is positioned in a document"
    },
    {
        question: "How do you apply styles to multiple elements in CSS?",
        options: ["A. Using classes", "B. Using ids", "C. Using elements", "D. Using all of the above"],
        correctAnswer: "D. Using all of the above"
    },
    {
        question: "What is the use of the `z-index` property in CSS?",
        options: ["A. To control the stack order of elements", "B. To set the text alignment", "C. To change the font size", "D. To set the background color"],
        correctAnswer: "A. To control the stack order of elements"
    },
    {
        question: "How do you create a gradient background in CSS?",
        options: ["A. Using the `background: linear-gradient();`", "B. Using `background-color`", "C. Using `background-image`", "D. Using `gradient-bg`"],
        correctAnswer: "A. Using the `background: linear-gradient();`"
    },
    {
        question: "What is the purpose of the `float` property in CSS?",
        options: ["A. To allow elements to float to the left or right of a container", "B. To center an element", "C. To align text", "D. To clear the float"],
        correctAnswer: "A. To allow elements to float to the left or right of a container"
    },
    {
        question: "How do you clear a float in CSS?",
        options: ["A. Using `clear: both;`", "B. Using `float: clear;`", "C. Using `float: none;`", "D. Using `clear: float;`"],
        correctAnswer: "A. Using `clear: both;`"
    },
    {
        question: "What is the purpose of the `flexbox` layout in CSS?",
        options: ["A. To create a flexible responsive layout", "B. To create a grid layout", "C. To align text", "D. To set the background color"],
        correctAnswer: "A. To create a flexible responsive layout"
    },
    {
        question: "How do you create a fixed header in CSS?",
        options: ["A. Using `position: fixed;`", "B. Using `position: static;`", "C. Using `position: absolute;`", "D. Using `position: relative;`"],
        correctAnswer: "A. Using `position: fixed;`"
    },
    {
        question: "What is the purpose of the `grid` layout in CSS?",
        options: ["A. To create a grid-based layout", "B. To align text", "C. To set the background color", "D. To change the font size"],
        correctAnswer: "A. To create a grid-based layout"
    },
    {
        question: "How do you make an element transparent using CSS?",
        options: ["A. Using `opacity`", "B. Using `visibility`", "C. Using `display`", "D. Using `background-color`"],
        correctAnswer: "A. Using `opacity`"
    },
    {
        question: "What is the difference between `relative` and `absolute` positioning in CSS?",
        options: ["A. Relative is positioned relative to its normal position, absolute is positioned relative to its nearest positioned ancestor", "B. Absolute is positioned relative to its normal position, relative is positioned relative to its nearest positioned ancestor", "C. Both are positioned relative to their normal positions", "D. Both are positioned relative to their nearest positioned ancestors"],
        correctAnswer: "A. Relative is positioned relative to its normal position, absolute is positioned relative to its nearest positioned ancestor"
    },
    {
        question: "How do you create a rounded corner in CSS?",
        options: ["A. Using `border-radius`", "B. Using `border-corner`", "C. Using `corner-radius`", "D. Using `border-round`"],
        correctAnswer: "A. Using `border-radius`"
    },
    {
        question: "What is the purpose of the `media query` in CSS?",
        options: ["A. To apply styles based on the device's characteristics", "B. To center an element", "C. To align text", "D. To set the background color"],
        correctAnswer: "A. To apply styles based on the device's characteristics"
    },
    {
        question: "How do you apply CSS styles to a link?",
        options: ["A. Using the `a` selector", "B. Using the `link` selector", "C. Using the `href` selector", "D. Using the `ul` selector"],
        correctAnswer: "A. Using the `a` selector"
    },
    {
        question: "What is the purpose of the `hover` pseudo-class in CSS?",
        options: ["A. To apply styles when an element is hovered over", "B. To apply styles when an element is clicked", "C. To apply styles when an element is focused", "D. To apply styles when an element is active"],
        correctAnswer: "A. To apply styles when an element is hovered over"
    },
    
    // JavaScript Questions
    {
        question: "What does JavaScript do in a webpage?",
        options: ["A. It makes the webpage interactive", "B. It styles the webpage", "C. It creates the webpage's structure", "D. It makes the webpage load faster"],
        correctAnswer: "A. It makes the webpage interactive"
    },
    {
        question: "How do you create a variable in JavaScript?",
        options: ["A. `let variableName;`", "B. `variable variableName;`", "C. `create variableName;`", "D. `new variableName;`"],
        correctAnswer: "A. `let variableName;`"
    },
    {
        question: "What is the difference between `let`, `var`, and `const` in JavaScript?",
        options: ["A. `let` and `var` are block-scoped, `const` is not", "B. `var` is block-scoped, `let` and `const` are not", "C. `let` and `const` are block-scoped, `var` is function-scoped", "D. All are block-scoped"],
        correctAnswer: "C. `let` and `const` are block-scoped, `var` is function-scoped"
    },
    {
        question: "How do you write a function in JavaScript?",
        options: ["A. `function functionName() { }`", "B. `func functionName() { }`", "C. `fn functionName() { }`", "D. `def functionName() { }`"],
        correctAnswer: "A. `function functionName() { }`"
    },
    {
        question: "What is an array in JavaScript?",
        options: ["A. A collection of elements", "B. A function that returns a value", "C. A variable that holds a string", "D. A data type for numbers"],
        correctAnswer: "A. A collection of elements"
    },
    {
        question: "How do you add an element to an array in JavaScript?",
        options: ["A. `array.push(element)`", "B. `array.add(element)`", "C. `array.append(element)`", "D. `array.insert(element)`"],
        correctAnswer: "A. `array.push(element)`"
    },
    {
        question: "What is an object in JavaScript?",
        options: ["A. A collection of key-value pairs", "B. A variable that holds a string", "C. A data type for numbers", "D. A function that returns a value"],
        correctAnswer: "A. A collection of key-value pairs"
    },
    {
        question: "How do you access the properties of an object in JavaScript?",
        options: ["A. `object.propertyName`", "B. `object->propertyName`", "C. `object::propertyName`", "D. `object.property`"],
        correctAnswer: "A. `object.propertyName`"
    },
    {
        question: "What is the purpose of the `if` statement in JavaScript?",
        options: ["A. To perform a conditional check", "B. To create a loop", "C. To define a variable", "D. To return a value"],
        correctAnswer: "A. To perform a conditional check"
    },
    {
        question: "How do you write a loop in JavaScript?",
        options: ["A. `for (let i = 0; i < length; i++) { }`", "B. `loop (let i = 0; i < length; i++) { }`", "C. `iterate (let i = 0; i < length; i++) { }`", "D. `while (let i = 0; i < length; i++) { }`"],
        correctAnswer: "A. `for (let i = 0; i < length; i++) { }`"
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        options: ["A. `==` checks for value equality, `===` checks for value and type equality", "B. `===` checks for value equality, `==` checks for value and type equality", "C. Both check for value equality", "D. Both check for value and type equality"],
        correctAnswer: "A. `==` checks for value equality, `===` checks for value and type equality"
    },
    {
        question: "How do you handle events in JavaScript?",
        options: ["A. By using `addEventListener`", "B. By using `attachEvent`", "C. By using `bindEvent`", "D. By using `setEvent`"],
        correctAnswer: "A. By using `addEventListener`"
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: ["A. It refers to the current object", "B. It creates a new object", "C. It defines a variable", "D. It performs a loop"],
        correctAnswer: "A. It refers to the current object"
    },
    {
        question: "How do you write an anonymous function in JavaScript?",
        options: ["A. `function() { }`", "B. `function name() { }`", "C. `func() { }`", "D. `fn() { }`"],
        correctAnswer: "A. `function() { }`"
    },
    {
        question: "What is the purpose of the `return` statement in JavaScript?",
        options: ["A. To return a value from a function", "B. To create a loop", "C. To define a variable", "D. To handle errors"],
        correctAnswer: "A. To return a value from a function"
    },
    {
        question: "How do you create an array of objects in JavaScript?",
        options: ["A. `let arr = [{}, {}];`", "B. `let arr = [obj1, obj2];`", "C. `let arr = {obj1, obj2};`", "D. `let arr = ({}, {});`"],
        correctAnswer: "A. `let arr = [{}, {}];`"
    },
    {
        question: "What is the use of `JSON.stringify()` in JavaScript?",
        options: ["A. To convert a JavaScript object to a JSON string", "B. To convert a JSON string to a JavaScript object", "C. To parse JSON data", "D. To merge two JSON objects"],
        correctAnswer: "A. To convert a JavaScript object to a JSON string"
    },
    {
        question: "How do you parse a JSON string in JavaScript?",
        options: ["A. `JSON.parse()`", "B. `JSON.stringify()`", "C. `JSON.decode()`", "D. `JSON.extract()`"],
        correctAnswer: "A. `JSON.parse()`"
    },
    {
        question: "What is the purpose of `localStorage` in JavaScript?",
        options: ["A. To store data locally in the user's browser", "B. To store data on the server", "C. To create cookies", "D. To store session data"],
        correctAnswer: "A. To store data locally in the user's browser"
    },
    {
        question: "How do you remove an item from an array in JavaScript?",
        options: ["A. `array.splice(index, 1)`", "B. `array.delete(index)`", "C. `array.remove(index)`", "D. `array.cut(index)`"],
        correctAnswer: "A. `array.splice(index, 1)`"
    },
    {
        question: "What is a callback function in JavaScript?",
        options: ["A. A function passed as an argument to another function", "B. A function that returns a value", "C. A function that is automatically executed", "D. A function that creates a new object"],
        correctAnswer: "A. A function passed as an argument to another function"
    },
    {
        question: "How do you handle errors in JavaScript?",
        options: ["A. Using `try...catch`", "B. Using `if...else`", "C. Using `switch...case`", "D. Using `for...loop`"],
        correctAnswer: "A. Using `try...catch`"
    },
    {
        question: "What is the purpose of the `try...catch` statement in JavaScript?",
        options: ["A. To handle exceptions", "B. To create a loop", "C. To define a variable", "D. To return a value"],
        correctAnswer: "A. To handle exceptions"
    },
    {
        question: "How do you create a promise in JavaScript?",
        options: ["A. `new Promise((resolve, reject) => { })`", "B. `Promise.create((resolve, reject) => { })`", "C. `Promise.new((resolve, reject) => { })`", "D. `Promise.make((resolve, reject) => { })`"],
        correctAnswer: "A. `new Promise((resolve, reject) => { })`"
    },
    {
        question: "What is the difference between `forEach` and `map` in JavaScript?",
        options: ["A. `forEach` doesn't return a new array, `map` does", "B. `map` doesn't return a new array, `forEach` does", "C. Both return new arrays", "D. Neither return new arrays"],
        correctAnswer: "A. `forEach` doesn't return a new array, `map` does"
    },
    {
        question: "How do you select an HTML element using JavaScript?",
        options: ["A. `document.querySelector()`", "B. `document.select()`", "C. `document.getElement()`", "D. `document.find()`"],
        correctAnswer: "A. `document.querySelector()`"
    },
    {
        question: "What is the purpose of `addEventListener` in JavaScript?",
        options: ["A. To attach an event handler to an element", "B. To remove an event handler from an element", "C. To prevent an event from occurring", "D. To trigger an event"],
        correctAnswer: "A. To attach an event handler to an element"
    },
    {
        question: "How do you change the content of an HTML element using JavaScript?",
        options: ["A. `element.innerHTML = 'new content'`", "B. `element.content = 'new content'`", "C. `element.textContent = 'new content'`", "D. `element.innerText = 'new content'`"],
        correctAnswer: "A. `element.innerHTML = 'new content'`"
    },
    {
        question: "What is the difference between `innerHTML` and `textContent` in JavaScript?",
        options: ["A. `innerHTML` returns HTML, `textContent` returns plain text", "B. `textContent` returns HTML, `innerHTML` returns plain text", "C. Both return HTML", "D. Both return plain text"],
        correctAnswer: "A. `innerHTML` returns HTML, `textContent` returns plain text"
    },
    {
        question: "How do you create a class in JavaScript?",
        options: ["A. `class ClassName { }`", "B. `function ClassName { }`", "C. `new ClassName { }`", "D. `define ClassName { }`"],
        correctAnswer: "A. `class ClassName { }`"
    },
    {
        question: "What is the purpose of the `prototype` in JavaScript?",
        options: ["A. To add properties and methods to an object", "B. To create a new object", "C. To define a variable", "D. To perform a loop"],
        correctAnswer: "A. To add properties and methods to an object"
    },
    {
        question: "How do you inherit properties from another object in JavaScript?",
        options: ["A. Using `Object.create()`", "B. Using `Object.inherit()`", "C. Using `Object.extend()`", "D. Using `Object.new()`"],
        correctAnswer: "A. Using `Object.create()`"
    },
    {
        question: "What is the difference between synchronous and asynchronous code in JavaScript?",
        options: ["A. Synchronous code is executed in order, asynchronous code is executed out of order", "B. Asynchronous code is executed in order, synchronous code is executed out of order", "C. Both are executed in order", "D. Both are executed out of order"],
        correctAnswer: "A. Synchronous code is executed in order, asynchronous code is executed out of order"
    },
    {
        question: "How do you create an interval timer in JavaScript?",
        options: ["A. `setInterval(function, time)`", "B. `setTimer(function, time)`", "C. `createInterval(function, time)`", "D. `createTimer(function, time)`"],
        correctAnswer: "A. `setInterval(function, time)`"
    },
    {
        question: "What is the purpose of `clearInterval` in JavaScript?",
        options: ["A. To stop an interval timer", "B. To start an interval timer", "C. To reset an interval timer", "D. To create an interval timer"],
        correctAnswer: "A. To stop an interval timer"
    },
    {
        question: "How do you make an HTTP request using JavaScript?",
        options: ["A. `fetch('url')`", "B. `http('url')`", "C. `request('url')`", "D. `get('url')`"],
        correctAnswer: "A. `fetch('url')`"
    },
    {
        question: "What is the difference between `fetch` and `XMLHttpRequest` in JavaScript?",
        options: ["A. `fetch` returns a promise, `XMLHttpRequest` does not", "B. `XMLHttpRequest` returns a promise, `fetch` does not", "C. Both return promises", "D. Neither return promises"],
        correctAnswer: "A. `fetch` returns a promise, `XMLHttpRequest` does not"
    },
    {
        question: "How do you handle JSON data in JavaScript?",
        options: ["A. Using `JSON.parse()` and `JSON.stringify()`", "B. Using `JSON.encode()` and `JSON.decode()`", "C. Using `JSON.create()` and `JSON.destroy()`", "D. Using `JSON.get()` and `JSON.set()`"],
        correctAnswer: "A. Using `JSON.parse()` and `JSON.stringify()`"
    },
    {
        question: "What is the use of `async` and `await` in JavaScript?",
        options: ["A. To handle asynchronous code more easily", "B. To handle synchronous code", "C. To create a new object", "D. To define a variable"],
        correctAnswer: "A. To handle asynchronous code more easily"
    },
    {
        question: "How do you manipulate the DOM using JavaScript?",
        options: ["A. By selecting and modifying HTML elements", "B. By creating new HTML elements", "C. By deleting HTML elements", "D. By all of the above"],
        correctAnswer: "D. By all of the above"
    },
    {
        question: "What is the purpose of `querySelector` in JavaScript?",
        options: ["A. To select the first element that matches a specified CSS selector", "B. To select all elements that match a specified CSS selector", "C. To create a new HTML element", "D. To delete an HTML element"],
        correctAnswer: "A. To select the first element that matches a specified CSS selector"
    },
    {
        question: "How do you remove a child element from the DOM in JavaScript?",
        options: ["A. `element.removeChild(child)`", "B. `element.deleteChild(child)`", "C. `element.remove(child)`", "D. `element.delete(child)`"],
        correctAnswer: "A. `element.removeChild(child)`"
    },
    {
        question: "What is the purpose of `event.preventDefault()` in JavaScript?",
        options: ["A. To prevent the default action of an event", "B. To create a new event", "C. To delete an event", "D. To stop an event from occurring"],
        correctAnswer: "A. To prevent the default action of an event"
    },
    {
        question: "How do you create an HTML element using JavaScript?",
        options: ["A. `document.createElement('tagName')`", "B. `document.newElement('tagName')`", "C. `document.makeElement('tagName')`", "D. `document.buildElement('tagName')`"],
        correctAnswer: "A. `document.createElement('tagName')`"
    },
    {
        question: "What is the purpose of the `switch` statement in JavaScript?",
        options: ["A. To perform different actions based on different conditions", "B. To create a loop", "C. To define a variable", "D. To return a value"],
        correctAnswer: "A. To perform different actions based on different conditions"
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        options: ["A. Using `typeof`", "B. Using `type`", "C. Using `checktype`", "D. Using `vartype`"],
        correctAnswer: "A. Using `typeof`"
    },
    {
        question: "What is the difference between `null` and `undefined` in JavaScript?",
        options: ["A. `null` is an assigned value, `undefined` means a variable has been declared but not assigned a value", "B. `undefined` is an assigned value, `null` means a variable has been declared but not assigned a value", "C. Both are assigned values", "D. Both mean a variable has been declared but not assigned a value"],
        correctAnswer: "A. `null` is an assigned value, `undefined` means a variable has been declared but not assigned a value"
    },
    {
        question: "How do you merge two arrays in JavaScript?",
        options: ["A. Using `array.concat(array2)`", "B. Using `array.append(array2)`", "C. Using `array.join(array2)`", "D. Using `array.merge(array2)`"],
        correctAnswer: "A. Using `array.concat(array2)`"
    },
    {
        question: "What is the use of the `splice` method in JavaScript?",
        options: ["A. To add or remove items from an array", "B. To join two arrays", "C. To reverse an array", "D. To sort an array"],
        correctAnswer: "A. To add or remove items from an array"
    },
    {
        question: "How do you clone an object in JavaScript?",
        options: ["A. Using `Object.assign({}, obj)`", "B. Using `Object.copy({}, obj)`", "C. Using `Object.duplicate({}, obj)`", "D. Using `Object.clone({}, obj)`"],
        correctAnswer: "A. Using `Object.assign({}, obj)`"
    }
];

export default quizData;
