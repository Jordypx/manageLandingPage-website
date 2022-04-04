const socialIcons = document.querySelectorAll('footer .social .icon');

const socialPath = document.querySelectorAll('footer .social path');

for (var i = 0; i < socialIcons.length; i++) {
    let count = i;

    socialIcons[count].onmouseenter = function () {
        socialPath[count].classList.add("red_icon");
    };

    socialIcons[count].onmouseleave = function () {
        socialPath[count].classList.remove("red_icon");
    };
};


//Custom Error Message
const form = document.querySelector('footer form');

form.addEventListener("invalid", function (event) {
    event.preventDefault();
}, true);


form.addEventListener("submit", function (event) {
    if (!this.checkValidity()) {
        event.preventDefault();
    }
});

var submitButton = form.querySelector("input[type=submit]");
submitButton.addEventListener("click", function (event) {
    var invalidFields = form.querySelectorAll(":invalid"),
        errorMessages = form.querySelectorAll(".error-message"),
        parent;

    // Remove any existing messages
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].parentNode.removeChild(errorMessages[i]);
    }

    for (var i = 0; i < invalidFields.length; i++) {
        parent = invalidFields[i].parentNode;
        parent.insertAdjacentHTML("beforeend", "<div class='error-message'> Please enter a valid email </div>");

        invalidFields[i].style.color = "var(--dark-red)";
        invalidFields[i].style.border = "1px solid var(--dark-red)";
    }
});

//Mobile Navigation

const navButton = document.getElementById('mobile_nav_btn');
const closeButton = document.getElementById('mobile_close_btn');
const mobileNavigation = document.getElementById('mobile_navigation');
const hamburgerButton = document.querySelector('#mobile_nav_btn path');
const exButton = document.querySelector("#mobile_close_btn path")

closeButton.style.display = "none";

//add hover effect to icons
navButton.onmouseenter = function () {
    hamburgerButton.classList.add("red_icon");
};
navButton.onmouseleave = function () {
    hamburgerButton.classList.remove("red_icon");
};
closeButton.onmouseenter = function () {
    exButton.classList.add("red_icon");
};
closeButton.onmouseleave = function () {
    exButton.classList.remove("red_icon");
};

//add click function to show menu
navButton.addEventListener("click", function() {
   mobileNavigation.style.display = "flex";
   navButton.style.display = "none";
   closeButton.style.display = "flex";
});


//add click function to close menu
closeButton.addEventListener("click", function() {
   mobileNavigation.style.display = "none";
   navButton.style.display = "flex";
   closeButton.style.display = "none";
});