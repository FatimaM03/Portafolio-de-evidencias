// area del circulo es igual 

const PI = 3.1416;

let areacirculo;

let radio = 4;

areacirculo = PI * (radio * radio);

radio = 10;

areacirculo = PI * (radio * radio)


let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Malinali Becerril')
  .pauseFor(300)
  .deleteChars(10)
  .start();
