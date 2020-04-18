// jquery finctionality


$(document).ready(function () {
    $(window).scroll(function () { 

        if($(window).scrollTop()  < 100 ){

            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': 0
            });

            $('.navbar').css({

                'background-color': 'rgba(59,59,59 ,0)',
                
            });
        
        } else {
           
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': 1
            });
            $('.navbar').css({

                'background-color': 'rgba(59,59,59,0.7)',
                'color': 'black'
                
            });
         
        }
    });
});


// afetr 4s navbar disppear

// setTimeout(function(){
    
//     $('.navbar').fadeOut();

// } , 4000);



//  smoothslider

$(document).ready(function () {
    $('.nav-link,#arrow').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});git 

$(document).ready(function () {
    
    $('.navbar .navbar-nav a').on('click', function () { 
        $('.navbar .navbar-nav a').parent().removeClass("active");
        $('this').parent().addClass("active");
    });

});

// highlight menu on scroll

jqre