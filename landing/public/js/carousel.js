jQuery(function($) {
    $('#service_solution_btn').on('click', function(evt) {

        evt.preventDefault();

        var $this = $(this);
        $this.replaceWith("<p class=\"solution\">waaaaaaaaaaaaaaaaaaaaaaaaaas</p>");
    });
});

