console.log('Hello everyone!');


var beerSong = function (){

	return{

		quantity: function(){
			for(i=100;i>0;i--){
				console.log(i + " bottles of beer on the wall, " + i + " take one down and pass it around, " + (--i) + " bottles of beer on the wall.");
				i++;
			}
		}
	}
}



var Areas = function(){
		var area = 0;

	return{

		square: function (lado1, lado2){
			area = lado1*lado2;
			return area;
		},

		triangle: function(base,altura){
			area = (base*altura)/2;
			return area;

		},
		circle: function (rad){
			area = 3.14*Math.pow(rad,2);
			return area;
		}
	}
}

/*
try{
  if(typeof variableNoExiste === "undefined"){
    throw new Error("Variable no existe");
  }
  catch(error){
    //funcion normal
    if (error instanceof TypeError){
      console.log('EL error fue manejado agraciadamente')
    } else {

    }

  }
}
*/
