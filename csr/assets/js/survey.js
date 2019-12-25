        var p = location.protocol.replace('file:','http:');       
        // document.write(unescape("%3CScript src='" + p + "//crmt.cw.com.tw/SurveyCollector/scripts/jquery-1.7.min.js' type='text/javascript'%3E%3C/script%3E"));
        // document.write(unescape("%3Cscript src='" + p + "//crmt.cw.com.tw/SurveyCollector/scripts/Resources.js' type='text/javascript'%3E%3C/script%3E"));
        document.write(unescape("%3Cscript src='assets/js/Resources_0120.js' type='text/javascript'%3E%3C/script%3E"));
        document.write(unescape("%3Cscript src='" + p + "//crmt.cw.com.tw/SurveyCollector/scripts/jquery.tools.min.js' type='text/javascript'%3E%3C/script%3E"));
        // document.write(unescape("%3Cscript src='" + p + "//crmt.cw.com.tw/SurveyCollector/scripts/jquery.ba-postmessage.min.js' type='text/javascript'%3E%3C/script%3E"));

        document.write(unescape("%3Cscript src='" + p + "//crmt.cw.com.tw/SurveyCollector/scripts/survey_var.js' type='text/javascript'%3E%3C/script%3E"));
        // document.write(unescape("%3Cscript src='" + p + "//crmt.cw.com.tw/SurveyCollector/scripts/preview.js?v=20181205033814' type='text/javascript'%3E%3C/script%3E"));
        document.write(unescape("%3Cscript src='assets/js/preview_may.js' type='text/javascript'%3E%3C/script%3E"));

        document.write(unescape("%3Cscript src='" + p + "//crmt.cw.com.tw/SurveyCollector/info.ashx?clientID=cwfuture&campaignID=EPOOOOCSR&listID=1841&v=20181205033814' type='text/javascript'%3E%3C/script%3E"));            

        var is_download = 1;     
        if (is_download)
        {
            // document.write(unescape("%3Clink rel='stylesheet' href='" + p + "//crmt.cw.com.tw/SurveyCollector/css/imageStyle.css' type='text/css'%3E%3C/link%3E"));
            /***
            if (mobilecheck())
            {
                //alert('mobile');
                document.write(unescape("%3Clink rel='stylesheet' href='./survey_m.css' type='text/css'%3E%3C/link%3E"));
            }
            else
            ***/
                // document.write(unescape("%3Clink rel='stylesheet' href='./survey.css' type='text/css'%3E%3C/link%3E"));
        }
        else
        {
            document.write(unescape("%3Clink rel='stylesheet' href='css/preview.css' type='text/css'%3E%3C/link%3E"));
            // document.write(unescape("%3Clink rel='stylesheet' href='css/survey.css' type='text/css'%3E%3C/link%3E"));
        }