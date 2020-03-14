let godina = parseInt(prompt("Unesite koju godinu zelite da proverite"))
if ((godina%4==0) && (godina%400==0) && (godina%100!=0)){
    console.log("Godina je prestupna");
}
else{
    console.log("Godina NIJE prestupna");
}