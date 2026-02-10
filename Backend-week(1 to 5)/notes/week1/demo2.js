 function biggestOfThree(a,b,c){
    if( a>b&&a>c){
        return a;
    }

    else if( b>c&&b>c){
        return b;
    }
    else{
        return c;
    }
 }
  let a=biggestOfThree(10,14,30)
  console.log(a);