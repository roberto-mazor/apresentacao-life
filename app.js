// Exemplo de script.js simples para um pequeno efeito, caso não use Reveal.js fragments.

document.addEventListener('DOMContentLoaded', () => {
    // Esconde as respostas no slide de gancho inicialmente.
    const respostas = document.querySelectorAll('.pergunta-interativa .resposta');
    respostas.forEach(span => {
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.5s ease-in-out';
    });

    // Função para revelar as respostas ao focar/clicar (simulando a transição do palestrante)
    const perguntas = document.querySelectorAll('.pergunta-interativa');
    perguntas.forEach(pergunta => {
        pergunta.addEventListener('mouseover', () => {
            pergunta.querySelector('.resposta').style.opacity = '1';
        });
        pergunta.addEventListener('mouseout', () => {
            pergunta.querySelector('.resposta').style.opacity = '0';
        });
    });

    // Nota de palco (apenas um exemplo, o Reveal.js já tem esse recurso)
    console.log("Anotações do Slide 1 (Abertura): 'Boa tarde, pessoal! Eu sou o Henrique...'");

    // Você precisaria de um JavaScript muito mais complexo para gerenciar a navegação entre slides (botões, setas, etc.) se não usar o Reveal.js.
});