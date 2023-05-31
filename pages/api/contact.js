import { config } from "dotenv";
config();
import nodemailer from "nodemailer";

export default async (req, res) => {
  // console.log("req.body", req.body);
  // console.log(process.env.SMTP_USER, process.env.SMTP_PASS);
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_ADD_ADDRESS,
      subject: `[ESG Master] ${name}님이 ESG에 대한 문의를 남겼습니다.`,
      html: `<p>You have a new contact form submission</p>
    <p><strong>Name: </strong> ${name}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Message: </strong> ${message}</p>
    `,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "error" });
  }

  return res.status(200).json({ message: "ok" });
};
