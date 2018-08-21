let assert = require('assert');
let magick = require('../components/magick.js');

describe('Input', function(){
    it('should be object', function(){
        assert.equal('object', typeof magick);
    });
});