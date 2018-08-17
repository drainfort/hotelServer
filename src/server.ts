import app from "./app"
import dataLoader from "./api/helpers/dataLoader.helper"

const env = process.env.NODE_ENV || "dev"
const config = dataLoader.loadConfig(env.trim());
const port = config.port || 3000;
app.listen(port, function() {
    console.log("Enviroment", env)
    console.log('Express server listening on port ' + port); 
});