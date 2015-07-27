/* This function resizes the padding between the thumbnails based on window size
bastardized from this webpage —
http://stackoverflow.com/questions/9828831/jquery-on-window-resize
*/
document.getElementById("alignRow1");
document.getElementByClass(".single-thumb");

function resizeThumbs() {
    var $containerWidth = $(window).width();
    if ($containerWidth <= 800) {
        $('.single-thumb').css({
            paddingRight: 0 px
        });
    }
    else {
//        document.getElementByClass(".single-thumb").style.paddingRight = alignRow1/3;
        $('.single-thumb').css( {
            //should adjust padding on the right per the total size of the div
            paddingRight: (alignRow1.outerWidth/3) + " px"
        });
    } 
}

$(document).ready(function () {
    resizeThumbs();//run when page first loads
});

$(window).resize(function () {
    resizeThumbs();//run on every window resize
});