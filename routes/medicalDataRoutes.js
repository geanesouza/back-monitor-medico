const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const MedicalData = require("../models/MedicalData");

router.get('/', async (req, res) =>{
    //res.status(200).send("chegou!");

    const dataList = await MedicalData.find();

    if(!dataList) res.status(500).send({sucess: false})

    res.status(200).send(dataList);
});

router.get("/:id", async (req, res) => {
    const data = await MedicalData.findById(req.params.id);

    if(!data) res.status(500).json({message: "Data not found!" });

    res.status(200).send(data);
});

router.put("/:id", async (req, res) => {
    const data = await MedicalData.findByIdAndUpdate(
        req.params.id, 
        {
            diagnosis: req.body.diagnosis,
            consultationDate: req.body.consultationDate,
            symptoms: req.body.symptoms,
            medicines: req.body?.medicines
        },
        { new: true }    
    );

    if(!data) res.status(500).json({message: "Data not found!"});   

    res.status(200).send(data)
});

router.post("/", async(req, res) => {
    let data = new MedicalData({
        diagnosis: req.body.diagnosis,
        consultationDate: req.body.consultationDate,
        symptoms: req.body.symptoms,
        medicines: req.body?.medicines
    });

    data = await data.save();

    if(!data) return res.status(400).send("The data was not registered!")

    res.send(data);
});

router.delete("/:id", async(req, res) => {
    MedicalData.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            return res.status(200).json({sucess: true, message: "data deleted!"})
        } else {
            return res.status(404).json({sucess: false, message: "data not found!"})
        }
    })
    .catch((err)=>{
        return res.status(500).json({sucess: false, error: err})
    });
});

module.exports = router;

