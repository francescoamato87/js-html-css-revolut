

// APPEND

$(document).ready(function() {

// Refs
var dropLinks = $('.with-dropdown > a' );
var dropMenu = $('.with-dropdown > .dropdown-menu');

// Show / Hide dropdown Menu
dropLinks.click( function() {

  var actualMenu = $(this).next('.dropdown-menu');

  dropMenu.not(actualMenu).hide();

  actualMenu.toggle();


    });

}); // <-- end doc ready
