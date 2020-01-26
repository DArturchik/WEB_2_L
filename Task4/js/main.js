

var text0 = document.createElement("P");
text0.innerHTML = "Row: ";
var text1 = document.createElement("P");
text1.innerHTML = "Col: ";
var input0 = document.createElement("INPUT");
var input1 = document.createElement("INPUT");
var table = document.createElement("TABLE");
var button = document.createElement("BUTTON");
var tr = document.createElement("TR");
var td = document.createElement("TD");
var button1 = document.createElement("BUTTON");


//Add Notes
var div0 = document.body;
div0.appendChild(text0);
div0.appendChild(input0);
div0.appendChild(text1);
div0.appendChild(input1);
div0.appendChild(button);
div0.appendChild(button1);

var div1 = document.body;



//Atributes
div0.setAttribute("id","div_attr0");
input0.setAttribute("id", "input_attr0");
input1.setAttribute("id", "input_attr1");
div1.setAttribute("id", "div_attr1");
button.setAttribute("id", "btn_attr0");
table.setAttribute("id","table_attr0");
tr.setAttribute("id","tr_attr0");
td.setAttribute("id","td_attr0");
button1.setAttribute("id", "btn_attr1");

//Func
button.innerHTML = "Add Table";
button1.innerHTML = "DelateTable";

//btn_attr0.addEventListener("click", myFunction);
//btn_attr0.onclick = function(){generate_table()};
document.getElementById("btn_attr0").addEventListener("click", function()
{
  generate_table();
  clickCell();
});
document.getElementById("btn_attr1").addEventListener("click",DelateTable);

function clickCell() {

  var letters = '0123456789ABCDEF';
  var color = '#';

      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";




  var cell = document.querySelectorAll('#tabl td');
  for(var i = 0; i < cell.length; i++){
    cell[i].onclick = function() {


      this.style.backgroundColor = bgColor;
      clickCell();
    };
  };

};

function generate_table() {

if(document.querySelectorAll('#tabl').length>0)
{
  for(var i = document.querySelectorAll('#tabl').length-1;i>=0;i--)
  {
    document.querySelectorAll('#tabl')[i].remove();
  };
};

  var RowVal = document.getElementById("input_attr0").value;
  var ColVal = document.getElementById("input_attr1").value;
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

ColVal++;
RowVal++;

  for (var i = 1; i < ColVal; i++) {

    var row = document.createElement("tr");

    for (var j = 1; j < RowVal; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode("row: "+i+", column: "+j);
      cell.appendChild(cellText);

      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "1");
  tbl.setAttribute("id", "tabl");


}


function DelateTable()
{

      document.getElementById("tabl").remove();
}
