require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const Menu = require('./model/menuSchema');
const app = express();
const cors = require('cors');
const bcyrpt = require('bcrypt')
const cookieParser = require('cookie-parser')


// Middleware
app.use(express.json());
app.use(cors());

// Port Configuration
const port = process.env.PORT;

// Connect to MongoDB
mongoose.connect(process.env.DB, { dbName: 'cafe' })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas')
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB Atlas', err)
        process.exit(1)
    })


// Define routes to handle menu
app.get('/api/get-menu', async (req, res) => {
    try {
        const items = await Menu.find({});
        res.status(200).send(items);
        console.log(items);
    } catch (error) {
        console.log({ message: error });
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

app.get('/api/get-menu/:category', async (req, res) => {
    try {
        const filteredMenu = req.params.category;
        const items = await Menu.find({ category: filteredMenu}).exec();
        res.status(200).send(items)
        console.log(items)
    } catch (error) {
        console.log({ message: error });
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

// Defines routes to handle authentication
app.post('/register', (req, res) => {
    const { username, password, email, phone } = req.body;
    bcyrpt.hash(password, 10).then((hash) => {
        // Store user details in MongoDB
        res.json({password: hash})
    })
})

registeredUsers = [
    {
        username : "Paulo",
        password: "$2b$10$CzibMeVoX.59oj4j0sNpVOFmWVKSuYIJBJ8P2CFYmJu/mVD0yckfK"
    },
    {
        username : "Aleyn",
        password: "Aleyn"
    },
    {
        username : "Rose",
        password: "Rose"
    }
]

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = registeredUsers.find((user) => user.username === username)
    if (!user) res.status(400).json({error: "User Not Exist"})
      const dbPassword = user.password;
      bcyrpt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json({error: "Incorrect Password"})
          } else {
            const accessToken = createTokens(user)
            // Store accessToken in cookie
            res.cookie("access-token", accessToken, { maxAge: 60*60, httpOnly: true})
            res.json("Logged In")
          }
    })
})

// Start Express Server
app.listen(port, () => {
    console.log(`Server listens on PORT ${port}`)
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    console.log('MongoDB connection closed through app termination')
    process.exit(0)
});