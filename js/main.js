
// Code for sticky-nav

var stickyNavOffset = $('.sticky-nav').offset().top;

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	console.log('Distance from top of page to nav is: ' + stickyNavOffset);
	console.log('Distance scrolled is: ' + distanceScrolled);

if (distanceScrolled >= stickyNavOffset) {
	$('nav').addClass('scrolled');
} else {
	$('nav').removeClass('scrolled');
}

});



// $('.checkboxes').on('click', function() {
// 	$('h2').html($(this).val());
// });


// Code for womens.html page

// Code for womens filters
var listOfBrands = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&filters=Brand&limit=50';
var key = 'uid5076-35714726-44';

// When the page loads
// var defaultBrands = "&fts=Everlane&fts=Alternative+Apparel&fts=Reformation&fts=amour-vert&fts=live+the+process+clothing&fts=zady+clothing&fts=matt-nat&fts=Need-Supply-Co.-US&sort=Popular";
var defaultBrands = "&fts=Everlane&fts=Alternative+Apparel&fts=Reformation&fts=amour-vert&fts=live+the+process+clothing&fts=zady+clothing&fts=matt-nat&fts=Need-Supply-Co.-US";

getWomensProducts(defaultBrands);

// When the user checks/unchecks a checkbox
$(".filters input[type='checkbox']").on('change', function(event) {
	event.preventDefault();

	var brands = "";

	$(".filters input[type='checkbox']").each( function() {
		if($(this).is(':checked')) {
		    brands += ('&fts=' + $(this).val());
		} 
     });

if(brands === "") {
	getWomensProducts(defaultBrands);
} else {
	getWomensProducts(brands);
}

	$('input.checkboxes').on('change', function() {
    	$('input.checkboxes').not(this).prop('checked', false);  
	});

});


function getWomensProducts (brands) {
	$.ajax({
		type: 'GET',
		url: listOfBrands + brands,
		success: function (response) {
			$('.productdisplay').empty();

			var products = response.products;
			for (i = 0; i < products.length; i++) {
				var source   = $("#product-template").html();
				var template = Handlebars.compile(source);
				var objectToDisplay = products[i];
				var html = template(objectToDisplay);

				$('.productdisplay').append(html);
				// console.log(products[i]);
				// console.log(products[i].name);
			}
			
		}
	});
}



// Code for beauty.html page


var listOfBeautyBrands = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&filters=Brand&limit=50';
var key = 'uid5076-35714726-44';

// When the page loads
// var defaultBrands = "&fts=Everlane&fts=Alternative+Apparel&fts=Reformation&fts=amour-vert&fts=live+the+process+clothing&fts=zady+clothing&fts=matt-nat&fts=Need-Supply-Co.-US&sort=Popular";
var defaultBeautyBrands = "&fts=womens-beauty/fresh&fts=Aesop&fts=rms-beauty&fts=100%25+pure&fts=Meow+Meow+Tweet&fts=herbivorefts=iliafts=w3ll+people";

getBeautyProducts(defaultBeautyBrands);

// When the user checks/unchecks a checkbox
$(".filters input[type='checkbox']").on('change', function(event) {
	event.preventDefault();

	var beautyBrands = "";

	$(".filters input[type='checkbox']").each( function() {
		if($(this).is(':checked')) {
		    beautyBrands += ('&fts=' + $(this).val());
		} 
     });

if(beautyBrands === "") {
	getBeautyProducts(defaultBeautyBrands);
} else {
	getBeautyProducts(beautyBrands);
}

// When a user clicks on a checkbox, the other checkboxes are unchecked

	$('input.checkboxes').on('change', function() {
    	$('input.checkboxes').not(this).prop('checked', false);  
	});

});


function getBeautyProducts (beautyBrands) {
	$.ajax({
		type: 'GET',
		url: listOfBeautyBrands + beautyBrands,
		success: function (response) {
			$('.productdisplay').empty();

			var products = response.products;
			for (i = 0; i < products.length; i++) {
				var source   = $("#product-template").html();
				var template = Handlebars.compile(source);
				var objectToDisplay = products[i];
				var html = template(objectToDisplay);

				$('.productdisplay').append(html);
				// console.log(products[i]);
				// console.log(products[i].name);
			}
			
		}
	});
}


// legend mouseover effect

$('#legend-icon, #icons-description').on({
    mouseenter: function(e) {
        if (e.target.id == 'legend-icon') $('#icons-description').fadeIn('fast');
        clearTimeout( $('#icons-description').data('timer') );
    },
    mouseleave: function() {
        $('#icons-description').data('timer', 
            setTimeout(function() {
                $('#icons-description').fadeOut('fast')
            }, 300)
        );
    }
});


