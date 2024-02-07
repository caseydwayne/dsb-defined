module.exports = (function(DEBUG){
/*----------------------------------------------------------------------------*/

  //import vitals
  var root = require('dsb-root');

/******************************************************************************/

  /*
   * @method defined
   * checks if a variable is undefined
   * returns false if {variable} undefined or {this} === {window||global}
   * @param variable {any} the variable to check is defined
   * @returns is_defined {boolean} returns true if defined AND not root
   */

/*----------------------------------------------------------------------------*/

  var defined = function( v ){

    var u = ( typeof v === 'undefined' ),
        r = ( v === root ),
        f = ( u || r ) ? false : true;

    if( DEBUG ) console.log( 'Defined?', !u, 'Root?', r, 'Result:', f );

    return f;

  };

/******************************************************************************/

  return defined;

/*----------------------------------------------------------------------------*/
}(0));
