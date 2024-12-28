// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال التلقائي للبيانات

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // التحقق من أن كلمة المرور وتأكيد كلمة المرور متطابقتان
    if (password !== confirmPassword) {
        
        document.getElementById('errorMessage').textContent = 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين';
        return;
    }

    // حفظ البيانات (يمكن تخزينها في مكان ما مثل قاعدة بيانات محلية أو ملف)
    localStorage.setItem('userData', JSON.stringify({ firstName, lastName ,phone, email, password }));

    // الانتقال إلى صفحة النجاح (مثال على صفحة داخل المشروع)
    //  window.location.href = "../pages/dvises/dvises.html";
    window.location.href = "timeLeft.html";
    
    
});

// تنظيف النموذج
document.getElementById('clearForm').addEventListener('click', function() {
    document.getElementById('loginForm').reset();
    document.getElementById('errorMessage').textContent = '';
});

     
