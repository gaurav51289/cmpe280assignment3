$(document).ready(function () {

    $( "#tabs" ).tabs();
    listItems('tabs-1', 'sofas');

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

var itemURLs = [];

function createDraggablesItems()
{
    $(".draggable").draggable();
    $(".resizable").resizable();

}

function createCheckboxWidget() {
    var checkboxes = $("input[type='checkbox']");
    checkboxes.checkboxradio();
}

function addItemToScene(index) {
    var url = itemURLs[index];
    var scene = $("#scene");
    if(scene.has("#"+index).length !== 0){
        scene.find("#"+index).remove();
    } else {
        scene.append('<div id="'+index+'" class="draggable">' +
            '                   <div class="resizable">' +
            '                       <img src="'+url+'" class="new-item-scene" />' +
            '                   </div>' +
            '               </div>');
    }
    createDraggablesItems();
}

function listItems(id, endpoint) {
    var itemList = $("#"+id);
    if(itemList.children().length == 0){
        $.ajax({
            url:'http://localhost:3000/items/'+endpoint,
            success: function (results) {
                itemURLs = results.map(function (item) {
                    return item.url;
                });
                results.forEach(function (item, index) {
                    itemList.append('<div class="row no-margin">\n' +
                        '                            <label for="checkbox-nested-'+index+'">Add to Scene and Try !!\n'+
                        '                               <input type="checkbox" name="checkbox-nested-'+index+'" ' +
                        '                                onclick="addItemToScene('+index+')"' +
                        '                                id="checkbox-nested-'+index+'">\n'+
                        '                            </label>\n' +
                        '                            <div class="media">\n' +
                        '                                <img class="d-flex mr-3" src="'+item.url+'" alt="Sofa" style="width: 20%">\n' +
                        '                                <div class="media-body">\n' +
                        '                                    <h5 class="mt-0">'+item.name+'</h5>\n' +
                        '                                    <p>'+item.price+'</p>\n' +
                        '                                    <p>This is an awesome Green Sofa.</p>\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div>');
                });

                createCheckboxWidget();
            }
        });
    }
}

