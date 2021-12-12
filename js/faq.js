$(document).ready(function () {
    // $('.a-c-heading').click(function (e) {
    //     $('.a-card').toggleClass('active');
    //     if(!('.a-card.active').hasClass('active')){
    //         $('.a-card').removeClass('active');
    //     }

    // });

    $(".a-c-heading").on("click", function(e) {

		e.preventDefault();
		let $this = $(this);

		if (!$this.hasClass("active")) {
			$(".a-card.active").removeClass("active");
		}

		$this.toggleClass("active");
		$this.next().slideToggle();
	});
});