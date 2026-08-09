const SERVICE_LANGS = ['PL', 'EN', 'VN'];

const serviceCopy = {
    PL: {
        htmlLang: 'pl', title: 'Serwis telefonów, tabletów i laptopów | ALO SERWIS', navAria: 'Główna nawigacja', langAria: 'Zmień język', menu: ['ALO', 'OFERTA', 'USŁUGI', 'KONTAKT', 'PL'],
        skip: 'Przejdź do treści', heroEyebrow: 'PROFESJONALNY SERWIS W WARSZAWIE', heroTitle: 'Telefon, tablet lub laptop? Przywrócimy go do życia.', heroLead: 'Dokładna diagnoza, wysokiej jakości części i możliwie najszybsza realizacja — bez ukrytych kosztów.',
        quoteKicker: 'CTA 01', quoteTitle: 'DARMOWA WYCENA NAPRAWY', writeVia: 'NAPISZ PRZEZ', orderKicker: 'CTA 02', orderTitle: 'ZAMÓW PRZESYŁKĘ DO SERWISU', trustOne: 'Bezpłatna wycena', trustTwo: 'Szybka realizacja', trustThree: 'Gwarancja serwisowa', badgeSmall: 'SERWIS', badgeStrong: 'GSM & IT', devicePhone: 'Telefon', deviceTablet: 'Tablet', deviceLaptop: 'Laptop',
        uploadTitle: 'DODAJ ZDJĘCIA', uploadHelp: 'Maks. 6 zdjęć • link ważny 30 dni', noteLabel: 'UWAGI / OPIS USTERKI', notePlaceholder: 'Marka, model i opis problemu...', photoNone: 'Nie dodano zdjęć.', photoCount: 'Wybrano {n}/6 zdjęć.', photoProcessing: 'Przygotowywanie zdjęć...', photoMax: 'Możesz dodać maksymalnie 6 zdjęć.', photoInvalid: 'Można dodać tylko pliki graficzne.', photoTooLarge: 'Zdjęcie przekracza limit 8 MB.', photoUploading: 'Przesyłanie zdjęć i tworzenie linku...', photoUploadError: 'Nie udało się przesłać zdjęć. Spróbuj ponownie.',
        chooseLocation: 'Wybierz punkt serwisowy', chooseLocationHelp: 'Lokalizacja zostanie dodana do wiadomości.', cancel: 'Anuluj', closeModal: 'Zamknij', quickContactAria: 'Szybki kontakt', contactMessageTitle: 'ALO SERWIS - WYCENA NAPRAWY', branchLabel: 'PUNKT SERWISOWY', photoLinkLabel: 'ZDJĘCIA', defaultIssue: 'Proszę o bezpłatną wycenę naprawy.', copiedPaste: 'Wiadomość skopiowana — wklej ją w aplikacji i wyślij.', openingChannel: 'Otwieranie {channel}...', antiSpamReady: 'Ochrona antyspamowa: jedna wiadomość co 30 sekund.', antiSpamWait: 'Ochrona antyspamowa: spróbuj ponownie za {s} s.',
        tabletIndex: '02 / TABLET', tabletLabel: 'SERWIS TABLETÓW', tabletTitle: 'Kompleksowa naprawa tabletów', tabletLead: 'Przywracamy sprawność ekranów, elektroniki i oprogramowania — niezależnie od marki urządzenia.', tabletOne: 'Wymiana i naprawa wyświetlacza, szybki oraz digitizera', tabletTwo: 'Naprawa panelu dotykowego i problemów z obrazem', tabletThree: 'Naprawa płyty głównej i wymiana gniazda ładowania', tabletFour: 'Naprawa po upadku lub zalaniu', tabletFive: 'Naprawa aparatu, dźwięku, mikrofonu i głośników', tabletSix: 'Oprogramowanie, czyszczenie i wymiana baterii',
        phoneIndex: '01 / SMARTFON', phoneLabel: 'SERWIS TELEFONÓW', phoneTitle: 'Profesjonalna naprawa telefonów', phoneLead: 'Szybkie naprawy mechaniczne, elektroniczne i programowe wykonywane na profesjonalnym stanowisku serwisowym.', phoneOne: 'Wymiana szybki lub kompletnego modułu wyświetlacza', phoneTwo: 'Naprawa płyty głównej oraz gniazda ładowania', phoneThree: 'Naprawa zasięgu GSM, Wi-Fi i Bluetooth', phoneFour: 'Usuwanie Simlocka i naprawa oprogramowania', phoneFive: 'Naprawa aparatu, mikrofonu i elementów audio', phoneSix: 'Czyszczenie, naprawa po zalaniu i wymiana baterii', askQuote: 'Zapytaj o darmową wycenę',
        laptopIndex: '03 / KOMPUTER + LAPTOP', laptopTitle: 'Serwis laptopów i komputerów', laptopLead: 'Diagnozujemy usterki sprzętowe i systemowe, czyścimy układ chłodzenia oraz przywracamy wydajność urządzenia.', laptopOne: 'Płyty główne', laptopTwo: 'Chłodzenie', laptopThree: 'Dyski i dane', laptopFour: 'System i software',
        brandsKicker: 'WSZYSTKIE POPULARNE MARKI', brandsTitle: 'Naprawiamy urządzenia wielu producentów', aboutKicker: 'O ALO SERWIS', aboutTitle: 'Doświadczenie, precyzja i uczciwe zasady', aboutTextOne: 'Od lat pomagamy klientom odzyskać sprawne telefony, tablety i laptopy. Każde urządzenie traktujemy indywidualnie — od prostej wymiany szybki po zaawansowaną naprawę elektroniki.', aboutTextTwo: 'Zaczynamy od bezpłatnej wyceny i dokładnej diagnozy. Przed naprawą jasno przedstawiamy zakres prac i koszt. Korzystamy ze sprawdzonych części, dbamy o możliwie krótki termin realizacji i zapewniamy wsparcie po odbiorze urządzenia.',
        promiseOneTitle: 'Dokładna diagnoza', promiseOneText: 'Sprawdzamy przyczynę usterki, nie tylko jej objawy.', promiseTwoTitle: 'Uczciwa cena', promiseTwoText: 'Najpierw wycena, potem decyzja — bez niespodzianek.', promiseThreeTitle: 'Jakość i gwarancja', promiseThreeText: 'Sprawdzone części i odpowiedzialność za wykonaną usługę.',
        processKicker: 'PROSTY PROCES', processTitle: 'Od zgłoszenia do sprawnego urządzenia', processOneTitle: 'Kontakt', processOneText: 'Napisz do nas i opisz problem.', processTwoTitle: 'Diagnoza', processTwoText: 'Sprawdzimy urządzenie i podamy koszt.', processThreeTitle: 'Naprawa', processThreeText: 'Po akceptacji wykonamy usługę.', processFourTitle: 'Odbiór', processFourText: 'Testujemy sprzęt i przekazujemy go z gwarancją.',
        finalKicker: 'NIE WIESZ, CO SIĘ ZEPSUŁO?', finalTitle: 'Opisz problem — wycenimy naprawę bezpłatnie', finalLead: 'Podaj markę, model i objawy. Odpowiemy możliwie szybko.', contactKicker: 'ALO SERWIS WARSZAWA', contactTitle: 'Wybierz najbliższy punkt', locationOne: 'PUNKT 1', locationTwo: 'PUNKT 2', route: 'Trasa', footerTagline: 'Serwis telefonów, tabletów i laptopów'
    },
    EN: {
        htmlLang: 'en', title: 'Phone, tablet and laptop repair | ALO SERWIS', navAria: 'Main navigation', langAria: 'Change language', menu: ['HOME', 'OFFER', 'SERVICES', 'CONTACT', 'EN'],
        skip: 'Skip to content', heroEyebrow: 'PROFESSIONAL REPAIR SERVICE IN WARSAW', heroTitle: 'Phone, tablet or laptop? We will bring it back to life.', heroLead: 'Accurate diagnostics, quality parts and the fastest possible turnaround — with no hidden costs.',
        quoteKicker: 'CTA 01', quoteTitle: 'FREE REPAIR QUOTE', writeVia: 'MESSAGE VIA', orderKicker: 'CTA 02', orderTitle: 'ORDER DELIVERY TO OUR SERVICE', trustOne: 'Free quote', trustTwo: 'Fast turnaround', trustThree: 'Service warranty', badgeSmall: 'SERVICE', badgeStrong: 'GSM & IT', devicePhone: 'Phone', deviceTablet: 'Tablet', deviceLaptop: 'Laptop',
        uploadTitle: 'ADD PHOTOS', uploadHelp: 'Maximum 6 photos • link valid for 30 days', noteLabel: 'NOTES / FAULT DESCRIPTION', notePlaceholder: 'Brand, model and a description of the problem...', photoNone: 'No photos added.', photoCount: 'Selected {n}/6 photos.', photoProcessing: 'Preparing photos...', photoMax: 'You can add a maximum of 6 photos.', photoInvalid: 'Only image files can be added.', photoTooLarge: 'A photo exceeds the 8 MB limit.', photoUploading: 'Uploading photos and creating the link...', photoUploadError: 'The photos could not be uploaded. Please try again.',
        chooseLocation: 'Choose a service location', chooseLocationHelp: 'The location label will be added to your message.', cancel: 'Cancel', closeModal: 'Close', quickContactAria: 'Quick contact', contactMessageTitle: 'ALO SERWIS - REPAIR QUOTE', branchLabel: 'SERVICE LOCATION', photoLinkLabel: 'PHOTOS', defaultIssue: 'I would like a free repair quote.', copiedPaste: 'Message copied — paste it into the app and send.', openingChannel: 'Opening {channel}...', antiSpamReady: 'Spam protection: one message every 30 seconds.', antiSpamWait: 'Spam protection: try again in {s} s.',
        tabletIndex: '02 / TABLET', tabletLabel: 'TABLET SERVICE', tabletTitle: 'Complete tablet repair', tabletLead: 'We restore screens, electronics and software regardless of the device brand.', tabletOne: 'Display, glass and digitizer replacement or repair', tabletTwo: 'Touch panel and display fault repair', tabletThree: 'Motherboard repair and charging port replacement', tabletFour: 'Repair after impact or liquid damage', tabletFive: 'Camera, sound, microphone and speaker repair', tabletSix: 'Software, cleaning and battery replacement',
        phoneIndex: '01 / SMARTPHONE', phoneLabel: 'PHONE SERVICE', phoneTitle: 'Professional phone repair', phoneLead: 'Fast mechanical, electronic and software repairs at a professional service workstation.', phoneOne: 'Glass replacement or complete display module replacement', phoneTwo: 'Motherboard and charging port repair', phoneThree: 'GSM, Wi-Fi and Bluetooth signal repair', phoneFour: 'Simlock removal and software repair', phoneFive: 'Camera, microphone and audio repair', phoneSix: 'Cleaning, liquid-damage repair and battery replacement', askQuote: 'Ask for a free quote',
        laptopIndex: '03 / COMPUTER + LAPTOP', laptopTitle: 'Laptop and computer service', laptopLead: 'We diagnose hardware and system faults, clean cooling systems and restore device performance.', laptopOne: 'Motherboards', laptopTwo: 'Cooling', laptopThree: 'Drives and data', laptopFour: 'System and software',
        brandsKicker: 'ALL POPULAR BRANDS', brandsTitle: 'We repair devices from many manufacturers', aboutKicker: 'ABOUT ALO SERWIS', aboutTitle: 'Experience, precision and fair rules', aboutTextOne: 'For years, we have helped customers recover working phones, tablets and laptops. Every device is handled individually — from a simple glass replacement to advanced electronics repair.', aboutTextTwo: 'We start with a free quote and accurate diagnosis. Before repair, we clearly explain the scope and cost. We use proven parts, aim for the shortest possible turnaround and provide support after collection.',
        promiseOneTitle: 'Accurate diagnosis', promiseOneText: 'We identify the cause, not only the symptoms.', promiseTwoTitle: 'Fair price', promiseTwoText: 'Quote first, decision second — no surprises.', promiseThreeTitle: 'Quality and warranty', promiseThreeText: 'Proven parts and responsibility for our work.',
        processKicker: 'SIMPLE PROCESS', processTitle: 'From first message to a working device', processOneTitle: 'Contact', processOneText: 'Message us and describe the problem.', processTwoTitle: 'Diagnosis', processTwoText: 'We check the device and provide the cost.', processThreeTitle: 'Repair', processThreeText: 'After approval, we complete the service.', processFourTitle: 'Collection', processFourText: 'We test the device and return it with a warranty.',
        finalKicker: 'NOT SURE WHAT FAILED?', finalTitle: 'Describe the problem — we will quote it for free', finalLead: 'Send the brand, model and symptoms. We will reply as quickly as possible.', contactKicker: 'ALO SERWIS WARSAW', contactTitle: 'Choose your nearest location', locationOne: 'LOCATION 1', locationTwo: 'LOCATION 2', route: 'Route', footerTagline: 'Phone, tablet and laptop repair'
    },
    VN: {
        htmlLang: 'vi', title: 'Sửa điện thoại, máy tính bảng và laptop | ALO SERWIS', navAria: 'Điều hướng chính', langAria: 'Đổi ngôn ngữ', menu: ['ALO', 'BÁO GIÁ', 'DỊCH VỤ', 'LIÊN HỆ', 'VN'],
        skip: 'Đi đến nội dung', heroEyebrow: 'DỊCH VỤ SỬA CHỮA CHUYÊN NGHIỆP TẠI WARSZAWA', heroTitle: 'Điện thoại, tablet hay laptop? Chúng tôi sẽ giúp thiết bị hoạt động trở lại.', heroLead: 'Chẩn đoán chính xác, linh kiện chất lượng và thời gian hoàn thành nhanh nhất có thể — không có chi phí ẩn.',
        quoteKicker: 'CTA 01', quoteTitle: 'BÁO GIÁ SỬA CHỮA MIỄN PHÍ', writeVia: 'NHẮN TIN QUA', orderKicker: 'CTA 02', orderTitle: 'ĐẶT GIAO THIẾT BỊ ĐẾN DỊCH VỤ', trustOne: 'Báo giá miễn phí', trustTwo: 'Hoàn thành nhanh', trustThree: 'Bảo hành dịch vụ', badgeSmall: 'DỊCH VỤ', badgeStrong: 'GSM & IT', devicePhone: 'Điện thoại', deviceTablet: 'Tablet', deviceLaptop: 'Laptop',
        uploadTitle: 'THÊM ẢNH', uploadHelp: 'Tối đa 6 ảnh • link có hiệu lực 30 ngày', noteLabel: 'GHI CHÚ / MÔ TẢ LỖI', notePlaceholder: 'Hãng, model và mô tả tình trạng lỗi...', photoNone: 'Chưa thêm ảnh.', photoCount: 'Đã chọn {n}/6 ảnh.', photoProcessing: 'Đang chuẩn bị ảnh...', photoMax: 'Chỉ được chọn tối đa 6 ảnh.', photoInvalid: 'Chỉ được chọn file hình ảnh.', photoTooLarge: 'Có ảnh vượt quá giới hạn 8 MB.', photoUploading: 'Đang tải ảnh và tạo đường dẫn...', photoUploadError: 'Không tải được ảnh. Hãy thử lại.',
        chooseLocation: 'Chọn cơ sở sửa chữa', chooseLocationHelp: 'Nhãn cơ sở sẽ được thêm vào nội dung tin nhắn.', cancel: 'Hủy', closeModal: 'Đóng', quickContactAria: 'Liên hệ nhanh', contactMessageTitle: 'ALO SERWIS - BÁO GIÁ SỬA CHỮA', branchLabel: 'CƠ SỞ', photoLinkLabel: 'ẢNH THIẾT BỊ', defaultIssue: 'Tôi muốn được báo giá sửa chữa miễn phí.', copiedPaste: 'Đã sao chép nội dung — hãy dán vào ứng dụng và gửi.', openingChannel: 'Đang mở {channel}...', antiSpamReady: 'Chống spam: mỗi 30 giây chỉ gửi một lần.', antiSpamWait: 'Chống spam: vui lòng thử lại sau {s} giây.',
        tabletIndex: '02 / MÁY TÍNH BẢNG', tabletLabel: 'SỬA TABLET', tabletTitle: 'Sửa chữa máy tính bảng toàn diện', tabletLead: 'Khôi phục màn hình, phần cứng và phần mềm cho nhiều thương hiệu thiết bị.', tabletOne: 'Thay hoặc sửa màn hình, mặt kính và cảm ứng digitizer', tabletTwo: 'Sửa cảm ứng và các lỗi hiển thị hình ảnh', tabletThree: 'Sửa mainboard và thay cổng sạc', tabletFour: 'Khắc phục thiết bị rơi vỡ hoặc vào nước', tabletFive: 'Sửa camera, âm thanh, micro và loa', tabletSix: 'Phần mềm, vệ sinh và thay pin',
        phoneIndex: '01 / ĐIỆN THOẠI THÔNG MINH', phoneLabel: 'SỬA ĐIỆN THOẠI', phoneTitle: 'Sửa chữa điện thoại chuyên nghiệp', phoneLead: 'Xử lý nhanh các lỗi cơ khí, điện tử và phần mềm tại bàn kỹ thuật chuyên nghiệp.', phoneOne: 'Ép kính hoặc thay toàn bộ cụm màn hình', phoneTwo: 'Sửa mainboard và cổng sạc', phoneThree: 'Sửa lỗi sóng GSM, Wi-Fi và Bluetooth', phoneFour: 'Mở khóa Simlock và sửa phần mềm', phoneFive: 'Sửa camera, micro và hệ thống âm thanh', phoneSix: 'Vệ sinh, xử lý vào nước và thay pin', askQuote: 'Yêu cầu báo giá miễn phí',
        laptopIndex: '03 / MÁY TÍNH + LAPTOP', laptopTitle: 'Sửa laptop và máy tính', laptopLead: 'Chẩn đoán lỗi phần cứng và hệ thống, vệ sinh tản nhiệt và khôi phục hiệu năng thiết bị.', laptopOne: 'Mainboard', laptopTwo: 'Tản nhiệt', laptopThree: 'Ổ cứng và dữ liệu', laptopFour: 'Hệ điều hành và phần mềm',
        brandsKicker: 'CÁC THƯƠNG HIỆU PHỔ BIẾN', brandsTitle: 'Chúng tôi sửa chữa thiết bị của nhiều hãng', aboutKicker: 'VỀ ALO SERWIS', aboutTitle: 'Kinh nghiệm, chính xác và minh bạch', aboutTextOne: 'Trong nhiều năm, chúng tôi đã giúp khách hàng khôi phục điện thoại, tablet và laptop. Mỗi thiết bị đều được xử lý riêng biệt — từ thay kính đơn giản đến sửa chữa điện tử chuyên sâu.', aboutTextTwo: 'Chúng tôi bắt đầu bằng báo giá miễn phí và chẩn đoán chính xác. Trước khi sửa, phạm vi công việc và chi phí được thông báo rõ ràng. Linh kiện được lựa chọn kỹ, thời gian hoàn thành được rút ngắn tối đa và khách hàng luôn nhận được hỗ trợ sau sửa chữa.',
        promiseOneTitle: 'Chẩn đoán chính xác', promiseOneText: 'Tìm đúng nguyên nhân chứ không chỉ xử lý biểu hiện.', promiseTwoTitle: 'Giá cả minh bạch', promiseTwoText: 'Báo giá trước, quyết định sau — không bất ngờ.', promiseThreeTitle: 'Chất lượng và bảo hành', promiseThreeText: 'Linh kiện tin cậy và chịu trách nhiệm với dịch vụ.',
        processKicker: 'QUY TRÌNH ĐƠN GIẢN', processTitle: 'Từ khi liên hệ đến khi thiết bị hoạt động', processOneTitle: 'Liên hệ', processOneText: 'Nhắn tin và mô tả sự cố.', processTwoTitle: 'Chẩn đoán', processTwoText: 'Kiểm tra thiết bị và báo chi phí.', processThreeTitle: 'Sửa chữa', processThreeText: 'Tiến hành sau khi khách hàng đồng ý.', processFourTitle: 'Nhận máy', processFourText: 'Kiểm tra thiết bị và bàn giao kèm bảo hành.',
        finalKicker: 'CHƯA BIẾT THIẾT BỊ LỖI GÌ?', finalTitle: 'Mô tả sự cố — chúng tôi báo giá miễn phí', finalLead: 'Gửi hãng, model và biểu hiện lỗi. Chúng tôi sẽ phản hồi sớm nhất có thể.', contactKicker: 'ALO SERWIS WARSZAWA', contactTitle: 'Chọn cơ sở gần bạn nhất', locationOne: 'CƠ SỞ 1', locationTwo: 'CƠ SỞ 2', route: 'Chỉ đường', footerTagline: 'Sửa điện thoại, tablet và laptop'
    }
};

