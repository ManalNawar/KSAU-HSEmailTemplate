var Department_Name;
var Department_URL;
var Phone_Number;
var Affected_Users;
var Department_Location;
var Department_Address;
var Email_Subject;
var Important_Date;
var RedLines;
var Start_at;
var End_at;
var EmailContent;
var Preview_Area;
var selected_template="Announcment_Letter";
var Twitter_Account;
var Fackbook_Account;
var Youtube_Account;
var news_image;



function loadFooter(){

  Twitter_Account=document.getElementById("Twitter_Account").value;
 if(!Twitter_Account)
   Twitter_Account= document.getElementById("Twitter_Account").value =" ";

 Fackbook_Account=document.getElementById("Fackbook_Account").value;
 if(!Fackbook_Account)
   Fackbook_Account= document.getElementById("Fackbook_Account").value =" ";

Youtube_Account=document.getElementById("Youtube_Account").value;
if(!Youtube_Account)
  Youtube_Account= document.getElementById("Youtube_Account").value =" ";

 Phone_Number=document.getElementById("Phone_Number").value;
 if(!Phone_Number)
   Phone_Number= document.getElementById("Phone_Number").value =" ";

 Department_Address=document.getElementById("Department_Address").value;
 if(!Department_Address)
 Department_Address= document.getElementById("Department_Address").value =" ";

}


function  Preview()
{

    // if(selected_template=="Announcment_Letter"){
    //         Preview_Announcment_Letter();}
    // else if(selected_template=="Event_Invitation"){
            Preview_Event_Invitation();//}
    // else if(selected_template=="News_Letter"){
    //         Preview_News_Letter();}
    // else{
    //         Preview_Announcment_Letter();}



}

