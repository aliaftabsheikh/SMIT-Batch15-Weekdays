function Admission(name = "John", age = 50, rollNo = "XXXXXXX") {
    // console.log("Before",this)
  
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  
    // console.log("After",this);
  }
  
  // const admission = new Admission("Ali", 23, 1);
  // const admission1 = new Admission("Waqar", 36, 2);
  // const admission3 = new Admission("Hussain", 40, 3);
  const admission4 = new Admission("Kashif", 24, 12);
  
  console.log(admission4)
  
  
  // console.log(admission, admission1, admission3);
  
  // console.log('age' in admission)
  
  // const demiData = [
      //   { name: "Ali", age: 23, rollNo: 1 },
      //   { name: "Waqar", age: 36, rollNo: 2 },
      //   { name: "Hussain", age: 40, rollNo: 3 },
      // ];
  
      // const studentsName = []
  
      // for (let index in demiData) {
      //    studentsName.push(demiData[index])
              
      // }
  
  // console.log(studentsName);