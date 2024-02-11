const paswordbox=document.getElementById('Password');
const length = 12;
const uprcase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghigklmnopqrstuvwxyz";
const  number ="1234567890";
const symbol ="?/><{}+_-*/$#@&*()";
const allcra =uprcase+lowercase+number+symbol;
function cretepassword(){
let Password="";
  Password +=uprcase [Math.floor(Math.random()*uprcase.length)];
  Password +=lowercase [Math.floor(Math.random()*lowercase.length)];
  Password +=number [Math.floor(Math.random()*number.length)];
  Password +=symbol [Math.floor(Math.random()*symbol.length)];

  while(length >Password.length){
    Password +=allcra [Math.floor(Math.random()*allcra.length)];
  }
  paswordbox.value =Password;
}
function copypass(){
    paswordbox.select();
    document.execCommand("copy")
}