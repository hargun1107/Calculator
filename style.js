let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = eval(string);
                
                if (string === Infinity || string === -Infinity) {
                    string = "Error";
                }
                
                string = String(string);
            } catch (error) {
                string = "Error";
            }
            input.value = string;
        } 
        
        else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
        } 
        
        else if (buttonValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else if ((buttonValue === '*' || buttonValue === '/' || buttonValue === '.' || buttonValue === '%') && string === "") {
            return;
        }
        
        else {
            string += buttonValue;
            input.value = string;
        }
    });
});