//
// function Preview_Announcment_Letter(){
//
//   Department_Name=document.getElementById("Department_Name").value;
//  if(!Department_Name)
//    Department_Name= document.getElementById("Department_Name").value =" ";
//
// Department_Location=document.getElementById("Department_Location").value;
// if(!Department_Location)
//   Department_Location= document.getElementById("Department_Location").value =" ";
//
//  Phone_Number=document.getElementById("Phone_Number").value;
//  if(!Phone_Number)
//    Phone_Number= document.getElementById("Phone_Number").value =" ";
//
//  Affected_Users=document.getElementById("Affected_Users").value;
//  if(!Affected_Users)
//    Affected_Users= document.getElementById("Affected_Users").value =" ";
//
//  Department_URL=document.getElementById("Department_URL").value;
//  if(!Department_URL)
//    Department_URL= document.getElementById("Department_URL").value =" ";
//
//  Email_Subject=document.getElementById("Email_Subject").value;
//  if(!Email_Subject)
//    Email_Subject= document.getElementById("Email_Subject").value =" ";
//
//  Important_Date=document.getElementById("Important_Date").value;
//  if(!Important_Date){
//         // var today = new Date();
//         // var dd = today.getDate();
//         // var mm = today.getMonth()+1; //January is 0!
//         // var yyyy = today.getFullYear();
//         //
//         // if(dd<10) {
//         //     dd = '0'+dd
//         // }
//         //
//         // if(mm<10) {
//         //     mm = '0'+mm
//         // }
//         //
//         // today = mm + '/' + dd + '/' + yyyy;
//         Important_Date= document.getElementById("Important_Date").value =" ";//today;
//  }
//
//
//  RedLines=document.getElementById("RedLines").value;
//  // if(!RedLines)
//  //   RedLines= document.getElementById("RedLines").value ="fudge";
//
//  Start_at=document.getElementById("Start_at").value;
//  if(!Start_at){
//    Start_at= document.getElementById("Start_at").value =" ";
//
// }
//  End_at=document.getElementById("End_at").value;
//  if(!End_at)
//    End_at= document.getElementById("End_at").value =" ";
//
//  EmailContent=CKEDITOR.instances.EmailContent.document.getBody().getHtml();
//
//   loadFooter();
//
//   $('#collapseFour').collapse("show");
//
//
// Preview_Area=document.getElementById("Preview_Area").innerHTML="\
// <p class=MsoNormal><o:p>&nbsp;</o:p></p>\
// <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=\"100%\"\
//  style='width:100.0%;background:#ECECEC;border-collapse:collapse;mso-yfti-tbllook:\
//  1184;mso-padding-alt:0in 0in 0in 0in'>\
//  <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//   <td style='padding:0in 0in 0in 0in'>\
// <div align=center>\
// <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//  style='width:460.0pt;margin-left:7.5pt;border-collapse:collapse;mso-yfti-tbllook:\
//  1184;mso-padding-alt:0in 0in 0in 0in'>\
//  <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
//   <td width=600 style='width:460.0pt;padding:0in 0in 0in 0in;height:15.0pt'></td>\
//  </tr>\
//  <tr style='mso-yfti-irow:1'>\
//   <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
//   <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//    style='width:460.0pt;background:#AE8B32;border-collapse:collapse;\
//    mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm' id=top-bar>\
//    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//     <td width=15 style='width:5pt;padding:0cm 0cm 0cm 0cm'></td>\
//     <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm'>\
//     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//      width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
//      1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
//       height:6.0pt'>\
//       <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm;height:6.0pt'></td>\
//      </tr>\
//     </table>\
//     <div align=left>\
//     <p class=MsoNormal><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif;\
//     mso-fareast-font-family:\"Times New Roman\";color:#E7CBA3'>"+Department_Name+"<o:p></o:p></span></p>\
//     </div>\
//     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//      width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
//      1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
//       height:6.0pt'>\
//       <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm;height:6.0pt'></td>\
//      </tr>\
//     </table>\
//     </td>\
//    </tr>\
//   </table>\
//   </td>\
//  </tr>\
//  <tr style='mso-yfti-irow:2'>\
//   <td style='width:460.0pt;background:white'\
//   id=header>\
//   <div align=center >\
//   <img width=600 height=175 Style='margin-right:5pt;margin-left:5pt;max-width=525px;max-height=157px'\
//   src=\"http://comj.ksau-hs.edu.sa/wp-content/uploads/2018/02/ksau-hs_logo_co.png\"\
//   alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
//   v:shapes=\"Picture_x0020_1\">\
//   </div>\
//   </td>\
//  </tr>\
//  <tr style='mso-yfti-irow:3;height:22.5pt'>\
//   <td width=600 style='width:460.0pt;background:white;padding:0in 0in 0in 0in;\
//   height:22.5pt'></td>\
//   </tr>\
//   <tr style='mso-yfti-irow:4' id=simple-content-row>\
//    <td width=600 style='width:460.0pt;background:white;padding:0in 0in 0in 0in'>\
//    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//     style='width:460.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;\
//     mso-padding-alt:0in 0in 0in 0in'>\
//     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//      <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//      <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <p class=article-title>Affected Users:<o:p></o:p></p>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//        <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <div style='margin-bottom:13.5pt'>\
//          <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
//          10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
//          color:#444444'>"+ Affected_Users +"<o:p></o:p></span></p>\
//          </div>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
//      mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <p class=article-title>Title:<o:p></o:p></p>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//        <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <div style='margin-bottom:13.5pt'>\
//          <p class=MsoNormal><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\"'>"+Email_Subject+"<o:p></o:p></span></p>\
//          </div>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
//      mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <p class=article-title>Location:<o:p></o:p></p>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//        <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <div style='margin-bottom:13.5pt'>\
//          <p class=MsoNormal><span style='font-size:10.0pt;font-family:\"Arial\",\"sans-serif\"'>"+Department_Location+"<o:p></o:p></span></p>\
//          </div>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
//      mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <p class=article-title>Date:<o:p></o:p></p>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//        <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <div style='margin-bottom:13.5pt'>\
//          <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
//          10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
//          color:#444444'>"+Important_Date+"<o:p></o:p></span></p>\
//          </div>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
//      mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <p class=article-title>Start Time:<o:p></o:p></p>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//        <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <div style='margin-bottom:13.5pt'>\
//          <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
//          10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
//            color:#444444'>"+Start_at+"<o:p></o:p></span></p>\
//          </div>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
//      mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <p class=article-title>End Time:<o:p></o:p></p>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//        <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//        <td width=275 valign=top style='width:206.25pt;padding:0in 0in 0in 0in'>\
//        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//         width=275 style='width:206.25pt;border-collapse:collapse;mso-yfti-tbllook:\
//         1184;mso-padding-alt:0in 0in 0in 0in'>\
//         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in'>\
//          <div style='margin-bottom:13.5pt'>\
//          <p class=MsoNormal style='line-height:13.5pt'><span style='font-size:\
//          10.0pt;font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
//          color:#444444'>"+End_at+"<o:p></o:p></span></p>\
//          </div>\
//          </td>\
//         </tr>\
//         <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:7.5pt'>\
//          <td width=275 style='width:206.25pt;padding:0in 0in 0in 0in;\
//          height:7.5pt'></td>\
//         </tr>\
//        </table>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><span style='font-family:\"Arial\",\"sans-serif\";\
//      mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//       width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//       1184;mso-padding-alt:0in 0in 0in 0in'>\
//       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>\
//        <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
//        <p class=article-title align=center style='text-align:center'><span\
//        style='color:red'>"+RedLines+"</span><o:p></o:p></p>\
//        </td>\
//       </tr>\
//       <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>\
//        <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
//       <p>"+EmailContent+"</p>\
//        </td>\
//       </tr>\
//       <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>\
//        <td width=580 style='width:435.0pt;padding:0in 0in 0in 0in'>\
//        <p class=article-title align=center style='text-align:center'>We\
//        apologize for any inconvenience. <o:p></o:p></p>\
//        </td>\
//       </tr>\
//      </table>\
//      <p class=MsoNormal><o:p></o:p></p>\
//      </td>\
//      <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in'></td>\
//     </tr>\
//    </table>\
//    </td>\
//   </tr>\
//   <tr style='mso-yfti-irow:6'>\
//    <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
//    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//     style='width:460.0pt;background:#22703C;border-collapse:collapse;\
//     mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm' id=footer>\
//     <tr style='mso-yfti-irow:1;height:13.5pt'>\
//      <td width=360 style='width:3.75in;padding:0in 0in 0in 0in'>\
//      <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\
//          <tr>\
//              <td align=\"center\" valign=\"top\" style=\" padding: 15px 0; font-family: 'Open Sans', arial, helvetica, sans-serif; font-weight: 400; font-size: 13px; line-height: 1.2; text-align: center; color: #ffffff; vertical-align: middle; width: 33.33%;\">\
//                  <span style=\"color: #ffffff; text-decoration: none; text-align: center;\">"+Phone_Number+"</span>\
//              </td>\
//              <td align=\"center\" valign=\"top\" style=\" padding: 15px 0; font-family: 'Open Sans', arial, helvetica, sans-serif; font-weight: 400; font-size: 13px; line-height: 1.2; text-align: center; color: #ffffff; vertical-align: middle; width: 33.33%;\">\
//                  <a href=\""+Department_URL+"\" style=\"color: #ffffff; text-decoration: none;\">"+Department_URL+"</a>\
//              </td>\
//              <td align=\"center\" valign=\"top\" style=\"padding: 15px 0; font-family: 'Open Sans', arial, helvetica, sans-serif; font-weight: 400; font-size: 13px; line-height: 1.2; text-align: center; color: #ffffff; vertical-align: middle; width: 33.33%;\">\
//                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\
//                      <tr>\
//                              <td align=\"center\">\
//                                  <a href=\""+Fackbook_Account+"\">\
//                                  <img src=\"https://png.icons8.com/ios/1600/facebook-messenger.png\" alt=\"facebook\" style=\"color: #444444; display: block; font-family: 'Open Sans', arial, helvetica, sans-serif; font-size: 9px; font-weight: 600; text-align: center; text-transform: uppercase; vertical-align: middle; width: 25px;\"/>\
//                                  </a>\
//                              </td>\
//                              <td align=\"center\">\
//                                  <a href=\""+Youtube_Account+"\">\
//                                  <img src=\"http://cdn.mysitemyway.com/icons-watermarks/simple-black/social-media/social-media_youtube/social-media_youtube_simple-black_512x512.png\" alt=\"linked-in\" style=\"color: #444444; display: block; font-family: 'Open Sans', arial, helvetica, sans-serif; font-size: 9px; font-weight: 600; text-align: center; text-transform: uppercase; vertical-align: middle; width: 25px;\"/>\
//                                      </a>\
//                              </td>\
//                          <td align=\"center\">\
//                              <a href=\""+Twitter_Account+"\">\
//                              <img src=\"https://marketplace.canva.com/MAB0r9qbLEg/1/thumbnail/canva-black-twitter-logo-social-media-icon-MAB0r9qbLEg.png\" alt=\"twitter\" style=\"color: #444444; display: block; font-family: 'Open Sans', arial, helvetica, sans-serif; font-size: 9px; font-weight: 600; text-align: center; text-transform: uppercase; vertical-align: middle; width: 25px;\"/>\
//                              </a>\
//                          </td>\
//                      </tr>\
//                  </table>\
//              </td>\
//          </tr>\
//      </table>\
//      </td>\
//     </tr>\
//    </table>\
//    </td>\
//   </tr>\
//  </table>\
//  </td>\
// </tr>\
// <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
//  <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:15.0pt'></td>\
// </tr>\
// </div>\
// </table>\
// </div><br>";
//
// }



