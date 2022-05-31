let level = document.getElementById("level");
let score = document.getElementById("score");
const folow = document.getElementById("folow");


folow.onclick = ()=>{
  alert("yess");
  const xhr = new XMLHttpRequest();
  xhr.open("post", "profile", true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.onload = ()=>{
    //window.reload();
    console.log(xhr.responseText);
  }
  xhr.send(JSON.stringify({type: "folow"}));

}


window.onload = ()=>{
  let levelC = parseInt(level.innerText);
  let scoreC = parseInt(score.innerText);
  level.innerText = 0;
  score.innerText = 0;
  let levelI = setInterval(()=>{
    if (levelC == level.innerText)
      clearInterval(levelI);
    else
      level.innerText = parseInt(level.innerText) + 1;
  }, 30);
  let scoreI = setInterval(() => {
    if (scoreC == score.innerText)
      clearInterval(scoreI);
    else
      score.innerText = parseInt(score.innerText) + 1;
  }, 5);
}
