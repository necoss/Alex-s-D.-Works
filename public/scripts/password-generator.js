const passwordInfo = {
    number: '1234567890',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '!@#$%^&*()_+~|}{[]:;?><,./-='
}

const getPasswordInfo = [
    function number(){
        return passwordInfo.number[Math.floor(Math.random() * passwordInfo.number.length)]
    },

    function upperCase(){
        return passwordInfo.upperCase[Math.floor(Math.random() * passwordInfo.upperCase.length)]
    },

    function lowerCase(){
        return passwordInfo.lowerCase[Math.floor(Math.random() * passwordInfo.lowerCase.length)]
    },

    function symbols(){
        return passwordInfo.symbols[Math.floor(Math.random() * passwordInfo.symbols.length)]
    },
]

function generatePassword() {
    const number = document.getElementById('number').checked
    const upper = document.getElementById('upperCase').checked
    const lower = document.getElementById('lowerCase').checked
    const symbol = document.getElementById('symbols').checked

    if (number + upper + lower + symbol === 0){
        alert('Choose at least one checkbox!')
        return
    }

    const passwordArea = document.getElementById('passwordArea')
    const passwordLength = document.getElementById('length')
    let password = ''

    while (passwordLength.value > password.length){
        let keyToAdd = getPasswordInfo[Math.floor(Math.random() * getPasswordInfo.length)]
        let isChecked = document.getElementById(keyToAdd.name).checked
        if (isChecked) {
            password += keyToAdd()
        }
    }
    passwordArea.innerHTML = password
    return
}
function copyPassword() {
    const textarea = document.createElement('textarea')
    const pass = document.getElementById('passwordArea').innerText
    if(!pass) {
        return
    }
    textarea.value = pass
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!!!')
}