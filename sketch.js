var form,bg;

function setup(){
    createCanvas(900,500);
    form = new Form();
    
    bg =loadImage("backdrop.jpg");
}

function draw(){
    background(bg);
    form.display();
   
  
}
   
  
  