import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js'
import promtRoutes from './routes/promt.route.js'


const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use(cookieParser())

const URL = process.env.MongoDB_URI
// console.log(URL);

//connect mongodb
mongoose.connect(URL).then(()=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(error);
})

//routes
//user route
app.use("/api/v1/user", userRoutes)

//promt route
app.use("/api/v1/Deepseek", promtRoutes)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
