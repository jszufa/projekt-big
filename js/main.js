$(document).ready(function () {

    // DROPDOWN MENU - show
    $('.hamburger-custom').click(function () {
        $('.dropdown-menu-custom').css('display', 'block')

    });

    // DROPDOWN MENU - hide
    $('.main-menu-item:first-child').click(function () {

        $('.dropdown-menu-custom').css('display', 'none')

    })

    //FORM VALIDATION

    let pElement = document.createElement('p');
    pElement.className = 'red';

    $('#reservation-button').click(function (event) {

        event.preventDefault();

        //RESET STYLES
        pElement.innerHTML = '';

        $('#flname').css({ "border-color": "white" });
        $('#phone').css({ "border-color": "white" });
        $('#email').css({ "border-color": "white" });
        $('#service').css({ "border-color": "white" });
        $('#date').css({ "border-color": "white" });
        $('#time').css({ "border-color": "white" });
        $('#notes').css({ "border-color": "white" });

        console.log($(pElement));

        //VALIDATION
        if ($('#flname')[0].value.length == 0) {

            $('#flname').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully';
            $('.form-last-element').after(pElement);

        }

        if ($('#phone')[0].value.length == 0) {

            $('#phone').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully';
            $('.form-last-element').after(pElement);

        }

        if ($('#email')[0].value.length == 0) {

            $('#email').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully';
            $('.form-last-element').after(pElement);

        }

        if ($('#service')[0].selectedIndex == 0) {

            $('#service').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully';
            $('.form-last-element').after(pElement);

        }

        if ($('#date')[0].value.length == 0) {

            $('#date').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully';
            $('.form-last-element').after(pElement);

        }

        if ($('#time')[0].value.length == 0) {

            $('#time').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully';
            $('.form-last-element').after(pElement);

        }

        if ($('#notes')[0].value.length == 0) {

            $('#notes').css({ "border-color": "red" });
            pElement.innerHTML = 'Please fill in all fields carefully'
            $('.form-last-element').after(pElement);

        }


        if (pElement.innerHTML == '') {
            getData();
        }


    });


    function getData() {
        
        let data = {
            name: `${$('#flname')[0].value}`,
            email: `${$('#email')[0].value}`,
            service: `${$('#service')[0].value.slice(0,-8)}`,
            phone: `${$('#phone')[0].value}`,
            date: `${$('#date')[0].value}`,
            time: `${$('#time')[0].value}`,
            message: `${$('#notes')[0].value}`
        }

         console.log(data);

        fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json' // The type of data I'm sending
            }
        })
            //zmiana tekstu w obiekt JavaScript
            .then(response => response.json())

            .then(resJson => {
                console.log(resJson);

                pElement.className = 'green';
                pElement.innerHTML = `Dziękujemy ${$('#flname')[0].value}. Zostałeś zapisany!`;
                $('.form-last-element').after(pElement);

            })

            .catch((error) => {
                console.error('Error:', error);
            });

    }

});