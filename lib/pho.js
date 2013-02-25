(function() {

	var pho = {};



	function onErr( err, callback ) {

		return err ? ( callback( err ), true ) : false;
	}



	function mixin( _ ) {

		_.mixin( {

			onErr: onErr
		});


		return pho;
	}



	pho.mixin = mixin;
	pho.onErr = onErr;

	module.exports = pho;
})();