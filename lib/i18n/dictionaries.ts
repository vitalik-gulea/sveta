export type Locale = "en" | "ru" | "ro";

export const locales: Locale[] = ["en", "ru", "ro"];

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export type MessageKey =
  | "nav.brand"
  | "nav.home"
  | "nav.about"
  | "nav.books"
  | "nav.plays"
  | "nav.services"
  | "nav.language"
  | "nav.languageShort"
  | "nav.openMenu"
  | "nav.closeMenu"
  | "home.sectionHome"
  | "home.sectionAbout"
  | "hero.roleLabel"
  | "hero.tagline"
  | "hero.cta"
  | "hero.scrollAria"
  | "theme.ariaLight"
  | "theme.ariaDark"
  | "theme.ariaToggle"
  | "about.heading"
  | "about.bio"
  | "about.imageAlt"
  | "books.heading"
  | "books.subtitle"
  | "books.item1.title"
  | "books.item1.description"
  | "books.item2.title"
  | "books.item2.description"
  | "books.item3.title"
  | "books.item3.description"
  | "plays.heading"
  | "plays.subtitle"
  | "plays.item1.title"
  | "plays.item1.description"
  | "plays.item2.title"
  | "plays.item2.description"
  | "plays.item3.title"
  | "plays.item3.description"
  | "plays.item4.title"
  | "plays.item4.description"
  | "plays.item5.title"
  | "plays.item5.description"
  | "plays.item6.title"
  | "plays.item6.description"
  | "services.heading"
  | "services.subtitle"
  | "services.item1.title"
  | "services.item1.description"
  | "services.item2.title"
  | "services.item2.description"
  | "services.item3.title"
  | "services.item3.description"
  | "services.item4.title"
  | "services.item4.description"
  | "footer.contact"
  | "footer.rights"
  | "social.telegram"
  | "social.instagram";

const en: Record<MessageKey, string> = {
  "nav.brand": "Svetlana Mokan",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.books": "Books",
  "nav.plays": "Plays",
  "nav.services": "Services",
  "nav.language": "Language",
  "nav.languageShort": "En",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "home.sectionHome": "Home",
  "home.sectionAbout": "About",
  "hero.roleLabel": "Writer",
  "hero.tagline":
    "Writing books and Christmas plays that speak to children about faith, love, and wonder",
  "hero.cta": "My works",
  "hero.scrollAria": "Scroll to the next section",
  "theme.ariaLight": "Switch to light theme",
  "theme.ariaDark": "Switch to dark theme",
  "theme.ariaToggle": "Toggle color theme",
  "about.heading": "About Me",
  "about.bio":
    "I write books for children and teenagers and create scripts for Christmas theatrical productions performed on church stages. My stories are full of warmth, faith, and characters who find light even in the hardest moments.",
  "about.imageAlt": "Portrait of the author at a writing desk",
  "books.heading": "Published Books",
  "books.subtitle": "Christian fiction for children and teenagers",
  "books.item1.title": "Not Like Everyone Else",
  "books.item1.description":
    "Ten-year-old Eduard has everything money can buy — except the warmth of the people he loves. Then a blind girl teaches him to see with his heart what everyone with sight has missed.",
  "books.item2.title": "Run Without Looking Back",
  "books.item2.description":
    "A summer at grandmother's turns into a real adventure: a secret cabin in the woods, new friends, and dangers that test the strength of friendship.",
  "books.item3.title": "Unsafe Network",
  "books.item3.description":
    "An online game that felt like harmless fun slowly starts to run Roma's life. A week at a Christian teen camp, without phones, helps him finally face the truth about himself.",
  "plays.heading": "Christmas Productions",
  "plays.subtitle": "Stage scripts written for church Christmas performances",
  "plays.item1.title": "A Christmas Portrait",
  "plays.item1.description":
    "A story of how one talent, given to God, can change more than one life. Grandpa Ivan is a painter some call unfriendly, but the children know him as a kind teacher. When his young pupil falls seriously ill, he decides to use his gift to save her.",
  "plays.item2.title": "Journey to Christmas (a musical)",
  "plays.item2.description":
    "Ilyusha has no interest in music lessons — his phone and games are far more fun. But one night, opening a Christmas advent calendar, he falls asleep and wakes up inside the Bible story itself, from Zechariah and Elizabeth to the road to Bethlehem.",
  "plays.item3.title": "Mary",
  "plays.item3.description":
    "A scene about what Mary's life was like among her friends and family — her hopes, her cares, her faith. The audience witnesses her learning she will become the mother of Jesus, and relives the Christmas story through the eyes of those who saw the King's birth.",
  "plays.item4.title": "A Christmas Miracle (Isabelle and Azar)",
  "plays.item4.description":
    "Isabelle and her friends are wrapping presents for Christmas when she hears an old friend has returned. On her way to see him, she finds a lost boy in the woods wearing a medallion that holds a secret her family has kept for years.",
  "plays.item5.title": "The Heart's Hidden Chest",
  "plays.item5.description":
    "Children find an old trunk and ask their father to tell its story. They learn of his youth — a dream of wealth that nearly cost him his conscience, and the path back to God through honest confession and prayer.",
  "plays.item6.title": "The Last Lamplighter",
  "plays.item6.description":
    "128 years ago, in the small town of Roten, a lonely lamplighter named Martin lit the street lamps every evening. When electricity comes to town, the old man is seen as obsolete — until one boy starts to wonder why everyone is so unkind to him.",
  "services.heading": "Services",
  "services.subtitle": "What I can create for you",
  "services.item1.title": "Custom Poetry",
  "services.item1.description":
    "Personalized poems for special occasions, events, or personal collections",
  "services.item2.title": "Screenwriting",
  "services.item2.description":
    "Professional screenplays for film and theater, crafted to your vision",
  "services.item3.title": "Theatrical Productions",
  "services.item3.description":
    "Full play writing and consulting for stage productions",
  "services.item4.title": "Creative Writing",
  "services.item4.description":
    "Short stories, novels, and literary works crafted with care",
  "footer.contact": "Get in Touch",
  "footer.rights": "All rights reserved.",
  "social.telegram": "Telegram",
  "social.instagram": "Instagram",
};

