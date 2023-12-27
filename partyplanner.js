const cohort = "2310-FSA-ET-WEB-PT-SF-B";
const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/${cohort}/events";


// Define an empty array to store the data
let users = [];

// Use the fetch API to get the data from the API
fetch(API_URL)
  .then((response) => {
    // Check if the response is ok
    if (response.ok) {
      // Parse the response as JSON
      return response.json();
    } else {
      // Throw an error if the response is not ok
      throw new Error("Try Again");
    };
  })
  .then((data) => {
    // Loop through the data and push each item into the array
    // You can also use a for loop or a forEach() method here
    users = data.map((user) => user);

    // Display the array in the console
    console.log(users);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });

    
    // Array to store the parties input
    let parties = [];


    // A function to create a party object from the form inputs
    function createParty(name, date, time, description) {
        return {
            name: name,
            date: date,
            time: time,
            description: description
        };
    };

    // A function to create a list item element from a party object
    function createListItemElement(party) {
        // Create a list item element
        let li = document.createElement("li");
        li.className = "party";

        // Create a div element to hold the party information
        let div = document.createElement("div");
        div.className = "party-div";

        // Create a span element to display the party name
        let name = document.createElement("span");
        name.className = "party-Name";
        name.textContent = party.name;

        // Create a span element to display the party date
        let date = document.createElement("span");
        date.className = "party-date";
        date.textContent = party.date;

        // Create a span element to display the party time
        let time = document.createElement("span");
        time.className = "party-time";
        time.textContent = party.time;
    
        // Create a p element to display the party description
        let description = document.createElement("p");
        description.className = "party-description";
        description.textContent = party.description;

        // Append the party information elements to the div element
        div.appendChild(name);
        div.appendChild(date);
        div.appendChild(time);
        div.appendChild(description);

        // Create a button element to delete the party
        let button = document.createElement("button");
        button.className = "delete-button";
        button.textContent = "Delete";

        // Add an event listener to the button element
        button.addEventListener("click", function() {
            // Find the index of the party in the parties array
            let index = parties.indexOf(party);

            

            // Remove the party from the parties array
            parties.splice(index, 1);

            // Remove the list item element from the party list element
            partyList.removeChild(li);
        });

        // Append the div and button elements to the list item element
        li.appendChild(div);
        li.appendChild(button);

        // Return the list item element
        return li;
    }

    // A function to display the parties array on the web page
    function displayParties() {
        // Clear the party list element
        partyList.innerHTML = "";

        // Loop through the parties array
        for (let party of parties) {
            // Create a list item element from the party object
            let li = createListItemElement(party);

            // Append the list item element to the party list element
            partyList.appendChild(li);
        };
        
    };

    // Get the party list element by its id
    let partyList = document.getElementById("party-list");

  
    // select the form element by its id
const partyForm = document.getElementById("partyForm");

//add an event listener to the form element
partyForm.addEventListener("submit", function(event) {
  // prevent the default behavior of the form submitted
  event.preventDefault();
  //do something with the form data

        // Get the values of the form inputs
        let a = partyForm.name.value;
        let b = partyForm.date.value;
        let c = partyForm.time.value;
        let d = partyForm.description.value;

        // Create a party object from the form inputs
        let party = createParty('a','b','c','d'); //pass variables used

        // Add the party object to the parties array
        parties.push(party);

        // Display the parties array on the web page
        displayParties();

        // Clear the form inputs
        partyForm.name.value ="";
        partyForm.date.value ="";
        partyForm.time.value ="";
        partyForm.description.value ="";

        // Reset the form inputs
        partyForm.reset();

});
