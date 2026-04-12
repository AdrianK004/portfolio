const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurimi i Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Email-i yt
    pass: process.env.EMAIL_PASS, // App password (jo fjalëkalimi i zakonshëm)
  },
});

// Endpoint për dërgimin e email-it
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validimi
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    // Email për ty (njoftim)
    const mailToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email konfirmimi për klientin (opsionale)
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your message',
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Adrian Krasniqi</p>
      `,
    };

    await transporter.sendMail(mailToAdmin);
    await transporter.sendMail(mailToClient);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});