function Preview_Event_Invitation(){


    Department_Name=document.getElementById("Department_Name").value;
   if(!Department_Name)
     Department_Name= document.getElementById("Department_Name").value =" ";

   Department_Address=document.getElementById("Department_Address").value;
   if(!Department_Address)
     Department_Address= document.getElementById("Department_Address").value =" ";

   Phone_Number=document.getElementById("Phone_Number").value;
   if(!Phone_Number)
     Phone_Number= document.getElementById("Phone_Number").value =" ";

   Department_URL=document.getElementById("Department_URL").value;
   if(!Department_URL)
     Department_URL= document.getElementById("Department_URL").value =" ";

     Email_Subject=document.getElementById("Email_Subject").value;
     if(!Email_Subject)
       Email_Subject= document.getElementById("Email_Subject").value =" ";




   EmailContent=CKEDITOR.instances.EmailContent.getData();//CKEDITOR.instances.EmailContent.document.getBody().getHtml();

   loadFooter();

      $('#collapseFour').collapse("show");


  Preview_Area=document.getElementById("Preview_Area").innerHTML="\
  <html><head></head><body>\
  <div>\
  <table border=0 cellspacing=0 cellpadding=0 width=\"100%\"\
   style='width:100.0%;background:#ECECEC;border-collapse:collapse'>\
   <tr>\
    <td style='padding:0cm 0cm 0cm 0cm'>\
    <div align=center>\
    <table border=0 cellspacing=0 cellpadding=0 width=600\
     style='width:460.0pt;border-collapse:collapse'>\
     <tr style='height:15'>\
      <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:15'></td>\
     </tr>\
     <tr>\
      <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
      <table border=0 cellspacing=0 cellpadding=0 width=600\
       style='width:460.0pt;background:#AE8B32;border-collapse:collapse'>\
       <tr>\
        <td width=15 style='width:5pt;padding:0cm 0cm 0cm 0cm'></td>\
        <td width=350 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
        <table border=0 cellspacing=0 cellpadding=0\
         width=350 style='width:460.0pt;border-collapse:collapse'>\
         <tr style='\
          height:3.0pt'>\
          <td width=350 style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:3.0pt'>\
          </td>\
         </tr>\
        </table>\
        <div align=left>\
          <p padding:5px 5px 5px 5px;><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif;color:#E7CBA3'>"+"<o:p></o:p>"+Department_Name+"</span></p>\
          </div>\
        </td>\
       </tr>\
      </table>\
      </td>\
     </tr>\
     <tr>\
      <td style='width:460.0pt;background:white'\
      >\
      <div align=center >\
      <img width=600 height=175 Style='margin-right:3pt;margin-left:3pt;max-width=450px;max-height=157px'\
      src=\"http://comj.ksau-hs.edu.sa/wp-content/uploads/2018/02/ksau-hs_logo_co.png\"\
      alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
      v:shapes=\"Picture_x0020_1\">\
      </div>\
      </td>\
     </tr>\
     <tr id=simple-content-row>\
      <td width=600 style='max-width:443.65pt;width:460.0pt;background:white;padding:0cm 0cm 0cm 0cm'>\
      <table border=0 cellspacing=0 cellpadding=0 width=600\
       style='max-width:443.65pt;width:460.0pt;border-collapse:collapse'>\
       <tr>\
        <td width=600 style='max-width:443.65pt;width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
        <table>\
         <tr>\
         <td width=600 style='max-width:443.65pt;width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
           <table border=0 cellspacing=0 cellpadding=0\
          width=592 style='max-width:443.65pt;width:443.65pt;border-collapse:collapse'>\
           <tr style='max-width:443.65pt;padding:0px 15px 0px 15px'>\
           <td width=592 style='width:443.65pt;max-width:443.65pt;padding:0px 15px 0px 15px'>\
           "+EmailContent+"</b>\
             </td>\
           </tr>\
         </table>\
        </td>\
        <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm'></td>\
       </tr>\
      </table>\
      </td>\
     </tr>\
     <tr style='height:11.25pt'>\
      <td width=600 style='width:460.0pt;background:white;padding:0cm 0cm 0cm 0cm;\
      height:11.25pt'></td>\
     </tr>\
     <tr>\
      <td style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
      <table border=0 cellspacing=0 cellpadding=0 width=600\
       style='width:460.0pt;background:#22703C;border-collapse:collapse'>\
       <tr style='height:5.0pt'>\
        <td style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:5.0pt'></td>\
       </tr>\
       <tr style='height:10.5pt'>\
        <td width=360 valign=top style='width:3.75in;padding:0in 0in 0in 0in'>\
        <p align=center style='text-align:center'><span\
        style='font-family:\"Arial\",\"sans-serif\";font-size:9.0pt;color:#ffffff'>"+Department_Address+"<o:p></o:p>"+Phone_Number+"</span></p>\
        </td>\
       </tr>\
       <tr style='height:5.0pt'>\
        <td style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:5.0pt'></td>\
       </tr>\
      </table>\
      </td>\
     </tr>\
    </table>\
    </td>\
   </tr>\
   <tr style='height:15.0pt'>\
    <td style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:15.0pt'></td>\
   </tr>\
   </div>\
  </table>\
  </div><br></body></html>";

}

