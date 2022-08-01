
var storage = {};

storage.hospital = [

	['area','level','type','name','address','phone','imgUrl','time','web'],

	['A','★★','Western Cuisine','A 1-1','address: A 1-1','phone: A 1-1','img/restaurantpic/1.jpg','14:30','www.dfsdfs.com'],
	['A','★★★★★','Oriental Cuisine','A 1-2','address: A 1-2','phone: A 1-2','img/restaurantpic/2.jpg','8:30','www.ss.com'],
	['A','★★★','Western Cuisine','A 2-1','address: A 2-1','phone: A 2-1','img/restaurantpic/3.jpg','8:30','www.sdfsdf.com'],
            ['A','★★★★★','Oriental Cuisine','A 2-2','address: A 2-2','phone: A 2-2','img/restaurantpic/4.jpg','8:30','www.4r4r4r.com'],

	['B','★★★','Oriental Cuisine','B 1-1','Bddress: B 1-1','phone: B 1-1','img/restaurantpic/5.jpg','14:30','www.wewew.com'],
	['B','★★★★','Oriental Cuisine','B 1-2','Bddress: B 1-2','phone: B 1-2','img/restaurantpic/10.jpg','8:30','www.azaza.com'],
	['B','★★★','Western Cuisine','B 2-1','Bddress: B 2-1','phone: B 2-1','img/restaurantpic/7.jpg','8:30','www.cvcv.com'],
             ['B','★★★★★','Western Cuisine','B 2-2','Bddress: B 2-2','phone: B 2-2','img/restaurantpic/8.jpg','8:30','www.hghg.com'],

	['D','★★★★','Western Cuisine','D 1-1','Dddress: D 1-1','phone: D 1-1','img/restaurantpic/5.jpg','14:30','www.vcvcvc.com'],
	['D','★★★★★','Oriental Cuisine','D 1-2','Dddress: D 1-2','phone: D 1-2','img/restaurantpic/6.jpg','8:30','www.bbbb.com'],
	['D','★★★★','Western Cuisine','D 2-1','Dddress: D 2-1','phone: D 2-1','img/restaurantpic/1.jpg','8:30','www.dddd1.com'],
             ['D','★★★','Western Cuisine','D 2-2','Dddress: D 2-2','phone: D 2-2','img/restaurantpic/2.jpg','8:30','www.d3d3d.com'],

	['E','★★★★★','Western Cuisine','E 1-1','Eddress: E 1-1','phone: E 1-1','img/restaurantpic/3.jpg','14:30','www.nnn.com'],
	['E','★★','Oriental Cuisine','E 1-2','Eddress: E 1-2','phone: E 1-2','img/restaurantpic/4.jpg','8:30','www.erer.com'],
	['E','★★★','Western Cuisine','E 2-1','Eddress: E 2-1','phone: E 2-1','img/restaurantpic/5.jpg','8:30','www.rtrt4.com'],
             ['E','★★★★','Oriental Cuisine','E 2-2','Eddress: E 2-2','phone: E 2-2','img/restaurantpic/10.jpg','8:30','www.c4c4.com'],

	['F','★★★★★','Western Cuisine','F 1-1','Fddress: F 1-1','phone: F 1-1','img/restaurantpic/6.jpg','14:30','www.5t5t.com'],
	['F','★★★★★','Oriental Cuisine','F 1-2','Fddress: F 1-2','phone: F 1-2','img/restaurantpic/7.jpg','8:30','www.b6b7.com'],
	['F','★★','Western Cuisine','F 2-1','Fddress: F 2-1','phone: F 2-1','img/restaurantpic/8.jpg','8:30','hgh664.com'],
             ['F','★★★★★','Oriental Cuisine','F 2-2','Fddress: F 2-2','phone: F 2-2','img/restaurantpic/9.jpg','8:30','www.h6h6.com'],

	
];

storage.department = [
	['hospitalName', ['departmentName'] ],

	['A 1-1',['dist. A 1-1'] ],
	['A 1-2',['dist. A 1-2'] ],
	['A 2-1',['dist. A 2-1'] ],
	['A 2-2',['dist. A 2-2'] ],

	['B 1-1', ['dist. B 1-1'] ],
	['B 1-2', ['dist. B 1-2'] ],
	['B 2-1', ['dist. B 2-1'] ],
	['B 2-2', ['dist. B 2-2'] ],


	['D 1-1', ['dist. D 1-1'] ],
	['D 1-2', ['dist. D 1-2'] ],
	['D 2-1', ['dist. D 2-1'] ],
	['D 2-2', ['dist. D 2-2'] ],

	['E 1-1', ['dist. E 1-1'] ],
	['E 1-2', ['dist. E 1-2'] ],
	['E 2-1', ['dist. E 2-1'] ],
	['E 2-2', ['dist. E 2-2'] ],

	['F 1-1',['dist. F 1-1'] ],
	['F 1-2',['dist. F 1-2'] ],
	['F 2-1',['dist. F 2-1'] ],
	['F 2-2',['dist. F 2-2'] ],

]

