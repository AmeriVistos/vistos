document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const respostas = {};

    // Coletar respostas
    const perguntas = formulario.querySelectorAll('.pergunta');
    perguntas.forEach((pergunta, index) => {
      const resposta = pergunta.querySelector('input[type="radio"]:checked');
      if (resposta) {
        respostas[`pergunta${index + 1}`] = resposta.value;
      }
    });

    console.log('Respostas enviadas:', respostas);

    // Função para avaliar as respostas
    function avaliarRespostas(respostas) {
      const criterios = {
        pergunta1: {
          turismo: 3,
          estudo: 5,
          trabalho: 2,
          visita: 4
        },
        pergunta2: {
          economias: 3,
          patrocinio: 4,
          empregador: 4,
          outro: 2
        },
        pergunta3: {
          sim: 2,
          nao: 0
        },
        pergunta4: {
          sim: 3,
          nao: 0
        },
        pergunta5: {
          'menos-1-mes': 4,
          '1-3-meses': 3,
          'mais-3-meses': 2
        },
        pergunta6: {
          b1: 3,
          b2: 4,
          f1: 5,
          j1: 4,
          outro: 2
        },
        pergunta7: {
          basico: 1,
          intermediario: 2,
          avancado: 3,
          fluente: 4
        },
        pergunta8: {
          sim: 4,
          nao: 0
        },
        pergunta9: {
          sim: 4,
          nao: 0
        },
        pergunta10: { // Nova pergunta adicionada
          estudante: 4,
          'carteira-menos-3': 3,
          'carteira-mais-3': 3,
          'empresario-menos-3': 2,
          'empresario-mais-3': 2
        }
      };

      let chanceAprovacao = 0;

      for (const pergunta in respostas) {
        const resposta = respostas[pergunta];
        if (criterios[pergunta] && criterios[pergunta][resposta] !== undefined) {
          chanceAprovacao += criterios[pergunta][resposta];
        }
      }

      if (chanceAprovacao >= 25) {
        return "Boa chance de aprovação";
      } else if (chanceAprovacao >= 15) {
        return "Possibilidade moderada de aprovação";
      } else {
        return "Chance reduzida de aprovação";
      }
    }

    const resultado = avaliarRespostas(respostas);
    resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${resultado}</p>`;
  });
});
