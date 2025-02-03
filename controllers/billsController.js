const billModel = require("../models/billsmodel")


//add items

const addBillsController = async (req,res) =>{
    try{
        const newBill = new billModel(req.body);
        await newBill.save();
        res.status(201).send("Bill Created Successfully!");

    } catch (error){
        res.status(400).send("error", error);
        console.log(error);
    }
};


const getBillsController = async (req,res) => {
    try {
        const bills = await billModel.find();
        res.send(bills);

    }  catch(error){
        console.log(error);
    }
}


module.exports = {addBillsController , getBillsController}