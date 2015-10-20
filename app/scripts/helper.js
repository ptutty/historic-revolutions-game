
// function for creating array of 11 values given an increment setting
// different user avatars require different range values to trigger fire
// see app service User.fireIncrement
// move to module eventually? 

function fireIncrementsFactory(incrementSetting){
	var fireIncrements = [];
	var value = 0;
	var increments = 11;

	for (var i = 0; i < increments;  i++) {
  		value = incrementSetting * i;
  		if (i !== 0 ){
  			fireIncrements.push(value-1);
	  	} else {
	  		fireIncrements.push(value);
	  	}
	};
	return fireIncrements;
}