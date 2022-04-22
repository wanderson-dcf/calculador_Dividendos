// Pegar os botôes que serão usados para resetar e calcular.
const botaoCalcular = document.getElementById('botaoCalcular');
const botaoResetar = document.getElementById('botaoResetar')

// objeto ganhos que será usado para receber os dados dos inputs e fazer as operações matematicas.
const objetoDividend = {
    ativos: 0,
    dividendo: 0,
    meses: 0,
    mensal: 0,
    semestral: 6,
    anual: 12,
    calc_m: function (ativo, divi, mes) {
        return (this.ativos * this.dividendo) * this.meses;
    },
    calc_s: function (ativo, divi, semest) {
        return (this.ativos * this.dividendo) * this.semestral; 
    },
    calc_a: function (ativo, divi, anual) {
        return (this.ativos * this.dividendo) * this.anual;
    }
}
// Evento que retornará o resultado das operações.
botaoCalcular.addEventListener('click',()=>{
    // Pegar os inputs das operações.
    let inputAtivos = document.getElementById('inputAtivos').value;
    let inputDividendos = document.getElementById('inputDividendos').value;
    let inputMeses = document.getElementById('inputMeses').value;

    //converter os inputs das operações para numbers. 
    let convertInputAtivos = Number(inputAtivos);
    let convertInputDividendos = Number(inputDividendos);
    let convertInputMeses = Number(inputMeses);

    // Fazer o objetoDividend receber os dados capturados do html.
    objetoDividend.ativos = convertInputAtivos;
    objetoDividend.dividendo = convertInputDividendos;
    objetoDividend.meses = convertInputMeses;

    //Pegar os tds dos resultados.
    let tdGMensal = document.getElementById('tdGMensal')
    let tdGSemestral = document.getElementById('tdGSemestral')
    let tdGAnual = document.getElementById('tdGAnual')

    // Fazer a table do html receber as operações do objeto.
    tdGMensal.innerHTML = `${Math.floor(objetoDividend.calc_m())} R$ em ${objetoDividend.meses} mês...`;
    tdGSemestral.innerHTML = `${Math.floor(objetoDividend.calc_s())} R$ em 6 mêses.`;
    tdGAnual.innerHTML = `${Math.floor(objetoDividend.calc_a())} R$ em 12 mêses.`;

    // Verificar se os campos estão vazios se sim mostrar mensagem de alerta.
    if (inputAtivos.value == "" || inputDividendos == "" || inputMeses == ""){
        alert('Algum campo esta vazio verifique e tente novamente.')
    }
})

// Evento que irá resetar os campos das operações.
botaoResetar.addEventListener('click', ()=> {
   // Pegar os campos dos inputs para fazer as verificações.
    let inputAtivos = document.getElementById('inputAtivos');
    let inputDividendos = document.getElementById('inputDividendos');
    let inputMeses = document.getElementById('inputMeses');

    let diferentOfNull =  inputAtivos != 0 || inputAtivos != "" && inputDividendos != 0 || inputDividendos != "" && inputMeses != 0 || inputMeses != "";
   
    // Verificar se os campos dos inputs estão vazios se não estiver esvazia-los.
    if ( diferentOfNull ){
       inputAtivos.value = "";
       inputDividendos.value = "";
       inputMeses.value = "";
    }
})
