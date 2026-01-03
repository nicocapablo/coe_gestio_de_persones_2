// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  {
    texto: "El treballador actual ja no és només un executor, sinó que participa en millores i decisions.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La participació dels treballadors és clau en models com la qualitat total i la millora contínua.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Informar els treballadors sobre els objectius de l’empresa redueix la seva motivació.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Quan els treballadors entenen el sentit de la seva feina, se senten més implicats.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La contractació temporal permet a l’empresa reduir costos fixos.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els treballadors temporals poden tenir normes diferents als treballadors fixos.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "El treball per projectes ofereix més autonomia però també més inseguretat laboral.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La mobilitat laboral permet treballar sempre des de l’oficina.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "La mobilitat laboral pot millorar la conciliació personal i familiar.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’uberització del treball ofereix molta seguretat però poca flexibilitat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "En el model d’uberització, el treballador depèn de plataformes digitals.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’automatització pot reduir els accidents laborals en tasques perilloses.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La mecanització elimina el desgast físic i mental dels treballadors en tasques repetitives.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’objectiu de la tecnologia és substituir totalment el treball humà.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Actualment es valora més la productivitat que el nombre d’hores treballades.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Treballar millor no sempre implica treballar més hores.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La gestió del talent considera el treballador com un actiu clau de l’empresa.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Per retenir talent n’hi ha prou amb oferir un bon sou.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "El treball en equip facilita compartir coneixements i millora el clima laboral.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Avui dia, saber treballar en equip és tan important com saber fer la feina.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Una feina amb sentit augmenta la motivació i redueix la rotació de personal.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Les certificacions com Great Place to Work ajuden a captar i retenir talent.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La Responsabilitat Social Corporativa només afecta la imatge externa de l’empresa.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "La RSC pot millorar el clima laboral i la implicació dels treballadors.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El disseny del lloc de treball respon a preguntes com qui, què, on, quan, per què i com.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El pla d’acolliment ajuda a reduir la por i facilitar la integració del nou treballador.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Un bon pla d’acolliment redueix l’abandonament de nous treballadors.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El quadrant ideal de gestió del talent és el perfil que sap i vol treballar.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els plans de carrera serveixen per formar, fidelitzar i donar seguretat als treballadors.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els incentius monetaris fidelitzen més a llarg termini que els incentius emocionals.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  }
];


// --- MINITEST (3 OPCIONES) ---

