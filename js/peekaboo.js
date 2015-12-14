resizeWindow();
$(window).resize(resizeWindow);

function resizeWindow() {
    var ww = $(window).width();
    var bh = $(document).height();
    var wh = $(window).height();
    featureHeight = wh - 0;
    $('#introduction').css({'height':featureHeight+'px'});
    var scrollPoint = featureHeight;
    var scrolledPast = false;
    $(window).scroll(function() {
        $(window).scrollTop() > scrollPoint ? scrolledPast = true : '';
        $(window).scrollTop() < scrollPoint && scrolledPast == true ? $(window).scrollTop(scrollPoint) : '';
    }).scroll();
}
