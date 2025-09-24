const imagenes = [
"https://static.eldiario.es/clip/c90bd40d-f8de-4aea-94a0-49ac7600096f_16-9-discover-aspect-ratio_default_1124738.jpg",
"https://stage.thisisdig-com-clone.nds.acquia-psi.com/wp-content/uploads/2020/08/aladdinsane-e1618240674201.jpg",
"https://recreio.com.br/wp-content/uploads/2025/06/katseye-beautiful-chaos-capa.jpg",
"https://www.los40.com.ec/wp-content/uploads/2025/02/31082021_LOLA_HP.jpg",
"https://movistararena.co/wp-content/uploads/2025/09/vuelve-a-bogota-rels-b-con-a-new-star-world-tour-fechas-lugar-y-venta-de-boletas.png",
"https://ichef.bbci.co.uk/ace/standard/745/cpsprodpb/048c/live/2bb03f70-1753-11ef-b507-edbcd7518f5c.jpg",
"https://highxtar.com/wp-content/uploads/2025/01/highxtar-bad-bunny-1.jpg",
"https://media.pitchfork.com/photos/592c550e13d197565213ef49/master/w_2560%2Cc_limit/4b594f8c.jpg",
"https://www.sopitas.com/wp-content/uploads/2024/07/historia-de-chappell-roan-canciones-1.jpg",}
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