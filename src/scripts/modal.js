// Função 1
// Criar modal que irá soprepor a página de login;

// Função 2
// Criar função que ao clicar em "Esqueci minha senha";
// abra um modal para criar nova senha;
// após criar nova senha voltar para a página de login;

function createLoginModal() {
    const modalContainer = document.createElement('section')
    modalContainer.id = 'modal-container'

    const contentContainer = document.createElement('div')
    contentContainer.className = 'content-container'

    const titleModal = document.createElement('div')
    titleModal.className = 'title-modal'
    const titleH2 = document.createElement('h2')
    titleH2.innerText = 'Cadastre uma nova senha'
    const closeModal = document.createElement('button')
    closeModal.id = 'close-modal'
    closeModal.innerText = 'X'

    const formContainer = document.createElement('form')
    const passwordInput1 = document.createElement('input')
    passwordInput1.placeholder = 'Digite sua nova senha'
    passwordInput1.type = 'password'
    passwordInput1.classList = 'input-value'
    const passwordInput2 = document.createElement('input')
    passwordInput2.placeholder = 'Digite sua nova senha novamente'
    passwordInput2.type = 'password'
    passwordInput2.classList = 'input-value'
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.innerText = 'Salvar'
    submitButton.classList = 'input-button'
    const message = document.createElement('p')


    titleModal.append(titleH2, closeModal)
    formContainer.append(passwordInput1, passwordInput2, submitButton)
    contentContainer.append(titleModal, formContainer)
    modalContainer.appendChild(contentContainer)

    return modalContainer
}

function showModal() {
    const modalButton = document.getElementById('new-password')
    const mainContainer = document.getElementById('main-container')

    modalButton.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = createLoginModal()

        mainContainer.appendChild(modal)

        closeModal()
    })
}

function closeModal() {
    const closeModalButton = document.getElementById('close-modal')
    const modalContainer = document.getElementById('modal-container')

    closeModalButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

showModal()


