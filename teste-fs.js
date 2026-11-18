//MÓDULO O2
//2.1 

import { mkdir, writeFile } from "node:fs/promises";

async function salvarHistorico() {
    const lista = [
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

    await mkdir(new URL("./data/", import.meta.url), {
        recursive: true
    });

    const caminhoArquivo = new URL ("./data/mensagens-teste.json", import.meta.url);

    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");

    console.log("Histórico salvo com sucesso!");
}
    salvarHistorico();