const API_BASE = 'https://api.aloserwis.com';
const CONTACT_PHONE = '48888686121';
const TELEGRAM_USER = 'aka242';
const MESSENGER_USER = 'dienthoaibalan';
const CONTACT_COOLDOWN_MS = 30 * 1000;
const CONTACT_COOLDOWN_KEY = 'last_send_time';
const MAX_REPAIR_PHOTOS = 6;
const MAX_PHOTO_BYTES = 8 * 1024 * 1024;
const MAX_PHOTO_DIMENSION = 1600;
const SERVICE_LOCATIONS = {
    bakalarska: { tag: 'BAKALARSKA', address: 'Bakalarska 2 / B214, Warszawa' },
    wolka: { tag: 'WÓLKA KOSOWSKA', address: 'Nadrzeczna 7C / A3 (ASG), Wólka Kosowska' }
};

let serviceLanguage = SERVICE_LANGS.includes(localStorage.getItem('alo_lang')) ? localStorage.getItem('alo_lang') : 'PL';
let repairPhotos = [];
let photoRevision = 0;
let uploadedPhotoRevision = -1;
let uploadedPhotoLanguage = '';
let uploadedPhotoLink = '';
let photoUploadPromise = null;
let pendingChannel = '';
let lastContactTrigger = null;
let toastTimer = null;
let cooldownTimer = null;

