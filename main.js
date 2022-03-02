

// var tab = document.getElementById("table");



// var firstName = document.getElementById("f_name");
// var lastName = document.getElementById("l_name");
// var UserAge = document.getElementById("age");


// var arrayItem = [];


// if (localStorage.getItem("array") != null) {
//     arrayItem = JSON.parse(localStorage.getItem("array"));
//     addItem();
// }




// var editVariable = 0;


// function resetForm() {
//     firstName.value = "";
//     lastName.value = "";
//     UserAge.value = "";
// }

// function addItemInArray() {
//     if (firstName.value != "") {
//         var obj = {
//             f_name: firstName.value,
//             l_name: lastName.value,
//             age: UserAge.value,
//         };

//         arrayItem.unshift(obj);

//     }
// }


// function addItem() {

//     if (editVariable == 0) {
//         addItemInArray();
//     }


//     var str = "";

//     for (var i = 0; i < arrayItem.length; i++) {
//         str += `<tr>

//          <td> ${arrayItem[i].f_name}</td>
//          <td> ${arrayItem[i].l_name}</td>
//          <td> ${arrayItem[i].age}</td>

//          <td>  <button onclick = "deleteItem( ${i} )"   class = "btn btn-danger" > delete </button>  </td>
//          <td>  <button onclick = "editItem( ${i} )"     class = "btn btn-primary" > Edit  </button>  </td>
//          <td>  <button onclick = "saveEditItem( ${i} )" id = "btn_${i}"  class = "btn btn-info" > save Edit </button>  </td> 

//       </tr>   `;
//     }

//     document.getElementById("tbody").innerHTML = str;

//     localStorage.setItem("array", JSON.stringify(arrayItem));
//     resetForm();



// }

// function deleteItem(index) {

//     if (editVariable == 0) {
//         arrayItem.splice(index, 1);
//         addItem();
//     }
// }

// function editItem(index) {

//     if (editVariable == 0) {
//         firstName.value = arrayItem[index].f_name;
//         lastName.value = arrayItem[index].l_name;
//         UserAge.value = arrayItem[index].age;
//         editVariable = index + 1;
//         document.getElementById("div").style.height = ` ${(tab.offsetHeight)}px `
//         document.getElementById("div").style.display = "block";
//         document.getElementById("btn_" + index).style.position = "relative";
//         document.getElementById("btn_" + index).style.zIndex = "1";
//         document.getElementById("add").disabled = true;

//     }
// }


// function saveEditItem(index) {

//     if (editVariable == index + 1) {

//         var obj_func = {
//             f_name: firstName.value,
//             l_name: lastName.value,
//             age: UserAge.value,
//         };

//         arrayItem.splice(index, 1, obj_func);
//         resetForm();
//         addItem();

//         editVariable = 0;

//         document.getElementById("div").style.display = "none";
//         document.getElementById("add").disabled = false;


//     }
// }


// function search(searchIn){

//     var str = "";

//     for (var i = 0; i < arrayItem.length; i++) {

//         if( arrayItem[i].f_name.toLowerCase().includes( searchIn.toLowerCase() ) || arrayItem[i].l_name.toLowerCase().includes( searchIn.toLowerCase() ) )
//             str += `<tr>

//             <td> ${arrayItem[i].f_name}</td>
//             <td> ${arrayItem[i].l_name}</td>
//             <td> ${arrayItem[i].age}</td>

//             <td>  <button onclick = "deleteItem( ${i} )"   class = "btn btn-danger" > delete </button>  </td>
//             <td>  <button onclick = "editItem( ${i} )"     class = "btn btn-primary" > Edit  </button>  </td>
//             <td>  <button onclick = "saveEditItem( ${i} )" id = "btn_${i}"  class = "btn btn-info" > save Edit </button>  </td> 

//            </tr>   `;
//     }

//     document.getElementById("tbody").innerHTML = str;


// }

var divOne = document.querySelector(".one");
var divTwo = document.querySelector(".two");

var signin = document.querySelector(".one .signin");
var signup = document.querySelector(".one .signup");


var signIninpName = document.querySelector(".signin .iptName");
var signIninpPss = document.querySelector(".signin .iptPass");
var signIninpEmail = document.querySelector(".signin .iptEmail");

