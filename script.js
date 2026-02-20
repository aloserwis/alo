/**
 * CẤU HÌNH BIẾN TOÀN CỤC
 */
let mode = 0; 
let redSubStepImg = 0;
let redSubStepText = 0;
let mainInterval; 
let currentScale = 1;

const redTexts = ["KOMPUTER - PC - AIO", "LAPTOP - MACBOOK", "DRUKARKA - TONER/TUSZ", "OPROGRAMOWANIE - OS"];
const redImages = [
    "https://i.postimg.cc/Y0W3zvHW/pc2.png",
    "https://i.postimg.cc/L672P6nB/macbook.png",
    "https://i.postimg.cc/SKQ4FX57/pc3.png"
];

const els = {
    titleV: document.getElementById('title-text-v'), titleH: document.getElementById('title-text-h'),
    shimV: document.getElementById('shimmer-text-v'), shimH: document.getElementById('shimmer-text-h'),
    modelV: document.getElementById('model-text-v'), modelH: document.getElementById('model-text-h'),
    badgeV: document.getElementById('badge-text-v'), badgeH: document.getElementById('badge-text-h'),
    promoV: document.getElementById('promo-text-v'), promoH: document.getElementById('promo-text-h'),
    c1V: document.getElementById('c1-v'), c1H: document.getElementById('c1-h'),
    c2V: document.getElementById('c2-v'), c2H: document.getElementById('c2-h'),
    c3V: document.getElementById('c3-v'), c3H: document.getElementById('c3-h'),
    imgV: document.getElementById('img-v'), imgH: document.getElementById('img-h'),
    menu: document.getElementById('main-menu'),
    appContainer: document.getElementById('app-container'),
    ptr: document.getElementById('ptr-indicator')
};

const IMG_PHONE = "https://i.postimg.cc/2ySrQ1Q9/iphone.png";
const IMG_CAMERA = "https://i.postimg.cc/DZmJT1Jv/dahua.png";
const COLORS = ['#f58220', '#0088cc', '#ff3131'];

/**
 * HÀM CẬP NHẬT GIAO DIỆN THEO CHẾ ĐỘ (MODE)
 */