// function Preview_News_Letter()
// {
//
//       Department_Name=document.getElementById("Department_Name").value;
//      if(!Department_Name)
//        Department_Name= document.getElementById("Department_Name").value =" ";
//
//      Department_Address=document.getElementById("Department_Address").value;
//      if(!Department_Address)
//        Department_Address= document.getElementById("Department_Address").value =" ";
//
//      Phone_Number=document.getElementById("Phone_Number").value;
//      if(!Phone_Number)
//        Phone_Number= document.getElementById("Phone_Number").value =" ";
//
//      Department_URL=document.getElementById("Department_URL").value;
//      if(!Department_URL)
//        Department_URL= document.getElementById("Department_URL").value =" ";
//
//        Email_Subject=document.getElementById("Email_Subject").value;
//        if(!Email_Subject)
//          Email_Subject= document.getElementById("Email_Subject").value =" ";
//
//          news_image=document.getElementById("news_image").value;
//          if(!news_image)
//            news_image= document.getElementById("news_image").src = src="https://cdn3.iconfinder.com/data/icons/printer-control-ui-elements/154/paper-list-empty-low-printer-512.png";
//
//
//
//
//
//      EmailContent=CKEDITOR.instances.EmailContent.document.getBody().getHtml();
//
//      loadFooter();
//
//         $('#collapseFour').collapse("show");
//
//
//     Preview_Area=document.getElementById("Preview_Area").innerHTML="\
//     <div class=WordSection1>\
//     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=\"100%\"\
//      style='width:100.0%;background:#ECECEC;border-collapse:collapse;mso-yfti-tbllook:\
//      1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//       <td style='padding:0cm 0cm 0cm 0cm'>\
//       <div align=center>\
//       <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//        style='width:460.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;\
//        mso-padding-alt:0cm 0cm 0cm 0cm'>\
//        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
//         <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:15.0pt'></td>\
//        </tr>\
//        <tr style='mso-yfti-irow:1'>\
//         <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
//         <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//          style='width:460.0pt;background:#AE8B32;border-collapse:collapse;\
//          mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm' id=top-bar>\
//          <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//           <td width=15 style='width:5pt;padding:0cm 0cm 0cm 0cm'></td>\
//           <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm'>\
//           <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//            width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
//            1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
//             height:6.0pt'>\
//             <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm;height:6.0pt'></td>\
//            </tr>\
//           </table>\
//           <div align=left>\
//           <p class=MsoNormal><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif;\
//           mso-fareast-font-family:\"Times New Roman\";color:#E7CBA3'>"+Department_Name+"<o:p></o:p></span></p>\
//           </div>\
//           <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//            width=350 style='width:262.5pt;border-collapse:collapse;mso-yfti-tbllook:\
//            1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;\
//             height:6.0pt'>\
//             <td width=350 style='width:262.5pt;padding:0cm 0cm 0cm 0cm;height:6.0pt'></td>\
//            </tr>\
//           </table>\
//           </td>\
//          </tr>\
//         </table>\
//         </td>\
//        </tr>\
//        <tr style='mso-yfti-irow:2'>\
//         <td style='width:460.0pt;background:white'\
//         id=header>\
//         <div align=center >\
//         <img width=600 height=175 Style='margin-right:5pt;margin-left:5pt;max-width=525px;max-height=157px'\
//         src=\"http://comj.ksau-hs.edu.sa/wp-content/uploads/2018/02/ksau-hs_logo_co.png\"\
//         alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
//         v:shapes=\"Picture_x0020_1\">\
//         </div>\
//         </td>\
//        </tr>\
//        <tr style='mso-yfti-irow:3;height:22.5pt'>\
//         <td width=600 style='width:460.0pt;background:#fbf7c7;padding:0cm 0cm 0cm 0cm;\
//         height:22.5pt'><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\
//           <tr>\
//             <td align=\"center\" valign=\"top\" style=\"background-color: #444444; color: #ffffff; font-family: 'Open Sans', arial, helvetica, sans-serif; font-size: 22px; font-weight: 400; line-height: 24.2px; padding: 24px 15px; vertical-align: middle; \">\
//                 Main headline or title of event goes here\
//             </td>\
//          </tr></table></td>\
//        </tr>\
//        <tr style='mso-yfti-irow:3;height:22.5pt'>\
//         <td width=600 style='width:460.0pt;background:#ffffff;padding:0cm 0cm 0cm 0cm;\
//         height:22.5pt'><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\
//             <tr>\
//               <td align=\"center\" valign=\"top\" style=\"background-color: #ffffff;\">\
//                             <img src=\""+news_image+"\" alt=\"headline image\" style=\"color: #444444; display: block; font-family: 'Open Sans', arial, helvetica, sans-serif; font-size: 14px; line-height: 18px; text-align: center; text-transform: uppercase;margin-right:5pt;margin-left:5pt;max-width=525px;max-height=157px;\" />\
//                         </td>\
//                     </tr>\
//                 </table></td>\
//        </tr>\
//        <tr style='mso-yfti-irow:4' id=simple-content-row>\
//         <td width=600 style='width:460.0pt;background:white;padding:0cm 0cm 0cm 0cm'>\
//         <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//          style='width:460.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;\
//          mso-padding-alt:0cm 0cm 0cm 0cm'>\
//          <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//           <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm'></td>\
//           <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
//           <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
//           mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//           <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//            width=592 style='width:443.65pt;border-collapse:collapse;mso-yfti-tbllook:\
//            1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//             <td width=592 style='width:443.65pt;padding:0cm 0cm 0cm 0cm'>\
//             <p class=abdo-title style='text-align:justify'><span\
//             style='font-size:11.0pt'>"+EmailContent+"<span\
//             dir=RTL></span><o:p></o:p></span></span></b></p>\
//             </td>\
//            </tr>\
//           </table>\
//           <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
//           mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//           <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//            width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//            1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//             <td width=580 style='width:435.0pt;padding:0cm 0cm 0cm 0cm'></td>\
//            </tr>\
//           </table>\
//           <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
//           mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//           <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//            width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//            1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//             <td width=580 style='width:435.0pt;padding:0cm 0cm 0cm 0cm'></td>\
//            </tr>\
//           </table>\
//           <p class=MsoNormal><span style='font-family:\"Arial\",sans-serif;\
//           mso-fareast-font-family:\"Times New Roman\";display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>\
//           <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0\
//            width=580 style='width:435.0pt;border-collapse:collapse;mso-yfti-tbllook:\
//            1184;mso-padding-alt:0cm 0cm 0cm 0cm'>\
//            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
//             <td width=580 style='width:435.0pt;padding:0cm 0cm 0cm 0cm'>\
//             <p class=hassan-title style='margin-bottom:0cm;margin-bottom:.0001pt'><o:p></o:p></p>\
//             </td>\
//            </tr>\
//           </table>\
//           <p class=MsoNormal><span style='font-size:10.0pt'><o:p></o:p></span></p>\
//           </td>\
//           <td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm'></td>\
//          </tr>\
//         </table>\
//         </td>\
//        </tr>\
//        <tr style='mso-yfti-irow:5;height:11.25pt'>\
//         <td width=600 style='width:460.0pt;background:white;padding:0cm 0cm 0cm 0cm;\
//         height:11.25pt'></td>\
//        </tr>\
//        <tr style='mso-yfti-irow:6'>\
//         <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm'>\
//         <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600\
//          style='width:460.0pt;background:#22703C;border-collapse:collapse;\
//          mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm' id=footer>\
//          <tr style='mso-yfti-irow:1;height:13.5pt'>\
//           <td width=360 valign=top style='width:3.75in;padding:0in 0in 0in 0in'>\
//           <p class=footer-content-left align=center style='text-align:center'><span\
//           style='font-family:\"Arial\",\"sans-serif\";font-size:9.0pt'>"+Department_Address+"  "+Phone_Number+"</span></p>\
//           </td>\
//          </tr>\
//         </table>\
//         </td>\
//        </tr>\
//       </table>\
//       </td>\
//      </tr>\
//      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
//       <td width=600 style='width:460.0pt;padding:0cm 0cm 0cm 0cm;height:15.0pt'></td>\
//      </tr>\
//      </div>\
//     </table>\
//     </div><br>";
// }



