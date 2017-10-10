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
                listItems('tabs-3', 'chair');
                break;
            case '4':
                listItems('tabs-4', 'light');
                break;
            default:
                break;
        }
    });
});

var itemURLs = {};

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
                results.forEach(function (item) {
                    itemURLs[item.id] = item.url;
                    itemList.append('<div class="row no-margin">\n' +
                        '                            <label for="checkbox-nested-'+item.id+'">Add to Scene and Try !!\n'+
                        '                               <input type="checkbox" name="checkbox-nested-'+item.id+'" ' +
                        '                                onclick="addItemToScene('+item.id+')"' +
                        '                                id="checkbox-nested-'+item.id+'">\n'+
                        '                            </label>\n' +
                        '                            <div class="media">\n' +
                        '                                <img class="d-flex mr-3" src="'+item.url+'" alt="Sofa" style="width: 20%">\n' +
                        '                                <div class="media-body">\n' +
                        '                                    <h5 class="mt-0">'+item.name+'</h5>\n' +
                        '                                    <p>'+item.price+'</p>\n' +
                        '                                    <p>'+item.desc+'</p>\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div>');
                });

                createCheckboxWidget();
            }
        });
    }
}

