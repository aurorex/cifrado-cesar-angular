angular.module("cifradoCesar", []).controller("cifradoController", function($scope){
  
  $scope.textInput = "";

  $scope.container = "";
  
  $scope.cifrar = function(){
    // alert('hola angular');
    console.log($scope.textInput.toUpperCase());
    var count="";
    // $scope.container.push($scope.textInput);

    for (let i = 0;i < $scope.textInput.length;i++) {
      console.log($scope.textInput.length);

      let arrCharcode = $scope.textInput.charCodeAt(i) ;
      // utilizando codigo Ascci        
      let arrAscci = (arrCharcode - 65 + 33) % 26 + 65;
      let arrStringCharcode = String.fromCharCode(arrAscci);
      var sum = count += arrStringCharcode;
      console.log(sum);  
      $scope.container= sum;
      $scope.enunciado=  $scope.textInput + " cifrado: ";

      // sum.push($scope.container);

    }
    return sum;
  }

  $scope.descifrar = function(){
    console.log($scope.textInput.toUpperCase());

    var count = '';
    // recorremos la variable arr
    for (let i = 0;i < $scope.textInput.length;i++) {
      let arrCharcode = $scope.textInput.charCodeAt(i) ;
      // utilizando codigo Ascci
      let arrAscci = (arrCharcode + 65 - 33) % 26 + 65;
      let arrStringCharcode = String.fromCharCode(arrAscci);
      var sum = count += arrStringCharcode;
      console.log(sum);
      $scope.container= sum;
      $scope.enunciado= $scope.textInput + " decifrado: ";

    }
    return sum
  }

})