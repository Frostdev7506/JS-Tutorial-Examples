obj1 = {
  fname: "neeraj",
  lname: "butola",
};
const greet = function (profession, address) {
    console.log(
      "hi there  " + this.fname,
      this.lname + "I lve in " + address + "and I work as a" + profession
    );
  },
  obj2 = {
    fname: "neelam",
    lname: "sajwan",
  };

greet.apply(obj2, ["teacher", "thane"]);
greet.apply(obj1, ["SDE", "Thane"]);
