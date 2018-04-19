window.addEventListener('load', () => {
  // declarando variables que contienen elementos del index.html
  var words = document.getElementById('input'); 
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  console.log(words);
  // evento para el input 
  words.addEventListener('keyup', (event) => {
    console.log(words.value);
    var wordsValue = words.value;
    // condicional para validar valores del input
    if ((event.keyCode === 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122) || wordsValue.length < 1) {
      alert('error: ingrese solo letras sin espacios en blanco!');
      // deshabilitando buttons
      button1.setAttribute('disabled', 'disabled');
      button2.setAttribute('disabled', 'disabled');
    } else {
      wordsValue; 
      // habilitando buttons
      button1.removeAttribute('disabled', 'disabled');
      button2.removeAttribute('disabled', 'disabled');
    }
  });
  // evento para el 1er button
  button1.addEventListener('click', () => {
    var wordsValue = words.value;
    // creamos la función de cifrado
    var cipher = (wordX) => {
      // convertimos todas las palabras a mayúsculas 
      var wordToUppercase = wordX.toUpperCase();
      var arr = wordToUppercase;
      console.log(arr);
      // declaramos una variable como contador asignando un valor vacío
      var count = '';
      // recorremos la variable arr
      for (let i = 0;i < arr.length;i++) {
        let arrCharcode = arr.charCodeAt(i) ;
        // utilizando codigo Ascci        
        let arrAscci = (arrCharcode - 65 + 33) % 26 + 65;
        let arrStringCharcode = String.fromCharCode(arrAscci);
        var sum = count += arrStringCharcode;
      }
      // creamos elementos 'p' con el valor de la variable 'sum' y agregamos dentro de un contenedor(<div>)
      let newElement = document.createElement('p');
      newElement.classList.add('style-p');
      newElement.innerHTML = sum;
      let containerWords = document.getElementById('container-words');
      containerWords.appendChild(newElement);
      console.log(containerWords);
    };
    // pasamos como argumento la variable wordsValue
    cipher(wordsValue);
  });
  // evento para el 2do button
  button2.addEventListener('click', () => {
    var wordsValue = words.value;
    // creamos la función de decifrado
    var decipher = (wordY) => {
      // convertimos todas las palabras a mayúsculas 
      var wordToUppercase = wordY.toUpperCase();
      var arr = wordToUppercase;
      console.log(arr);
      // declaramos una variable como contador asignando un valor vacío
      var count = '';
      // recorremos la variable arr
      for (let i = 0;i < arr.length;i++) {
        let arrCharcode = arr.charCodeAt(i) ;
        // utilizando codigo Ascci
        let arrAscci = (arrCharcode + 65 - 33) % 26 + 65;
        let arrStringCharcode = String.fromCharCode(arrAscci);
        var sum = count += arrStringCharcode;
      }
      // creamos elementos 'p' con el valor de la variable 'sum' y agregamos dentro de un contenedor(<div>)
      let newElement = document.createElement('p');
      newElement.classList.add('style-p');
      newElement.innerHTML = sum;
      let containerWords = document.getElementById('container-words');
      containerWords.appendChild(newElement);
      console.log(containerWords);
    };
    // pasamos como argumento la variable wordsValue
    decipher(wordsValue);
  });
});


