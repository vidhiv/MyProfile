import $ from 'jquery'; 

window.onload = (event) => {
    let hashstring = window.location.hash;
    if (hashstring !== "") {
        gotoTabMemu(hashstring);
    }
};

window.addEventListener("scroll", () => {
    var position = $('#aboutme').position();
    if (window.scrollY < position.top - $('#stickmenu').height()) {
        $("#stickmenu").addClass("firstpage");
    } else {
        $("#stickmenu").removeClass("firstpage");
    }
});

$(document).on("click", ".nav-link", function () {
    let obj = $(this);
    $("#navbarSupportedContent .nav-link").each(function () {
        $(this).removeClass("active");
    });
    if (obj.attr("href") !== "#home") {
        $("#stickmenu").removeClass("firstpage");
        obj.addClass("active");
    } else {
        $("#stickmenu").addClass("firstpage");
    }
});

$(document).on("click", "#knowme", function () {
    $("#stickmenu").removeClass("firstpage");
    $("#navbarSupportedContent .nav-link").each(function () {
        $(this).removeClass("active");
    });
    $("#knowmebetter").addClass("active");
});

$(document).on("click", "#sendMessage", function () {
    let i = 0;
    $("#detailsform .validatefield").each(function () {
        if ($(this).val() === '') {
            i = 1;
            $(this).css('border', '1px solid red');
        } else {
            $(this).css('border', '');
        }
    });

    if (validateEmail($('#email').val())) {
        $('#email').css('border', '');
    } else {
        i = 1;
        $('#email').css('border', '1px solid red');
    }

    if (i === 0) {
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#comments").val();
        let createMessage = "Hi Vidhi, \n \n "+message+" \n \n- "+name+" \n "+email;
        window.open(`mailto:vidhi.v92@gmail.com?subject="Contacting from Portfolio-MyProfile"&body=${createMessage}`);
    }
});

function gotoTabMemu(hashstring) {
    let i = 0;
    $("#navbarSupportedContent .nav-link").each(function () {
        if (hashstring === $(this).attr("href")) {
            i = 1;
            $(this).click();
        }
    });
    if (i === 0) {
        window.location.href = "index.html";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}