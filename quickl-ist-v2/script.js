console.log('JS carregado!')

//Variavel do formulário
const form = document.querySelector('form')

//Variavel do input
const input = document.querySelector('input')

//Variavel da lista
const list = document.querySelector('ul')

//Variavel do checkbox
const checkbox = document.querySelector('.checkbox-input')

//Variavel da seção de alerta de item removido
const removeAlert = document.querySelector('.removeItem')


/*
//Só para verificar se as variaveis estão pegando os elementos certos
console.log(form, input, list, checkbox)
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
        const newItemLi = document.createElement('li')

        //Cria um ID único para o checkbox usando a data e hora atual
        const itemId = `check-${Date.now()}`;

        //Adiciona a classe 'itens' ao item da lista
        newItemLi.classList.add('itens')

        //Adiciona o conteudo HTML do item, isso tudo fica dentro da <li> que eu criei
        newItemLi.innerHTML = `
        <input type="checkbox" id="${itemId}" class="checkbox-input">
            <label for="${itemId}" class="checkbox-label">
                <span class="custom-checkbox"></span>
                <p>${itemValue}</p>
                </label>
                <img src="assets/iconTrash.svg" class="icon2">
        `
        //Adiciona o item criado à lista apos o ultimo item, elemento filho da section
        list.appendChild(newItemLi)

        //Limpa o valor que o usuário digitou no input, tornando ele vazio de novo
        input.value = ''

        //Deixa o foco no input de novo
        input.focus()

        //Variaveis dos icones de cada item da lista
        const checkIcon = newItemLi.querySelector('.custom-checkbox')//Imagem do checkbox
        const trashIcon = newItemLi.querySelector('.icon2')//Imagem da lixeira

        /*
        Outro jeito que eu pensei de fazer o check do checkbox, mas acabei fazendo de outra maneira
        checkIcon.addEventListener('click', () =>{
            newItemLi.classList.toggle('checked')
        })
        console.log(checkIcon)
        */
        //Evento de excluir o item da lista
        trashIcon.addEventListener('click', () =>{
        // O comando .remove() exclui o elemento inteiro (o <li> que eu criei) do site
        newItemLi.remove()

        //Essa variavel já tinha sido criada lá em cima
        //Exibe o alerta de item removido
        removeAlert.style.display = 'flex'
        })

        //O ícone de fechar é a última imagem dentro do alerta, então eu busco ele usando querySelector dentro da classe removeAlert
        const closeAlertIcon = removeAlert.querySelector('img[src*="iconDelete"]')

        //Quando clicar no "X" do alerta, ele some de novo
        closeAlertIcon.addEventListener('click', () => {

        //Adiciona a classe 'icon3' ao ícone de fechar para aplicar o estilo de cursor pointer
        closeAlertIcon.classList.toggle('icon3')
        
        //Esconde o alerta de item removido
        removeAlert.style.display = 'none';
        })
    }

    const btnClear = document.getElementById('btn-limpar')
})

