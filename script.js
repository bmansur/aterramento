const tabelaK1 = [
  { relacao: 0.0010, k1: 0.6839 },
  { relacao: 0.0020, k1: 0.6844 },
  { relacao: 0.0025, k1: 0.6847 },
  { relacao: 0.0030, k1: 0.6850 },
  { relacao: 0.0040, k1: 0.6855 },
  { relacao: 0.0045, k1: 0.6858 },
  { relacao: 0.0050, k1: 0.6861 },
  { relacao: 0.0060, k1: 0.6866 },
  { relacao: 0.0070, k1: 0.6871 },
  { relacao: 0.0080, k1: 0.6877 },
  { relacao: 0.0090, k1: 0.6882 },
  { relacao: 0.0100, k1: 0.6887 },
  { relacao: 0.0150, k1: 0.6914 },
  { relacao: 0.0200, k1: 0.6940 },
  { relacao: 0.0300, k1: 0.6993 },
  { relacao: 0.0400, k1: 0.7044 },
  { relacao: 0.0500, k1: 0.7095 },
  { relacao: 0.0600, k1: 0.7145 },
  { relacao: 0.0700, k1: 0.7195 },
  { relacao: 0.0800, k1: 0.7243 },
  { relacao: 0.0900, k1: 0.7292 },
  { relacao: 0.1000, k1: 0.7339 },
  { relacao: 0.1500, k1: 0.7567 },
  { relacao: 0.2000, k1: 0.7781 },
  { relacao: 0.2500, k1: 0.7981 },
  { relacao: 0.3000, k1: 0.8170 },
  { relacao: 0.3500, k1: 0.8348 },
  { relacao: 0.4000, k1: 0.8517 },
  { relacao: 0.4500, k1: 0.8676 },
  { relacao: 0.5000, k1: 0.8827 },
  { relacao: 0.5500, k1: 0.8971 },
  { relacao: 0.6000, k1: 0.9107 },
  { relacao: 0.6500, k1: 0.9237 },
  { relacao: 0.7000, k1: 0.9361 },
  { relacao: 0.7500, k1: 0.9480 },
  { relacao: 0.8000, k1: 0.9593 },
  { relacao: 0.8500, k1: 0.9701 },
  { relacao: 0.9000, k1: 0.9805 },
  { relacao: 0.9500, k1: 0.9904 },
  { relacao: 1.0000, k1: 1.0000 },
  { relacao: 1.5000, k1: 1.0780 },
  { relacao: 2.0000, k1: 1.1340 },
  { relacao: 2.5000, k1: 1.1770 },
  { relacao: 3.0000, k1: 1.2100 },
  { relacao: 3.5000, k1: 1.2370 },
  { relacao: 4.0000, k1: 1.2600 },
  { relacao: 4.5000, k1: 1.2780 },
  { relacao: 5.0000, k1: 1.2940 },
  { relacao: 5.5000, k1: 1.3080 },
  { relacao: 6.0000, k1: 1.3200 },
  { relacao: 6.5000, k1: 1.3310 },
  { relacao: 7.0000, k1: 1.3400 },
  { relacao: 7.5000, k1: 1.3490 },
  { relacao: 8.0000, k1: 1.3560 },
  { relacao: 8.5000, k1: 1.3630 },
  { relacao: 9.0000, k1: 1.3690 },
  { relacao: 9.5000, k1: 1.3750 },
  { relacao: 10.0000, k1: 1.3800 },
  { relacao: 10.5000, k1: 1.3850 },
  { relacao: 11.0000, k1: 1.3900 },
  { relacao: 11.5000, k1: 1.3940 },
  { relacao: 12.0000, k1: 1.3980 },
  { relacao: 12.5000, k1: 1.4010 },
  { relacao: 13.0000, k1: 1.4040 },
  { relacao: 13.5000, k1: 1.4080 },
  { relacao: 14.0000, k1: 1.4100 },
  { relacao: 14.5000, k1: 1.4130 },
  { relacao: 15.0000, k1: 1.4160 },
  { relacao: 15.5000, k1: 1.4180 },
  { relacao: 16.0000, k1: 1.4210 },
  { relacao: 16.5000, k1: 1.4230 },
  { relacao: 17.0000, k1: 1.4250 },
  { relacao: 17.5000, k1: 1.4270 },
  { relacao: 18.0000, k1: 1.4290 },
  { relacao: 18.5000, k1: 1.4300 },
  { relacao: 19.0000, k1: 1.4320 },
  { relacao: 20.0000, k1: 1.4350 },
  { relacao: 30.0000, k1: 1.4560 },
  { relacao: 40.0000, k1: 1.4670 },
  { relacao: 50.0000, k1: 1.4740 },
  { relacao: 60.0000, k1: 1.4780 },
  { relacao: 70.0000, k1: 1.4820 },
  { relacao: 80.0000, k1: 1.4840 },
  { relacao: 90.0000, k1: 1.4860 },
  { relacao: 100.0000, k1: 1.4880 },
  { relacao: 110.0000, k1: 1.4890 },
  { relacao: 120.0000, k1: 1.4900 },
  { relacao: 130.0000, k1: 1.4910 },
  { relacao: 140.0000, k1: 1.4920 },
  { relacao: 150.0000, k1: 1.4930 },
  { relacao: 160.0000, k1: 1.4940 },
  { relacao: 180.0000, k1: 1.4950 },
  { relacao: 200.0000, k1: 1.4960 },
  { relacao: 240.0000, k1: 1.4970 },
  { relacao: 280.0000, k1: 1.4980 },
  { relacao: 350.0000, k1: 1.4990 },
  { relacao: 450.0000, k1: 1.5000 },
  { relacao: 640.0000, k1: 1.5010 },
  { relacao: 1000.0000, k1: 1.5010 }
];

