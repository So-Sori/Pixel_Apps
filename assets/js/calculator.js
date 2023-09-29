let calculator = document.getElementById("calculator").elements;

for (let i = 1; i < calculator.length; i++) {

    if(calculator[i] !== calculator[0] && calculator[i] !== calculator[3] && calculator[i] !== calculator[2] ){
        calculator[i].addEventListener("click",()=>{
            calculator[0].value += `${calculator[i].value}`;
        })
    }
    if(calculator[i] === calculator[3] ){
        calculator[3].addEventListener("click",()=>{
            calculator[0].value = calculator[0].value ? eval(calculator[0].value) : calculator[0].value;
        })
    }
    if(calculator[i] === calculator[2] ){
        calculator[2].addEventListener("click",()=>{
            let arr = calculator[0].value.split("");
            arr.pop()
            calculator[0].value = arr.join("");
        })
    }
}
