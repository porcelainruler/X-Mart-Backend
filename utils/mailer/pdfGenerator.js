const puppeteer = require("puppeteer");
const fsExtra = require("fs-extra");
const fs = require("fs");
const hbs = require("handlebars");
const path = require("path");

async function Compile(template, data) {
  const filePath = path.join(process.cwd(), "mailer/templates", `${template}.hbs`);
  const html = await fsExtra.readFile(filePath, "utf-8");
  return hbs.compile(html)(data);
}

module.exports.GeneratePDF = async (data, template, filePath, fileName) => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = await Compile(template, data);
    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: `${filePath}/${fileName}`,
      format: "A4",
      printBackground: true,
    });
    await browser.close();
  } catch (err) {
    console.log(err.message);
  }
};