function updateMode(targetMode = null) {
    if (targetMode !== null) mode = targetMode;
    else mode = (mode + 1) % 3;
    
    const newColor = COLORS[mode];
    document.documentElement.style.setProperty('--current-theme', newColor);
    
    // Cập nhật viền menu đồng bộ với theme
    if(els.menu) {
        els.menu.style.borderColor = newColor;
        els.menu.style.width = "100%"; // Đảm bảo luôn chiếm hết chiều ngang container
        els.menu.style.boxSizing = "border-box";
    }

    els.imgV.style.opacity = els.imgH.style.opacity = "0";
    
    setTimeout(() => {
        if(mode === 1) { 
            els.modelV.style.display = els.modelH.style.display = 'block';
            els.titleV.innerText = els.titleH.innerText = ' SPRZEDAŻ I MONTAŻ ';
            els.shimV.innerText = els.shimH.innerText = 'CCTV - NET - ALARM';
            els.modelV.innerText = els.modelH.innerText = 'ELEK.';
            els.badgeV.innerText = els.badgeH.innerText = 'PROFESJONALNIE';
            els.promoV.innerText = els.promoH.innerText = 'BEZPŁATNA KONSULTACJA';
            els.c1V.innerText = '★ SPRZĘT W 100% ORG ★'; els.c1H.innerText = '★ SPRZĘT W 100% ORG';
            els.c2V.innerText = '★ DOKŁADNA KONSULTACJA ★'; els.c2H.innerText = '★ DOKŁADNA KONSULTACJA';
            els.c3V.innerText = '★ WSPARCIE TECHNICZNE 24/7 ★'; els.c3H.innerText = '★ WSPARCIE TECHNICZNE 24/7';
            els.imgV.src = els.imgH.src = IMG_CAMERA;
        } else if (mode === 2) { 
            els.modelV.style.display = els.modelH.style.display = 'none';
            els.titleV.innerText = els.titleH.innerText = 'SPRZEDAŻ & NAPRAWA';
            els.shimV.innerText = els.shimH.innerText = 'IT & GSM';
            els.promoV.innerText = els.promoH.innerText = 'BEZPŁATNA KONSULTACJA';
            els.c1V.innerText = '★ PROFESJONALNIE ★'; els.c1H.innerText = '★ PROFESJONALNIE';
            els.c2V.innerText = '★ NAJLEPSZA CENA SERWIS W POLSCE ★'; els.c2H.innerText = '★ NAJLEPSZA CENA SERWIS W POLSCE';
            els.c3V.innerText = '★ ZWROT W PRZYPADKU NIEZADOWOLENIA ★'; els.c3H.innerText = '★ ZWROT W PRZYPADKU NIEZADOWOLENIA';
            redSubStepImg = 0; redSubStepText = 0;
            els.badgeV.innerText = els.badgeH.innerText = redTexts[0];
            els.imgV.src = els.imgH.src = redImages[0];
        } else { 
            els.modelV.style.display = els.modelH.style.display = 'block';
            els.titleV.innerText = els.titleH.innerText = 'NAPRAWA TELEFONÓW';
            els.shimV.innerText = els.shimH.innerText = 'WYMIANA EKRANU';
            els.modelV.innerText = els.modelH.innerText = 'IPHONE';
            els.badgeV.innerText = els.badgeH.innerText = 'ODBIÓR SZYBKI!';
            els.promoV.innerText = els.promoH.innerText = 'SZKŁO OCHORONNE GRATIS';
            els.c1V.innerText = '★ WYMIANA 1 NA 1 ★'; els.c1H.innerText = '★ WYMIANA 1 NA 1';
            els.c2V.innerText = '★ NAJLEPSZA JAKOŚĆ ★'; els.c2H.innerText = '★ NAJLEPSZA JAKOŚĆ';
            els.c3V.innerText = '★ SZYBKI CZAS OCZEKIWANIA ★'; els.c3H.innerText = '★ SZYBKI CZAS OCZEKIWANIA';
            els.imgV.src = els.imgH.src = IMG_PHONE;
        }
        els.imgV.style.opacity = els.imgH.style.opacity = "1";
    }, 400);
}

/**
 * HÀM ĐIỀU CHỈNH KÍCH THƯỚC (RESPONSIVE)
 * Đảm bảo Menu và Banner có cùng chiều ngang thiết kế
 */
function rescale() {
    const isPortrait = window.innerHeight > window.innerWidth;
    
    // Chiều rộng thiết kế gốc (Design Width)
    const designW = isPortrait ? 1080 : 1870;
    const bannerH = isPortrait ? 1870 : 1080;
    
    // Lấy chiều cao menu và khoảng cách từ CSS Variables
    const rootStyle = getComputedStyle(document.documentElement);
    const menuH = parseInt(rootStyle.getPropertyValue('--menu-height')) || 0;
    const gap = parseInt(rootStyle.getPropertyValue('--gap')) || 0;
    
    const totalDesignH = bannerH + menuH + gap;

    // Tính toán tỉ lệ scale để fit cả chiều rộng và chiều cao
    currentScale = Math.min(window.innerWidth / designW, window.innerHeight / totalDesignH);
    
    // Cố định chiều rộng container để menu con width:100% hoạt động chính xác
    els.appContainer.style.width = designW + 'px';
    els.appContainer.style.transform = `scale(${currentScale})`;
    els.appContainer.style.transformOrigin = "top center";
}

/**
 * QUẢN LÝ CHU KỲ TỰ ĐỘNG
 */
function startAutoCycle() {
    clearInterval(mainInterval);
    mainInterval = setInterval(() => updateMode(), 9000);
}

// Sub-cycles cho Mode 2 (Red Mode)
setInterval(() => { 
    if (mode === 2) { 
        redSubStepImg = (redSubStepImg + 1) % redImages.length; 
        els.imgV.style.opacity = els.imgH.style.opacity = "0"; 
        setTimeout(() => { 
            els.imgV.src = els.imgH.src = redImages[redSubStepImg]; 
            els.imgV.style.opacity = els.imgH.style.opacity = "1"; 
        }, 300); 
    } 
}, 3000);

