//Steps: 
//create and implement an observable
//Subscribe a function for next, error, and complete

const Rx = require('rxjs');

// Observables push values to the subscribers up to a limit time
var obs = Rx.Observable.create(function(observer){
    const limit = 5;
    let current = 0;
    observer.next('Starting');
    const repeater = setInterval(()=>{
      observer.next('repeating ' + current);
      if(current === limit) {
        observer.complete('Completed');
        clearInterval(repeater); //removes the setInterval
      }
      current++;
    }, 300)
  });
  
  obs.subscribe(
    function myValueHandler(value){
      console.log(value);
    },
    function myErrorHandler(err){
      console.log(err);
    },
    function myCompleteHandler(){
      console.log('Completed');
    }
  );