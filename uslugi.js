const SERVICE_LANGS = ['PL', 'EN', 'VN'];

const serviceCopy = {
    PL: {
        htmlLang: 'pl', title: 'Serwis telefonów, tabletów i laptopów | ALO SERWIS', navAria: 'Główna nawigacja', langAria: 'Zmień język', menu: ['ALO', 'OFERTA', 'USŁUGI', 'KONTAKT', 'PL'],
        skip: 'Przejdź do treści', heroEyebrow: 'PROFESJONALNY SERWIS W WARSZAWIE', heroTitle: 'Telefon, tablet lub laptop? Przywrócimy go do życia.', heroLead: 'Dokładna diagnoza, wysokiej jakości części i możliwie najszybsza realizacja — bez ukrytych kosztów.',
        quoteKicker: 'CTA 01', quoteTitle: 'DARMOWA WYCENA NAPRAWY', writeVia: 'NAPISZ PRZEZ', orderKicker: 'CTA 02', orderTitle: 'ZAMÓW PRZESYŁKĘ DO SERWISU', trustOne: 'Bezpłatna wycena', trustTwo: 'Szybka realizacja', trustThree: 'Gwarancja serwisowa', badgeSmall: 'SERWIS', badgeStrong: 'GSM & IT', devicePhone: 'Telefon', deviceTablet: 'Tablet', deviceLaptop: 'Laptop',
        tabletIndex: '02 / TABLET', tabletLabel: 'SERWIS TABLETÓW', tabletTitle: 'Kompleksowa naprawa tabletów', tabletLead: 'Przywracamy sprawność ekranów, elektroniki i oprogramowania — niezależnie od marki urządzenia.', tabletOne: 'Wymiana i naprawa wyświetlacza, szybki oraz digitizera', tabletTwo: 'Naprawa panelu dotykowego i problemów z obrazem', tabletThree: 'Naprawa płyty głównej i wymiana gniazda ładowania', tabletFour: 'Naprawa po upadku lub zalaniu', tabletFive: 'Naprawa aparatu, dźwięku, mikrofonu i głośników', tabletSix: 'Oprogramowanie, czyszczenie i wymiana baterii',
        phoneIndex: '01 / SMARTFON', phoneLabel: 'SERWIS TELEFONÓW', phoneTitle: 'Profesjonalna naprawa telefonów', phoneLead: 'Szybkie naprawy mechaniczne, elektroniczne i programowe wykonywane na profesjonalnym stanowisku serwisowym.', phoneOne: 'Wymiana szybki lub kompletnego modułu wyświetlacza', phoneTwo: 'Naprawa płyty głównej oraz gniazda ładowania', phoneThree: 'Naprawa zasięgu GSM, Wi-Fi i Bluetooth', phoneFour: 'Usuwanie Simlocka i naprawa oprogramowania', phoneFive: 'Naprawa aparatu, mikrofonu i elementów audio', phoneSix: 'Czyszczenie, naprawa po zalaniu i wymiana baterii', askQuote: 'Zapytaj o darmową wycenę',
        laptopIndex: '03 / KOMPUTER + LAPTOP', laptopTitle: 'Serwis laptopów i komputerów', laptopLead: 'Diagnozujemy usterki sprzętowe i systemowe, czyścimy układ chłodzenia oraz przywracamy wydajność urządzenia.', laptopOne: 'Płyty główne', laptopTwo: 'Chłodzenie', laptopThree: 'Dyski i dane', laptopFour: 'System i software',
        brandsKicker: 'WSZYSTKIE POPULARNE MARKI', brandsTitle: 'Naprawiamy urządzenia wielu producentów', aboutKicker: 'O ALO SERWIS', aboutTitle: 'Doświadczenie, precyzja i uczciwe zasady', aboutTextOne: 'Od lat pomagamy klientom odzyskać sprawne telefony, tablety i laptopy. Każde urządzenie traktujemy indywidualnie — od prostej wymiany szybki po zaawansowaną naprawę elektroniki.', aboutTextTwo: 'Zaczynamy od bezpłatnej wyceny i dokładnej diagnozy. Przed naprawą jasno przedstawiamy zakres prac i koszt. Korzystamy ze sprawdzonych części, dbamy o możliwie krótki termin realizacji i zapewniamy wsparcie po odbiorze urządzenia.',
        promiseOneTitle: 'Dokładna diagnoza', promiseOneText: 'Sprawdzamy przyczynę usterki, nie tylko jej objawy.', promiseTwoTitle: 'Uczciwa cena', promiseTwoText: 'Najpierw wycena, potem decyzja — bez niespodzianek.', promiseThreeTitle: 'Jakość i gwarancja', promiseThreeText: 'Sprawdzone części i odpowiedzialność za wykonaną usługę.',
        processKicker: 'PROSTY PROCES', processTitle: 'Od zgłoszenia do sprawnego urządzenia', processOneTitle: 'Kontakt', processOneText: 'Napisz do nas i opisz problem.', processTwoTitle: 'Diagnoza', processTwoText: 'Sprawdzimy urządzenie i podamy koszt.', processThreeTitle: 'Naprawa', processThreeText: 'Po akceptacji wykonamy usługę.', processFourTitle: 'Odbiór', processFourText: 'Testujemy sprzęt i przekazujemy go z gwarancją.',
        finalKicker: 'NIE WIESZ, CO SIĘ ZEPSUŁO?', finalTitle: 'Opisz problem — wycenimy naprawę bezpłatnie', finalLead: 'Podaj markę, model i objawy. Odpowiemy możliwie szybko.', contactKicker: 'ALO SERWIS WARSZAWA', contactTitle: 'Wybierz najbliższy punkt', locationOne: 'PUNKT 1', locationTwo: 'PUNKT 2', route: 'Trasa', footerTagline: 'Serwis telefonów, tabletów i laptopów', whatsappMessage: 'Dzień dobry, proszę o darmową wycenę naprawy urządzenia.'
    },
    EN: {
        htmlLang: 'en', title: 'Phone, tablet and laptop repair | ALO SERWIS', navAria: 'Main navigation', langAria: 'Change language', menu: ['HOME', 'OFFER', 'SERVICES', 'CONTACT', 'EN'],
        skip: 'Skip to content', heroEyebrow: 'PROFESSIONAL REPAIR SERVICE IN WARSAW', heroTitle: 'Phone, tablet or laptop? We will bring it back to life.', heroLead: 'Accurate diagnostics, quality parts and the fastest possible turnaround — with no hidden costs.',
        quoteKicker: 'CTA 01', quoteTitle: 'FREE REPAIR QUOTE', writeVia: 'MESSAGE VIA', orderKicker: 'CTA 02', orderTitle: 'ORDER DELIVERY TO OUR SERVICE', trustOne: 'Free quote', trustTwo: 'Fast turnaround', trustThree: 'Service warranty', badgeSmall: 'SERVICE', badgeStrong: 'GSM & IT', devicePhone: 'Phone', deviceTablet: 'Tablet', deviceLaptop: 'Laptop',
        tabletIndex: '02 / TABLET', tabletLabel: 'TABLET SERVICE', tabletTitle: 'Complete tablet repair', tabletLead: 'We restore screens, electronics and software regardless of the device brand.', tabletOne: 'Display, glass and digitizer replacement or repair', tabletTwo: 'Touch panel and display fault repair', tabletThree: 'Motherboard repair and charging port replacement', tabletFour: 'Repair after impact or liquid damage', tabletFive: 'Camera, sound, microphone and speaker repair', tabletSix: 'Software, cleaning and battery replacement',
        phoneIndex: '01 / SMARTPHONE', phoneLabel: 'PHONE SERVICE', phoneTitle: 'Professional phone repair', phoneLead: 'Fast mechanical, electronic and software repairs at a professional service workstation.', phoneOne: 'Glass replacement or complete display module replacement', phoneTwo: 'Motherboard and charging port repair', phoneThree: 'GSM, Wi-Fi and Bluetooth signal repair', phoneFour: 'Simlock removal and software repair', phoneFive: 'Camera, microphone and audio repair', phoneSix: 'Cleaning, liquid-damage repair and battery replacement', askQuote: 'Ask for a free quote',
        laptopIndex: '03 / COMPUTER + LAPTOP', laptopTitle: 'Laptop and computer service', laptopLead: 'We diagnose hardware and system faults, clean cooling systems and restore device performance.', laptopOne: 'Motherboards', laptopTwo: 'Cooling', laptopThree: 'Drives and data', laptopFour: 'System and software',
        brandsKicker: 'ALL POPULAR BRANDS', brandsTitle: 'We repair devices from many manufacturers', aboutKicker: 'ABOUT ALO SERWIS', aboutTitle: 'Experience, precision and fair rules', aboutTextOne: 'For years, we have helped customers recover working phones, tablets and laptops. Every device is handled individually — from a simple glass replacement to advanced electronics repair.', aboutTextTwo: 'We start with a free quote and accurate diagnosis. Before repair, we clearly explain the scope and cost. We use proven parts, aim for the shortest possible turnaround and provide support after collection.',
        promiseOneTitle: 'Accurate diagnosis', promiseOneText: 'We identify the cause, not only the symptoms.', promiseTwoTitle: 'Fair price', promiseTwoText: 'Quote first, decision second — no surprises.', promiseThreeTitle: 'Quality and warranty', promiseThreeText: 'Proven parts and responsibility for our work.',
        processKicker: 'SIMPLE PROCESS', processTitle: 'From first message to a working device', processOneTitle: 'Contact', processOneText: 'Message us and describe the problem.', processTwoTitle: 'Diagnosis', processTwoText: 'We check the device and provide the cost.', processThreeTitle: 'Repair', processThreeText: 'After approval, we complete the service.', processFourTitle: 'Collection', processFourText: 'We test the device and return it with a warranty.',
        finalKicker: 'NOT SURE WHAT FAILED?', finalTitle: 'Describe the problem — we will quote it for free', finalLead: 'Send the brand, model and symptoms. We will reply as quickly as possible.', contactKicker: 'ALO SERWIS WARSAW', contactTitle: 'Choose your nearest location', locationOne: 'LOCATION 1', locationTwo: 'LOCATION 2', route: 'Route', footerTagline: 'Phone, tablet and laptop repair', whatsappMessage: 'Hello, I would like a free repair quote for my device.'
    },
    VN: {
        htmlLang: 'vi', title: 'Sửa điện thoại, máy tính bảng và laptop | ALO SERWIS', navAria: 'Điều hướng chính', langAria: 'Đổi ngôn ngữ', menu: ['ALO', 'BÁO GIÁ', 'DỊCH VỤ', 'LIÊN HỆ', 'VN'],
        skip: 'Đi đến nội dung', heroEyebrow: 'DỊCH VỤ SỬA CHỮA CHUYÊN NGHIỆP TẠI WARSZAWA', heroTitle: 'Điện thoại, tablet hay laptop? Chúng tôi sẽ giúp thiết bị hoạt động trở lại.', heroLead: 'Chẩn đoán chính xác, linh kiện chất lượng và thời gian hoàn thành nhanh nhất có thể — không có chi phí ẩn.',
        quoteKicker: 'CTA 01', quoteTitle: 'BÁO GIÁ SỬA CHỮA MIỄN PHÍ', writeVia: 'NHẮN TIN QUA', orderKicker: 'CTA 02', orderTitle: 'ĐẶT GIAO THIẾT BỊ ĐẾN DỊCH VỤ', trustOne: 'Báo giá miễn phí', trustTwo: 'Hoàn thành nhanh', trustThree: 'Bảo hành dịch vụ', badgeSmall: 'DỊCH VỤ', badgeStrong: 'GSM & IT', devicePhone: 'Điện thoại', deviceTablet: 'Tablet', deviceLaptop: 'Laptop',
        tabletIndex: '02 / MÁY TÍNH BẢNG', tabletLabel: 'SỬA TABLET', tabletTitle: 'Sửa chữa máy tính bảng toàn diện', tabletLead: 'Khôi phục màn hình, phần cứng và phần mềm cho nhiều thương hiệu thiết bị.', tabletOne: 'Thay hoặc sửa màn hình, mặt kính và cảm ứng digitizer', tabletTwo: 'Sửa cảm ứng và các lỗi hiển thị hình ảnh', tabletThree: 'Sửa mainboard và thay cổng sạc', tabletFour: 'Khắc phục thiết bị rơi vỡ hoặc vào nước', tabletFive: 'Sửa camera, âm thanh, micro và loa', tabletSix: 'Phần mềm, vệ sinh và thay pin',
        phoneIndex: '01 / ĐIỆN THOẠI THÔNG MINH', phoneLabel: 'SỬA ĐIỆN THOẠI', phoneTitle: 'Sửa chữa điện thoại chuyên nghiệp', phoneLead: 'Xử lý nhanh các lỗi cơ khí, điện tử và phần mềm tại bàn kỹ thuật chuyên nghiệp.', phoneOne: 'Ép kính hoặc thay toàn bộ cụm màn hình', phoneTwo: 'Sửa mainboard và cổng sạc', phoneThree: 'Sửa lỗi sóng GSM, Wi-Fi và Bluetooth', phoneFour: 'Mở khóa Simlock và sửa phần mềm', phoneFive: 'Sửa camera, micro và hệ thống âm thanh', phoneSix: 'Vệ sinh, xử lý vào nước và thay pin', askQuote: 'Yêu cầu báo giá miễn phí',
        laptopIndex: '03 / MÁY TÍNH + LAPTOP', laptopTitle: 'Sửa laptop và máy tính', laptopLead: 'Chẩn đoán lỗi phần cứng và hệ thống, vệ sinh tản nhiệt và khôi phục hiệu năng thiết bị.', laptopOne: 'Mainboard', laptopTwo: 'Tản nhiệt', laptopThree: 'Ổ cứng và dữ liệu', laptopFour: 'Hệ điều hành và phần mềm',
        brandsKicker: 'CÁC THƯƠNG HIỆU PHỔ BIẾN', brandsTitle: 'Chúng tôi sửa chữa thiết bị của nhiều hãng', aboutKicker: 'VỀ ALO SERWIS', aboutTitle: 'Kinh nghiệm, chính xác và minh bạch', aboutTextOne: 'Trong nhiều năm, chúng tôi đã giúp khách hàng khôi phục điện thoại, tablet và laptop. Mỗi thiết bị đều được xử lý riêng biệt — từ thay kính đơn giản đến sửa chữa điện tử chuyên sâu.', aboutTextTwo: 'Chúng tôi bắt đầu bằng báo giá miễn phí và chẩn đoán chính xác. Trước khi sửa, phạm vi công việc và chi phí được thông báo rõ ràng. Linh kiện được lựa chọn kỹ, thời gian hoàn thành được rút ngắn tối đa và khách hàng luôn nhận được hỗ trợ sau sửa chữa.',
        promiseOneTitle: 'Chẩn đoán chính xác', promiseOneText: 'Tìm đúng nguyên nhân chứ không chỉ xử lý biểu hiện.', promiseTwoTitle: 'Giá cả minh bạch', promiseTwoText: 'Báo giá trước, quyết định sau — không bất ngờ.', promiseThreeTitle: 'Chất lượng và bảo hành', promiseThreeText: 'Linh kiện tin cậy và chịu trách nhiệm với dịch vụ.',
        processKicker: 'QUY TRÌNH ĐƠN GIẢN', processTitle: 'Từ khi liên hệ đến khi thiết bị hoạt động', processOneTitle: 'Liên hệ', processOneText: 'Nhắn tin và mô tả sự cố.', processTwoTitle: 'Chẩn đoán', processTwoText: 'Kiểm tra thiết bị và báo chi phí.', processThreeTitle: 'Sửa chữa', processThreeText: 'Tiến hành sau khi khách hàng đồng ý.', processFourTitle: 'Nhận máy', processFourText: 'Kiểm tra thiết bị và bàn giao kèm bảo hành.',
        finalKicker: 'CHƯA BIẾT THIẾT BỊ LỖI GÌ?', finalTitle: 'Mô tả sự cố — chúng tôi báo giá miễn phí', finalLead: 'Gửi hãng, model và biểu hiện lỗi. Chúng tôi sẽ phản hồi sớm nhất có thể.', contactKicker: 'ALO SERWIS WARSZAWA', contactTitle: 'Chọn cơ sở gần bạn nhất', locationOne: 'CƠ SỞ 1', locationTwo: 'CƠ SỞ 2', route: 'Chỉ đường', footerTagline: 'Sửa điện thoại, tablet và laptop', whatsappMessage: 'Xin chào, tôi muốn được báo giá sửa chữa thiết bị miễn phí.'
    }
};

let serviceLanguage = SERVICE_LANGS.includes(localStorage.getItem('alo_lang')) ? localStorage.getItem('alo_lang') : 'PL';

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
    const whatsappUrl = `https://api.whatsapp.com/send?phone=48888686121&text=${encodeURIComponent(copy.whatsappMessage)}`;
    document.querySelectorAll('.js-whatsapp-link').forEach((link) => { link.href = whatsappUrl; });
    localStorage.setItem('alo_lang', serviceLanguage);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextIndex = (SERVICE_LANGS.indexOf(serviceLanguage) + 1) % SERVICE_LANGS.length;
    renderServiceLanguage(SERVICE_LANGS[nextIndex]);
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
