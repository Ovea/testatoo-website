(function($) {

    $('section').hide();
    $('#home').show();

    $('#menu').find('a').on('click', function(e) {
        e.preventDefault();
        $('#menu').find('li').removeClass('active');
        $(this).closest('li').addClass('active');

        $('section').hide();
        $('#' + $(e.target).attr('href')).show();
    })

})($);