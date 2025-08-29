import nodemailer from "nodemailer";
import Visitor from "../models/visitor.model.js"; // ✅ import schema

// ✅ POST /api/download/send-pdf
export const sendPdfLink = async (req, res) => {
  try {
    const { name, email, phone, occupation, purpose, pdfLink } = req.body;

    if (!name || !email || !phone || !occupation || !purpose || !pdfLink) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: `"Allegro Capital Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Requested File",
      html: `
        <p>Hello <b>${name}</b>,</p>
        <p>Thank you for requesting our file. Here is your download link:</p>
        <p><a href="${pdfLink}" target="_blank">Download PDF</a></p>
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
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    // ✅ Save in DB only if email was sent successfully
    await Visitor.create({
      name,
      email,
      phoneNumber: phone,
      occupation,
      purpose,
    });

    res.json({ success: true, message: "PDF link sent and details saved" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
