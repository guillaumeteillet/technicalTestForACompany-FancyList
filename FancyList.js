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
        iList++;
      }
    }
    else
    {
      this.data[iList] = arguments[i];
      iList++;
    }
  }
}

// Methods

FancyList.prototype.getItemAt = function(index) {
  return this.data[index];
};

FancyList.prototype.getItemsAt = function(index, numberOfItems) {
  var arrayData = [];
  var iList = 0;

  for (var i = index; i < index + numberOfItems; i++)
  {
      arrayData[iList] = this.data[i];
      iList++;
  }

  return arrayData;
};

FancyList.prototype.addItem = function(item) {
  this.data[this.data.length] = item;

  return this.data;
};

FancyList.prototype.addItems = function() {
  var iList = this.data.length;

  for ( var i = 0; i < arguments.length; i++ )
  {
    if (Array.isArray(arguments[i]) == true)
    {
      for ( var o = 0; o < arguments[i].length; o++ )
      {
        this.data[iList] = arguments[i][o];
        iList++;
      }
    }
    else
    {
      this.data[iList] = arguments[i];
      iList++;
    }
  }
  return this.data;
};

FancyList.prototype.insertItemAt = function(index, item) {

  var arrayTmp = [];
  var iList = 0;

  for ( var i = index; i < this.data.length; i++ )
  {
      arrayTmp[iList] = this.data[i];
      iList++;
  }
  this.data[index] = item;
  iList = 0;
  index += 1;
  for ( var i = 0; i < arrayTmp.length; i++ )
  {
    this.data[index] = arrayTmp[i];
    index++;
  }
  return this.data;
};

FancyList.prototype.insertItemsAt = function() {

  var index = arguments[0];
  var iList = 0;
  var arrayTmp = [];

  for ( var i = index; i < this.data.length; i++ )
  {
      arrayTmp[iList] = this.data[i];
      iList++;
  }

  for ( var i = 1; i < arguments.length; i++ )
  {
    if (Array.isArray(arguments[i]) == true)
    {
      for ( var o = 0; o < arguments[i].length; o++ )
      {
        this.data[index] = arguments[i][o];
        index++;
      }
    }
    else
    {
      this.data[index] = arguments[i];
      index++;
    }
  }

  for ( var i = 0; i < arrayTmp.length; i++ )
  {
    this.data[index] = arrayTmp[i];
    index++;
  }

  return this.data;
};

FancyList.prototype.removeItemAt = function(index) {

};

FancyList.prototype.removeItemsAt = function(index, numberOfItems) {

};

FancyList.prototype.removeItem = function(item) {

};

FancyList.prototype.removeItems = function() {
  
};

// Debug

var myList1 = new FancyList();
var myList2 = new FancyList(3);
var myList3 = new FancyList(3, 44, 22, 33, 23, 34, 35,99, 093, 32);
var myList4 = new FancyList([5, 6]);

var data = myList3.addItem(90);
console.log(data);
var data = myList3.addItem(200);
console.log(data);
var data = myList3.addItems(230, 20, 30);
console.log(data);

var data = myList3.addItems([250, 90, 230]);
console.log(data);

var data = myList3.insertItemAt(3, 45);
console.log(data);

var data = myList3.insertItemsAt(5, 18, 19, 20);
console.log(data);

var data = myList3.insertItemsAt(2, 10, 11, 12);
console.log(data);

var data = myList3.removeItemAt(2);
console.log(data);
