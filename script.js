var $WIN      = $(window);
var $Navbar   = $('.navbar');
var $Brand    = $Navbar.find('.navbar-brand');
var $Navbtn   = $Navbar.find('button');
var $NavLink  = $('#NavLinks');
var $Culture  = $('#Places');
var $Seemore  = $Culture.find('a.btn')

const e       = 'click';
const h       = 'height';
const bdb     = 'border-bottom';
const bgz     = 'background-size';
const none    = 'none';
const full    = '100%';

// Colors
const color_black = '#000000';
const color_white = '#FFFFFF';

var toggleNav   = function() {
  var top       = $WIN.scrollTop();
  var height    = $Navbar.css(h).replace('px', '');
  
  top > parseInt(height) ? 
    $Navbar.removeClass('bg-transparent')
      .addClass('bg-dark')
      .css(bdb, none) :
    $Navbar.removeClass('bg-dark')
      .addClass('bg-transparent')
      .css(bdb, '');
};

var scaleImg = function() {
  // $(this).parent().siblings()
  //   .css(bgz, 'auto 110%');
}

var resizeImg = function() {
  // $(this).parent().siblings()
  //   .css(bgz, '');
}

/* var preload = function() {
  var blockStyle = {
    border: none,
    padding: '2rem',
    backgroundColor: color_black,
    color: color_white,
    fontSize: '2rem',
    letterSpacing: '5px',
    width: full,
    height: full,
    left: '0',
    top: '0',
    margin: '0',
    padding: '0'
  };
  var titleStyle = 'top: 50%; transform: translateY(-50%); font-size: 3rem; letter-spacing: 10px;';
  var title = 'You are not a drop in the ocean. You are the entire ocean, in a drop.';
  var blockTitle = `<figure style='${titleStyle}'><blockquote >${title}</blockquote> <figcaption>
  &mdash;<cite>Rumi</cite>  </figcaption> </figure>`;
  $.blockUI({
    css: blockStyle,
    message: blockTitle,
    onBlock: () => $('body').css('overflow', 'hidden')
  });
  
  setTimeout(() => {
    $.unblockUI({
      onUnblock: function() {
        $('body').css('overflow', '');
      }
    });
  }, 4000);
}; */

$Seemore.hover(scaleImg, resizeImg);
$WIN.scroll(toggleNav);
$WIN.on('load', preload);

var skr = skrollr.init();
new WOW({
  boxClass:       'wow',
  animateClass:   'animated',
  offset:         0,
  mobile:         true,
  live:           true
}).init();