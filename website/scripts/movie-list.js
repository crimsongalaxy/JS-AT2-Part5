// The MovieList Class
class MovieList {
    constructor(htmlID, movies) {
        this.htmlID = htmlID // the html id of where the list is to be shown
        this.movieList = movies; // the array of movies to be displayed
        this.refresh(this.movieList);
    } // End of the constructor

    // Methods

    // Generate the table
    genMovieTable(mArray) {
        // define the variable
        this.mArray = mArray
        // clear any existing table rows
        this.removeElements();
        // find the body of the movie-table in the HTML
        let mTable = document.querySelector(this.htmlID);
        // loop the array to get the data for each movie
        mArray.forEach(CreateMovieTable);
        
        function CreateMovieTable(movie) {

            // create a blank row
            const newRow = document.createElement('tr');
            // give the blank row the class of "row"
            newRow.classList.add('row')

            // add the data into the blank row
            newRow.innerHTML = `
                <td>${movie.movieID}</td>
                <td>${movie.movieTitle}</td>
                <td>${movie.movieYear}</td>
                <td>${movie.movieRating}</td>
            `;

            // add the populated row into the mTable variable
            mTable.appendChild(newRow);
        }
    }


    // Generate the movieList based on search term


    // Remove all list element from the DOM
    removeElements() {
        // find the parent
        const rootElement = document.querySelector(this.htmlID);
        // Get all elements with class of row
        const childNodes = document.getElementsByClassName('row');
        // how many do we have?
        const len = childNodes.length -1;
        for(let i = len; i >= 0; i--) {
            // find last element in the array
            const child = childNodes[i];
            // remove that element
            rootElement.removeChild(child);
        }
    }



    // Refresh function
    refresh(mArray) {
        this.mArray = mArray
        // remove the current list
        this.removeElements();
        // add the new list
        this.genMovieTable(this.mArray);
    }


    // Add function
    add(id, title, year, rating) {
        // add a new movie to the end
        if (id == "" || title == "" || year == "" || rating == "") {
            return;
        } else {
            this.movieList.push({movieID: id, movieTitle: title, year, movieYear: year, movieRating: rating});
            this.refresh(this.movieList);
        }
    }


    // Create a sequential search function to find a movies index from its ID.
    // Create the search algorithm 
    findIndex(arraySearch, target){
        // Default value to indicate the key was not found.
        let found = -1;
        // Loop the array to find the key.
        for (let i = 0; i < arraySearch.length; i++) {
            // If the key is found store the index in the "found" variable (replacing the default value), and break the loop.
            if(arraySearch[i].movieID == target) {
                found = i;
                break;
            }
        } // End of the for loop.

        return found;
    }


    // Update function
    update(ID, title, year, rating) {
        // find the index that matches the ID
        const index = this.findIndex(this.movieList, ID);
        if (id == "" || title == "" || year == "" || rating == "") {
            return;
        } else {
        // update the title
        this.movieList[index].movieTitle = title;
        // update the year
        this.movieList[index].movieYear = year;
        // update the rating
        this.movieList[index].movieRating = rating;
        // refresh the list
        this.refresh(this.movieList);
        }
    }


    // Delete function
    delete(ID) {
        // Check if the index is in the array
        const idIndex = this.findIndex(this.movieList, ID)

        // If it was found:
        if (idIndex != -1) {
            // Remove a movie from the array
            this.movieList.splice(this.findIndex(this.movieList, idIndex), 1);
            // Refresh
            this.refresh(this.movieList);
        }
    }


    // Sort A - Z
    sortAZ() {
        this.movieList.sort(function(a, b) {
            return a.movieTitle.localeCompare(b.movieTitle);
        });
        this.refresh(this.movieList);
    }


    // Sort Z - A
    sortZA() {
        this.movieList.sort(function(a, b) {
            return b.movieTitle.localeCompare(a.movieTitle);
        });
        this.refresh(this.movieList);
    }


    // Sort Rating
    sortRating() {
        this.movieList.sort(function(a, b) {
            return Number(b.movieRating) - Number(a.movieRating);
        });
        this.refresh(this.movieList);
    }


    // Sort by ID
    sortID() {
        this.movieList.sort(function(a, b) {
            return Number(a.movieID) - Number(b.movieID);
        });
        this.refresh(this.movieList);
    }


    // Search by partial title
    search(titleString) {
        // create an array to hold the search results
        let shortList = [];
        // loop the array to compare the titleString with movieTitle
        for (let movie of this.movieList) {
            // Compare titleString and movieTitle
            if(movie.movieTitle.toLowerCase().includes(titleString)) {
                // if the titleString is in movieTitle add it to the shortlist
                shortList.push(movie);
            }
        }
        // Create the list to display
        this.genMovieTable(shortList);
    }

}
