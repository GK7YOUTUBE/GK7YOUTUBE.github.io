//////////////////////////////////////////////////////////////
function onCreate() {
  ShowToast();
}
//▬▬▬▬▬▬▬▬▬▬
     // KHAI BÁO TOAST
//▬▬▬▬▬▬▬▬▬▬
function ShowToast() {
  var x = document.getElementById("Toast");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
}
//▬▬▬▬▬▬▬▬▬▬
     //KHAI BÁO FPS WEBS
//▬▬▬▬▬▬▬▬▬▬
 var fps = document.getElementById("fps");

var startTime = Date.now();

var frame = 0;

function tick() {

  var time = Date.now();

  frame++;

  if (time - startTime > 1000) {

      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);

      startTime = time;

      frame = 0;

	}  window.requestAnimationFrame(tick);

}

tick();

//▬▬▬▬▬▬▬▬▬▬
     //KHAI BÁO LINK CONTACTS
//▬▬▬▬▬▬▬▬▬▬

function Facebook() {
  setTimeout(function() {
    window.open('https://www.facebook.com/youtubegiangheo', 'ultimate')},
  100);
}
function Youtube() {
  setTimeout(function() {
    window.open('https://www.youtube.com/channel/UCted1ml_nqGEgl-JocCEVAQ', 'ultimate')},
  100);
}
function Zalo() {
  setTimeout(function() {
    window.open('https://zalo.me/0349869157', 'ultimate')},
  100);
}

//////////////////////////////////////////////////////////////
