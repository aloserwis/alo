let mode = 0; 
let redSubStepImg = 0;
let redSubStepText = 0;
let mainInterval; 

const redImages = [
    "/assets/index/pc.webp",
    "/assets/index/macbook.webp",
    "/assets/index/printer.webp"
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
    imgV: document.getElementById('img-v'), imgH: document.getElementById('img-h')
};

const IMG_PHONE = "/assets/index/iphone.webp";
const IMG_CAMERA = "/assets/index/camera.webp";
const COLORS = ['#f58220', '#0088cc', '#ff3131'];
const LANG_ORDER = ['PL', 'EN', 'VN'];

const translations = {
    PL: {
        htmlLang: 'pl',
        navAria: 'Główna nawigacja',
        langAria: 'Zmień język',
        menu: ['ALO', 'OFERTA', 'USŁUGI', 'KONTAKT', 'PL'],
        footer: { object1: 'OBIEKT 1', object2: 'OBIEKT 2', hotline: 'Hotline:', website: 'Website:' },
        redTexts: ['KOMPUTER - PC - AIO', 'LAPTOP - MACBOOK', 'DRUKARKA - TONER/TUSZ', 'OPROGRAMOWANIE - OS'],
        modes: [
            { title: 'NAPRAWA TELEFONÓW', shimmer: 'WYMIANA EKRANU', model: 'IPHONE', badge: 'ODBIÓR SZYBKI!', promo: 'SZKŁO OCHRONNE GRATIS', c1: 'WYMIANA 1 NA 1', c2: 'NAJLEPSZA JAKOŚĆ', c3: 'SZYBKI CZAS OCZEKIWANIA', image: IMG_PHONE },
            { title: 'SPRZEDAŻ I MONTAŻ', shimmer: 'CCTV - NET - ALARM', model: 'ELEK.', badge: 'PROFESJONALNIE', promo: 'BEZPŁATNA KONSULTACJA', c1: 'SPRZĘT W 100% ORG', c2: 'DOKŁADNA KONSULTACJA', c3: 'WSPARCIE TECHNICZNE 24/7', image: IMG_CAMERA },
            { title: 'SPRZEDAŻ & NAPRAWA', shimmer: 'IT & GSM', model: null, promo: 'BEZPŁATNA KONSULTACJA', c1: 'PROFESJONALNIE', c2: 'NAJLEPSZA CENA SERWISU W POLSCE', c3: 'ZWROT W PRZYPADKU NIEZADOWOLENIA' }
        ]
    },
    EN: {
        htmlLang: 'en',
        navAria: 'Main navigation',
        langAria: 'Change language',
        menu: ['HOME', 'OFFER', 'SERVICES', 'CONTACT', 'EN'],
        footer: { object1: 'LOCATION 1', object2: 'LOCATION 2', hotline: 'Hotline:', website: 'Website:' },
        redTexts: ['COMPUTER - PC - AIO', 'LAPTOP - MACBOOK', 'PRINTER - TONER/INK', 'SOFTWARE - OS'],
        modes: [
            { title: 'PHONE REPAIR', shimmer: 'SCREEN REPLACEMENT', model: 'IPHONE', badge: 'FAST PICKUP!', promo: 'FREE SCREEN PROTECTOR', c1: '1-FOR-1 REPLACEMENT', c2: 'BEST QUALITY', c3: 'FAST TURNAROUND', image: IMG_PHONE },
            { title: 'SALES & INSTALLATION', shimmer: 'CCTV - NET - ALARM', model: 'ELEC.', badge: 'PROFESSIONAL', promo: 'FREE CONSULTATION', c1: '100% ORIGINAL EQUIPMENT', c2: 'DETAILED CONSULTATION', c3: '24/7 TECHNICAL SUPPORT', image: IMG_CAMERA },
            { title: 'SALES & REPAIR', shimmer: 'IT & GSM', model: null, promo: 'FREE CONSULTATION', c1: 'PROFESSIONAL SERVICE', c2: 'BEST SERVICE PRICE IN POLAND', c3: 'REFUND IF YOU ARE NOT SATISFIED' }
        ]
    },
    VN: {
        htmlLang: 'vi',
        navAria: 'Điều hướng chính',
        langAria: 'Đổi ngôn ngữ',
        menu: ['ALO', 'BÁO GIÁ', 'DỊCH VỤ', 'LIÊN HỆ', 'VN'],
        footer: { object1: 'CƠ SỞ 1', object2: 'CƠ SỞ 2', hotline: 'Điện thoại:', website: 'Website:' },
        redTexts: ['MÁY TÍNH - PC - AIO', 'LAPTOP - MACBOOK', 'MÁY IN - MỰC IN', 'PHẦN MỀM - HỆ ĐIỀU HÀNH'],
        modes: [
            { title: 'SỬA CHỮA ĐIỆN THOẠI', shimmer: 'THAY MÀN HÌNH', model: 'IPHONE', badge: 'LẤY NHANH!', promo: 'TẶNG KÍNH CƯỜNG LỰC', c1: 'ĐỔI 1 ĐỔI 1', c2: 'CHẤT LƯỢNG TỐT NHẤT', c3: 'THỜI GIAN NHANH', image: IMG_PHONE },
            { title: 'BÁN & LẮP ĐẶT', shimmer: 'CCTV - MẠNG - ALARM', model: 'ĐIỆN', badge: 'CHUYÊN NGHIỆP', promo: 'TƯ VẤN MIỄN PHÍ', c1: 'THIẾT BỊ CHÍNH HÃNG 100%', c2: 'TƯ VẤN CHI TIẾT', c3: 'HỖ TRỢ KỸ THUẬT 24/7', image: IMG_CAMERA },
            { title: 'BÁN & SỬA CHỮA', shimmer: 'IT & GSM', model: null, promo: 'TƯ VẤN MIỄN PHÍ', c1: 'DỊCH VỤ CHUYÊN NGHIỆP', c2: 'GIÁ DỊCH VỤ TỐT NHẤT TẠI BA LAN', c3: 'HOÀN TIỀN NẾU KHÔNG HÀI LÒNG' }
        ]
    }
};

