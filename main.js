var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}
function new_image(get_image){fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey==true&& keypressed=='80'){
    console.log("p and shift pressed together");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true&& keypressed=='77'){
    console.log("m and shift pressed together");
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(keypressed=='38'){
    console.log("up");
    up();
}
if(keypressed=='40'){
    console.log("down");
    down();
}
if(keypressed=='37'){
    console.log("left");
    left();
}
if(keypressed=='39'){
    console.log("right");
    right();
}
if(keypressed=='70'){
    console.log("f");
    new_image('ironman_face.png');
}
if(keypressed=='66'){
    console.log("b");
    new_image('spiderman_body.png');
}
if(keypressed=='76'){
    console.log("l");
    new_image('hulk_legs.png');
}
if(keypressed=='82'){
    console.log("r");
    new_image('thor_right_hand.png');
}
if(keypressed=='72'){
    console.log("h");
    new_image('captain_america_left_hand.png');
}
}
function up(){
    if(player_y>=0){
    player_y=player_y-block_height;
    canvas.remove(player_object);
    player_update();
}
}
function down(){
    if(player_y<=500){
    player_y=player_y+block_height;
    canvas.remove(player_object);
    player_update();
}
}
function left(){
    if(player_x>=0){
    player_x=player_x-block_width;
    canvas.remove(player_object);
    player_update();
}
}
function right(){
    if(player_x<=850){
    player_x=player_x+block_width;
    canvas.remove(player_object);
    player_update();
}
}