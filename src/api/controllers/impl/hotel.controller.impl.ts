import HotelController from "../interface/hotel.controller";
import { NextFunction, Request, Response } from "express";
import dataLoader from "../../helpers/dataLoader.helper";

export class HotelControllerImpl implements HotelController {
    getAll(req: Request, res: Response, next: NextFunction) {
        var hotels = dataLoader.loadFile('./data/data.json');
        var namefilter = req.query.name;
        var filterHotels = hotels;
        if(namefilter){
            filterHotels = filterHotels.filter(hotel => hotel.name.toLowerCase().indexOf(namefilter.toLowerCase()) >= 0)
        }
        if(req.query.stars){
            var starfilter = req.query.stars.split(",");
            filterHotels = filterHotels.filter(hotel => starfilter.indexOf(hotel.stars+'') >= 0)
        }
        res.status(200).json(filterHotels);
    }
}