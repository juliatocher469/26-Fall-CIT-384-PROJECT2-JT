$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.groom-button').click(clickedGroomButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"GiGi", weight: 5, happiness: 15, cleanliness: 10};

    // Beginning of buttons
    function clickedTreatButton() {
      pet_info.happiness += 5;
      pet_info.weight += 3;
      // Visual notification from the pet
      $('.pet-comment').text("Thank you! Yum!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 5;
      pet_info.weight -= 1;
      // Visual notification from the pet
      $('.pet-comment').text("Yay! This is fun!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -= 5;
      pet_info.weight -= 1;
      // New behavior that correlates with new button.
      pet_info.cleanliness -= 2;
      // Visual notification from the pet
      $('.pet-comment').text("Phew! I'm tired!");
      checkAndUpdatePetInfoInHtml();
    }
    // New action button
    function clickedGroomButton() {
    // New behavior that correlates with new button.
      pet_info.cleanliness += 2;
      pet_info.happiness += 5;
      $('.pet-comment').text("Squeaky Clean!");
      checkAndUpdatePetInfoInHtml();
    }
    // End of buttons
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
      updatePetImage();
      updateButtonStates();
    }

    // Values can’t go below zero
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      if (pet_info.weight > 20) {
        pet_info.weight = 20;
      }
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
      if (pet_info.happiness > 30) {
      pet_info.happiness = 30;
      }
      if (pet_info.cleanliness < 0) {
        pet_info.cleanliness = 0;
      }
      if (pet_info.cleanliness > 20) {
        pet_info.cleanliness = 20;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.cleanliness').text(pet_info['cleanliness']);
    }

    function updatePetImage() {
      // Unique jQuery method: .attr()
      // // .attr('src', value) sets an HTML attribute on an element. The first argument is the attribute name ('src', the image file path) and the second is the new value. I use it to swap between sadPet, angryPet, and happyPet depending on the pet's stats.
      
      // The pet is angry if happiness is low OR cleanliness is low, the pet is only happy when both stats are above the minimum amounts.
  // (your .attr() explanation goes here)
      if (pet_info.weight >= 20) {
        $('.pet-image').attr('src', 'images/sadPet.png');
      } else if (pet_info.happiness < 2 || pet_info.cleanliness == 0 || pet_info.weight == 0) {
        $('.pet-image').attr('src', 'images/angryPet.png');
      } else if (pet_info.happiness >= 20) {
        $('.pet-image').attr('src', 'images/happyPet.png');
      } else {
        $('.pet-image').attr('src', 'images/calmPet.png');
      }
    }
    
    function updateButtonStates() {
      // .prop('disabled', true/false) sets a property on an element. The first argument is the property name and the second is a boolean. When true the button is turned off. I use it to disable Exercise at 0 weight and Groom at max cleanliness.
      $('.exercise-button').prop('disabled', pet_info.weight <= 0);
      $('.groom-button').prop('disabled', pet_info.cleanliness >= 20);
    } 