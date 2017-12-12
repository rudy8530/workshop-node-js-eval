exports.run = function(input) {
  var length= input.length;
  var str =""
    for(var i=0;i<length;i++){
      if(input[i]<6){
        str=str+input[i]
      }
    }
    return str
};
