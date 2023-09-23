import nodemailer from "nodemailer";

export const userRegster = (req, res) => {

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth:{
            user: process.env.MAIL_ADDRESS,
            pass:  process.env.MAIL_PASSWOOD,
        }
    });

    res.status(200).json(req.body);
}