// Função 1
// Criar modal que irá soprepor a página de login;

// Função 2
// Criar função que ao clicar em "Esqueci minha senha";
// abra um modal para criar nova senha;
// após criar nova senha voltar para a página de login;


function rendrizaNovaSenha() {

    const p = document.querySelector("#new-password");
    const footer = document.querySelector(".footer");
    const form = document.createElement("form");
    const h2 = document.createElement("h2");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const button = document.createElement("button");

    h2.innerText = "Crie a nova senha";
    input1.placeholder = "Digite sua nova senha";
    input2.placeholder = "Digite sua nova senha novamente";
    button.innerText = "Salvar";

    // if (input1.value === input2) {
    //     button.addEventListener("click",);
    // } 

    // p.addEventListener("click", )
    form.append(h2, input1, input2, button);
    footer.appendChild(form);
}
rendrizaNovaSenha();

