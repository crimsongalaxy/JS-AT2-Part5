// 



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

