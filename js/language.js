function ChangeLanguage() {
    const lang = localStorage.getItem('Language')
    const language = [
        {
            // confirm and cancel button
            button_ok_span: "OK",
            button_cancel_span: "Cancel",

            // login page
            lang: 'EN',
            login: 'Login',
            alreadyAcc: "I already have an account ?  ",
            username: "Username",
            password: "Password",
            noAcc: "Don't have an account ?",
            goRegister: "Create a new account",
            login_span1: "Privacy Policy",
            login_span2: " User Agreement ",
            login_span3: "and",
            login_span4: " Privacy Policy ",
            welcome_back: "Welcome Back",
            sign_to_con: "Sign to continue",

            // create page
            createAccount: "Create Account",
            createnewAccount: "Create a new account",
            r_password: "Password",
            r_password_again: "Confirm Password",
            showPassword: "Show Password",
            referral: "Referral Code (optional)",
            creatBtnSpan: "Create Account",
            inviteCode: "Invite Code",
            inputNumber: "Please enter only 11 digit phone number",
            confirm_password: "Please password and confirm password between 6 to 30 digit",
            please_enter: "Please enter registration information!",
            Inconsistent: "Inconsistent secondary password input",
            successfully_register: "You are successfully register an account",
            phone_existed: "Phone number already existed",
            code_invalid: "Invitation code is invalid",
            server_problem: "Server has a problem",

            // menu page
            menuHomeSpan: "Home",
            menuTradeSpan: "Trade",
            menuAssetsSpan: "Wallet",
            menuSettingSpan: "Setting",

            // home page
            homeHeader: 'Home',

            // wallet page
            wallet_span: 'Wallet',

            // trade page 
            tradeHeader: "Trade",

            // setting page 
            settingHeader: "Setting",

        },

        {
            // confirm and cancel button
            button_ok_span: "ตกลง",
            button_cancel_span: "ยกเลิก",

            // login page
            lang: 'TH',
            alreadyAcc: " มีบัญชีแล้ว  ? ",
            login: 'เข้าสู่ระบบ',
            username: "ชื่อผู้ใช้งาน",
            password: "รหัสผ่าน",
            noAcc: " ไม่มีบัญชี ?",
            goRegister: "สมัครตอนนี้",
            login_span1: "ฉันได้อ่านและเห็นด้วยกับ",
            login_span2: " ข้อตกลงการใช้ ",
            login_span3: "และ",
            login_span4: " นโยบายความเป็นส่วนตัว ",
            welcome_back: "ยินดีต้อนรับกลับ",
            sign_to_con: "ลงชื่อเพื่อดำเนินการต่อ",

            // create page
            createAccount: "สร้างบัญชี",
            createnewAccount: "สร้างบัญชีใหม่",
            name: "ชื่อ",
            mobile: "หมายเลขโทรศัพท์",
            r_password: "รหัสผ่าน",
            r_password_again: "ยืนยันรหัสผ่าน",
            showPassword: "แสดงรหัสผ่าน",
            referral: "รหัสอ้างอิง (ไม่บังคับ)",
            creatBtnSpan: "สร้างบัญชี",
            inviteCode: "รหัสเชิญ",
            inputNumber: "กรุณากรอกหมายเลขโทรศัพท์ 11 หลัก",
            confirm_password: "กรุณาใส่ชื่อรหัสผ่านและยืนยันรหัสผ่าน 6 ถึง 30 ตัวอักษร",
            please_enter: "กรุณากรอกข้อมูลการลงทะเบียน!",
            Inconsistent: "การป้อนรหัสผ่านสำรองไม่สอดคล้องกัน",
            successfully_register: "คุณลงทะเบียนบัญชีเรียบร้อยแล้ว",
            phone_existed: "หมายเลขโทรศัพท์มีอยู่แล้ว",
            code_invalid: "รหัสเชิญไม่ถูกต้อง",
            server_problem: "เซิร์ฟเวอร์มีปัญหา",

            // menu page
            menuHomeSpan: "หน้าหลัก",
            menuTradeSpan: "เทรด",
            menuAssetsSpan: "กระเป๋า",
            menuSettingSpan: "ตั้งค่า",

            // home page
            homeHeader: 'หน้าหลัก',

            // wallet page
            wallet_span: 'กระเป๋า',

            // trade page 
            tradeHeader: "เทรด",

            // setting page 
            settingHeader: "ตั้งค่า",


        },

        {
            lang: 'CN',

            // login page
            login: '登录',
            username: "密码",
            noAcc: "没有账号 ?",
            goRegister: "马上注册 ",
            login_span1: "我已阅读并同意",
            login_span2: " 用户协议 ",
            login_span3: "及",
            login_span4: " 隐私条款 ",

        }
    ]


    $.each(language, function (index, data) {
        if (data.lang == lang) {

            // confirm and cancel button
            $('.button_ok_span').each(function () {
                $(this).text(data.button_ok_span);
            });
            $('.button_cancel_span').each(function () {
                $(this).text(data.button_cancel_span);
            });


            // login page

            $('#loginNow2').text(data.login)
            $('#alreadyAcc').text(data.alreadyAcc)
            $('#loginBtn').text(data.login)
            $('#username').attr('placeholder', data.username)
            $('#password').attr('placeholder', data.password)
            $('#noAccount').text(data.noAcc)
            $('#goRegisterBtn').text(data.goRegister)
            $('#register_span1').text(data.login_span1)
            $('#register_span2').text(data.login_span2)
            $('#register_span3').text(data.login_span3)
            $('#register_span4').text(data.login_span4)
            $('#login_span1').text(data.login_span1)
            $('#login_span2').text(data.login_span2)
            $('#login_span3').text(data.login_span3)
            $('#login_span4').text(data.login_span4)
            $('#wallet_span').text(data.wallet_span)
            $('#welcome_back').text(data.welcome_back)
            $('#sign_to_con').text(data.sign_to_con)

            // create page
            $('#createAccount').text(data.createAccount)
            $('#createnewAccount').text(data.createnewAccount)
            $('#name').attr('placeholder', data.name)
            $('#mobile').attr('placeholder', data.mobile)
            $('#r_password').attr('placeholder', data.r_password)
            $('#r_password_again').attr('placeholder', data.r_password_again)
            $('#inviteCode').attr('placeholder', data.inviteCode)
            $('#showPassword').text(data.showPassword)
            $('#referral').text(data.referral)
            $('#creatBtnSpan').text(data.creatBtnSpan)
            $("#inputNumber").text(data.inputNumber);
            $("#confirm_password").text(data.confirm_password);
            $("#please_enter").text(data.please_enter);
            $("#Inconsistent").text(data.Inconsistent);
            $("#successfully_register").text(data.successfully_register);
            $("#phone_existed").text(data.phone_existed);
            $("#code_invalid").text(data.code_invalid);
            $("#server_problem").text(data.server_problem);

            // $('.date_histroy').each(function () {
            //     $(this).text(data.day_histroy);
            // });


            // menu page
            $('#menuHomeSpan').text(data.menuHomeSpan)
            $('#menuTradeSpan').text(data.menuTradeSpan)
            $('#menuAssetsSpan').text(data.menuAssetsSpan)
            $('#menuSettingSpan').text(data.menuSettingSpan)

            // home page
            $('#homeHeaderBody').text(data.homeHeader)

            // trade page
            $('#tradeHeaderBody').text(data.tradeHeader)

            // wallet page
            $('#walletHeaderBody').text(data.wallet_span)

            // setting page
            $('#settingHeaderBody').text(data.settingHeader)






        }

    })

}