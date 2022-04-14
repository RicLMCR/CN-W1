//SWITCH//

let car = "Ford"
switch(car){
    case "Ford":
    case "GM":
        console.log("You have an American car.");
        break;//You can place more than one case before this break
    case "Honda":
        console.log("You have a Japanese car.");
    break;
    default:
        console.log("You don;t have the right car.")
}