const preguntasMinitest = [
  {
    texto: "Una empresa vol millorar la qualitat i la implicació dels treballadors. Quina acció és més adequada?",
    opciones: [
      "a) Limitar la participació dels treballadors",
      "b) Implicar-los en decisions i millores",
      "c) Controlar només els resultats finals"
    ],
    correcta: "b"
  },
  {
    texto: "Un treballador coneix bé la seva feina però no està motivat. En quin quadrant es troba?",
    opciones: [
      "a) No sap / no vol",
      "b) Sap / no vol",
      "c) No sap / vol"
    ],
    correcta: "b"
  },
  {
    texto: "Quin model és clau en la qualitat total (TQM)?",
    opciones: [
      "a) Control jeràrquic estricte",
      "b) Participació dels treballadors",
      "c) Externalització de decisions"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa contracta personal només en pics de demanda. Quin avantatge obté?",
    opciones: [
      "a) Més estabilitat laboral",
      "b) Menys costos fixos",
      "c) Més fidelització"
    ],
    correcta: "b"
  },
  {
    texto: "Quin és un inconvenient del treball per projectes?",
    opciones: [
      "a) Falta d’autonomia",
      "b) Inseguretat laboral",
      "c) Sou baix per hora"
    ],
    correcta: "b"
  },
  {
    texto: "Què ha permès la mobilitat laboral actual?",
    opciones: [
      "a) Treballar només a l’oficina",
      "b) Eliminar la tecnologia",
      "c) Treballar des de qualsevol lloc"
    ],
    correcta: "c"
  },
  {
    texto: "En la uberització del treball, el professional destaca per:",
    opciones: [
      "a) Molta seguretat laboral",
      "b) Dependència de plataformes",
      "c) Contracte indefinit"
    ],
    correcta: "b"
  },
  {
    texto: "Quin és un benefici de l’automatització?",
    opciones: [
      "a) Augment d’accidents",
      "b) Reducció de tasques penoses",
      "c) Eliminació del treball humà"
    ],
    correcta: "b"
  },
  {
    texto: "Actualment, què es valora més d’un treballador?",
    opciones: [
      "a) Hores presencials",
      "b) Productivitat i valor aportat",
      "c) Antiguitat"
    ],
    correcta: "b"
  },
  {
    texto: "La gestió del talent implica:",
    opciones: [
      "a) Tractar tothom igual",
      "b) Detectar i potenciar persones clau",
      "c) Centrar-se només en salaris"
    ],
    correcta: "b"
  },
  {
    texto: "Quin efecte té el treball en equip?",
    opciones: [
      "a) Pitjors decisions",
      "b) Més individualisme",
      "c) Millor clima laboral"
    ],
    correcta: "c"
  },
  {
    texto: "Una feina amb sentit provoca:",
    opciones: [
      "a) Més rotació",
      "b) Menys compromís",
      "c) Més motivació"
    ],
    correcta: "c"
  },
  {
    texto: "Quin segell reconeix bones pràctiques laborals?",
    opciones: [
      "a) ISO 9001",
      "b) Great Place to Work",
      "c) CE"
    ],
    correcta: "b"
  },
  {
    texto: "La RSC impacta principalment en:",
    opciones: [
      "a) Només els beneficis econòmics",
      "b) El compromís dels treballadors",
      "c) La producció industrial"
    ],
    correcta: "b"
  },
  {
    texto: "Quina pregunta NO forma part del disseny del lloc de treball?",
    opciones: [
      "a) Qui farà la feina?",
      "b) Quant costarà la publicitat?",
      "c) Quines tasques farà?"
    ],
    correcta: "b"
  },
  {
    texto: "Quin és l’objectiu principal del pla d’acolliment?",
    opciones: [
      "a) Augmentar la pressió",
      "b) Facilitar la integració",
      "c) Reduir salaris"
    ],
    correcta: "b"
  },
  {
    texto: "Què ajuda a alinear culturalment el treballador?",
    opciones: [
      "a) Missió, visió i valors",
      "b) Només el salari",
      "c) L’organigrama"
    ],
    correcta: "a"
  },
  {
    texto: "Quina fase del pla de carrera té baixa productivitat inicial?",
    opciones: [
      "a) Creixement",
      "b) Adaptació",
      "c) Sortida"
    ],
    correcta: "b"
  },
  {
    texto: "Què és un profesiograma?",
    opciones: [
      "a) Un pla de formació",
      "b) Un document que defineix el lloc",
      "c) Un sistema de salaris"
    ],
    correcta: "b"
  },
  {
    texto: "Un avantatge de la captació interna és:",
    opciones: [
      "a) Adaptació lenta",
      "b) Cost elevat",
      "c) Alta motivació"
    ],
    correcta: "c"
  },
  {
    texto: "Quina és una desavantatge de la captació externa?",
    opciones: [
      "a) Noves idees",
      "b) Cost elevat",
      "c) Talent provat"
    ],
    correcta: "b"
  },
  {
    texto: "Quina fase és la de màxim rendiment?",
    opciones: [
      "a) Adaptació",
      "b) Captació",
      "c) Creixement"
    ],
    correcta: "c"
  },
  {
    texto: "Els incentius monetaris serveixen sobretot per:",
    opciones: [
      "a) Fidelitzar a llarg termini",
      "b) Motivar a curt termini",
      "c) Crear cultura d’empresa"
    ],
    correcta: "b"
  },
  {
    texto: "Quin és un incentiu NO monetari?",
    opciones: [
      "a) Sou base",
      "b) Comissions",
      "c) Flexibilitat horària"
    ],
    correcta: "c"
  },
  {
    texto: "Quin risc tenen els incentius per producció?",
    opciones: [
      "a) Baixar la qualitat",
      "b) Baixar la motivació",
      "c) Augmentar costos fixos"
    ],
    correcta: "a"
  },
  {
    texto: "Què regula els salaris i condicions laborals?",
    opciones: [
      "a) Convenis col·lectius",
      "b) Plans de carrera",
      "c) Pla d’acolliment"
    ],
    correcta: "a"
  },
  {
    texto: "Què busca principalment la gestió del talent?",
    opciones: [
      "a) Reduir persones",
      "b) Potenciar el valor humà",
      "c) Automatitzar decisions"
    ],
    correcta: "b"
  },
  {
    texto: "Quina acció redueix l’abandonament de nous treballadors?",
    opciones: [
      "a) Pressió inicial",
      "b) Pla d’acolliment",
      "c) Control estricte"
    ],
    correcta: "b"
  },
  {
    texto: "Què combina diners i emocions en compensació?",
    opciones: [
      "a) Sou base",
      "b) Salari emocional",
      "c) Producció"
    ],
    correcta: "b"
  },
  {
    texto: "L’objectiu final de la direcció és portar els treballadors al quadrant:",
    opciones: [
      "a) No sap / no vol",
      "b) Sap / no vol",
      "c) Sap / vol"
    ],
    correcta: "c"
  }
];


// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien!",
  "¡Correcto!",
  "¡Buen trabajo!",
  "¡Así se hace!",
  "¡Perfecto!"
];

