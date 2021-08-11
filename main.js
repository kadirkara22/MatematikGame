var Number1,Number2,Number3,Number4,Operator1,Operator2,result1,result2,answer1,answer2,True=0,False=0;
Number1=document.getElementById('Number1');
Number2=document.getElementById('Number2');
Number3=document.getElementById('Number3');
Number4=document.getElementById('Number4');
Operator1=document.getElementById('Operator1');
Operator2=document.getElementById('Operator2');
result1=document.getElementById('result1');
result2=document.getElementById('result2');
answer1=document.getElementById('answer1');
answer2=document.getElementById('answer2');
True1=document.getElementById('True1');
True2=document.getElementById('True2');
False1=document.getElementById('False1');
False2=document.getElementById('False2');

function RandomNumber(min,max){
    var number=Math.floor(Math.random()*(max-min))+min;
    return number;
}

function newQuestion1(){
    var operation=["+","-","*","/"];
Operator1.textContent=operation[RandomNumber(0,4)];
Number1.textContent=RandomNumber(0,50);
Number2.textContent=RandomNumber(0,50);

if(Operator1.textContent=="/")
{
    while(true)
    {
        Number2.textContent=RandomNumber(0,50);
        if(Number1.textContent%Number2.textContent==0){
            break;
        }
    }
}
}

function newQuestion2(){
    var operation=["+","-","*","/"];
Operator2.textContent=operation[RandomNumber(0,4)];
Number3.textContent=RandomNumber(0,50);
Number4.textContent=RandomNumber(0,50);
 
if(Operator2.textContent=="/")
{
    while(true)
    {
        
        Number4.textContent=RandomNumber(0,50);
     
        if(Number3.textContent%Number4.textContent==0){
            break;
        }
    }
}
}

window.onload=function(){
    newQuestion1();
    newQuestion2();
}




answer1.onclick=function(){
    var ans1,n1,n2;
n1=Number(Number1.textContent);
n2=Number(Number2.textContent);

switch(Operator1.textContent){
    case '+': 
    ans1=n1+n2;
     break;
    case '-':
         ans1=n1-n2;
          break;
    case '*':
         ans1=n1*n2;
          break;
    case '/':
         ans1=n1/n2;
          break;
          default:
              break;
}

if(result1.value==ans1){
    True1.textContent=Number(True1.textContent)+1;
}else{
    False1.textContent=Number(False1.textContent)+1;
}
newQuestion1();
}


answer2.onclick=function(){
    var ans2,number3,number4;
number3=Number(Number3.textContent);
number4=Number(Number4.textContent);

switch(Operator2.textContent){
    case '+': 
    ans2=number3+number4;
     break;
    case '-':
         ans2=number3-number4;
          break;
    case '*':
         ans2=number3*number4;
          break;
    case '/':
         ans2=number3/number4;
          break;
          default:
              break;
}

if(result2.value==ans2){
    True2.textContent=Number(True2.textContent)+1;
}else{
    False2.textContent=Number(False2.textContent)+1;
}


newQuestion2();

}

