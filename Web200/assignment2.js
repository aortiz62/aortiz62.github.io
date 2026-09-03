let food1 = 'noodles';
let food2 = 'meat';
let food3 = 'broth';
document.getElementById("demo").innerHTML = food1 + "<br>" + food2 + "<br>" + food3;

// objects creation
const bowl = {type:"circular", color:"white"};

// property of the bowl objects
bowl.owner = "Alice"; 

// Displays property:
document.getElementById("demo2").innerHTML = "the person using the bowl and spoon for eating noodles is " + bowl.owner;

// if else to find out if alice is still eating or not
let isEating = true;
if (bowl.content === "empty") {
   isEating = false;
  console.log("The bowl is empty and alice is no longer eating.");
} else {
  isEating = true;
  console.log("The bowl is not empty, so alice is still eating.");
}

console.log("Is alice eating? " + isEating);

// the difference in the variables var, let, const, is that "var" used to be the original way to declare variables before const and let were introduced to javascript.
// while "const" is used to declare variables that cant be changed, "let" allows us to change/reassign them later. 

