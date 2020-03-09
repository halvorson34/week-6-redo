let garage = [];

/*
Do not change newCar for base mode!
*/
function addCarButton(){
  let outputText = $( '#carInput' );
  $( '#addCarButton' ).on( 'click', newCar );
  console.log( outputText );
}

function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  return true;
} // end newCar
