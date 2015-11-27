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

for (var i = 0; i < html.length; i++) {

    var inputWidth = html[i].length / 2 + 0.85; 
    var input = '<input type="text" class="html" value="' + html[i] 
                + '" style = "width: ' + inputWidth + 'em;">';

    if (i < css.length) {
        inputWidth = css[i].length / 2 + 0.85;
        input += '<input type="text" class="css" value="' + css[i] 
                + '" style = "width: ' + inputWidth + 'em;">';
    };

    if (i < js.length) {
        inputWidth = js[i].length / 2 + 0.85;
        input += '<input type="text" class="js" value="' + js[i] 
                + '" style = "width: ' + inputWidth + 'em;">';
    };

    $('#wrapper').append($("<div>", {class: "row", id:"r"+i}));
    $('#r'+i).append(input);
};  


$(document).on('keyup', 'input[type="text"]', function(ele) {
    
    // if enter key is pressed
    // create input element below this one
    if (ele.keyCode === 13){

    }

    // else if delete key is pressed and this element is empty and not first line, delete it
    else if (ele.keyCode === 8 && $(this).val().length === 0 && $(this).parent().attr('id') !== 'r0'){

        // if the row is empty, adjust rows numbering
        if ($(this).parent().children().length === 1){
            var rowToDeleteIndex = $(this).parent().attr('id').substr(1);
            var nextLines = $(this).parent().nextAll();

            for (var i = 0; i < nextLines.length; i++) {
                $(nextLines[i]).attr('id', 'r'+rowToDeleteIndex++);
            };

            $(this).parent().remove();
        }
        else {
            // remove line from view
            $(this).remove();
        }

        // remove from array
    }


    // else rewrap current line
    else{
        // update length
        var inputWidth =  $(this).val().length / 2 + 0.85;
        $(this).css("width", inputWidth+"em");

        // update value in the array
    }
});

// console.log($('#r1').length); // == 0 doesn't exists