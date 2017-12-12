exports.run = function(input) {
  var value=[];
  var operator=[];
  var total=0;
  for(var i=0;i<input.length;i++){
    if(input[i].operator=="add"){
      total = total+input[i].value
    }else{
        total = total-input[i].value
    }
  }
  return total;
};
