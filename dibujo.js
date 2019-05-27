//alert("si");
var d= document.getElementById("canvas");
var lienzo = d.getContext("2d");
var lineas = 300;
var l =0;

function dibujarLinea(color, x_i, y_i, x_f, y_f){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_i,y_i);
  lienzo.lineTo(x_f, y_f);
  lienzo.stroke();
  lienzo.closePath();
}

while (l < lineas) {
  console.log("Linea "+ l );
  dibujarLinea("orange",0,l*10,(l+1)*10,300);
  dibujarLinea("orange",0,l*10,300-l*10,0);
  dibujarLinea("green",l*10,300,300,300-l*10);
  dibujarLinea("green",l*10,0,300,(l+1)*10);
  l++;
}

dibujarLinea("black",1,1,1,299);
dibujarLinea("black",1,299,299,299);
dibujarLinea("black",299,1,299,299);
dibujarLinea("black",1,1,299,1);
