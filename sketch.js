const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particle;
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10, plinko11, plinko12, plinko13, plinko14, plinko15, plinko16, plinko17, plinko18, plinko19, plinko20, plinko21, plinko22, plinko23, plinko24, plinko25, plinko26, plinko27, plinko28, plinko29, plinko30, plinko31, plinko32, plinko33, plinko34, plinko35, plinko36, plinko37, plinko38;
var division1, division2, division3, division4, division5, division6, division7;
var ground;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(240,795,width,10);

  division1 = new Divisions(0, 700, 10, 250);
  division2 = new Divisions(80, 700, 10, 250);
  division3 = new Divisions(160, 700, 10, 250);
  division4 = new Divisions(240, 700, 10, 250);
  division5 = new Divisions(320, 700, 10, 250);
  division6 = new Divisions(400, 700, 10, 250);
  division7 = new Divisions(480, 700, 10, 250);

  divisions.push(division7);
  divisions.push(division6);
  divisions.push(division5);
  divisions.push(division4);
  divisions.push(division3);
  divisions.push(division2);
  divisions.push(division1);

  /*//first set
  plinko1 = new Plinko(40,100,1);
  plinko2 = new Plinko(90,100,1);
  plinko3 = new Plinko(140,100,1);
  plinko4 = new Plinko(190,100,1);
  plinko5 = new Plinko(240,100,1);
  plinko6 = new Plinko(290,100,1);
  plinko7 = new Plinko(340,100,1);
  plinko8 = new Plinko(390,100,1);
  plinko9 = new Plinko(440,100,1);

  //second set
  plinko10 = new Plinko(15,200,1);
  plinko11 = new Plinko(65,200,1);
  plinko12 = new Plinko(115,200,1);
  plinko13 = new Plinko(165,200,1);
  plinko14 = new Plinko(215,200,1);
  plinko15 = new Plinko(265,200,1);
  plinko16 = new Plinko(315,200,1);
  plinko17 = new Plinko(365,200,1);
  plinko18 = new Plinko(415,200,1);
  plinko19 = new Plinko(465,200,1);

  //third set
  plinko20 = new Plinko(40,300,1);
  plinko21 = new Plinko(90,300,1);
  plinko22 = new Plinko(140,300,1);
  plinko23 = new Plinko(190,300,1);
  plinko24 = new Plinko(240,300,1);
  plinko25 = new Plinko(290,300,1);
  plinko26 = new Plinko(340,300,1);
  plinko27 = new Plinko(390,300,1);
  plinko28 = new Plinko(440,300,1);

  //fourth set
  plinko29 = new Plinko(15,400,1);
  plinko30 = new Plinko(65,400,1);
  plinko31 = new Plinko(115,400,1);
  plinko32 = new Plinko(165,400,1);
  plinko33 = new Plinko(215,400,1);
  plinko34 = new Plinko(265,400,1);
  plinko35 = new Plinko(315,400,1);
  plinko36 = new Plinko(365,400,1);
  plinko37 = new Plinko(415,400,1);
  plinko38 = new Plinko(465,400,1);

  plinkos.push(plinko38);
  plinkos.push(plinko37);
  plinkos.push(plinko36);
  plinkos.push(plinko35);
  plinkos.push(plinko34);
  plinkos.push(plinko33);
  plinkos.push(plinko32);
  plinkos.push(plinko31);
  plinkos.push(plinko30);
  plinkos.push(plinko29);
  plinkos.push(plinko28);
  plinkos.push(plinko27);
  plinkos.push(plinko26);
  plinkos.push(plinko25);
  plinkos.push(plinko24);
  plinkos.push(plinko23);
  plinkos.push(plinko22);
  plinkos.push(plinko21);
  plinkos.push(plinko20);
  plinkos.push(plinko19);
  plinkos.push(plinko18);
  plinkos.push(plinko17);
  plinkos.push(plinko16);
  plinkos.push(plinko15);
  plinkos.push(plinko14);
  plinkos.push(plinko13);
  plinkos.push(plinko12);
  plinkos.push(plinko11);
  plinkos.push(plinko10);
  plinkos.push(plinko9);
  plinkos.push(plinko8);
  plinkos.push(plinko7);
  plinkos.push(plinko6);
  plinkos.push(plinko5);
  plinkos.push(plinko4);
  plinkos.push(plinko3);
  plinkos.push(plinko2);
  plinkos.push(plinko1);*/
  
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);

  background(0,0,0); 
  
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  /*plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();*/

  divisions.pop();
  plinkos.pop();
}
