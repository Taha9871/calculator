document.addEventListener("DOMContentLoaded", function () {
    const displayBox = document.querySelector('.box');
    let displayValue = '';


    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }
        
    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        if (y === 0) {
            return 'ERROR!';
        }
        return x / y;
    }

    function evaluateExpression(expression) {
        try {
            const tokens = expression.split(/([\+\-\*\/])/).filter(Boolean);
            let result = parseFloat(tokens[0]);

            for (let i = 1; i < tokens.length; i += 2) {
                const operator = tokens[i];
                const nextNumber = parseFloat(tokens[i + 1]);

                switch (operator) {

                    case '+':
                        result = add(result, nextNumber);
                        break;
                    case '-':
                        result = subtract(result, nextNumber);
                        break;
                    case '*':
                        result = multiply(result, nextNumber);
                        break;
                    case '/':
                        result = divide(result, nextNumber);
                        break;
                }
            }
            return result;
        } catch (e) {
            return 'Error';
        }

    }

    const buttons = document.querySelectorAll('.btn-1, .btn-2');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'AC') {
                displayValue = '';
            } else if (value === '=') {
                const result = evaluateExpression(displayValue);
                displayValue = result.toString();
            } else {
                displayValue += value;
            }
            displayBox.textContent = displayValue;
        });
    });
});

