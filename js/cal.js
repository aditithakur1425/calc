var slidertotscore = document.getElementById("totscore");
var aftpoints=182;
var selectedvalue;
var aw_total=0;
varbadges_array_total=[];
aw_total_array=[];
$('#active_duty').css('display','none') ;
$('#sgt_duty').css('display','none') ;
document.getElementById("demo").innerHTML=182;
// Update the current slider value (each time you drag the slider handle)
slidertotscore.oninput = function() {
  aftpoints = this.value;
  document.getElementById("demo").innerHTML=this.value;;
  
}

function cal(){

            var radioValue = $("input[name='frstchoice']:checked").val();

            if(radioValue){

                selectedvalue = radioValue;

            }
            else{
                selectedvalue = "sgt"; 
            }
           
            calpoints();
}

function calpoints(){
  
var aftpoints_final ;
    //aftpoints=parseInt($('#totscore').autoNumeric('get'));
    if(selectedvalue=="sgt"){
      $('#active_duty').css('display','block') ;
      $('#sgt_duty').css('display','none') ;
        $('#topheading').html("SGT / E-5") ;
        if(aftpoints<180){
          aftpoints_final=0 ;
        }

        else if(aftpoints > 179 && aftpoints<240){
            aftpoints_final=aftpoints-140 ;
          }
          else if(aftpoints > 239 && aftpoints<270){
            aftpoints_final=aftpoints-130 ;
          }
          else {
            aftpoints_final=aftpoints-120 ;
          }
          w_1=parseInt($('#w_1').autoNumeric('get'));
          var w_1_array = [33, 40, 48,55,63,70,78,85,93,100,108,115,123,130,138,153,153,160];
          var w_1_final ;
         if(w_1<23)
         {
            w_1_final=0;
         }
         else{
            w_1_final = w_1_array[w_1-23] ; 
         }


         w_2=parseInt($('#w_2').autoNumeric('get'));
         var w_2_array = [33,33,38,38,38,38,44,44,44,44,50,50,50,50,57,57,57,57,64,64,64,64,64,71,71,71,71,78,78,78,78,85,85,85,85,91,91,91,91,98,98,98,98,105,105,105,105,112,112,112,119,119,119,125,125,125,125,132,132,132,132,139,139,139,139,146,146,146,146,153,153,153,153,160];
         var w_2_final ;
        if(w_2<139)
        {
           w_2_final=0;
        }
        else{
           w_2_final = w_2_array[w_2-139] ; 
        }
        
        w_3=parseInt($('#w_3').autoNumeric('get'));
        var w_3_array = [33,43,52,61,70,79,88,97,106,115,124,133,142,151,160];
        var w_3_final ;
       if(w_3<16)
       {
          w_3_final=0;
       }
       else{
          w_3_final = w_3_array[w_3-16] ; 
       }

       w_4=parseInt($('#w_4').autoNumeric('get'));
       var w_4_array = [33,43,52,61,70,79,88,97,106,115,124,133,142,151,160];
       var w_4_final ;
      if(w_4<24)
      {
         w_4_final=0;
      }
      else{
         w_4_final = w_4_array[w_4-24] ; 
      }
      w_5=parseInt($('#w_5').autoNumeric('get'));
      var w_5_array = [33,41,48,55,62,69,76,83,90,97,104,111,118,125,132,139,146,153,160];
      var w_5_final ;
     if(w_5<70)
     {
        w_5_final=0;
     }
     else{
        w_5_final = w_5_array[w_5-70] ; 
     }  
     w_6=parseInt($('#w_6').autoNumeric('get'));
     var w_6_array = [33,41,48,55,62,69,76,83,90,97,104,111,118,125,132,139,146,153,160];
     var w_6_final ;
    if(w_6<210)
    {
       w_6_final=0;
    }
    else{
       w_6_final = w_6_array[w_6-210] ; 
    } 

    w_7=parseInt($('#w_7').autoNumeric('get'));
    var w_7_array = [33,43,52,60,69,77,85,94,102,110,119,127,135,144,152,160];
    var w_7_final ;
   if(w_7<35)
   {
      w_7_final=0;
   }
   else{
      w_7_final = w_7_array[w_7-35] ; 
   }

    }


else{
  $('#active_duty').css('display','none') ;
  $('#sgt_duty').css('display','block') ;
    $('#topheading').html("SSG / E-6") ;
    if(aftpoints<180){
        aftpoints_final=0 ;
      }

      else if(aftpoints > 179 && aftpoints<184){
          aftpoints_final=15 ;
        }
        else if(aftpoints >183 && aftpoints<187){
          aftpoints_final=16 ;
        }
        else if(aftpoints >186 && aftpoints<189){
            aftpoints_final=17 ;
          }
          else if(aftpoints >188 && aftpoints<191){
            aftpoints_final=18 ;
          }
          else if(aftpoints >190 && aftpoints<193){
            aftpoints_final=19 ;
          }
          else if(aftpoints >192 && aftpoints<195){
            aftpoints_final=20 ;
          }
          else if(aftpoints >194 && aftpoints<197){
            aftpoints_final=21 ;
          }
          else if(aftpoints >196 && aftpoints<199){
            aftpoints_final=22 ;
          }
          else if(aftpoints >198 && aftpoints<201){
            aftpoints_final=23 ;
          }

          else if(aftpoints >200 && aftpoints<203){
            aftpoints_final=24 ;
          }
          else if(aftpoints >202 && aftpoints<205){
            aftpoints_final=25 ;
          }
          else if(aftpoints >204 && aftpoints<207){
            aftpoints_final=26 ;
          }


          else if(aftpoints >206 && aftpoints<209){
            aftpoints_final=27 ;
          }
          else if(aftpoints >208 && aftpoints<211){
            aftpoints_final=28 ;
          }
          else if(aftpoints >210 && aftpoints<213){
            aftpoints_final=29 ;
          }
          else if(aftpoints >212 && aftpoints<215){
            aftpoints_final=30 ;
          }
          else if(aftpoints >214 && aftpoints<217){
            aftpoints_final=31 ;
          }
          else if(aftpoints >216 && aftpoints<219){
            aftpoints_final=32;
          }
          else if(aftpoints >218 && aftpoints<221){
            aftpoints_final=33 ;
          }
          else if(aftpoints >220 && aftpoints<223){
            aftpoints_final=34 ;
          }
          else if(aftpoints >222 && aftpoints<225){
            aftpoints_final=35 ;
          }
          else if(aftpoints >224 && aftpoints<227){
            aftpoints_final=36 ;
          }
          else if(aftpoints >226 && aftpoints<229){
            aftpoints_final=37;
          }
          else if(aftpoints >228 && aftpoints<231){
            aftpoints_final=38 ;
          }
          else if(aftpoints >230 && aftpoints<233){
            aftpoints_final=39 ;
          }
          else if(aftpoints >232 && aftpoints<235){
            aftpoints_final=40;
          }
          else if(aftpoints >234 && aftpoints<237){
            aftpoints_final=41 ;
          }


          else if(aftpoints >236 && aftpoints<240){
            aftpoints_final=aftpoints-195 ;
          }

          else if(aftpoints >239 && aftpoints<270){
            aftpoints_final=aftpoints-180 ;
          }
        

        else {
            aftpoints_final=aftpoints-165 ;
        }

        w_1=parseInt($('#w_1').autoNumeric('get'));
        var w_1_array = [28,32,36,40,44,48,52,56,63,70,77,84,91,98,101,104,107,110];
        var w_1_final ;
       if(w_1<23)
       {
          w_1_final=0;
       }
       else{
          w_1_final = w_1_array[w_1-23] ; 
       }


       w_2=parseInt($('#w_2').autoNumeric('get'));
       var w_2_array = [28,28,30,30,30,30,34,34,34,34,38,38,38,38,42,42,42,42,46,46,46,46,46,50,50,50,50,54,54,54,54,58,58,58,58,62,62,62,62,67,67,67,67,72,72,72,72,77,77,77,82,82,82,87,87,87,87,92,92,92,92,97,97,97,97,102,102,102,102,107,107,107,107,110];
       var w_2_final ;
      if(w_2<139)
      {
         w_2_final=0;
      }
      else{
         w_2_final = w_2_array[w_2-139] ; 
      }
      
      w_3=parseInt($('#w_3').autoNumeric('get'));
      var w_3_array = [28,32,36,40,44,49,54,63,72,79,86,95,104,107,110];
      var w_3_final ;
     if(w_3<16)
     {
        w_3_final=0;
     }
     else{
        w_3_final = w_3_array[w_3-16] ; 
     }

     w_4=parseInt($('#w_4').autoNumeric('get'));
     var w_4_array = [28,32,37,41,46,50,55,60,65,71,77,82,88,93,99,104,110];
     var w_4_final ;
    if(w_4<24)
    {
       w_4_final=0;
    }
    else{
       w_4_final = w_4_array[w_4-24] ; 
    }
    w_5=parseInt($('#w_5').autoNumeric('get'));
    var w_5_array = [28,32,36,40,44,48,52,56,60,65,70,75,80,85,90,95,100,105,110];
    var w_5_final ;
   if(w_5<70)
   {
      w_5_final=0;
   }
   else{
      w_5_final = w_5_array[w_5-70] ; 
   }  
   w_6=parseInt($('#w_6').autoNumeric('get'));
   var w_6_array = [28,32,36,40,44,48,52,56,60,65,70,75,80,85,90,95,100,105,110];
   var w_6_final ;
  if(w_6<210)
  {
     w_6_final=0;
  }
  else{
     w_6_final = w_6_array[w_6-210] ; 
  } 

  w_7=parseInt($('#w_7').autoNumeric('get'));
  var w_7_array = [28,32,38,42,48,52,59,64,71,76,83,88,95,100,105,110];
  var w_7_final ;
 if(w_7<35)
 {
    w_7_final=0;
 }
 else{
    w_7_final = w_7_array[w_7-35] ; 
 }

}

// for weapons

w_final=w_1_final+w_2_final+w_3_final+w_4_final+w_5_final+w_6_final+w_7_final;
if(aftpoints_final>180){
    aftpoints_final=180;
}

if(selectedvalue=="sgt"){
  if(w_final>160){
    w_final=160;
}
else{
  if(w_final>110){
    w_final=110;
}
}
//weapons part ends awards start
}

aw_array=[35,35,30, 30,25,25, 25, 25, 20, 20, 20, 10, 10, 10, 10, 10,10];
for(let i=1;i<18;i++){
  
  aw_total_array[i-1] =parseInt($('#awnum_'+i).autoNumeric('get'))*aw_array[i-1] ;
  
}
aw_total= aw_total_array.reduce((a, b) => a + b, 0) ;
// awards complete badges start
badges_array=[30,30,30,30,30,30,20,20,20,20,20,20,20,15,15,15,15,15,15,15,15,15,15,15,15,15,15,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
badges_total=0;
  for(let j=1;j<46;j++){
    if ($('#ba_'+j).is(':checked')) {
      
     badges_total +=  badges_array[j-1];
      
  }
    }
    //badges_total=badges_array_total.reduce((a, b) => a + b, 0) ;
    //badges complete certificates start
    certnum = parseInt($('#certnum').autoNumeric('get')) ;
    if(certnum>4){
      certnum=4;
    }
    certificate_total= certnum *5;
//ai started
ai_total=0;
if ($('#ai_1').is(':checked')) {
      
  ai_total +=  20;
   
}
if ($('#ai_2').is(':checked')) {
      
  ai_total +=  25;
   
}
 if($('#ai_3').is(':checked')){
  ai_total +=  30;
}

total_awards= aw_total+badges_total+certificate_total+ai_total;
if(selectedvalue=="sgt"){
  if(total_awards>125){
    total_awards=125;
  }
}
else{
  if(total_awards>165){
    total_awards=165;
  }
}
//awards ends military achievement starts
ma_total=0;
if ($('#ma_1').is(':checked')) {
      
  ma_total +=  20;
  
}
if ($('#ma_2').is(':checked')) {
      
  ma_total +=  40;
  
}
if ($('#ma_3').is(':checked')) {
      
  ma_total +=  40;
  
}
if ($('#ma_4').is(':checked')) {
      
  ma_total +=  40;
  
}
if ($('#ma_5').is(':checked')) {
      
  ma_total +=  20;
  
}
num_weeks_total= parseInt($('#num_weeks').autoNumeric('get'))*4;
num_hours_total= parseInt($('#num_hours').autoNumeric('get'))/5;

if(selectedvalue=="sgt"){
  if(num_weeks_total>80){
    num_weeks_total=80;
  }
  if(num_hours_total>80){
    num_hours_total=80;
  }
}
else{
  if(num_weeks_total>90){
    num_weeks_total=90;
  } 
  if(num_hours_total>90){
    num_hours_total=90;
  } 
}

military_education_total=ma_total+num_weeks_total+num_hours_total ;
if(selectedvalue=="sgt"){
  if(military_education_total>200){
    military_education_total=200;
  }
}
else{
  if(military_education_total>220){
    military_education_total=220;
  }
}
// civilian starts
num_semester_hours_total= parseInt($('#num_semester_hours').autoNumeric('get'))*2;
num_credit_hours_total= parseInt($('#num_credit_hours').autoNumeric('get'))*2;
ce_total=0;
if ($('#ce_1').is(':checked')) {
      
  ce_total +=  20;
   
}
if ($('#ce_2').is(':checked')) {
      
  ce_total +=  20;
  
}
ce_text_total=0;
if($('#ca_text_1').val() !="")
{
  ce_text_total +=10;
}
if($('#ca_text_2').val() !="")
{
  ce_text_total +=10;
}
if($('#ca_text_3').val() !="")
{
  ce_text_total +=10;
}
if($('#ca_text_4').val() !="")
{
  ce_text_total +=10;
}
if($('#ca_text_5').val() !="")
{
  ce_text_total +=10;
}
tgl=0;
if ($('#tg1').is(':checked')) {
      
  tgl =  25;
   
}

civilian_total=num_semester_hours_total+num_credit_hours_total+ce_total+ce_text_total+tgl;
if(selectedvalue=="sgt"){
  if(civilian_total>135){
    civilian_total=135;
  }
}
else{
  if(civilian_total>60){
    civilian_total=160;
  }
}
}

function awards_disp(){
  for(let i=1;i<18;i++){
    $('#awtd_'+i).css('display','none');
    }
  for(let i=1;i<18;i++){
    $('#aw_'+i).bind('click', function() {
      if ($('#aw_'+i).is(':checked')) {
        $('#awtd_'+i).css('display','block');
        
    } else {
      $('#awtd_'+i).css('display','none');
      $('#awnum_'+i).autoNumeric('set',0)
    }
   
    });
    //$('#awtd_'+i).css('display','none');
  }
}
function badges_disp(){
  badges_array=[30,30,30,30,30,30,20,20,20,20,20,20,20,15,15,15,15,15,15,15,15,15,15,15,15,15,15,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
  for(let i=1;i<46;i++){
    $('#ba_'+i).bind('click', function() {
      if ($('#ba_'+i).is(':checked')) {
        badges_array_total[i-1] =  badges_array[i-1];
        
    } else {
      badges_array_total[i-1] = 0;
    }
   
    });
    //$('#awtd_'+i).css('display','none');
  }
}