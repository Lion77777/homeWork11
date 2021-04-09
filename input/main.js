// We get dom elements to access with them 
let email = document.querySelector('#email');
let button = document.getElementById('submit');
let listArrow = document.querySelector('.fa-sort-down');
let list = document.querySelector('.phoneList')
let listElems = document.querySelectorAll('.phoneList li')
let phone = document.getElementById('phone');
let phoneWarn = document.querySelector('.phone-warning');

// Event on the submit button, checks whether inputs filled up
button.addEventListener('click', function (e) {
    e.preventDefault();

    if(email.value === '' || !email.value.includes('@')) {
        email.nextElementSibling.style.display = 'block';
    }
    if(phone.value === '') {
        phoneWarn.style.display = 'block';
    }
});

// Arrow in the phone input shows three phone number templates
listArrow.addEventListener('click', function(e) {
    list.style.display = 'block';
    phoneWarn.style.display = 'none';
});

// When we choose anyone of the phone number templates from the template list,
// the template will appear in the phone input field
for(let item of listElems) {
    item.addEventListener('click', function(e) {
        phone.value = `+${/\d+/.exec(this.innerText)}`;
    });
}

// Event on the phone number input
document.getElementById('phone').addEventListener('input', function (e) {
    // After choosing number template from list and start typing we hide list
    list.style.display = 'none';
    // If non numeric charachters(letters) are typed we disable typing and nothing will be typed in the field
    e.target.value = e.target.value.replace(/[a-z]/gi, '');
    
    // If phone number doesn't start with + mark we show warning message about that,
    // else if starting pluses are more than one we replace them by only one
    if(!e.target.value.includes('+')) {
        e.target.value = '';
        phoneWarn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>Enter + sign at first.';
        phoneWarn.style.display = 'block';
    }else {
        e.target.value = e.target.value.replace(/\++/, '+');
        phoneWarn.style.display = 'none';
    }

    /****** We create three phone masks for Armenian, Georgian and Russian phone numbers *********/

    // This is Russian phone number mask
    // We check whether phone number starts with +7
    if(e.target.value.includes('+7')) {
        // If it starts with +7 then we specify appropriate number length
        phone.setAttribute('maxlength', '17');
        
        // We have event for backspace key, when we press it,
        // it removes spaces and parentheses which were added before in the mask
        document.addEventListener('keydown', function(ev) {
            if(ev.keyCode === 8) {
                if(e.target.value.length === 15) {
                    e.target.value = e.target.value.slice(0, 14);
                }
                if(e.target.value.length === 12) {
                    e.target.value = e.target.value.slice(0, 11);
                }
                if(e.target.value.length === 7) {
                    e.target.value = e.target.value.slice(0, 6);
                }
                if(e.target.value.length === 4) {
                    e.target.value = e.target.value.slice(0, 3);
                }
            }
        });

        // Here we create number mask, pasting parentheses and spaces in appropriate positions
        if(e.target.value.length === 3) {
            e.target.value = e.target.value.slice(0, 2) + '(' + e.target.value[e.target.value.length - 1];
        }
        if(e.target.value.length === 6) {
            e.target.value += ') ';
        }
        if(e.target.value.length === 11) {
            e.target.value += ' ';
        }
        if(e.target.value.length === 14) {
            e.target.value += ' ';
        }
    }
    
    // This is Armenian phone number mask
    // We check whether phone number starts with +374
    if(e.target.value.includes('+374')) {
        // If it starts with +374 then we specify appropriate number length
        phone.setAttribute('maxlength', '14');

        // We have event for backspace key, when we press it,
        // it removes spaces which were added before in the mask
        document.addEventListener('keydown', function(ev) {
            if(ev.keyCode === 8) {
                if(e.target.value.length === 9) {
                    e.target.value = e.target.value.slice(0, 8);
                }
                if(e.target.value.length === 6) {
                    e.target.value = e.target.value.slice(0, 5);
                }
            }
        });

        // Here we create number mask, pasting spaces in appropriate positions
        if(e.target.value.length === 5) {
            e.target.value = e.target.value.slice(0,4) + ' ' + e.target.value[e.target.value.length - 1];
        }
        if(e.target.value.length === 8) {
            e.target.value = e.target.value.slice(0,8) + ' ' + e.target.value[e.target.value.length - 1];
        }
    }

    // This is Georgian phone number mask
    // We check whether phone number starts with +995
    if(e.target.value.includes('+995')) {
        // If it starts with +995 then we specify appropriate number length
        phone.setAttribute('maxlength', '17');

        // We have event for backspace key, when we press it,
        // it removes spaces which were added before in the mask
        document.addEventListener('keydown', function(ev) {
            if(ev.keyCode === 8) {
                if(e.target.value.length === 6) {
                    
                    e.target.value = e.target.value.slice(0, 5);
                }
                if(e.target.value.length === 10) {
                    
                    e.target.value = e.target.value.slice(0, 9);
                }
                if(e.target.value.length === 13) {
                    e.target.value = e.target.value.slice(0, 12);
                }
                if(e.target.value.length === 16) {

                    e.target.value = e.target.value.slice(0, 15);
                }
            }
        });

        // Here we create number mask, pasting spaces in appropriate positions
        if(e.target.value.length === 5) {
            e.target.value = e.target.value.slice(0,4) + ' ' + e.target.value[e.target.value.length - 1];
        }
        if(e.target.value.length === 9) {
            e.target.value = e.target.value.slice(0,8) + ' ' + e.target.value[e.target.value.length - 1];
        }
        if(e.target.value.length === 12) {
            e.target.value = e.target.value.slice(0,11) + ' ' + e.target.value[e.target.value.length - 1];
        }
        if(e.target.value.length === 15) {
            e.target.value = e.target.value.slice(0,14) + ' ' + e.target.value[e.target.value.length - 1];
        }
    }
});