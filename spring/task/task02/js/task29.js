(function() {
        var tip = document.getElementById("msg");
        var name = document.getElementById("inputlabel");
        var validator = document.getElementById("validate");

        // 正则
        var trimReg = /^\s+|\s+$/g;  // 去除首尾空格
        var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;
        var lenReg = /^.{4,16}$/;    // 长度验证

        //定义提示信息
        var msgs={
            error_length:{
                "msg":"长度为4~16个字符",
                "color":"red",
                "className":"error"
            },
            error_required:{
                "msg":"姓名不能为空",
                "color":"red",
                "className":"error"
            },
            right:{
                "msg":"名称格式正确",
                "color":"green",
                "className":"right"
            }
        };
        /**
         * UI 显示信息更新接口
         */
        function UIInterface(paramObj) {
            // 修改提示信息
            tip.innerText = paramObj.msg;
            tip.style.color = paramObj.color;
            name.style.border = "1px "+ paramObj.color +" solid";
        }

        /**
         * 表单验证
         */
        function validate(event){
            var sourceVal = name.value;
            //首尾去空字符，替换中文为英文字符好尖酸长度
            var testStr = sourceVal.replace(trimReg,"").replace(chineseReg, '--');

            var paramObj;
            if(testStr.length === 0){
                //不能为空
                paramObj = msgs.error_required;
            }else if(!lenReg.test(testStr)){
                //字符长度不对
                paramObj = msgs.error_length
            }else{
                paramObj = msgs.right;
            }
            UIInterface(paramObj)
        }
        validator.addEventListener("click",validate);
    }
)();
