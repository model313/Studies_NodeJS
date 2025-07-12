https://www.w3schools.com/nodejs/nodejs_event_loop.asp

# Event Loop?
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by **offloading** operations to the system kernel whenever possible.

# Node.js Architecture Diagram

Here is a simple overview of how Node.js processes requests:

> **1. Client Request Phase**
> - Clients send requests to the Node.js server
> - Each request is added to the **Event Queue**
> 
> **2. Event Loop Phase**
> - The Event Loop continuously checks the **Event Queue**
> - Picks up requests one by one in a loop
> 
> **3. Request Processing**
> - Simple (non-blocking) tasks are handled immediately by the main thread
> - Complex/blocking tasks are offloaded to the Thread Pool
> 
> **4. Response Phase**
> - When blocking tasks complete, their callbacks are placed in the **Callback Queue**
> - Event Loop processes callbacks and sends responses

## How the Event Loop Works


Node.js follows these steps to handle operations:

1. Execute the main script (synchronous code)
2. Process any microtasks (Promises, process.nextTick)
3. Execute timers (setTimeout, setInterval)
4. Run I/O callbacks (file system, network operations)
5. Process setImmediate callbacks
6. Handle close events (like socket.on('close'))

## Why is the Event Loop Important?

The event loop enables Node.js to handle thousands of concurrent connections with a single thread, making it perfect for:

- Real-time applications
- APIs and microservices
- Data streaming
- Chat applications