/**
 * scripts.js
 */

$(document).ready(function()
{

	// form validation
	$('#hi').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitButtons: '#lth-reg-button',
        fields: {
            firstName: {
                message: 'First name is not valid',
                validators: {
                    notEmpty: {
                        message: 'First name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Your name seems too long'
                    }
                }
            },
            lastName: {
                message: 'Last name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Your name seems too long'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            uniqname: {
                message: 'Uniqname is not valid',
                validators: {
                    notEmpty: {
                        message: 'Uniqname is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 8,
                        message: 'Uniqname must be between 3 and 8 characters'
                    },
                    regexp: {
                        regexp: /^[a-z]+$/,
                        message: 'Uniqname can only consist of lower-case letters'
                    }
                }
            },
            class: {
                message: 'Class is not valid',
                validators: {
                    notEmpty: {
                        message: 'Please select your year'
                    },
                    stringLength: {
                        min: 1,
                        max: 10,
                        message: 'Please select your year'
                    }
                }
            },
            experience: {
                message: 'Class is not valid',
                validators: {
                    notEmpty: {
                        message: 'Please select experience'
                    },
                    stringLength: {
                        min: 1,
                        max: 20,
                        message: 'Please select experience'
                    }
                }
            },
            major: {
                message: 'Major is not valid',
                validators: {
                    notEmpty: {
                        message: 'Major is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Your major seems too long'
                    }
                }
            }
        }
    });
    
    // add @umich.edu
   /*
$('#lth-reg-uniqname').val($('#lth-reg-uniqname').val() + '<span style="color: red;">@umich.edu</span>');

   $('#lth-reg-uniqname').keyup(function(){
        if($(this).val().length !=0){
            $('#lth-reg-button').attr('disabled', false);
        }
        else
        {
            $('#lth-reg-button').attr('disabled', true);        
        }
    });
*/

});
