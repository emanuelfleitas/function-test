const functions = require("firebase-functions");
const usuarioController = require("./componentes/usuarios/UsuarioController.js")
const postsController = require("./componentes/posts/PostsController.js")
const notificacionesController = require("./componentes/notificaciones/NotificacionesController.js")
const admin = require('firebase-admin')

// var serviceAccount = require("./seclearrviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://platzi-course-web.firebaseio.com"
// });
// exports.creacionUsuario = functions.auth.user().onCreate(usuarioController.usuarioCreacionController)

// exports.eliminacionUsuario = functions.auth.user().onDelete(usuarioController.usuarioEliminadoController)
// exports.creacionUserCRM = functions.auth.user().onCreate(usuarioController.creacionUsuarioCRM)

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// exports.logueado = functions.https.onRequest((request, response) => {


// });

exports.probando = functions.https.onRequest


exports.registrarTopico = functions.firestore
        .document('tokens/{id}')
        .onCreate(
          notificacionesController.creacionTokenController
        )

// Cuando la aplicación envía una notificación
exports.enviarNotificacion = functions.firestore
        .document('posts/{idPost}')
        .onUpdate(
          postsController.actualizacionPostController
        )

// firebase functions:config:set configuration.email="XXXX" configuration.password="XXXXXX"
// firebase functions:config:set configuration.claveapihubspot="XXXX"
// firebase functions:config:set configuration.numcelularerror="XXXX"
// firebase functions:config:set configuration.accountsidtwilio="XXXX"
// firebase functions:config:set configuration.authtokentwilio="XXXX"