$(document).ready(function () {

    $( "#tabs" ).tabs();
    $.ajax({
        url:'http://localhost:3000/items/sofas',
        success: function (result) {
            listItems(result);
        }
    });

    $('#tabs ul li a').click(function(e) {
        switch (e.target.id){
            case '1':
                listItems('tabs-1', 'sofas');
                break;
            case '2':
                listItems('tabs-2', 'sides');
                break;
            case '3':
                listItems('tabs-3', 'tvmedia');
                break;
            case '4':
                listItems('tabs-4', 'light');
                break;
            default:
                break;
        }
    });
});

function createDraggablesItems()
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

function listItems(id, endpoint) {
    var itemList = $("#"+id);
    if(itemList.children().length == 0){
        $.ajax({
            url:'http://localhost:3000/items/'+endpoint,
            success: function (results) {
                results.forEach(function (item) {
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
            }
        });
    }
    createDraggablesItems();
}

