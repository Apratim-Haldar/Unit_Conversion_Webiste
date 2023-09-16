function temperature(){
    var c = document.getElementById("c").value;
    var f=(c*9.0/5.0)+32.0;
    document.getElementById("f").value=f;
    
}
function Wght(){
    var kg = document.getElementById("kg").value;
    var lbs = kg*2.2;
    document.getElementById("lbs").value=lbs;
}
function Dist(){
    var km = document.getElementById("kms").value;
    var m = km*0.62137;
    document.getElementById("miles").value=m;
}
