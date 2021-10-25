var str = 'hello world'
console.log(str)
for (i = 1; i < 5; i++)
    console.log(i)

function greeting(name) {
    console.log(name)
}

const greeting2 = (name) => {
    console.log(name)
}

//JSON
personA = {
    name: "Phuong",
    tel: "0922552255"
}

ds = [
    {
        name: "Phuong",
        tel: "0922552255"
    },
    {
        name: "Cuong",
        tel: "654564455"
    }
]

str = "Vinh;Hai;Cuong;Long"
str.split(';').forEach(a => {
    greeting2(a)
});

greeting(personA.name)
greeting2(ds[1].name)

ds.forEach(p => {
    greeting2(p.name + ': ' + p.tel)
});
//BTVN: https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks/

console.log(1)
setTimeout(() => {
    console.log('2')
}, 3000)
console.log(3)


// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://google.com')
// xhr.send()

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
//     }
// }

const fs = require('fs')
// fs.readFile('pwd.txt','utf-8', (err, data) => {
//     if (err) {
//        console.log('co loi gi ban do!!!')
//     }else{
//         console.log("du lieu:" , data)
//     }
// })
// console.log("done!!!!999")
function hello(a){
    console.log(a)
}
const hello = (a)=>{
    console.log(a)
}

const getFile = (fileName)=> {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName,'utf-8', (err, data) => {
            if (err) {
                reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
                return        // and we don't want to go any further
            }
            resolve(data)
        })
    })
}
getFile('pwd.txt').then((d)=>{
                        console.log(d)
                        console.log("done!!!!999")
                    })
                  .catch(e=>console.log(e))

