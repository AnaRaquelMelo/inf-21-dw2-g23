exports.getFilmeList = (req, res) => {
  console.log("lista filmes");
};

const userService = require("../services/user-service");

//GET '/tea'
const getAllUsers = (req, res, next) => {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

//POST '/tea'
const newUser = (req, res, next) => {
  res.json({ message: "POST new user" });
};

//DELETE '/tea'
const deleteAllUsers = (req, res, next) => {
  res.json({ message: "DELETE all users" });
};

//GET '/tea/:name'
const getUser = (req, res, next) => {
  res.json({ message: "GET 1 user" });
};

//DELETE '/tea/:name'
const deleteUser = (req, res, next) => {
  res.json({ message: "DELETE 1 tea" });
};

//export controller functions
module.exports = {
  getAllUsers,
  newUser,
  deleteAllUsers,
  getUser,
  deleteUser,
};

const FilmeModel = require("../Models/filme.model");

exports.getFilmes = (req, res) => {
  FilmeModel.getAll((err, filmes) => {
    if (err) res.send(err);

    res.send(filmes);
  });
};

exports.getFilmeById = (req, res) => {
  FilmeModel.getById(+req.params.id, (err, filme) => {
    if (err) res.send(err);

    res.send(filme);
  });
};

exports.createFilme = (req, res) => {
  FilmeModel.createFilme(req.body, (err, filme) => {
    if (err) res.send(err);

    res.send(filme);
  });
};

exports.deleteFilme = (req, res) => {
  FilmeModel.deleteFilme(+req.params.id, (err, id) => {
    if (err) res.send(err);

    res.send({ id });
  });
};
