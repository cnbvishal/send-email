const nodemailer = require("nodemailer");


module.exports = async (cid, ctoken) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: "gmail",
      port: Number(process.env.EMAIL_PORT),
      secure: "true",
      auth: {
        user: 'demoraj311@gmail.com',
        pass: 'hskbkesyeabnhrfu',
      },
    });
    console.log(cid)
    console.log(ctoken)

    await transporter.sendMail({
      from: process.env.USER,
      to: "vishalraj170620196@gmail.com",
      subject: "testing",
      text: 'Hello,\n Welcome. Please click on the link to verify your account.\n',
      html: `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
      </head>
      <body>
        <table style="max-width: 600px; margin: 0 auto; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f8f8; border: 1px solid #ebebeb;" cellspacing="0" borderspacing="0">
          <tr>
            <td style="padding: 15px;">
              <table style="text-align: center; border: 1px solid #ebebeb;">
                <tr>
                  <td style="padding: 0 15px;">
                    <h3 style="font-size: 28px; margin: 35px 0 20px;">
                      Welcome !
                    </h3>
                    <p style="font-size: 16px; line-height: 27px;">
                      Thanks for signing up with Identity Manager. <span style="font-weight: 500;">Please activate your account by verifying your email address-</span>
                    </p>
                    <a href="http://localhost:3000/users/${cid}/verify/${ctoken}" style="margin: 10px 0 30px; display: inline-block; text-decoration: none; font-size: 16px; border: none; line-height: 22px; padding: 12px 20px; border-radius: 4px; background: #00AEEF; color: #ffffff;">Verify Email</a>
                    <p style="font-size: 16px; line-height: 27px; text-align: left;">
                      Once activated, you’ll have full access to the plan of your choosing. 
                      This link will expire in 10 minutes. <br> <br> If you have any trouble verifying your account, please contact our <a href="mailto:test@test.com" style="text-decoration: none; color: #00AEEF;">support team.</a>
                    </p>
                    <p style="font-size: 16px; line-height: 27px; margin: 30px 0 40px; text-align: left; border-top: 1px solid #ebebeb; padding-top: 15px;">
                      Thank you!
                    </p>
                  </td>
                </tr>
              </table>   
            </td>
          </tr>
        </table>
      </body>
      </html>`
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
