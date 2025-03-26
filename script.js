document.getElementById("characterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the page from reloading when the form is submitted
    // the addEventListener method is described on MDN Web Docs as a method for adding event listeners

    // get the data from the form
    let characterData = {
        name: document.getElementById("name").value, 
        class: document.getElementById("class").value, 
        strength: document.getElementById("strength").value, 
        alignment: document.querySelector('input[name="alignment"]:checked')?.value || "None", 
        experience: document.getElementById("experience").value, 
        specialAbility: document.getElementById("specialAbility").checked ? "Yes" : "No", 
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value)
        // querySelectorAll and Array.from are used to get the values of selected elements
    };

    // Save the data to localStorage
    localStorage.setItem("characterData", JSON.stringify(characterData));


    window.location.href = "result.html";
});

// Update experience value when the slider is changed
const experienceSlider = document.getElementById("experience");
const experienceValue = document.getElementById("experienceValue");

experienceSlider.addEventListener("input", function() {
    experienceValue.textContent = experienceSlider.value; // Show the updated experience value
});
