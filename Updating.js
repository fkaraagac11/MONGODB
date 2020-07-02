const mocha = require("mocha");
const assert = require("assert");
//describe test
describe("updating records", function () {
    // create tests
    var char;
    beforeEach(function (done) {
        char = new MarioChar({
            name: "Mario",
        });

        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });
    it("Updates one record in the database", function(done) {
        MarioChar.findOneAndUpdate({name:'Mario'}, {name:'Luigi'}).then(function{

            MarioChar.findOne(_id:char_id}).then(function(result{
                assert(result.name === 'Luigi')
                done()
            }))
        })
    });
});
