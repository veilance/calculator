const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const router = express.Router();
const jsonParser = bodyParser.json();

module.exports = (knex) => {
  router.post("/login", jsonParser, (req, res) => {
    if (!req.body?.password || !req.body?.email) {
      return res.status(400).send({
        message: "Required fields missing",
      });
    }

    knex("user")
      .where("email", req.body.email)
      .then((data) => {
        const user = data[0];
        const generatedHash = crypto
          .pbkdf2Sync(req.body?.password, user.salt, 1000, 64, `sha512`)
          .toString(`hex`);

        if (generatedHash === user.hash) {
          return res.status(201).send({
            message: "User Logged In",
          });
        } else {
          return res.sendStatus(400);
        }
      })
      .catch(() => {
        return res.status(400).send({
          message: "User not found.",
        });
      });
  });

  router.post("/signup", jsonParser, (req, res) => {
    if (!req.body?.password || !req.body?.email) {
      return res.status(403).send({
        message: "Error registering email",
      });
    }

    const data = req.body;

    const newUser = {
      email: data.email,
    };

    newUser.salt = crypto.randomBytes(16).toString("hex");
    newUser.hash = crypto
      .pbkdf2Sync(data.password, newUser.salt, 1000, 64, `sha512`)
      .toString(`hex`);

    knex("user")
      .insert(newUser)
      .then(() => {
        return res.status(201).send({
          message: "User created successfully",
        });
      })
      .catch(() => {
        return res.status(403).send({
          message: "Error registering email",
        });
      });
  });

  return router;
};
