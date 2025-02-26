// console.log(this);
// let obj ={
//     name :"shanti Kumari",
//     class:"B tech",
//     myfunction:function()=>{
//         console.log(this);
//         console.log(this.name,this.name)
//         console.log('i am a method insides object ')

//     },
//     subjects:["DBMS", "CN","AI","ML","DL"],
//     newobj:{
//         1:80,
//         nestedfunction:function (){
//             console.log(this);
//             console.log("I am nested method of object")
//         },
//         nestedobj:{
//             myMethod:function() {
//                 console.log("another nested method ")
//             }
//         }
//     }
// }
// obj.myfunction();
// obj.nestedfunction();






// condition
//if else
// let a=10, b=20;
// if(a<b){
//     console.log('${a} is less than ${b}');
// }
// else if(a==b){
//     console.log('${a} is equal to ${b}');
// }

// else{
//     console.log("${a} is greater than ${b}");

// }







// let a =15;
// if(a%3==0 && a%5==0){
//     console.log("fizzbuzz");
// }
// else if(a%5==0){

//     console.log("buzz");
// }
// else if(a%3==0) {
//     console.log("fizz");
// }
// else{
//     console.log("not divisible by 3 and 5");
// }


//for loop
//for(start;condition;increment/decrement){
//logic}

// let n =10;
// for(let i=0;i<n;i++){
//     console.log(i);
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }
// let str = "shanti kumari";
// for(let i=0;i<str.length;i++){
//     console.log("a"+str[i]);
// }




// let arr = ["a", "b", "c", "d", "e"];
// for (let num of arr) {
//     console.log(num);
// }



// while loop
// let num = 5 ;
// while(num<10){
//     console.log(num);
//     num++;
// }
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(even);
    }
    else{
        console.log("odd number");
    }
 
}