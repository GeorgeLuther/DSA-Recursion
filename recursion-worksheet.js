//1. Counting Sheep

// input = number
//output = message

function countingSheep(number){
    //base case
    if (number === 0) {
        return 'All sheep jumped over the fence'
    }

    console.log(countingSheep(number - 1))
    return `${number}: Another sheep jumps over the fence`
}

countingSheep(3)