function renderServiceLanguage(language) {
    serviceLanguage = SERVICE_LANGS.includes(language) ? language : 'PL';
    const copy = serviceCopy[serviceLanguage];
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.title;
    document.getElementById('main-menu').setAttribute('aria-label', copy.navAria);
    const langButton = document.getElementById('lang-toggle');
    langButton.setAttribute('aria-label', copy.langAria);
    langButton.title = copy.langAria;
    ['alo', 'oferta', 'uslugi', 'kontakt', 'lang'].forEach((id, index) => {
        document.getElementById(`menu-${id}`).textContent = copy.menu[index];
    });
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = copy[element.dataset.i18n];
        if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const value = copy[element.dataset.i18nPlaceholder];
        if (typeof value === 'string') element.placeholder = value;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const value = copy[element.dataset.i18nAriaLabel];
        if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    localStorage.setItem('alo_lang', serviceLanguage);
    renderRepairPhotos();
    updateContactCooldown();
}

function getContactCooldownSeconds() {
    const lastSend = Number(localStorage.getItem(CONTACT_COOLDOWN_KEY));
    if (!Number.isFinite(lastSend) || lastSend <= 0) return 0;
    return Math.max(0, Math.ceil((CONTACT_COOLDOWN_MS - (Date.now() - lastSend)) / 1000));
}