var AjaxRemoteGetData = {};

AjaxRemoteGetData.getDistinctArea = function() {
	
	

	var map = {};
	var arr = ['Distric'];
	for(i=1,j=storage.hospital.length; i<j ; i++){
		var _d = storage.hospital[i][0];
		map[_d] =1;
	}
	for( k in map){
		
		arr.push(k);

	}
	
	return arr;
}
AjaxRemoteGetData.getLeveByArea  = function( area ){
	
	
	var map = {};
	var arr = ['Level'];
	for(i=1,j=storage.hospital.length; i<j ; i++){

		var _area = storage.hospital[i][0];
		var _d = storage.hospital[i][1];
		if(area == _area){
			map[_d] = 1;
		}
	}
	for( k in map){
		arr.push(k);

	}
	
	return arr;
}
AjaxRemoteGetData.getNameByAreaAndLevel = function( area , level ){
	
	var map = {};
	var arr = ['Name'];
	for(i=1,j=storage.hospital.length; i<j ; i++){

		var _area = storage.hospital[i][0];
		var _level= storage.hospital[i][1];
		var _d = storage.hospital[i][3];
		if(level == _level && area == _area ){
			map[_d] = 1;
		}
	}
	for( k in map){
		arr.push(k);

	}
	
	return arr;
}
AjaxRemoteGetData.getDepartmentArrByHospitalName = function( area,level,hospitalName ){
	
	var map = {};
	var arr = ['Department'];
	for(i=1,j=storage.department.length; i<j ; i++){

		var _hospitalName = storage.department[i][0];
		var _d = storage.department[i][1];
		if(hospitalName == _hospitalName ){
			map[_d] = 1;
		}
	}
	for( k in map){
		arr.push(k);

	}
	
	return arr;
}

AjaxRemoteGetData.getDistinctType=function(){
	

	var map = {};
	var arr = ['医院类型'];
	for(i=1,j=storage.hospital.length; i<j ; i++){
		var _d = storage.hospital[i][2];
		map[_d] =1;
	}
	for( k in map){
		arr.push(k);

	}
	
	return arr;
}
AjaxRemoteGetData.getDistinctLevel=function(){
	

	var map = {};
	var arr = ['Level'];
	for(i=1,j=storage.hospital.length; i<j ; i++){
		var _d = storage.hospital[i][1];
		map[_d] =1;
	}
	for( k in map){
		arr.push(k);

	}
	
	return arr;
}
AjaxRemoteGetData.getHospitalArrByFilter=function(type,level,area){
	
	var map = {};
	var arr = ['医院列表'];
	for(i=1,j=storage.hospital.length; i<j ; i++){

		var _type= storage.hospital[i][2];
		var _area = storage.hospital[i][0];
		var _level= storage.hospital[i][1];

		var _d = storage.hospital[i][3];
		if( 
				(level == _level || level =='ALL') && 
				(area == _area || area == 'ALL' ) && 
				(type == _type || type == 'ALL')
			){
			arr.push(storage.hospital[i]);
		}
	}
	
	return arr;
}
AjaxRemoteGetData.changeHtml=function(index){
                                         var template = $('#template_pageTwo').html();
                                          var d=[];  
                                          for(var i=0; i<9; i++){ 
                                                    d[i]=storage.hospital[index+1][i] ;                                                
                                          }//第一个for循环                                      
                                          
                                            var objectData={
                                                 "area":d[0],"level":d[1],"type":d[2],"name":d[3],"address":d[4],"phone":d[5],"imgUrl":d[6],"time":d[7],"web":d[8]
                                            } 
                                                     
										   var html = template;
										   
                                          for( k in objectData ){
                                                var v = objectData[k];
                                                var html = html.replace('{'+k+'}',v);
										   }   
										   
                                           $('#details .wrap').empty();
                                           $('#details .wrap').append(html);      


}
