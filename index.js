const express = require('express')
const app = express() //creating an express application

const bodyParser = require('body-parser') //required for parsing the POST request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000

const _ = require('underscore')



// basic application root route
app.get('/', (req, res) => {
	fun_arrayutility()
	res.send('Hello World!')
})

//for each
function fun_each() {
	_.each([1,2,3],function(item) {
		console.log(item)
	})

	_.each({one: 1, two: 2, three: 3},function(item) {
		console.log(item)
	})
}

//returns a list
function fun_map() {
	_.each(_.map([1,2,3],function(item) {
		return 2*item;
	}),function(item) {
		console.log(item);
	})
}

//returns a value , list
function fun_reduce() {
    var res = _.reduce([1,2,3],function(memo , item) {
		return memo + item;
	},0)
	console.log(res)
}

//returns first element which satisfies the condition
function fun_find() {
    var res = _.find([1,2,3],function(item) {
		return (item %2 ==0)
	})
	console.log(res)
}

//returns list of elements which satisfies the condition
function fun_filter() {
    var res = _.filter([1,2,3,4,5,6],function(item) {
		return (item %2 ==0)
	})
	console.log(res)
}

function fun_findwhere() {
	console.log(_.findWhere([1,2,3],2)) //returns index
	console.log(_.findWhere([{'key':1},{'key':2},{'key':2}],{'key':1})) //returns object
}

//returns list of elements which do not satisfies the condition
function fun_reject() {
	console.log(_.reject([1,2,3,4,5,6],function(item) {
		return (item%2==0)
	}))
}

//returns true if every element statisfies the condition ; else returns false
function fun_every() {
	console.log(_.every([2,4,6],function(item) {
		return (item%2==0)
	}))
}

//return true if list contains element else false
function fun_contains() {
	console.log(_.contains([2,4,6],2))
}
//invoke a function on each value of list
function fun_invoke() {
	console.log(_.invoke([[1,2,3],[4,5,6]],'sort'))
}

function fun_pluck() {
	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	var res=  _.pluck(stooges, 'name');
	console.log(res)
    
}

//sort by key
function fun_sortby() {
	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	var res=  _.sortBy(stooges, 'age');
	console.log(res)
    
}


//find max
function fun_max() {
	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	var res=  _.max(stooges, 'age');
	console.log(res)
    
}

//groupBy
function fun_groupby() {
	console.log(_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }));
	console.log(_.groupBy(['one', 'two', 'three','four'], 'length'))
    
}

//returns a random number or set of numbers

function fun_sample() {
	console.log(_.sample([1,2,3,4,5,10]))
	console.log(_.sample([1,2,3,4,5,10],2))
}



//all array functions in underscore


function fun_arrayutility() {

	var a = [1,2,3,4,5,6,7,8]
	console.log(_.first(a,[4]))
	console.log(_.initial(a))
	console.log(_.last(a))
	console.log(_.rest(a,1))


}




app.listen(port, () => console.log(`Express app listening on port ${port}!`))