const ru: Record<MessageKey, string> = {
  "nav.brand": "Светлана Мокан",
  "nav.home": "Главная",
  "nav.about": "Обо мне",
  "nav.books": "Книги",
  "nav.plays": "Постановки",
  "nav.services": "Услуги",
  "nav.language": "Язык",
  "nav.languageShort": "Ru",
  "nav.openMenu": "Открыть меню",
  "nav.closeMenu": "Закрыть меню",
  "home.sectionHome": "Главная",
  "home.sectionAbout": "Обо мне",
  "hero.roleLabel": "Писатель",
  "hero.tagline":
    "Пишу книги и рождественские спектакли, которые говорят с детьми о вере, любви и чуде",
  "hero.cta": "Мои работы",
  "hero.scrollAria": "Прокрутить к следующему разделу",
  "theme.ariaLight": "Включить светлую тему",
  "theme.ariaDark": "Включить тёмную тему",
  "theme.ariaToggle": "Переключить тему",
  "about.heading": "Обо мне",
  "about.bio":
    "Я пишу книги для детей и подростков и создаю сценарии рождественских постановок, которые ставят на сцене в церквях. В моих историях — тепло, вера и герои, которые находят свет даже в самые трудные моменты.",
  "about.imageAlt": "Портрет автора за письменным столом",
  "books.heading": "Опубликованные книги",
  "books.subtitle": "Христианская проза для детей и подростков",
  "books.item1.title": "«Не такие, как все»",
  "books.item1.description":
    "У десятилетнего Эдуарда есть всё, о чём можно мечтать, — кроме тепла и любви близких. Пока однажды слепая девочка не научит его видеть сердцем то, чего не замечали зрячие.",
  "books.item2.title": "«Бежать без оглядки»",
  "books.item2.description":
    "Летние каникулы у бабушки превращаются в настоящее приключение: тайная лесная хижина, новые друзья и опасности, которые проверяют крепость дружбы.",
  "books.item3.title": "«Небезопасная сеть»",
  "books.item3.description":
    "Интернет-игра, казавшаяся просто развлечением, постепенно начинает управлять жизнью Ромы. Христианский подростковый лагерь без телефонов помогает ему увидеть правду о себе.",
  "plays.heading": "Рождественские постановки",
  "plays.subtitle": "Сценарии для рождественских спектаклей на церковной сцене",
  "plays.item1.title": "«Рождественский портрет»",
  "plays.item1.description":
    "История о том, как один талант, отданный Богу, способен изменить не одну судьбу. Дедушка Иван — художник, которого одни считают нелюдимым, а дети — добрым учителем. Когда его юная ученица тяжело заболевает, старик решает использовать свой дар, чтобы её спасти.",
  "plays.item2.title": "«Путешествие в Рождество» (мюзикл)",
  "plays.item2.description":
    "Илюша совсем не хочет заниматься музыкой — телефон и игры куда интереснее. Но однажды, открыв рождественский адвент-календарь, он засыпает и оказывается внутри библейских событий — от встречи с Захарией и Елисаветой до путешествия в Вифлеем.",
  "plays.item3.title": "«Мария»",
  "plays.item3.description":
    "Сценка о том, какой была Мария в кругу подруг и семьи, — о её мечтах, заботах и вере. Зритель увидит, как она узнаёт, что станет матерью Иисуса, и переживёт рождественскую историю глазами тех, кто стал свидетелем рождения Царя.",
  "plays.item4.title": "«Рождественское чудо» (Изабель и Азар)",
  "plays.item4.description":
    "Изабель с подругами готовится к Рождеству, когда узнаёт о возвращении старого друга. По дороге к нему девочка находит в лесу потерявшегося мальчика с медальоном на шее — украшением, хранящим тайну целой семьи.",
  "plays.item5.title": "«Тайник сердца»",
  "plays.item5.description":
    "Дети находят старый сундук и просят отца рассказать его историю. Так они узнают о его юности: о мечте разбогатеть, которая едва не разрушила его совесть, и о пути назад к Богу через честное признание и молитву.",
  "plays.item6.title": "«Последний фонарь»",
  "plays.item6.description":
    "128 лет назад в городке Ротен жил одинокий фонарщик Мартин, который каждый вечер зажигал уличные фонари. Когда в город приходит электричество, старика считают ненужным — и лишь один мальчик задаётся вопросом, почему все так безжалостны к доброму человеку.",
  "services.heading": "Услуги",
  "services.subtitle": "Что я могу создать для вас",
  "services.item1.title": "Стихи на заказ",
  "services.item1.description":
    "Персонализированные стихи для особых случаев, мероприятий или личных коллекций",
  "services.item2.title": "Написание сценариев",
  "services.item2.description":
    "Профессиональные сценарии для кино и театра, созданные по вашему видению",
  "services.item3.title": "Театральные постановки",
  "services.item3.description":
    "Полное написание пьес и консультации для сценических представлений",
  "services.item4.title": "Творческое письмо",
  "services.item4.description":
    "Рассказы, романы и литературные произведения, созданные с заботой",
  "footer.contact": "Связаться",
  "footer.rights": "Все права защищены.",
  "social.telegram": "Telegram",
  "social.instagram": "Instagram",
};

