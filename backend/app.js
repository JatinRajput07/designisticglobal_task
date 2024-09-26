const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path')
const apirouter = require('./routers/index')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb+srv://Jatin:sngwhsjSBerRQFnp@cluster0.xoxna.mongodb.net/designgloble?retryWrites=true&w=majority', {
}).then(() => console.log('DB Connected..')).catch(err => console.log(err))


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api' , apirouter)


const PORT =  process.env.PORT || 5200
app.listen(PORT,()=>{
    console.log('server running port 5200...')
})