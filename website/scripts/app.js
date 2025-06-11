// Create an array of movies

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
    tabButton = document.getElementsByClassName(tabButton);
    for(i = 0; i < tabButton.length; i++) {
        // remove the active class
        tabButton[i].classname = tabButton[i].classname.replace("active", "");
    }

    // Show the current tab and add the active class to the button that opened the tabForm
    // If this doesn't work go back to 2:15:00 in the video
    document.getElementById(action).style.display = "true";
    evt.currentTarget.className += " active";
}
// End of the openForm function

// Open tab by default
document.getElementById('defaultOpen').click();

// Footer
// Inject the date into the footer
// I'm not doing this.
