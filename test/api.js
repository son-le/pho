var expect = require( "expect.js" )
   , _     = require( "underscore" )
   , pho   = require( "../lib/pho" );



describe( "API", function() {

    it( "defines mixin( _ ) function", function() {

        expect( _.isFunction( pho.mixin ) ).to.be.ok();
        expect( pho.mixin.length ).to.be( 1 );
    });



    it( "defines onErr( err, callback ) function", function() {

        expect( _.isFunction( pho.onErr ) ).to.be.ok();
        expect( pho.onErr.length ).to.be( 2 );
    });
});



describe( "Underscore mixin API", function() {

    var pho2 = pho.mixin( _ );



    it ( 'mixin( _ ) function returns same object as require( "pho" )', function() {

        expect( pho ).to.be( pho2 );
    });



    it( "defines onErr( err, callback ) function on underscore", function() {

        expect( _.isFunction( _.onErr ) ).to.be.ok();
        expect( _.onErr.length ).to.be( 2 );
    });
});