const ro: Record<MessageKey, string> = {
  "nav.brand": "Svetlana Mokan",
  "nav.home": "Acasă",
  "nav.about": "Despre mine",
  "nav.books": "Cărți",
  "nav.plays": "Piese",
  "nav.services": "Servicii",
  "nav.language": "Limbă",
  "nav.languageShort": "Ro",
  "nav.openMenu": "Deschide meniul",
  "nav.closeMenu": "Închide meniul",
  "home.sectionHome": "Acasă",
  "home.sectionAbout": "Despre mine",
  "hero.roleLabel": "Scriitoare",
  "hero.tagline":
    "Scriu cărți și piese de Crăciun care le vorbesc copiilor despre credință, iubire și minune",
  "hero.cta": "Lucrările mele",
  "hero.scrollAria": "Derulează la secțiunea următoare",
  "theme.ariaLight": "Comută la tema deschisă",
  "theme.ariaDark": "Comută la tema întunecată",
  "theme.ariaToggle": "Comută tema culorilor",
  "about.heading": "Despre mine",
  "about.bio":
    "Scriu cărți pentru copii și adolescenți și creez scenarii pentru piese de Crăciun puse în scenă în biserici. Poveștile mele sunt pline de căldură, credință și personaje care găsesc lumina chiar și în cele mai grele momente.",
  "about.imageAlt": "Portretul autorului la biroul de scris",
  "books.heading": "Cărți publicate",
  "books.subtitle": "Proză creștină pentru copii și adolescenți",
  "books.item1.title": "„Nu ca toți ceilalți”",
  "books.item1.description":
    "Eduard, în vârstă de zece ani, are tot ce și-ar putea dori — în afară de căldura celor dragi. Până când o fetiță nevăzătoare îl învață să vadă cu inima ceea ce nimeni altcineva nu observase.",
  "books.item2.title": "„Fugi fără să privești înapoi”",
  "books.item2.description":
    "Vacanța de vară la bunica se transformă într-o adevărată aventură: o cabană secretă în pădure, prieteni noi și pericole care pun la încercare o prietenie adevărată.",
  "books.item3.title": "„Rețea nesigură”",
  "books.item3.description":
    "Un joc online care părea o simplă distracție începe treptat să-i controleze viața lui Roma. O săptămână la o tabără creștină pentru adolescenți, fără telefoane, îl ajută să înfrunte adevărul despre sine.",
  "plays.heading": "Piese de Crăciun",
  "plays.subtitle": "Scenarii de teatru scrise pentru spectacole de Crăciun la biserică",
  "plays.item1.title": "„Un portret de Crăciun”",
  "plays.item1.description":
    "O poveste despre cum un talent dăruit lui Dumnezeu poate schimba mai multe vieți. Bunicul Ivan este un pictor pe care unii îl cred nesociabil, dar copiii îl cunosc drept un învățător bun. Când eleva lui se îmbolnăvește grav, el decide să-și folosească darul pentru a o salva.",
  "plays.item2.title": "„Călătorie spre Crăciun” (musical)",
  "plays.item2.description":
    "Iliușa nu vrea deloc să învețe muzică — telefonul și jocurile sunt mult mai interesante. Dar într-o noapte, deschizând un calendar de advent de Crăciun, adoarme și se trezește chiar în mijlocul evenimentelor biblice, de la Zaharia și Elisabeta până la drumul spre Betleem.",
  "plays.item3.title": "„Maria”",
  "plays.item3.description":
    "O scenă despre viața Mariei alături de prietenele și familia ei — visele, grijile și credința ei. Spectatorii vor afla cum ea învață că va deveni mama lui Isus și vor retrăi povestea Crăciunului prin ochii celor care au fost martori la nașterea Regelui.",
  "plays.item4.title": "„O minune de Crăciun” (Isabelle și Azar)",
  "plays.item4.description":
    "Isabelle și prietenele ei împachetează cadouri de Crăciun când află că un vechi prieten s-a întors. Pe drum, ea găsește în pădure un băiat rătăcit, purtând un medalion care ascunde o taină păstrată de familia lui de ani de zile.",
  "plays.item5.title": "„Lada tainică a inimii”",
  "plays.item5.description":
    "Copiii găsesc o ladă veche și îl roagă pe tatăl lor să le spună povestea ei. Așa află despre tinerețea lui — visul de a se îmbogăți care aproape i-a distrus conștiința, și drumul înapoi la Dumnezeu prin mărturisire sinceră și rugăciune.",
  "plays.item6.title": "„Ultimul felinar”",
  "plays.item6.description":
    "Acum 128 de ani, în orășelul Roten, trăia un felinarist singuratic pe nume Martin, care aprindea felinarele străzii în fiecare seară. Când electricitatea ajunge în oraș, bătrânul este considerat inutil — până când un băiat începe să se întrebe de ce toți sunt atât de nemiloși cu el.",
  "services.heading": "Servicii",
  "services.subtitle": "Ce pot crea pentru tine",
  "services.item1.title": "Poezie la comandă",
  "services.item1.description":
    "Poezii personalizate pentru ocazii speciale, evenimente sau colecții personale",
  "services.item2.title": "Scenarii",
  "services.item2.description":
    "Scenarii profesionale pentru film și teatru, create conform viziunii tale",
  "services.item3.title": "Producții teatrale",
  "services.item3.description":
    "Scriere completă de piese și consultanță pentru producții scenice",
  "services.item4.title": "Scriere creativă",
  "services.item4.description":
    "Povestiri, romane și opere literare create cu grijă",
  "footer.contact": "Contact",
  "footer.rights": "Toate drepturile rezervate.",
  "social.telegram": "Telegram",
  "social.instagram": "Instagram",
};

export const dictionaries: Record<Locale, Record<MessageKey, string>> = {
  en,
  ru,
  ro,
};
