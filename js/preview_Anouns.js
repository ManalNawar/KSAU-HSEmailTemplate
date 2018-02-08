function  Preview()
{

  var Department_Name=document.getElementById("Department_Name").value;
  var Department_URL=document.getElementById("Department_URL").value;
  var Phone_Number=document.getElementById("Phone_Number").value;
  var Affected_Users=document.getElementById("Affected_Users").value;
  var Department_Address=document.getElementById("Department_Address").value;
  var Email_Subject=document.getElementById("Email_Subject").value;
  var Important_Date=document.getElementById("Important_Date").value;
  var RedLines=document.getElementById("RedLines").value;
  var Start_at=document.getElementById("Start_at").value;
  var End_at=document.getElementById("End_at").value;

  var EmailContent=tinyMCE.activeEditor.getContent();
  //document.getElementById("EmailContent").value;

  var Preview_Area=document.getElementById("Preview_Area").innerHTML="\
  <p class=MsoNormal><o:p>&nbsp;</o:p></p>\
  <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=\"100%\"\
   style='width:100.0%;background:#ECECEC;border-collapse:collapse;mso-yfti-tbllook:\
   1184;mso-padding-alt:0in 0in 0in 0in'>\
   <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>\
    <td style='padding:0in 0in 0in 0in'>\
  <div align=center>\
  <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=640\
   style='width:480.0pt;margin-left:7.5pt;border-collapse:collapse;mso-yfti-tbllook:\
   1184;mso-padding-alt:0in 0in 0in 0in'>\
   <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt'>\
    <td width=640 style='width:480.0pt;padding:0in 0in 0in 0in;height:15.0pt'></td>\
   </tr>\
   <tr style='mso-yfti-irow:1'>\
    <td width=640 style='width:480.0pt;padding:0in 0in 0in 0in'>\
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=640\
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
      mso-fareast-font-family:\"Times New Roman\";color:#E7CBA3'>"+ Email_Subject +"</span>\
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
    <td width=640 style='width:480.0pt;background:white;padding:0in 0in 0in 0in'\
    id=header>\
    <div style='margin-top:15.0pt'>\
    <img width=627 height=144\
    src=\"images\\ksau-hs_logo_co.png\"\
    alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
    v:shapes=\"Picture_x0020_1\">\
    </div>\
    </td>\
   </tr>\
   <tr style='mso-yfti-irow:3;height:22.5pt'>\
    <td width=640 style='width:480.0pt;background:white;padding:0in 0in 0in 0in;\
    height:22.5pt'></td>\
    </tr>\
    <tr style='mso-yfti-irow:4' id=simple-content-row>\
     <td width=640 style='width:480.0pt;background:white;padding:0in 0in 0in 0in'>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=640\
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
     <td width=640 style='width:480.0pt;padding:0in 0in 0in 0in'>\
     <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=640\
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
     <td width=640 style='width:480.0pt;padding:0in 0in 0in 0in;height:45.0pt'></td>\
    </tr>\
   </table>\
   </div>\
   </td>\
  </tr>\
   </table></div><br>";
}
