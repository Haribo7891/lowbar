# Lowbar

My TDD reimplementation of some of the Functions from the popular and useful [Underscore.js library](http://underscorejs.org/).
___

## Setup

To run this project, you will need ```node.js``` (v8.9.1) and ```npm``` (v5.5.1) installed.

1. To check whether you have ```node.js``` installed, run the following code in your terminal:

``` node
node -v
```

2. To install ```node.js```, please refer to the following [documentation](https://nodejs.org/en/).

3. To check whether you have ```npm``` installed, run the following code in your terminal:

``` node
npm -v
```

4. To install ```npm```, please refer to the following [documentation](https://docs.npmjs.com).

___

## Installation

1. Clone this repo to your local machine:

``` node
git clone https://github.com/Haribo7891/lowbar.git
```

2. Install the dependencies:

``` node
npm install
```

3. Run the tests:

``` node
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
  * [My Version](functions/arrayFunctions/difference.js)
  * [My TDD](spec/arrayFunctions/difference.spec.js)
  * [Official Docs](http://underscorejs.org/#difference)
* ***_.first***
  * [My Version](functions/arrayFunctions/first.js)
  * [My TDD](spec/arrayFunctions/first.spec.js)
  * [Official Docs](http://underscorejs.org/#first)
* ***_.indexOf***
  * [My Version](functions/arrayFunctions/indexOf.js)
  * [My TDD](spec/arrayFunctions/indexOf.spec.js)
  * [Official Docs](http://underscorejs.org/#indexOf)
* ***_.last***
  * [My Version](functions/arrayFunctions/last.js)
  * [My TDD](spec/arrayFunctions/last.spec.js)
  * [Official Docs](http://underscorejs.org/#last)
* ***_.uniq***
  * [My Version](functions/arrayFunctions/uniq.js)
  * [My TDD](spec/arrayFunctions/uniq.spec.js)
  * [Official Docs](http://underscorejs.org/#uniq)
* ***_.zip***
  * [My Version](functions/arrayFunctions/zip.js)
  * [My TDD](spec/arrayFunctions/zip.spec.js)
  * [Official Docs](http://underscorejs.org/#zip)

### Collection Functions (Arrays or Objects)

* ***_.contains***
  * [My Version](functions/collectionFunctions/contains.js)
  * [My TDD](spec/collectionFunctions/contains.spec.js)
  * [Official Docs](http://underscorejs.org/#contains)
* ***_.each***
  * [My Version](functions/collectionFunctions/each.js)
  * [My TDD](spec/collectionFunctions/each.spec.js)
  * [Official Docs](http://underscorejs.org/#each)
* ***_.every***
  * [My Version](functions/collectionFunctions/every.js)
  * [My TDD](spec/collectionFunctions/every.spec.js)
  * [Official Docs](http://underscorejs.org/#every)
* ***_.extend***
  * [My Version](functions/collectionFunctions/extend.js)
  * [My TDD](spec/collectionFunctions/extend.spec.js)
  * [Official Docs](http://underscorejs.org/#extend)
* ***_.filter***
  * [My Version](functions/collectionFunctions/filter.js)
  * [My TDD](spec/collectionFunctions/filter.spec.js)
  * [Official Docs](http://underscorejs.org/#filter)
* ***_.invoke***
  * [My Version](functions/collectionFunctions/invoke.js)
  * [My TDD](spec/collectionFunctions/invoke.spec.js)
  * [Official Docs](http://underscorejs.org/#invoke)
* ***_.map***
  * [My Version](functions/collectionFunctions/map.js)
  * [My TDD](spec/collectionFunctions/map.spec.js)
  * [Official Docs](http://underscorejs.org/#map)
* ***_.pluck***
  * [My Version](functions/collectionFunctions/pluck.js)
  * [My TDD](spec/collectionFunctions/pluck.spec.js)
  * [Official Docs](http://underscorejs.org/#pluck)
* ***_.reduce***
  * [My Version](functions/collectionFunctions/reduce.js)
  * [My TDD](spec/collectionFunctions/reduce.spec.js)
  * [Official Docs](http://underscorejs.org/#reduce)
* ***_.reject***
  * [My Version](functions/collectionFunctions/reject.js)
  * [My TDD](spec/collectionFunctions/reject.spec.js)
  * [Official Docs](http://underscorejs.org/#reject)
* ***_.shuffle***
  * [My Version](functions/collectionFunctions/shuffle.js)
  * [My TDD](spec/collectionFunctions/shuffle.spec.js)
  * [Official Docs](http://underscorejs.org/#shuffle)
* ***_.some***
  * [My Version](functions/collectionFunctions/some.js)
  * [My TDD](spec/collectionFunctions/some.spec.js)
  * [Official Docs](http://underscorejs.org/#some)
* ***_.sortBy***
  * [My Version](functions/collectionFunctions/sortBy.js)
  * [My TDD](spec/collectionFunctions/sortBy.spec.js)
  * [Official Docs](http://underscorejs.org/#sortBy)
* ***_.where***
  * [My Version](functions/collectionFunctions/where.js)
  * [My TDD](spec/collectionFunctions/where.spec.js)
  * [Official Docs](http://underscorejs.org/#where)

### Function (uh, ahem) Functions

* ***_.delay***
  * [My Version](functions/functionFunctions/delay.js)
  * [My TDD](spec/functionFunctions/delay.spec.js)
  * [Official Docs](http://underscorejs.org/#delay)
* ***_.negate***
  * [My Version](functions/functionFunctions/negate.js)
  * [My TDD](spec/functionFunctions/negate.spec.js)
  * [Official Docs](http://underscorejs.org/#negate)
* ***_.once***
  * [My Version](functions/functionFunctions/once.js)
  * [My TDD](spec/functionFunctions/once.spec.js)
  * [Official Docs](http://underscorejs.org/#once)


### Object Functions

* ***_.defaults***
  * [My Version](functions/objectFunctions/defaults.js)
  * [My TDD](spec/objectFunctions/defaults.spec.js)
  * [Official Docs](http://underscorejs.org/#defaults)


### Utility Functions

* ***_.identity***
  * [My Version](functions/utilityFunctions/identity.js)
  * [My TDD](spec/utilityFunctions/identity.spec.js)
  * [Official Docs](http://underscorejs.org/#identity)

___

## Author

[Harry Crank](https://github.com/Haribo7891)
___

## Acknowledgments

Inspired by [Underscore.js](http://underscorejs.org/) library and completed as part of a project at [Northcoders](https://northcoders.com/) bootcamp.