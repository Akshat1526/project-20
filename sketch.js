var cat, mouse, cat_image1, mouse_image1, garden,garden_image, mouse_image2, cat_image2, cat_image3, mouse_image3
function preload() {
    //load the images here
cat_image1 = loadImage("cat1.png")
mouse_image1 = loadImage("mouse1.png")
garden_image = loadImage("garden.png")
cat_image2 = loadImage("cat2.png")
cat_image3 = loadImage("cat3.png")
mouse_image3 = loadImage("mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(200,300,20,20)
mouse = createSprite(600,200,20,20)
garden = createSprite(500,400)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
mouse.addAnimation("mouseHappy",mouse_image3)
mouse.changeAnimation("mouseHappy")
cat.addAnimation("catHappy",cat_image3)
cat.changeAnimation("catHappy")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse_image2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 25
  }

  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse_image2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 25
  }

}
