function copyToClipboard(textToCopy) {
	navigator.clipboard.writeText(textToCopy)
	.then(() => {
		$("#copied").slideDown(350, function() {
			setTimeout(function() {
				$("#copied").slideUp(350);
			}, 5500);
		});
	});
}
