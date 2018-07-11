function myClass(var1, var2){
    this.var1 = var1;
    this.var2 = var2;
}

let ins1 = new myClass(22,33);
console.log(ins1.var1);

myClass.prototype.var3 = 44;
console.log(ins1.var3)

delete myClass.prototype.var3;
console.log(ins1.var3)

myClass.prototype.var3 = 999;

let ins2 = new myClass(123,321);
console.log(ins2.var2);
console.log(ins2.var3);