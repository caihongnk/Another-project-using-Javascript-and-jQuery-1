$(function(){




                                          $(":input") .on("focus",function(){ $(this).attr("placeholder"," ")   });         //搜索条
                                          var z=1;
                                          $('select[name="name"]').on("change",function(){           
                                                                 
                                          	                       var val=$(this).val();
                                          	                       var len=storage.hospital.length-1;
                                          	                       for(var i=0; i<len; i++){
                                                                                        if(storage.hospital[i][3] ==val){
                                                                                        	        z=i-1;
                                                                                        }
                                          	                       }
                                        	                       
                                          })




                                          $('.ui-cascading .submit input').on("click",function(){
                                                                  window.location.href="pageTwo.html?"+encodeURI(z);
                                          })









})		          
                                          


	