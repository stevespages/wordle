const wordle = document.querySelector("wordle");
let i = 0;
while (i < 6) {
    const div = document.createElement("div");
    let j = 0;
    while (j < 6) {
        const span = document.createElement("span");
        span.setAttribute("id", "div" + i + "-span" + j);
        if (j === 5) {
            span.classList.add("message");
        }
        div.append(span);
        j++;
    }
    wordle.append(div);
    i++;
}
//const dictionary = ["tiene", "luego", "atras", "bueno", "tener"];

const dictionary = ["vamos", "ahora", "estoy", "tengo", "estás", "puedo", "tiene", "bueno", "hacer", "todos", "puede", "sabes", "quién", "nunca", "dónde", "favor", "señor", "mejor", "están", "usted", "mucho", "hasta", "sobre", "decir", "cosas", "antes", "estar", "noche", "nadie", "padre", "gente", "donde", "mismo", "hecho", "ellos", "claro", "estas", "lugar", "mundo", "amigo", "desde", "fuera", "tener", "crees", "buena", "gusta", "nuevo", "había", "menos", "tenía", "madre", "quien", "luego", "todas", "mujer", "visto", "haces", "tarde", "parte", "haber", "saber", "veces", "tanto", "razón", "quizá", "estos", "salir", "hemos", "chica", "entre", "algún", "serio", "somos", "pensé", "debes", "forma", "chico", "dicho", "nueva", "sabía", "ayuda", "hacia", "miedo", "adiós", "poder", "niños", "sería", "viejo", "manos", "pasar", "viene", "horas", "listo", "único", "cerca", "otros", "sigue", "habla", "feliz", "llama", "venir", "morir", "atrás", "dices", "abajo", "dejar", "tomar", "justo", "juego", "matar", "cinco", "dicen", "clase", "pueda", "igual", "venga", "creer", "saben", "hagas", "comer", "punto", "misma", "vivir", "queda", "hijos", "mayor", "hacen", "medio", "basta", "meses", "fácil", "final", "lista", "trata", "armas", "podía", "perro", "fuego", "murió", "verte", "culpa", "veras", "jugar", "joven", "tenga", "única", "lejos", "digas", "vemos", "trato", "jamás", "falta", "lleva", "gusto", "coche", "mucha", "cielo", "habrá", "orden", "deben", "libro", "calle", "clark", "libre", "viste", "llamo", "sueño", "viaje", "resto", "avión", "negro", "miren", "haría", "acaba", "otras", "dolor", "demás", "poner", "tonto", "campo", "acabó", "sitio", "verlo", "error", "llegó", "mente", "novia", "suena", "hazlo", "grupo", "perra", "acabo", "traje", "largo", "entra", "línea", "barco", "ganar", "mitad", "lindo", "pagar", "fotos", "pobre", "tipos", "darle", "amiga", "vista", "salvo", "señal", "llevo", "ellas", "honor", "corre", "hablo", "media", "estan", "linda", "norte", "busca", "siete", "llave", "santo", "irnos", "vayas", "salió", "pelea", "banco", "calma", "creen", "hacía", "novio", "decía", "deseo", "carne", "vidas", "creía", "carta", "estés", "quise", "ambos", "dulce", "vayan", "vuelo", "harás", "junto", "diría", "suelo", "llega", "verás", "prisa", "según", "broma", "sacar", "papel", "llamó", "hagan", "dejes", "duele", "causa", "luces", "ojalá", "radio", "brazo", "cargo", "hogar", "corte", "baile", "vieja", "rayos", "serás", "salud", "parar", "cenar", "serán", "volar", "nivel", "bolsa", "acaso", "mirar", "salga", "perdí", "santa", "miles", "bomba", "darme", "verla", "bobby", "hayas", "mando", "damas", "robot", "llevó", "muere", "trago", "reina", "lleno", "valor", "héroe", "capaz", "verme", "beber", "darte", "abrir", "golpe", "tenia", "tocar", "ganas", "pedir", "pista", "sirve", "doble", "estén", "debía", "eddie", "color", "aquel", "fondo", "verde", "traer", "pidió", "éxito", "hielo", "podrá", "oigan", "común", "calor", "pared", "subir", "llame", "bajar", "socio", "dando", "larga", "solía", "solos", "tanta", "oeste", "carga", "banda", "dejas", "nueve", "llena", "dejen", "reloj", "nariz", "vengo", "gordo", "ayude", "locos", "cinta", "desea", "leyes", "árbol", "hable", "malas", "joder", "lleve", "ruido", "líder", "harán", "ponte", "bella", "costa", "debió", "araña", "podré", "total", "lucha", "leche", "diste", "ponga", "lados", "trajo", "deber", "débil", "quedó", "quiso", "carro", "dedos", "sigan", "dueño", "turno", "caray", "quede", "playa", "primo", "oíste", "silla", "envió", "abran", "sentí", "casas", "mueve", "video", "yendo", "vivos", "grave", "pecho", "sepas", "modos", "seria", "laura", "apoyo", "toque", "hayan", "marca", "hablé", "serie", "paseo", "balas", "sabia", "negra", "quedo", "pulso", "bordo", "época", "entró", "pesar", "habló", "llamé", "cerdo", "busco", "tumba", "china", "datos", "torre", "robar", "malos", "techo", "genio", "ideas", "tomas", "menor", "droga", "gustó", "mires", "huele", "pocos", "ángel", "local", "vives", "virus", "nieve", "fumar", "vimos", "reino", "clave", "plata", "magia", "humor", "autos",  "curso", "canal", "echar", "frodo", "corto", "llego", "cable", "contó", "siglo", "andar", "pasan", "troya", "diles", "coger", "lunes", "tarea", "corta", "truco", "pollo", "tonta", "pongo", "sucio", "habia", "pasos", "guste", "polvo", "pones", "firma", "firme", "flota", "queso", "muero", "adios", "viven", "guapo", "trató", "ricos", "tomen", "crear", "extra", "fuese", "actor", "naves", "meter", "dejan", "vacío", "salón", "motor", "mueva", "hazme", "bravo", "regla", "cuida", "ponen", "niñas", "bruja", "vegas", "túnel", "pensó", "copia", "legal", "solas", "chino", "arena", "casos", "miras", "seres", "disco", "traté", "daría", "placa", "notas", "creas", "verán", "salvó", "quita", "museo", "aviso", "leído", "tirar", "traes", "rumbo", "muera", "fecha", "digan", "maten", "algun", "julio", "ciego", "súper", "sabrá", "pocas", "volví", "clima", "adoro", "suave", "bolso", "vivía", "juega", "acabe", "guapa", "botón", "ruego", "nadar", "mover", "conde", "pedro", "celda", "amaba", "nació", "manda", "salgo", "metas", "burro", "grial", "usado", "cajas", "matan", "pieza", "salen", "pizza", "junta", "caído", "ducha", "venía", "pagan", "ambas", "dudas", "ritmo", "venta", "almas", "quedé", "kilos", "serlo", "plato", "bolas", "falso", "mandó", "botas", "grado", "daños", "minas", "ratas", "pense", "sales", "aldea", "obvio", "peces", "envía", "gatos", "éstas", "éstos", "caras", "tigre", "harto", "lento", "hecha", "cruel", "dirás", "casar", "falla", "verle", "donna", "noble", "laden", "white", "metro", "grace", "gorda", "paren", "damos", "tomes", "sandy", "salta", "rusos", "punta", "pasen", "saint", "papas", "salsa", "metió", "tetas", "sabor", "bello", "pasas", "japón", "acero", "huevo", "trate", "casco", "ayudó", "razon", "globo", "ayudo", "reyes", "seiya", "canta", "bebés", "brown", "crema", "matas", "circo", "salve", "logro", "unión", "móvil", "cañón", "sepan", "falsa", "rocas", "putas", "judío", "saque", "metal", "apaga", "deuda", "cueva", "aérea", "bajen", "aaron", "temas", "calla", "wyatt", "sonar", "patio", "hueso", "zorra", "valle", "logró", "creyó", "civil", "velas", "selva", "conté", "vende", "caída", "vuela", "rubia", "joyas", "amado", "furia", "motel", "ideal", "piano", "letra", "dosis", "dólar", "apolo", "super", "rifle", "rueda", "espía", "salto", "clara", "grano", "odias", "rusia", "salva", "lanza", "moral", "bajas", "barra", "comen", "piper", "dimos", "unico", "prima", "actúa", "breve", "tuyos", "plaza", "darán", "toman", "suban", "borde", "abrió", "suyos", "grasa", "revés", "trozo", "atras", "ponlo", "pasta", "pinta", "sucia", "hijas", "tracy", "rompe", "entré", "césar", "jaula", "fatal", "ronda", "cobra", "aéreo", "monje", "andas", "llevé", "entro", "pares", "oídos", "dieta", "guión", "enano", "rezar", "cortó", "cazar", "bodas", "rosas", "seguí", "oírlo", "junio", "linea", "costó", "temer", "envié", "atacó", "sigas", "radar", "lobos", "citas", "preso", "cuero", "obras", "vacía", "saqué", "lucas", "diosa", "abril", "rosie", "oreja", "villa", "trono", "traen", "salía", "raras", "lavar", "viera", "rango", "niega", "mates", "shock", "renta", "frase", "mirad", "aguas", "quema", "poema", "cabra", "voces", "temor", "pague", "comió", "nubes", "ánimo", "gafas", "aguja", "corea", "pases", "facil", "diera", "comes", "ciega", "dinos", "presa", "patas", "oírme", "myers", "ataca", "tenis", "plano", "sobra", "rumor", "metes", "besar", "monte", "digno", "darse", "paige", "green", "altos", "vacas"];

