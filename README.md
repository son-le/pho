pho
===============================================================================

Delicious functions for the hungry node.js developer.



Installation:
-------------------------------------------------------------------------------

    $ npm install pho
    
API
-------------------------------------------------------------------------------
    var pho = require( "pho" );

or if you prefer to use with [underscore](https://github.com/documentcloud/underscore)

    var _   = require( "underscore" )
      , pho = require( "pho" ).mixin( _ );

Now functions exported by pho are available on `_` (underscore) object.

### onErr( err, callback )

If __err__ is defined, then __callback__ is called with __err__ as a parameter.
Returns `true` if __err__ is defined and `false` otherwise.

#### Example:

If there is an error, then `done` is called and `nextStep` is never executed.

    pho.onErr( err, done ) || nextStep();
    
is equivalent to

    if ( err ) {
    
        return done( err );
    }
    
    nextStep();

Changelog
-------------------------------------------------------------------------------

+ 0.1.0 - Initial release.
