function validateAll(form){
  return (
    validateNotEmpty(form.name.value) &&
    validateNotEmpty(form.email.value) &&
    validateNotEmpty(form.comment.value) &&
    validateEmail(form.email.value)
    );
}

function validateEmail(value) {
  if (value.indexOf("@") < 1) {
    alert("Invalid Email address");
    return false;
  }
  return true;
}

function validateNotEmpty(value) {
  if (value==null || value==""){
    alert("Field cannot be empty");
    return false;
  }
  return true;
}
