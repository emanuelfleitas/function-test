const {admin} = require("../../admin.js")
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const admin = require('firebase-admin')
// var serviceAccount = require("../../serviceAccountKey.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://platzi-course-web.firebaseio.com"
// });

var db = admin.database()
var dbFirestore = admin.firestore()
var refEmailUserFirestore =  dbFirestore.collection("emailusuarios")
var refEmailUser = db.ref("emailusuarios")


class UsuarioAdmin {

  registrarEmailsUsuario (nombres, email) {
    console.log('se registra email')
    return refEmailUserFirestore.doc('email').set({
      nombres: nombres,
      email: email
    })
  }

}

exports.UsuarioAdmin = UsuarioAdmin



// const { Email } = require('../utilidad/EmailHelper.js')
// const { HubSpotHelper } = require('../utilidad/HubSpotHelper.js')
// const {
//   plantillaEmailBienvenida,
//   plantillaEmailDespedida
// } = require('../utilidad/PlantillasEmail.js')

//   enviarEmailBienvenida (nombres, email) {
//     const to = email
//     const from = 'info@blogeek.com'

//     const textHtml = plantillaEmailBienvenida(nombres)

//     const objEmail = new Email()

//     return objEmail.sendEmail(
//       from,
//       to,
//       '',
//       'Video Blogeek - Bienvenido a la Comunidad de Videos Geek',
//       textHtml
//     )
//   }

//   enviarEmailDespedida (nombres, email) {
//     const to = email
//     const from = 'info@blogeek.com'

//     const textHtml = plantillaEmailDespedida(nombres)

//     const objEmail = new Email()

//     return objEmail.sendEmail(
//       from,
//       to,
//       '',
//       'Video Blogeek - Espera!! no te vayas de la Comunidad de Videos Geek',
//       textHtml
//     )
//   }

//   sincronizarCRM (nombres, apellidos, email) {
//     const hubSpot = new HubSpotHelper()
//     return hubSpot.crearUsuario(nombres, apellidos, email)
//   }