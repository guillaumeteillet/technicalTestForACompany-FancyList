function FancyList() {

  var iList = 0;
  this.data = Array();

  for ( var i = 0; i < arguments.length; i++ )
  {
    if (Array.isArray(arguments[i]) == true)
    {
      for ( var o = 0; o < arguments[i].length; o++ )
      {
        if (typeof this.data[0] == typeof arguments[i][o] || typeof this.data[0] == 'undefined')
        {
          this.data[iList] = arguments[i][o];
          iList++;
        }
      }
    }
    else
    {
      if (typeof this.data[0] == typeof arguments[i] || typeof this.data[0] == 'undefined')
      {
        this.data[iList] = arguments[i];
        iList++;
      }
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

  if (typeof this.data[0] == typeof item || typeof this.data[0] == 'undefined')
  {
    this.data[this.data.length] = item;
  }

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
        if (typeof this.data[0] == typeof arguments[i][o] || typeof this.data[0] == 'undefined')
        {
          this.data[iList] = arguments[i][o];
          iList++;
        }
      }
    }
    else
    {
      if (typeof this.data[0] == typeof arguments[i] || typeof this.data[0] == 'undefined')
      {
        this.data[iList] = arguments[i];
        iList++;
      }
    }
  }
  return this.data;
};

FancyList.prototype.insertItemAt = function(index, item) {

  var arrayTmp = [];
  var iList = 0;
  var start = index + 1;

  for ( var i = start; i < this.data.length; i++ )
  {
      arrayTmp[iList] = this.data[i];
      iList++;
  }
  if (typeof this.data[0] == typeof item || typeof this.data[0] == 'undefined')
  {
    this.data[index] = item;
  }
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
        if (typeof this.data[0] == typeof arguments[i][o] || typeof this.data[0] == 'undefined')
        {
          this.data[index] = arguments[i][o];
          index++;
        }
      }
    }
    else
    {
      if (typeof this.data[0] == typeof arguments[i] || typeof this.data[0] == 'undefined')
      {
        this.data[index] = arguments[i];
        index++;
      }
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

    var newArray = [];
    var iList = 0;

    for ( var i = 0; i < this.data.length; i++ )
    {
        if (i != index)
        {
          newArray[iList] = this.data[i];
          iList++;
        }
    }

    this.data = newArray;

    return this.data;
};

FancyList.prototype.removeItemsAt = function(index, numberOfItems) {

  var newArray = [];
  var iList = 0;

  for ( var i = 0; i < this.data.length; i++ )
  {
      if (i == index)
      {
        i += numberOfItems + 1;
      }
        newArray[iList] = this.data[i];
        iList++;
  }

  this.data = newArray;

  return this.data;
};

FancyList.prototype.removeItem = function(item) {

  var newArray = [];
  var iList = 0;

  for ( var i = 0; i < this.data.length; i++ )
  {
      if (this.data[i] != item)
      {
        newArray[iList] = this.data[i];
        iList++;
      }
  }

  this.data = newArray;

  return this.data;
};

FancyList.prototype.removeItems = function() {

  var newArray = [];
  var iList = 0;
  var ok = 0;

  for ( var a = 0; a < this.data.length; a++ )
  {
    for ( var i = 0; i < arguments.length; i++ )
    {
      if (Array.isArray(arguments[i]) == true)
      {
        for ( var o = 0; o < arguments[i].length; o++ )
        {
          if (this.data[a] == arguments[i][o])
          {
            ok = 1;
          }
        }
      }
      else
      {
        if (this.data[a] == arguments[i])
        {
          ok = 1;
        }
      }
    }
    if (ok == 0)
    {
      newArray[iList] = this.data[a];
      iList++;
    }
    ok = 0;
  }

  this.data = newArray;

  return this.data;

};
