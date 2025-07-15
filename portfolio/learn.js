// let str = 'Nikhil is best in the world';
// let length = str.length;
// console.log(length); // 27
// console.log(str[0]); // N
// console.log(str[6]); // l
// console.log(str[length-1]); // 
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   let result = '';
//   result = "The "+ myAdjective + " " + myNoun + " " + myVerb + " "+myAdverb;
//   return result;
// }
// console.log(wordBlanks('dog', 'big', 'ran', 'quickly')); 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let i =0;
// while(i < arr.length){
//     if(i%2 != 0 ){
//         console.log(arr[i] + " is even");
//     }else{
//         console.log(arr[i]+" is odd");
//     }
//     i++;
// }
// let nestedArr = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
// for(let i = 0; i < nestedArr.length; i++){
   
//         console.log(nestedArr[i]);
//     }

// let newarray = [1,2,3,4,5];
// console.log(newarray);
// console.log(newarray);
// let arra1 = [[123],[124],[125]];
// arra1.push([126]);
// console.log(arra1);
// newarray.pop();
// console.log(newarray);  
// //console.log(arra1.pop());  
// newarray.shift();
// console.log(newarray);
// newarray.shift();
// console.log(newarray);
// newarray.shift();
// console.log(newarray);
// newarray.shift();
// console.log(newarray);
// const global = "HEllo!, I am global...";
// function func1(){
//     console.log(global);
// }
// func1();
// function func2(){
//     let local = "I am local";
//     console.log(local);
// }
// // func2();
// function nextliner(arr,item){
//     arr.push(item);
//     return arr.shift();
// }
// var testarr = [1,2,3,4,5];
// console.log("Before: "+ JSON.stringify(testarr));
// console.log(nextliner(testarr,6));
// console.log("After: "+JSON.stringify(testarr));
// console.log(nextliner(testarr,7));
function testsize(nums){
    if(nums <= 20){
        return "Tiny";
    }
    if(nums <= 40 && nums > 20){
        return "Small";
    }
    if(nums <= 60 && nums > 40){
        return "Medium";
    }
    if(nums <= 80 && nums > 60){
        return "Large";
    }
    if(nums <= 100 && nums > 80){
        return "Huge";
    }
}
//console.log(JSON.stringify(testsize(50)));
var testobj = {
    "name" : "Nikhil",
    "age" : 21,
    "college" : "ITM GOI",
    "skills": ["Python","Java","C++","JavaScript"]
};
//var namevalue = testobj["name"];
var namevalue = testobj.name;
//var collegevalue = testobj["college"];
var collegevalue = testobj.college;
// console.log(namevalue);
// console.log(collegevalue);
// console.log(testobj.skills);
// testobj.skills[0] = "DSA";
// console.log(testobj.skills);
// delete testobj.age;
// console.log(testobj);

var contacts = [
    {
        "firstName":"Nikhil",
        "lastName":"Rajpoot",
        "number":"9301236616",
        "likes":["Pizza","Coding","Cricket"]
    },
    {
        "firstName":"Rahul",
        "lastName":"Kumar",
        "number":"1234567890",
        "likes":["Coding","Cricket"]
    },
    {
        "firstName":"Rohit",
        "lastName":"Kumar",
        "number":"1234567890",
        "likes":["Pizza","Coding",]
    },
    {
        "firstName":"altab",
        "lastName":"ali lhan",
        "number":"1234567890",
        "likes":["food","Coding","Cricket"]
    }
];
function lookUpProfile(name,prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile("altab","likes");
console.log(data);
console.log(Math.random());
function checksign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checksign(-100));

var now = () => new Date();
console.log(now());