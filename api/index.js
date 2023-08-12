const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User  = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/mernblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// mongoose.connect('mongodb+srv://mernblog:admin1234@cluster0.0frsdlb.mongodb.net/?retryWrites=true&w=majority');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;


app.post('/register', async (req,res) => {
    const {username, email, password} = req.body;
    try {
        const userDoc = await User.create({username, email, password});
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

