$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".mobile-menu").animate({ right: '0' }, 300);
    });

    $(".mobile-menu ul li a").click(function() {
        $(".mobile-menu").animate({ right: '-100%' }, 300);
    });
});
