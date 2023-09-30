let a=10;
let b = 20;

setTimeout(() => {
    console.log('first');
    a = a+b;
    console.log(`inner a:${a}`);
}, 2000);

//promise use
let promiseVar = new Promise(
    (resolve, reject) => {
        //get data from source
        val = 50;
        resolve(50);
    }
);

promiseVar.then((data) => {
    a= data;
    console.log(`new updated data of a after promise: ${a}`);
});

console.log('second');
console.log(`outer a:${a}`);