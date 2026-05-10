const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log("Transporter error: ", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: process.env.EMAIL_USER, // list of receivers (you)
    replyTo: email,
    subject: `New Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
