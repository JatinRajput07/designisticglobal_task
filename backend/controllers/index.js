const Contect = require("../models/contect");
const Apply = require('../models/apply');
const { upload } = require("../Helpers/index");


exports.contect = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, subject, message } = req.body;
        const contect = await Contect.create({ firstName, lastName, email, phone, subject, message });
        return res.status(200).json({
            status: 200,
            message: "Submitted successfully.",
            data: contect,
        });

    } catch (error) {
        console.error("Error while submitting contact form:", error);
        return res.status(401).json({
            status: 500,
            message: "submitting Wrong. Please try again.",
        });
    }
}


exports.apply = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { email, name, phone, title } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'CV file is required' });
        }
        const cvPath = `/uploads/${req.file.filename}`;
        try {
            const applicationData = {
                email,
                name,
                phone,
                title,
                cv: cvPath,
            };
            const newApplication = new Apply(applicationData);
            await newApplication.save();
            res.status(201).json({
                message: 'Application submitted successfully',
                data: applicationData,
            });
        } catch (error) {
            console.error('Error saving application:', error);
            res.status(500).json({ message: 'Error submitting application', error });
        }
    });
};



exports.getApplications = async(req,res)=>{
    try {
        const applications = await Apply.find();
        res.status(200).json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: 'Error fetching applications' });
    }
}