// scroll up page

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


// googlemaps code: snazzymaps.com style arrays
      function initMap() {



        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 37.774444, lng: -122.415979},
            zoom: 12,
            styles: [
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#26204c"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                color: "#f2f2f2"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#e6f3d6"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightnes: 45
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#f4d2c5"
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
            {
                color: "#4e4e4e"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#f4f4f4"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#787878"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
       	featureType: "water",
        elementType: "all",
        stylers: [
            {
                color: "#eaf6f8"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#eaf6f8"
            }
        ]
    }
]






        });


		var image = {
          url: 'http://www.googlemapsmarkers.com/v1/26204c/',
      };

        var marker;

        // clicking cuyana
        $('#cuyana').on('mouseenter', function() {
        	var coords = {lat: 37.787278, lng: -122.407867};

        	addMarker(coords);


        });

         $('#gravelAndGold').on('mouseenter', function() {
			var coords = {lat: 37.7570462, lng: -122.4204585};

			addMarker(coords);

        });

         $('#lushCosmetics').on('mouseenter', function() {
			var coords = {lat: 37.7869875, lng: -122.4101328};

			addMarker(coords);

        });         

         $('#credoBeauty').on('mouseenter', function() {
			var coords = {lat: 37.7896381, lng: -122.435995};

			addMarker(coords);

        });         

         $('#amourVert').on('mouseenter', function() {
			var coords = {lat: 37.776568, lng: -122.4258137};

			addMarker(coords);

        }); 

         $('#Aesop').on('mouseenter', function() {
			var coords = {lat: 37.7922748, lng: -122.4364641};

			addMarker(coords);

        });          

         function addMarker (latLong) {
         	deleteMarkers();

         	marker = new google.maps.Marker({
         	    position: latLong,
         	    map: map,
         	    icon: image
         	});
         }

         function deleteMarkers () {
         	if (marker !== undefined) {
         		marker.setMap(null);
         	}
         }



      }


// var brandGlossier = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=7&filters=Brand&fts=glossier';
// var key = 'uid5076-35714726-44';


// $("#brandGlossier").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandGlossier,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// var brandAesop = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=20&filters=Brand&fts=Aesop';
// var key = 'uid5076-35714726-44';


// $("#brandAesop").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandAesop,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// var brandKiehls = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=20&filters=Brand&fts=kiehls';
// var key = 'uid5076-35714726-44';


// $("#brandKiehls").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandKiehls,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// var brand100Pure = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=20&filters=Brand&fts=100%25+pure';
// var key = 'uid5076-35714726-44';


// $("#brand100Pure").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brand100Pure,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// var brandMarioBadescu = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=20&filters=Brand&fts=mario-badescu';
// var key = 'uid5076-35714726-44';


// $("#brandMarioBadescu").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandMarioBadescu,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// var brandHerbivore = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=20&filters=Brand&fts=herbivore';
// var key = 'uid5076-35714726-44';


// $("#brandHerbivore").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandHerbivore,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// // ^^^ beauty product page ^^^

// var brandAmericanApparelMens = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=20&filters=Brand&fts=mens-shirts/american-apparel';
// var key = 'uid5076-35714726-44';


// $("#brandAmericanApparelMens").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandAmericanApparelMens,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// var brandZadyMens = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=10&filters=Brand&fts=mens-clothes/Zady-US';
// var key = 'uid5076-35714726-44';


// $("#brandZadyMens").change(function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: brandZadyMens,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });

// ^^^ beauty product page ^^^

// jewelry product page:

// var jewelryProducts = 'http://api.shopstyle.com/api/v2/products?pid=uid5076-35714726-44&limit=10&filters=Brand&fts=ethically+made+jewelry&sort=PriceLoHi';
// var key = 'uid5076-35714726-44';


// $("#jewelry").on('click', function() {
// 	event.preventDefault();

// 	var brand = $('#brand').val();

// 	$.ajax({
// 		type: 'GET',
// 		url: jewelryProducts,
// 		success: function (response) {
// 			var products = response.products;
// 			for (i = 0; i < products.length; i++) {
// 				var source   = $("#product-template").html();
// 				var template = Handlebars.compile(source);
// 				var objectToDisplay = products[i];
// 				var html = template(objectToDisplay);

// 				$('.productdisplay').append(html);
// 				// console.log(products[i]);
// 				// console.log(products[i].name);
// 			}
			
// 		}
// 	})
// });


