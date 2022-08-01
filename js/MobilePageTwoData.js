
var arrangeTable = {};

arrangeTable.sep = [

	['Sep.1','<img src="./img/noVacancy2.gif">','Available<b>7</b>'],
	['Sep.2','Available<b>6</b>','<img src="./img/noVacancy2.gif">'],
	['Sep.3','Available<b>5</b>','Available<b>7</b>'],
               ['Sep.4','Available<b>4</b>','<img src="./img/noVacancy2.gif">'],
               ['Sep.5','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'],
               ['Sep.6','<img src="./img/noVacancy2.gif">','Available<b>7</b>'],        
               ['Sep.7','Available<b>3</b>','Available<b>7</b>'],

               ['Sep.8','Available<b>1</b>','<img src="./img/noVacancy2.gif">'],
	['Sep.9','Available<b>2</b>','Available<b>7</b>'],
	['Sep.10','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'],
               ['Sep.11','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'],
               ['Sep.12','Available<b>11</b>','Available<b>7</b>'],
               ['Sep.13','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'],           
               ['Sep.14','Available<b>10</b>','Available<b>7</b>'],

               ['Sep.15','<img src="./img/noVacancy2.gif">','Available<b>7</b>'],
	['Sep.16','Available<b>9</b>','<img src="./img/noVacancy2.gif">'],
	['Sep.17','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'],
               ['Sep.18','<img src="./img/noVacancy2.gif">','Available<b>7</b>'],
               ['Sep.19','Available<b>8</b>','<img src="./img/noVacancy2.gif">'],
               ['Sep.20','<img src="./img/noVacancy2.gif">','Available<b>7</b>'],           
               ['Sep.21','Available<b>7</b>','<img src="./img/noVacancy2.gif">'], 

               ['Sep.22','<img src="./img/noVacancy2.gif">','Available<b>7</b>'], 
	['Sep.23','Available<b>3</b>','Available<b>7</b>'], 
	['Sep.24','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'], 
               ['Sep.25','Available<b>2</b>','<img src="./img/noVacancy2.gif">'], 
               ['Sep.26','<img src="./img/noVacancy2.gif">','<img src="./img/noVacancy2.gif">'], 
               ['Sep.27','Available<b>1</b>','<img src="./img/noVacancy2.gif">'],           
               ['Sep.28','<img src="./img/noVacancy2.gif">','Available<b>1</b>'], 
	
];





$(function(){

var template=$('#row_item_template').html();

function fillTable(x,y){
                  for(var i=x;i<y; i++){
                                 var html=template;
                                 var d=arrangeTable.sep[i];
                                 var objectData={
                                      'date':d[0],'statusAM':d[1],'statusPM':d[2]
                                 }  

                                   for(k in objectData ){
                                   var v=objectData[k];
                                   html=html.replace('{'+k+'}',v);               
                                   }  
                                  //$('.arrange-table .table .row2 .append_target').empty();
                                  $('.arrange-table .table .row2 .append_target').append(html)     //填充表格内容    
                  }

}




var x=0, y=7;
fillTable(x,y);


//-----------------前进按钮特效-----------------
 
$('.arrange-table .table .row1 .pre ').on("click",function(){                                     
                                      
                       if(x==0){ $('.arrange-table .table .row2 .append_target').empty();  fillTable(7,14); x=7 ;  return }
                       if(x==7){ $('.arrange-table .table .row2 .append_target').empty();  fillTable(14,21); x=14;  return }
                       if(x==14){ $('.arrange-table .table .row2 .append_target').empty(); fillTable(21,28); x=21;  return }
                       if(x==21){ $('.arrange-table .table .row2 .append_target').empty(); fillTable(0,7); x=0;  return }
                       
})

//-----------------后退按钮特效-----------------
$('.arrange-table .table .row3 .next ').on("click",function(){
                       if(x==21){ $('.arrange-table .table .row2 .append_target').empty();  fillTable(14,21); x=14;  return }
                       if(x==14){ $('.arrange-table .table .row2 .append_target').empty();  fillTable(7,14); x=7;  return }
                       if(x==7){ $('.arrange-table .table .row2 .append_target').empty(); fillTable(0,7); x=0;  return }
                       if(x==0){ $('.arrange-table .table .row2 .append_target').empty(); fillTable(21,28); x=0;  return }
                       
                     
})




})













