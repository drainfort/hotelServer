import Hotel from "../models/hotel.model"
import * as fs from "fs";
import Config from "../models/config.model";

class DataLoader {
	
	loadFile(fileLocation: string){
		var rawData = fs.readFileSync(fileLocation, 'utf8');
		return JSON.parse(rawData) as Array<Hotel>;
	}

	loadConfig(env: string){
		var rawData = fs.readFileSync("./config/"+env+".json", 'utf8');
		return JSON.parse(rawData) as Config;
	}
}

export default new DataLoader();