import { Request, Response, NextFunction } from 'express';

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    // Check if the loggedInUserId exists in the session
    if (req.session.userId) {
        // User is logged in, proceed to the next handler/route
        next();
    } else {

        console.log('Access denied. Redirecting to login.');
        res.redirect('/'); 
    }
};