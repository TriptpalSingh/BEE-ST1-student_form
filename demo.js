const fs = require('fs');
var obj = {
    "arr":[
        {
            "name":"triptpal singh",
            "age":20
        },
        {
            "name":"tejinder singh",
            "age":21
        }
    ]
}
var str = fs.readFileSync("user_data.txt", "utf8");
console.log(typeof(str));
// var str_json = JSON.parse(str);
// str_json.arr.push({
//     "name":"sayam",
//     "age":18
// });

// console.log(str_json);
// str = JSON.stringify(str_json);
// fs.writeFileSync("user_data.txt", str);
// console.log(obj);