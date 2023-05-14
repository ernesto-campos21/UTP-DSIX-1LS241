(()=>{
    const LAB4 = {
        htmlElements: {
            SecuenciaFibonacciForm: document.getElementById('SecuenciaFibonacciForm'),
            SecuenciaFibonacciInput: document.getElementById('SecuenciaFibonacciInput'),
            Answ: document.getElementById('Answ'),
        },
        init(){
            LAB4.htmlElements.SecuenciaFibonacciForm.addEventListener('submit',LAB4.handlers.SecuenciaFibonacciFormSubmitHandler);
            LAB4.htmlElements.Answ.addEventListener('click', LAB4.handlers.DivClickHandler);
        },
        handlers: {
            SecuenciaFibonacciFormSubmitHandler(event){
                event.preventDefault();
                const NumberInput = parseInt(LAB4.htmlElements.SecuenciaFibonacciInput.value);
                const SecuenciaFibonacci = LAB4.methods.getSecuenciaFibonacci(NumberInput);
                LAB4.methods.showSecuenciaFibonacci(SecuenciaFibonacci);
            },

            DivClickHandler(event) {
                if (event.target.tagName === 'DIV') {
                  const confirmDelete = confirm('¿Deseas borrar este elemento?');
                  if (confirmDelete) {
                    event.target.remove();
                  }
                }
              },
        },
        methods: {
            getSecuenciaFibonacci(NumberInput) {
                let SecuenciaFibonacci = [];
                let Number1 = 0;
                let Number2 = 1;
                let Number3 = 0;
                for (let i = 0; i < NumberInput; i++) {
                  SecuenciaFibonacci.push(Number1);
                  Number3 = Number1 + Number2;
                  Number1 = Number2;
                  Number2 = Number3;
                }
                //console.log(SecuenciaFibonacci);
                return SecuenciaFibonacci;
              },

              showSecuenciaFibonacci(SecuenciaFibonacci) {
                const Answ = LAB4.htmlElements.Answ;
                
                Answ.innerHTML = '';
                SecuenciaFibonacci.forEach((num) => {
                    const divElement = document.createElement("div");
                    divElement.classList.add("NumbersClass");
                    divElement.id = "Numbers" + num;
                    divElement.textContent = num;
                    Answ.appendChild(divElement);
                });
            }
        },
    };
    LAB4.init();
})();