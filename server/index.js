import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'

const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(express.json())

const URL = process.env.MongoDB_URI
// console.log(URL);

//connect mongodb
mongoose.connect(URL).then(()=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(error);
})

//routes
app.use("/api/v1/user", userRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
