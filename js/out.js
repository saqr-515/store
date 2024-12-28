// زر تسجيل الخروج

document.getElementById('logoutButton').addEventListener('click', function() {
    
    // إزالة بيانات المستخدم المخزنة
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    alert("تم تسجيل الخروج بنجاح!");
    window.location.href = "../home.html"; // توجه إلى صفحة تسجيل الدخول
});


