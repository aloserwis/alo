(() => {
  const langOptions = [
    ['pl', '🇵🇱 PL'], ['vi', '🇻🇳 VN'], ['en', '🇬🇧 EN'],
    ['zh', '🇨🇳 CN'], ['tr', '🇹🇷 TR'], ['uk', '🇺🇦 UK']
  ];
  const menuGroups = [
    {id:'gsm',label:'Serwis GSM',items:[['Usługi','/gsm.html?page=services'],['Cennik','/gsm.html?page=prices'],['Naprawa','/gsm.html?page=repair'],['Sprawdź status naprawy','/gsm.html?page=check']]},
    {id:'cctv',label:'Systemy CCTV',items:[['Camera CCTV','/cctv.html?page=cameras'],['System alarmowy','/cctv.html?page=alarm'],['Sieci i Internet','/cctv.html?page=internet'],['Kontrola dostępu','/cctv.html?page=access'],['Domofony i wideodomofony','/cctv.html?page=intercom'],['Automatyka domu','/cctv.html?page=automation']]},
    {id:'signage',label:'AloSignage',items:[['Ekrany reklamowe','/alosignage.html?page=screens'],['Jak to działa','/alosignage.html?page=how'],['Oprogramowanie CMS do zarządzania treścią','/alosignage.html?page=cms'],['Logowanie','https://sig.aloserwis.com/app#/login','external']]}
  ];
  const contactHref='/kontakt.html';
  const pageData = {
    shop:{group:'Sklep',title:'Sklep',lead:'Aktualizacja w toku…',sections:[]},
    services:{group:'Serwis GSM',title:'Serwis GSM',lead:'Naprawiamy telefony, tablety i laptopy. Diagnozujemy usterki, wymieniamy podzespoły i sprawdzamy urządzenie po naprawie.',image:'/assets/images/gsm-screen-repair.webp',kicker:'Serwis GSM',sections:[{title:'Naprawy urządzeń',body:'Wybierz problem, aby sprawdzić, jak możemy pomóc.',cards:[['Ekran i dotyk','Diagnoza obrazu i dotyku oraz dobór ekranu do modelu urządzenia.','▣'],['Bateria i zasilanie','Sprawdzamy baterię, port ładowania i usterki zasilania.','▰'],['Zalanie urządzenia','Oceniamy uszkodzenia, czyścimy podzespoły i sprawdzamy możliwość naprawy.','◉'],['Dźwięk i aparat','Sprawdzamy głośniki, mikrofon, aparat i powiązane połączenia.','◍'],['Oprogramowanie i dane','Pomagamy w typowych problemach z oprogramowaniem i omawiamy działania dotyczące danych.','⌘'],['Laptopy i tablety','Przyjmujemy urządzenia mobilne i komputery w punktach ALO SERWIS.','▱']]},{title:'Potrzebujesz diagnozy?',body:'Podaj model i opisz problem. Skontaktujemy się, aby wskazać kolejny krok.',cta:'Skontaktuj się z ALO SERWIS'}]},
    prices:{group:'Serwis GSM',title:'Cennik napraw',lead:'Katalog usług i cen uzupełnimy po przygotowaniu listy. Koszt naprawy potwierdzamy po diagnozie i przed rozpoczęciem pracy.',image:'/assets/images/tablet-repair.webp',kicker:'Cennik',sections:[{title:'Sprawdź ceny usług',body:'Przygotowujemy cennik. Ostateczna cena zależy od modelu, części i wyniku diagnozy.',type:'prices'},{title:'Nie ma Twojego modelu na liście?',body:'Podaj model i opisz usterkę — sprawdzimy możliwość naprawy i przygotujemy wycenę.',cta:'Poproś o wycenę'}]},
    repair:{group:'Serwis GSM',title:'Naprawa urządzeń',lead:'Przejrzysty proces: przyjęcie urządzenia, diagnoza, informacja o koszcie, naprawa po akceptacji i test przed wydaniem.',image:'/assets/images/gsm-iphone-workbench.webp?v=20261006',kicker:'Naprawa',sections:[{title:'Jak przebiega naprawa',body:'Przed rozpoczęciem naprawy informujemy o stanie urządzenia i koszcie.',steps:[['01','Przyjęcie','Zapisujemy model, przekazane akcesoria i opis usterki.'],['02','Diagnoza','Sprawdzamy urządzenie i ustalamy zakres prac.'],['03','Wycena','Podajemy koszt i przewidywany termin. Pracę zaczynamy po akceptacji.'],['04','Naprawa i testy','Naprawiamy, sprawdzamy funkcje urządzenia i informujemy o odbiorze.']]},{title:'Zgłoś naprawę',body:'Zgłoszenia kierujemy przez stronę Kontakt. W formularzu naprawy można dodać zdjęcia urządzenia.',cta:'Przejdź do kontaktu',legacy:'/uslugi.html#wycena'}]},
    check:{group:'Serwis GSM',title:'Sprawdź status naprawy',lead:'Wpisz numer zlecenia i kod bezpieczeństwa otrzymany przy przyjęciu urządzenia, aby sprawdzić status naprawy.',image:'/assets/images/phone-repair.webp',kicker:'Sprawdź status',sections:[{title:'Status zlecenia',body:'Szczegóły zostaną pokazane dopiero po bezpiecznym połączeniu z systemem zleceń i potwierdzeniu obu danych.',type:'check'},{title:'Nie masz kodu bezpieczeństwa?',body:'Kod bezpieczeństwa otrzymujesz przy przyjęciu urządzenia. Jeśli potrzebujesz pomocy, skontaktuj się z punktem serwisowym.',cta:'Skontaktuj się z ALO SERWIS'}]},
    cameras:{group:'Systemy CCTV',title:'Monitoring CCTV i kamery',lead:'Dobieramy i montujemy monitoring do domu, sklepu i firmy. Pomagamy wybrać urządzenia, poprowadzić okablowanie, skonfigurować nagrywanie i zdalny podgląd.',image:'/assets/index/camera.webp',kicker:'Monitoring CCTV',sections:[{title:'Od oględzin do uruchomienia',body:'Ustalamy obszary obserwacji i wymagany czas przechowywania nagrań, a następnie dobieramy kamery, rejestrator i okablowanie.',bullets:['Kamery IP i PoE dobrane do obiektu','Rejestrator NVR/DVR i pamięć dopasowane do potrzeb','Podgląd na żywo i odtwarzanie na telefonie','Test pola widzenia, połączeń i działania po montażu']},{title:'Nowa instalacja, rozbudowa lub naprawa',body:'Możemy omówić nową instalację, wymianę urządzeń, dodanie kamer lub diagnostykę istniejącego systemu.',cta:'Poproś o konsultację CCTV'}]},
    alarm:{group:'Systemy CCTV',title:'System alarmowy',lead:'Systemy alarmowe przewodowe i bezprzewodowe do domu oraz firmy, dobierane do układu obiektu i sposobu użytkowania.',image:'/assets/illustrations/alarm.svg',kicker:'Systemy alarmowe',sections:[{title:'Ochrona dopasowana do obiektu',body:'System może obejmować centralę, czujniki otwarcia i ruchu, sygnalizator oraz obsługę z manipulatora lub aplikacji.',bullets:['Analiza obiektu i chronionych stref','Dobór czujników i ich rozmieszczenia','Montaż, konfiguracja i instruktaż','Możliwa integracja z monitoringiem i kontrolą dostępu']},{title:'Montaż lub diagnostyka systemu?',body:'Opisz obiekt, a omówimy zakres prac i możliwe rozwiązanie.',cta:'Skontaktuj się z ALO SERWIS'}]},
    internet:{group:'Systemy CCTV',title:'Internet i sieci Wi‑Fi',lead:'Projektujemy i instalujemy sieci w domach, sklepach i firmach — z odpowiednim zasięgiem, stabilnym połączeniem i prostą obsługą.',image:'/assets/illustrations/network.svg',kicker:'Sieci i Internet',sections:[{title:'Sieć przewodowa i Wi‑Fi',body:'W zależności od obiektu łączymy routery, punkty dostępowe, przełączniki PoE, szafy rack i okablowanie.',bullets:['Analiza obszaru i punktów sieciowych','Rozbudowa Wi‑Fi o odpowiednie punkty dostępowe','Okablowanie LAN komputerów, kamer i urządzeń sieciowych','Konfiguracja i test po montażu']},{title:'Sieć dla sklepu lub biura',body:'Infrastrukturę sieciową można połączyć z monitoringiem, kasą i pozostałymi urządzeniami.',cta:'Poproś o konsultację sieci'}]},
    access:{group:'Systemy CCTV',title:'Kontrola dostępu',lead:'Zarządzanie dostępem do drzwi i stref w firmie za pomocą rozwiązania dopasowanego do obiektu.',image:'/assets/illustrations/access.svg',kicker:'Kontrola dostępu',sections:[{title:'Rozwiązanie dopasowane do obiektu',body:'System może korzystać z czytników kart, kodów PIN, zamków elektrycznych, kontrolera i oprogramowania użytkowników.',bullets:['Analiza drzwi i kontrolowanych przejść','Dobór urządzeń i metod identyfikacji','Konfiguracja uprawnień użytkowników','Możliwa integracja z kamerami, alarmem i domofonem']},{title:'Chcesz kontrolować jedno czy wiele przejść?',body:'Podaj liczbę przejść i sposób użytkowania — przygotujemy wstępną konsultację.',cta:'Skontaktuj się z ALO SERWIS'}]},
    intercom:{group:'Systemy CCTV',title:'Domofony i wideodomofony',lead:'Montujemy domofony i wideodomofony, dzięki którym można porozmawiać z gościem przed otwarciem drzwi.',image:'/assets/illustrations/intercom.svg',kicker:'Domofony i wideodomofony',sections:[{title:'Rozmowa głosowa lub wideo',body:'Dobieramy monitor wewnętrzny, panel wejściowy i połączenie z telefonem do obiektu oraz istniejącej instalacji.',bullets:['Dobór urządzeń do domu lub firmy','Montaż panelu wejściowego i urządzeń wewnętrznych','Konfiguracja otwierania drzwi, jeśli system to obsługuje','Test dźwięku, obrazu i połączeń']},{title:'Modernizacja lub wymiana instalacji',body:'Sprawdzimy obecną instalację i doradzimy jej wymianę lub rozbudowę.',cta:'Zapytaj o domofon'}]},
    automation:{group:'Systemy CCTV',title:'Automatyka domu',lead:'Łączymy kompatybilne urządzenia domowe — od oświetlenia i czujników po bramy, rolety i systemy bezpieczeństwa.',image:'/assets/illustrations/smart-home.svg',kicker:'Automatyka domu',sections:[{title:'Automatyzacja dopasowana do codziennych potrzeb',body:'Zaczynamy od konkretnej potrzeby i sprawdzamy zgodność urządzeń przed zaproponowaniem konfiguracji.',bullets:['Sterowanie lokalne lub przez aplikację, jeśli urządzenie je obsługuje','Połączenie czujników i scen automatyzacji','Możliwa integracja z kamerami, domofonem i alarmem','Możliwa etapowa rozbudowa zgodnie z urządzeniami i budżetem']},{title:'Dobór odpowiedniej konfiguracji',body:'Prześlij listę urządzeń lub opisz potrzeby — sprawdzimy możliwe rozwiązanie.',cta:'Skontaktuj się z ALO SERWIS'}]},
    screens:{group:'AloSignage',title:'Ekrany reklamowe AloSignage',lead:'Wyświetlaj menu, promocje i informacje na ekranach. Treści można zdalnie aktualizować w systemie CMS.',image:'/assets/illustrations/signage-screens.svg',kicker:'Digital Signage',sections:[{title:'Ekrany dla sklepów i firm',body:'Pomagamy dobrać ekran i player oraz wykonać montaż i konfigurację do miejsca użytkowania.',bullets:['Ekrany informacyjne i reklamowe do wnętrz','Dobór rozmiaru, rozdzielczości i sposobu montażu','Konfiguracja treści do sposobu wyświetlania','Rozwiązania dla jednego lub wielu ekranów']},{title:'Zobacz, jak działa AloSignage',body:'Sprawdź, jak aktualizować treści i zarządzać ekranami przez CMS.',cta:'Jak to działa',href:'/alosignage.html?page=how'}]},
    how:{group:'AloSignage',title:'Jak to działa',lead:'Przygotuj treści, ułóż harmonogram i wyślij go na ekrany przez CMS. Zmieniaj materiały z panelu bez ponownego drukowania plakatów.',image:'/assets/illustrations/signage-cms.svg',kicker:'Jak to działa',sections:[{title:'Od treści do ekranu',body:'Pracownicy mogą aktualizować komunikaty zgodnie z potrzebami firmy.',steps:[['01','Przygotuj treści','Przygotuj grafiki, wideo lub układ menu na ekran.'],['02','Dodaj do CMS','Dodaj materiały do biblioteki i wybierz ekrany.'],['03','Ułóż harmonogram','Ustal kolejność i czas wyświetlania.'],['04','Monitoruj i aktualizuj','Sprawdzaj status ekranów i zmieniaj treści, gdy trzeba.']]},{title:'Korzystasz z wielu ekranów?',body:'Podaj liczbę ekranów, miejsce instalacji i rodzaj treści — doradzimy rozwiązanie.',cta:'Zapytaj o AloSignage'}]},
    cms:{group:'AloSignage',title:'Oprogramowanie CMS do zarządzania treścią',lead:'Zarządzaj treściami i urządzeniami AloSignage online: dodawaj materiały, planuj emisję i sprawdzaj przypisane ekrany.',image:'/assets/illustrations/signage-cms.svg',kicker:'CMS',sections:[{title:'Zarządzaj ekranami z jednego miejsca',body:'CMS porządkuje materiały i wysyła je do podłączonych playerów.',bullets:['Zarządzanie biblioteką zdjęć i filmów','Tworzenie playlist i harmonogramów','Przypisywanie treści do jednego lub wielu ekranów','Podgląd statusu playerów zgodnie z uprawnieniami konta']},{title:'Logowanie do systemu',body:'Konto AloSignage korzysta z osobnej strony logowania.',cta:'Logowanie AloSignage',href:'https://sig.aloserwis.com/app#/login',external:true}]}
  };
  const repairPhotoPaths={
    'Ekran i dotyk':'/assets/images/gsm-screen-before-after.webp',
    'Zalanie urządzenia':'/assets/images/gsm-samsung-water.webp',
    'Dźwięk i aparat':'/assets/images/gsm-samsung-components.webp'
  };
  pageData.repair.sections.splice(1,0,{
    title:pageData.services.sections[0].title,
    body:pageData.services.sections[0].body,
    cards:pageData.services.sections[0].cards.filter(c=>repairPhotoPaths[c[0]]).map(c=>[...c,repairPhotoPaths[c[0]]])
  });
  pageData.cameras.image='/assets/photos/cctv-warehouse-installation.webp';
  pageData.internet.image='/assets/photos/cctv-network-rack.webp';
  pageData.cameras.sections[0].media='/assets/photos/cctv-technician.webp';
  pageData.cameras.sections[1].gallery=[
    ['/assets/photos/cctv-warehouse-camera.webp','Monitoring CCTV i kamery'],
    ['/assets/photos/cctv-camera-mounting.webp','Od oględzin do uruchomienia'],
    ['/assets/photos/cctv-network-rack.webp','Rejestrator NVR/DVR i pamięć dopasowane do potrzeb']
  ];
  const dictionary={
    pl:{gsm:'Serwis GSM',cctv:'Systemy CCTV',contact:'Kontakt',signage:'AloSignage',contactBtn:'Kontakt',home:'Strona główna',language:'Język',services:'Usługi',footer:'Naprawa · Instalacje · Digital Signage',messenger:'Messenger',call:'Zadzwoń'},
    vi:{gsm:'Serwis GSM',cctv:'Systemy CCTV',contact:'Liên hệ',signage:'AloSignage',contactBtn:'Liên hệ',home:'Trang chủ',language:'Ngôn ngữ',services:'Usługi',footer:'Naprawa · Lắp đặt · Digital Signage',messenger:'Messenger',call:'Gọi điện'},
    en:{gsm:'GSM services',cctv:'CCTV services',contact:'Contact',signage:'AloSignage',contactBtn:'Contact',home:'Home',language:'Language',services:'Services',footer:'Repair · Installation · Digital Signage',messenger:'Messenger',call:'Call'},
    zh:{gsm:'GSM 服务',cctv:'CCTV 服务',contact:'联系',signage:'AloSignage',contactBtn:'联系',home:'主页',language:'语言',services:'服务',footer:'维修 · 安装 · Digital Signage',messenger:'Messenger',call:'电话'},
    tr:{gsm:'GSM hizmetleri',cctv:'CCTV hizmetleri',contact:'İletişim',signage:'AloSignage',contactBtn:'İletişim',home:'Ana sayfa',language:'Dil',services:'Hizmetler',footer:'Onarım · Kurulum · Digital Signage',messenger:'Messenger',call:'Ara'},
    uk:{gsm:'Послуги GSM',cctv:'Послуги CCTV',contact:'Контакти',signage:'AloSignage',contactBtn:'Контакти',home:'Головна',language:'Мова',services:'Послуги',footer:'Ремонт · Монтаж · Digital Signage',messenger:'Messenger',call:'Зателефонувати'}
  };

  const app=document.getElementById('app');
  if(!app)return;
  const view=document.body.dataset.view||'home';
  let selectedLang='pl';
  try{selectedLang=localStorage.getItem('alo-site-language')||'pl'}catch{}
  selectedLang=new URLSearchParams(location.search).get('lang')||selectedLang;
  if(!dictionary[selectedLang])selectedLang='pl';
  const t=(key)=>dictionary.pl[key]||key;
  const tr=(text)=>window.ALO_I18N.translate(text,selectedLang);
  const currentPage=view==='gsm'?new URLSearchParams(location.search).get('page')||'services':view==='cctv'?new URLSearchParams(location.search).get('page')||'cameras':view==='signage'?new URLSearchParams(location.search).get('page')||'screens':null;
  const activeGroup=view==='gsm'&&currentPage!=='shop'?'gsm':view==='cctv'?'cctv':view==='signage'?'signage':'';

  const esc=(s='')=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const contactButton=(label='Skontaktuj się',href=contactHref)=>`<a class="btn" href="${href}">${esc(label)} <span aria-hidden="true">→</span></a>`;
  const header=`<a class="skip-link" href="#main">Przejdź do treści</a><header class="site-header"><div class="wrap header-row"><a class="brand" href="/" aria-label="ALO SERWIS — strona główna"><span class="brand-mark"><img src="/assets/alo-logo.webp" alt=""></span><span class="brand-name">ALO SERWIS<small>NAPRAWA · INSTALACJE · DIGITAL SIGNAGE</small></span></a><nav class="primary-nav" id="primary-nav" aria-label="Menu główne"><a class="nav-contact" href="/gsm.html?page=shop" ${currentPage==='shop'?'aria-current="page"':''}>Sklep</a>${menuGroups.map(g=>`<div class="nav-group"><button class="nav-trigger" type="button" aria-expanded="false" aria-controls="menu-${g.id}" data-group="${g.id}">${esc(t(g.id==='gsm'?'gsm':g.id==='cctv'?'cctv':'signage'))}<span class="chevron" aria-hidden="true">⌄</span></button><div class="mega-menu" id="menu-${g.id}">${g.items.map((item,i)=>`<a class="${g.id==='signage'&&i===3?'login-link':''}" href="${item[1]}" ${item[2]==='external'?'target="_blank" rel="noopener noreferrer"':''}>${esc(item[0])}${item[2]==='external'?' ↗':''}</a>`).join('')}</div></div>`).join('')}<a class="nav-contact" href="${contactHref}">${esc(t('contact'))}</a></nav><div class="nav-mobile-row"><label class="sr-only" for="language">${esc(t('language'))}</label><select class="lang-select" id="language" aria-label="${esc(t('language'))}">${langOptions.map(o=>`<option value="${o[0]}" ${o[0]===selectedLang?'selected':''}>${o[1]}</option>`).join('')}</select><button class="mobile-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Otwórz menu">☰</button></div></div></header>`;
  const footer=`<footer class="site-footer"><div class="wrap"><div class="footer-grid"><div><a class="brand" href="/" style="color:#fff"><span class="brand-mark"><img src="/assets/alo-logo.webp" alt=""></span><span class="brand-name">ALO SERWIS<small style="color:#bdc1c6">WARSZAWA · WÓLKA KOSOWSKA</small></span></a><p>${esc(t('footer'))}</p><p>NIP 7251942128</p></div><div><b>${esc(t('services'))}</b><div class="footer-links"><a href="/gsm.html?page=services">Serwis GSM</a><a href="/cctv.html?page=cameras">Systemy CCTV</a><a href="/alosignage.html?page=screens">AloSignage</a><a href="${contactHref}">${esc(t('contact'))}</a></div></div><div><b>Kontakt</b><div class="footer-links"><a href="tel:+48733676869">Bakalarska · 733 67 68 69</a><a href="tel:+48787456999">Wólka · 787 456 999</a><a href="mailto:alo@aloserwis.com">alo@aloserwis.com</a><a href="/regulamin.html">Regulamin</a><a href="/regulamin-serwisu.html">Regulamin serwisu</a></div></div></div><div class="copyright">© ${new Date().getFullYear()} ALO SERWIS · aloserwis.com</div></div></footer><div class="mobile-contact" aria-label="Szybki kontakt"><a href="https://m.me/dienthoaibalan" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">💬</span>${esc(t('messenger'))}</a><a href="tel:+48733676869"><span aria-hidden="true">☎</span>${esc(t('call'))} · 733 67 68 69</a></div>`;
  const headerFor=(g)=>{document.querySelectorAll('.nav-trigger').forEach(b=>{b.classList.toggle('active',b.dataset.group===g);b.setAttribute('aria-expanded','false')})};
  const gsmServicePhotos={
    'Ekran i dotyk':'/assets/images/gsm-screen-repair.webp',
    'Bateria i zasilanie':'/assets/images/gsm-battery-replacement.webp',
    'Zalanie urządzenia':'/assets/images/gsm-water-damage.webp',
    'Dźwięk i aparat':'/assets/images/gsm-component-repair.webp',
    'Oprogramowanie i dane':'/assets/images/gsm-macos-install.webp',
    'Laptopy i tablety':'/assets/images/gsm-keyboard-before-after.webp'
  };
  const cardHtml=(c)=>{
    const photo=c[3]||(currentPage==='services'?gsmServicePhotos[c[0]]:null);
    const wide=!!c[3]||c[0]==='Oprogramowanie i dane'||c[0]==='Laptopy i tablety';
    const photoWidth=photo?.includes('gsm-samsung-')?1408:1376;
    const content=`<h3>${esc(c[0])}</h3><p>${esc(c[1])}</p><a class="text-link" href="${contactHref}">Zapytaj o usługę →</a>`;
    return photo?`<article class="service-card service-card--photo"><img class="service-card-photo${wide?' service-card-photo--wide':''}" src="${photo}" alt="${esc(tr(c[0]))}" width="${wide?photoWidth:1448}" height="${wide?768:1086}" loading="lazy" decoding="async"><div class="service-card-body">${content}</div></article>`:`<article class="service-card"><span class="icon-tile" aria-hidden="true">${esc(c[2]||'✦')}</span>${content}</article>`;
  };
  const sectionHtml=(s)=>{

    if(s.type==='prices')return `<div class="price-placeholder"><table><thead><tr><th>Usługa</th><th>Model urządzenia</th><th>Cena</th><th>Czas orientacyjny</th></tr></thead><tbody><tr><td colspan="4"><div class="empty-state">Cennik zostanie uzupełniony po przygotowaniu katalogu usług.</div></td></tr></tbody></table></div>`;
    if(s.type==='check')return `<form class="form-card" id="status-form"><div class="form-grid"><div class="field"><label for="ticket">Numer zlecenia</label><input id="ticket" name="ticket" autocomplete="off" required placeholder="Np. WK1234"></div><div class="field"><label for="safe-code">Kod bezpieczeństwa zlecenia</label><input id="safe-code" name="safe-code" autocomplete="off" required placeholder="Wpisz kod z potwierdzenia przyjęcia"></div><div class="field full"><button class="btn" type="submit">Sprawdź status naprawy</button></div></div><p class="fine-print">Dane zlecenia będą widoczne po bezpiecznym połączeniu z systemem napraw. Formularz obecnie nie wysyła ani nie zapisuje danych.</p><div id="status-result" aria-live="polite"></div></form>`;
    if(s.cards){
      const gridClass=currentPage==='services'?'gsm-photo-cards':currentPage==='repair'?'repair-photo-cards':'';
      return `<div class="cards ${gridClass}">${s.cards.map(cardHtml).join('')}</div>`;
    }
    if(s.steps)return `<div class="steps">${s.steps.map(x=>`<article class="step"><span class="step-num">${esc(x[0])}</span><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></article>`).join('')}</div>`;
    if(s.bullets){
      const list=`<ul class="list-check">${s.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
      return s.media?`<div class="section-media-grid">${list}<img src="${s.media}" alt="${esc(tr(s.title))}" loading="lazy" decoding="async"></div>`:list;
    }
    if(s.gallery)return `<div class="cctv-photo-gallery">${s.gallery.map(([src,alt])=>`<figure><img src="${src}" alt="${esc(tr(alt))}" loading="lazy" decoding="async"></figure>`).join('')}</div>`;
    if(s.contacts)return `<div class="contact-grid">${s.contacts.map(x=>`<article class="location-card"><span class="kicker">${esc(x[0])}</span><h3>${esc(x[1])}</h3><p>${x[2]}</p><a class="phone-number" href="tel:${x[3]}">${esc(x[4])}</a><div class="contact-actions"><a href="tel:${x[3]}">Zadzwoń</a><a href="${x[5]}" target="_blank" rel="noopener noreferrer">Mapa</a></div></article>`).join('')}</div>`;
    return '';
  };
  const pageSection=(s)=>`<section class="section ${s.soft?'soft':''}"><div class="wrap"><div class="section-head"><div class="kicker">${esc(s.kicker||'ALO SERWIS')}</div><h2>${esc(s.title)}</h2><p class="section-intro">${esc(s.body||'')}</p></div>${sectionHtml(s)}${s.cta?`<div class="button-row">${s.href?`<a class="btn" href="${s.href}" ${s.external?'target="_blank" rel="noopener noreferrer"':''}>${esc(s.cta)} →</a>`:contactButton(s.cta,contactHref)}</div>`:''}</div></section>`;
  const home=`<main id="main" class="page-wrap"><section class="hero"><div class="wrap hero-grid"><div><div class="eyebrow">ALO SERWIS · WARSZAWA I WÓLKA KOSOWSKA</div><h1>Serwis i rozwiązania, które <span>działają.</span></h1><p class="lead">Naprawiamy telefony, tablety i laptopy. Montujemy monitoring, sieci i alarmy. Pomagamy firmom uruchomić nowoczesne ekrany reklamowe.</p><div class="button-row"><a class="btn" href="${contactHref}">Zapytaj o usługę →</a><a class="btn secondary" href="/gsm.html?page=services">Poznaj usługi GSM</a></div><div class="hero-note">Dwa punkty obsługi · Warszawa i Wólka Kosowska</div></div><div class="hero-visual"><img src="/assets/images/services-hero.webp" alt="Usługi ALO SERWIS — naprawa urządzeń i instalacje" loading="eager"><div class="visual-card"><b>Technologia dla domu i firmy</b>Doradzamy, montujemy i wspieramy po uruchomieniu.</div></div></div></section><section class="section"><div class="wrap"><div class="section-head"><div class="kicker">Nasze dziedziny</div><h2>Wybierz, czego potrzebujesz.</h2><p class="section-intro">Od naprawy telefonu po system monitoringu i ekrany reklamowe — skontaktuj się z właściwym zespołem.</p></div><div class="cards"><article class="service-card"><span class="icon-tile">▣</span><h3>Serwis GSM</h3><p>Usługi, ceny, naprawa urządzeń i sprawdzanie statusu zlecenia.</p><a class="text-link" href="/gsm.html?page=services">Poznaj usługi GSM →</a></article><article class="service-card"><span class="icon-tile">◉</span><h3>Systemy CCTV</h3><p>Kamery, alarmy, sieci, kontrola dostępu i rozwiązania dla domu.</p><a class="text-link" href="/cctv.html?page=cameras">Poznaj usługi CCTV →</a></article><article class="service-card"><span class="icon-tile">▤</span><h3>AloSignage</h3><p>Ekrany reklamowe i zdalne zarządzanie treścią przez CMS.</p><a class="text-link" href="/alosignage.html?page=screens">Poznaj AloSignage →</a></article></div></div></section><section class="section soft"><div class="wrap"><div class="section-head"><div class="kicker">Jak pracujemy</div><h2>Jasny plan od pierwszej rozmowy.</h2></div><div class="steps"><article class="step"><span class="step-num">01 / KONTAKT</span><h3>Opowiedz o potrzebie</h3><p>Skierujemy zapytanie do właściwej usługi.</p></article><article class="step"><span class="step-num">02 / WYCENA</span><h3>Dobieramy rozwiązanie</h3><p>Ustalamy zakres i koszt przed rozpoczęciem.</p></article><article class="step"><span class="step-num">03 / REALIZACJA</span><h3>Wykonujemy usługę</h3><p>Pracujemy po uzgodnieniu szczegółów.</p></article><article class="step"><span class="step-num">04 / WSPARCIE</span><h3>Pomagamy po realizacji</h3><p>Możesz wrócić do nas po dalszą pomoc.</p></article></div></div></section><section class="section"><div class="wrap"><div class="cta-panel"><div><div class="kicker">ALO SERWIS</div><h2>Potrzebujesz pomocy lub wyceny?</h2><p>Wybierz temat i skontaktuj się z nami przez jeden punkt kontaktu.</p></div>${contactButton('Przejdź do kontaktu')}</div></div></section></main>`;

  const generic=(data)=>{
    if(!data)return `<main id="main" class="page-wrap"><section class="section"><div class="wrap"><h1>Nie znaleziono strony</h1><a class="btn" href="/">Strona główna</a></div></section></main>`;
    if(currentPage==='shop')return `<main id="main" class="page-wrap"><section class="section"><div class="wrap"><h1>Sklep</h1><p class="lead">Aktualizacja w toku…</p></div></section></main>`;
    let sections=data.sections.map((s,i)=>pageSection({...s,soft:i%2===1,kicker:data.kicker})).join('');
    const visual=currentPage==='services'?`<figure class="gsm-model-visual"><div class="gsm-model-stage"><img class="gsm-model-fallback" src="${data.image}" alt="${esc(data.title)} — ALO SERWIS"><model-viewer id="gsm-phone-model" src="/assets/models/iphone-17-pro.glb" alt="iPhone 17 Pro 3D" loading="eager" camera-controls touch-action="pan-y" disable-zoom auto-rotate rotation-per-second="12deg" interaction-prompt="none" camera-orbit="25deg 78deg auto" field-of-view="26deg" shadow-intensity="0.8" shadow-softness="1" environment-image="neutral" exposure="1"></model-viewer></div><figcaption>3D · <a href="https://sketchfab.com/Ranguel" target="_blank" rel="noopener noreferrer">Ranguel</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></figcaption></figure>`:`<img ${currentPage==='repair'?'class="repair-hero-image"':currentPage==='cameras'?'class="cctv-hero-photo"':currentPage==='internet'?'class="cctv-hero-photo cctv-hero-photo--portrait"':''} src="${data.image}" alt="${esc(data.title)} — ALO SERWIS" loading="lazy">`;
    const hero=`<section class="page-hero"><div class="wrap page-hero-grid"><div><div class="breadcrumbs"><a href="/">Strona główna</a> / ${esc(data.group)} / ${esc(data.title)}</div><div class="eyebrow">${esc(data.kicker)}</div><h1>${esc(data.title)}</h1><p>${esc(data.lead)}</p><div class="button-row">${contactButton('Skontaktuj się')}</div></div>${visual}</div></section>`;
    return `<main id="main" class="page-wrap">${hero}${sections}<section class="section"><div class="wrap"><div class="cta-panel"><div><div class="kicker">ALO SERWIS · WARSZAWA · WÓLKA KOSOWSKA</div><h2>Zapytaj o rozwiązanie dla siebie.</h2><p>Wszystkie zapytania i kanały kontaktu znajdziesz na jednej stronie.</p></div>${contactButton('Otwórz stronę kontaktową')}</div></div></section></main>`;
  };
  const contact=`<main id="main" class="page-wrap"><section class="page-hero"><div class="wrap"><div class="breadcrumbs"><a href="/">Strona główna</a> / Kontakt</div><div class="eyebrow">ALO SERWIS · WARSZAWA I WÓLKA KOSOWSKA</div><h1>Skontaktuj się z ALO SERWIS.</h1><p>Wybierz lokalizację lub temat zapytania. Na telefonie możesz szybko zadzwonić albo napisać na Messengerze.</p></div></section><section class="section"><div class="wrap"><div class="contact-grid"><article class="location-card"><span class="kicker">Punkt 1</span><h3>Bakalarska</h3><p>Bakalarska 2 / B214<br>02-212 Warszawa</p><a class="phone-number" href="tel:+48733676869">733 67 68 69</a><div class="contact-actions"><a href="tel:+48733676869">Zadzwoń</a><a href="https://m.me/dienthoaibalan" target="_blank" rel="noopener noreferrer">Messenger</a><a href="https://www.google.com/maps/dir/?api=1&destination=Bakalarska%202%2FB214%2C%2002-212%20Warszawa" target="_blank" rel="noopener noreferrer">Trasa</a></div></article><article class="location-card"><span class="kicker">Punkt 2</span><h3>Wólka Kosowska</h3><p>Nadrzeczna 7C / A3 (ASG)<br>05-552 Wólka Kosowska</p><a class="phone-number" href="tel:+48787456999">787 456 999</a><div class="contact-actions"><a href="tel:+48787456999">Zadzwoń</a><a href="viber://chat?number=%2B48787456999">Viber</a><a href="https://www.google.com/maps/dir/?api=1&destination=Nadrzeczna%207C%2FA3%2C%2005-552%20W%C3%B3lka%20Kosowska" target="_blank" rel="noopener noreferrer">Trasa</a></div></article></div></div></section><section class="section soft"><div class="wrap"><div class="section-head"><div class="kicker">Wybierz temat</div><h2>W czym możemy pomóc?</h2><p class="section-intro">Przejdź do właściwego formularza. Wszystkie zgłoszenia zaczynają się tutaj.</p></div><div class="contact-chooser"><a class="contact-choice" href="/uslugi.html#wycena"><b>Naprawa urządzenia</b><span>Opis usterki i zdjęcia urządzenia</span></a><a class="contact-choice" href="/oferta.html"><b>Wycena CCTV / instalacji</b><span>Opis lokalizacji i potrzebnego systemu</span></a><a class="contact-choice" href="/gsm.html?page=check"><b>Sprawdź status naprawy</b><span>Numer zlecenia i kod bezpieczeństwa</span></a><a class="contact-choice" href="mailto:alo@aloserwis.com"><b>Pozostałe zapytania</b><span>alo@aloserwis.com</span></a></div></div></section></main>`;

  app.innerHTML=header+(view==='home'?home:view==='contact'?contact:generic(pageData[currentPage]))+footer;
  if(view==='gsm'&&pageData[currentPage])document.title=`${pageData[currentPage].title} | ALO SERWIS`;else if(view==='cctv'&&pageData[currentPage])document.title=`${pageData[currentPage].title} | ALO SERWIS`;else if(view==='signage'&&pageData[currentPage])document.title=`${pageData[currentPage].title} | AloSignage`;else if(view==='contact')document.title='Kontakt | ALO SERWIS';
  window.ALO_I18N.apply(app,selectedLang);
  document.title=tr(document.title);
  document.documentElement.lang=selectedLang;
  const description=document.querySelector('meta[name="description"]');
  if(description)description.content=tr(pageData[currentPage]?.lead||'Naprawa · Instalacje · Digital Signage');
  // Carry the chosen language between all pages using this shared renderer.
  app.querySelectorAll('a[href]').forEach(link=>{
    const href=link.getAttribute('href');
    if(/^\/(?:$|(?:index|gsm|cctv|kontakt|alosignage)\.html(?:[?#]|$))/.test(href)){
      const url=new URL(href,location.origin);url.searchParams.set('lang',selectedLang);
      link.setAttribute('href',url.pathname+url.search+url.hash);
      if(url.pathname===location.pathname&&url.searchParams.get('page')===new URLSearchParams(location.search).get('page'))link.setAttribute('aria-current','page');
    }
  });
  const phoneModel=document.getElementById('gsm-phone-model');
  if(phoneModel){
    const canvas=document.createElement('canvas');
    let supportsWebGL=false;
    try{supportsWebGL=!!(window.WebGLRenderingContext&&(canvas.getContext('webgl2')||canvas.getContext('webgl')))}catch{}
    if(!supportsWebGL)phoneModel.hidden=true;
    else{
      const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
      const syncMotion=()=>phoneModel.toggleAttribute('auto-rotate',!reducedMotion.matches);
      syncMotion();reducedMotion.addEventListener('change',syncMotion);
      phoneModel.addEventListener('load',()=>phoneModel.parentElement.classList.add('model-ready'));
      phoneModel.addEventListener('error',()=>{phoneModel.hidden=true});
      const viewerScript=document.createElement('script');viewerScript.type='module';
      viewerScript.src='https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js';
      viewerScript.onerror=()=>{phoneModel.hidden=true};document.head.appendChild(viewerScript);
    }
  }

  // Reveal each photograph once when it enters the viewport.
  const photoMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const photoTargets=[...app.querySelectorAll('main img:not(.gsm-model-fallback), main .gsm-model-visual')];
  photoTargets.forEach(photo=>photo.classList.add('photo-interactive'));
  if(!photoMotion.matches&&'IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        const photo=entry.target;
        observer.unobserve(photo);
        const reveal=()=>{
          if(photoMotion.matches)return;
          photo.style.setProperty('--photo-delay', ((photoTargets.indexOf(photo)%3)*80)+'ms');
          photo.classList.add('photo-reveal');
          photo.addEventListener('animationend',()=>photo.classList.remove('photo-reveal'),{once:true});
        };
        if(photo.tagName==='IMG'&&!photo.complete)photo.addEventListener('load',reveal,{once:true});
        else reveal();
      });
    },{threshold:0.08});
    photoTargets.forEach(photo=>observer.observe(photo));
    photoMotion.addEventListener('change',()=>{
      if(photoMotion.matches){
        observer.disconnect();
        photoTargets.forEach(photo=>photo.classList.remove('photo-reveal'));
      }
    });
  }
  if(activeGroup)headerFor(activeGroup);
  const nav=document.getElementById('primary-nav'),mobile=document.querySelector('.mobile-toggle');
  document.querySelectorAll('.nav-trigger').forEach(btn=>btn.addEventListener('click',()=>{const isOpen=btn.getAttribute('aria-expanded')==='true';document.querySelectorAll('.nav-trigger').forEach(other=>{other.setAttribute('aria-expanded','false');document.getElementById(`menu-${other.dataset.group}`)?.classList.remove('open')});if(!isOpen){btn.setAttribute('aria-expanded','true');document.getElementById(`menu-${btn.dataset.group}`)?.classList.add('open')}}));
  mobile.addEventListener('click',()=>{const open=mobile.getAttribute('aria-expanded')==='true';mobile.setAttribute('aria-expanded',String(!open));mobile.setAttribute('aria-label',tr(open?'Otwórz menu':'Zamknij menu'));nav.classList.toggle('open',!open);mobile.textContent=open?'☰':'×'});
  document.addEventListener('click',e=>{if(!e.target.closest('.nav-group'))document.querySelectorAll('.nav-trigger').forEach(b=>{b.setAttribute('aria-expanded','false');document.getElementById(`menu-${b.dataset.group}`)?.classList.remove('open')})});
  const closeMenus=()=>document.querySelectorAll('.nav-trigger').forEach(button=>{button.setAttribute('aria-expanded','false');document.getElementById(`menu-${button.dataset.group}`)?.classList.remove('open')});
  document.addEventListener('keydown',event=>{
    if(event.key!=='Escape')return;
    const expanded=document.querySelector('.nav-trigger[aria-expanded="true"]');
    if(expanded){closeMenus();expanded.focus();return;}
    if(mobile.getAttribute('aria-expanded')==='true'){mobile.click();mobile.focus();}
  });
  document.querySelector('.site-header').addEventListener('focusout',event=>{if(event.relatedTarget&&!event.currentTarget.contains(event.relatedTarget))closeMenus()});
  document.getElementById('language').addEventListener('change',e=>{const v=e.target.value;if(!dictionary[v])return;try{localStorage.setItem('alo-site-language',v)}catch{}const next=new URL(location.href);next.searchParams.set('lang',v);location.assign(next.href)});
  document.querySelectorAll('#status-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const box=document.getElementById('status-result');box.className='notice';box.textContent=tr('Połączenie z systemem sprawdzania statusu jest przygotowywane. Formularz nie wysyła ani nie zapisuje danych. Skontaktuj się z ALO SERWIS, aby zapytać o zlecenie.')}));
})();
