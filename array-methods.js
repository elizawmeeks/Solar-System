var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(value){
	var el = document.getElementById("planets");
	el.innerHTML += `${value}, `;
})


// Use the map method to create a new array where the first letter of each planet is capitalized

var punctuation = planets.map(function(value){
	return value.charAt(0).toUpperCase() + value.slice(1, value.length);
})

console.log("punctuation", punctuation);

// Use the filter method to create a new array that contains planets with the letter 'e'

var withE = planets.filter(function(value){
	for (var i = 0; i < value.length; i++){
		if (value.charAt(i).toUpperCase() === "E"){
			return value;
		}
	}
})

console.log("withE", withE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function (prev, curr){
	return prev + " " + curr;
});

console.log(`The sentence is: ${sentence}.`);