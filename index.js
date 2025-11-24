function calcularENEM() {
    // 1. Coleta e Validação do Nome
    const nome = document.getElementById('nome').value.trim();
    if (nome === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    // 2. Coleta das Notas e Validação
    const notas = {
        ch: parseFloat(document.getElementById('ch').value) || 0,
        cn: parseFloat(document.getElementById('cn').value) || 0,
        lc: parseFloat(document.getElementById('lc').value) || 0,
        mat: parseFloat(document.getElementById('mat').value) || 0,
        redacao: parseFloat(document.getElementById('redacao').value) || 0
    };

    // Validação de intervalo (0 a 1000) e nota zero na redação
    for (const area in notas) {
        if (notas[area] < 0 || notas[area] > 1000) {
            alert("Todas as notas devem estar entre 0 e 1000.");
            return;
        }
    }
    if (notas.redacao === 0) {
        alert("Atenção: Nota zero na Redação geralmente elimina o candidato do Sisu.");
    }


    // 3. Cálculo da Média Simples
    const somaNotas = notas.ch + notas.cn + notas.lc + notas.mat + notas.redacao;
    const mediaSimples = somaNotas / 5;

    // 4. Definição dos Cursos (Cut-offs Fictícios)
    const cursos = [
        { nome: "Medicina", cutOff: 800, requisitoExtra: "Redação >= 700" },
        { nome: "Direito", cutOff: 720, requisitoExtra: "" },
        { nome: "Engenharia Civil", cutOff: 700, requisitoExtra: "Matemática >= 650" },
        { nome: "Psicologia", cutOff: 680, requisitoExtra: "" },
        { nome: "Administração", cutOff: 650, requisitoExtra: "" },
        { nome: "Letras", cutOff: 620, requisitoExtra: "Linguagens e Códigos >= 600" },
        { nome: "História", cutOff: 600, requisitoExtra: "" },
    ];

    let cursosElegiveis = [];

    // 5. Verificação de Elegibilidade (Lógica omitida por ser a mesma)
    cursos.forEach(curso => {
        let elegivel = true;

        if (mediaSimples < curso.cutOff) {
            elegivel = false;
        }

        if (elegivel && curso.requisitoExtra) {
            switch (curso.nome) {
                case "Medicina":
                    if (notas.redacao < 700) elegivel = false;
                    break;
                case "Engenharia Civil":
                    if (notas.mat < 650) elegivel = false;
                    break;
                case "Letras":
                    if (notas.lc < 600) elegivel = false;
                    break;
            }
        }

        if (notas.redacao === 0) {
            elegivel = false;
        }

        if (elegivel) {
            cursosElegiveis.push(curso.nome);
        }
    });

    // 6. Montagem e Exibição do Resultado
    const resultadoDiv = document.getElementById('resultado');
    let htmlResultado = `<h2>Resultado de ${nome}</h2>`;
    htmlResultado += `<p>Sua Média Simples no ENEM é de ${mediaSimples.toFixed(2)}.</p>`;
    
    // =========================================================================
    // 💡 ADICIONE OS ELEMENTOS CANVAS PARA OS GRÁFICOS AQUI NO HTML DO RESULTADO
    // =========================================================================


    // Lista de elegibilidade (Lógica omitida por ser a mesma)
    if (cursosElegiveis.length > 0) {
        htmlResultado += `<h3>🎉 Cursos em que você ESTÁ ELEGÍVEL:</h3>`;
        htmlResultado += `<ul>`;
        cursosElegiveis.forEach(curso => {
            htmlResultado += `<li>${curso} (Média de Corte: ${cursos.find(c => c.nome === curso).cutOff})</li>`;
        });
        htmlResultado += `</ul>`;
    } else {
        htmlResultado += `<h3>😔 Não elegível para os cursos listados.</h3>`;
        htmlResultado += `<p>Sua média (${mediaSimples.toFixed(2)}) não atende ao corte mínimo de ${cursos[cursos.length - 1].cutOff} (História) ou você não cumpriu um requisito específico.</p>`;
    }

    resultadoDiv.innerHTML = htmlResultado;

    // =========================================================================
    // 📊 PREPARAÇÃO DOS DADOS PARA OS GRÁFICOS
    // =========================================================================
    
    // Dados para o Gráfico 1: Notas por Área
    const dadosNotasArea = {
        labels: ['Ciências Humanas', 'Ciências da Natureza', 'Linguagens e Códigos', 'Matemática', 'Redação'],
        valores: [notas.ch, notas.cn, notas.lc, notas.mat, notas.redacao]
    };

    // Dados para o Gráfico 2: Comparação da Média com Notas de Corte
    const dadosCortes = {
        labels: cursos.map(c => c.nome),
        cortes: cursos.map(c => c.cutOff),
        media: mediaSimples
    };
    
    // 7. Chamada das Funções de Renderização dos Gráficos (Assumindo Chart.js)
    // ESTAS FUNÇÕES DEVEM SER CRIADAS NO SEU CÓDIGO APÓS A FUNÇÃO principal
    renderizarGraficoNotas(dadosNotasArea);
    renderizarGraficoCortes(dadosCortes);
}

// =========================================================================
// 💡 EXEMPLO DE FUNÇÕES DE RENDERIZAÇÃO USANDO CHART.JS
// (É necessário incluir a biblioteca Chart.js no seu HTML)
// =========================================================================

/*
// Exemplo de como implementar renderizarGraficoNotas:
function renderizarGraficoNotas(dados) {
    const ctx = document.getElementById('graficoNotasArea').getContext('2d');
    new Chart(ctx, {
        type: 'bar', // Pode ser 'radar' para visualização mais compacta
        data: {
            labels: dados.labels,
            datasets: [{
                label: 'Sua Nota',
                data: dados.valores,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Nota Máxima',
                data: [1000, 1000, 1000, 1000, 1000],
                type: 'line', // Adiciona uma linha de referência
                borderColor: 'rgba(255, 99, 132, 0.8)',
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1000
                }
            }
        }
    });
}

// Exemplo de como implementar renderizarGraficoCortes:
function renderizarGraficoCortes(dados) {
    // Array com a média do candidato repetida para cada curso
    const mediasCandidato = new Array(dados.cortes.length).fill(dados.media);

    const ctx = document.getElementById('graficoCortes').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dados.labels,
            datasets: [{
                label: 'Nota de Corte (Fictícia)',
                data: dados.cortes,
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                order: 2
            }, {
                label: 'Sua Média',
                data: mediasCandidato,
                backgroundColor: 'rgba(54, 162, 235, 1)',
                type: 'line', // Usar linha para destacar a média sobre as barras
                pointRadius: 5,
                order: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: Math.max(...dados.cortes, dados.media) + 50 // Ajusta o topo do gráfico
                }
            }
        }
    });
}
*/