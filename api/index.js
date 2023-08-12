const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User  = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'asffgggtbfdfdfghjccvgghhjjjkjjjjjffffjglgkdj';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
const PORT = process.env.PORT || 4000;

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

// FOR REGISTER PAGE
app.post('/register', async (req,res) => {
    const {username, email, password} = req.body;
    try {
        const userDoc = await User.create({
          username, 
          email, 
          password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    } catch (e) {
      console.log(e);
        res.status(400).json(e);
    }
});

// FOR LOGIN PAGE
// app.post('/login', async (req,res) => {
//   const {username, password} = req.body;
//       const userDoc = await User.findOne({username });
//       const passOk = bcrypt.compareSync(password, userDoc.password);
//       if (passOk) {
//         //login
//         jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
//           if (err) throw err;
//           // res.json(token);
//             res.cookie('token', token).json('ok');
//         });
//       } else {
//         res.status(400).json ("wrong credentials")
//       }
// });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    
// check if user is found 
    if (!userDoc) {
      // User not found
      res.status(400).json("User not found");
      return;
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // ... rest of the code for successful login
      jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
                  if (err) throw err;
                  // res.json(token);
                    res.cookie('token', token).json('ok');
                });
    } else {
      res.status(400).json("Wrong credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

