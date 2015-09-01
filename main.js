
function login_ajaxCall() {
    console.log("login before ajax");
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({ //this page sends data to the login_handler.php page
        url:"login_handler.php",
        method: "POST",
        cache: "false",
        data : {
            username: username,
            password: password
        },
        dataType: 'text',
        success: function(response){
            //print(json_encode($output)); FROM LOGIN.PHP
            console.log('the response is ',response);
            //$('body').html(response)
            if(response.success) {
                console.log('IT WORKED')
                load_content(response.destination);
            }
        }
    });
}

function load_content(url){
    console.log('bombs away');
    console.log("loading: "+url+".php");
    $.ajax({
        url: "pages/"+ url +".php",
        data: {},
        dataType: 'html',
        success: function(response){
            $(".content_container").html(response);
            window.history.pushState('test','test','index.php?current_page='+ url);
        }
    })
}

function logout_ajaxCall(){
    $.ajax({
        url: "logout.php",
        cache: false,
        method: "POST",
        dataType: "text",
        success: function (response) {
            console.log(response);
            load_content("login");
        }
    })
}

var todo_item_array=[];
var id = 0;
var modal_td_DOM = $("<td>",{
    "data-toggle": "modal",
    "data-target": "itemModal"
})

function addTask(){
    id++;
    var task     = $("#taskInput").val();
    var date     = $("#dateInput").val();
    var priority = $("#priorityInput").val();
    var details  = $("#detailsInput").val();
    var created_datetime = new Date().getTime();
    var complete = "incomplete";
    var todo_item = {id:id,complete:complete,task:task,date:date,priority:priority,details:details,created_datetime:created_datetime}
    todo_item_array.push(todo_item);
   var $tableRow = $('<tr>',{
       id: id,
       'data-index': id
   })
    var $checkbox_td = $('<td>',{
        id: "checkbox_td"
    })
    var $checkbox = $('<input>',{
        type: "checkbox",
        value: "complete"
    })
    var $task_td = $("<td>", {
        id: "task_td",
        onclick: "showTask("+id+")"
    }).text(task);
    var $date_td = $("<td>", {
        id: "date_td",
        onclick: "showTask("+id+")"
    }).text(date);
    var $priority_td = $("<td>", {
        id: "priority_td",
        onclick: "showTask("+id+")"
    }).text(priority);
    $($checkbox_td).append($checkbox);
    $($tableRow).append($checkbox_td,$task_td,$date_td,$priority_td);
    $('.tableBottom').before($tableRow);

}

function addClicked(){
    $('input').val('');
    $('select').val('');
    $('textarea').val('');
    $('#addModal').modal('show');
}

function showTask(id){
    for(var i in todo_item_array){
        if(todo_item_array[i].id == id){
            var todoObj = todo_item_array[i];
        }
    }
    if(todoObj === undefined) {
        console.log("something is wrong with me...");
        return;
    }
    $("#task").html("Task: "+todoObj.task);
    $("#status_p").html("Status:" + todoObj.complete);
    $("#date_p").html("Complete by: " + todoObj.date);
    $("#priority_p").html("Priority: " + todoObj.priority);
    $("#details_p").html("Extra Details: " + todoObj.details);
    $("#created_p").html("Created: " + todoObj.created_datetime);
    $("#id_p").html("Task Number: " + todoObj.id);
    $('#itemModal').modal('show');
}