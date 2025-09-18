flex: n% refers to the main axis (axis: horizontal, vertical) of the flex container (flex-direction: row; column) -->
width/height: n% of its parent’s width.
some ancestor must have a fixed (non-percentage) size—like px, em, rem, or vh/vw

display: flex
- horizontal centering 
- vertical centering

width is defined in html by default height does not

margin order: top right bottom left

## 🧱 What Actually Gets Displayed

The `<html>` and `<body>` elements do exist in the browser’s rendering tree, but they’re not typically visually distinct unless you style them.

By default, the browser renders the contents inside `<body>`, and both `<html>` and `<body>` act as structural containers.

---

## 🧭 Breakdown

| Element                  | Role in Rendering         | Visible by Default? | Can Be Styled? |
|--------------------------|---------------------------|----------------------|----------------|
| `<html>`                 | Root of the document      | No (unless styled)   | ✅ Yes          |
| `<body>`                 | Main content container    | No (unless styled)   | ✅ Yes          |
| Content

## 🧠 `window.onload` vs `DOMContentLoaded`

Both are used to run JavaScript after the page loads, but they trigger at different times:

| **Event**             | **Fires When...**                                           |
|-----------------------|-------------------------------------------------------------|
| `DOMContentLoaded`    | The HTML is fully parsed and the DOM is ready

## 🍪 Why Use Cookies?

Cookies let you **persist data across sessions**. This means that even if the user closes the browser or reloads the page, you can still access previously saved information.

In the context of a task manager:
- You can store the to-do list in a cookie.
- When the user returns, you read the cookie and rebuild the list using `addTodo()`.

---

### 🕒 Making Cookies Last Longer

By default, cookies expire when the browser session ends. To make them

## 🛠️ How to Fix Cookie Issues in Local HTML Projects

To make cookies (and other storage features) work reliably, you need to serve your HTML file through a **local web server**. Browsers restrict features like cookies and `localStorage` when using `file://` URLs. Here are a few easy options:

---

### ✅ Option 1: Use VS Code + Live Server

If you have [Visual Studio Code](https://code.visualstudio.com/), install the **Live Server** extension:

1. Open your project folder in VS Code  
2. Right-click your `index.html` file  
3. Select **"Open with Live Server"**

This will launch your page at `http://localhost:5500`, and cookies will work perfectly.

---

### 🧠 Why This Matters

Browsers treat `file://` pages as **isolated and insecure**, so they block:
- Cookies
- `localStorage`
- Other web APIs

Switching to `http://localhost` solves this and ensures your app behaves like it would in production.

---

Let me know if you'd like help setting up a server

https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd