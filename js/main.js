document.getElementById('news__button').addEventListener('click', function () {
	var array = document.getElementsByClassName('news__none');
	for (let index = 0; index < array.length; index++) {
		array[index].classList.remove('news__more');
	}
	document.getElementById('news__button').style.display = 'none';
});
document
	.getElementById('popular__button')
	.addEventListener('click', function () {
		var array = document.getElementsByClassName('popular__none');
		for (let index = 0; index < array.length; index++) {
			array[index].classList.remove('popular__more');
		}
		document.getElementById('popular__button').style.display = 'none';
	});
document.getElementById('video__button').addEventListener('click', function () {
	var array = document.getElementsByClassName('video__none');
	for (let index = 0; index < array.length; index++) {
		array[index].classList.remove('video__more');
	}
	document.getElementById('video__button').style.display = 'none';
});

$(function () {
	$(window).on('resize', function () {
		if ($('#merCarousel').width() < 768) {
			$('#carousel-control-prev').height(
				$('#merCarousel').height() - 360
			);
			$('#carousel-control-next').height(
				$('#merCarousel').height() - 360
			);
		} else {
			$('#carousel-control-prev').height($('#merCarousel').height());
			$('#carousel-control-next').height($('#merCarousel').height());
		}
	});
});
