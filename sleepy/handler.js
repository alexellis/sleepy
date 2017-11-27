"use strict"

module.exports = (context, callback) => {
    setTimeout(function() {
	    callback(undefined, {status: "done"});
   },Number(process.env.sleep_time));
}
