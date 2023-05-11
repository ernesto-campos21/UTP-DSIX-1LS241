(()=>{
    const LAB3 = {
        htmlElements: {
            PalindromoForm: document.getElementById('PalindromoForm'),
            PalindromoInput: document.getElementById('NumberInput'),

            CharCountForm: document.getElementById('CharCountForm'),
            CharCountInput: document.getElementById('CharCountInput'),

            AbisiestoForm: document.getElementById('AbisiestoForm'),
            AbisiestoInput: document.getElementById('AbisiestoInput'),

            SumNumPrimosForm: document.getElementById('SumNumPrimosForm'),
            SumNumPrimosInput: document.getElementById('SumNumPrimosInput'),
        },
        init(){
            LAB3.htmlElements.PalindromoForm.addEventListener('submit',LAB3.handlers.PalindromoFormSubmitHandler);
            LAB3.htmlElements.CharCountForm.addEventListener('submit',LAB3.handlers.CharCountFormSubmitHandler);
            LAB3.htmlElements.AbisiestoForm.addEventListener('submit',LAB3.handlers.AbisiestoFormSubmitHandler);
            LAB3.htmlElements.SumNumPrimosForm.addEventListener('submit',LAB3.handlers.SumNumPrimosFormSubmitHandler);
        },
        handlers: {
            PalindromoFormSubmitHandler(event){
                event.preventDefault();
                const NumberInput = LAB3.htmlElements.PalindromoInput.value;
                const Palindromo = LAB3.methods.getPalindromo(NumberInput);
            },
            CharCountFormSubmitHandler(event){
                event.preventDefault();
                const CharCountInput = LAB3.htmlElements.CharCountInput.value;
                const CharCount = LAB3.methods.getCharCount(CharCountInput);
            },
            AbisiestoFormSubmitHandler(event){
                event.preventDefault();
                const AbisiestoInput = LAB3.htmlElements.AbisiestoInput.value;
                const Abisiesto = LAB3.methods.getAbisiesto(AbisiestoInput);
            },
            SumNumPrimosFormSubmitHandler(event){
                event.preventDefault();
                const SumNumPrimosInput = LAB3.htmlElements.SumNumPrimosInput.value;
                const SumNumPrimos = LAB3.methods.getSumNumPrimos(SumNumPrimosInput);
            }
        },
        methods: {
            getPalindromo(NumberInput){
                const Palindromo = NumberInput.split('').reverse().join('');
                if (NumberInput === Palindromo) {
                    alert('El numero es palindromo');
                } else {
                    alert('El numero no es palindromo');
                }
            },

            getCharCount(CharCountInput){
                const CharCount = CharCountInput.toLowerCase();
                const counter = {};
                let counterResult = "";
                for (let i = 0; i < CharCount.length; i++) {
                    const CharCountResult = CharCount[i];
                    counter[CharCountResult] = (counter[CharCountResult] || 0) + 1;
                }

                for(let j in counter){
                    counterResult += j + "=" + counter[j] + "\n";
                }

                alert(counterResult);
                
            },

            getAbisiesto(AbisiestoInput){
                if (AbisiestoInput % 4 === 0 && AbisiestoInput % 100 !== 0 || AbisiestoInput % 400 === 0) {
                    alert('El año es bisiesto');
                } else {
                    alert('El año no es bisiesto');
                }
            },

            getSumNumPrimos(SumNumPrimosInput){
                let SumNumPrimos = 1;
                let prime1 = true;

                for (let i = 2; i < SumNumPrimosInput; i++) {
                    if (SumNumPrimosInput % i === 0) {
                        prime1 = false;
                        break;
                    }
                }

                if(!prime1){
                    alert('El numero no es primo, ingrese otro numero');
                }
                else if(SumNumPrimosInput > 0 && SumNumPrimosInput < 1000000){
                        for (let i = 2; i <= SumNumPrimosInput; i++) {
                            let prime = true;
                        
                            for (let j = 2; j <= Math.sqrt(i); j++) {
                                if (i % j === 0) {
                                    prime = false;
                                    break;
                                }
                            }
                        
                            if (prime) {
                                SumNumPrimos += i;
                            }
                        }
                        alert(SumNumPrimos);
                }
                else{
                        alert('El numero no esta en el rango de 0 a 1000000, ingrese otro numero ');
                    }
                
            }
        },
    };
    LAB3.init();
})();