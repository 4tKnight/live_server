const express = require("express");
const router = express.Router();
const UserModel = require("./models/User");

//create account
router.post("/create_account", async (req, res) => {
    //destructure the request coming from the user
    const {email, password} = req.body;

    //check if all fields are filled
    if(!email || !password){
        return res.status(400).send({
            status:"error",
            msg:"Please enter all fields",
        })
    }

    try{
        //creating a user account based on the model
        const new_user = await UserModel.create({
            email,
            password
        });

        //returning a success response
        return res.status(200).send({
            status: "ok",
            msg:"success",
            user: new_user,
        })


    }catch(error){
        console.log(error);
    }

})


//login account


//fetch a user account


//update a user account


//delete a user account