let names="john, jenie, jim, jack, joe";
console.log("names: "+names+"data type: "+typeof names);

console.log(names.toUpperCase());
console.log(names.length);

let contactNames=[
    "john",
    "George",
    "kia",
    "anna",
    "shawn",
    "sia"
];
let searchkeyword="ia";

for(let idx=0;idx<contactNames.length;idx++)
    {
        if(contactNames[idx].endsWith(searchkeyword))
            {
                console.log(contactNames[idx]);
            }
    }

result=names.substring(0,7);
console.log(result);

let splited=names.split(",")
console.log(splited);

for(let idx=0;idx<splited.length;idx++)
    {
        console.log(splited[idx].trim());
    }