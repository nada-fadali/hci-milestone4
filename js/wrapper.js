// filler code
var html = [
    '<html>',
    '<head>',
    '   <title>Hello World!</title>',
    '</head>',
    '<body>',
    '   <h1> Hello World! </h1>',
    '   <div>',
    '       <p>',
    '           This is a sample paragraph inside a div with a class container',
    '       </p>',
    '   </div>',
    '</body>',
    '</html>'
];

var css = [
    'h1{',
    '   color: red;',
    '}',
    '.container{',
    '   text-align: center;',
    '   font-size: 10px;',
    '   border: none;',
    '   float: left;',
    '}'
];

var js = [
    'function hello(){',
    '   var msg = "hello world!";',
    '   alert("Message: " + msg)',
    '}',
    ' ',
    'var x = 2;',
    'var y = 3;',
    'console.log(x+y)'
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

    if (i < css.length) {
        inputWidth = css[i].length / 2 + 0.85;
        input += '<input type="text" value="' + css[i] 
                + '" style = "width: ' + inputWidth 
                + 'em; background-color: ' + cssBg + '">';
    };

    if (i < js.length) {
        inputWidth = js[i].length / 2 + 0.85;
        input += '<input type="text" value="' + js[i] 
                + '" style = "width: ' + inputWidth 
                + 'em; background-color: ' + jsBg + '">';
    };
    
    $('#r'+i).append(input);
};  