function updateContactCooldown() {
    window.clearTimeout(cooldownTimer);
    const remaining = getContactCooldownSeconds();
    const isWaiting = remaining > 0;
    const status = document.getElementById('anti-spam-status');
    document.querySelectorAll('.contact-channel').forEach((button) => {
        button.classList.toggle('is-rate-limited', isWaiting);
        button.setAttribute('aria-disabled', String(isWaiting));
    });
    if (status) {
        status.classList.toggle('is-waiting', isWaiting);
        status.querySelector('span').textContent = isWaiting
            ? serviceCopy[serviceLanguage].antiSpamWait.replace('{s}', remaining)
            : serviceCopy[serviceLanguage].antiSpamReady;
    }
    if (isWaiting) cooldownTimer = window.setTimeout(updateContactCooldown, 1000);
    else localStorage.removeItem(CONTACT_COOLDOWN_KEY);
}

function setPhotoStatus(message = '', isError = false) {
    const status = document.getElementById('repair-photo-status');
    status.textContent = message;
    status.classList.toggle('error', isError);
}

function invalidatePhotoUpload() {
    photoRevision += 1;
    uploadedPhotoRevision = -1;
    uploadedPhotoLanguage = '';
    uploadedPhotoLink = '';
    photoUploadPromise = null;
}

