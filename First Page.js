/*Get Character One, Two, and Three Selection Boxes*/
  const wizard = document.getElementById("characterOne")
  const knight = document.getElementById("characterTwo");
  const darkKnight = document.getElementById("characterThree");

/*Define Character Selection Function and Open corresponding Page*/
  function characterOneSelection() {
      setTimeout(() => {
          window.location.href = "Wizard Page.html";  
        }, 300);
      }
  function characterTwoSelection() {
      setTimeout(() => {
        window.location.href = "Knight Page.html";  
      }, 300);
    }
  function characterThreeSelection() {
    setTimeout(() => {
        window.location.href = "Dark Knight.html";  
      }, 300);
    }

/*Add Event Listener to Chracter Selection Boxes*/
  wizard.addEventListener("click", characterOneSelection);  
  knight.addEventListener("click", characterTwoSelection);  
  darkKnight .addEventListener("click", characterThreeSelection); 