
//variable name is function name, also returns by the same name
//use prototype for public
//use var for private

//immediate executes a class template
let myObj = (function(){
    function myObj(){

    }
    var priv = 'PrivateType';
    myObj.prototype.pub = 'myPublicVariable';
    myObj.prototype.getPub = function(){
        return this.pub;
    }
    myObj.prototype.setPub = function(newValue){
        myObj.prototype.pub = newValue;
    }
    myObj.prototype.getPriv = function(){
        return priv;
    }
    myObj.prototype.setPriv = function(newValue){
        priv = newValue;
    }
    return myObj;
}());

let myObjInstance = new myObj();
console.log(myObjInstance.pub);
console.log(myObjInstance.getPub());
myObjInstance.setPub('myNEWPublicVariable');
console.log(myObjInstance.getPub())

console.log(myObjInstance.priv); //should not work
console.log(myObjInstance.getPriv());
myObjInstance.setPriv('myNEWPrivateVariable');
console.log(myObjInstance.getPriv())


//another instance
let myObjInstance1 = new myObj();
console.log(myObjInstance1.pub);
console.log(myObjInstance1.getPub());
myObjInstance1.setPub('123');
console.log(myObjInstance1.getPub())

console.log(myObjInstance1.priv); //should not work
console.log(myObjInstance1.getPriv());
myObjInstance1.setPriv('321');
console.log(myObjInstance1.getPriv())