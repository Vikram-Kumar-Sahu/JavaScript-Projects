const dictionary = async (word) => {
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3b14e3df45msh3f75845fe3d8eecp1b668fjsn5d63a2a80c49',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Word not found! HTTP Status: ${response.status}`);
        }
        const result = await response.json();

        // Update the word
        document.getElementById('word').textContent = result.word || 'Word not found';

        // Format the definition into points
        const definitionElement = document.getElementById('defination');
        definitionElement.innerHTML = ''; // Clear any existing content

        if (result.definition) {
            const cleanDefinition = result.definition
                .replace(/^\s*\d+\s*/gm, '') // Remove numbering from API response
                .replace(/^\s*[A-Za-z]+\s*\,?\s*\w*\s*$/gm, ''); // Remove author names or irrelevant tags
            const points = cleanDefinition.split(/(?:\.|\;)+/).filter((point) => point.trim() !== ''); // Split into points by punctuation

            const list = document.createElement('ul'); // Create a list
            points.forEach((point) => {
                const listItem = document.createElement('li');
                listItem.textContent = point.trim();
                list.appendChild(listItem);
            });
            definitionElement.appendChild(list); // Append the list to the definition container
        } else {
            definitionElement.textContent = 'Definition not available.';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('word').textContent = 'Error';
        document.getElementById('defination').textContent = 'Unable to fetch the definition. Please try again.';
    }
};

// Add event listener to the search button
document.getElementById('search').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const searchInput = document.getElementById('searchinput').value.trim();
    if (searchInput) {
        dictionary(searchInput); // Call the dictionary function
    } else {
        alert('Please enter a word to search!');
    }
});
