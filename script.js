/*author - Pawan Kumar */
let tries = 0;
let randomNum = Math.floor(Math.random() * 101)

const handleInput = () => {
   const userInput = document.getElementById('userInput');
   let inputValue = userInput.value;
   inputValue = parseInt(inputValue);

   if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
      alert("Please enter a valid number between 0 and 100.");
      return;
   }

   tries++;

   let message;
      if (inputValue > randomNum) {
         message = "Your guess is greater than random number. Please try again !!"
      }
      else if (inputValue < randomNum) {
         message = "Your guess is smaller than random number. Please try again !!"
      }
      else {
         const score = 101 - tries;
         message = "Congratulations !! You guessed the correct Number.<br> Your Score is :" + score;

         tries = 0;
         randomNum = Math.floor(Math.random() * 101);
      }
      

   const outputElement = document.getElementById('output');
   outputElement.innerHTML = message;

   userInput.value = '';
}