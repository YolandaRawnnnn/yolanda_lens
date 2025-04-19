// 鼠标光标自定义
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});

// 回到顶部按钮功能
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 图片上传功能
document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("uploadInput");
    const imageGallery = document.getElementById("imageGallery");

    function loadImages() {
        const images = JSON.parse(localStorage.getItem("galleryImages")) || [];
        imageGallery.innerHTML = "";
        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            imageGallery.appendChild(img);
        });
    }

    if (uploadInput) {
        uploadInput.addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageSrc = e.target.result;
                    const images = JSON.parse(localStorage.getItem("galleryImages")) || [];
                    images.push(imageSrc);
                    localStorage.setItem("galleryImages", JSON.stringify(images));
                    loadImages();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 页面加载时显示已上传的照片
    loadImages();
});
