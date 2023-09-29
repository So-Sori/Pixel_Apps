let focusApp = document.getElementById("focus-app");
let apps = document.getElementById("apps");

apps.addEventListener("click",(e)=>{
    let id = e.target.id;

    switch (id) {
        case "1":
            let btnsContent = {
                "c":"C",
                "e":"E",
                "=":"=",
                "*":"*",
                "7":7,
                "8":8,
                "9":9,
                "/":"/",
                "4":4,
                "5":5,
                "6":6,
                "-":"-",
                "1":1,
                "2":2,
                "3":3,
                "+":"+",
                "0":0,
                ".":".",
            };

            let div = document.createElement("div");
            div.classList = "container-calculator";

            for (let key in btnsContent) {
                let btn = `<button type="button" id="element${key}">${btnsContent[key]}</button>`;
                console.log(key);
                console.log(btnsContent[key]);
                console.log(btn);
                div.appendChild(key);
            }
            focusApp.appendChild(div);
            break;
            
        case "2":
            focusApp.style.backgroundColor = "yellow";  
            break;
    
        default:
            console.log("something went wrong");
            break;
    }
})