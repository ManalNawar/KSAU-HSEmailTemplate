var Department_Name;
var Department_URL;
var Phone_Number;
var Affected_Users;
var Department_Address;
var Email_Subject;
var Important_Date;
var RedLines;
var Start_at;
var End_at;
var EmailContent;
var Preview_Area;
var selected_template="Announcment_Letter";




function  Preview()
{

    if(selected_template=="Announcment_Letter"){
            Preview_Announcment_Letter();}
    else if(selected_template=="Event_Invitation"){
            Preview_Event_Invitation();}
    else{
            Preview_Announcment_Letter();}



}


function Preview_Announcment_Letter(){

  Department_Name=document.getElementById("Department_Name").value;
 if(!Department_Name)
   Department_Name= document.getElementById("Department_Name").value ="COMJ-IT Department";

 Department_URL=document.getElementById("Department_URL").value;
 if(!Department_URL)
   Department_URL= document.getElementById("Department_URL").value ="http://comj.ksau-hs.edu.sa/";

 Phone_Number=document.getElementById("Phone_Number").value;
 if(!Phone_Number)
   Phone_Number= document.getElementById("Phone_Number").value ="5000";

 Affected_Users=document.getElementById("Affected_Users").value;
 if(!Affected_Users)
   Affected_Users= document.getElementById("Affected_Users").value ="All Users";

 Department_Address=document.getElementById("Department_Address").value;
 if(!Department_Address)
   Department_Address= document.getElementById("Department_Address").value ="P.O. Box 9515";

 Email_Subject=document.getElementById("Email_Subject").value;
 if(!Email_Subject)
   Email_Subject= document.getElementById("Email_Subject").value ="Voltage Test";

 Important_Date=document.getElementById("Important_Date").value;
 if(!Important_Date){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        Important_Date= document.getElementById("Important_Date").value =today;
 }


 RedLines=document.getElementById("RedLines").value;
 // if(!RedLines)
 //   RedLines= document.getElementById("RedLines").value ="fudge";

 Start_at=document.getElementById("Start_at").value;
 if(!Start_at){
   Start_at= document.getElementById("Start_at").value ="not specified";

}
 End_at=document.getElementById("End_at").value;
 if(!End_at)
   End_at= document.getElementById("End_at").value ="not specified";

 EmailContent=tinyMCE.activeEditor.getContent();
 //document.getElementById("EmailContent").value;
  $('#collapseFour').collapse("show");


Preview_Area=document.getElementById("Preview_Area").innerHTML="\
<p class=MsoNormal><o:p>&nbsp;</o:p></p>\
<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=\"100%\"\
 style='width:100.0%;background:#ECECEC;border-collapse:collapse;mso-yfti-tbllook:\
 1184;mso-padding-alt:0in 0in 0in 0in'>\
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
  <td style='padding:0in 0in 0in 0in'>\
<div align=center>\
<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
 style='width:480.0pt;margin-left:7.5pt;border-collapse:collapse;mso-yfti-tbllook:\
 1184;mso-padding-alt:0in 0in 0in 0in'>\
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
  <td width=670 style='width:480.0pt;padding:0in 0in 0in 0in;height:15.0pt'></td>\
 </tr>\
 <tr style='mso-yfti-irow:1'>\
  <td width=670 style='width:480.0pt;padding:0in 0in 0in 0in'>\
  <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
   style='width:480.0pt;background:#AE8B32;border-collapse:collapse;\
   mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in' id=top-bar>\
   <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
    <td width=15 style='width:11.25pt;padding:0in 0in 0in 0in'></td>\
    <td width=350 style='width:262.5pt;padding:0in 0in 0in 0in'>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
     width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
     1184;mso-padding-alt:0in 0in 0in 0in'>\
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
      height:6.0pt'>\
      <td width=480.0pt style='width:262.5pt;padding:0in 0in 0in 0in;height:6.0pt'></td>\
     </tr>\
    </table>\
    <div>\
    <span class=MsoNormal style='text-align:center;font-size:16.0pt;font-family:\"Arial\",\"sans-serif\";\
    mso-fareast-font-family:\"Times New Roman\";color:#E7CBA3'>"+ Department_Name +"</span>\
    </div>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
     width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
     1184;mso-padding-alt:0in 0in 0in 0in'>\
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
      height:6.0pt'>\
      <td width=350 style='width:262.5pt;padding:0in 0in 0in 0in;height:6.0pt'></td>\
     </tr>\
    </table>\
    </td>\
    <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
    <td width=255 style='width:191.25pt;padding:0in 0in 0in 0in'>\
    <div align=right>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
     width=255 style='width:191.25pt;border-collapse:collapse;mso-yfti-tbllook:\
     1184;mso-padding-alt:0in 0in 0in 0in'>\
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
      height:6.0pt'>\
      <td width=255 style='width:191.25pt;padding:0in 0in 0in 0in;height:\
      6.0pt'></td>\
     </tr>\
    </table>\
    </div>\
    <p class=MsoNormal align=right style='text-align:right'><span\
    style='font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
    color:#E7CBA3;display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
    <div align=right>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
     style='border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:\
     0in 0in 0in 0in'>\
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
      <td style='padding:0in 0in 0in 0in'></td>\
     </tr>\
    </table>\
    </div>\
    <p class=MsoNormal align=right style='text-align:right'><span\
    style='font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
    color:#E7CBA3;display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
    <div align=right>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
     width=255 style='width:191.25pt;border-collapse:collapse;mso-yfti-tbllook:\
     1184;mso-padding-alt:0in 0in 0in 0in'>\
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
      height:6.0pt'>\
      <td width=255 style='width:191.25pt;padding:0in 0in 0in 0in;height:\
      6.0pt'></td>\
     </tr>\
    </table>\
    </div>\
    <p class=MsoNormal align=right style='text-align:right'><o:p></o:p></p>\
    </td>\
    <td width=15 style='width:11.25pt;padding:0in 0in 0in 0in'></td>\
   </tr>\
  </table>\
  </td>\
 </tr>\
 <tr style='mso-yfti-irow:2'>\
  <td width=670 style='width:480.0pt;background:white;padding:0in 0in 0in 0in'\
  id=header>\
  <div style='margin-top:15.0pt'>\
  <img width=627 height=144\
  src=\"http://comj.ksau-hs.edu.sa/wp-content/uploads/2018/02/ksau-hs_logo_co.png\"\
  alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
  v:shapes=\"Picture_x0020_1\">\
  </div>\
  </td>\
 </tr>\
 <tr style='mso-yfti-irow:3;height:22.5pt'>\
  <td width=670 style='width:480.0pt;background:white;padding:0in 0in 0in 0in;\
  height:22.5pt'></td>\
  </tr>\
  <tr style='mso-yfti-irow:4' id=simple-content-row>\
   <td width=670 style='width:480.0pt;background:white;padding:0in 0in 0in 0in'>\
   <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
    style='width:480.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;\
    mso-padding-alt:0in 0in 0in 0in'>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
     <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
     <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
      width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
      1184;mso-padding-alt:0in 0in 0in 0in'>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <p class=article-title>Affected Users:<o:p></o:p></p>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <div style='margin-bottom:13.5pt'>\
         <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
         10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
         color:#444444'>"+ Affected_Users +"<o:p></o:p></span></p>\
         </div>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
      </tr>\
     </table>\
     <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
     mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
      width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
      1184;mso-padding-alt:0in 0in 0in 0in'>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <p class=article-title>Subject:<o:p></o:p></p>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <div style='margin-bottom:13.5pt'>\
         <p class=MsoNormal><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\"'>"+Email_Subject+"<o:p></o:p></span></p>\
         </div>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
      </tr>\
     </table>\
     <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
     mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
      width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
      1184;mso-padding-alt:0in 0in 0in 0in'>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <p class=article-title>Date:<o:p></o:p></p>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <div style='margin-bottom:13.5pt'>\
         <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
         10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
         color:#444444'>"+Important_Date+"<o:p></o:p></span></p>\
         </div>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
      </tr>\
     </table>\
     <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
     mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
      width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
      1184;mso-padding-alt:0in 0in 0in 0in'>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <p class=article-title>Start Time:<o:p></o:p></p>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <div style='margin-bottom:13.5pt'>\
         <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
         10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
           color:#444444'>"+Start_at+"<o:p></o:p></span></p>\
         </div>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
      </tr>\
     </table>\
     <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
     mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
      width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
      1184;mso-padding-alt:0in 0in 0in 0in'>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <p class=article-title>End Time:<o:p></o:p></p>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
       <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
        width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
        1184;mso-padding-alt:0in 0in 0in 0in'>\
        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
         <div style='margin-bottom:13.5pt'>\
         <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
         10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
         color:#444444'>"+End_at+"<o:p></o:p></span></p>\
         </div>\
         </td>\
        </tr>\
        <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
         <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
         height:7.5pt'></td>\
        </tr>\
       </table>\
       </td>\
      </tr>\
     </table>\
     <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
     mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
      width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
      1184;mso-padding-alt:0in 0in 0in 0in'>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
       <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
       <p class=article-title align=center style='text-align:center'><span\
       style='color:red'>"+RedLines+"</span><o:p></o:p></p>\
       </td>\
      </tr>\
      <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>\
       <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
      <p>"+EmailContent+"</p>\
       </td>\
      </tr>\
      <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>\
       <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
       <p class=article-title align=center style='text-align:center'>We\
       apologize for any inconvenience. <o:p></o:p></p>\
       </td>\
      </tr>\
     </table>\
     <p class=MsoNormal><o:p></o:p></p>\
     </td>\
     <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
    </tr>\
   </table>\
   </td>\
  </tr>\
  <tr style='mso-yfti-irow:6'>\
   <td width=670 style='width:480.0pt;padding:0in 0in 0in 0in'>\
   <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
    style=' table-layout: fixed; width:480.0pt; height:10pt;background:#22703C;border-collapse:separate;border-spacing: 0 0;\
    mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in' id=footer>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.5pt'>\
     <td colspan=12></td>\
    </tr>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:23.5pt'>\
      <td colspan=12 align=center ><span style='font-size:14.0pt;color:#CCB382;text-decoration:underline'>"+Department_Name+"</span></td>\
    </tr>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:23.5pt'>\
      <td colspan=12 align=center valign=top ><span style='color:white;font-size:14.0pt'>"+Department_Address+"</span></td>\
    </tr>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:23.5pt'>\
     <td align=center style=\"padding-left:280px\"colspan=4></td>\
     <td style=\"max-width=20;padding-right:10px\" colspan=1 align=right valign=top><img width=20 height=22\
     src=\"images\\phone_icon_small.png\"\
     v:shapes=\"Picture_x0020_1\"></td>\
     <td style=\"padding-right:40px\" colspan=1 align=left valign=top ><span style='display: inline-block;font-size:8.0pt;color:white;text-decoration:none;text-underline:none'>\
     "+Phone_Number+"</span></td>\
     <td style=\"max-width=20;padding-right:10px\"  colspan=1 align=right valign=top><img width=20 height=22\
     src=\"images\\email_icon_small.png\"\
     v:shapes=\"Picture_x0020_1\"></td>\
     <td align=left colspan=3 valign=top ><span style='display: inline-block;font-size:8.0pt;color:white;text-decoration:none;text-underline:none'>"+Department_URL+"</span></td>\
      <td align=center colspan=2></td>\
    </tr>\
    </tr>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:5.5pt'>\
     <td colspan=12></td>\
    </tr>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:23.5pt'>\
     <td style=\"padding-left:230px\" colspan=4></td>\
     <td  colspan=1 align=center valign=top ><img width=20 height=22\
     src=\"images\\facebook_icon_small.png\"\
     v:shapes=\"Picture_x0020_1\"></td>\
     <td colspan=1 align=center valign=top ><img width=20 height=22\
     src=\"images\\twitter_icon_small.png\"\
     v:shapes=\"Picture_x0020_1\"></td>\
     <td  colspan=1 align=center valign=top><img width=20 height=22\
     src=\"images\\instagram_icon_small.png\"\
     v:shapes=\"Picture_x0020_1\"></td>\
     <td colspan=1 align=center valign=top><img width=20 height=22\
     src=\"images\\youtube_icon_small.png\"\
     v:shapes=\"Picture_x0020_1\"></td>\
       <td style=\"padding-right:250px\" colspan=4></td>\
    </tr>\
    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.5pt'>\
     <td colspan=12></td>\
    </tr>\
   </table>\
   </td>\
  </tr>\
  <tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:45.0pt'>\
   <td width=670 style='width:480.0pt;padding:0in 0in 0in 0in;height:45.0pt'></td>\
  </tr>\
 </table>\
 </div>\
 </td>\
</tr>\
 </table></div><br>";

}



