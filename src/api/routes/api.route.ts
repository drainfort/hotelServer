import {Router} from "express";
import {HotelControllerImpl} from "../controllers/impl/hotel.controller.impl";
/**
 * Router of the server
 */
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

        //From File
        this.api.get('/api/hotel/', hotelController.getAll);

        //From Database
        this.api.get('/api/db/hotel', hotelController.getAllDB);
        this.api.get('/api/db/hotel/:id', hotelController.get);
        this.api.delete('/api/db/hotel/:id', hotelController.delete);
        this.api.put('/api/db/hotel/:id', hotelController.update);
        this.api.post('/api/db/hotel', hotelController.create);
    }
}
export default new ApiRouter().api;