id = "sayHello"
var userName = prompt("What is your name?");

if (userName != null) {
    document.getElementById("sayHello").innerHTML = "Hello" + userName;

} else {
    alert("Please refresh and enter a name");
}




document.write("5 + 10 =", 5 + 10, "<br />");
document.write("10 * 12 =", 10 * 12, "<br />");
document.write("300 / 45 =", 300 / 45, "<br />");
document.write("806 - 33 =", 800 - 33, "<br />");
document.write("8 % 4 =", 8 % 4, "<br />");





for (j = 0; j <= 60; j++) {
    if ((j % 3) === 0) {
        continue;
    }
    if (j === 25) {
        break;
    }
    document.write(j + "<br />");
}



var helgaHuff = ["Helga Hufflepuff", "2300 Ashbury Dr", "Founder"];
document.write("1st Index: ", helgaHuff[0], "<br />");
document.write("2nd Index: ", helgaHuff[1], "<br />");
document.write("3rd Index: ", helgaHuff[2], "<br />");


// var cust1 = {
//     name: "Salazar Slytherin",
//     street: "55 Knockturn",
//     city: "London",
//     balance: 15000000.0,
//     payDownBal: function(amtPaid) {
//         this.balance -= amtPaid;
//     },
//     addToBal: funtion(amtCharged) {
//         this.balance += amtCharged;

//     }
// };

document.write(getInfo(cust1), "<br />");
