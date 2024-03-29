// importing express
const express = require("express");
const Model = require("../models/equipmentModel");
const router = express.Router();

router.get("/home", (req, res) => {
  console.log("a request at user home");
  res.send("you have found user Home");
});

router.post("/add", (req, res) => {
  console.log(req.body);
  // for storing data in database
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user saved!");
      res.json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(200).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("data fetched from user");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyseller/:id", (req, res) => {
  Model.find({ seller: req.params.id })
    .then((data) => {
      console.log("data fetched from user");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/authentication", (req, res) => {
  const formdata = req.body;
  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      console.log("data saved");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.get("/getbyitem/:id", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      console.log("fetched by id");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
