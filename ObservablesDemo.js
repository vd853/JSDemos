//Steps: create and implement an observable
//Subscribe a function for next, error, and complete

const Rx = require('rxjs');

// Observables push values to their subscribers:
var obs = Rx.Observable.create(function(observer){
    const limit = 5;
    let current = 0;
    observer.next('Starting');
    const repeater = setInterval(()=>{
      observer.next('repeating ' + current);
      if(current === limit) {
        observer.complete('Completed');
        clearInterval(repeater);
      }
      current++;
    }, 300)
  });
  
  // Observers recibe values or errors from the Observable they are subscribed to:
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