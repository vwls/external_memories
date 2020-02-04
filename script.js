// Use these consts if you want to to get a specific output by ID 
const useInputNum = false;
const inputNum = "0.0.0.0.0.0"; // e.g. 0.0.0.0.0.0 will return a prompt made up of the first item in each list

const size = 15;


const material1 = ["code", "clay", "data", "wood", "plaster", "paper", "pen and ink", "stone", "textiles", "a projector", "pencil", "a screen", "yarn", "blown glass", "broken glass", "e waste", "recycled plastic", "wax", "glue"];
const adjective = ["interactive", "responsive", "wearable", "interactive", "speculative", "speculative"];
const material2 = ["depth sensors", "pressure sensors", "light sensors", "bio medical sensors", "custom circuits", "LEDs", "a micro computer", "a patch bay", "a rotary phone", "a cash register", "surveillance cameras"];
const medium = ["sculpture", "drawing", "performance", "web experience", "kinetic sculpture", "installation", "speculative design object", "product", "tool", "book", "machine", "data visualization"];
const action = ["interogating", "exploring", "questioning", "investigating", "critiquing", "about", "reimagining", "reinterpreting", "rethinking"]; 
const subject = ["the origins of gender in society", "the reproductive aspects of capitalism", "cradle to grave product life cycles", "race in society", "domestic violence", "authorship in creative industries", "smart home appliances", "what we mean when we say beauty", "a new back to the land movement", "discomfort with death", "the limits of what a camera could be", "a potential afterlife", "a world without humans", "urban space", "why we play", "the role of computation in society", "the role of art in society", "climate change", "asymmetrical effects of climate change"];

function setup(){
  //createCanvas(1200, 500);
  //background(225);
 
  //console.log("Number of possible unique permutations: ", calculatePermutations() );
 
}

function draw(){
  // if(mouseIsPressed){
  //   let baseVal = 50;
  //   fill(20);
  //   rect(mouseX, mouseY, size, size);
  // }
 
}
 
 // Function for generating randomly compiled text
function generateMessage(){
  
  // A few words we'll use a lot
  var about = "about";
  var and = "and";
  var space = " ";
  var a = "a(n)";
  var of = "of";

  var indexAdj = floor(random(adjective.length));
  var indexMed = floor(random(medium.length));
  var indexMat1 = floor(random(material1.length));
  var indexMat2 = floor(random(material2.length));
  var indexAct = floor(random(action.length));
  var indexSubj = floor(random(subject.length));
   
  // print out index number for each message
  var idnum = indexAdj + "." + indexMed + "." + indexMat1 + "." + indexMat2 + "." + indexAct + "." + indexSubj;

  // Check if we want to use recall number to generate old text or generate fresh text
  if(useInputNum){
    var idNumSplit = split(inputNum, ".");
    // Use key number to create/recreate a message
    var message = assignArticle(adjective[idNumSplit[0]]) + space + medium[idNumSplit[1]] + space + material1[idNumSplit[2]] + space + and + space + material2[idNumSplit[3]] + space  + action[idNumSplit[4]] + space + subject[idNumSplit[5]];
    //return message;
    
  } else {
    
    // Compile our final text to output
    var message = idnum + ":" + space + assignArticle(adjective[indexAdj]) + space + medium[indexMed] + space + "using" + space + material1[indexMat1] + space + and + space + material2[indexMat2] + space + action[indexAct] + space + subject[indexSubj];

    //return message;
  }


  var messageElt = document.getElementById("messageElt");
  var latestMessage = message;
  console.log(latestMessage);
  messageElt.innerHTML = latestMessage;
  
}

// Function for calculating all of the possible unique permutations we can generate
// If we add more categories, they need to be added to this calculation 
function calculatePermutations(){
  
  // Calculate number of possible permutations
  var permutations = str(adjective.length * medium.length * material1.length * material2.length * action.length * subject.length);
  
  return permutations;
}


// Function for assigning articles (e.g. "a" vs. "an") to the following word
function assignArticle(invar){

  if(invar != undefined && invar != "undefined"){
  let ch = invar.charAt(0);
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'y'){
      let outvar = "an " + invar;
      return outvar;
    } else {
      let outvar = "a " + invar;
      return outvar;
    }
  } else {
    console.log("OOPS can't assign article to undefined input");
    let outvar = "a " + invar; //TODO fix this becuase this will (rarely) cause grammatical error
    return outvar;
  }
}
