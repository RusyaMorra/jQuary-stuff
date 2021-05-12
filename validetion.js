

$(document).ready(function(){




$('#myForm').validate({

   submitHandler: function() {
    alert('valid');
  }

   });







 
   $( "#inputName" ).rules( "add", {
    required: true,
    minlength: 2,
    messages: {
      required: "Required input",
      minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
    }
  });

}); 





