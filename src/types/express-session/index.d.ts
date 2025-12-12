import 'express-session';

declare module 'express-session' {
    interface SessionData {
        // This is the "Metal Badge" (Permanent Login)
        userId?: string;
        
        // These are the "Sticky Notes" (Temporary Login flow)
        loggedInUserId?: string;
        currentChallenge?: string;
    }
}