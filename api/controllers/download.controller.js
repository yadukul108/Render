import nodemailer from "nodemailer";

// ✅ POST /api/download/send-pdf
export const sendPdfLink = async (req, res) => {
  try {
    const { name, email, phone, pdfLink } = req.body;

    if (!name || !email || !phone || !pdfLink) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Transporter setup (using Gmail for example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: `"Reports Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Requested Asset Report",
      html: `
        <p>Hello <b>${name}</b>,</p>
        <p>Thank you for requesting the asset report. Here is your download link:</p>
        <p><a href="${pdfLink}" target="_blank">Download PDF</a></p>
        <br/>
        <p>📞 Contact Phone (for our records): ${phone}</p>
        <p>Regards,<br/>Reports Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "PDF link sent successfully to email" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
