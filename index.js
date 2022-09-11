var guestList = ["John", "Nick", "Micheal", "Sophie"];

var name = prompt("Enter Guest Name :");

if (guestList.includes(name)) {
  console.log("welcome");
} else {
  console.log("Sorry, maybe next time");
}
