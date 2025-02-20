# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: failing to gracefully handle cases where data isn't found.  The original code throws a generic error message, whereas a proper solution should provide more detailed error information.

## Bug
The `bug.js` file contains an Express.js route handler that fetches user data. If the user isn't found, it sends a generic 'User not found' message. This lacks context for debugging.

## Solution
The `bugSolution.js` file shows how to improve the error handling.  Instead of a generic string, it sends a JSON object containing a more informative error message and an error code. This makes it easier for clients to handle the error appropriately.