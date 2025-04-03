let arr1 = [3,7,34,90,12]
let arr2 = [true, "green","where",12, 56]

let newArray= arr1[arr1.length - 1]
console.log({newArray});

let newArray2 = arr2[arr2.length - 1]
console.log({newArray2});

myPets = ["Cow","Bird", "Snake","Dog"]
let arrayJoin = myPets.toString()
console.log({arrayJoin});

var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let arraySort = arr3.sort()
console.log({arraySort});

let arr = ["boy","man","girl","school","girl","woman"];
let arrayDup = []
arr.forEach(element =>{
    if (!arrayDup.includes(element)){
        arrayDup.push(element)

    }

});

console.log({arrayDup});

let arr5=["the","way","x",4];
const word = "food"

if (arr5.includes(word)){
    console.log({word});
}
else{
console.log("the search word was not found");
}
    
let word1 = "renniw"
 resorted = word1.split('').sort().join('')
 console.log({resorted});

 let fruits = ["Orange","Banana","Melon","Kiwi","Apple","Pineapple","Grapes","Tangerine","Passion"]
let fruit2 =fruits.splice(5,0,'Tomato');
console.log({fruits});















