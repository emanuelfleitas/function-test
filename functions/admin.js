const admin = require('firebase-admin')
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://platzi-course-web.firebaseio.com"
});

exports.admin = admin
