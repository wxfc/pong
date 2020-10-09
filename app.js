const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const player1 = {
    x:50,
    y:50,
    speed: 5,
    width: 55,
    height: 100
};
const player2 = {
    x:550,
    y:50,
    speed: 5,
    width: 55,
    height: 100
};
const keyz1 = {
    ArrowRight:false,
    ArrowLeft:false,
    ArrowUp:false,
    ArrowDown:false
};
const keyz2 = {
    KeyA:false,
    KeyD:false,
    KeyW:false,
    KeyS:false
};
requestAnimationFrame(draw);

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e) {
    if(e.code in keyz1) {
        keyz1[e.code] = true;
    }
    if(e.code in keyz2) {
        keyz2[e.code] = true;
    }
};

function keyUp(e) {
    if(e.code in keyz1) {
        keyz1[e.code] = false;
    }
    if(e.code in keyz2) {
        keyz2[e.code] = false;
    }
};

function move() {
    if(keyz1.ArrowRight){
        player1.x += player1.speed;        
    }else if(keyz1.ArrowLeft){
        player1.x -= player1.speed;    
    };
    if(keyz1.ArrowUp){
        player1.y -= player1.speed;
    }else if(keyz1.ArrowDown) {
        player1.y += player1.speed;
    };
    
    if(keyz2.KeyA){
        player2.x -= player2.speed;        
    }else if(keyz2.KeyD){
        player2.x += player2.speed;    
    };
    if(keyz2.KeyW){
        player2.y -= player2.speed;
    }else if(keyz2.KeyS) {
        player2.y += player2.speed;
    };
};

function checkCol(ob1,ob2) {
    let hit = ob1.x < ob2.x + ob2.width && ob1.x +ob1.width > ob2.x && ob1.y < ob2.y + ob2.height && ob1.y +ob1.height > ob2.y
    if(hit) {
        console.log(hit)   
    }
    return hit
};

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    move();
    
    checkCol(player1,player2);
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(player1.x,player1.y,player1.width,player1.height);
    
    ctx.fillStyle = 'red';
    ctx.fillRect(player2.x,player2.y,player2.width,player2.height);
    
    let output = `Player 1 X ${player1.x} Y ${player1.y} Player 2 X ${player2.x} Y ${player2.y}`;
    
    ctx.font = '12px serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rebeccapruple';
    ctx.fillText(output,300,30);
    
    requestAnimationFrame(draw);
    
    
    // triangle
//    ctx.beginPath();
//    ctx.fillStyle = 'green';
//    ctx.moveTo(50,200);
//    ctx.lineTo(150,250);
//    ctx.lineTo(150,150);
//    ctx.fill();
//    
    // circle
//    ctx.beginPath();
//    ctx.fillStyle = 'blue';
//    ctx.arc(150,300,50,0,2*Math.PI);
//    ctx.strokeStyle = 'yellow';
//    ctx.fill();
//    ctx.stroke();
};


