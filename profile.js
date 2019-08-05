

$(function(){
    $('a').click(function(){
        var selected = $(this);
        $('a').removeClass('.active');
        $(selected).addClass('.active');
    });

var $a = $('.a'),
$b =$('.b'),
$c =$('.c'),
$d =$('.d'),
$e =$('.F'),

$home =$('.home'),
$about =$('.about');
$gallery  =$('.gallery');
$contact  =$('.contact');
$inquiry  =$('.inquiry');

$(document).ready(function() {
    $home.fadeOut();
    $about.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
    $inquiry.fadeOut();
    });

$('.a').on('click', function(event){
    $home.fadeIn();
    $about.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
    $inquiry.fadeOut();
    });

$('.b').on('click', function(event){
    $home.fadeOut();
    $about.fadeIn();
    $gallery.fadeOut();
    $contact.fadeOut();
    $inquiry.fadeOut();
});
$('.c').on('click', function(event){
    $home.fadeOut();
    $about.fadeOut();
    $gallery.fadeIn();
    $contact.fadeOut();
    $inquiry.fadeOut();
});
$('.d').on('click', function(event){
    $home.fadeOut();
    $about.fadeOut();
    $gallery.fadeOut();
    $contact.fadeIn();
    $inquiry.fadeOut();
});
$('.F').on('click', function(event){
    $home.fadeOut();
    $about.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
    $inquiry.fadeIn();
});
});

