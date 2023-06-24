//declaración de variables
let angulo = 0.0;
let angulo2 = 0.0;
let contador = 0;

function setup() {
  createCanvas(512, 512);
  line(random(100, 350), 320, random(100, 350), random(120, 250));
}

function draw() {
  background(10);
  //console.log(mouseX, mouseY);

  //Rectángulo blanco
  /*strokeWeight(1);
  fill(255);
  stroke(150);
  rect(100, 100, 300);*/

  //detalles de habitacion similar a Nees

  //líneas de la perspectiva
  /*stroke(150);
  line(0, 0, 100, 100);
  line(512, 0, 400, 100);
  line(0, 512, 100, 400);
  line(512, 512, 400, 400); */

  

  //----------------------------------TRONCOS LEJANOS-------------------

    for (var i = 150; i < 390; i += 50) { //determino coordenada donde quiero que empiece a dibujarse el primer árbol (será en 150) y la última (máx 390)
      stroke(150);
      strokeWeight(0.5);
      line(i, 320, i, 200);
    }
  
    //variables de inicio y fin para los troncos lejanos
    var yinicio = 320; //parámetro primera rama
    var yfinal = 310; //parámetro primera rama
    var xinicio = 150; //parámetro primera rama
    var xfinal = 160; //parámetro primera rama
    var xfinalizq = 140; //150 (xinicio) -10
  
    //Este for se itera 5 veces, que es la cantidad de árboles (x). Solo creé la variable numArboles para la repetición del for, no se usa dentro de ninguna figura
    for (var numArboles = 0; numArboles < 5; numArboles += 1) {
      
      //Este for se itera 11 veces que es la cantidad de ramas por árbol (y)
      for (var numRamas = 0; numRamas < 11; numRamas += 1) {
        line(xinicio, yinicio, xfinal, yfinal);
        line(xinicio,yinicio,xfinalizq,yfinal);
        yinicio -= 10;
        yfinal -= 10;
      }
      
      //Me muevo de árbol
      xinicio += 50;
      xfinal = xinicio + 10;
      xfinalizq = xinicio - 10;
      
      //Reinicio coordenada y
      yinicio = 320;
      yfinal = 310;
    }
  
  
  
  //----------------------------------TRONCOS INTERMEDIOS-------------------

    for (var p = 130; p < 390; p += 50) { //dibuja líneas que empiezan en 130 y se van dibujando cada 50 en X
      stroke(80);
      strokeWeight(1);
      line(p, 330, p, 150);
    }
  
    //variables de inicio y fin para troncos intermedios
    var intYInicio = 320;
    var intYFinal = 310;
    var intXInicio = 130;
    var intXFinal = 140;
    var intXFinalIzq = 120; //xinicio (130) - 10
    
    //el siguiente for se itera 6 veces
    for (var numArboles = 0; numArboles < 6; numArboles += 1) { //ahora son 6 árboles
      for (var numRamas = 0; numRamas < 16; numRamas += 1) { //ahora son 19 ramas
        line(intXInicio, intYInicio, intXFinal, intYFinal); //ramas derechas
        line(intXInicio, intYInicio, intXFinalIzq, intYFinal); //ramas izquierdas
        intYInicio -= 10; //voy dibujando las ramas hacia arriba (y)
        intYFinal -= 10;
      }
  
      //Me muevo de árbol (x)
      intXInicio += 50;
      intXFinal = intXInicio + 10;
      intXFinalIzq = intXInicio - 10;
      
      //Reinicio coordenada y para que se redibujen desde abajo de vuelta
      intYInicio = 320;
      intYFinal = 310;
    }
  

  
  //----------------------------------TRONCOS CERCANOS-------------------
  var senoangulo = sin(angulo);
  var posicion1 = map(senoangulo, -1, 1, 140, 155);
  var posicion2 = map(senoangulo, -1, 1, 340, 350);
  var posicion3 = map(senoangulo, -1, 1, 240,255)
  angulo += 0.01;

  
  //líneas troncos árboles cercanos negros
  stroke(255);
  strokeWeight(1.5);
  line(155, 350, posicion1, 120);
  line(350, 350, posicion2, 190);
  line (250, 350,posicion3, 110);

  // encontramos la linea que va de (155, 350) a (posicion1, 120) para saber
  // el x para cada rama
  x1 = 155
  y1 = 350
  x2 = posicion1
  y2 = 120
  m = (y1 - y2) / (x1 - x2)
  b = y1 - m*x1
  
  // altura deseada
  y = 350-150
  x = (y - b)/m
  
  //INTENTO DE RAMAS QUE SE MUEVAN VER
  
  line(x, y, x-10, y-10);
  line(x, y, x+10, y-10);
  
  //puntos estrellas
  var senoangulo2 = sin(angulo2);
  var posicionestrella = map (senoangulo2, -1, 1, 0,520);
  angulo2 += 0.001;

  point (200,100);
  point (310,200);
  point (80,50);
  point (150,50);
  point (300,50);
  point (400,50);
  point (50,100);
  point (50,200);
  point (400,100);
  point (20,70);
  point(posicionestrella,70);  


 
}
