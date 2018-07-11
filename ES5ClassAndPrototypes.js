function myClass(var1, var2){

    //this is like a constructor
    this.var1 = var1;
    this.var2 = var2;
}

let ins1 = new myClass(22,33);
console.log(ins1.var1);

myClass.prototype.var3 = 44;
console.log(ins1.var3) //from prototype

delete myClass.prototype.var3;
console.log(ins1.var3) //shouldn't work

myClass.prototype.var3 = 999; 

let ins2 = new myClass(123,321);
console.log(ins2.var2);
console.log(ins2.var3); //should work again now