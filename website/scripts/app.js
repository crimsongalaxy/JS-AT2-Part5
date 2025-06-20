// Create an array of movies
let initMovies = [
    {movieID : 4545, movieTitle : 'Stargate', movieYear : 1994, movieRating : 6},
    {movieID : 9874, movieTitle : 'Aladdin', movieYear : 1992, movieRating : 10},
    {movieID : 3248, movieTitle : 'The Matrix', movieYear : 1999, movieRating : 9},
    {movieID : 8541, movieTitle : 'Waterworld', movieYear : 1995, movieRating : 6},
    {movieID : 3465, movieTitle : 'Watership Down', movieYear : 1984, movieRating : 7},
    {movieID : 6577, movieTitle : 'The Shawshank Redemption', movieYear : 1994, movieRating : 10},
    {movieID : 7460, movieTitle : 'Fight Club', movieYear : 1999, movieRating : 10},
    {movieID : 1687, movieTitle : 'Transformers: The Movie', movieYear : 1994, movieRating : 6},
    {movieID : 5521, movieTitle : 'Poolhall Junkies', movieYear : 2002, movieRating : 8},
    {movieID : 2467, movieTitle : 'Green Street Hooligans', movieYear : 2005, movieRating : 8}
]


// Create an instance of the MovieList class
// MovieList takes in the rootId and the movie array
let movieList = new MovieList('#mTableBody', initMovies);

// Sort the list by movieID as the "default" sort order
movieList.sortID();

// Event functions
// Search click
function searchClick() {
    // Get the form elements from the DOM
    let formElements = document.getElementById("search-form").elements;
    // Get the id
    let searchString = formElements["search"].value.toLowerCase();

    // pass the searchString to the search function
    movieList.search(searchString);

    // clear the input field
    formElements.search.value = "";
}

// A - Z click
function azClick () {
    movieList.sortAZ();
}

// Z - A click
function zaClick () {
    movieList.sortZA();
}

// Rating click
function ratingClick () {
    movieList.sortRating();
}

// Add a refresh click to the movie list heading button
function refreshClick() {
    movieList.sortID();
}

// Add a new movie to the list
function addClick() {
    // Get the form elements from the DOM
    let formElements = document.getElementById("add-form").elements;
    // Get the id
    let id = formElements["ID"].value;
    // Get the title
    let title = formElements["title"].value;
    // Get the year
    let year = formElements["year"].value;
    // Get the rating
    let rating = formElements["rating"].value;

    // save the new movie
    movieList.add(Number(id), title, Number(year), Number(rating));

    // clear the input fields
    formElements.ID.value = "";
    formElements.title.value = "";
    formElements.year.value = "";
    formElements.rating.value = "";
}

// Update a movie in the list
function upClick() {
    // Get the form elements from the DOM
    let formElements = document.getElementById("up-form").elements;
    // Get the id
    let id = formElements["ID"].value;
    // Get the title
    let title = formElements["title"].value;
    // Get the year
    let year = formElements["year"].value;
    // Get the rating
    let rating = formElements["rating"].value;

    // save the new movie
    movieList.update(Number(id), title, Number(year), Number(rating));

    // clear the input fields
    formElements.ID.value = "";
    formElements.title.value = "";
    formElements.year.value = "";
    formElements.rating.value = "";
}

// Delete a movie from the list
function delClick() {
    // Get the form elements from the DOM
    let formElements = document.getElementById("del-form").elements;
    // Get the id
    let id = formElements["ID"].value;

    // delete the movie
    movieList.delete(Number(id));

    // clear the input fields
    formElements.ID.value = "";
}




// UI Javascript
// Tabs section
function openForm(evt, action) {
    // declare variables
    let i, tabForm, tabButton;

    // Get all elements that have the classname of tabForm
    tabForm = document.getElementsByClassName('tabForm');
    for(i = 0; i < tabForm.length; i++) {
        // set the display to none for all elements with the classname of tabForm
        tabForm[i].style.display = 'none';
    }

    // Get all the elements that have the classname of tabButton and remove the class of active
    tabButton = document.getElementsByClassName('tabButton');
    for(i = 0; i < tabButton.length; i++) {
        // remove the active class
        tabButton[i].className = tabButton[i].className.replace("activeTab", "");
    }

    // Show the current tab and add the active class to the button that opened the tabForm
    document.getElementById(action).style.display = "block";
    evt.currentTarget.className += " activeTab";
}
// End of the openForm function

// Open tab by default
document.getElementById('defaultOpen').click();
