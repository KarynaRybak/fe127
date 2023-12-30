function submitForm() {
let name = document.getElementById('name').value;
let age = document.getElementById('age').value;
let message = document.getElementById('message').value;

if (name ===''|| message ===''){
  alert ('please fill out the form');

} else {
  alert('Name: ' + name + '\nAge: ' + age + '\nMessage: ' + message);

}
}