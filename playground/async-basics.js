console.log('Starting app')


setTimeout(()=> {
    console.log("Inside of cb! - waiting 2 sec")
}, 2000);


setTimeout(()=> {
    console.log("Inside of second cb! - waiting 0,5 sec")
}, 500);


setTimeout(function(){
    console.log("waiting zero seconds")
}, 0)


console.log('Finishing up')