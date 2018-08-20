import dataLoader from "../../helpers/dataLoader.helper"
import Hotel from "../../models/hotel.model";
import HotelDao from "../interface/hotel.dao";
import autobind from "autobind-decorator";
var MongoClient = require('mongodb').MongoClient;

export class HotelDaoImpl implements HotelDao{
    private urlDb: string;
    private dbName: string = "hotels";
    private collectionName: string = "hotels";


    constructor(){
        const env = process.env.NODE_ENV || "dev";
        const config = dataLoader.loadConfig(env.trim());
        this.urlDb = config.dbUrl;
    }

    @autobind
    public getAll(): Promise<Array<Hotel>>{
        let name = this.dbName;
        let collection = this.collectionName;
        let urlDb = this.urlDb;
        return new Promise(function(resolve, reject) {
            MongoClient.connect(urlDb, function(err, db) {
                if (err) throw err;
                var dbo = db.db(name);
                dbo.collection(collection).find({}).toArray(function(err, items) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(items);
                    }  
                });
            });
        });
    }

    @autobind
    public create(hotel:Hotel): Promise<Boolean>{
        let name = this.dbName;
        let collection = this.collectionName;
        let urlDb = this.urlDb;
        return new Promise(function(resolve, reject) {
            MongoClient.connect(urlDb, function(err, db) {
                if (err) throw err;
                var dbo = db.db(name);
                dbo.collection(collection).insertMany([hotel], function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(true);
                    }  
                });
            });
        });
    }

    @autobind
    public update(hotel: Hotel): Promise<Boolean>{
        let name = this.dbName;
        let collection = this.collectionName;
        let urlDb = this.urlDb;
        return new Promise(function(resolve, reject) {
            MongoClient.connect(urlDb, function(err, db) {
                if (err) throw err;
                var dbo = db.db(name);
                dbo.collection(collection).update({"id": hotel.id}, hotel, function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(true);
                    }  
                });
            });
        });
    }

    @autobind
    public delete(id: number): Promise<Boolean>{
        let name = this.dbName;
        let collection = this.collectionName;
        let urlDb = this.urlDb;
        return new Promise(function(resolve, reject) {
            MongoClient.connect(urlDb, function(err, db) {
                if (err) throw err;
                var dbo = db.db(name);
                dbo.collection(collection).deleteOne({"id": id}, function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(true);
                    }  
                });
            });
        });
    }

    @autobind
    public createAll(hotels: Array<Hotel>): Promise<Boolean>{
        let name = this.dbName;
        let collection = this.collectionName;
        let urlDb = this.urlDb;
        return new Promise(function(resolve, reject) {
            MongoClient.connect(urlDb, function(err, db) {
                if (err) throw err;
                var dbo = db.db(name);
                dbo.collection(collection).insertMany(hotels, function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(true);
                    }  
                });
            });
        });
    }

    @autobind
    public get(id: string): Promise<Array<Hotel>>{
        let name = this.dbName;
        let collection = this.collectionName;
        let urlDb = this.urlDb;
        return new Promise(function(resolve, reject) {
            MongoClient.connect(urlDb, function(err, db) {
                if (err) throw err;
                var dbo = db.db(name);
                dbo.collection(collection).find({"id": id}).toArray(function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(res);
                    }  
                });
            });
        });
    }
}