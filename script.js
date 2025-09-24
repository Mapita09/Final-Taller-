const imagenes = [
"https://static.eldiario.es/clip/c90bd40d-f8de-4aea-94a0-49ac7600096f_16-9-discover-aspect-ratio_default_1124738.jpg",
"https://stage.thisisdig-com-clone.nds.acquia-psi.com/wp-content/uploads/2020/08/aladdinsane-e1618240674201.jpg",
"https://recreio.com.br/wp-content/uploads/2025/06/katseye-beautiful-chaos-capa.jpg",
"https://www.los40.com.ec/wp-content/uploads/2025/02/31082021_LOLA_HP.jpg",
"https://movistararena.co/wp-content/uploads/2025/09/vuelve-a-bogota-rels-b-con-a-new-star-world-tour-fechas-lugar-y-venta-de-boletas.png",
"https://ichef.bbci.co.uk/ace/standard/745/cpsprodpb/048c/live/2bb03f70-1753-11ef-b507-edbcd7518f5c.jpg",
"https://highxtar.com/wp-content/uploads/2025/01/highxtar-bad-bunny-1.jpg",
"https://media.pitchfork.com/photos/592c550e13d197565213ef49/master/w_2560%2Cc_limit/4b594f8c.jpg",
"https://www.sopitas.com/wp-content/uploads/2024/07/historia-de-chappell-roan-canciones-1.jpg",
"https://www.apple.com/newsroom/images/product/music/standard/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.slideshow-xlarge.jpg",
"https://akamai.sscdn.co/gcs/cifra-blog/es/wp-content/uploads/2022/01/7d7a1c2-olivia-rodrigo-rosa.jpg",
"https://assets.vogue.com/photos/66ba1ca03ef5655ca1c7af88/master/w_2560%2Cc_limit/Fontaines%2520D.C._03%2520(credit_Theo%2520Cottle).jpg",
"https://m.media-amazon.com/images/M/MV5BOWRjOGJkZjMtYjYwNC00YWE0LTg2ODAtOWZmM2VkZDAzMGU0XkEyXkFqcGc@._V1_.jpg",
"https://www.billboard.com/wp-content/uploads/2024/12/doechii-04-press-credit-john-jay-2024-billboard-1548.jpg",
" https://blogs-images.forbes.com/olliebarder/files/2017/04/radwimps_banda.jpg",
"https://dixfm.com/wp-content/uploads/2020/07/One-Direction-cinema-film-concerto-San-Siro-scaled.jpg",
"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz4egIvY8W3kCGC2vA7oRQes_4KDmadzP9NhgUfjKippeJrT6aG_XukzpkPfCCYQNC8qmeIa5SrGNNaYF75wUjlvvK5K-YPGH4u7Qc0L2FjHBBQvI2YWRLyNe5AfqXSw_Xfk00z2Tc_HFo/w1200-h630-p-k-no-nu/Anri+-+1992.jpg",
"https://miredvista.co/wp-content/uploads/2022/01/ABBA.jpg",
"https://m.media-amazon.com/images/M/MV5BY2IyZjA0YjUtNDFmZC00NzY0LTk0MzQtMGM1N2U1NjRlZjQ1XkEyXkFqcGc@._V1_.jpg",
"https://mrindie.com/wp-content/uploads/2022/10/beach_bunny_mrindie.png",
];

const titulos = [
"Sabrina Carpenter",
"David Bowie",
"KATSEYE",
"Lola Young",
"Rels B",
"Billie Eilish",
"Bad Bunny",
"Joe Hisaishi",
"Chappell Roan",
"Ed Sheeran",
"Olivia Rodrigo",
"Fontains DC",
"Pulp",
"Doechii",
"RADWIMPS",
"One Direction",
"Anri",
"ABBA",
"Two Door Cinema Club",
"Beach Bunny",
];

const frases = [
"Canción siendo escuchada: Tears / Tiempo escuchado en 2025: 873 minutos / Album fav: Short and Sweet",
"Canción siendo escuchada: Moonage Daydream / Tiempo escuchado en 2025:372 minutos / Album fav: Ziggy Stardust and the Spiders from Mars",
"Canción siendo escuchada: M.I.A / Tiempo escuchado en 2025:631 minutos / Album fav: Beautiful Caos",
"Canción siendo escuchada: Messy / Tiempo escuchado en 2025:79 minutos / Album fav: This Wasn’t Meant For You Anyway",
"Canción siendo escuchada: Una Cumbia Triste / Tiempo escuchado en 2025:64 minutos / Album fav: LA ISLA LP",
"Canción siendo escuchada: L’AMOUR DE MA VIE / Tiempo escuchado en 2025: 217 minutos / Album fav: HIT ME HARD AND SOFT",
"Canción siendo escuchada: WELTiTA / Tiempo escuchado en 2025: 851 minutos / Album fav: Un Verano Sin Ti",
"Canción siendo escuchada: Merry Go Round of Life / Tiempo escuchado en 2025: 82 minutos / Album fav: Dream Songs: The Essential Joe Hisaishi",
"Canción siendo escuchada: The Subway / Tiempo escuchado en 2025: 62 minutos / Album fav: The Rise and Fall of a Midwest Princess",
"Canción siendo escuchada: Don't / Tiempo escuchado en 2025: 361 minutos / Album fav: Divide",
"Canción siendo escuchada: Obssesed / Tiempo escuchado en 2025: 80 minutos / Album fav: SOUR",
"Canción siendo escuchada: Favourite / Tiempo escuchado en 2025: 53 minutos / Album fav: Romance",
"Canción siendo escuchada: Do You Remember The First Time / Tiempo escuchado en 2025: 87 minutos / Album fav: His ‘n’ Hers",
"Canción siendo escuchada: Denial is a River / Tiempo escuchado en 2025: 81 minutos / Album fav: Alligator Bites Never Heal",
"Canción siendo escuchada: Dream Lantern / Tiempo escuchado en 2025: 76 minutos / Album fav: Your Name",
"Canción siendo escuchada: Night Changes / Tiempo escuchado en 2025: 118 minutos / Album fav: FOUR",
"Canción siendo escuchada: Remember Summer Days / Tiempo escuchado en 2025: 68 minutos / Album fav: Timely!!",
"Canción siendo escuchada: The Winner Takes It All / Tiempo escuchado en 2025: 289 minutos / Album fav: Super Trouper",
"Canción siendo escuchada: Sun / Tiempo escuchado en 2025: 153 minutos / Album fav: Beacon",
"Canción siendo escuchada: Clueless / Tiempo escuchado en 2025: 61 minutos / Album fav: Honeymoon",
];

const canciones = [
"Sabrina.mp3",
"Bowie.mp3",
"KATSEYE.mp3",
"LolaYoung.mp3",
"RelsB.mp3",
"Billie.mp3",
"BadBunny.mp3",
"JoeHisaishi.mp3",
"Chappell.mp3",
"EdSheeran.mp3",
"OliviaRodrigo.mp3",
"FontainsDC.mp3",
"Pulp.mp3",
"Doechii.mp3",
"RADWIMPS.mp3",
"OneDirection.mp3",
"Anri.mp3",
"ABBA.mp3",
"SUN.mp3",
"BeachBunny.mp3",
];

const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const musica = document.getElementById("musica");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

   // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

   // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

    // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;

   // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  musica.src = canciones[indice]; 
  musica.play()
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();