// Create an array of movies
let initMovies = [
    {movieID : 4545, title : 'Stargate', year : 1994, rating : 6},
    {movieID : 9874, title : 'Aladdin', year : 1992, rating : 10},
    {movieID : 3248, title : 'The Matrix', year : 1999, rating : 9},
    {movieID : 8541, title : 'Waterworld', year : 1995, rating : 6},
    {movieID : 3465, title : 'Watership Down', year : 1984, rating : 7},
    {movieID : 6577, title : 'The Shawshank Redemption', year : 1994, rating : 10},
    {movieID : 7460, title : 'Fight Club', year : 1999, rating : 10},
    {movieID : 1687, title : 'Transformers: The Movie', year : 1994, rating : 6},
    {movieID : 5521, title : 'Poolhall Junkies', year : 2002, rating : 8},
    {movieID : 2467, title : 'Green Street Hooligans', year : 2005, rating : 8}
]




// Create an instance of the MovieList class
// MovieList takes in the rootId and the movie array

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
// Take in 2 parameters, and event and an action
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
