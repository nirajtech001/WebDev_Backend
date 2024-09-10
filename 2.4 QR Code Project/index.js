import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
 

inquirer
  .prompt([{

    message: "Type in your URL",
    name: "URL",
  }
  ])
  .then((answers) => {
    const ur = answers.URL;

    var qr_svg = qr.image(ur);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('test.txt', ur, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });