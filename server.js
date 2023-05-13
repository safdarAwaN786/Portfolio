const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require('@sendgrid/mail');
const path = require("path");




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
sgMail.setApiKey("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");




app.post("/send-message", (req, res) => {
    console.log(req.body);

    const msg = {
        to: "safdarstudent@gmail.com", // replace with recipient email address
        from: "developersafdar@gmail.com", // replace with your email address
        subject: "Client Message",
        html: `
            <html>
              <head>
                <style>
                  /* Add styles to your email */
                  body {
                    font-family: Arial, sans-serif;
                  }
                  h1 {
                    color: #003366;
                  }
                  p {
                    color: #333333;
                  }
                </style>
              </head>
              <body>
                <h1>New message from ${req.body.name}</h1>
                <p><strong>Subject:</strong> ${req.body.subject}</p>
                <p><strong>Message:</strong> ${req.body.message}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
              </body>
            </html>
          `,
    };
    sgMail.send(msg)
        .then(() => {
            console.log('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
        });
})


app.listen(5000, () => {
    console.log("Server is running");
})


app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }, 
    );
});