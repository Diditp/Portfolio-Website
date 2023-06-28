//even pada saat kita mengklik link pada website
$('.page-scroll').on('click', function(e){

    //ambil isi href
    let links = $(this).attr('href');
    
    //tangkap link
    let elementLink = $(links);

    //pindahkan scrolling
    $('html').animate({
        scrollTop: elementLink.offset().top - 50
    }, 1000, 'swing');
    
    e.preventDefault();
});

// Paralax scrolling
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll/4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll/2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ wScroll +'%)'
    });

    //Landing images
    if(wScroll > $('.portfolio').offset().top - 250){
        // for(var i = total; i < total.length; i++){
        //     setTimeout(function(){
        //         $('.portfolio .thumbnail').eq(i).addClass('fade-in');   
        //     }, 500 * (i+1));
        // }
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('fade-in');
            }, 500 * (i + 1));
        })
    };
});