//Basado en la obra Decisive Pink de Kandinsky

//Declaración de variables---------------

//variables del rectángulo rosa
let cambiodecolorR = 227;
let cambiodecolorG = 135;
let cambiodecolorB = 140;
let cambiodelugarX = 200;
let cambiodelugarY = 200;

//variables del círculo rosa
let cambiodecolor1 = 212;
let cambiodecolor2 = 164;
let cambiodecolor3 = 160;

//variables de movimiento
let circulotraslacionX = 0;
let circulotraslacionY = 0;
let rectangulotraslacionX = 0;
let rectangulotraslacionY = 0;
//variables para probar easing
let x = 0;
let y = 0;
let destinoX = 0;
let destinoY = 0;
let easing = 0.09;

function setup() {
  createCanvas(700, 700);
  background(220, 202, 140);
}

function draw() {
  console.log("X: " + mouseX + " Y:" + mouseY);
  background(220, 202, 140);

  if (circulotraslacionX < 200) {
    circulotraslacionX = circulotraslacionX + 5;
  }

  if (circulotraslacionY < 360) {
    circulotraslacionY += 5;
  }

  if (rectangulotraslacionX > -500) {
    rectangulotraslacionX = rectangulotraslacionX - 5;
  }

  if (rectangulotraslacionY < cambiodelugarY) {
    rectangulotraslacionY = rectangulotraslacionY + 5;
  }

  //rectángulo rosa
  push();
  /* rotate(PI); ACÁ NO ENTIENDO POR QUÉ LA FIGURA DESAPARECE */
  translate(rectangulotraslacionX, rectangulotraslacionY);
  fill(cambiodecolorR, cambiodecolorG, cambiodecolorB);
  stroke(0);
  strokeWeight(0.1);
  rect(700, 0, 230, 190);
  pop();

  //circulo en el extremo del rectángulo rosa
  push();
  translate(circulotraslacionX, circulotraslacionY);
  fill(cambiodecolor1, cambiodecolor2, cambiodecolor3, 100);
  ellipse(0, 0, 70, 70); //se dibuja originalmente desde el 0,0 pero se va trasladando por el translate de arriba
  pop();

  //pruebas con easing
  if (mouseIsPressed) {
    destinoX = mouseX;
    destinoY = mouseY;
  }

  x += (destinoX - x) * easing;
  y += (destinoY - y) * easing;

  //cuadradito blanco sobre el rectángulo
  push();
  translate(x, y); //con este translate quiero que el cuadradito se mueva hacia donde está el mouse, pero no llega a estar alineado con el cursor
  fill(198, 205, 187);
  stroke(150);
  strokeWeight(1);
  rect(230, 250, 15, 15);
  pop();

  //triángulo sobre rectángulo
  fill(206, 195, 175);
  stroke(0);
  strokeWeight(3);
  triangle(300, 120, 300, 350, 370, 330);

  //triangulito negro encima del rayado
  fill(0);
  stroke(0);
  triangle(300, 120, 300, 170, 310, 160);

  //lineas gruesas
  strokeCap(SQUARE);
  line(370, 230, 370, 150);
  line(385, 230, 385, 150);

  //lineas finitas
  strokeWeight(1.5);
  strokeCap(SQUARE);
  line(350, 100, 350, 50);

  //linea bien gruesa
  strokeWeight(7);
  strokeCap(SQUARE);
  line(150, 200, 150, 450);

  //círculo verde
  fill(172, 187, 156);
  strokeWeight(0.2);
  ellipse(350, 225, 10, 10);

  //rectángulo debajo del triángulo
  fill(88, 91, 89);
  noStroke();
  rect(299, 351, 100, 60);

  //triángulos sobre el rectángulo
  fill(0);
  triangle(299, 351, 299, 411, 350, 380);
  fill(0);
  triangle(399, 351, 350, 380, 399, 411);
  fill(150);
  triangle(350, 380, 299, 411, 399, 411);

  //triángulo negro grande de abajo
  fill(0);
  triangle(299, 410, 299, 600, 350, 600);

  //triángulo negro chiquito de arriba
  fill(0);
  triangle(280, 100, 300, 70, 320, 100);

  //rectángulo verde
  fill(172, 187, 156);
  stroke(0);
  strokeWeight(0.2);
  rect(400, 100, 25, 25);

  if (mouseIsPressed) {
    fill(255, 0, 0);
  }
  //rectángulo rosado
  fill(214, 169, 164);
  stroke(0);
  strokeWeight(0.2);
  rect(370, 280, 10, 13);

  //----------------------INTERACCIONES------------------

  //si la tecla d (por draw) está apretada, dibuja con el mouse. Lo hice para que el trazo del dibujo no sea sí o sí continuo, sino que la persona pueda decidir cuándo frenarlo (cuando suelta la tecla D). Ver qué pasa cuando dibujás a la vez que estás apretando el mouse mientras dibujás.
  if (keyIsPressed) {
    if (key == "d" || key == "D") {
      stroke(cambiodecolorR, cambiodecolorG, cambiodecolorB);
      strokeWeight(1.5);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

  //cambio de colores del rectángulo rosa si mantengo apretado el mouse
  if (mouseIsPressed) {
    cambiodecolorR = random(255); //agarra números random de 0 a 255
    cambiodecolorG = random(255);
    cambiodecolorB = random(255);
    cambiodecolor1 = random(255);
    cambiodecolor2 = random(255);
    cambiodecolor3 = random(255);
  } else {
    //hay alguna manera de escribir acá que vuelva a ser los RGB del principio sin ponerlo explicitamente?
    cambiodecolorR = 227;
    cambiodecolorG = 135;
    cambiodecolorB = 140;
    cambiodecolor1 = 212;
    cambiodecolor2 = 164;
    cambiodecolor3 = 160;
  }

  //cambio de lugar de la coordenada X,Y del rectángulo rosa si se apreta una tecla.
  //en el else estoy tratando de que si nada está apretado, vuelva a la normalidad, pero no lo estoy logrando. Arriba funcionó, acá no.
  // if (keyIsPressed) {
  // cambiodelugarX = 400;
  //cambiodelugarY = 400;
  //} else {
  //cambiodelugarX = 200;
  //cambiodelugarY = 200;
  // }
}
