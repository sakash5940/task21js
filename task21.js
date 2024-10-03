//Question1
var a="    akash";
var b="patil   ";
console.log(a.trimStart());
console.log(b.trimEnd());
var resultstr= a.concat("",b);
console.log(resultstr);
console.log(resultstr.toLocaleUpperCase());

//question2
var c="SUMANTH"
console.log(c.charAt(3));
console.log(c.charAt(6));
console.log(c.toLowerCase());

//question3
var d="w"
var e="q"
var result= d.concat(e)
console.log(result);
console.log(result.toUpperCase());
console.log(result.charAt(1));

//question4
var a="akashpatil"
var b="sumanthreddy"
var c1=a.slice(0,3)
var c2=b.slice(7,11)
var result3=c1.concat(c2)
console.log(result3)
var efg=result3.toUpperCase(0,7)
console.log(result3)

//question5
var st="      akash patil      ";
var st1="msd"
var r5=(st.trim().charAt(0).toUpperCase()+st.trim().slice(1,6)).concat(" ",st1.slice(0,2)+st1.charAt(2).toUpperCase());
console.log(r5);

//question6
var st2="hello there , how are you";
console.log(st2);
var r6=st2.indexOf('are');
console.log(r6);
