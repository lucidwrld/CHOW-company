
const { default: details} = await import('./user.json',{
 assert: {
  type: 'json'
 }
})

function e (){

   }

export function emailValidate(){
 
 let fullname = document.getElementById("fullname").value;
 let passwordd = document.getElementById("password").value;
 let emaill = document.getElementById("email").value;
 let number = document.getElementById("number").value;
 let fRegex = /([a-z A-Z]{5,25})/
 let eRegex = /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+)\.([a-z A-Z]{3,6})([a-z]{3,6})?$/
 let mRegex = /([0-9]{11})/
 let pRegex = /([a-z 0-9 A-Z ]{8,16})/
 let inform = details.user.filter(detail => detail.email === emaill)

 let emailll = inform.map(detail => {
  return detail.email
 })
 
 emailll = emailll[0]
 
 
 
 if(fullname == "" || passwordd == "" || emaill == "" || number == ""){
  alert("Fill in the empty spaces")
  return false;
 }else if((fRegex.test(fullname)) && (eRegex.test(emaill)) && (mRegex.test(number)) && (pRegex.test(passwordd)) && emaill !== emailll ){
  
  let id = (details.user.length)
  id++
  let info = {
   id: id,
   name: fullname,
   email: emaill,
   phone: number,
   password: passwordd}
  
  const options ={
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(info)

}
fetch("http://localhost:3000/user", options)
.then(data => {
if(!data.ok){
throw Error(data.status)
 }
return data.json()
})
.then(info => {
console.log(info)
})
 }else if ((fRegex.test(fullname)) && (eRegex.test(emaill)) && (mRegex.test(number)) && (pRegex.test(passwordd)) && emaill === emailll ){
    alert("This email address has been used")
    return false
 }
 else{
  alert("Fill in correctly")
  return false;
 }
} 