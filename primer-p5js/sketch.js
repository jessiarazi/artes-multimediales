function setup() {
    createCanvas(700, 700);
    background(220, 202, 140);
    //basado en la obra Decisive Pink de Kandinsky
  
    //rectángulo rosa
    fill(227, 135, 140);
    stroke(0);
    strokeWeight(0.1);
    rect(200, 200, 230, 190);
  
    //circulo en el extremo del rectángulo rosa
    fill(212, 164, 160);
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
  
    //triángulo necho chiquito de arriba
    fill(0);
    triangle(280, 100, 300, 70, 320, 100);
  
    //rectángulo verde
    fill(172, 187, 156);
    stroke(0);
    strokeWeight(0.2);
    rect(400, 100, 25, 25);
  
    //rectángulo rosado
    fill(214, 169, 164);
    stroke(0);
    strokeWeight(0.2);
    rect(370, 280, 10, 13);
  }
  