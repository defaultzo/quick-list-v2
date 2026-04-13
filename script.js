console.log('JS carregado!')

//Variavel do formulário
const form = document.querySelector('form')

//Variavel do input
const input = document.querySelector('input')

//Variavel da lista
const list = document.querySelector('ul')

//Variavel da seção de alerta de item removido
const removeAlert = document.querySelector('.removeItem')

//O ícone de fechar é a última imagem dentro do alerta
const closeAlertIcon = removeAlert.querySelector('img[src*="iconDelete"]')

/*
//Só para verificar se as variaveis estão pegando os elementos certos
console.log(form, input, list)
*/


//Evento de submit do formulário
form.addEventListener('submit', event =>{
    //Prevenir o comportamento padrão do formulário
    event.preventDefault()
    // Remove espaços no início e no fim manualmente
    const itemValue = input.value.replace(/^\s+|\s+$/g, '');

    //Verifica se o valor que o usuário digitou não é vazio
    if(itemValue !== ''){
        //Cria o item da lista
        const newItem = document.createElement('li')
        //Adiciona a classe 'itens' ao item da lista
        newItem.classList.add('itens')

        //Adiciona o conteudo HTML do item
        newItem.innerHTML = `
        <img src="./assets/iconCheckBoxDefault.svg" alt="checkbox" class="icon1">
        <p>${itemValue}</p>
        <img src="./assets/iconTrash.svg" alt="lixeira" class="icon2">
        `
        //Adiciona o item criado à lista apos o ultimo item, elemento filho da section
        list.appendChild(newItem)

        //Limpa o valor que o usuário digitou no input, tornando ele vazio de novo
        input.value = ''
        //Deixa o foco no input de novo
        input.focus()

        //Variaveis dos icones de cada item da lista
        const checkIcon = newItem.querySelector('.icon1')//Imagem do checkbox
        const trashIcon = newItem.querySelector('.icon2')//Imagem da lixeira

        //Evento de marcar e descarmar o icone de checkbox
        checkIcon.addEventListener('click', () =>{
        //Troca a classe do checkbox para a classe que tem a imagem do checkbox selecionado, e vice-versa
        checkIcon.classList.toggle('check-active')
        })

        //Evento de excluir o item da lista
        trashIcon.addEventListener('click', () =>{
        // O comando .remove() exclui o elemento inteiro (o <li> que eu criei) do site
        newItem.remove()
        //Essa variavel já tinha sido criada lá em cima
        //Exibe o alerta de item removido
        removeAlert.style.display = 'flex'
        })

        //Quando clicar no "X" do alerta, ele some de novo
        closeAlertIcon.addEventListener('click', () => {
        //Adiciona a classe 'icon3' ao ícone de fechar para aplicar o estilo de cursor pointer
        closeAlertIcon.classList.toggle('icon3')
        //Esconde o alerta de item removido
        removeAlert.style.display = 'none';
        })
    }
})

