document.querySelector('.profile-pic').addEventListener('mouseover', function() {
    this.src = 'profile-hover.jpg'; // Change to the hover image
});

document.querySelector('.profile-pic').addEventListener('mouseout', function() {
    this.src = 'profile.jpg'; // Change back to the original image
});
