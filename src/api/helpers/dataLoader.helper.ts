import Hotel from "../models/hotel.model"
import * as fs from "fs";
import Config from "../models/config.model";

/**
 * Class to load information from files
 */
class DataLoader {
	/**
	 * Load the json file of the hotels
	 * @param fileLocation File Location
	 */
	loadFile(fileLocation: string){
		var rawData = fs.readFileSync(fileLocation, 'utf8');
		return JSON.parse(rawData) as Array<Hotel>;
	}

	/**
	 * Load configuration file
	 * @param env Enviroment
	 */
	loadConfig(env: string){
		var rawData = fs.readFileSync("./config/"+env+".json", 'utf8');
		return JSON.parse(rawData) as Config;
	}
}

export default new DataLoader();