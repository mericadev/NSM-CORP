// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
	CShamburgerMenu.classList.toggle("cs-active");
	CSnavbarMenu.classList.toggle("cs-active");
	CSbody.classList.toggle("cs-open");
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

	// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
	const scroll = document.documentElement.scrollTop;
	if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
	} else {
	document.querySelector('body').classList.remove('scroll')
	}
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
	for (const item of dropDowns) {
		const onClick = () => {
		item.classList.toggle('cs-active')
	}
	item.addEventListener('click', onClick)
	}
							

//FAQ
const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
                                
               
		
//Contact Form

(function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
}(jQuery));
var $mcj = jQuery.noConflict(true);


var target = document.getElementById('mce-success-response');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (target.innerHTML === "Thank you for subscribing!") {
      target.innerHTML = "Your Free Copy Is On The Way!";
	  target.style.color = "#1a0d26";
      target.classList.add('custom-success-style'); // Add custom CSS class
    }
  });
});

// configuration of the observer
var config = { childList: true, subtree: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

  //BACK TO TOP
// script.js
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  } else {
      console.error("Button with ID 'scrollToTopBtn' not found.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
      scrollToTopBtn.onclick = function() {
          scrollToTop();
      };
  } else {
      console.error("Button with ID 'scrollToTopBtn' not found.");
  }
});

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//Resizer 
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

//Video Auto Play
document.addEventListener("DOMContentLoaded", function() {
      var video = document.getElementById("myVideo");
      var playButton = document.getElementById("playButton");

      // Attempt to play the video
      video.play().catch(function(error) {
        console.log("Autoplay was prevented:", error);
        // Show the play button if autoplay is blocked
        playButton.style.display = 'block';
      });

      // Add event listener for play button
      playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none'; // Hide the button once video starts playing
      });
    });
                            
