document.addEventListener("DOMContentLoaded", function() {
    var imgBox = document.querySelector(".img-box");
    var imgWrap = document.querySelector(".img-wrap");

    // Detect mouse movement inside the image box
    imgBox.addEventListener("mousemove", function(e) {
        var boxWidth = e.pageX - imgBox.offsetLeft; 
        imgWrap.style.width = boxWidth + "px";  // Dynamically change width
    });

    // Reset effect when mouse leaves
    imgBox.addEventListener("mouseleave", function() {
        imgWrap.style.width = "0%";  // Hide image when mouse exits
    });
});
