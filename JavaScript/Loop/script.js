// Create a js program that displays the multiplication table from 1 - 19.


// for (let tableRow = 1; tableRow <= 19; tableRow++) {
//     console.log(`${tableRow}x Table`); 
  
//     let row = ""; 
//     for (let tableCol = 1; tableCol <= 19; tableCol++) {
//       row += (tableRow * tableCol) + "\t"; 
//     }
//     console.log(row); 
//   }



  //create a js program that displays the days of the week for 4 weeks
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// for (let week = 1; week <= 4; week++) {
//   console.log(`Week ${week}`); 

//   for (let dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
//     console.log(daysOfWeek[dayIndex]); 
//   }
// } 



              //OPTION 1
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const month = "March";
// const year = "2024";

// for (let week = 1; week <= 4; week++) {
//   console.log(`Week ${week} ${month} ${year}`); 

//   for (let dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
//     console.log(daysOfWeek[dayIndex]); 
//   }
// } 



             //OPTION 2
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
const month = "March";
const year = "2024";

console.log(`${month} ${year}`);

let dayName = ""; 
for (const day of daysOfWeek) {
  dayName += day + "\t"; 
}
console.log(dayName);

for (let week = 1; week <= 4; week++) {  
  let row = "";
  for (let day = 1; day <= 7; day++) {
    row += (week * 7) - 7 + day + "\t"; 
  }
  console.log(row);
}



