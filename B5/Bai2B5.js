function kiemTraChanLe() {
    var userInput = document.getElementById("numberInput").value;
    var number = parseInt(userInput);

    if (number % 2 === 0) {
      alert( number + " là số chẵn.");
    } else {
      alert( number + " là số lẻ.");
    }
  }