setInterval(() => { 
    if (mode === 2) { 
        redSubStepText = (redSubStepText + 1) % redTexts.length; 
        els.badgeV.style.opacity = els.badgeH.style.opacity = "0"; 
        setTimeout(() => { 
            els.badgeV.innerText = els.badgeH.innerText = redTexts[redSubStepText]; 
            els.badgeV.style.opacity = els.badgeH.style.opacity = "1"; 
        }, 300); 
    } 
}, 2250);

/**
 * TƯƠNG TÁC VUỐT (DRAG) & REFRESH
 */
let startX = 0, startY = 0, isDragging = false;

const handleStart = (e) => {
    startX = (e.touches ? e.touches[0].pageX : e.pageX);
    startY = (e.touches ? e.touches[0].pageY : e.pageY);
    isDragging = true;
    els.appContainer.style.transition = 'none';
};

const handleEnd = (e) => {
    if (!isDragging) return;
    const endX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
    const endY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY);
    const diffX = endX - startX;
    const diffY = endY - startY;
    
    // Chuyển Mode khi vuốt ngang hoặc dọc vừa đủ
    if (Math.abs(diffX) > 80 || Math.abs(diffY) > 80) {
        if (!(diffY > 200 && Math.abs(diffX) < 100)) {
            updateMode();
            startAutoCycle();
        }
    }
    
    // Pull-to-refresh
    if (diffY > 220 && Math.abs(diffX) < 100) {
        els.ptr.innerHTML = '<i class="fa-solid fa-sync-alt fa-spin fa-2x"></i>';
        setTimeout(() => location.reload(), 600);
    } else {
        els.ptr.style.opacity = '0'; 
        els.ptr.style.top = '-80px';
        els.appContainer.style.transform = `scale(${currentScale})`;
        els.appContainer.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
    isDragging = false;
};

const handleMove = (e) => {
    if (!isDragging) return;
    const moveY = (e.touches ? e.touches[0].pageY : e.pageY) - startY;
    if (moveY > 0 && moveY < 250) {
        const move = Math.min(moveY * 0.5, 160);
        els.ptr.style.opacity = move / 100;
        els.ptr.style.top = (move - 80) + 'px';
        els.appContainer.style.transform = `scale(${currentScale}) translateY(${move/2}px)`;
    }
};

els.appContainer.addEventListener('touchstart', handleStart, {passive: true});
els.appContainer.addEventListener('touchmove', handleMove, {passive: true});
els.appContainer.addEventListener('touchend', handleEnd);
els.appContainer.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);

/**
 * HIỆU ỨNG TUYẾT RƠI (SNOW)
 */
const canvas = document.getElementById('snow-canvas'), ctx = canvas.getContext('2d');
let width, height, snowflakes = [];

function initSnow() {
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = width; canvas.height = height;
    snowflakes = Array.from({length: 60}, () => ({ 
        x: Math.random() * width, 
        y: Math.random() * height, 
        radius: Math.random() * 3 + 1, 
        opacity: Math.random() * 0.5 + 0.2, 
        speed: Math.random() * 1 + 0.5 
    }));
}

function drawSnow() { 
    ctx.clearRect(0, 0, width, height); 
    snowflakes.forEach(p => { 
        ctx.beginPath(); 
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); 
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`; 
        ctx.fill(); 
        p.y += p.speed; 
        if (p.y > height) { p.y = -10; p.x = Math.random() * width; } 
    }); 
    requestAnimationFrame(drawSnow); 
}

/**
 * KHỞI TẠO ỨNG DỤNG
 */
window.addEventListener('resize', () => { initSnow(); rescale(); });
window.addEventListener('load', () => { 
    initSnow(); 
    drawSnow(); 
    rescale(); 
    startAutoCycle();
    
    // Xử lý click cho Nav Items
    const links = document.querySelectorAll('.dt-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('active')) {
                e.preventDefault();
                e.stopPropagation();
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            } else {
                e.stopPropagation();
            }
        });
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item')) {
            links.forEach(l => l.classList.remove('active'));
        }
    });
});
