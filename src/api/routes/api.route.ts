import {Router} from "express";
import {HotelControllerImpl} from "../controllers/impl/hotel.controller.impl";
class ApiRouter{
    public api: Router;

    constructor() {
        this.api = Router();
        this.routes();
    }

    routes(): void {
        const hotelController = new HotelControllerImpl();
        this.api.get('/', (req, res) => {
            res.json("Welcome to the server!");
        })

        this.api.get('/api/hotel/', hotelController.getAll);
    }
}
export default new ApiRouter().api;