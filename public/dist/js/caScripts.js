var filterDiv = document.querySelectorAll('.filterDiv ul li label');
var serv = document.querySelectorAll('.filterResultsContainer .col-md-4');

[].forEach.call(filterDiv, function (el, i) {

    var dataFilterVal = document.querySelectorAll('[data-filter*=' + el.previousElementSibling.attributes[1].value + ']');

    [].forEach.call(serv, function (el, i) {
        el.classList.add("showServ");
    });

    el.addEventListener('click', function () {
        if (el.previousElementSibling.hasAttribute('checked')) {
            el.previousElementSibling.removeAttribute('checked');
        } else {
            el.previousElementSibling.setAttribute('checked', '');
        }
    });
});

[].forEach.call(serv, function (el, i) {
    var ifFun = function ifFun(elm, cl) {
        if (el.classList.contains(elm)) {
            el.classList.add(cl);
            el.classList.remove(elm);
        }
    };

    ifFun('Pro,Service-Commercial', 'commercial');
    ifFun('Pro,Service-Service', 'service');
    ifFun('Pro,Service-Residential', 'residential');
    ifFun('Service-Installation', 'installation');
});

$(document).ready(function () {
    var sections = $('.filterResultsContainer .col-md-4');

    function updateContentVisibility() {
        var checked = $('#filterControls :checkbox:checked, #filterControls1 :checkbox:checked');
        if (checked.length) {
            sections.fadeOut();
            checked.each(function () {
                $('.' + $(this).val()).fadeIn();
            });
        } else {
            sections.fadeIn();
        }
    }

    $('.filterDiv ul li label').click(updateContentVisibility);
    updateContentVisibility();
});

console.log('Loaded');