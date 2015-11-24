// filler code
var html = [
    '<html>',
    '<head>',
    '   <title>Hello World!</title>',
    '</head>',
    '<body>',
    '   <h1> Hello World! </h1>',
    '</body>',
    '</html>'
];

var css = [
    'h1{',
    '   color: red;',
    '}'
];

var js = [
    'function hello(){',
    '   var msg = "hello world!";',
    '   alert("Message: " + msg)',
    '}'
];

// console.log($('#r1').length); // == 0 doesn't exists

var htmlBg = '#62A3EE',
    cssBg =  '#FF73B1', //FFC361
    jsBg = '#64AD82';


for (var i = 0; i < html.length; i++) {
    $('#wrapper').append($("<div>", {class: "row", id:"r"+i}));
        
    console.log(html[i].length);

    var inputWidth = html[i].length / 2 + 0.85; 
    var input = '<input type="text" value="' + html[i] 
                + '" style = "width: ' + inputWidth 
                + 'em; background-color: ' + htmlBg + '">';
    
    $('#r'+i).append(input);
};  