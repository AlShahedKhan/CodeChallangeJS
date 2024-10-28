function debounce(func, timeout = 300){
    let timer;
    return(...args)=>{   
        clearTimeout(timer);
        timer = setTimeout(() => {func.apply(this,args);},timeout);
    };
}

// Test case usage
const sayHello = debounce(() => console.log("Hello"), 3000);
sayHello(); // Will print "Hello" after 1 second
// Call it again within 1 second to test debounce