var signInPtn = document.querySelector(".signin button");
var signInSpan = document.querySelector(".signin span ");


var signinAllInputEmpty = document.querySelector(".signin .allInputEmpty");
var signinInputIncorrect = document.querySelector(".signin .inputIncorrect ");
var signinSuccess = document.querySelector(".signin .Success ");



var signUpinpPss = document.querySelector(".signup .iptPass");
var signUpinpEmail = document.querySelector(".signup .iptEmail");

var signUpPtn = document.querySelector(".signup button");
var signUpSpan = document.querySelector(".signup span ");

var twoBtn = document.querySelector(".two button ")

var signupAllInputEmpty = document.querySelector(".signup .allInputEmpty");
var signupInputIncorrect = document.querySelector(".signup .inputIncorrect ");


var spanTwo = document.querySelector(".two span");


var array = [];
var flag = 0;

function heddinAllMessage(){
    signinInputIncorrect.style.display = "none";
    signinAllInputEmpty.style.display = "none";
    signupInputIncorrect.style.display = "none";
    signupAllInputEmpty.style.display = "none";
}

if (localStorage.getItem("names") != null) {
    array = JSON.parse(localStorage.getItem("names"));
}


function clearInput() {
    signIninpName.value = "";
    signIninpPss.value = "";
    signIninpEmail.value = "";
    signUpinpPss.value = "";
    signUpinpEmail.value = "";
}



function showSignIn() {
    signin.style.display = "block";
}

function heddinSignIn() {
    signin.style.display = "none";
}

function showSignUp() {
    signup.style.display = "block";
}

function heddinSignUp() {
    signup.style.display = "none";
}

function showOne() {
    divOne.style.display = "block";
}

function heddinOne() {
    divOne.style.display = "none";
}

function showTwo() {
    divTwo.style.display = "flex";
}

function heddinTwo() {
    divTwo.style.display = "none";
}

function checkNotFound(obj) {
    for (var i = 0; i < array.length; i++) {
        if (obj.pass == array[i].pass || obj.email == array[i].email) {
            return false;
        }

    }
    return true;
}

function checkIfFound(obj) {
    for (var i = 0; i < array.length; i++) {
        if (obj.pass == array[i].pass && obj.email == array[i].email) {
            flag = i;
            return true;
        }

    }
    return false;
}

signInSpan.addEventListener("click", function () {

    heddinSignIn();
    showSignUp();
    heddinAllMessage() ; 

});

signUpSpan.addEventListener("click", function () {

    showSignIn();
    heddinSignUp();
    heddinAllMessage() ; 

});

signUpPtn.addEventListener("click", function () {

    var obj = {
        pass: "",
        email: "",
    }

    if (signUpinpPss.value != "" && signUpinpEmail.value != "") {
        obj = {
            pass: signUpinpPss.value,
            email: signUpinpEmail.value,
        }
        signupAllInputEmpty.style.display = "none";
        if (checkIfFound(obj)) {
            heddinOne();
            showTwo();
            clearInput();
            signupInputIncorrect.style.display = "none";
            spanTwo.innerHTML = array[flag].name;
        }
        else {
            signupInputIncorrect.style.display = "block";
        }
    }
    else {
        signupAllInputEmpty.style.display = "block";
    }




});

signInPtn.addEventListener("click", function () {

    var obj = {
        name: "",
        pass: "",
        email: "",
    }

    if (signIninpName.value != "" && signIninpPss.value != "" && signIninpEmail.value != "") {
        obj = {
            name: signIninpName.value,
            pass: signIninpPss.value,
            email: signIninpEmail.value,
        }
        signinAllInputEmpty.style.display = "none";
        if (checkNotFound(obj)) {
            array.push(obj);
            localStorage.setItem("names", JSON.stringify(array));
            signinSuccess.style.display = "block";
            clearInput();
            signinInputIncorrect.style.display = "none";
        }
        else {
            signinInputIncorrect.style.display = "block";
        }
    }
    else {
        signinAllInputEmpty.style.display = "block";
    }



});

twoBtn.addEventListener("click", function () {

    showOne();
    showSignUp();
    heddinTwo();

}); 
