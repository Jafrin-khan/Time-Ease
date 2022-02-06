let bt = document.getElementById("getTimezone");


if(bt !== null){
bt.addEventListener("click",Timezone);
}

function Timezone(){
  let time = document.getElementById("showTimezone");
  time.innerHTML = Date();
}
