const bcrypt = require('bcrypt');
const Visitor = require('../models/visitors');
const jwt = require('jsonwebtoken');

//controller for register
exports.register = async(req, res) => {
    try{

        //validate request
        if(!req.body){
            res.status(406).json({err: "You have to fill the registration form"});
            return;
        }
        
        let {name, contact, email, nic, password, confirmPassword} = req.body

        if (!name || !contact || !email || !nic || !password || !confirmPassword)
            return res.status(406).json({err: "Empty feilds"});

        if(password.length < 8)
            return res.status(406).json({err: "The password should contain atleast 8 characters"});

        if(password != confirmPassword)
            return res.status(500).json({err: "The password must be same for verification"});


        //hashing password
        const hash = await bcrypt.hashSync(password, 10)

        //using document structure
        const newVisitor = new Visitor({
            name,
            contact,
            email,
            nic,
            password: hash 
        })

        newVisitor
            .save(newVisitor)
            .then(register => {
                return res.json(register)
            })
            .catch(error => {
                res.status(406).json({err: error.message || "something went wrong while registration"})
            })

        // return res.json({name, contact, email, nic, hash, confirmPassword});
    }
    catch(error){
        res.status(500).json({err: error.message || "Error while registration"})
    }
    // res.json({message: 'Register Controller Response'})

};


//********************************************************************************************************* */

//controller for login
exports.login = async(req, res) => {

    try{
        //validate request
        if(!req.body){
            res.status(406).json({err: "You have to fill the email and password"})
            return;
        }
        
        //get user data
        const {email, password} = req.body

        //validation
        if(!email || !password)
            return res.status(406).json({err: "Empty feilds"});

        const visitor = await Visitor.findOne({email})
        if(!visitor)
            return res.status(406).json({err: "Does not exist any account for this email!"})


        // const visitor = "$2b$10$htYl6Dciv8HRhH4NpsGD9.Pk28m7C/KxSCWE8kuQFSOcZtzFCpXAi";

        //compare password
        const isMatch = await bcrypt.compare(password, visitor.password);
        
        if(!isMatch)
            return res.status(406).json({err: "Invalid Credentials"})

        //create jwt toekn
        const token = jwt.sign({id: visitor._id}, process.env.JWT_SECRET)

        res.json({token, Name: visitor.name, Email: visitor.email})

    }
    catch(error){
        res.status(500).json({err: error.message || "Error while login"})
    }

};

//********************************************************************************************************* */

//controller for delete
exports.delete = async(req, res) => {
    try{
        await Visitor.findByIdAndDelete(req.visitor_id)
        res.json({msg: "user deleted successfully!"})
    }
    catch(error){
        res.status(500).json({err: error.message || "Error while deleting visitor"})
    }
}