function Preview_Event_Invitation(){


    Department_Name=document.getElementById("Department_Name").value;
   if(!Department_Name)
     Department_Name= document.getElementById("Department_Name").value ="COMJ I.T Department";

   Department_URL=document.getElementById("Department_URL").value;
   if(!Department_URL)
     Department_URL= document.getElementById("Department_URL").value ="http://comj.ksau-hs.edu.sa/";

   Phone_Number=document.getElementById("Phone_Number").value;
   if(!Phone_Number)
     Phone_Number= document.getElementById("Phone_Number").value ="5000";

   Department_Address=document.getElementById("Department_Address").value;
   if(!Department_Address)
     Department_Address= document.getElementById("Department_Address").value ="P.O. Box 9515";

   Email_Subject=document.getElementById("Email_Subject").value;
   if(!Email_Subject)
     Email_Subject= document.getElementById("Email_Subject").value ="";




   EmailContent=tinyMCE.activeEditor.getContent();
   //document.getElementById("EmailContent").value;
      $('#collapseFour').collapse("show");


  Preview_Area=document.getElementById("Preview_Area").innerHTML="\
  <div class=WordSection1>\
  <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=\"100%\"\
   style='width:100.0%;background:#ECECEC;border-collapse:collapse;mso-yfti-tbllook:\
   1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
   <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
    <td style='padding:0cm 0cm 0cm 0cm'>\
    <div align=center>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
     style='width:480.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;\
     mso-padding-alt:0cm 0cm 0cm 0cm'>\
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
      <td width=670 style='width:480.0pt;padding:0cm 0cm 0cm 0cm;height:15.0pt'></td>\
     </tr>\
     <tr style='mso-yfti-irow:1'>\
      <td width=670 style='width:480.0pt;padding:0cm 0cm 0cm 0cm'>\
      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
       style='width:480.0pt;background:#AE8B32;border-collapse:collapse;\
       mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm' id=top-bar>\
       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
        <td width=15 style='width:11.25pt;padding:0cm 0cm 0cm 0cm'></td>\
        <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm'>\
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
         width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
         1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
          height:6.0pt'>\
          <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm;height:6.0pt'></td>\
         </tr>\
        </table>\
        <div>\
        <p class=MsoNormal><span style='text-align:center;font-size:9.0pt;font-family:\"Arial\",sans-serif;\
        mso-fareast-font-family:\"Times New Roman\";color:#E7CBA3'>"+Department_Name+"<o:p></o:p></span></p>\
        </div>\
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
         width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
         1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
          height:6.0pt'>\
          <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm;height:6.0pt'></td>\
         </tr>\
        </table>\
        </td>\
       </tr>\
      </table>\
      </td>\
     </tr>\
     <tr style='mso-yfti-irow:2'>\
      <td style='width:480.0pt;background:white'\
      id=header>\
      <div align=center >\
      <img width=600 height=175 Style='margin-right:5pt;margin-left:5pt;max-width=525px;max-height=157px'\
      src=\"http://comj.ksau-hs.edu.sa/wp-content/uploads/2018/02/ksau-hs_logo_co.png\"\
      alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
      v:shapes=\"Picture_x0020_1\">\
      </div>\
      </td>\
     </tr>\
     <tr style='mso-yfti-irow:3;height:22.5pt'>\
      <td width=670 style='width:480.0pt;background:white;padding:0cm 0cm 0cm 0cm;\
      height:22.5pt'></td>\
     </tr>\
     <tr style='mso-yfti-irow:4' id=simple-content-row>\
      <td width=670 style='width:480.0pt;background:white;padding:0cm 0cm 0cm 0cm'>\
      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
       style='width:480.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;\
       mso-padding-alt:0cm 0cm 0cm 0cm'>\
       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
        <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm'></td>\
        <td width=670 style='width:480.0pt;padding:0cm 0cm 0cm 0cm'>\
        <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
        mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
         width=592 style='width:443.65pt;border-collapse:collapse;mso-yfti-tbllook:\
         1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
          <td width=592 style='width:443.65pt;padding:0cm 0cm 0cm 0cm'>\
          <p class=abdo-title style='text-align:justify'><span\
          style='font-size:11.0pt'>"+EmailContent+"<span\
          dir=RTL></span><o:p></o:p></span></span></b></p>\
          </td>\
         </tr>\
        </table>\
        <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
        mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
         width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
         1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
          <td width=580 style='width:435.0pt;padding:0cm 0cm 0cm 0cm'></td>\
         </tr>\
        </table>\
        <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
        mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
         width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
         1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
          <td width=580 style='width:435.0pt;padding:0cm 0cm 0cm 0cm'></td>\
         </tr>\
        </table>\
        <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
        mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
         width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
         1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
          <td width=580 style='width:435.0pt;padding:0cm 0cm 0cm 0cm'>\
          <p class=hassan-title style='margin-bottom:0cm;margin-bottom:.0001pt'><o:p></o:p></p>\
          </td>\
         </tr>\
        </table>\
        <p class=MsoNormal><span style='font-size:10.0pt'><o:p></o:p></span></p>\
        </td>\
        <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm'></td>\
       </tr>\
      </table>\
      </td>\
     </tr>\
     <tr style='mso-yfti-irow:5;height:11.25pt'>\
      <td width=670 style='width:480.0pt;background:white;padding:0cm 0cm 0cm 0cm;\
      height:11.25pt'></td>\
     </tr>\
     <tr style='mso-yfti-irow:6'>\
      <td width=670 style='width:480.0pt;padding:0cm 0cm 0cm 0cm'>\
      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=670\
       style='width:480.0pt;background:#22703C;border-collapse:collapse;\
       mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm' id=footer>\
       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:22.5pt'>\
        <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm;height:22.5pt'></td>\
       </tr>\
       <tr style='mso-yfti-irow:1'>\
        <td width=360 valign=top style='width:270.0pt;padding:0cm 0cm 0cm 0cm'></td>\
       </tr>\
       <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes;height:13.5pt'>\
        <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm;height:13.5pt'></td>\
       </tr>\
      </table>\
      </td>\
     </tr>\
     <tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:45.0pt'>\
      <td width=670 style='width:480.0pt;padding:0cm 0cm 0cm 0cm;height:45.0pt'></td>\
     </tr>\
    </table>\
    </div>\
    </td>\
   </tr>\
  </table>\
  <p class=MsoNormal><span lang=EN-US style='font-family:\"Times New Roman\",serif;\
  mso-fareast-font-family:\"Times New Roman\";mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>\
  <p class=MsoNormal><span lang=EN-US style='mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>\
  </div>";

}



