document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Form Submitted");
});

function toggleForms(userType) {
    var forms = document.querySelectorAll('.userForm');
    forms.forEach(function (form) {
      form.style.display = 'none';
    });
  
    document.getElementById(userType + 'Form').style.display = 'block';
  }
  var radioButtons = document.getElementsByName('userType');
radioButtons.forEach(function (radio) {
  radio.addEventListener('change', function () {
    toggleForms(this.value);
  });
});
toggleForms(document.querySelector('input[name="userType"]:checked').value);
