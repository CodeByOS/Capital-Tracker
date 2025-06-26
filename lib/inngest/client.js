import { Inngest } from "inngest";

// Create a client to send and recieve events
export const inngest = new Inngest({ 
    id: "capitalTracker", 
    name: "Capital Tracker",
    retryFunction: async(attempt) => ({
        delay: Math.pow(2, attempt) * 1000, //* Exponential backoff
        maxAttempts: 2,
    })
 });