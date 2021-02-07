
//on window add a eventListener looking for the keydown
window.addEventListener('keydown', e => {

    //save in the key var, que html audio code relative to que pressed key
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    //save in the key var, que html key code relative to que pressed key
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    
    //if there isn't key, return !
    if(!audio) return

    //before execute, go to 0 second to the previous sound
    audio.currentTime = 0
    audio.play()

    key.classList.add('playing')
    
})

function endTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach( key => key.addEventListener('transitionend', endTransition))
