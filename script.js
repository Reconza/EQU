document.addEventListener("DOMContentLoaded", () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        if (!location.pathname.includes("mobile.html")) {
            window.location.href = "mobile.html";
        }
    } else {
        if (!location.pathname.includes("index.html")) {
            window.location.href = "index.html";
        }
    }
});
