// // let arr = ["One", 2,3]
// // console.log(arr)
// // console.log(typeof(arr))



// const user = {
//     firstName : "Tausif",
//     lastName : "Shaikh",
//     "Date Of Birth" : "20 August 1999"
// }

// console.log(user)



// Debounce function of search

// function debounce(func, delay){
//     let timerId;

//     return function(...args)
//     {
//         clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             func(...args)
//         },delay)
//     }

// }



// const search = (query)=>{
//     console.log(`Searching for`, query)
// }


// const searchWithDebounce = debounce(search, 1000);
// searchWithDebounce("H")
// searchWithDebounce("Ha")
// searchWithDebounce("Har")
// searchWithDebounce("Hard")
// searchWithDebounce("Hard ")
// searchWithDebounce("Hard J")
// searchWithDebounce("Hard JS")



// Throttle

function throttle(func, delay)
{
    let lastcall =0;

    return function(...args){
        const now = Date.now();
        if(now - lastcall <delay){
            return;
        }
        lastcall = now;
        return func(...args)
    }
}

function sendChatMessage(message){
    console.log(`Sending Message`,message)
}


const sendChatMessageWithThrottle = throttle(sendChatMessage, 200)


sendChatMessageWithThrottle("Hi")
sendChatMessageWithThrottle("Hello")
sendChatMessageWithThrottle("Hello Ji")
sendChatMessageWithThrottle("Sir Ji, How are you?")
sendChatMessageWithThrottle("Sir ji, Big Fan!!")