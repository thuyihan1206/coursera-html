$('#menu-collapse').on('show.bs.collapse', function () {
    $('#main-menu').slideUp();
}).on('hide.bs.collapse', function () {
    $('#main-menu').fadeIn();
});