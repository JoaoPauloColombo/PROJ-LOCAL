const express = require("express");
const app = express();
const port = 3002;

const router = require('./src/routers/router')

app.set('view engine', 'ejs');
app.set('views', 'src/view');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use("/", router);



app.listen(port, () => {
    console.log(`Servidor no ar com express http://localhost:${port}`);
})