// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle image visibility
    function toggleImage() {
        var image = document.getElementById("testimonial-image");

        // Toggle the visibility of the image
        if (image.style.display === "none" || image.style.display === "") {
            image.style.display = "block"; // Show the image
        } else {
            image.style.display = "none"; // Hide the image
        }
    }

    // Attach the toggleImage function to the button's click event
    var button = document.querySelector('.view-testimonial-btn');
    if (button) {
        button.addEventListener('click', toggleImage);
    }
});
