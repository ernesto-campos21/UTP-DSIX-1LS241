//Ernesto Campos, 8-977-1599
//Con las anotaciones que estoy colocando en este JS, puedo volver a entender el codigo despues de un tiempo.

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
                if (event.target.tagName === 'DIV') { //Se verifica que el elemento seleccionado sea un div mediante el tagName
                  const confirmDelete = confirm('¿Deseas borrar este elemento?'); //Aca se crea una ventana de confirmacion para borrar el elemento que se selecciono
                  if (confirmDelete) { //Si se acepta la confirmacion, se remueve el elemento
                    event.target.remove(); //Se remueve el elemento seleccionado
                  }
                  //No hace falta una parte else ya que si se cancela la confirmacion, no se remueve el elemento
                }
              },
        },
        methods: {

            //Funcion para obtener la secuencia de fibonacci... Se inicializa con numer1 en 0 y number2 en 1 que son los primeros en la secuencia, y se va sumando el numero anterior con el actual
            getSecuenciaFibonacci(NumberInput) {
                let SecuenciaFibonacci = [];
                let Number1 = 0;
                let Number2 = 1;
                let Number3 = 0;
                for (let i = 0; i < NumberInput; i++) {
                  SecuenciaFibonacci.push(Number1); //Con esta funcion se agrega el numero a la secuencia
                  Number3 = Number1 + Number2;
                  Number1 = Number2; //Se cambia el valor de number1 por el de number2
                  Number2 = Number3; //Se cambia el valor de number2 por el de number3
                }
                
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