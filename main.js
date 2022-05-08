menu_list_array=["Cheese Pizza", "Veg Pizza","Country Special","Farmhouse Pizza"];
function getmenu(){
    var htmldata;
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
    }
    document.getElementById("display_menu").innerHTML=htmldata;
}
 function add_item(){
 var htmldata;
 var item=document.getElementById("add_item").value;
 menu_list_array.sort();
 for (var i=0;i<menu_list_array;i++){
 } 
 document.getElementById("display_menu").innerHTML=htmldata;
 }
