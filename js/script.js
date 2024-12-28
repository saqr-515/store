// وظيفة لإظهار عنصر التحميل
function showLoading() {
    document.getElementById('loading').style.visibility = 'visible';
}

// وظيفة لإخفاء عنصر التحميل
function hideLoading() {
    document.getElementById('loading').style.visibility = 'hidden';
}

// مثال على استخدام الوظائف
document.addEventListener('DOMContentLoaded', function() {
    // إظهار عنصر التحميل عند تحميل الصفحة
    showLoading();

    // محاكاة تحميل البيانات (يمكنك استبدال هذا بكود التحميل الفعلي)
    setTimeout(function() {
        // إخفاء عنصر التحميل بعد 3 ثوانٍ
        hideLoading();
    }, 3000);
});
$(document).ready(function () {
  $("#containerSlider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const verifyEmail = document.getElementById("verifyEmail").value;
    const verifyPassword = document.getElementById("verifyPassword").value;

    // تحقق من صحة المدخلات
    if (!verifyEmail || !verifyPassword) {
      document.getElementById("verifyMessage").textContent =
        "يرجى ملء جميع الحقول.";
      return;
    }

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.email === verifyEmail &&
      userData.password === verifyPassword
    ) {
      window.location.href = "timeLeft.html";
    } else {
      document.getElementById("verifyMessage").textContent =
        "البريد الإلكتروني أو كلمة المرور غير صحيحة";
    }
  });
document.getElementById("clearForm").addEventListener("click", function () {
  // الحصول على جميع الحقول في النموذج
  const form = document.getElementById("loginForm");

  // تفريغ جميع الحقول
  form.reset();
});
function addToCart(productName, productDescription, productPrice, image) {
  // الحصول على السلة الحالية من localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // إضافة المنتج إلى السلة
  cart.push({
    name: productName,
    description: productDescription,
    price: productPrice,
    image: image,
  });

  // حفظ السلة المحدثة في localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // يمكنك هنا إعادة توجيه المستخدم إلى صفحة السلة
  window.location.href = "add-to-cart.html";
}
document
  .getElementById("cartItems")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
      const itemName = event.target.getAttribute("data-item-name"); // الحصول على اسم العنصر
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // تصفية السلة لإزالة العنصر المحدد فقط
      cart = cart.filter((item) => item.name !== itemName);

      // تحديث السلة في localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // إعادة تحميل الصفحة لتحديث العرض
      location.reload();
    }
  });
  
