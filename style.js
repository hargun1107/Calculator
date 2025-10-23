let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = String(new Function('return ' + string)());
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
        
        else if (string === "" && (buttonValue === '*' || buttonValue === '/' || buttonValue === '.' || buttonValue === '%')) {
            return;
        }

        else {
            string += buttonValue;
            input.value = string;
        }
    });
});