function buscarK1MaisProximo(relacaoDesejada) {
  return tabelaK1.reduce((maisProximo, atual) => {
    const diffAtual = Math.abs(atual.relacao - relacaoDesejada);
    const diffMelhor = Math.abs(maisProximo.relacao - relacaoDesejada);

    return diffAtual < diffMelhor ? atual : maisProximo;
  });
}

function encontrarXPorY(yDesejado, valoresX, medias){
    for(let i = 0; i < medias.length - 1; i++){
        const y1 = medias[i];
        const y2 = medias[i + 1];

        const x1 = valoresX[i];
        const x2 = valoresX[i + 1];

        // verifica se o Y está entre os pontos
        if(
            (yDesejado >= y1 && yDesejado <= y2) ||
            (yDesejado <= y1 && yDesejado >= y2)
        ){
            const x =
                x1 +
                (
                    (yDesejado - y1) *
                    (x2 - x1)
                ) /
                (y2 - y1);
            return x;
        }
    }
    return null;
}

const tabela = {
    colunas: [0.01, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200],
    linhas: {
      0.1: [1.00, 1.01, 1.01, 1.02, 1.05, 1.00, 1.10, 1.15, 1.18, 1.20, 1.20, 1.30, 1.30],
      0.2: [0.95, 0.96, 1.00, 0.97, 0.99, 1.00, 1.13, 1.20, 1.25, 1.30, 1.40, 1.40, 1.50],
      0.5: [0.80, 0.90, 0.98, 0.95, 1.00, 1.00, 1.20, 1.30, 1.40, 1.60, 1.80, 2.00, 2.30],
      1: [0.77, 0.83, 0.90, 0.85, 0.90, 1.00, 1.30, 1.50, 1.60, 2.00, 2.50, 2.80, 3.00],
      2: [0.67, 0.82, 0.86, 0.86, 0.90, 1.00, 1.31, 1.55, 1.60, 2.60, 3.20, 4.00, 4.50],
      5: [0.56, 0.60, 0.65, 0.68, 0.80, 1.00, 1.32, 2.00, 2.90, 4.00, 5.70, 7.30, 8.80],
      10: [0.48, 0.52, 0.60, 0.60, 0.80, 1.00, 1.35, 2.40, 3.50, 5.30, 8.00, 11.0, 14.0],
      20: [0.41, 0.45, 0.50, 0.53, 0.72, 1.00, 1.40, 2.70, 4.20, 6.80, 12.0, 15.0, 21.0],
      35: [0.36, 0.40, 0.45, 0.50, 0.71, 1.00, 1.40, 2.80, 4.80, 7.80, 14.0, 18.0, 27.0],
      50: [0.32, 0.37, 0.40, 0.48, 0.70, 1.00, 1.50, 3.10, 5.40, 8.50, 16.0, 23.0, 33.0],
      75: [0.29, 0.35, 0.38, 0.46, 0.68, 1.00, 1.50, 3.10, 5.50, 9.00, 17.0, 26.0, 40.0],
      100: [0.27, 0.31, 0.35, 0.42, 0.55, 1.00, 1.50, 3.20, 5.80, 9.80, 18.0, 39.0, 45.0],
      200: [0.22, 0.26, 0.30, 0.38, 0.60, 1.00, 1.60, 3.50, 6.00, 11.0, 22.0, 35.0, 56.0],
      500: [0.18, 0.21, 0.25, 0.35, 0.60, 1.00, 1.70, 3.70, 6.70, 12.0, 25.0, 42.0, 77.0],
      1000: [0.15, 0.17, 0.22, 0.30, 0.60, 1.00, 1.80, 4.00, 7.00, 13.0, 37.0, 48.0, 85.0]
  }
};

