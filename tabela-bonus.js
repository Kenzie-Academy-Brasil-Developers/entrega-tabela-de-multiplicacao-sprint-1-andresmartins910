function gerarTabela(n) {
    let tabela = []
    for (let i = 0; i <= n; i++) {              // número de linhas
        tabela[i] = []
        for (let k = 0; k <= n; k++) {          // número de colunas
            tabela[i][k] = i * k                // gera a tabuada
        }
    }
    return tabela
}