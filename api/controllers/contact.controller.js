import Contact from '../models/contact.model.js';
import nodemailer from 'nodemailer';

// configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // e.g. "allegro.hr@gmail.com"
    pass: process.env.EMAIL_PASS
  }
});

export const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to DB
    const contactEntry = new Contact({ name, email, message });
    await contactEntry.save();

    // Respond instantly after DB save
    res.status(200).json({ message: 'Message sent successfully' });

    // Send Email to HR in the background (fire-and-forget)
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission - Allegro Website',
      text: `
        You have received a new contact form submission:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions).catch((err) => {
      console.error('❌ Background contact email error:', err.message);
    });

  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ message: 'Failed to send message', error });
  }
};