// ==========================================
// ENCONTRA O INTERVALO
// ==========================================
function encontrarIntervalo(lista, valor) {
    let menor = null;
    let maior = null;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] <= valor) {
            menor = {
              indice: i,
              referencia: lista[i]
            };
        }
        if (lista[i] >= valor) {
            maior = {
              indice: i,
              referencia: lista[i]
            };
            break;
        }
    }

    return [ menor, maior ];
}

// ==========================================
// BUSCA INTERVALOS NA TABELA
// ==========================================
function buscarIntervalos(rHm, p2p1){
  const indiceLinhas = encontrarIntervalo(Object.keys(tabela.linhas).map(Number), rHm);
  const indiceColunas = encontrarIntervalo(tabela.colunas, p2p1);
  const linhas = indiceLinhas.map(i => ({
    linha: i?.referencia,
    valor: Object.values(tabela.linhas)[i?.indice]
  }));
  return linhas.map(l => indiceColunas.map(ci => ({
    linha: l?.linha,
    coluna: ci?.referencia,
    valor: l?.valor[ci?.indice]
  })));
}

function calcularMedia(numeroLinha){

    const celulas =
        document.querySelectorAll(".linha" + numeroLinha);

    const valores = [];

    celulas.forEach(celula => {

        const valor = parseFloat(celula.value);

        if(!isNaN(valor)){
            valores.push(valor);
        }

    });

    // sem valores

    if(valores.length === 0){

        document.getElementById(
            "media" + numeroLinha
        ).innerText = 0;

        desenharGrafico();
        return;
    }

    // ===== MÉDIA INICIAL =====

    const mediaInicial =
        valores.reduce((a,b) => a+b,0) /
        valores.length;

    // ===== DESVIO PADRÃO =====

    const variancia =
        valores.reduce((soma, valor) => {

            return soma +
                Math.pow(valor - mediaInicial, 2);

        },0) / valores.length;

    const desvioPadrao =
        Math.sqrt(variancia);

    // ===== FILTRO =====

    const valoresFiltrados =
        valores.filter(valor => {

            return Math.abs(
                valor - mediaInicial
            ) <= 0.5;

        });

    // caso todos sejam removidos

    const mediaFinal =
        valoresFiltrados.length > 0
        ?
        valoresFiltrados.reduce((a,b)=>a+b,0)
        / valoresFiltrados.length
        :
        mediaInicial;

    document.getElementById(
        "media" + numeroLinha
    ).innerText = mediaFinal.toFixed(2);

    desenharGrafico();
}

for(let i = 1; i <= 6; i++){

    const linha = document.querySelectorAll(".linha" + i);

    linha.forEach(celula => {

        celula.addEventListener("input", () => {
            calcularMedia(i);
        });

    });

}

