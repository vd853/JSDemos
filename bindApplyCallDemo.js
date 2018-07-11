//#region Bind example
(function(){ //creates a local scope for this example
    this.someVariable = 'from outside';

    const myModule = {
        someVariable: '1:Im inside',
        someFunc: function(){
            console.log('from my module: ', this.someVariable);
        },
        someFunc1: function(){
            console.log('from my module: ', this.someVariable);
        }
    }
    
    const myModule2 = {someVariable: '2:Im inside'};
    
    const myOtherModule = myModule.someFunc;
    
    myOtherModule(); //uses the this.someVariable from the outside
    
    const myOtherModuleBind = myModule.someFunc.bind(myModule);
    
    myOtherModuleBind(); //uses the this.someVariable from myModule

    const myOtherModuleBind2 = myModule.someFunc.bind(myModule2);

    myOtherModuleBind2(); //uses the this.someVariable from myModule2
})()
//#endregion

//#region Call example
const myFunc = function (arg1, arg2){
    console.log(this.myInsideVariable + ' : ' + arg1 + ':' + arg2);
}

//first param defines all the this.., the others are params positional
myFunc.call({myInsideVariable: 'This Inside'}, 'argument1', 'argument2'); 
//#endregion

//#region Apply example
const myFunc2 = function(arg1, arg2, arg3){
    console.log(this.insider);
    console.log(arg1 + ':' + arg2 + ':' + arg3);
}

//same as call, except argument is an array now
myFunc2.apply({insider: 'This inside'}, [1,2,3]);
//#endregion
