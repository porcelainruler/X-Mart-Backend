const nodemailer = require("nodemailer");
const EmailTemplate = require("email-templates").EmailTemplate;
const path = require("path");
const Promise = require("bluebird");
const fs = require("fs");

const pdfGenerator = require("./pdfGenerator");
const config = require("../config");

var transporter = nodemailer.createTransport({
  service: config.emailer.service,
  auth: {
    user: config.emailer.user,
    pass: config.emailer.pass,
  },
});

async function SendEmail(mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

async function loadTemplate(templateName, context) {
  const template = new EmailTemplate(path.join(__dirname, "templates", templateName));

  return new Promise((resolve, reject) => {
    template.render(context, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve({ email: result, context });
      }
    });
  });
}

module.exports.Mail = async (template, options) => {
  try {
    const emailContent = await loadTemplate(template, options);
    await SendEmail({
      to: emailContent.context.email,
      from: config.emailer.user,
      subject: emailContent.email.subject,
      html: emailContent.email.html,
      text: emailContent.email.text,
    });
  } catch (err) {
    console.log(err.message);
  }
};