// =======================
// VARIABLES
// =======================

let modo = "";
let preguntasParaEsteTest = [];
let i = 0;
let puntuacion = 0;

// =======================
// FUNCIONES
// =======================

function barajar(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }
}

function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarMenuInicial() {
  mostrarMensaje(
    "👋 Hola, bienvenido al Tema T401.2.\n\n¿Qué quieres practicar?",
    "bot"
  );
  mostrarMensaje(
    "A) Sentencias (Verdadero / Falso)\n      o \n B)Mini-test (3 opciones)",
    "bot"
  );

  configurarBoton("btnA", "A", iniciarSentencias);
  configurarBoton("btnB", "B", iniciarMinitest);
  ocultarBotones(["btnC", "btnD"]);
}

function iniciarSentencias() {
  modo = "sentencias";
  i = 0;
  puntuacion = 0;

  barajar(preguntasSentencias);
  preguntasParaEsteTest = preguntasSentencias.slice(0, 30);

  configurarBoton("btnA", "V", () => responder("v"));
  configurarBoton("btnB", "F", () => responder("f"));
  ocultarBotones(["btnC", "btnD"]);

  mostrarPregunta();
}

function iniciarMinitest() {
  modo = "minitest";
  i = 0;
  puntuacion = 0;

  barajar(preguntasMinitest);
  preguntasParaEsteTest = preguntasMinitest.slice(0, 30);

  configurarBoton("btnA", "A", () => responder("a"));
  configurarBoton("btnB", "B", () => responder("b"));
  configurarBoton("btnC", "C", () => responder("c"));
  ocultarBotones(["btnD"]);

  mostrarPregunta();
}

function mostrarPregunta() {
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  const texto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(texto, "bot");
}

function responder(opcion) {
  const p = preguntasParaEsteTest[i];
  mostrarMensaje(opcion.toUpperCase(), "user");

  if (opcion === p.correcta) {
    puntuacion++;
    mostrarMensaje(
      frases_animo[Math.floor(Math.random() * frases_animo.length)],
      "bot"
    );
  } else {
    mostrarMensaje(
      `❌ Incorrecte. La correcta era ${p.correcta.toUpperCase()}`,
      "bot"
    );
  }

  i++;

  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 600);
  } else {
    setTimeout(() => {
      mostrarMensaje(
        `🏁 Resultat final: ${puntuacion} / ${preguntasParaEsteTest.length}`,
        "bot"
      );
      desactivarBotones();
    }, 600);
  }
}

function configurarBoton(id, texto, accion) {
  const btn = document.getElementById(id);
  btn.style.display = "block";
  btn.textContent = texto;
  btn.onclick = accion;
}

function ocultarBotones(ids) {
  ids.forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function desactivarBotones() {
  document.querySelectorAll("button").forEach(b => b.disabled = true);
}

// =======================
// ARRANQUE
// =======================

document.addEventListener("DOMContentLoaded", mostrarMenuInicial);





