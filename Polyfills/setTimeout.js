/*
Polyfill for setTimeout()
*/
//Below function works only on browser environment ->requestIdleCallback

function customSetClearTimeout() {
    let timerId = 0;
    let timerMap = {};

    function customSetTimeout(callbackFn, delay, ...args) {
        var id = timerId++;
        timerMap[id] = true;
        let start = Date.now()

        function triggerCallback(){
            if (!timerMap[id]) return
            if(Date.now() > start + delay){
                callbackFn.apply(this, args)
            } else {
                requestIdleCallback(triggerCallback)
            }
        }
        requestIdleCallback(triggerCallback)
        return id
    }

    function customClearTimeout(id) {
        delete timerId[id]
    }

    return {customSetTimeout, customClearTimeout}
}


const { customSetTimeout, customClearTimeout} = customSetClearTimeout()

console.log("Hi Hum first");
let myId = customSetTimeout(function(name) {
    console.log(`${name}'s Custom Set Timeout here`)
}, 3000, "Hrithik")
customClearTimeout(myId)
console.log("Hi Hum last");


