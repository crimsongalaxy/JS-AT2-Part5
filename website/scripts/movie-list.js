// The MovieList Class


class MovieList {
    constructor(htmlID, movies) {
        this.htmlID = htmlID // the html id of where the list is to be shown
        this.movieList = movies; // the array of movies to be displayed
        this.refresh();
        console.log(`This is the last line of the constructor.`);
    } // End of the constructor

    // Methods
    // Generate one row of the list
    // movieRow(title, year) {
    //     // get the parent element
    //     const rootElement = document.getElementById(this.rootId);
    //     // create our new list item
    //     const row = document.createElement('li');
    //     // create the text and add the class to the new list item
    //     row.classList.add('row');
    //     row.textContent = `${title} (${year})`;
    //     // add the new element to the DOM
    //     rootElement.appendChild(row);
    // }

    // // Generate all rows
    // genMovieList() {
    //     // Loop through the array
    //     for(let i = 0; i < this.movieList.length; i++) {
    //         let movie = this.movieList[i];
    //         // Call the movieRow function to generate the row.
    //         this.movieRow(movie.title, movie.year);
    //     }
    // }





    // Generate the table
    genMovieTable() {
        console.log(`This is the 1st line of genMovieTable`);
        // find the body of the movie-table in the HTML
        let mTable = document.querySelector(this.htmlID);
        console.log('Found:', mTable);

        console.log(`This is the 2nd line of genMovieTable`);
        // loop the array to get the data for each movie
        initMovies.forEach(CreateMovieTable);
        
        console.log(`This is the 3rd line of genMovieTable`);
        function CreateMovieTable(movie) {

            console.log(`This is the 4th line of genMovieTable`);
            // create a blank row
            const newRow = document.createElement('tr');

            console.log(`This is the 5th line of genMovieTable`);
            // add the data into the blank row
            newRow.innerHTML = `
                <td>${movie.movieID}</td>
                <td>${movie.movieTitle}</td>
                <td>${movie.movieYear}</td>
                <td>${movie.movieRating}</td>
            `;

            console.log(`This is the 6th line of genMovieTable`);
            // add the populated row into the mTable variable
            mTable.appendChild(newRow);

            console.log(`This is the 7th line of genMovieTable`);
        }
    }





    // Generate the movieList based on search term

    // Remove all list element from the DOM >>> Pretty sure I don't need to do this because I used a different logic.



    // Refresh function
    refresh() {
        console.log(`You called the refresh function.`);
        this.genMovieTable();
    }
    // Add function
    add(id, title, year, rating) {
        console.log(`You called the add function.`);
        // add a new movie to the end
        this.movieList.push({id: id, title: title, year: year, rating: rating});
        console.log(`A new movie should have been added.`);
        this.refresh(); // not sure if I will need this
    }


    // Update function
    // Delete function

    // Sort A - Z
    // Sort Z - A
    // Sort Rating

    // Search by partial title

}

