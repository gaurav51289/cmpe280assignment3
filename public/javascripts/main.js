$(document).ready(function () {
    $.ajax({
        url:'http://localhost:3000/items/sofas',
        success: function (result) {
            listItems(result);
        }
    });

    $('.nav li a').click(function(e) {
        $('.nav li a.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();

        switch (e.target.id){
            case 'nav1':
                $.ajax({
                   url:'http://localhost:3000/items/sofas',
                   success: function (result) {
                       listItems(result);
                   }
                });

                break;
            case 'nav2':
                listItems(2);
                break;
            case 'nav3':
                listItems(3);
                break;
            case 'nav4':
                listItems(4);
                break;
            default:
                break;
        }
    });
});

function init()
{
    var draggableItem = $(".draggable");
    draggableItem.draggable({
        start: function (event, ui) {
            var item = event.target;
        }
    });
    var resizableItem = $(".resizable");
    resizableItem.resizable();
}

function listItems(items) {
    var itemList = $(".itemList");
    itemList.empty();

    items.forEach(function (item) {
        itemList.append('<div class="row no-margin">\n' +
            '                            <div class="media">\n' +
            '                                <div class="draggable">\n' +
            '                                    <div class="resizable">\n' +
            '                                        <img class="d-flex mr-3" src="'+item.url+'" alt="Sofa" style="width: 100%">\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                                <div class="media-body">\n' +
            '                                    <h5 class="mt-0">'+item.name+'</h5>\n' +
            '                                    <p>'+item.price+'</p>\n' +
            '                                    <p>This is an awesome Green Sofa.</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>');
    });

    init();
}

