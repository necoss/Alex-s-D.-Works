let firstNumb = '' // Первое число
let secondNumb = '' // Второе число
let mathSign = '' // Знак операции
let finish = false

const pressedDigit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const pressedAction = ['-', '+', 'x', '/']

const calcResult = document.querySelector('.calculator--screen p')

function clearAll() {
    firstNumb = '' // a
    secondNumb = '' // b
    mathSign= '' // sign 
    finish = false
    calcResult.textContent = 0 // out
}

document.querySelector('.calc-ac').onclick = clearAll

document.querySelector('.calculator--buttons').onclick = (event) =>{
    //* Нажата не кнопка 
    if(!event.target.classList.contains('calc--btn')) return;
    //* Нажата кнопка АС
    if(event.target.classList.contains('calc-ac')) return;

    calcResult.textContent = ''

    //* Получение нажатой кнопки
    const key = event.target.textContent

    //* Если нажата цифра или точка
    if(pressedDigit.includes(key)) {

        if(secondNumb === '' && mathSign === ''){
        firstNumb += key

        calcResult.textContent = firstNumb
        } 
        else if(firstNumb !== '' && secondNumb !== '' && finish){
            secondNumb = key
            finish = false
            calcResult.textContent = secondNumb
        }
        else{
            secondNumb += key
            calcResult.textContent = secondNumb
        }
        console.log(firstNumb, secondNumb, mathSign)
        return;
    }

    //* Если нажаты знаки
    if(pressedAction.includes(key)){
        mathSign = key
        calcResult.textContent = mathSign
        console.log(mathSign)
        return
    }

    //* Нажато равно
    if(key === '='){
        if(secondNumb === ''){
            secondNumb = firstNumb
        }
        switch(mathSign){
            case '+':
                firstNumb = (+firstNumb) + (+secondNumb)
                break;

            case '-':
                firstNumb = firstNumb - secondNumb
                break;

            case 'x':
                firstNumb = firstNumb * secondNumb
                break;

            case '/':
                if (secondNumb === '0'){
                    calcResult.textContent = 'Not today :D'
                    firstNumb = ''
                    secondNumb = ''
                    mathSign = ''
                    return
                }
                firstNumb = firstNumb / secondNumb
                break
        }
        finish = true
        calcResult.textContent = firstNumb
    }
}