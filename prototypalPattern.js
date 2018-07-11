//common in functional programming
let myObj = {
    insider: 'insideValue',
    myFunc: function(){
        console.log(this.insider);
    }
}
myObj.myFunc();

//instantiate and modify, aka inherit
let myObj1 = Object.assign(myObj, {
    insider1: 'anotherInsideValue',
    myFunc1: function(){
        console.log(this.insider1);
    }
})
myObj1.myFunc1();