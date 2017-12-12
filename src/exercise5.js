exports.run = function(input) {
  var fs = require('fs');
    var contenu,rightcontenu;
    contenu = fs.readFileSync(input, "UTF-8");
    rightcontenu = contenu.split("\r\n")
    var somme=0;
    for(var i=0; i<rightcontenu.length;i++){
      var value = parseInt(rightcontenu[i], 10);
      somme = somme +value;
    }
    return somme;
};
