var theIndex=19;

$(window).on("click",function(){
      return false;
})


$(function () {

	//	0. 给出所有的筛选条件
	var arrConditionArea = AjaxRemoteGetData.getDistinctArea().slice(1);
	var arrConditionLevel = AjaxRemoteGetData.getDistinctLevel().slice(1);
	var arrConditionType = AjaxRemoteGetData.getDistinctType().slice(1);
	var aTag = $('<a class="condition condition_focus" href="#">ALL</a>')

	//$('.filter .group > .condition').remove();
	
	$.each(arrConditionArea,function(i,item){
		var c = $('<a class="condition distric" href="#">'+item+'</a>');
		$('.filter .group .aTag').eq(2).append(c);
	})
	//$('.filter .group').eq(2).append(aTag);

	$.each(arrConditionLevel,function(i,item){
		var c = $('<a class="condition" href="#">'+item+'</a>');
		$('.filter .group .aTag').eq(1).append(c);
	})
	//$('.filter .group').eq(1).append(aTag);

	$.each(arrConditionType,function(i,item){
		var c = $('<a class="condition" href="#">'+item+'</a>');
		$('.filter .group .aTag').eq(0).append(c);
	})
	//$('.filter .group').eq(0).append(aTag);


             $('#details wrap').on('replaceHtml',function(){
                         alert("replace")

             })
             

	//	1. 筛选条件事件监听 & 动态获取新的数据 AjaxRemoteGetData.getHospitalArrByFilter
	var DataHospital = [];

	$('.filter')
		.on('initEvent',function(){

			var filter = $(this);
			filter.find('.condition').on('click',function(){

				var condition = $(this);
				var group = condition.parents('.group').eq(0);
				group.find('.condition').removeClass('condition_focus')
				condition.addClass('condition_focus');
				
				filter.triggerHandler('reloadData');
				return false;
			})

			filter.triggerHandler('reloadData');
		})
		.on('reloadData',function(){

			var type = $('.filter .group').eq(0).find('.condition_focus').text();
			var level = $('.filter .group').eq(1).find('.condition_focus').text();
			var area = $('.filter .group').eq(2).find('.condition_focus').text();

			DataHospital = AjaxRemoteGetData.getHospitalArrByFilter(type,level,area).slice(1);
			$('.datalist').triggerHandler('render');
			console.log(DataHospital)
		})
	
	//	2. 分页设置事件监听 & 处理数据渲染
	var pageSize = 3; //	每页显示3条数据
	var pageCount = 0 ; // 总共n页
	var currentPage =0 ; // 当前显示第n页，0=1页

	var template2 = $('#template_pageTwo').html();
	var template = $('#template_datalist_ite').html();

	$('.datalist')

		.on('render',function(){

			var datalist =$(this);
			datalist.empty();
			//var DataHospital = DataHospital.slice( currentPage*3 , (currentPage+1)*pageSize );

			//	循环所有数据，列表数据。
			for(i=0,j=DataHospital.length;i<j;i++){

				        var d = DataHospital[i];
						var objectData = {
								'area':d[0],'level':d[1],'type':d[2],
								'name':d[3],'address':d[4],'phone':d[5],
								'imgUrl':d[6],'time':d[7]
						}

				        var html = template;

						for( k in objectData ){
							var v = objectData[k];
							html = html.replace('{'+k+'}',v);
						}
                                           console.log("append")
		                 datalist.append(html);
                                           datalist.find('.button').
                                                       on("click",function(){
                                                            
                                                            var str=$(this).parent().find('.name').text();
                                                            var name=str.slice(0,12);
                                                            
                                                            var newname=$.trim( name );
                                                            
                                                            for(var i=0; i<DataHospital.length; i++){
                                                                            if( DataHospital[i][3]==newname){
                                                                            console.log(i)	         
                                                                                             window.location.href="MobilePageTwo.html?"+encodeURI(i);
                                                                             } 

                                                            }//for

                                             })//-----------on-----------
                                            
			}//


		})

             
	$('.filter').triggerHandler('initEvent');
	

})