window.requestAnimFrame =( function () {
    return  window.requestAnimationFrame        ||
        window.webkitRequestAnimationFrame  ||
        window.mozRequestAnimationFrame     ||
        window.oRequestAnimationFrame       ||
        window.msRequestAnimationFrame      ||
        function ( /* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
arrayRemove = function (array, from) {
    var rest = array.slice((from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push.apply(array, rest);
};

var game=(function(){
	//aqui van a venir las variable

	var posicion,
		carasDado,
		totalBestScoresToShow,
		player,
		dadoImages={
			animation : [],
			revuelto : new Image()
		},
		playerImage,
		juegoImage,
		miniJuego1Image,
		miniJuego2Image,
		miniJuego3Image,
		miniJuego4Image,
		miniJuego5Image,
		miniJuego6Image,
		inicioFinImage;

	function preLoadImages() {
		// body...
		juegoImage = new Image();
