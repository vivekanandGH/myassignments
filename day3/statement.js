/* Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript */


function launchBrowser(browsername)
{
if (browsername === "chrome") 
    
    {
        console.log("You are using chrome");          
} 
else if (a === "edge")
{
    console.log("You are using edge");
}

else
{
    console.log("You are using someother browser");
}

}


function runTests(type)
{
switch (type) {
    case "smoke":
        console.log("smoke testing")     
        
        break;
        case "sanity":
        console.log("sanity testing")     
        
        break;
        case "regression":
        console.log("regression testing")     
        
        break;
       
    default:
        console.log("smoke testing");
        
        break;
}
}

launchBrowser("chrome");      
runTests("smoke");            
runTests("sanity");           
runTests("regression");      
runTests("performance");      
