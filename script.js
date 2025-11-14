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
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        // prevent default form submission behavior
        event.preventDefault();

        // collect form data (read .value from inputs)
        const firstName = document.getElementById('fname')?.value || '';
        const lastName = document.getElementById('lname')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const message = document.getElementById('message')?.value || '';

        // log form data to console (for demonstration purposes)
        console.log(`Form Submission: ${firstName} ${lastName}, ${email}, ${message}`);

        // reset the form
        form.reset();
    });
});
