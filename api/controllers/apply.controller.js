import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Applicant from '../models/apply.model.js';

dotenv.config();

export const handleApplication = async (req, res) => {
  const { name, email, phone, linkedin } = req.body;
  const resume = req.file; // parsed by Multer

  if (!resume) {
    return res.status(400).json({ message: 'Resume file is missing' });
  }

  try {
    /* ---------- 1. Check existing applicant ---------- */
    const existing = await Applicant.findOne({ email });

    if (existing) {
      const now = new Date();
      const lastApplied = new Date(existing.appliedAt);
      const diffDays = Math.floor((now - lastApplied) / (1000 * 60 * 60 * 24)); // difference in days

      if (diffDays < 30) {
        return res.status(400).json({
          message: `You can reapply only after ${30 - diffDays} days.`,
        });
      }

      // If more than 30 days → update old application with new resume
      existing.name = name;
      existing.phone = phone;
      existing.linkedin = linkedin;
      existing.resumeName = resume.originalname;
      existing.resumeBuffer = resume.buffer;
      existing.appliedAt = now;
      await existing.save();
    } else {
      /* ---------- 2. Save new applicant ---------- */
      await Applicant.create({
        name,
        email,
        phone,
        linkedin,
        resumeName: resume.originalname,
        resumeBuffer: resume.buffer,
        appliedAt: new Date(),
      });
    }

    /* ---------- 3. Set up Nodemailer ---------- */
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ---------- 4. E-mail HR ---------- */
    await transporter.sendMail({
      from: `"Allegro Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
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
          content: resume.buffer,
        },
      ],
    });

    /* ---------- 5. Confirmation mail to applicant ---------- */
    await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: 'Allegro Advisors – Application Received',
  html: `
    <p>Dear ${name},</p>
    <p>Thank you for applying. We’ve received your application and will get back to you shortly.</p>
    <br/>
    <p>Best regards,</p>
    <img src="https://res.cloudinary.com/dbnutkmr7/image/upload/v1756328479/logo-dark-new_hwjg0s.png" alt="Allegro Advisors" width="120"/>

    <p style="color:gray; font-size:12px;">
      Allegro Capital Pvt. Ltd.<br/>
      XH8X+PV4, D'Souza Rd, Ashok Nagar,<br/>
      Bengaluru, Karnataka 560025<br/>
      📞 +91 98765 43210 | ✉️ contact@allegroadvisors.com
    </p>
  `,
});


    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error('❌ Application Error:', err);
    res.status(500).json({
      message: 'Failed to process application',
      error: err.message,
    });
  }
};
