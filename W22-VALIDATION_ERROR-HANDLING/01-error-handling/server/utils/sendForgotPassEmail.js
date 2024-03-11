import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export default async function sendMail(token, email) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Social App Wdpt018 👻" <developer@alkas.gr>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔ - instruction on how to recover your password", // Subject line
    text: "Please change your password", // plain text body
    html: `
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0;background-color: #000000;min-height:70vh;width:100%;">
        <p>Change password - Social App!</p>
        <p>Kindly click the following link to change your password</p>
        <a href="http://localhost:5173/changePass/${token}">Change Password</a>
      </body>
    </html>
  `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
