let root = document.getElementById("root");

console.log("called...");

let player = document.createElement("div");
player.className = "player";
let playerX = 50;
let playerY = 80;
let playerX_change = 0;
let playerY_change = 0;


player.style.left = playerX + "%";
player.style.top = playerY + "%";


// let monster = 

let enemyCount = 6;
let enemies = []
let enemyX = [];
let enemyY = 5;
let enemyX_change = [];
let enemyY_change = [];

for(var i = 0; i <= enemyCount; i++){
  let enemy = document.createElement("div");
  enemy.className = "enemy";
  enemies.push(enemy);
  enemyX.push(Math.floor(Math.random() * 100));
  // enemyY.push(Math.floor(Math.random() * 2))
  // let enemyX_change = 0;
  // let enemyY_change = 0;
}

var start;

enemies.forEach((enemy,i) => {
  console.log(enemy);
  enemy.style.left = (enemyX[i] + enemyX_change) + "%";
  enemy.style.top = enemyY + "%";
  root.appendChild(enemy);

  // enemyMovement(enemyX[i],enemyY)
  
  // start = setInterval(() => {
  //   console.log(enemyX[i],enemyY, "called...");
  //   enemyMovement(enemyX[i],enemyY);
  // }, 100);

})

// function enemyMovement(enemyX,enemyY){
//   if(enemyX >= 0){
//     enemyX_change += 1;
//     enemyX += enemyX_change;
//     enemyY += 5;
//   } else if(enemyX <= 100){
//     enemyX_change -= 1;
//     enemyX += enemyX_change
//     enemyY += 5;
//   }
// }




let bullet = document.createElement("div");
bullet.className = "bullet";

// let player = document.createElement("div");
// player.className = "player";
// root.appendChild(enemy);
root.appendChild(player);


// detect_boundary for player

function getBoundary(x, y){
  if(x <= 0){
    x = 0;
  } else if(x >= 100){
    x = 100;
  }
}


document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "ArrowRight"){
    playerX_change += 1;
    playerX = (playerX + playerX_change) >= 100 ? 100 : (playerX + playerX_change) > 0 ? playerX + playerX_change: 0;
    player.style.left = playerX + "%";
    player.style.top = playerY + "%";
    getBoundary(playerX,playerY);

  } 
  else if(e.key === "ArrowLeft" ){
    playerX_change += -1;
    // playerX += playerX_change;
    playerX = (playerX - playerX_change) > 0 ? (playerX - playerX_change) : (playerX - playerX_change) === 0 ? 0 : 0;
    player.style.left = playerX + "%";
    player.style.top = playerY + "%";

    getBoundary(playerX,playerY);

  }
   
  else if(e.key === "ArrowUp"){
    playerY_change += -1;
    playerY += playerY_change;

    if(playerY <=0){
      playerY = 0;
      player.style.left = playerX + "%";
      player.style.top = playerY + "%";
    } else {
      player.style.left = playerX + "%";
      player.style.top = playerY + "%";
    }
    // getBoundary(playerX,playerY);
  } else if(e.key === "ArrowDown"){
    playerY_change += 1;
    playerY += playerY_change;
    if(playerY >= 95){
      playerY = 95;
      player.style.left = playerX + "%";
      player.style.top = playerY + "%";
    } else {
      player.style.left = playerX + "%";
      player.style.top = playerY + "%";
    }
    

    getBoundary(playerX,playerY);
  }
})


