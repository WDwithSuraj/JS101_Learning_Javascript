//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let db_user = "suraj@gmail.com"
let db_pass = "suraj123"
//Login data register for the creadintal
let user = "suraj@gmail.com"
let pass = "suraj123"

if (db_user == user) {

  if (db_pass == pass) {
    console.log("Login Successfully!");

  } else{
    console.log("wrong password")
  }

} else{
  console.log("wrong credential")
}
