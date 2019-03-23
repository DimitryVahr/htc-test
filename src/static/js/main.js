window.onload = function () {
    //scrollbar
    $('#tab_animal-list').click(function () {
        jQuery('.animals-list').jScrollPane({ verticalDragMaxHeight: 70 });
    });
    if ($('#tab_animal-list').is(':checked')) {
        jQuery('.animals-list').jScrollPane({ verticalDragMaxHeight: 70 });
    }
    jQuery('.container-interest-list').jScrollPane({ autoReinitialise: true, utoReinitialiseDelay: 500 });
    //add interests
    let formAddInterest = $('.form-add-interest');
    ($('#tab_profile').is(':checked')) ? formAddInterest.removeClass('hide') : formAddInterest.addClass('hide');
    $('#tab_profile').click(function () {
        formAddInterest.removeClass('hide');
    });
    $('#tab_animal-list').click(function () {
        formAddInterest.addClass('hide');
    });
    let interestsCount = 3;
    $('.interest__button').click(function () {
        let str = $('.interest__input').val();
        let regularInterest = /^.{1,20}$/;
        str = str.replace(/\s+/g, ' ').trim()
        let valid = regularInterest.test(str);
        if (interestsCount <= 20 && valid) {
            $(".container-interest-list > .jspContainer > .jspPane").prepend("<a class='interests__item' href='#'>" + str + "</a>");
            $('.interest__input').removeClass('err');
            interestsCount++;
            if (interestsCount == 21) {
                formAddInterest.append('<span class="add-interest-err">Достигнут лимит добавления интересов</span>');
            }
            removeInterest();
        } else if (interestsCount >= 21) {
        } else {
            $('.interest__input').addClass('err')
        }
    });
    function removeInterest() {
        $('.interests__item').unbind('click');
        $('.interests__item').click(function () {
            this.parentNode.removeChild(this);
            interestsCount--;
            $('.add-interest-err').remove();
        });
    }
    removeInterest();
    //new name, phone, mail
    let name = $('.profile__name'),
        phone = $('.profile__phone'),
        mail = $('.profile__mail');
    (localStorage['name']) ? name.html(localStorage.getItem('name')) : name.html('Виталя Гора');
    (localStorage['phone']) ? phone.html(localStorage.getItem('phone')) : phone.html('+7 (440) 554-32-12');
    (localStorage['mail']) ? mail.html(localStorage.getItem('mail')) : mail.html('vitalya@gora.ru');

    name.click(function () {
        let that = this;
        that.style.display = 'none';
        let str = '"' + that.innerHTML + '"';
        name.parent().prepend('<input type="text" id="new_name" value=' + str + '>');
        let newName = $('#new_name');
        newName.focus();
        newName[0].selectionStart = newName.val().length;
        newName.focusout(function () {
            if (this.value && this.value.length <= 20) {
                localStorage.setItem('name', this.value);
                name.html(localStorage.getItem('name'));
                that.style.display = 'block';
                this.parentNode.removeChild(this);
            } else if (!this.value) {
                name.html(localStorage.getItem('name'));
                that.style.display = 'block';
                this.parentNode.removeChild(this);
            } else {
                newName.focus();
                newName.addClass('err')
            }
        });
    });
    phone.click(function () {
        let that = this;
        that.style.display = 'none';
        let str = '"' + that.innerHTML + '"';
        phone.parent().append('<input type="text" class="new_input" id="new_phone" value=' + str + '>');
        let newPhone = $('#new_phone');
        newPhone.focus();
        newPhone[0].selectionStart = newPhone.val().length;
        newPhone.focusout(function () {
            let regularPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            let valid = regularPhone.test(this.value);
            if (valid) {
                localStorage.setItem('phone', this.value);
                phone.html(localStorage.getItem('phone'));
                that.style.display = 'block';
                this.parentNode.removeChild(this);
            } else if (!this.value) {
                phone.html(localStorage.getItem('phone'));
                that.style.display = 'block';
                this.parentNode.removeChild(this);
            } else {
                newPhone.focus();
                newPhone.addClass('err')
            }
        });
    });

    mail.click(function () {
        let that = this;
        that.style.display = 'none';
        let str = '"' + that.innerHTML + '"';
        mail.parent().append('<input type="text" class="new_input" id="new_mail" value=' + str + '>');
        let newMail = $('#new_mail');
        newMail.focus();
        newMail[0].selectionStart = newMail.val().length;
        newMail.focusout(function () {
            let regularMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
            let valid = regularMail.test(this.value);
            if (valid) {
                localStorage.setItem('mail', this.value);
                mail.html(localStorage.getItem('mail'));
                that.style.display = 'block';
                this.parentNode.removeChild(this);
            } else if (!this.value) {
                mail.html(localStorage.getItem('mail'));
                that.style.display = 'block';
                this.parentNode.removeChild(this);
            } else {
                newMail.focus();
                newMail.addClass('err')
            }
        });
    });
}


