$(window).scroll(function () {
    var navber = $('.sticky-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) navber.addClass('fixed');
    else navber.removeClass('fixed');
});

$('#contact-form-sommai').bootstrapValidator({
    live: 'disabled',
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        Name: {
            validators: {
                notEmpty: {
                    message: 'ยังไม่ได้ใส่ชื่อผู้ติดต่อ'
                }
            }
        },
        nameSchool: {
            validators: {
                notEmpty: {
                    message: 'ยังไม่ได้ใส่ชื่อโรงเรียนหรือสถาบัน'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'ยังไม่ได้ใส่อีเมล์'
                },
                emailAddress: {
                    message: 'รูปแบบอีเมล์ไม่ถูกต้อง'
                }
            }
        },
        Message: {
            validators: {
                notEmpty: {
                    message: 'ไม่มีข้อความหรือยังไม่ได้ใส่ข้อความ'
                }
            }
        }
    }
});