"use strict"

// setTimeout(()=>{
//   window.location.alert ("salam")
// },3000)

// function sumOfOddNums(arr){
//     let sum = 0;
//     for (const item of arr) {
//         if (item % 2 ==1) {
//             sum+=item
//         }
        
//     }
//    console.log(sum);
// }
// function sumOfEvenNums(arr){
//     let sum = 0;
//     for (const item of arr) {
//         if (item % 2 == 0 ) {
//             sum+=item
//         }
        
//     }
//    console.log(sum);
// }
// function checkOddNums(num){
//   return  num%2==1;
// }
// function checkEvenNums(num){
//   return  num%2==0;
// }

// function sumOfNumsbyCondition(arr,callback){
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum+=item
//         }
        
//     }
//    console.log(sum);
//}

// let nums = [1,6,4,5,8,9];
// sumOfOddNums(nums)
// sumOfEvenNums(nums)
// sumOfNumsbyCondition(nums,checkOddNums)
// sumOfNumsbyCondition(nums,m=>m%2==1)
// sumOfNumsbyCondition(nums,m=>m%2==0)
// sumOfNumsbyCondition(nums,m=>m%2>5)
// sumOfNumsbyCondition(nums,checkEvenNums)
// console.log(nums)
// console.log(result)
// let nums = [1,6,4,5,8,9];

// let result = nums.filter(m=>m>5);
// let result = nums.find(m=>m>5);
// console.log(result)

// let result = nums.findIndex(m=>m==5);

// let result = nums.indexOf(10);
// console.log(result)

// class Animal{
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// let animal = new Animal(100,200);
// let animal = new Animal();
// animal.name = "salam"
// console.log(animal.height)

// let animal = new Animal(200,300);
// console.log(animal.width)

// let animal = new Animal();

// class Bird extends Animal{
//     constructor(){
//         super(100,200)
//         this.name= "Devequsu";
//     }
// }

// class Bird extends Animal{
//     constructor(a,b){
//         super(a,b)
//         this.name= "Devequsu";
//     }
//     // constructor(){
//     //     console.log("5000")
//     // }
//     getname(t) {
//         console.log("ttes")
//     }
// }
// let bird = new Bird(100,300);

// let bird = new Bird();
// console.log(bird.getName(100))
// console.log(bird.name)
// console.log(animal.height)

// let name ="sass";
// let username = new String("salam");
// username= "saas"
// console.log(username)

// let isMarried = new Boolean();
// isMarried=true;
// console.log(isMarried)

// class Test{
//     constructor(name){
//         this.name=name;
//     }
// }

// console.log(test.name)
// Test.prototype.surname="surname for test";
// Test.prototype.getName=function(){
//     console.log("sfdsfsfad")
// }
// let test = new Test("salam")

// console.log(test.getName())
// String.prototype.customContains=function(serachtext){
// return this.includes(serachtext)
// }

// let name ="resad";
// let surname= "agayev";
// console.log(name.customContains("c"))
// console.log(surname.customContains("h"))
//let data = new Date();
//let year =date.getFullYear();
//let month =date,getUTCMonth();
//console.log(year)
//let result = `$(month+1)-$(year)`;
// console.log(result)

// let data = math.sqrt(64)
// console.log(data)






//dom

// let elems =document.getElementsByTagName("h1")
// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element)
       
// }

// let elem =document.getElementsByClassName("test")
// console.log(elem)

//inmportant
// let elem= document.getElementById("products")
// console.log(elem)
// let elem= document.querySelectorAll("products .h1")
// let elem= document.querySelector("products .h1")
// elems[1].style.backgroundColor="red"

let h1 = document.querySelector("h1")
// console.log(h1.innerHTML)
// console.log(h1.innerText)
// h1.innerText ="Resad beg"
// h1.innerHTML ="<span>Resad beg</span>"

// h1.style.color = "test1";
// h1.style.marginBottom = "400px";
// h1.className = "active";
// h1.classList.add("active")
// h1.classList.remove("product")
// console.log(h1.classList.contains("active"))