function renderRepairPhotos(message = '', isError = false) {
    const grid = document.getElementById('repair-photo-grid');
    if (!grid) return;
    grid.innerHTML = '';
    repairPhotos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'repair-photo-card';
        const image = document.createElement('img');
        image.src = photo.previewUrl;
        image.alt = `${serviceCopy[serviceLanguage].photoLinkLabel} ${index + 1}`;
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'repair-photo-remove';
        remove.setAttribute('aria-label', serviceCopy[serviceLanguage].cancel);
        remove.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
        remove.addEventListener('click', () => removeRepairPhoto(index));
        card.append(image, remove);
        grid.appendChild(card);
    });
    if (message) {
        setPhotoStatus(message, isError);
        return;
    }
    const copy = serviceCopy[serviceLanguage];
    setPhotoStatus(repairPhotos.length ? copy.photoCount.replace('{n}', repairPhotos.length) : copy.photoNone);
}

function loadPhotoImage(file) {
    return new Promise((resolve, reject) => {
        const sourceUrl = URL.createObjectURL(file);
        const image = new Image();
        image.onload = () => {
            URL.revokeObjectURL(sourceUrl);
            resolve(image);
        };
        image.onerror = () => {
            URL.revokeObjectURL(sourceUrl);
            reject(new Error('image_decode_failed'));
        };
        image.src = sourceUrl;
    });
}

