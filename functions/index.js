const functions = require("firebase-functions");
const usuarioController = require("./componentes/usuarios/UsuarioController.js")
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.creacionUsuario = functions.auth.user().onCreate(usuarioController.usuarioCreacionController)

exports.eliminacionUsuario = functions.auth.user().onDelete(usuarioController.usuarioEliminadoController)

exports.creacionUserCRM = functions.auth.user().onCreate(usuarioController.creacionUsuarioCRM)