const { log } = require("console");

function numbertype(num)
{
let a=num;
if (a>0) 
    {
        console.log("positive");  
} 
else if (a<0)
{
    console.log("negative");
    
}
else
{

console.log("zero");

}

}
numbertype(-3);