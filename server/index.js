        const express = require('express');
const App = express();
const cors = require('cors')
const port = 1688;
const User = require('./models/userschema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors(
    {
        origin: ['http://localhost:5173'],
        methods: ['GET','POST'],
        credentials:true
      }
));
App.use(cookieParser())

App.get('/', (req, res) => {
    res.send('Hello!')
})


App.post('/register', async (req, res) => {
    try {
        // Get all data from body
        const { name, email, password } = req.body;
        
        // Check if all the fields exist
        if (!(name && email && password)) {
            return res.status(400).send('All fields are compulsory');
        }
        
        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).send('User already exists');
        }
        
        // Encrypt the password
        const encryptedPassword = await bcrypt.hash(password, 10);
        
        // Generate a token for the user data
        const token = jwt.sign(
            { email },
            'saurav', // Secret key for signing the token
            { expiresIn: '2h' }
        );
        
        // Create new user with token
        const userData = await User.create({ name, email, password: encryptedPassword, token });
        
        // Remove password from response
        userData.password = undefined;
        
        // Send response with user data including token
        res.status(201).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

App.post('/login',async (req,res)=>{
    try {
        //get all data from body
        const {email,password}=req.body;
        //validation
        if(!(email && password)){
            res.status(400).send('send all data')
        }
        //find user in DB
        const validUser= await User.findOne({email})
        //user exist 
        // if (validUser) {
        //     return res.status(201).send('User exist');
        // }
        // else{ return res.status(401).send('user does not exist')}
        //match the password
        if (validUser && await bcrypt.compare(password, validUser.password)){
            const token=jwt.sign(
                {id:validUser._id},
                'saurav',
                {expiresIn: '2h'}
            );
            validUser.token=token;
            validUser.password= undefined;
            //cookies section
            const options={
                expires:new Date(Date.now()+ 3*24*60*60*1000),
                httpOnly:true
            }
            // console.log(options)
            res.status(200).cookie('token',token,options).json({
                success:true,
                token,
                validUser
            })
        }
        //send a token
    } catch (error) {
        
    }
})



App.get('/home', async (req, res) => {
    // Grab token from cookie
    console.log(req.cookies);
    const token = req.cookies.token;
    // console.log("Token:  ",token);
    // If no token, stop
    if (!token) {
        return res.status(403).send('Please login first');
    }
    // If token is present, proceed
    // Decode the token to get the user ID
    jwt.verify(token, 'saurav',async (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid token');
        } else {
            // Query the database for the user ID
            const userId = decoded.id;
            // Now you can use the userId to fetch user data from the database
            // For example:
          
            const Data =await User.findOne({_id:userId}).exec();
            res.status(200).send(Data);
        }
    });
});


App.listen(port, () => {
    console.log('connected data')
})