function download(){

    Preview();
    var a = document.body.appendChild(
        document.createElement("a")
    );
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

    today = mm + '' + dd + '' + yyyy;
    a.download = Email_Subject+"_"+today+".eml";

    var emlCon="X-Unsent: 1 \n"+"Content-Type: text/html \nSubject: "+Email_Subject+" \n\n";
    a.href = "data:text/html,"+emlCon+""+Preview_Area+""; // Grab the HTML
    a.click(); // Trigger a click on the element
}

function Choises(clicked_id){

  if(clicked_id=="Event_Invitation")
  {
    selected_template="Event_Invitation";
    $('#collapseFour').collapse("hide");

    $('#toHide1').hide();
    $('#toHide2').hide();
    $('#toHide3').hide();
    $('#toHide4').hide();
    $('#toHide5').hide();
    $('#toHide6').hide();
    $('#toHide7').hide();
    $('#toHide8').hide();

    // $("#Email_Subject_Label").addClass("aligncenter");
    // $("#Email_Subject").addClass("aligncenter");

  }
  else if(clicked_id=="Announcment_Letter")
  {
    selected_template="Announcment_Letter";
        $('#collapseFour').collapse("hide");

    $('#toHide1').show();
    $('#toHide2').show();
    $('#toHide3').show();
    $('#toHide4').show();
    $('#toHide5').show();
    $('#toHide6').show();
    $('#toHide7').hide();
    $('#toHide8').hide();
  }

  else if(clicked_id=="News_Letter")
  {
    selected_template="News_Letter";
    $('#collapseFour').collapse("hide");

    $('#toHide1').hide();
    $('#toHide2').hide();
    $('#toHide3').hide();
    $('#toHide4').hide();
    $('#toHide5').hide();
    $('#toHide6').hide();
    $('#toHide7').show();
    $('#toHide8').show();

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
