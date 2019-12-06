const request = require('request')

exports.call = function(tipoHistorico, banda) {
    var descricao = "velocidade: " + banda.velocidade + " tecnologia: " + banda.tecnologia;
    console.log(descricao);
    request.post('http://localhost:8081/historico/historico', {
        json: {
            tipo: tipoHistorico,
            sistema: "banda",
            descricao: descricao
        }
    }, (error, res, body) => {
        if (error) {
            console.error(error);
        }
    })
}