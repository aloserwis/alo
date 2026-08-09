const CONTACT_LANGS = ['PL', 'EN', 'VN'];

const contactCopy = {
    PL: {
        htmlLang: 'pl', title: 'Kontakt | ALO SERWIS', description: 'Skontaktuj się z ALO SERWIS w Warszawie i Wólce Kosowskiej przez telefon, Telegram, WhatsApp, Viber lub Messenger.', navAria: 'Główna nawigacja', langAria: 'Zmień język', menu: ['ALO', 'OFERTA', 'USŁUGI', 'KONTAKT', 'PL'],
        skip: 'Przejdź do treści', heroEyebrow: 'JESTEŚMY DO DYSPOZYCJI', heroTitle: 'Skontaktuj się z ALO SERWIS', heroLead: 'Wybierz wygodny kanał kontaktu lub zadzwoń bezpośrednio do jednego z naszych punktów.', trustOne: '4 kanały wiadomości', trustTwo: '2 punkty serwisowe', trustThree: 'PL • EN • VN',
        mainLabel: 'KONTAKT GŁÓWNY', mainTitle: 'Jeden numer do szybkiego kontaktu', mainHelp: 'Napisz lub zadzwoń — pomożemy wybrać odpowiedni punkt i usługę.', callNow: 'ZADZWOŃ', emailUs: 'NAPISZ EMAIL',
        channelsKicker: 'SZYBKA WIADOMOŚĆ', channelsTitle: 'Wybierz swój komunikator', channelsLead: 'Ten sam numer kontaktowy obsługuje zgłoszenia z obu lokalizacji.',
        locationsKicker: 'NASZE PUNKTY', locationsTitle: 'Wybierz najbliższą lokalizację', locationsLead: 'Zadzwoń bezpośrednio do punktu albo uruchom nawigację.', locationOne: 'PUNKT 1', locationTwo: 'PUNKT 2', route: 'WYZNACZ TRASĘ',
        detailsKicker: 'ALO SERWIS ONLINE', detailsTitle: 'Wszystkie ważne dane w jednym miejscu', emailLabel: 'EMAIL', websiteLabel: 'STRONA WWW',
        serviceKicker: 'W CZYM MOŻEMY POMÓC?', serviceTitle: 'Przejdź bezpośrednio do odpowiedniej usługi', offerLink: 'SYSTEMY I WYCENA', servicesLink: 'SERWIS URZĄDZEŃ', footerTagline: 'Technika, instalacje i serwis urządzeń', quickContactAria: 'Szybki kontakt', message: 'Dzień dobry, kontaktuję się przez stronę ALO SERWIS.'
    },
    EN: {
        htmlLang: 'en', title: 'Contact | ALO SERWIS', description: 'Contact ALO SERWIS in Warsaw and Wólka Kosowska by phone, Telegram, WhatsApp, Viber or Messenger.', navAria: 'Main navigation', langAria: 'Change language', menu: ['HOME', 'OFFER', 'SERVICES', 'CONTACT', 'EN'],
        skip: 'Skip to content', heroEyebrow: 'WE ARE HERE TO HELP', heroTitle: 'Contact ALO SERWIS', heroLead: 'Choose your preferred contact channel or call one of our service locations directly.', trustOne: '4 messaging channels', trustTwo: '2 service locations', trustThree: 'PL • EN • VN',
        mainLabel: 'MAIN CONTACT', mainTitle: 'One number for quick contact', mainHelp: 'Message or call us — we will help you choose the right location and service.', callNow: 'CALL NOW', emailUs: 'SEND EMAIL',
        channelsKicker: 'QUICK MESSAGE', channelsTitle: 'Choose your messenger', channelsLead: 'The same contact number handles requests for both locations.',
        locationsKicker: 'OUR LOCATIONS', locationsTitle: 'Choose your nearest location', locationsLead: 'Call the location directly or start navigation.', locationOne: 'LOCATION 1', locationTwo: 'LOCATION 2', route: 'GET DIRECTIONS',
        detailsKicker: 'ALO SERWIS ONLINE', detailsTitle: 'All important details in one place', emailLabel: 'EMAIL', websiteLabel: 'WEBSITE',
        serviceKicker: 'HOW CAN WE HELP?', serviceTitle: 'Go directly to the service you need', offerLink: 'SYSTEMS AND QUOTE', servicesLink: 'DEVICE REPAIR', footerTagline: 'Technology, installations and device repair', quickContactAria: 'Quick contact', message: 'Hello, I am contacting you through the ALO SERWIS website.'
    },
    VN: {
        htmlLang: 'vi', title: 'Liên hệ | ALO SERWIS', description: 'Liên hệ ALO SERWIS tại Warszawa và Wólka Kosowska qua điện thoại, Telegram, WhatsApp, Viber hoặc Messenger.', navAria: 'Điều hướng chính', langAria: 'Đổi ngôn ngữ', menu: ['ALO', 'BÁO GIÁ', 'DỊCH VỤ', 'LIÊN HỆ', 'VN'],
        skip: 'Đi đến nội dung', heroEyebrow: 'CHÚNG TÔI LUÔN SẴN SÀNG', heroTitle: 'Liên hệ ALO SERWIS', heroLead: 'Chọn kênh liên lạc thuận tiện hoặc gọi trực tiếp tới một trong hai cơ sở của chúng tôi.', trustOne: '4 kênh nhắn tin', trustTwo: '2 cơ sở dịch vụ', trustThree: 'PL • EN • VN',
        mainLabel: 'LIÊN HỆ CHUNG', mainTitle: 'Một số điện thoại để liên hệ nhanh', mainHelp: 'Nhắn tin hoặc gọi điện — chúng tôi sẽ giúp bạn chọn đúng cơ sở và dịch vụ.', callNow: 'GỌI NGAY', emailUs: 'GỬI EMAIL',
        channelsKicker: 'NHẮN TIN NHANH', channelsTitle: 'Chọn ứng dụng liên lạc', channelsLead: 'Cùng một số điện thoại tiếp nhận yêu cầu cho cả hai cơ sở.',
        locationsKicker: 'CÁC CƠ SỞ', locationsTitle: 'Chọn cơ sở gần bạn nhất', locationsLead: 'Gọi trực tiếp cho cơ sở hoặc mở ứng dụng chỉ đường.', locationOne: 'CƠ SỞ 1', locationTwo: 'CƠ SỞ 2', route: 'CHỈ ĐƯỜNG',
        detailsKicker: 'ALO SERWIS ONLINE', detailsTitle: 'Mọi thông tin quan trọng tại một nơi', emailLabel: 'EMAIL', websiteLabel: 'TRANG WEB',
        serviceKicker: 'CHÚNG TÔI CÓ THỂ GIÚP GÌ?', serviceTitle: 'Đi thẳng đến dịch vụ bạn cần', offerLink: 'HỆ THỐNG VÀ BÁO GIÁ', servicesLink: 'SỬA CHỮA THIẾT BỊ', footerTagline: 'Kỹ thuật, lắp đặt và sửa chữa thiết bị', quickContactAria: 'Liên hệ nhanh', message: 'Xin chào, tôi liên hệ qua trang web ALO SERWIS.'
    }
};

let contactLanguage = CONTACT_LANGS.includes(localStorage.getItem('alo_lang')) ? localStorage.getItem('alo_lang') : 'PL';

function updateContactLinks(copy) {
    const encoded = encodeURIComponent(copy.message);
    document.querySelectorAll('[data-channel="telegram"]').forEach((link) => { link.href = `https://t.me/aka242?text=${encoded}`; });
    document.querySelectorAll('[data-channel="whatsapp"]').forEach((link) => { link.href = `https://api.whatsapp.com/send?phone=48888686121&text=${encoded}`; });
}

function renderContactLanguage(language) {
    contactLanguage = CONTACT_LANGS.includes(language) ? language : 'PL';
    const copy = contactCopy[contactLanguage];
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.title;
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
    updateContactLinks(copy);
    localStorage.setItem('alo_lang', contactLanguage);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextIndex = (CONTACT_LANGS.indexOf(contactLanguage) + 1) % CONTACT_LANGS.length;
    renderContactLanguage(CONTACT_LANGS[nextIndex]);
});

renderContactLanguage(contactLanguage);
