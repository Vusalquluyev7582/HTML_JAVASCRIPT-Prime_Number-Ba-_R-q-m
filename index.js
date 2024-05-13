//Baş Rəqəm'i tapma 

/*

  15    = 2 ,3 ,4 , 5 ,6 ,7

 */

//   let a = Math.floor(7.9);
//   console.log(a);

//15

let rəqəm = Number(prompt("Zəhmət olmasa bir rəqəm daxil edin :"));
let nəticə = true;

for (let i = 2; i <= Math.floor(rəqəm / 2); i++) {
    if (rəqəm % i == 0) {
        //Baş Rəqəm deyil
        nəticə = false;
        break;
    }
}
if (nəticə) {
    alert(rəqəm + " Baş Rəqəmdir");
}
else {
    alert(rəqəm + " Baş Rəqəm deyil!");
}