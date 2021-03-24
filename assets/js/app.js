$(document).ready(() => {
    
    let scrollOffset = $(window).scrollTop();
    const back = $('#back');


    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    
    

    function checkScroll(scrollOffset) {
        if(scrollOffset >= 5000) {
            back.addClass('active');
        } else {
            back.removeClass('active');
        }
    }
    
    
    
     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    })
});