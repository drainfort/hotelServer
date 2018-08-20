import HotelController from "../interface/hotel.controller";
import { NextFunction, Request, Response } from "express";
import dataLoader from "../../helpers/dataLoader.helper";
import { HotelDaoImpl } from "../../dao/impl/hotel.dao.impl";
import HotelDao from "../../dao/interface/hotel.dao";
import autobind from 'autobind-decorator';

export class HotelControllerImpl implements HotelController {

    private hotelsDao: HotelDao = new HotelDaoImpl();

    @autobind
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

    @autobind
    getAllDB(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id;

        this.hotelsDao.getAll().then(function(result){
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json("Internal server error");
        });
    }

    @autobind
    get(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id;

        this.hotelsDao.get(id).then(function(result){
            if(result.length>0){
                delete result[0]["_id"]
                res.status(200).json(result[0]);
            }
            else{
                res.status(404).json("Not found");
            }
        });
    }

    @autobind
    create(req: Request, res: Response, next: NextFunction) {
        let hotel = req.body;
        let dao = this.hotelsDao;
        dao.get(hotel.id).then(function(result){
            if(result.length==0){
                dao.create(hotel).then(function(result){
                    res.status(200).json("Created"); 
                })
                .catch((err) => {
                    res.status(500).json("Error in creation");
                });
            }
            else{
                res.status(400).json("Already exists");
            }
        });
        
    }

    @autobind
    delete(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id;

        this.hotelsDao.delete(id).then(function(result){
            res.status(200).json("Deleted");
        })
        .catch((err) => {
            res.status(500).json("Internal server error");
        });
    }

    @autobind
    update(req: Request, res: Response, next: NextFunction) {
        let hotel = req.body;
        let id = req.params.id;
        let dao = this.hotelsDao;
        dao.get(id).then(function(result){
            if(result.length==0){
                res.status(400).json("Not found");
            }
            else{
                hotel.id = id;
                dao.update(hotel).then(function(result){
                    res.status(200).json("Updated");
                })
                .catch((err) => {
                    res.status(500).json("Internal server error");
                });
            }
        });
    }
}