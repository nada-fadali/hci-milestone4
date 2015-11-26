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
    '           This is a sample paragraph inside a',
    ' div with a class container',
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

var htmlBg = '#62A3EE',
    cssBg =  '#FF73B1', //FFC361
    jsBg = '#64AD82';


// wrap filler content
for (var i = 0; i < html.length; i++) {
    wrap('html', i);

    if (i < css.length) {
        wrap('css', i);
    };

    if (i < js.length) {
        wrap('js', i);
    };
};  

// detect input tag changes


function wrap(type, i){
    var arr, color;
    if (type === 'html') 
        {arr = html; color = htmlBg;}
    else if (type === 'css') 
        {arr = css; color = cssBg;}
    else 
        {arr = js; color = jsBg;}

    var inputWidth = arr[i].length / 2 + 0.85; 
    var input = '<input type="text" value="' + arr[i] 
                + '" style = "width: ' + inputWidth 
                + 'em; background-color: ' + color + '">';

    $('#'+type+'wrapper').append($("<div>", {class: "row", id:type+"r"+i}));
    $('#'+type+'r'+i).append(input);
}

// console.log($('#r1').length); // == 0 doesn't exists