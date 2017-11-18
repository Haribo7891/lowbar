# Lowbar

My TDD reimplementation of some of the Functions from the popular and useful [Underscore.js library](http://underscorejs.org/).
___

## Setup

To run this project, you will need ```node.js``` (v8.9.1) and ```npm``` (v5.5.1) installed.

1. To check whether you have ```node.js``` installed, run the following code in your terminal: 
```
node -v
```
2. To install ```node.js```, please refer to the following [documentation](https://nodejs.org/en/).


3. To check whether you have ```npm``` installed, run the following code in your terminal: 
```
npm -v
```
4. To install ```npm```, please refer to the following [documentation](https://docs.npmjs.com).
___

##  Installation

1. Clone this repo to your local machine:
```
git clone https://github.com/Haribo7891/lowbar.git
```
2. Install the dependencies:
```
npm install
```
3. Run the tests:
```
npm run
```
___

## Dependencies

The following dependencies were used in the making of this project:
* [Mocha](https://mochajs.org) - The testing framework.
* [Chai](http://chaijs.com) - The assertion library.
* [Sinon](http://sinonjs.org) - The spy assistant.
___

## Lowbar Methods

Please find below the list of Functions that have been implemented. Clicking the links will take you through to either ```My Version```, ```My TDD``` or the ```official Underscore.js documentation``` for that particular function. 

### Array Functions
* ***_.difference***
  - [My Version](arrayFunctions/difference.js)
  - [My TDD](spec/difference.spec.js)
  - [Official Docs](http://underscorejs.org/#difference) 
* ***_.first***
  - [My Version](arrayFunctions/first.js)
  - [My TDD](spec/first.spec.js)
  - [Official Docs](http://underscorejs.org/#first) 
* ***_.flatten***
  - [My Version](arrayFunctions/flatten.js)
  - [My TDD](spec/flatten.spec.js)
  - [Official Docs](http://underscorejs.org/#flatten) 
* ***_.indexOf***
  - [My Version](arrayFunctions/indexOf.js)
  - [My TDD](spec/indexOf.spec.js)
  - [Official Docs](http://underscorejs.org/#indexOf) 
* ***_.intersection***
  - [My Version](arrayFunctions/intersection.js)
  - [My TDD](spec/intersection.spec.js)
  - [Official Docs](http://underscorejs.org/#intersection) 
* ***_.last***
  - [My Version](arrayFunctions/last.js)
  - [My TDD](spec/last.spec.js)
  - [Official Docs](http://underscorejs.org/#last) 
* ***_.sortedIndex***
  - [My Version](arrayFunctions/sortedIndex.js)
  - [My TDD](spec/sortedIndex.spec.js)
  - [Official Docs](http://underscorejs.org/#sortedIndex) 
* ***_.uniq***
  - [My Version](arrayFunctions/uniq.js)
  - [My TDD](spec/uniq.spec.js)
  - [Official Docs](http://underscorejs.org/#uniq) 
* ***_.zip***
  - [My Version](arrayFunctions/zip.js)
  - [My TDD](spec/zip.spec.js)
  - [Official Docs](http://underscorejs.org/#zip) 


### Collection Functions (Arrays or Objects)
* ***_.contains***
  - [My Version](collectionFunctions/contains.js)
  - [My TDD](spec/contains.spec.js)
  - [Official Docs](http://underscorejs.org/#contains) 
* ***_.each***
  - [My Version](collectionFunctions/each.js)
  - [My TDD](spec/each.spec.js)
  - [Official Docs](http://underscorejs.org/#each) 
* ***_.every***
  - [My Version](collectionFunctions/every.js)
  - [My TDD](spec/every.spec.js)
  - [Official Docs](http://underscorejs.org/#every) 
* ***_.extend***
  - [My Version](collectionFunctions/extend.js)
  - [My TDD](spec/extend.spec.js)
  - [Official Docs](http://underscorejs.org/#extend) 
* ***_.filter***
  - [My Version](collectionFunctions/filter.js)
  - [My TDD](spec/filter.spec.js)
  - [Official Docs](http://underscorejs.org/#filter) 
* ***_.invoke***
  - [My Version](collectionFunctions/invoke.js)
  - [My TDD](spec/invoke.spec.js)
  - [Official Docs](http://underscorejs.org/#invoke) 
* ***_.map***
  - [My Version](collectionFunctions/map.js)
  - [My TDD](spec/map.spec.js)
  - [Official Docs](http://underscorejs.org/#map) 
* ***_.pluck***
  - [My Version](collectionFunctions/pluck.js)
  - [My TDD](spec/pluck.spec.js)
  - [Official Docs](http://underscorejs.org/#pluck) 
* ***_.reduce***
  - [My Version](collectionFunctions/reduce.js)
  - [My TDD](spec/reduce.spec.js)
  - [Official Docs](http://underscorejs.org/#reduce) 
* ***_.reject***
  - [My Version](collectionFunctions/reject.js)
  - [My TDD](spec/reject.spec.js)
  - [Official Docs](http://underscorejs.org/#reject) 
* ***_.shuffle***
  - [My Version](collectionFunctions/shuffle.js)
  - [My TDD](spec/shuffle.spec.js)
  - [Official Docs](http://underscorejs.org/#shuffle) 
* ***_.some***
  - [My Version](collectionFunctions/some.js)
  - [My TDD](spec/some.spec.js)
  - [Official Docs](http://underscorejs.org/#some) 
* ***_.sortBy***
  - [My Version](collectionFunctions/sortBy.js)
  - [My TDD](spec/sortBy.spec.js)
  - [Official Docs](http://underscorejs.org/#sortBy) 
* ***_.where***
  - [My Version](collectionFunctions/where.js)
  - [My TDD](spec/where.spec.js)
  - [Official Docs](http://underscorejs.org/#where) 


### Function (uh, ahem) Functions
* ***_.delay***
  - [My Version](functionFunctions/delay.js)
  - [My TDD](spec/delay.spec.js)
  - [Official Docs](http://underscorejs.org/#delay) 
* ***_.memoize***
  - [My Version](functionFunctions/memoize.js)
  - [My TDD](spec/memoize.spec.js)
  - [Official Docs](http://underscorejs.org/#memoize) 
* ***_.negate***
  - [My Version](functionFunctions/negate.js)
  - [My TDD](spec/negate.spec.js)
  - [Official Docs](http://underscorejs.org/#negate) 
* ***_.once***
  - [My Version](functionFunctions/once.js)
  - [My TDD](spec/once.spec.js)
  - [Official Docs](http://underscorejs.org/#once) 
* ***_.partial***
  - [My Version](functionFunctions/partial.js)
  - [My TDD](spec/partial.spec.js)
  - [Official Docs](http://underscorejs.org/#partial) 
* ***_.throttle***
  - [My Version](functionFunctions/throttle.js)
  - [My TDD](spec/throttle.spec.js)
  - [Official Docs](http://underscorejs.org/#throttle) 


### Object Functions
* ***_.defaults***
  - [My Version](objectFunctions/defaults.js)
  - [My TDD](spec/defaults.spec.js)
  - [Official Docs](http://underscorejs.org/#defaults) 


### Utility Functions
* ***_.identity***
  - [My Version](utilityFunctions/identity.js)
  - [My TDD](spec/identity.spec.js)
  - [Official Docs](http://underscorejs.org/#identity) 
___

## Author

[Harry Crank](https://github.com/Haribo7891)
___

## Acknowledgments

Inspired by [Underscore.js](http://underscorejs.org/) library and completed as part of a project at [Northcoders](https://northcoders.com/) bootcamp.