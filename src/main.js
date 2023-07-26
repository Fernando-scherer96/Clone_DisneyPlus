// Espera o evento 'DOMContentLoaded', que é acionado quando o DOM está completamente carregado.
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os elementos com o atributo 'data-tab-button' usando o seletor '[data-tab-button]'.
    const questions = document.querySelectorAll('[data-faq-question]');


    // Itera sobre todos os botões obtidos anteriormente.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) { // Adiciona um ouvinte de eventos de clique para cada botão.
            const abaAlvo = botao.target.dataset.tabButton; // Obtém o valor do atributo 'data-tab-button' do botão clicado.
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`); // Seleciona a aba correspondente usando o valor obtido.

            escondeTodasAbas(); // Chama a função 'escondeTodasAbas()' para ocultar todas as abas antes de exibir a desejada.
            aba.classList.add('shows__list--is-active'); // Adiciona a classe 'shows__list--is-active' para exibir a aba desejada.
            removeBotaoAtivo(); // Chama a função 'removeBotaoAtivo()' para remover a classe 'shows__tabs__button--is-active' de todos os botões.
            botao.target.classList.add('shows__tabs__button--is-active'); // Adiciona a classe 'shows__tabs__button--is-active' ao botão clicado para marcá-lo como ativo.
        });
    }

    for (let i=0; i< questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function abreOuFechaResposta (elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}


// Função que remove a classe 'shows__tabs__button--is-active' de todos os botões.
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os botões com o atributo 'data-tab-button'.

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active'); // Remove a classe 'shows__tabs__button--is-active' de cada botão.
    }
}

// Função que oculta todas as abas removendo a classe 'shows__list--is-active'.
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); // Seleciona todos os elementos com o atributo 'data-tab-id'.

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active'); // Remove a classe 'shows__list--is-active' de cada aba, ocultando-as.
    }
}
