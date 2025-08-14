import readline from "readline";

/*  
Teste de reatribuição de const e let:
    const vendas = [];
    vendas.push(1, 2, 3, 4);
    console.log(vendas)
    vendas = 'teste';
    console.log(vendas);

    let vendas = []
    vendas.push(1, 2, 3, 4);
    console.log(vendas);
    vendas = 'teste';
    console.log(vendas);
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* O rl.question usa callback. esta função cria uma promise que:
    1- executa rl.question com o prompt
    2- Quando o usuário digita, resolve a promise com o valor
    3- Permite usar await question("pergunt") em vez de callbacks aninhados

    exemplo 1:
    rl.question("pergunta1", (resposta1) => {
        rl.question("pergunta2", (resposta2) => {
            rl.question("pergunta3", (resposta3) => {
                rl.question("pergunta4", (resposta4) => {
                    rl.question("pergunta5", (resposta5) => {
                        // Código útil aqui! (7 níveis de indentação)
                    });
                });
            });
        });
    });
    exemplo 2:
    rl.question("Nome: ", (nome) => {
        if (!nome) return menu(); // Repetitivo
        rl.question("Valor: ", (valor) => {
            if (!valor) return menu(); // Repetitivo
            // ... continua
        });
});
*/
const question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, (valor) => {
            resolve(valor);
        });
    });
}

let vendas = [
    { nomeVendedor: 'Matheus', valorVenda: 3000, data: '14-08-2025', id: 1 },
    { nomeVendedor: 'João', valorVenda: 2000, data: '14-08-2025', id: 2 },
    { nomeVendedor: 'Maria', valorVenda: 1000, data: '14-08-2025', id: 3 },
    { nomeVendedor: 'Joana', valorVenda: 500, data: '14-08-2025', id: 4 },
    { nomeVendedor: 'Pedro', valorVenda: 50, data: '14-08-2025', id: 5 },
    { nomeVendedor: 'Pedro', valorVenda: 500, data: '14-08-2025', id: 6 },
    { nomeVendedor: 'Pedro', valorVenda: 300, data: '14-08-2025', id: 7 },
    { nomeVendedor: 'Pedro', valorVenda: 100, data: '14-08-2025', id: 8 },
];

const delay = (ms) => new Promise((resolve) => (setTimeout(resolve, ms)));


async function adicionarVenda() {

    const nomeVendedor = await question("Nome Vendedor: ");
    if (nomeVendedor.trim() === "") {
        console.log("Erro: Nome do cliente deve ser uma string não vazia\n");
        return;
    }
    const valorVenda = Number(await question("Valor da venda: "));
    if (isNaN(valorVenda) || valorVenda <= 0) {
        console.log("Erro: Valor da venda deve ser um número positivo\n");
        return;
    }
    const data = await question("Data (DD-MM-AAAA): ");
    if (!data.match(/^\d{2}-\d{2}-\d{4}$/)) {
        console.log("Erro: Data deve ser no formato DD-MM-AAAA\n");
        return;
    }
    const venda = {
        nomeVendedor: nomeVendedor,
        valorVenda: valorVenda,
        data: data,
        id: vendas.length + 1
    }
    vendas.push(venda);
    await delay(3000);
    console.log(`\nVenda adicionada: ${nomeVendedor} - R$${valorVenda} em ${data}`);
}


function listarValores(valores) {
    for (const venda of valores) {
        console.log(`ID: ${venda.id}, Cliente: ${venda.nomeVendedor}, Valor: R$${venda.valorVenda}, Data: ${venda.data}\n`)
    }
}


function listarVendas() {
    if (vendas.length <= 0) {
        console.log("\nNenhuma venda registrada.");
        return;
    }
    // return vendas.filter((venda) => console.log(venda));
    console.log("\nVendas realizadas: ");
    listarValores(vendas)
}


