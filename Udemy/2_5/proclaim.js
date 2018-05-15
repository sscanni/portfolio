var whisper = function(message) {
    console.log('proclaiming: ' + message);
};

module.exports.softly = whisper;

exports.loudly = function(message) {
    console.log('PROCLAIMING: ' + message);
};