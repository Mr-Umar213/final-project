// Function to add a new recommendation to the list
function addRecommendation(text) {
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation');
    newRecommendation.innerHTML = `<p>"${text}"</p>`;
    document.getElementById('recommendations').appendChild(newRecommendation);
  }
  
  // Function to handle the submission of a recommendation
  function submitRecommendation() {
    const text = document.getElementById('recommendation-text').value;
    if (text.trim() !== "") {
      addRecommendation(text);
      alert('Recommendation submitted successfully!');
      document.getElementById('recommendation-text').value = ""; // Clear the input
    } else {
      alert('Please enter a recommendation before submitting.');
    }
  }
  