async function compressRepairPhoto(file, index) {
    const image = await loadPhotoImage(file);
    const largestSide = Math.max(image.naturalWidth, image.naturalHeight);
    const scale = Math.min(1, MAX_PHOTO_DIMENSION / largestSide);
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { alpha: false });
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob((result) => result ? resolve(result) : reject(new Error('image_encode_failed')), 'image/jpeg', 0.82);
    });
    const baseName = (file.name || `repair-${index + 1}`).replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]+/g, '-').slice(0, 45) || `repair-${index + 1}`;
    return new File([blob], `${baseName}.jpg`, { type: 'image/jpeg', lastModified: Date.now() });
}

async function handleRepairPhotoFiles(event) {
    const input = event.currentTarget;
    const selectedFiles = Array.from(input.files || []);
    input.value = '';
    if (!selectedFiles.length) return;
    const copy = serviceCopy[serviceLanguage];
    let remaining = MAX_REPAIR_PHOTOS - repairPhotos.length;
    if (remaining <= 0) {
        renderRepairPhotos(copy.photoMax, true);
        return;
    }
    const form = document.getElementById('repair-form');
    form.classList.add('processing');
    setPhotoStatus(copy.photoProcessing);
    let warning = selectedFiles.length > remaining ? copy.photoMax : '';
    let added = false;
    for (const file of selectedFiles.slice(0, remaining)) {
        if (!file.type.startsWith('image/')) {
            warning = copy.photoInvalid;
            continue;
        }
        if (file.size > MAX_PHOTO_BYTES) {
            warning = copy.photoTooLarge;
            continue;
        }
        try {
            const compressedFile = await compressRepairPhoto(file, repairPhotos.length);
            repairPhotos.push({ file: compressedFile, previewUrl: URL.createObjectURL(compressedFile) });
            added = true;
            remaining -= 1;
        } catch (error) {
            warning = copy.photoInvalid;
        }
    }
    form.classList.remove('processing');
    if (added) invalidatePhotoUpload();
    renderRepairPhotos(warning, Boolean(warning));
}

