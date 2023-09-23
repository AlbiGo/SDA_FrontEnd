// function submit()
// {
//     console.log("test");
//     alert("test");
//     let number1 = 4;
//     let number2 = 6;
//     let sum = number1 + number2;
//     alert(sum);
// }


// function submit()
// {
//     var array = ['Fier', 'Vlore', 'Tirane','Shkoder'];
//     array.forEach(p =>
//         {
//             console.log(p);
//         });
//     console.log();
// }

function multiply(num)
{
    var result =  num * num;
    return result;
}

// function submit()
// {
//     var array = [1,2,3,4,5];
//     //Beni Shumezimin me vetveten per cdo numer 
//     //duke thirrur nje funksion tjeter
//     array.forEach(element => {
//         let result = multiply(element);
//         console.log(result);
//     });
// }

// function submit()
// {
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var option = document.getElementById("id-select").value;

//     if(option == 1)
//     {
//         console.log(parseInt(num1) + parseInt(num2));
//     }
//     if(option == 2)
//     {
//         console.log(num1 - num2);
//     }
// }
function createBody()
{
    var params = new Object();
    params.myparam1 = myval1;
    params.myparam2 = myval2;

    // Turn the data object into an array of URL-encoded key/value pairs.
    let urlEncodedData = "", urlEncodedDataPairs = [], name;
    for( name in params ) {
    urlEncodedDataPairs.push(encodeURIComponent(name)+'='+encodeURIComponent(params[name]));
    }
    return urlEncodedData;
}
function submit()
{
    const httpClient = new XMLHttpRequest();
    const url = "https://localhost:7164/api/Student/create";
    var student = new Object();
    student.name = "exrrr"
    student.surname = "ExamrrpleGame";
    console.log(JSON.stringify(student))
    httpClient.open("POST", url);
    httpClient.setRequestHeader("Content-Type", "application/json");
    httpClient.send(JSON.stringify(student));
    //httpClient.send();
    httpClient.onreadystatechange = (response) => 
    {
        console.log(httpClient.status);
    }
}