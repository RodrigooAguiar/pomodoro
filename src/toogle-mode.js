let darkMode = true // começa a página no darkMode
const buttonToglle = document.getElementById("toogle-mode");// linka o butao na aplicação
buttonToglle.addEventListener('click', (event) => { // adiciona o evento de clicar no botao
    document.documentElement.classList.toggle('light')// ao clicar no botao a class light é adicionada ao html

    const mode = darkMode ? /* então */  'light' : /* se não */ 'dark'
    event.currentTarget // retornaria o elemento porque é onde o event listener foi registrado e está atualmente processando o evento.
     .queruSelector('span').textContent = `${mode} mode ativado!`
    
    darkMode = !darkMode // nega o dark mode para fazer a troca de modo
})