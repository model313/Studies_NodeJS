# Middleware?
Middleware in Express.js refers to functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application's request-response cycle. These functions are executed in the order they are defined.

Middleware helps separate concerns and manage complex routes efficiently.

```Request >> Middleware >> Response```
# Types of Middleware
1. Self-made
2. Express.js built-in
3. Third party