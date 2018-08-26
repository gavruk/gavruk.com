/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
  WordCloud(document.getElementById('word-cloud'), {
    gridSize: Math.round(40 * $('#word-cloud').width() / 1024),
    weightFactor: function (size) {
      return Math.pow(size, 1.6) * $('#word-cloud').width() / 1024;
    },
    color: function (word, weight) {
      return 'white';
    },
    shape: 'square',
    fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif',
    rotateRatio: 0,
    rotationSteps: 2,
    backgroundColor: '#18bc9c',
    list: [
      ['Node.js', 20],
      ['Javascript', 20],

      ['React.js', 15],
      ['Vue.js', 15],
      ['Redux', 15],
      ['MongoDB', 15],
      ['Koa.js', 15],
      ['Socket.io', 15],
      ['Express.js', 15],
      ['Redis', 15],
      ['Webpack', 15],
      ['Docker', 15],
      ['Nginx', 15],

      ['Kafka', 10],
      ['RabbitMQ', 10],
      ['Mocha', 10],
      ['Git', 10],
      ['HTML', 10],
      ['CSS', 10],
      ['NoSQL', 10],
      ['Go', 10],
      ['Flux', 10],
      ['JQuery', 10],
      ['Ansible', 10],

      ['React Native', 9],
      ['AngularJS', 9],
      ['TDD', 9],
      ['Cordova', 9],
      ['RethinkDB', 9],
    ],
  });
});
