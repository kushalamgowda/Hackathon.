document.addEventListener('DOMContentLoaded', function() {
    // JavaScript functionality for the notes section

    // Add event listeners for doubt solving and bookmark icons if needed
    const doubtIcon = document.querySelector('.left-icons i');
    const bookmarkIcon = document.querySelector('.right-icons i');

    doubtIcon.addEventListener('click', function() {
        // Doubt solving functionality
        console.log('Doubt solving clicked');
    });

    bookmarkIcon.addEventListener('click', function() {
        // Bookmark functionality
        console.log('Bookmark clicked');
    });

    // Fetch textbook data or perform other actions as needed
});
