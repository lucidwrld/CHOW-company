 const { default: details} = await import('./user.json',{
  assert: {
   type: 'json'
  }
 }) 

 export function validate() {
 
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 let eRegex = /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+)\.([a-z A-Z]{3,6})([a-z]{3,6})?$/
 let pRegex = /([a-z 0-9 A-Z ]{8,16})/

 // calling the value form json file
 let inform = details.user.filter(detail => detail.email=== email)

 let emaill = inform.map(detail => {
  return detail.email
 })
 let passwordd = inform.map(detail => {
  return detail.password
  
 })
 emaill = emaill[0]
 passwordd = passwordd[0]
 
  
//checking the values
 if(email.trim() == "" || password.trim() == ""){
  alert("Please fill in the empty spaces below");
  return false;

 }else if((eRegex.test(email)) && (pRegex.test(password)) && email === emaill && password === passwordd ){

   alert("Login Successful")
   return true;

 }else{

  alert("Email or password invalid")
  return false;

 }
}

