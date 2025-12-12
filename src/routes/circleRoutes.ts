import express, { Request, Response } from 'express';
import path from 'path';
import { handleError } from '../middleware/errorHandler';
import { ensureAuthenticated } from '../middleware/authMiddleware';


const router = express.Router();

router.get('/circle', ensureAuthenticated, (req: Request, res: Response) => {

    const filePath = path.join(__dirname, '..', 'public', 'circle.html');
    console.log(filePath)
    

    res.sendFile(filePath);
});

router.use(handleError);

export { router };