$('.carousel').carousel({
    interval: 5000 // Adjust the interval as needed
});
document.addEventListener('DOMContentLoaded', function() {
    // Delay the AOS initialization by 1 second (1000 milliseconds)
    setTimeout(function() {
        AOS.init();
    }, 2000); // 1000 milliseconds = 1 second
});