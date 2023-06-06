//declaración de variables
let angulo = 0.0;

function setup() {
  createCanvas(512, 512);
  line(random(100, 350), 320, random(100, 350), random(120, 250));
}

function draw() {
  background(255);
  //console.log(mouseX, mouseY);

  //Rectángulo blanco
  strokeWeight(1);
  fill(255);
  stroke(150);
  rect(100, 100, 300);

  //detalles de habitacion similar a Nees

  //líneas de la perspectiva
  stroke(150);
  line(0, 0, 100, 100);
  line(512, 0, 400, 100);
  line(0, 512, 100, 400);
  line(512, 512, 400, 400);

  

  //----------------------------------TRONCOS LEJANOS-------------------
  for (var i = 100; i < 390; i += 50) { //determino coordenada donde quiero que empiece a dibujarse el primer árbol (será en 150) y la última (máx 390)
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
  for (var p = 130; p < 390; p += 50) { //dibuja líneas que empiezan en 130
    stroke(80);
    strokeWeight(1);
    line(p, 350, p, 150);
  }

  //variables de inicio y fin para troncos intermedios
  var intYInicio = 350;
  var intYFinal = 340;
  var intXInicio = 130;
  var intXFinal = 140;
  var intXFinalIzq = 120; //xinicio (130) - 10
  
  //el siguiente for se itera 6 veces
  for (var numArboles = 0; numArboles < 6; numArboles += 1) { //ahora son 6 árboles
    for (var numRamas = 0; numRamas < 19; numRamas += 1) { //ahora son 19 ramas
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
    intYInicio = 350;
    intYFinal = 340;
  }
  
  //----------------------------------TRONCOS CERCANOS-------------------
  var senoangulo = sin(angulo);
  var posicion1 = map(senoangulo, -1, 1, 110, 130);
  var posicion2 = map(senoangulo, -1, 1, 300, 330);
  angulo += 0.01;

  
  //líneas troncos árboles cercanos negros
  stroke(0);
  strokeWeight(3);
  line(155, 400, posicion1, 150);
  line(350, 400, posicion2, 190); 

 /*while (yinicio >= 200 && yfinal >= 190) {
    line(150, yinicio, 160, yfinal);
    line(200, yinicio, 210, yfinal);
    line(250, yinicio, 260, yfinal);
    line(300, yinicio, 310, yfinal);
    line(350, yinicio, 360, yfinal);
    yinicio -= 10;
    yfinal -= 10;
  }*/

  //en el while de acá abajo intenté unificar todas las variables pero no me funciona
  /*while (yinicio >= 200 && yfinal >= 190 && xinicio <= 350 && xfinal <= 360) {
    line(xinicio, yinicio, xfinal, yfinal);
    yinicio -= 10;
    yfinal -= 10;
    xinicio += 50;
    xfinal = xinicio + 10;
  } */
}
