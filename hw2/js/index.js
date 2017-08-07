$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("http://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        //console.log(response);
    }, "json");
})

$('#query').on('click', function() {
    $.get("http://js2017-hw2.kchen.club/query", function(response) {
        //console.log(response.data.length)
        //console.log(response.result)
        if (response) {
            if (response.result) {
                count = 0;
                for (var i = 0; i < response.data.length; i + 3) {
                    var change_line = $("</br>")
                    $("#product-list").append(change_line, change_line);
                    // $("#product-list").append('<div id="col-<LI>"></div>')
                    //$("#col-<LI>").append('<div id="item-count"></div>')
                    for (var j = 0; j < 3; j++) {
                        var picture_add = $('<img style="width:100pt;height:100pt">').attr('src', response.data[count].image);
                        var title_add = $('<p style="color:orange"></p>').text(response.data[count].name)
                        var price_add = $("<p></p>").text(response.data[count].price)

                        $("#product-list").append(picture_add);
                        $("#product-list").append(title_add);
                        $("#product-list").append(price_add);
                        count++;
                    }

                }


            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }
        //console.log(response);
    }, "json");
})