const answerWord = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(answerWord);
let spanN = 0;
let divN = 0;
let testWord = "";
/*
const keyboardDiv = document.querySelector("#keyboard-div");
keyboardDiv.addEventListener("click", (event) => {
    console.log(event.target.innerText);
});
*/
const keyboardDiv = document.querySelector("#keyboard-div");
keyboardDiv.addEventListener("click", (event) => {
  const spanToModify = document.querySelector("#div" + divN + "-span" + spanN);
  spanToModify.innerHTML = event.target.innerText;
  testWord = testWord + event.target.innerText;
  console.log(testWord);
  if (spanN === 4) {
    const messageSpan = document.querySelector("#div" + divN + "-span5");
    if (dictionary.includes(testWord)) {
        let i = 0;
        while (i < 5) {
            if (answerWord.includes(testWord.charAt(i))) {
                const spanToAddClass = document.querySelector("#div" + divN + "-span" + i);
                spanToAddClass.classList.add("inAnswer");
            }
            i++;
        }
        let j = 0;
        while (j < 5) {
            if (answerWord.charAt(j) === testWord.charAt(j)) {
                const spanToAddClass = document.querySelector("#div" + divN + "-span" + j);
                spanToAddClass.classList.add("correct");
            }
            j++;
        }
        if (testWord === answerWord) {
            messageSpan.innerHTML = "<p>Win! <a href='https://en.wiktionary.org/wiki/" + testWord + "#Spanish'>" + testWord + "</a></p>";
        } else {
            messageSpan.innerHTML = "<p><a href='https://en.wiktionary.org/wiki/" + testWord + "#Spanish'>" + testWord + "</a></p>";
        }
        spanN = 0;
        testWord = "";
        divN++;
    } else {
        messageSpan.innerHTML = "<p>" + testWord + " is not in the dictionary</p>";
        spanN = 0
        testWord = "";
        let i = 0;
        while (i < 5) {
            const spanToClear = document.querySelector("#div" + divN + "-span" + i);
            spanToClear.innerHTML = "";
            i++;
        }
    }
  } else {
    spanN++;
  }
});