function download(){

    Preview();
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "export.eml";
    var download_style="<Style>\
                        @font-face\
                         {font-family:Calibri;\
                         panose-1:2 15 5 2 2 2 4 3 2 4;\
                         mso-font-charset:0;\
                         mso-generic-font-family:swiss;\
                         mso-font-pitch:variable;\
                         mso-font-signature:-520092929 1073786111 9 0 415 0;}\
                       @font-face\
                         {font-family:Tahoma;\
                         panose-1:2 11 6 4 3 5 4 4 2 4;\
                         mso-font-charset:0;\
                         mso-generic-font-family:swiss;\
                         mso-font-pitch:variable;\
                         mso-font-signature:-520081665 -1073717157 41 0 66047 0;}\
                        /* Style Definitions */\
                        p.MsoNormal, li.MsoNormal, div.MsoNormal\
                         {mso-style-unhide:no;\
                         mso-style-qformat:yes;\
                         mso-style-parent:\"\";\
                         margin:0in;\
                         margin-bottom:.0001pt;\
                         mso-pagination:widow-orphan;\
                         font-size:11.0pt;\
                         font-family:\"Calibri\",\"sans-serif\";\
                         mso-ascii-font-family:Calibri;\
                         mso-ascii-theme-font:minor-latin;\
                         mso-fareast-font-family:Calibri;\
                         mso-fareast-theme-font:minor-latin;\
                         mso-hansi-font-family:Calibri;\
                         mso-hansi-theme-font:minor-latin;\
                         mso-bidi-font-family:Arial;\
                         mso-bidi-theme-font:minor-bidi;}\
                       a:link, span.MsoHyperlink\
                         {mso-style-noshow:yes;\
                         mso-style-priority:99;\
                         color:blue;\
                         mso-themecolor:hyperlink;\
                         /* text-decoration:underline;\
                       text-underline:single; */}\
                       a:visited, span.MsoHyperlinkFollowed\
                         {mso-style-noshow:yes;\
                         mso-style-priority:99;\
                         color:purple;\
                         mso-themecolor:followedhyperlink;\
                         text-decoration:underline;\
                         text-underline:single;}\
                       p.MsoAcetate, li.MsoAcetate, div.MsoAcetate\
                         {mso-style-noshow:yes;\
                         mso-style-priority:99;\
                         mso-style-link:\"Balloon Text Char\";\
                         margin:0in;\
                         margin-bottom:.0001pt;\
                         mso-pagination:widow-orphan;\
                         font-size:8.0pt;\
                         font-family:\"Tahoma\",\"sans-serif\";\
                         mso-fareast-font-family:Calibri;\
                         mso-fareast-theme-font:minor-latin;}\
                       span.BalloonTextChar\
                         {mso-style-name:\"Balloon Text Char\";\
                         mso-style-noshow:yes;\
                         mso-style-priority:99;\
                         mso-style-unhide:no;\
                         mso-style-locked:yes;\
                         mso-style-link:\"Balloon Text\";\
                         mso-ansi-font-size:8.0pt;\
                         mso-bidi-font-size:8.0pt;\
                         font-family:\"Tahoma\",\"sans-serif\";\
                         mso-ascii-font-family:Tahoma;\
                         mso-hansi-font-family:Tahoma;\
                         mso-bidi-font-family:Tahoma;}\
                       p.article-title, li.article-title, div.article-title\
                         {mso-style-name:article-title;\
                         mso-style-unhide:no;\
                         margin-top:0in;\
                         margin-right:0in;\
                         margin-bottom:13.5pt;\
                         margin-left:0in;\
                         line-height:18.0pt;\
                         mso-pagination:widow-orphan;\
                         font-size:13.5pt;\
                         font-family:\"Arial\",\"sans-serif\";\
                         mso-fareast-font-family:\"Times New Roman\";\
                         mso-fareast-theme-font:minor-fareast;\
                         color:#AE8B32;\
                         font-weight:bold;}\
                       p.footer-content-left, li.footer-content-left, div.footer-content-left\
                         {mso-style-name:footer-content-left;\
                         mso-style-unhide:no;\
                         margin-top:0in;\
                         margin-right:0in;\
                         margin-bottom:11.25pt;\
                         margin-left:0in;\
                         line-height:11.25pt;\
                         mso-pagination:widow-orphan;\
                         font-size:9.0pt;\
                         font-family:\"Times New Roman\",\"serif\";\
                         mso-fareast-font-family:\"Times New Roman\";\
                         mso-fareast-theme-font:minor-fareast;\
                         color:#E2E2E2;}\
                       span.EmailStyle21\
                         {mso-style-type:personal-compose;\
                         mso-style-noshow:yes;\
                         mso-style-unhide:no;\
                         mso-ansi-font-size:11.0pt;\
                         mso-bidi-font-size:11.0pt;\
                         font-family:\"Calibri\",\"sans-serif\";\
                         mso-ascii-font-family:Calibri;\
                         mso-ascii-theme-font:minor-latin;\
                         mso-fareast-font-family:Calibri;\
                         mso-fareast-theme-font:minor-latin;\
                         mso-hansi-font-family:Calibri;\
                         mso-hansi-theme-font:minor-latin;\
                         mso-bidi-font-family:Arial;\
                         mso-bidi-theme-font:minor-bidi;\
                         color:windowtext;}\
                       .MsoChpDefault\
                         {mso-style-type:export-only;\
                         mso-default-props:yes;\
                         font-size:10.0pt;\
                         mso-ansi-font-size:10.0pt;\
                         mso-bidi-font-size:10.0pt;\
                         font-family:\"Calibri\",\"sans-serif\";\
                         mso-ascii-font-family:Calibri;\
                         mso-ascii-theme-font:minor-latin;\
                         mso-fareast-font-family:Calibri;\
                         mso-fareast-theme-font:minor-latin;\
                         mso-hansi-font-family:Calibri;\
                         mso-hansi-theme-font:minor-latin;\
                         mso-bidi-font-family:Arial;\
                         mso-bidi-theme-font:minor-bidi;}\
                       @page WordSection1\
                         {size:8.5in 11.0in;\
                         margin:1.0in 1.0in 1.0in 1.0in;\
                         mso-header-margin:.5in;\
                         mso-footer-margin:.5in;\
                         mso-paper-source:0;}\
                       div.WordSection1\
                         {page:WordSection1;}\
                        table.MsoNormalTable\
                         {mso-style-name:\"Table Normal\";\
                         mso-tstyle-rowband-size:0;\
                         mso-tstyle-colband-size:0;\
                         mso-style-noshow:yes;\
                         mso-style-priority:99;\
                         mso-style-parent:\"\";\
                         mso-padding-alt:0in 5.4pt 0in 5.4pt;\
                         mso-para-margin:0in;\
                         mso-para-margin-bottom:.0001pt;\
                         mso-pagination:widow-orphan;\
                         font-size:10.0pt;\
                         font-family:\"Calibri\",\"sans-serif\";\
                         mso-ascii-font-family:Calibri;\
                         mso-ascii-theme-font:minor-latin;\
                         mso-hansi-font-family:Calibri;\
                         mso-hansi-theme-font:minor-latin;\
                         mso-bidi-font-family:Arial;\
                         mso-bidi-theme-font:minor-bidi;}\
                         </Style>";
    var emlCon="X-Unsent: 1 \n"+"Content-Type: text/html \nSubject: "+Email_Subject+" \n\n";
    a.href = "data:text/html,"+emlCon+"<html><body><p>"+download_style+"\n"+Preview_Area+"</p></body></html>"; // Grab the HTML
    a.click(); // Trigger a click on the element
}

