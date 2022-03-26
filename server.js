const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({path:"./config.env"})

//create express instance
const app = express();
app.use(express.json())

//routers


//import routes
const visitorsRoutes = require('./routes/visitors');
const hostsRoutes = require('./routes/hosts');
const appointmentsRoutes = require('./routes/appointments');
const routerRoutes = require('./routes/router');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(visitorsRoutes);
app.use(hostsRoutes);
app.use(appointmentsRoutes)
app.use(routerRoutes);


const PORT = process.env.PORT||8080;
const DB_URL = 'mongodb+srv://DasuniRJ:DRJ970403@vms.g11f9.mongodb.net/qless_vms?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

