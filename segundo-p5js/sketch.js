//Declaración de variables

//variables del rectángulo rosa
var cambiodecolorR = 227;
var cambiodecolorG = 135;
var cambiodecolorB = 140;
var cambiodelugarX = 200;
var cambiodelugarY = 200;

//variables del círculo rosa
var cambiodecolor1 = 212;
var cambiodecolor2 = 164;
var cambiodecolor3 = 160;

function setup() {
  createCanvas(700, 700);
  background(220, 202, 140);
  //basado en la obra Decisive Pink de Kandinsky
}

function draw() {
  //rectángulo rosa
  fill(cambiodecolorR, cambiodecolorG, cambiodecolorB);
  stroke(0);
  strokeWeight(0.1);
  rect(cambiodelugarX, cambiodelugarY, 230, 190);

  //circulo en el extremo del rectángulo rosa
  fill(cambiodecolor1, cambiodecolor2, cambiodecolor3, 100);
  ellipse(200, 360, 70, 70);

  //cuadradito blanco sobre el rectángulo
  fill(198, 205, 187);
  stroke(150);
  strokeWeight(1);
  rect(230, 250, 15, 15);

  //base triángulo rayado sobre rectángulo
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
