function errors (a){
  if(a >5){
    return true
  }else{
    return false
  }
}
console.log(errors(5));


function text(scr){
    var scr = "Hello world";
    return scr
}
console.log(text());

var foo = {bar : "Hello world"};
console.log(foo . bar)