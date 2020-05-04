let theme = "light";

$(document).ready(function() {
	$('.theme-block').addClass('light-theme-block');
	$('.theme-background').addClass('light-theme-background');
});

function changeTheme() {
	if(theme == "light") {
		$('.theme-block').removeClass('light-theme-block');
		$('.theme-block').addClass('dark-theme-block');
		$('.theme-background').removeClass('light-theme-background');
		$('.theme-background').addClass('dark-theme-background');
		theme = "dark";
	} else if (theme == "dark") {
		$('.theme-block').removeClass('dark-theme-block');
		$('.theme-block').addClass('light-theme-block');
		$('.theme-background').removeClass('dark-theme-background');
		$('.theme-background').addClass('light-theme-background');
		theme = "light";
	}
};