function calcularTotalVendas() {
    if (vendas.length <= 0) {
        return console.log("Nenhuma venda registrada.");
    }
    let totalVendas = 0;
    for (const venda of vendas) {
        totalVendas += venda.valorVenda;
    }
    /*reduce sintax:
        reduce(callbackFn)
        reduce(callbackFn, initialValue)
        const totalVendas = vendas.reduce((total, venda) => total + venda.valorVenda, 0);
    */
    console.log(`\nTotal de vendas: R$${totalVendas}`)
}


async function filtrarVendasPorValor() {
    if (vendas.length <= 0 ) {
        console.log("Nenhuma venda registrada!");
        return;
    }
    let valoresFiltrados = [];
    console.log("\nFiltrar vendas por valor menor ou maior?\n" +
        "Digite 1 para menor ou 2 para maior."
    );
    const opcao = Number(await question("Opção: "));
    if (isNaN(opcao) || opcao < 1 || opcao > 2) {
        console.log("Opção inválida, digite 1 ou 2.");
        return;
    }
    const valorFiltro = Number(await question("Digite o valor a ser filtrado: "));
    if (isNaN(valorFiltro) || valorFiltro <= 0) {
        console.log("Valor inválido, digite um número maior que zero.");
        return;
    }
    switch (opcao) {
        case 1:
            valoresFiltrados = vendas.filter(venda => venda.valorVenda <= valorFiltro);
            console.log(`\nVendas com valor menor ou igual a ${valorFiltro}: `);
            listarValores(valoresFiltrados);
            break;
        case 2:
            valoresFiltrados = vendas.filter(venda => venda.valorVenda >= valorFiltro);
            console.log(`\nVendas com valor maior ou igual a ${valorFiltro}`);
            listarValores(valoresFiltrados);
            break;
        default:
            console.log("Opcao invalida, digite um valorde 1 a 6");
    }
}


async function verificarMetaPorVendedor() {
    const nomeVendedor = await question("Nome do Vendedor: ");
    if (nomeVendedor.trim() === "") {
        console.log("Nome do vendedor não pode estar em branco.")
        return;
    }
    const listaVendas = vendas.filter(venda => venda.nomeVendedor === nomeVendedor);
    if (listaVendas.length <= 0) {
        console.log("Nenhuma venda localizada para este vendedor.");
        return;
    }
    let totalVendas = 0;
    const metaVendas = 1000;
    for (const venda of listaVendas) {
        totalVendas += venda.valorVenda;
    }
    console.log(`${nomeVendedor} tem o total de R$${totalVendas} em vendas.`);
    if (totalVendas >= metaVendas) {
        console.log("Meta atingida!");
    }
    else {
        const valorRestante = metaVendas - totalVendas;
        console.log(`Ainda não atingiu a meta, faltam R$${valorRestante}.`);
    }
}


function mensagemMenu() {
    return console.log("\nDigite uma opcao de 1 a 6: \n" +
        "1 - Adicionar Venda\n" +
        "2 - Listar Vendas\n" +
        "3 - Calcular Total de Vendas\n" +
        "4 - Filtrar Vendas por Valor\n" +
        "5 - Verificar Meta de Vendas\n" +
        "6 - Sair.");
}


async function menu() {
    let option = "";
    while (true) {
        mensagemMenu();
        option = Number(await question("Opcao: "));
        if (isNaN(option) || option < 1 || option > 6) {
            console.log("Opcao invalida, digite um valor de 1 a 6")
            continue;
        }
        switch (option) {
            case 1:
                await adicionarVenda();
                break;
            case 2:
                listarVendas();
                break;
            case 3:
                calcularTotalVendas();
                break;
            case 4:
                await filtrarVendasPorValor();
                break;
            case 5:
                await verificarMetaPorVendedor();
                break;
            case 6:
                console.log("Saindo...");
                rl.close();
                return;
            default:
                console.log("Opcao invalida, digite um valor de 1 a 6");
        }
    }
}


menu();