var x_wert;
var y_wert;
var treffer = 0;
var möwe_x = -50;
var möwe_y = 430;

function setup() {
  createCanvas(500, 500);
  background("Skyblue");
  frameRate(50);
}

//Hintergrund
function draw() {
  background("Skyblue");
  fill("DarkKhaki");
  rect(-5, 350, 510, 500);
  strokeWeight(5);
  stroke("DarkKhaki");
  line(-5, 350, 510, 350);

  möwe();

  //Fadenkreuz
  function kreuz(kreuz_x, kreuz_y) {
    strokeWeight(3);
    stroke("#ff3030");
    line(kreuz_x - 30, kreuz_y, kreuz_x + 30, kreuz_y);
    line(kreuz_x, kreuz_y + 30, kreuz_x, kreuz_y - 30);
    line(kreuz_x + 15, kreuz_y + 15, kreuz_x + 15, kreuz_y - 15);
    line(kreuz_x - 15, kreuz_y + 15, kreuz_x - 15, kreuz_y - 15);
    line(kreuz_x - 15, kreuz_y - 15, kreuz_x + 15, kreuz_y - 15);
    line(kreuz_x - 15, kreuz_y + 15, kreuz_x + 15, kreuz_y + 15);
  }

  //Zaun
  strokeWeight(10);
  stroke("saddlebrown");
  line(0, 300, 500, 300);
  line(20, 300, 20, 360);
  line(70, 300, 70, 360);
  line(120, 300, 120, 360);
  line(170, 300, 170, 360);
  line(220, 300, 220, 360);
  line(280, 300, 280, 360);
  line(330, 300, 330, 360);
  line(380, 300, 380, 360);
  line(430, 300, 430, 360);
  line(480, 300, 480, 360);
  strokeWeight(7);
  line(0, 330, 500, 330);

  //Möwenbewegung
  möwe_x = möwe_x + 1;

  if (möwe_x > 550) {
    möwe_x = -50;
  }

  //Geschwindigkeit
  if (frameCount % 35 == 0) {
    x_wert = random(50, 260);
    y_wert = random(50, 260);
  }

  vogel(x_wert, y_wert);
  kreuz(mouseX, mouseY);
  möwe_x = möwe_x + 1;
  fill("Black");
  stroke("white");
  textSize(25);
  textAlign(LEFT);
  text("Treffer: " + treffer, 20, 30);
}

//Trefferanzeige
function mousePressed() {
  if (dist(x_wert, y_wert, mouseX, mouseY) < 23) {
    treffer = treffer + 1;
  }
  if (dist(x_wert, y_wert, mouseX, mouseY) > 23) {
    treffer = treffer - 1;
  }
}

//Vogel in der Luft
function vogel(vogel_x, vogel_y) {
  //Körper
  strokeWeight(0);
  fill("black");
  ellipse(vogel_x, vogel_y, 60, 15);
  strokeWeight(10);
  stroke("Black");
  line(vogel_x + 20, vogel_y, vogel_x - 25, vogel_y - 40);
  line(vogel_x + 20, vogel_y, vogel_x - 25, vogel_y + 40);
  ellipse(vogel_x + 30, vogel_y, 15, 15);
  //Schnabel
  strokeWeight(0);
  fill("yellow");
  triangle(
    vogel_x + 42,
    vogel_y + 5,
    vogel_x + 55,
    vogel_y,
    vogel_x + 42,
    vogel_y - 5
  );
  //Auge
  fill("White");
  ellipse(vogel_x + 33, vogel_y - 5, 8, 8);
  fill("black");
  ellipse(vogel_x + 33, vogel_y - 5, 2, 2);
}

//Möwe am Boden
function möwe() {
  strokeWeight(0);
  fill("rosybrown");
  rect(möwe_x + 0, möwe_y + 1, 5, 20);
  rect(möwe_x, möwe_y + 21, 10, 3);
  fill("white");
  ellipse(möwe_x, möwe_y, 40, 18);
  fill("darkgray");
  ellipse(möwe_x + 20, möwe_y - 8, 25, 10);
  ellipse(möwe_x - 15, möwe_y, 30, 15);
  ellipse(möwe_x - 20, möwe_y, 30, 10);
  fill("white");
  ellipse(möwe_x + 23, möwe_y - 8, 5, 5);
  fill("black");
  ellipse(möwe_x + 23, möwe_y - 8, 2, 2);
  fill("salmon");
  rect(möwe_x + 27, möwe_y - 8, 10, 3);
}
