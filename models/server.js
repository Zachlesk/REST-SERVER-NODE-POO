const express = require('express');
const cors = require('cors');
class Server {

constructor(){
    this.app = express();
    this.routes();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    this.middlewares();
}

middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
}

routes(){
    this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
}

listen(){
    this.app.listen(this.port, ()=>{
        console.log(`Server running on port: ${this.port}`)
    })

}
}

module.exports = Server;