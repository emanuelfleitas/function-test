const {UsuarioAdmin} = require("./UsuarioAdmin.js")

exports.usuarioCreacionController = usuario => {
    const usuarioAdmin = new UsuarioAdmin()
    return usuarioAdmin.enviarEmailBienvenida(usuario.displayName,usuario.email).then((r)=>{
        return usuarioAdmin.registrarEmailUsuario(usuario.displayName,usuario.email)
    }).catch(error=>{
       console.log(error); 
    })
}
 
exports.usuarioEliminadoController = usuario => {
    const usuarioAdmin = new UsuarioAdmin()
    return usuarioAdmin.enviarEmailDespedida(usuario.displayName,usuario.email).catch(error=>{
       console.log(error); 
    })
}

exports.creacionUsuarioCRM = usuario => {
    const usuarioAdmin = new UsuarioAdmin()
    return usuarioAdmin.sincronizarCRM(
        usuario.displayName,
        usuario.email
    )
}