function removeRepairPhoto(index) {
    const removed = repairPhotos.splice(index, 1)[0];
    if (removed) URL.revokeObjectURL(removed.previewUrl);
    if (removed) invalidatePhotoUpload();
    renderRepairPhotos();
}

async function getRepairPhotoLink() {
    if (!repairPhotos.length) return '';
    if (uploadedPhotoLink && uploadedPhotoRevision === photoRevision && uploadedPhotoLanguage === serviceLanguage) return uploadedPhotoLink;
    if (photoUploadPromise) return photoUploadPromise;
    const revisionAtStart = photoRevision;
    const languageAtStart = serviceLanguage;
    photoUploadPromise = (async () => {
        const formData = new FormData();
        formData.append('language', languageAtStart);
        repairPhotos.forEach((photo, index) => formData.append('photos', photo.file, `repair-${index + 1}.jpg`));
        const response = await fetch(`${API_BASE}/api/upload-images`, {
            method: 'POST',
            headers: { 'X-Requested-With': 'ALO-Oferta' },
            body: formData
        });
        if (!response.ok) throw new Error(`Photo upload ${response.status}`);
        const result = await response.json();
        if (!result.url || !/^https:\/\//i.test(result.url)) throw new Error('Invalid gallery URL');
        if (photoRevision !== revisionAtStart || serviceLanguage !== languageAtStart) throw new Error('Photo selection changed');
        uploadedPhotoLink = result.url;
        uploadedPhotoRevision = revisionAtStart;
        uploadedPhotoLanguage = languageAtStart;
        return uploadedPhotoLink;
    })();
    try {
        return await photoUploadPromise;
    } finally {
        photoUploadPromise = null;
    }
}

function buildRepairMessage(locationKey, galleryLink = '') {
    const copy = serviceCopy[serviceLanguage];
    const location = SERVICE_LOCATIONS[locationKey];
    const note = document.getElementById('repair-note').value.trim();
    let text = `${copy.contactMessageTitle}\n\n🏷️ [${location.tag}]\n📍 ${copy.branchLabel}: ${location.address}\n\n📝 ${copy.noteLabel}:\n${note || copy.defaultIssue}`;
    if (galleryLink) text += `\n\n🖼️ ${copy.photoLinkLabel}: ${galleryLink}`;
    return text;
}

async function copyContactText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
    }
}

