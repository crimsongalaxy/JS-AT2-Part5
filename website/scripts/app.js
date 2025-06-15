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













// const sortFilmsIDAsc = initMovies.sort(function(a, b) {
//     return a.movieID - b.movieID;
// });









// Create an instance of the MovieList class
// MovieList takes in the rootId and the movie array
let movieList = new MovieList('#mTableBody', initMovies);

// Event functions
// Search click
// A - Z click
// Z - A click

// Add a new movie to the list

// Update a movie in the list

// Delete a movie from the list




// UI Javascript
// Tabs section
// Function openForm
// Take in 2 parameters, an event and an action
// Return nothing
function openForm(evt, action) {
    // declare variables
    // tabContent = tabForm
    // tabLinks = tabButton
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
    // If this doesn't work go back to 2:15:00 in the video
    document.getElementById(action).style.display = "block";
    evt.currentTarget.className += " activeTab";
}
// End of the openForm function

// Open tab by default
document.getElementById('defaultOpen').click();


// Footer
// Inject the date into the footer
// I'm not doing this.




















