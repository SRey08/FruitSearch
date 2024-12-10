const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const lowerStr = str.toLowerCase(); // Convert input to lowercase
	return fruit.filter(item => item.toLowerCase().includes(lowerStr)); // Return matching fruits;
}

function searchHandler(e) {
	const inputVal = e.target.value; // Get user input
	const results = search(inputVal); // Get filtered results
	showSuggestions(results, inputVal); // Update suggestions list
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''; // Clear previous suggestions

	if (results.length > 0) {
	  suggestions.classList.add('has-suggestions'); // Show suggestions list
  
	  results.forEach(result => {
		const li = document.createElement('li');
  
		// Highlight the matching part of the suggestion
		const highlightedText = result.replace(
		  new RegExp(inputVal, 'gi'), // 'gi' for global, case-insensitive match
		  match => `<strong>${match}</strong>` // Wrap the matched part in <strong> to make it bold
		);
		li.innerHTML = highlightedText;
  
		li.addEventListener('mouseenter', () => li.classList.add('highlighted')); // Highlight on hover
		li.addEventListener('mouseleave', () => li.classList.remove('highlighted')); // Remove highlight
		suggestions.appendChild(li);
	  });
	} else {
	  suggestions.classList.remove('has-suggestions'); // Hide suggestions if no matches
	}
	
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent; // Update input with selected suggestion
		suggestions.classList.remove('has-suggestions'); // Hide suggestions
	  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);