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
        <td width=350 style='width:262.5pt;padding:0in 0in 0in 0in;height:6.0pt'></td>\
       </tr>\
      </table>\
      <div>\
      <p class=MsoNormal><span style='font-size:9.0pt;font-family:\"Arial\",\"sans-serif\";\
      mso-fareast-font-family:\"Times New Roman\";color:#E7CBA3'>"+ Department_Name +"<o:p></o:p></span></p>\
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
    <p class=MsoNormal align=center style='text-align:center'><span\
    style='font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\";\
    mso-no-proof:yes'><![if !vml]><img width=627 height=144\
    src=\"images\\comj-logo-png.png\"\
    alt=\"Description: Description: Description: C:\\Users\\alserihimo\\Downloads\\self-MyTemplate\\images\\logo2.png\"\
    v:shapes=\"Picture_x0020_1\"><![endif]></span><span style='font-size:12.0pt;\
    font-family:\"Arial\",\"sans-serif\";mso-fareast-font-family:\"Times New Roman\"'><o:p></o:p></span></p>\
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
      style='width:480.0pt;background:#22703C;border-collapse:collapse;\
      mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in' id=footer>\
      <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:22.5pt'>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in;height:22.5pt'></td>\
      </tr>\
      <tr style='mso-yfti-irow:1'>\
       <td width=360 valign=top style='width:3.75in;padding:0in 0in 0in 0in'>\
       <p class=footer-content-left align=center style='text-align:center'><span\
       style='font-family:\"Arial\",\"sans-serif\"'>"+Department_Name+": "+Phone_Number+"<o:p></o:p></span></p>\
       </td>\
      </tr>\
      <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes;height:13.5pt'>\
       <td width=30 style='width:22.5pt;padding:0in 0in 0in 0in;height:13.5pt'></td>\
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
