"use client";
export default function condition() {
  var grade: string = "";

  var usercore: any = prompt("enter your marks");
  if (usercore >= 90 && usercore <= 100) {
    grade = "You Are Pass And Your Grade Is A";
  } else if (usercore >= 80 && usercore < 90) {
    grade = "You Are Pass And Your Grade Is B";
  } else if (usercore >= 70 && usercore < 80) {
    grade = "You Are Pass And Your Grade Is C";
  } else if (usercore >= 50 && usercore < 70) {
    grade = "You Are Pass And Your Grade Is D";
  } else if (usercore <= 50 && usercore > 0) {
    grade = "You Are Fail And Your Grade Is F";
  } else {
    grade = "Please Enter Your Marks!";
  }

  return <>{grade}</>;
}
