const CONTACT_LANGS = ['PL', 'EN', 'VN'];

const contactCopy = {
    PL: {
        htmlLang: 'pl', title: 'Kontakt | ALO SERWIS', description: 'Skontaktuj się z ALO SERWIS w Warszawie i Wólce Kosowskiej przez telefon, Telegram, WhatsApp, Viber lub Messenger.', navAria: 'Główna nawigacja', langAria: 'Zmień język', menu: ['ALO', 'OFERTA', 'USŁUGI', 'KONTAKT', 'PL'],
        skip: 'Przejdź do treści', heroEyebrow: 'JESTEŚMY DO DYSPOZYCJI', heroTitle: 'Skontaktuj się z ALO SERWIS', heroLead: 'Wybierz punkt, z którym chcesz się skontaktować — każdy ma własny numer i bezpośredni kanał wiadomości.', trustOne: '2 bezpośrednie kontakty', trustTwo: '2 punkty serwisowe', trustThree: 'PL • EN • VN',
        primaryContactAria: 'Główne kontakty do punktów', callNow: 'ZADZWOŃ', routeShort: 'TRASA',
        locationsKicker: 'NASZE PUNKTY', locationsTitle: 'Wybierz najbliższą lokalizację', locationsLead: 'Zadzwoń bezpośrednio do punktu albo uruchom nawigację.', locationOne: 'PUNKT 1', locationTwo: 'PUNKT 2', route: 'WYZNACZ TRASĘ', hoursTitle: 'GODZINY OTWARCIA', sunday: 'Niedziela', monday: 'Poniedziałek', tuesday: 'Wtorek', wednesday: 'Środa', thursday: 'Czwartek', friday: 'Piątek', saturday: 'Sobota', closed: 'Zamknięte',
        detailsKicker: 'ALO SERWIS ONLINE', detailsTitle: 'Wszystkie ważne dane w jednym miejscu', emailLabel: 'EMAIL', websiteLabel: 'STRONA WWW',
        serviceKicker: 'W CZYM MOŻEMY POMÓC?', serviceTitle: 'Przejdź bezpośrednio do odpowiedniej usługi', offerLink: 'SYSTEMY I WYCENA', servicesLink: 'SERWIS URZĄDZEŃ', footerTagline: 'Technika, instalacje i serwis urządzeń', quickContactAria: 'Szybki kontakt do punktów'
    },
    EN: {
        htmlLang: 'en', title: 'Contact | ALO SERWIS', description: 'Contact ALO SERWIS in Warsaw and Wólka Kosowska by phone, Telegram, WhatsApp, Viber or Messenger.', navAria: 'Main navigation', langAria: 'Change language', menu: ['HOME', 'OFFER', 'SERVICES', 'CONTACT', 'EN'],
        skip: 'Skip to content', heroEyebrow: 'WE ARE HERE TO HELP', heroTitle: 'Contact ALO SERWIS', heroLead: 'Choose the location you want to contact — each has its own number and direct messaging channel.', trustOne: '2 direct contacts', trustTwo: '2 service locations', trustThree: 'PL • EN • VN',
        primaryContactAria: 'Main contacts for service locations', callNow: 'CALL NOW', routeShort: 'ROUTE',
        locationsKicker: 'OUR LOCATIONS', locationsTitle: 'Choose your nearest location', locationsLead: 'Call the location directly or start navigation.', locationOne: 'LOCATION 1', locationTwo: 'LOCATION 2', route: 'GET DIRECTIONS', hoursTitle: 'OPENING HOURS', sunday: 'Sunday', monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', closed: 'Closed',
        detailsKicker: 'ALO SERWIS ONLINE', detailsTitle: 'All important details in one place', emailLabel: 'EMAIL', websiteLabel: 'WEBSITE',
        serviceKicker: 'HOW CAN WE HELP?', serviceTitle: 'Go directly to the service you need', offerLink: 'SYSTEMS AND QUOTE', servicesLink: 'DEVICE REPAIR', footerTagline: 'Technology, installations and device repair', quickContactAria: 'Quick contact for service locations'
    },
    VN: {
        htmlLang: 'vi', title: 'Liên hệ | ALO SERWIS', description: 'Liên hệ ALO SERWIS tại Warszawa và Wólka Kosowska qua điện thoại, Telegram, WhatsApp, Viber hoặc Messenger.', navAria: 'Điều hướng chính', langAria: 'Đổi ngôn ngữ', menu: ['ALO', 'BÁO GIÁ', 'DỊCH VỤ', 'LIÊN HỆ', 'VN'],
        skip: 'Đi đến nội dung', heroEyebrow: 'CHÚNG TÔI LUÔN SẴN SÀNG', heroTitle: 'Liên hệ ALO SERWIS', heroLead: 'Chọn cơ sở bạn muốn liên hệ — mỗi cơ sở có số điện thoại và kênh nhắn tin riêng.', trustOne: '2 liên hệ trực tiếp', trustTwo: '2 cơ sở dịch vụ', trustThree: 'PL • EN • VN',
        primaryContactAria: 'Liên hệ chính của các cơ sở', callNow: 'GỌI NGAY', routeShort: 'CHỈ ĐƯỜNG',
        locationsKicker: 'CÁC CƠ SỞ', locationsTitle: 'Chọn cơ sở gần bạn nhất', locationsLead: 'Gọi trực tiếp cho cơ sở hoặc mở ứng dụng chỉ đường.', locationOne: 'CƠ SỞ 1', locationTwo: 'CƠ SỞ 2', route: 'CHỈ ĐƯỜNG', hoursTitle: 'GIỜ LÀM VIỆC', sunday: 'Chủ Nhật', monday: 'Thứ Hai', tuesday: 'Thứ Ba', wednesday: 'Thứ Tư', thursday: 'Thứ Năm', friday: 'Thứ Sáu', saturday: 'Thứ Bảy', closed: 'Đóng cửa',
        detailsKicker: 'ALO SERWIS ONLINE', detailsTitle: 'Mọi thông tin quan trọng tại một nơi', emailLabel: 'EMAIL', websiteLabel: 'TRANG WEB',
        serviceKicker: 'CHÚNG TÔI CÓ THỂ GIÚP GÌ?', serviceTitle: 'Đi thẳng đến dịch vụ bạn cần', offerLink: 'HỆ THỐNG VÀ BÁO GIÁ', servicesLink: 'SỬA CHỮA THIẾT BỊ', footerTagline: 'Kỹ thuật, lắp đặt và sửa chữa thiết bị', quickContactAria: 'Liên hệ nhanh với các cơ sở'
    }
};

let contactLanguage = CONTACT_LANGS.includes(localStorage.getItem('alo_lang')) ? localStorage.getItem('alo_lang') : 'PL';

function renderContactLanguage(language) {
    contactLanguage = CONTACT_LANGS.includes(language) ? language : 'PL';
    const copy = contactCopy[contactLanguage];
    document.documentElement.lang = copy.htmlLang;
    document.querySelector('meta[name="description"]').content = copy.description;
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
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const value = copy[element.dataset.i18nAriaLabel];
        if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    localStorage.setItem('alo_lang', contactLanguage);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextIndex = (CONTACT_LANGS.indexOf(contactLanguage) + 1) % CONTACT_LANGS.length;
    renderContactLanguage(CONTACT_LANGS[nextIndex]);
});

renderContactLanguage(contactLanguage);
