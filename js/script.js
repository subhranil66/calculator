function output(input){
    document.calculator.display.value  += input;
}
function clear(){
    document.calculator.display.value  = "";
}
function result(){
   if(document.calculator.display.value){
      c = document.calculator.display.value
      //var calc = c.replace("÷","/");
      //var calc = c.replace("x","*");
      var calc = c.replace("^","**");
      try{
         document.calculator.display.value = eval(calc);
      }
      catch(err){
         document.calculator.display.value = "Invalid Mathematical Operation.";
      }
   }
}

function f1(){
   output("+");
}
function f2(){
   output("-");
}
function f3(){
   output("*");
}
function f4(){
   output("^");
}
function f5(){
   output("/");
}
function f6(){
   output(".");
}
function f7(){
   clear();
}
function f8(){
   result();
}


function b0(){
   output("0");
}
function b1(){
   output("1");
}
function b2(){
   output("2");
}
function b3(){
   output("3");
}
function b4(){
   output("4");
}
function b5(){
   output("5");
}
function b6(){
   output("6");
}
function b7(){
   output("7");
}
function b8(){
   output("8");
}
function b9(){
   output("9");
}