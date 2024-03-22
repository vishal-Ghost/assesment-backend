const express = require('express')
const app = express()
const port = 80
const db = require('./models');
const cors =  require('cors')



db.sequelize.sync().then(()=>{
app.listen(port,()=>{
    console.log(`App is listening on ${port}`);
})
})

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

const userDataRoutes = require('./Routes/UserData')
const JwtAuthRoutes = require('./Routes/JwtAuth')

app.use('/api',  userDataRoutes);
app.use('/api',  JwtAuthRoutes);

