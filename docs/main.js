
$(document).ready(function () {
    $('#uparrow').hide();
    console.log("begin");
    console.log(($('body').height()));
    console.log($('#services').height);
    console.log("end");

})
/*******NAVIGATION JS*******/
var menumain = document.getElementById("nav");

function showMenu() {
   
    var hamburger = document.getElementsByClassName("menu")[0];
    if (menumain.className === "mainnav") {
        hamburger.sty
        //changing classname from mainnav to mainnavsmall
        menumain.className += "small";
    }
    else {
        menumain.className = "mainnav"
    }
}
/*******END NAVIGATION JS*******/

/*******SMOOTH SCROLLING LINKS*******/
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        console.log("worked");
        menumain.className = "mainnav"
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
/*******END SMOOTH SCROLLING LINKS*******/


/*******SCROLLING PAGE UP*******/
$(document).ready(function () {
    $("#uparrow").on('click', function (event) {
        if ($('body').height() <= ($(window).scrollTop())) {
            $('html, body').animate({
                scrollTop: $('#top').offset().top
            }, 800, function () {
                window.location.hash = '#top';
            });
        }
    });
});
/*******END SCROLLING PAGE UP*******/

/*DISPLAY UP ARROW BUTTON */
$(document).ready(function () {

    $(window).scroll(function () {
        // console.log(($('body').height()));

        if ($(window).scrollTop() >= (($('#top')[0].scrollHeight) - 20)) {
            $('#uparrow').show();
        }
        else {
            $('#uparrow').hide();
        }
    })
}
)