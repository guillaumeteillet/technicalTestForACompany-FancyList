function FancyList() {

  var iList = 0;
  this.data = Array();

  for ( var i = 0; i < arguments.length; i++ )
  {
    if (Array.isArray(arguments[i]) == true)
    {
      for ( var o = 0; o < arguments[i].length; o++ )
      {
        this.data[iList] = arguments[i][o];
        console.log(">>>>>>"+ arguments[i][o]);
        iList++;
      }
    }
    else
    {
      this.data[iList] = arguments[i];
      console.log(">>"+ arguments[i]);
      iList++;
    }
  }

    //DEBUG

    var debugArray = this.data;
  for ( var i = 0; i < debugArray.length; i++ )
  {
    console.log(">>DEBUG : "+debugArray[i]);
  }
}

/*Personne.prototype.direBonjour = function() {
  console.log("Bonjour, je suis " + this.nom);
};*/

var myList1 = new FancyList();
var myList2 = new FancyList(3);
var myList3 = new FancyList(3, 44);
var myList4 = new FancyList([5, 6]);
