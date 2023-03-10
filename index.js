const express = require('express');
const app = express();
const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());
const port = 3000;
const testController = require('./controller/testController.js');
app.use('/test', testController);

app.get('/', function(req, res){
    res.send("Server is up!");
 });
 


app.listen(port,()=>{
    console.log(`App listent to Port No : ${port}`);
});