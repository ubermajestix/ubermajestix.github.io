var app = {};
app.init = function(){
  Cufon.replace('p,h1');
  $('a.box').tipTip();
};

function log(){
  if(window.console) {
    console.log.apply(console, arguments);
  }
}
