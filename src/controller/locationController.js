const locationModel = require('../model/locationModel');

exports.getAllLocation = async (req, res) => {
    try {
        const location = await locationModel.getAllLocation();
        res.render("listLocation", { location: location });
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

exports.getContact = async (req, res) => {
    try {
        res.render("contact")
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
}

exports.getLocalizacao = async (req, res) => {
    try {
        res.render("localizacao")
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
}

exports.getHome = async (req, res) => {
    try {
        res.render("home")
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
}

exports.getNewContact = async (req, res) => {
    try {
        res.render("localizacao")
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
}

exports.postNewContact = async (req, res) => {
    try {
        const { estado, cidade, endereco } = req.body;
        res.render("localizacao", { successMessage: "Formulário enviado com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
}
