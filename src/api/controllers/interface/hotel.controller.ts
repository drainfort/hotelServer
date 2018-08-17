
import {NextFunction, Request, Response} from "express";

export default interface HotelController {
    
    /**
     * Get all hotels
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    getAll(req: Request, res: Response, next: NextFunction);
}