exports.run = function(input) {

  // YOUR CODE IS WELCOME HERE
  function myFunction(b,c){
    var mString="";
    var tailleB=b.length;
    for(var i=0;i<tailleB;i++){
      if(i==tailleB-1){
          mString=mString+"The value of "+c[i].toString()+" is "+b[i].toString()
      }else{
          mString=mString+"The value of "+c[i].toString()+" is "+b[i].toString()+", "
      }
    }
    return mString;
  }
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(myFunction, [1, 2, 3], ["One", "Two", "Three"]);
  /** */
};
//"The value of One is 1, The value of Two is 2, The value of Three is 3"