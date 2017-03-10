module.exports = (items, A) => {

  var table = require('./table_1d.js')(A);

  // pseudo-poly O(nA)
  for (var x = 1; x <= A; x++) {

    // try to fit each item
    for (var i = 0; i < items.length; i++) {

      // item's weight
      var wi = items[i][1];

      // item fits or overflows sack
      var j = (wi < x) ? x - wi : 0;

      /* invarient: costs of sacks in table[x] are equal */

      // total cost of sack
      var tc = items[i][0] + table[j][0][0];

      // total cost is strictly better
      if (tc < table[x][0][0]) {
      
        table[x] = [[tc, i]];
      
      }

      // total cost is as good
      else if (tc === table[x][0][0]) {
      
        table[x].push([tc, i]);
      
      }

    }

  }

  return table;

}