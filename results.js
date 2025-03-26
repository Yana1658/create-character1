document.addEventListener("DOMContentLoaded", function()    
// the DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed
// it ensures that the script runs only after the HTML has been fully loaded
 {
    let characterData = JSON.parse(localStorage.getItem("characterData"));
    // fetching and parsing the character data from the localStorage
    // localStorage.getItem retrieves data stored in the browser's local storage
    // JSON.parse is used to convert the stored string back to an object

    if (characterData) {
        // display elements on the page
        document.getElementById("displayName").textContent = characterData.name;
        document.getElementById("displayClass").textContent = characterData.class;
        document.getElementById("displayStrength").textContent = characterData.strength;
        document.getElementById("displayExperience").textContent = characterData.experience;
        document.getElementById("displayAlignment").textContent = characterData.alignment;
        document.getElementById("displaySkills").textContent = characterData.skills;
        document.getElementById("displaySpecialAbility").textContent = characterData.specialAbility;

        document.getElementById("displayImage").src = "image/" + characterData.class + ".jpg";
        // sets the image source for the element with ID displayImage based on the character's class
    }
});
