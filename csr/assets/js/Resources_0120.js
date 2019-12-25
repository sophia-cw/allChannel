var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
lang = navigator.appName == 'Microsoft Internet Explorer' ? window.navigator.browserLanguage : lang;

switch (lang.toLowerCase())
{
    case "zh-tw":

        var res_submit = "送出";
        var res_DateIsInvalid = "請更正日期";
        var res_NextPage = "下一頁";
        var res_PreviousPage = "上一頁";
        var res_PleaseCompleteTheRequiredFields = "請填寫必填的問題";
        var res_PleaseCorrectTheDateField = "請更正日期";
        var res_EmailIsInvalid = "電子信箱不正確";
        var res_PleaseEnterROCIDCorrectly = "格式錯誤，請輸入正確身分證字號";
        var res_MaxOptionReached = "超過可勾選數目";
        var res_500WordLimit = "不可超過500個字";
        var res_reached9 = "最多可以選九個";
        var res_ThisSurveyIsInvalid = "這個問卷還沒開始，或是已過期了";
        var res_MobileIsInvalid = "手機號碼資料不正確，請確認為 09 開頭且有 10 位的數字，或是 1 開頭且有 11 位的數字。\n(範例: 0912345678 或 13012345678)";
        var res_MaxCountReached = "我們已收集到足夠的問卷數量了，謝謝你";

        break;

    case "zh-cn":

        var res_submit = "送出";
        var res_DateIsInvalid = "请更正日期";
        var res_NextPage = "下一页";
        var res_PreviousPage = "上一页";
        var res_PleaseCompleteTheRequiredFields = "请填写必填的问题";
        var res_PleaseCorrectTheDateField = "请更正日期";
        var res_EmailIsInvalid = "电子信箱不正确";
        var res_PleaseEnterROCIDCorrectly = "格式错误，请输入正确身分证字号";
        var res_MaxOptionReached = "超过可勾选数目";
        var res_500WordLimit = "不可超过500个字";
        var res_reached9 = "最多可以选九个";
        var res_ThisSurveyIsInvalid = "这个问卷还没开始，或是已过期了";
        var res_MobileIsInvalid = "手机号码数据不正确，请确认为 09 开头且有 10 位的数字，或是 1 开头且有 11 位的数字。\n(范例: 0912345678 或 13012345678)";
        var res_MaxCountReached = "我们已收集到足够的问卷数量了，谢谢你";
        break;

    default:

        var res_submit = "Submit";
        var res_DateIsInvalid = "Date is invalid";
        var res_NextPage = "Next Page";
        var res_PreviousPage = "Previous";
        var res_PleaseCompleteTheRequiredFields = "Please complete the required fields";
        var res_PleaseCorrectTheDateField = "Please correct the date field";
        var res_EmailIsInvalid = "Email is invalid";
        var res_PleaseEnterROCIDCorrectly = "Wrong format, please enter the correct ID number";
        var res_MaxOptionReached = "Max option reached";
        var res_500WordLimit = "Please limit to 500 characters";
        var res_reached9 = "Max 9 is reached";
        var res_ThisSurveyIsInvalid = "This survey has either expired or has not started";
        var res_MobileIsInvalid = "The mobile phone number is not correct,\n Please make sure that at the beginning of 09 and 10 digits, or 1 at the beginning and 11 digits.\n (Example: 0912345678 or 13012345678)";
        var res_MaxCountReached = "Sorry, we've collected enough surveys, thank you";
        break;
}