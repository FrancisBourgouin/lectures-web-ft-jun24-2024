# What was hard?

- Props
- Children

# React!

React is a _library_ (framebrary)

## React !== JSX

JSX => JavaScript and XML

- Smells like HTML
- Looks like HTML
- Tastes like HTML
- BUT IT'S NOT HTML


JSX and HTML share 99% of HTML's behavior

```jsx
  <p className="" style={{marginTop:"1em"}}>Hello!</p>
```

## React Rendering Process

- EJS
  - Client asks for a route
  - Render EJS
  - Send HTML (generated from EJS)
  - Show on browser
  - Send a request with counter value incremented by 1
  - Render EJS
  - Send HTML (generated from EJS)
  - Show on browser

- jQuery
  - Client asks for a route
  - Render EJS and/or send HTML
  - ask jQuery to load on page
  - Send a request using AJAX 
  - We get the updated value
  - Modify the DOM with the new value

- React (Heavily Data Driven)
  - Client ask for a route
  - We send the HTML
  - load React 
  - load all states / props from React
  - Click on +1 of a counter
  - Create a SHADOW DOM
  - Apply the modified counter value in the SD
  - DIFF between shadow dom and dom
  - Rerender the page with the new content (NO RELOAD!)

## React is Component based

EJS
  - index.ejs
    - _header.ejs
    - _footer.ejs

## React props!
