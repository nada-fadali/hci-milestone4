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
    '   var msg = hello world!;',
    '   alert(Message:  + msg)',
    '}',
    ' ',
    'var x = 2;',
    'var y = 3;',
    'console.log(x+y)'
];

wrap();

function wrap()
{
    $('#wrapper').html('');
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
} 

// text editor
$(document).on('keyup', 'input[type="text"]', function(ele) {
    // if enter key is pressed
    // create input element below this one
    if (ele.keyCode === 13){
        var addToRow = parseInt($(this).parent().attr('id').substr(1)) + 1;

        if ($(this).attr('class') === 'html'){
            html.splice(addToRow, 0, '');
            
        }
        else if ($(this).attr('class') === 'css'){
            css.splice(addToRow, 0, '');

        }
        else if ($(this).attr('class') === 'js'){
            js.splice(addToRow, 0, '');
        }
        
        wrap();
    }

    // else if delete key is pressed 
    else if (ele.keyCode === 8){
        var rowToDelete = parseInt($(this).parent().attr('id').substr(1));
        
        // if line is empty delete it
        if ($(this).val().length === 0){
            if ($(this).attr('class') === 'html'){
                html.splice(rowToDelete, 1);
            }
            else if ($(this).attr('class') === 'css'){
                css.splice(rowToDelete, 1);

            }
            else if ($(this).attr('class') === 'js'){
                js.splice(rowToDelete, 1);
            }

            wrap();
        }
        // edit line width
        else{
            var inputWidth =  $(this).val().length / 2 + 0.85;
            $(this).css("width", inputWidth+"em");

            // update value in the array
            if ($(this).attr('class') === 'html'){
                html[rowToDelete] = $(this).val();
            }
            else if ($(this).attr('class') === 'css'){
                css[rowToDelete] = $(this).val();
            }
            else if ($(this).attr('class') === 'js'){
                js[rowToDelete] = $(this).val();
            }
        }
    }


    // else rewrap current line
    else{
        // update length
        var inputWidth =  $(this).val().length / 2 + 0.85;
        $(this).css("width", inputWidth+"em");

        // update value in the array
        var rowToEdit = parseInt($(this).parent().attr('id').substr(1));
        if ($(this).attr('class') === 'html'){
            html[rowToEdit] = $(this).val();
        }
        else if ($(this).attr('class') === 'css'){
            css[rowToEdit] = $(this).val();
        }
        else if ($(this).attr('class') === 'js'){
            js[rowToEdit] = $(this).val();
        }
    }
});

// console.log($('#r1').length); // == 0 doesn't exists