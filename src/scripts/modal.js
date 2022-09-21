// Função 1
// Criar modal que irá soprepor a página de login;

// Função 2
// Criar função que ao clicar em "Esqueci minha senha";
// abra um modal para criar nova senha;
// após criar nova senha voltar para a página de login;

function createLoginModal() {
    const modalContainer = document.createElement('section')
    const contentContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const closeModal = document.createElement('button')
    const formContainer = document.createElement('form')
    const formTitle = document.createElement('h2')
    const passwordInput1 = document.createElement('input')
    const passwordInput2 = document.createElement('input')
    const submitButton = document.createElement('button')
    const message = document.createElement('p')

    modalContainer.id = 'modal_container'

    closeModal.id = 'close_modal'
    closeModal.innerText = 'X'

    formTitle.innerText = 'Cadastre uma nova senha'

    passwordInput1.placeholder = 'Digite sua nova senha'
    passwordInput1.type = 'password'
    passwordInput1.classList = 'input-value'

    passwordInput2.placeholder = 'Digite sua nova senha novamente'
    passwordInput2.type = 'password'
    passwordInput2.classList = 'input-value'

    submitButton.innerText = 'Salvar'
    submitButton.classList = 'input-button'

    buttonContainer.append(closeModal)
    formContainer.append(formTitle, passwordInput1, passwordInput2, submitButton, message)
    contentContainer.append(buttonContainer, formContainer)
    modalContainer.append(contentContainer)
    

    return modalContainer
}

function showModal() {
    const modalButton = document.getElementById('new-password')
    const mainContainer = document.getElementById('main_container')

    modalButton.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = createLoginModal()

        mainContainer.appendChild(modal)

        closeModal()
    })
}

function closeModal() {
    const closeModalButton = document.getElementById('close_modal')
    const modalContainer = document.getElementById('modal_container')

    closeModalButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

showModal()


