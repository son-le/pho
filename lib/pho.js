(function() {

	function onErr( err, callback ) {

		return err ? ( callback( err ), true ) : false;
	}



	module.exports.onErr = onErr;
})();