(function($) {

    $("header").load("template/header.html", function() {
        var section = $('section').attr('id');
        $('[role= ' + section + ']').addClass('active');
    });

    $("footer").load("template/footer.html");

    window.setIframeHeight = function(iframe) {
        if (iframe) {
            var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
                iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight + 500;
            }
        }
    };




})($);


$(window).load(function () {
    window.setIframeHeight(document.getElementById('doc'));
});

