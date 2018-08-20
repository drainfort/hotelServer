
import {NextFunction, Request, Response} from "express";

export default interface HotelController {
    
    /**
     * Get all hotels from file
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    getAll(req: Request, res: Response, next: NextFunction);

    /**
     * Get all hotels from database
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    getAllDB(req: Request, res: Response, next: NextFunction);

    /**
     * Create hotel in db
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    create(req: Request, res: Response, next: NextFunction);

    /**
     * Update specific hotel
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    update(req: Request, res: Response, next: NextFunction);

    /**
     * Get an specific hotel of db
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    get(req: Request, res: Response, next: NextFunction);

    /**
     * Delete an specific hotel of db
     * @param {e.Request} req: Request for this endPoint
     * @param {Response} res: Http response with the hotels
     * @param {e.NextFunction} next
     */
    delete(req: Request, res: Response, next: NextFunction);
}