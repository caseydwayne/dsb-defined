module.exports = (function(DEBUG){
/*----------------------------------------------------------------------------*/

  var defined = require('./index'),
        debug = require('dsb-debug-mini').create('defined'),
         root = require('dsb-root');

/*----------------------------------------------------------------------------*/

  var n = 'defined',
      u,
      d = defined;

/*----------------------------------------------------------------------------*/

  var tests = [
    [ n, n, true ],
    [ 'un'+n, u, false ],
    [ 'root', root, false ]
  ];

/*----------------------------------------------------------------------------*

  //debug handles "test blocks". mini.. does not. DOES NOT WORK FOR SOME REASON

  if( typeof dsb === 'object' ){
    debug = dsb.debug;
    console.log(dsb.debug);
    debug.run( tests, defined ); //this is all you need with dsb-debug
    return debug.complete();
  }

  //the following was revived from a beta build of defined, before dsb-debug existed

/*----------------------------------------------------------------------------*/

  var t = debug.test,
      tf = function( v, e ){
        var u = typeof( v ) === 'undefined',
            r = d( v ),
            m = r === e;
        if( DEBUG ){
          console.log( '-------------'+v );
          console.log( 'argument is', u ? 'undefined' : 'defined' );
          console.log( 'matches expected ('+e+')? ', m );
        }
        return r;
      };

/*----------------------------------------------------------------------------*/

  for( var i in tests ){
    //setup
    var x = tests[i],
        n = x[0],
        a = x[1],
        e = x[2];
    //test results
    var s = d( a ); //arg is defined
    var f = tf( a, e ); //result of test function exists
    var r = ( s && f ); //defined and equals expected
    if( DEBUG ) console.log( 'running test', n );
    //run tests
    if( r )
      t( n, r, true ); //these should just return a boolean of true
    //expand if there's a problem
    else {
      t( n, s, e );
      t( n+'*fn', f, e );
    }
  }

/*----------------------------------------------------------------------------*/

  return debug.complete();

/*----------------------------------------------------------------------------*/
}(0));