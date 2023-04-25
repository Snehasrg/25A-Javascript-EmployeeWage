
// UC1
Is_Absent=0;
let emp_Check= (Math.floor(Math.random()*10)%2);
if(emp_Check==Is_Absent)
{
    console.log("Emp is absent");
}
else{
    console.log("Emp is present");
}

// UC2
const Is_FullTime=1;
const Is_PartTime=2;
const Is_PartTimeHrs=4;
const Is_FullTimeHrs=8;
const PerHrWage=20;
let ch= (Math.floor(Math.random()*10)%3);
let empHrs=0;
switch (ch)
{
    case Is_FullTime:
        empHrs=Is_FullTimeHrs;
        console.log("Employee is present full time");
        break;
     case Is_PartTime:
        empHrs=Is_PartTimeHrs;
        console.log("Emp is present part time");
        break;
     default:
        empHrs=0;
         console.log("Emp is absent");
         break;
}
let emp_Wage = empHrs * PerHrWage;
console.log("Emp Wage is :" +emp_Wage);

//UC3
function getWorkingHours(fut)
{
switch (fut)
{
    case Is_FullTime:
        empHrs=Is_FullTimeHrs;
        console.log("Employee is present full time");
        break;
     case Is_PartTime:
        empHrs=Is_PartTimeHrs;
        console.log("Emp is present part time");
        break;
     default:
        empHrs=0;
         console.log("Emp is absent");
         break;
}
}
 let fut= (Math.floor(Math.random()*10)%3);
let empHr=0;
empHr= getWorkingHours(fut);
 let empWage = empHrs * PerHrWage;
 console.log("Emp Wage is :" +empWage);

 // UC4
 const No_Of_Working_Days_Month=20;
 let emp_Hrs=0;
 for (let day=0; day<No_Of_Working_Days_Month;day++)
 {
    let check= (Math.floor(Math.random()*10)%3);
    emp_Hrs+=getWorkingHours(check);
 }
  empWage = empHrs * PerHrWage;
  console.log("Total Hrs: "+emp_Hrs +"Emp Wage is :" +empWage);

  //UC5
  const Max_Hrs_InMonth=100;
  const No_Of_WorkingDays=10;
  let totalEmpHrs=0;
  let totalWorkingDays=0;
  while (totalEmpHrs <= Max_Hrs_InMonth && totalWorkingDays < No_Of_WorkingDays){
    totalWorkingDays++;
    fut= (Math.floor(Math.random()*10)%3);
    totalEmpHrs+=getWorkingHours(fut);

  }
  let EmpWage = totalEmpHrs * PerHrWage;
  console.log(" UC5: Total Days:"+totalWorkingDays+ "Total Hrs: "+totalEmpHrs +"Emp Wage is :" +EmpWage);







