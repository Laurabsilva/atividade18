//MÓDULO 01
// 1.1 
const historicoMensagens = [
    {
        id: 1,
        usuario: "Laura",
        texto: "Chegou o camarão da laurinha!!!🦐"
    }, 
    {
        id: 2,
        usuario: "Pedro",
        texto: "Desculpa mãe!"
    }
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);
console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);

// 1.2

const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';

const recuperacao = JSON.parse(jsonValido);
console.log("Mensagem recuperada!", recuperacao[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try {
  JSON.parse(jsonQuebrado)
} catch (erro) {
    console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}