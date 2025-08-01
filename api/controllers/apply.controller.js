import nodemailer from 'nodemailer';
import dotenv      from 'dotenv';
import Applicant   from '../models/apply.model.js';

dotenv.config();

export const handleApplication = async (req, res) => {
  const { name, email, phone, linkedin } = req.body;
  const resume = req.file;                       // parsed by Multer
 const existing = await Applicant.findOne({ email }); // or { linkedin }

    if (existing) {
      return res.status(400).json({ message: 'You have already submitted an application.' });
    }
  if (!resume) {
    return res.status(400).json({ message: 'Resume file is missing' });
  }

  try {
    /* ---------- 1. Save applicant in MongoDB ---------- */
    await Applicant.create({
      name,
      email,
      phone,
      linkedin,
      resumeName:   resume.originalname,
      resumeBuffer: resume.buffer,
    });

    /* ---------- 2. Set up Nodemailer ---------- */
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // your@gmail.com
        pass: process.env.EMAIL_PASS, // 16‑char App Password
      },
    });

    /* ---------- 3. E‑mail HR ---------- */
    await transporter.sendMail({
      from: `"Allegro Careers" <${process.env.EMAIL_USER}>`,
      to:   process.env.EMAIL_USER,
      subject: `New Application from ${name}`,
      html: `
        <h3>New Applicant Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content:  resume.buffer,
        },
      ],
    });

    /* ---------- 4. Confirmation mail to applicant ---------- */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to:   email,
      subject: 'Allegro Advisors – Application Received',
      html: `<p>Dear ${name},</p><p>Thank you for applying. We’ve received your application and will get back to you shortly.</p>`,
    });

    res.status(200).json({ message: 'Application submitted and stored successfully' });
  } catch (err) {
    console.error('❌ Application Error:', err);
    res.status(500).json({
      message: 'Failed to process application',
      error:   err.message,
    });
  }
};