function showContactToast(message) {
    const toast = document.getElementById('contact-toast');
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
}

function openLocationModal(channel, trigger) {
    const remaining = getContactCooldownSeconds();
    if (remaining > 0) {
        const message = serviceCopy[serviceLanguage].antiSpamWait.replace('{s}', remaining);
        showContactToast(message);
        updateContactCooldown();
        return;
    }
    pendingChannel = channel;
    lastContactTrigger = trigger;
    const modal = document.getElementById('location-modal');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modal.querySelector('[data-location]').focus(), 0);
}

function closeLocationModal(restoreFocus = true) {
    const modal = document.getElementById('location-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
    if (restoreFocus && lastContactTrigger) lastContactTrigger.focus();
}

async function executeContact(channel, locationKey) {
    const copy = serviceCopy[serviceLanguage];
    const form = document.getElementById('repair-form');
    const contactStartedAt = Date.now();
    localStorage.setItem(CONTACT_COOLDOWN_KEY, String(contactStartedAt));
    updateContactCooldown();
    let galleryLink = '';
    if (repairPhotos.length) {
        form.classList.add('processing');
        setPhotoStatus(copy.photoUploading);
        try {
            galleryLink = await getRepairPhotoLink();
        } catch (error) {
            form.classList.remove('processing');
            if (localStorage.getItem(CONTACT_COOLDOWN_KEY) === String(contactStartedAt)) localStorage.removeItem(CONTACT_COOLDOWN_KEY);
            updateContactCooldown();
            setPhotoStatus(copy.photoUploadError, true);
            showContactToast(copy.photoUploadError);
            return;
        }
        form.classList.remove('processing');
        renderRepairPhotos();
    }

    const text = buildRepairMessage(locationKey, galleryLink);
    const encodedText = encodeURIComponent(text);
    const openInSameWindow = Boolean(repairPhotos.length);
    let targetUrl = '';

    if (channel === 'telegram') targetUrl = `https://t.me/${TELEGRAM_USER}?text=${encodedText}`;
    if (channel === 'whatsapp') targetUrl = `https://api.whatsapp.com/send?phone=${CONTACT_PHONE}&text=${encodedText}`;
    if (channel === 'viber') targetUrl = `viber://chat?number=%2B${CONTACT_PHONE}`;
    if (channel === 'messenger') targetUrl = `https://m.me/${MESSENGER_USER}`;

    if (channel === 'viber' || channel === 'messenger') {
        await copyContactText(text);
        showContactToast(copy.copiedPaste);
        window.setTimeout(() => { window.location.href = targetUrl; }, 650);
        return;
    }

    showContactToast(copy.openingChannel.replace('{channel}', channel === 'telegram' ? 'Telegram' : 'WhatsApp'));
    if (openInSameWindow) window.location.href = targetUrl;
    else window.open(targetUrl, '_blank', 'noopener,noreferrer');
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextIndex = (SERVICE_LANGS.indexOf(serviceLanguage) + 1) % SERVICE_LANGS.length;
    renderServiceLanguage(SERVICE_LANGS[nextIndex]);
});

document.getElementById('repair-photo-input').addEventListener('change', handleRepairPhotoFiles);
const repairNote = document.getElementById('repair-note');
repairNote.value = localStorage.getItem('alo_service_repair_note') || '';
repairNote.addEventListener('input', () => localStorage.setItem('alo_service_repair_note', repairNote.value));

document.querySelectorAll('.contact-channel').forEach((button) => {
    button.addEventListener('click', () => openLocationModal(button.dataset.channel, button));
});

document.querySelectorAll('[data-close-location-modal]').forEach((element) => {
    element.addEventListener('click', () => closeLocationModal());
});

document.querySelectorAll('[data-location]').forEach((button) => {
    button.addEventListener('click', () => {
        const channel = pendingChannel;
        pendingChannel = '';
        closeLocationModal(false);
        executeContact(channel, button.dataset.location);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.getElementById('location-modal').hidden) closeLocationModal();
});

const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 })
    : null;

document.querySelectorAll('.reveal').forEach((element) => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add('is-visible');
});

renderServiceLanguage(serviceLanguage);
