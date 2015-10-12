jQuery(function($) {

    var solution_map = new Map();

    solution_map.set("service_solution_display", 
                     "Comment your flight in real time in the app." + "<br>" +
                     "Once you're back online we inform the airline on social media." + "<br>" +
                     "Twitter and/or Facebook. Anonymously or not. You decide!");

    solution_map.set("compensation_solution_display", 
                     "Once the delay is confirmed we will warn you of your rights." + "<br>" +
                     "If you're entitled to monetary compensation we will tell you how to proceed." + "<br>" +
                     "Airlines often keep silent to avoid paying compensation to unaware passengers.");

    solution_map.set("engage_solution_display", 
                     "See what other passengers in your flight had to say." + "<br>" +
                     "Compare airlines' service as reported by fellow passengers." + "<br>" +
                     "We will tell airlines where they need to improve most!");

    $("a[id$=_solution_display]").on('click', function(evt) {

        evt.preventDefault();

        var $this = $(this);
        $this.replaceWith("<br><p class=\"solution\">" + solution_map.get($this.attr("id")) + "</p>");
    });
});

