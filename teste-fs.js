// ---- MÓDULO O2 ----

//2.1 

import { mkdir, writeFile, readFile } from "node:fs/promises";

async function salvarHistorico() {
    const lista = [
        {
            id: 1,
            usuario: "Isabela",
            texto: "Boa tarde!!"
        },
        {
            id: 2,
            usuario: "Marina",
            texto: "Oi pessoal!"
        }
    ];

    await mkdir(new URL("./data/", import.meta.url), {
        recursive: true
    });

    const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);

    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");

    console.log("Histórico salvo com sucesso!");
}

//2.2

async function lerDadosSeguros(nomeArquivo) {
    try {
        const texto = await readFile(nomeArquivo, "utf8");
        return JSON.parse(texto);
    } catch (erro) {
        if (erro.code === "ENOENT") return [];
        throw erro;
    }
}

await salvarHistorico();

const dados = await lerDadosSeguros(
    new URL("./data/arquivo-fantasma.json", import.meta.url)
);
console.log("Resultado com arquivo ausente:", dados);