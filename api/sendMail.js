const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3001



// Middleware to parse JSON
app.use(express.json());

// Rout handler to send the mail
app.post('/sendMail', async (req, res) => {
    const { name, email, subject, comment } = req.body;

    // Configure the transport to mail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nComment:\n${comment}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email Send Correctly'});
    } catch (error) {
        res.status(500).json({ error: Error})
    }
});

// Initializing server
app.listen(port, ()=> {
    console.log(`Server Listen in http://localhost:${port}`);
    
})