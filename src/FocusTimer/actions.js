import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

/*  */
export function toogleRunning(){ // inicia ou pasa a contagem regressiva
    state.isRunning = document.documentElement.classList.toggle('running')

    if (state.minutes > 0 || state.seconds > 0) {  // Verifica se há tempo definido antes de iniciar o countdown
        timer.countdown()
    }

    sounds.buttonPressAudio.play()
}


export function reset(){ // reseta o timer para o estado inicial
    state.isRunning = false
    document.documentElement.classList.remove('running') // para o timer 

    timer.updateDisplay() // Atualiza a exibição para mostrar o tempo inicial 

    sounds.buttonPressAudio.play()
}
 
export function set() { // Permite ao usuário editar o tempo diretamente na interface.
    elements.minutes.setAttribute('contenteditable', true)/* Torna o elemento que mostra os minutos editável e 
    coloca o foco nele, permitindo ao usuário inserir um novo valor.*/
    elements.minutes.focus()
}

export function toogleMusic() { // controla a reprodução da musica de fundo
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
        
        sounds.bgAudio.play()
        return
    }
    sounds.bgAudio.pause()

}