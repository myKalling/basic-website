function toggleMenu(evt) {
    console.log('evt', evt);
    let nav = document.querySelector("#nav-list");
    console.log('nav', nav);
    if (nav.style.display === "block") {
        evt.target.innerText = "=";
        nav.style.display = "none";
        nav.style.transition = "opacity 0.1s ease-out";
        nav.style.opacity = 0;
    } else {
        evt.target.innerText = "x";
        nav.style.display = "block";
        nav.style.transition = "opacity 0.1s ease-in";
        nav.style.opacity = 1;
    }
}

DocumentTimeline.getElementById("contactForm").addEventListener("Submit", function(event)) {
    // prevent deafault form submission behavior
    event.preventDefault();

    //collect form data
    const firstName = document.querySelector("fname");
    const lastName = document.querySelector("lname");
    const email = document.querySelector("email");
    const message = document.querySelector("message");

    // log form data to console (for demonstration purposes)
    console.log(`Form Submission: $(firstName) $(lastName), $(email), $(message)`);

    // reset the form
    document.getElementById("contactForm").reset();
});