const storedLang = localStorage.getItem('alo_lang');
let currentLang = LANG_ORDER.includes(storedLang) ? storedLang : 'PL';

function setPair(vertical, horizontal, value) {
    vertical.innerText = horizontal.innerText = value;
}

function renderModeContent() {
    const cur = translations[currentLang];
    const content = cur.modes[mode];
    const hasModel = Boolean(content.model);

    els.modelV.style.display = els.modelH.style.display = hasModel ? 'block' : 'none';
    setPair(els.titleV, els.titleH, content.title);
    setPair(els.shimV, els.shimH, content.shimmer);
    if (hasModel) setPair(els.modelV, els.modelH, content.model);
    setPair(els.badgeV, els.badgeH, mode === 2 ? cur.redTexts[redSubStepText] : content.badge);
    setPair(els.promoV, els.promoH, content.promo);
    els.c1V.innerText = `★ ${content.c1} ★`; els.c1H.innerText = `★ ${content.c1}`;
    els.c2V.innerText = `★ ${content.c2} ★`; els.c2H.innerText = `★ ${content.c2}`;
    els.c3V.innerText = `★ ${content.c3} ★`; els.c3H.innerText = `★ ${content.c3}`;
    els.imgV.src = els.imgH.src = mode === 2 ? redImages[redSubStepImg] : content.image;
}

function setLanguage(lang) {
    currentLang = LANG_ORDER.includes(lang) ? lang : 'PL';
    const cur = translations[currentLang];
    document.documentElement.lang = cur.htmlLang;
    document.getElementById('main-menu').setAttribute('aria-label', cur.navAria);
    document.getElementById('menu-alo').innerText = cur.menu[0];
    document.getElementById('menu-oferta').innerText = cur.menu[1];
    document.getElementById('menu-uslugi').innerText = cur.menu[2];
    document.getElementById('menu-kontakt').innerText = cur.menu[3];
    document.getElementById('menu-lang').innerText = cur.menu[4];
    const langButton = document.getElementById('lang-toggle');
    langButton.setAttribute('aria-label', cur.langAria);
    langButton.title = cur.langAria;
    document.getElementById('object-1-label').innerText = cur.footer.object1;
    document.getElementById('object-2-label').innerText = cur.footer.object2;
    document.getElementById('hotline-1-label').innerText = cur.footer.hotline;
    document.getElementById('hotline-2-label').innerText = cur.footer.hotline;
    document.getElementById('website-label').innerText = cur.footer.website;
    localStorage.setItem('alo_lang', currentLang);
    renderModeContent();
    rescale();
}

function cycleLang() {
    const next = (LANG_ORDER.indexOf(currentLang) + 1) % LANG_ORDER.length;
    setLanguage(LANG_ORDER[next]);
}

