const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

// registrando um usuario
router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  if (
    name == null ||
    email == null ||
    password == null ||
    confirmpassword == null
  ) {
    return res
      .status(400)
      .json({ error: "Por favor, preencha todos os campos" });
  }

  //testando se as senhas são iguais
  if (password != confirmpassword) {
    return res.status(400).json({ error: "As senhas não conferem!!!" });
  }
});

module.exports = router;
