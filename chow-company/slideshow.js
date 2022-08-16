let advertNo = 0;
advertFun();
function advertFun(){
 let ads = document.getElementsByClassName("ads");
 for(let i = 0; i < ads.length; i++){
  ads[i].style.display = "none"
 }
 advertNo++;
 if(advertNo > ads.length){
  advertNo = 1;
 }
 ads[advertNo - 1].style.display = "block";
 setTimeout(advertFun,8000)
}