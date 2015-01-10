(function($) {

    $("header").load("template/header.html", function() {
        var section = $('section').attr('id');
        $('[role= ' + section + ']').addClass('active');
    });

    $("footer").load("template/footer.html");

})($);
