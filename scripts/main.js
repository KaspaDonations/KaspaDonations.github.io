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
$(".qrCode").each(function() {
	$(this).qrcode({

		render: 'image',
		size: 512,
		crisp: true,

		text: $(this).data('qrcodeval'),

		quiet: 3,

	});


	var generatedImage = $(this).find('img');

	generatedImage.addClass('customClass');
	generatedImage.attr('viewable', 'true');
	// generatedImage.attr('draggable', 'false');
});

$('img[viewable]').click(function() {
	var src = $(this).attr('src');
	var modal;

	function removeModal() {
	modal.remove();
	$('body').off('keyup.modal-close');
	}
	modal = $('<div>').addClass('backdrop-t').click(function() {
		removeModal();
	}).appendTo('body');

	var img = $('<img>').attr('src', src).addClass('viewed-image').click(function() {
		removeModal();
	}).appendTo(modal);

	$('body').on('keyup.modal-close', function(e) {
	if (e.key === 'Escape') {
		removeModal();
	}

	});
});
