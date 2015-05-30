/**
 * Created by Mikaela on 5/28/15.
 */
$(function() {

    var $primaryToAtl = $('.btn-default');
    var $altToPrimary = $('.btn-primary');
    var $submitButton = $(':submit');

    var name, email, message, favoritePlace;

    //submit and save information
    //hide form
    $("#image2").hide();
    $("#image4").hide();
    $("#image6").hide();

    $('#altHawaii').click(function () {
        $("#image2").show();
        $("#image1").hide();
        $('#origHawaii').toggleClass('active');

    });

    $('#origHawaii').click(function () {
        $("#image2").hide();
        $("#image1").show();
        $('#origHawaii').toggleClass('active')
    });

    $('#altParis').click(function () {
        $("#image4").show();
        $("#image3").hide();
        $('#origParis').toggleClass('active');

    });

    $('#origParis').click(function () {
        $("#image4").hide();
        $("#image3").show();
        $('#origParis').toggleClass('active');
    });

    $('#altTokyo').click(function () {
        $("#image6").show();
        $("#image5").hide();
        $('#origTokyo').toggleClass('active');

    });

    $('#origToyko').click(function () {
        $("#image6").hide();
        $("#image5").show();
        $('#origTokyo').toggleClass('active');
    });



    $submitButton.on('click',function(e) {
        e.preventDefault();
        name = $('#name').val();
        console.log(name);
        email = $('#email').val();
        console.log(email);
        favoritePlace = $('.places').val();
        console.log(favoritePlace);
        message = $('#comment').val();
        console.log(message);

    });
    $('#formSubmit').click(function () {
        $('#ContactUs').hide(1000);
    });
/*
    /*
    not sure how to do this



    $primaryToAtl.on('click', function () {

    });

    $altToPrimary.on('click', function () {

        var origHTML = '<img src="img/hawaii.jpg" alt="image2.jpg">';
        \

    });
    */
});