function updateMode(targetMode = null) {
    if (targetMode !== null) mode = targetMode;
    else mode = (mode + 1) % 3;
    const newColor = COLORS[mode];
    document.documentElement.style.setProperty('--current-theme', newColor);

    els.imgV.style.opacity = els.imgH.style.opacity = "0";
    setTimeout(() => {
        if(mode === 2) {
            redSubStepImg = 0; redSubStepText = 0;
        }
        renderModeContent();
        els.imgV.style.opacity = els.imgH.style.opacity = "1";
    }, 400);
}

function startAutoCycle() {
    clearInterval(mainInterval);
    mainInterval = setInterval(() => updateMode(), 9000);
}

// Sub-cycles for Mode 2
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
        const redTexts = translations[currentLang].redTexts;
        redSubStepText = (redSubStepText + 1) % redTexts.length; 
        els.badgeV.style.opacity = els.badgeH.style.opacity = "0"; 
        setTimeout(() => { 
            els.badgeV.innerText = els.badgeH.innerText = redTexts[redSubStepText]; 
            els.badgeV.style.opacity = els.badgeH.style.opacity = "1"; 
        }, 300); 
    } 
}, 2250);

// Drag & Pull-to-refresh
const appContainer = document.getElementById('app-container');
const ptr = document.getElementById('ptr-indicator');
let startX = 0, startY = 0, isDragging = false, currentScale = 1;

const handleStart = (e) => {
    startX = (e.touches ? e.touches[0].pageX : e.pageX);
    startY = (e.touches ? e.touches[0].pageY : e.pageY);
    isDragging = true;
    appContainer.style.transition = 'none';
};

const handleEnd = (e) => {
    if (!isDragging) return;
    const endX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
    const endY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY);
    const diffX = endX - startX;
    const diffY = endY - startY;
    
    if (Math.abs(diffX) > 80 || Math.abs(diffY) > 80) {
        if (!(diffY > 200 && Math.abs(diffX) < 100)) {
            updateMode();
            startAutoCycle();
        }
    }
    
    if (diffY > 220 && Math.abs(diffX) < 100) {
        ptr.innerHTML = '<i class="fa-solid fa-sync-alt fa-spin fa-2x"></i>';
        setTimeout(() => location.reload(), 600);
    } else {
        ptr.style.opacity = '0'; ptr.style.top = '-80px';
        appContainer.style.transform = `scale(${currentScale})`;
        appContainer.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
    isDragging = false;
};

const handleMove = (e) => {
    if (!isDragging) return;
    const moveY = (e.touches ? e.touches[0].pageY : e.pageY) - startY;
    if (moveY > 0 && moveY < 250) {
        const move = Math.min(moveY * 0.5, 160);
        ptr.style.opacity = move / 100;
        ptr.style.top = (move - 80) + 'px';
        appContainer.style.transform = `scale(${currentScale}) translateY(${move/2}px)`;
    }
};

appContainer.addEventListener('touchstart', handleStart, {passive: true});
appContainer.addEventListener('touchmove', handleMove, {passive: true});
appContainer.addEventListener('touchend', handleEnd);
appContainer.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);

// Responsive Scaling
function rescale() {
    const isPortrait = window.innerHeight > window.innerWidth;
    const homeStage = document.getElementById('home-stage');
    const bannerContainer = document.getElementById('rescaleWrapper');
    const availableW = homeStage.clientWidth;
    const availableH = homeStage.clientHeight;
    if (!availableW || !availableH) return;

    let designW;
    let bannerH;

    if (isPortrait) {
        designW = 1080;
        bannerH = 1870;
    } else {
        const baseDesktopW = 1920;
        bannerH = 1080;
        const heightScale = availableH / bannerH;
        const fullScreenWidth = availableW / heightScale;
        const stretchAmount = 0.75;
        const extraWidth = Math.max(0, fullScreenWidth - baseDesktopW);
        designW = baseDesktopW + extraWidth * stretchAmount;
    }

    currentScale = Math.min(
        availableW / designW,
        availableH / bannerH
    );

    appContainer.style.width = designW + 'px';
    appContainer.style.height = bannerH + 'px';

    bannerContainer.style.width = designW + 'px';
    bannerContainer.style.height = bannerH + 'px';

    appContainer.style.transformOrigin = 'center center';
    appContainer.style.transform = `scale(${currentScale})`;
}

// Nav items interaction
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

// Snow Effect
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

// Initializing
window.addEventListener('resize', () => { initSnow(); rescale(); });
window.addEventListener('load', () => { 
    initSnow(); 
    drawSnow(); 
    rescale(); 
    startAutoCycle();
});

document.getElementById('lang-toggle').addEventListener('click', cycleLang);
setLanguage(currentLang);
