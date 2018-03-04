const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square a number', () => {
        var res = utils.square(2);
    
        expect(res).toBe(4).toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(3, (result) => {
            expect(result).toBe(9).toBeA('number');
            done();
        });
    });
});

it('should set firstNAme and lastName', () => {
    var res = utils.setName({}, 'Nathan Rennis');
    expect(res.firstName).toBe('Nathan').toBeA('string');
    expect(res.lastName).toBe('Rennis').toBeA('string');

    expect(res).toInclude({
        firstName: 'Nathan',
        lastName: 'Rennis'
    });
});

// it('should blah blah', () => {
//     // expect(12).toNotBe(13);
//     // expect({name: 'dave'}).toNotEqual({name: 'Dave'});
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'dave',
//         age: 487,
//         location: 'Cleckheaton'
//     }).toExclude({
//         age: 4
//     })
// });