function Choises(clicked_id){

  if(clicked_id=="Event_Invitation")
  {
    selected_template="Event_Invitation";
    $('#collapseFour').collapse("hide");
    $('#Affected_Users_Label').hide();
    $('#Affected_Users').hide();

    $('#Important_Date_Label').hide();
    $('#Important_Date').hide();

    $('#RedLines_Label').hide();
    $('#RedLines').hide();

    $('#Start_at_Label').hide();
    $('#Start_at').hide();

    $('#End_at_Label').hide();
    $('#End_at').hide();

    $('#Department_URL_Label').hide();
    $('#Department_URL').hide();

    // $("#Email_Subject_Label").addClass("aligncenter");
    // $("#Email_Subject").addClass("aligncenter");

  }
  else //if(clicked_id=="Announcment_Letter")
  {
    selected_template="Announcment_Letter";
        $('#collapseFour').collapse("hide");

      $('#Department_URL_Label').show();
      $('#Department_URL').show();

    $('#Affected_Users_Label').show();
    $('#Affected_Users').show();

    $('#Important_Date_Label').show();
    $('#Important_Date').show();

    $('#RedLines_Label').show();
    $('#RedLines').show();

    $('#Start_at_Label').show();
    $('#Start_at').show();

    $('#End_at_Label').show();
    $('#End_at').show();

  }
}




function bs_input_file() {
  $(".input-file").before(
    function() {
      if ( ! $(this).prev().hasClass('input-ghost') ) {
        var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
        element.attr("name",$(this).attr("name"));
        element.change(function(){
          element.next(element).find('input').val((element.val()).split('\\').pop());
        });
        $(this).find("button.btn-choose").click(function(){
          element.click();
        });
        $(this).find("button.btn-reset").click(function(){
          element.val(null);
          $(this).parents(".input-file").find('input').val('');
        });
        $(this).find('input').css("cursor","pointer");
        $(this).find('input').mousedown(function() {
          $(this).parents('.input-file').prev().click();
          return false;
        });
        return element;
      }
    }
  );
}
$(function() {
  bs_input_file();
});
