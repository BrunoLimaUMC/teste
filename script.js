let display = document.getElementById("display")
let currentInput = ""


function inserir_numero(value){
    currentInput += value
    display.textContent = currentInput
}

function executarOperacao(a, b, callback){
    return callback(a, b)
}

function inserir_operador(operador){
    if (currentInput === "" && operador !== ".")return
    currentInput += operador;
    display.textContent = currentInput;

}

function somar(a,b){
    return a+b
}

function subt(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
}

function calcular(){
    try{
        let operador

        if(currentInput.includes("+")) operador = "+"
        else if(currentInput.includes("-")) operador = "-"
        else if(currentInput.includes("*")) operador = "*"
        else if(currentInput.includes("/")) operador = "/"

        if(!operador) return

        let partes = currentInput.split(operador)

        let num1 = Number(partes[0])
        let num2 = Number(partes[1])

        let operacao

        if(operador  === "+") operacao = somar
        if(operador === "-") operacao = subt
        if(operador === "*") operacao = mult
        if(operador === "/") operacao = dividir

        let resultado = executarOperacao(num1,num2, operacao)

        if(!Number.isInteger(resultado)){
            resultado = resultado.toFixed(2)
        }

        currentInput = resultado.toString()
        display.textContent = currentInput
        }
        catch(erro){
            display.textContent = "ERRO"
            currentInput = ""
        }
    }


function limpar(){
    currentInput = "";
    display.textContent = currentInput;
}