(function() {

	function onErr( err, callback ) {

		return err ? ( callback( err ), false ) : true;
	}



	module.exports.onErr = onErr;
})();