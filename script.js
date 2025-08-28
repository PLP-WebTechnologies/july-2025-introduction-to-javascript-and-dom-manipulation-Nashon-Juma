// Part 1: Variables and Conditionals
        function checkEligibility() {
            const age = document.getElementById('ageInput').value;
            let message;
            
            if (age >= 18) {
                message = `You are eligible to vote!`;
            } else {
                message = `You are not eligible to vote yet.`;
            }
            
            document.getElementById('eligibilityOutput').textContent = message;
        }
        
        // Part 2: Functions
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('calculationOutput').textContent = 'Please enter valid numbers.';
                return;
            }
            
            const sum = addNumbers(num1, num2);
            const product = multiplyNumbers(num1, num2);
            
            document.getElementById('calculationOutput').innerHTML = 
                `Sum: ${num1} + ${num2} = ${sum}<br>Product: ${num1} × ${num2} = ${product}`;
        }
        
        function addNumbers(a, b) {
            return a + b;
        }
        
        function multiplyNumbers(a, b) {
            return a * b;
        }
        
        // Part 3: Loops
        function generateTable() {
            const multiplier = parseInt(document.getElementById('multiplierInput').value);
            let tableHTML = '';
            
            if (isNaN(multiplier)) {
                document.getElementById('tableOutput').textContent = 'Please enter a valid number.';
                return;
            }
            
            for (let i = 1; i <= 10; i++) {
                tableHTML += `${multiplier} × ${i} = ${multiplier * i}<br>`;
            }
            
            document.getElementById('tableOutput').innerHTML = tableHTML;
        }
        
        // Part 4: DOM Manipulation
        function addItem() {
            const itemInput = document.getElementById('newItemInput');
            const itemText = itemInput.value.trim();
            
            if (itemText === '') return;
            
            const itemList = document.getElementById('itemList');
            const newItem = document.createElement('li');
            newItem.textContent = itemText;
            
            newItem.addEventListener('click', function() {
                this.remove();
            });
            
            itemList.appendChild(newItem);
            itemInput.value = '';
        }
        
        function clearList() {
            document.getElementById('itemList').innerHTML = '';
        }
        
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
