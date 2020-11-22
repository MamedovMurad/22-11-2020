console.clear();

// 1-ci tapsiriq

// 1)

function isValid(params) {
   
let  rev =  params.split('').reverse().join('').toLowerCase();

 if (rev===params.toLowerCase()) {
     return true
 }else{
     return false
 }

}

console.log(isValid('sos'));

//1.1)

 function isValid2(param) {
    
     let reverseParam ='';
  for (let i = param.length-1; i >= 0; i--) {
    
    reverseParam+=param[i];
    
  }
 if (reverseParam.toLowerCase()===param.toLowerCase()) {
     return true
 } else {
     return false
 }
 }

   console.log(isValid2('ulu'));





  // 2-ci tapsiriq 

  //2)
  function getAutomorphic(prmtr) {
      let numSqr= prmtr*prmtr;
        let automorphic=numSqr%10; 
        if (automorphic===prmtr%10) {
            console.log(`${prmtr} is Automorphic number`);
        } else {
            console.log(`${prmtr} is not Automorphic number`);
        }

  }

getAutomorphic(8) 



/* sonuncu reqemi almaq ucun mod 10 etdim. diger usul ile string-e cevirib sonuncu index goturub ,
 hemin indexin deyerini parseInt() etmek de olar. 
EXP: 
      let num= 123;
let str= num.toString();
console.log(parseInt(str[str.length-1])); */