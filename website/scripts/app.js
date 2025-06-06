// 

// create an array of movies
const films = [
{"movieID":305,"movieTitle":"Amen.","movieYear":2012,"movieRating":4},
{"movieID":470,"movieTitle":"I Spy","movieYear":1988,"movieRating":3},
{"movieID":413,"movieTitle":"Silent Night, Bloody Night","movieYear":2001,"movieRating":4},
{"movieID":495,"movieTitle":"Eden","movieYear":1997,"movieRating":1},
{"movieID":213,"movieTitle":"Shiver (Eskalofrío)","movieYear":1966,"movieRating":3},
{"movieID":224,"movieTitle":"Demon Wind","movieYear":2000,"movieRating":3},
{"movieID":493,"movieTitle":"Finding Fela!","movieYear":1995,"movieRating":1},
{"movieID":106,"movieTitle":"Dodsworth","movieYear":1993,"movieRating":3},
{"movieID":222,"movieTitle":"Flash of Genius","movieYear":2005,"movieRating":5},
{"movieID":272,"movieTitle":"Bachelor Apartment","movieYear":2002,"movieRating":5},
];


// Function openForm()
// Takes in 2 parameters, and event and an action
// Returns nothing.
function openForm(evt, action){
    // declare variables
    let i, tabContent, tabLinks;

    // Get All elements that have the classname of tabs.
    tabContent = document.getElementsByClassName('tab-form');
    for(i = 0; i < tabContent.length; i++){
        // Set display to none for all elements (with tabContent);
        tabContent[i].style.display = 'none';
    }
    // Get All elements with the class name of tabButton and remove the class of active.
    tabLinks = document.getElementsByClassName('tabs');
    for (i = 0; i < tabLinks.length; i++ ){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    // Show the current tab, and add the active class to the button that opened the tab.
    document.getElementById(action).style.display = "flex";
    evt.currentTarget.className += " active";
} 
// End of openForm()

// Open a tab by default
document.getElementById('defaultOpen').click();