function desenharGrafico(){

    const canvas = document.getElementById("grafico");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ===== DADOS =====

    const valoresX = [0, 2, 4, 8, 16, 32, 64];

    const medias = [0];

    for(let i = 1; i <= 5; i++){

        const valor =
            parseFloat(
                document.getElementById("media" + i)?.innerText
            ) || 0;

        medias.push(valor);
    }
  
    // ===== CÁLCULO Y PARA X=64 =====

    const x1 = 2;
    const y1 = medias[1];

    const x2 = 4;
    const y2 = medias[2];

    let inclinacao =
        (y2 - y1) / (x2 - x1);

    const y0 =
        y1 + (0 - x1) * inclinacao;

    medias[0] = y0;

    // ===== CÁLCULO Y PARA X=64 =====

    const ultimoXConhecido = 32;
    const ultimoYConhecido = medias[5];

    const penultimoX = 16;
    const penultimoY = medias[4];

    inclinacao =
        (ultimoYConhecido - penultimoY) /
        (ultimoXConhecido - penultimoX);

    const y64 =
        ultimoYConhecido +
        (64 - ultimoXConhecido) * inclinacao;

    medias.push(y64);

    // ===== CONFIGURAÇÕES =====

    const largura = canvas.width;
    const altura = canvas.height;

    const margem = 70;

    const larguraGrafico = largura - (margem * 2);
    const alturaGrafico = altura - (margem * 2);

    // ===== ESCALA Y =====

    const maxValor =
        Math.max(...medias) * 1.2 || 10;

    const minValor =
        Math.min(...medias, 0);

    // ===== EIXOS =====

    ctx.beginPath();

    ctx.moveTo(margem, margem);
    ctx.lineTo(margem, altura - margem);

    ctx.lineTo(largura - margem, altura - margem);

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    // ===== GRID Y =====

    const divisoesY = 6;

    for(let i = 0; i <= divisoesY; i++){

        const valor =
            minValor +
            ((maxValor - minValor) / divisoesY) * i;

        const y =
            altura - margem -
            ((valor - minValor) /
            (maxValor - minValor)) *
            alturaGrafico;

        ctx.beginPath();

        ctx.moveTo(margem, y);
        ctx.lineTo(largura - margem, y);

        ctx.strokeStyle = "#ddd";
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";

        ctx.fillText(
            valor.toFixed(1),
            20,
            y + 5
        );
    }

    // ===== PONTOS =====

    const maxX = Math.max(...valoresX);

    const pontos = [];

    valoresX.forEach((valorX, index) => {

        const media = medias[index];

        const x =
            margem +
            (valorX / maxX) *
            larguraGrafico;

        const y =
            altura - margem -
            ((media - minValor) /
            (maxValor - minValor)) *
            alturaGrafico;

        pontos.push({
            x,
            y,
            valor: media,
            valorX
        });
    });

    // ===== LINHA PRINCIPAL =====

    ctx.beginPath();

    ctx.moveTo(pontos[0].x, pontos[0].y);

    for(let i = 1; i < pontos.length; i++){

        ctx.lineTo(
            pontos[i].x,
            pontos[i].y
        );
    }

    ctx.strokeStyle = "#1a73e8";
    ctx.lineWidth = 3;
    ctx.stroke();

    // ===== PONTOS =====

    pontos.forEach((ponto) => {

        ctx.beginPath();

        ctx.arc(
            ponto.x,
            ponto.y,
            5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#1a73e8";
        ctx.fill();

        // valor Y

        ctx.fillStyle = "#000";

        ctx.fillText(
            ponto.valor.toFixed(2),
            ponto.x - 10,
            ponto.y - 10
        );

        // eixo X

        ctx.fillText(
            ponto.valorX,
            ponto.x - 10,
            altura - margem + 25
        );
    });

    // ===== INFORMAÇÕES =====

    const valorMaximo =
        Math.max(...medias);

    const valorMinimo =
        Math.min(...medias);
  
    p2P1 = isNaN(valorMinimo / valorMaximo) ? 0 : valorMinimo / valorMaximo;

    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";


    ctx.fillText(
        "Valor Mínimo: " +
        valorMinimo.toFixed(2),
        largura - 250,
        70
    );

    ctx.fillText(
        "Valor Máximo: " +
        valorMaximo.toFixed(2),
        largura - 250,
        100
    );
  
    ctx.fillText(
        "p2/p1: " +
        p2P1.toFixed(2),
        largura - 250,
        130
    );

    const { k1 } = buscarK1MaisProximo(p2P1);
    const pm = k1 * valorMaximo;
    
    document.getElementById("p1").innerText = valorMaximo.toFixed(2);
    document.getElementById("p2").innerText = valorMinimo.toFixed(2);
    document.getElementById("k1").innerText = k1;   
    document.getElementById("pm").innerText = pm.toFixed(2);
  
    const hm = encontrarXPorY(
        pm,
        valoresX,
        medias
    );
  
    document.getElementById("hm").innerText = hm.toFixed(2);
    
    // ===== LINHA VERTICAL =====
    const xDesejado = hm;

    // converte valor real para posição no canvas
    const xCanvas =
        margem +
        (xDesejado / maxX) *
        larguraGrafico;

    ctx.beginPath();
    ctx.moveTo(
        xCanvas,
        margem
    );
    ctx.lineTo(
        xCanvas,
        altura - margem
    );
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.setLineDash([6,6]);
    ctx.stroke();
    ctx.setLineDash([]);
    
    const comprimentoArea = parseFloat(document.getElementById("comprimento").value);
    const larguraArea = parseFloat(document.getElementById("comprimento").value);

    const area = comprimentoArea * larguraArea;
    const r = Math.sqrt(area/Math.PI);
    const k2 = r / hm;
  
    document.getElementById("k2").innerText = k2.toFixed(2);
  
    const resultado = buscarIntervalos(k2, p2P1);

    const x_1 = 1 - ((resultado[0][1].coluna - p2P1) * (resultado[0][1].valor - resultado[0][0].valor)) / (resultado[0][1].coluna - resultado[0][0].coluna);

    const x_2 = 1 - ((resultado[1][1].coluna - p2P1) * (resultado[1][1].valor - resultado[1][0].valor)) / (resultado[1][1].coluna - resultado[1][0].coluna);

    const k3 = x_2 - ((resultado[1][0].linha - 3.28) * (x_2 - x_1)) / (resultado[1][0].linha - resultado[0][0].linha);
    
    document.getElementById("k3").innerText = k3.toFixed(4);
  
    pa = k3 * valorMaximo;
  
    document.getElementById("pa").innerText = pa.toFixed(2);
}

desenharGrafico();
