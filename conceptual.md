### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  The purpose of React Router is to enable the navigation among views of various components in a React Application. It allows navigating without refreshing the page and also allows us to use browser history features while preserving the right application view.

- What is a single page application?
  A single page application is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

- What are some differences between client side and server side routing?
  Server side routing needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other navigation or page change is just being rendered from the already saved application, so a client side application can still function without the internet as long as it has already being loaded in with the internet.

- What are two ways of handling redirects with React Router? When would you use each?

  1. The Redirect component from React Router: This is most useful if you would want to redirect a user to a certain url endpoint by default and requires a very small amount of code.
  2. The history object redirect: This is most commonly used when a form is filled out and you want to redirect the user to a different url.

- What are two different ways to handle page-not-found user experiences using React Router?
  You could either redirect the user, or you could render a component that displays 404 not found information. This can be done by creating a route enclosed in a Switch component and including it as the last listed route.

- How do you grab URL parameters from within a component using React Router?
  By using the built-in hook, useParams and destructing the returned object by the name listed in the URL.

- What is context in React? When would you use it?
  Context can be described as universal data across a React application. This is useful to prevent prop drilling/tunneling and requires much less repetition. It can be especially useful for global themes.

- Describe some differences between class-based components and function
  components in React.

  1. A class component requires you to extend from React. Component and create a render function which returns a React element wheras a functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
  2. Class components require different syntax to implement hooks.
  3. Class components must have the render() method returning JSX (which is syntactically similar to HTML)

- What are some of the problems that hooks were designed to solve?

1. Wrapper Hell:
2. Huge Components:
3. Confusiung Classes:
