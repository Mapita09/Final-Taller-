const imagenes = [
"https://static.eldiario.es/clip/c90bd40d-f8de-4aea-94a0-49ac7600096f_16-9-discover-aspect-ratio_default_1124738.jpg",
"https://www.experimenta.es/wp-content/uploads/2018/10/David-Bowie-red.jpg",
"https://variety.com/wp-content/uploads/2025/06/KATSEYE-Photo-Credit_-Rahul-Bhatt-.jpg",
"https://turntable.kagiso.io/images/Lola_Young_with_brown_and_blonde_hair-min.width-800.png",
"https://mallorcamusicmagazine.com/wp-content/uploads/Mallorca-Live-Festival-2024-Primera-Jornada-Rels-B.jpg",
"https://media.glamour.mx/photos/65bbb031eff477fdc62ac606/16:9/w_1920,h_1080,c_limit/EILISH%20PERFUME%20310124%20Eilish-No.-3-KV2-Approved-press-release-2nd-image_L.jpg",
"https://static.independentespanol.com/2025/01/15/00/BB_PFP_001.jpg",
"https://soundtrackfest.com/wp-content/uploads/2019/12/JoeHisaishi-Europe2020-Stockholm-Main.jpg",
"https://www.sopitas.com/wp-content/uploads/2024/07/historia-de-chappell-roan-canciones-1.jpg",
"https://images.squarespace-cdn.com/content/v1/6522859ed74b6e6f6d350faf/71f9400c-589b-4d4a-8960-f45ab5f09cc7/Ed+Sheeran+Live+Credit+Mark+Surridge+1.jpg",
"https://akamai.sscdn.co/gcs/cifra-blog/es/wp-content/uploads/2022/01/7d7a1c2-olivia-rodrigo-rosa.jpg",
"https://www.nme.com/wp-content/uploads/2022/04/NME-HERO-FONTAINES-D.C.-1@2560x1625.jpg",
"https://m.media-amazon.com/images/M/MV5BOWRjOGJkZjMtYjYwNC00YWE0LTg2ODAtOWZmM2VkZDAzMGU0XkEyXkFqcGc@._V1_.jpg",
"https://www.nme.com/wp-content/uploads/2022/05/Doechii-rapper-lead.jpg",
" https://blogs-images.forbes.com/olliebarder/files/2017/04/radwimps_banda.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/OnedirectionWWATchile_%28cropped%29.jpg/1200px-OnedirectionWWATchile_%28cropped%29.jpg",
"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz4egIvY8W3kCGC2vA7oRQes_4KDmadzP9NhgUfjKippeJrT6aG_XukzpkPfCCYQNC8qmeIa5SrGNNaYF75wUjlvvK5K-YPGH4u7Qc0L2FjHBBQvI2YWRLyNe5AfqXSw_Xfk00z2Tc_HFo/w1200-h630-p-k-no-nu/Anri+-+1992.jpg",
"https://c.files.bbci.co.uk/8546/production/_120381143_abbapa_cut.jpg",
"https://s3.us-east-2.amazonaws.com/images.marvin.com.mx/2020/08/269100da-6db9-4d58-93d3-4ab98b783d4e-1024x686.png",
"https://cdn1.faroutmagazine.co.uk/uploads/1/2024/06/Beach-Bunny-2024-Ash-Armitage-Far-Out-Magazine-750x563.jpg",
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