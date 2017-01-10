function init(){
  let firstRec = document.getElementById('div1');
  let secRec = document.getElementById('div2');
  let thirdRec = document.getElementById('div3');

  firstRec.addEventListener('click', callAlertFunc);
  secRec.addEventListener('click', callAlertFunc);
  thirdRec.addEventListener('click', callAlertFunc);

};

function callAlertFunc(event) {
  event = event || window.event;

  event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true)

  alert(this.className);
}


window.onload = init();
