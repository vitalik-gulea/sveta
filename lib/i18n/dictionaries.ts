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
  | "books.item1.title"
  | "books.item1.description"
  | "books.item2.title"
  | "books.item2.description"
  | "books.item3.title"
  | "books.item3.description"
  | "books.item4.title"
  | "books.item4.description"
  | "books.item5.title"
  | "books.item5.description"
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
    "I write Christian books that make children forget about time — and teenagers read even under the blanket with a flashlight.",
  "hero.cta": "My works",
  "hero.scrollAria": "Scroll to the next section",
  "theme.ariaLight": "Switch to light theme",
  "theme.ariaDark": "Switch to dark theme",
  "theme.ariaToggle": "Toggle color theme",
  "about.heading": "About Me",
  "about.bio":
    "I am a mother of three. I live in sunny Moldova and write Christian books for children and teenagers.\n\nI create captivating stories that draw readers in, inspire them, and help them discover important truths.\n\nI also write stories for children's camps and scripts for Christmas productions for the church.\n\nI sing in the church choir and lead the children's page during Sunday services. I believe that through books we can sow seeds of faith, love, and kindness in children's hearts.",
  "about.imageAlt": "Portrait of Svetlana Mokan",
  "books.heading": "Published Books",
  "books.item1.title": "Not Like Everyone Else",
  "books.item1.description":
    "A large castle, expensive toys, the best teachers… Ten-year-old Eduard has everything anyone could dream of. But behind the high castle walls he desperately lacks the love of those closest to him. He is confined to a wheelchair, his mother barely notices him, and a luxurious life cannot warm a heart that feels alone. Everything changes the day a kind nanny brings her daughter to the castle. The girl cannot see the world with her eyes. And yet she seems to be the first to notice what no one else has: a lonely boy who longs to be loved. Eduard will have to learn what true wealth is, why someone with closed eyes can sometimes see far more than others, and where to find the One who never leaves.",
  "books.item2.title": "Run Without Looking Back",
  "books.item2.description":
    "Summer. Two sisters. A mysterious forest. A holiday at grandmother's seemed ordinary — until one night the girls meet the local children and hear about a mysterious cabin whose secret no one has been able to solve. From that moment a real adventure begins: dangers, unexpected secrets, old scores, and jealousy that can destroy even a strong friendship. What does the cabin in the woods hide? Whom can you trust? And why do you sometimes have to run without looking back?",
  "books.item3.title": "Unsafe Network",
  "books.item3.description":
    "Roma treats an online game as ordinary entertainment, but little by little it starts to run his life. Lies, skipped classes, stealing, arguments, and trouble at home lead to him having to leave his familiar virtual world for a week and go to a Christian teen camp — without phones or tablets. There, for the first time, he has to look honestly at himself and at what he has done.",
  "books.item4.title": "22 Stories",
  "books.item4.description":
    "22 kind, instructive, and engaging stories for children.\nIn this collection you will find:\n• winter and Christmas stories;\n• summer tales;\n• stories about birthdays, about mom, about dad, and about family values;\n• stories about friendship, choices, honesty, courage, and God's care;\n• stories about outstanding Christian figures, written in simple language children can understand. They gather the most interesting facts from the lives of people who trusted God and left a bright mark on history.\nSome of the stories are based on real events!\nThe collection is well suited for family reading, Sunday schools, children's classes, and anyone who wants to introduce children to Christian values through engaging stories.",
  "books.item5.title": "Born in Captivity",
  "books.item5.description":
    "This book is based on real events. Svetlana Firsova was born in prison, and her childhood was spent amid poverty, violence, and alcoholism. Later came an orphanage, a foster family, and difficult trials that left a deep mark on her heart. It seemed that such a past could determine her fate forever, but God changed her life step by step. Svetlana tells how she learned to live with pain, to forgive, to trust God, and to find the strength to live again. This book is a personal testimony of God's love and faithfulness even in the hardest times. It reminds us that our past does not determine our future, and that with God, even after the heaviest trials, we can find hope, healing, and true freedom.",
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
    "Пишу христианские книги, из-за которых дети забывают о времени, а подростки готовы читать даже под одеялом с фонариком.",
  "hero.cta": "Мои работы",
  "hero.scrollAria": "Прокрутить к следующему разделу",
  "theme.ariaLight": "Включить светлую тему",
  "theme.ariaDark": "Включить тёмную тему",
  "theme.ariaToggle": "Переключить тему",
  "about.heading": "Обо мне",
  "about.bio":
    "Я мама троих детей. Живу в солнечной Молдове и пишу христианские книги для детей и подростков.\n\nСоздаю захватывающие истории, которые увлекают читателей, вдохновляют и помогают открывать для себя важные истины.\n\nТакже пишу рассказы для детских лагерей и сценарии рождественских постановок для церкви.\n\nЯ пою в церковном хоре и веду детскую страничку во время воскресных служений. Верю, что через книги можно сеять в сердцах детей семена веры, любви и доброты.",
  "about.imageAlt": "Портрет Светланы Мокан",
  "books.heading": "Опубликованные книги",
  "books.item1.title": "«Не такие, как все»",
  "books.item1.description":
    "Большой замок, дорогие игрушки, лучшие учителя… У десятилетнего Эдуарда есть все, о чем можно мечтать. Но за высокими стенами замка ему отчаянно не хватает любви близких. Он прикован к инвалидному креслу, мама почти не замечает его, а роскошная жизнь не может согреть сердце, которое чувствует себя одиноким. Но все меняется в тот день, когда добрая няня приводит в замок свою дочь. Девочка не видит этот мир глазами. Но, кажется, именно она первой замечает то, чего не замечал никто: одинокого мальчика, которому очень хочется быть любимым. Эдуарду предстоит узнать, что такое настоящее богатство, почему иногда человек с закрытыми глазами видит гораздо больше других и где искать Того, Кто никогда не оставляет.",
  "books.item2.title": "«Бежать без оглядки»",
  "books.item2.description":
    "Лето. Две сестры. Таинственный лес. Казалось, каникулы у бабушки будут обычными, пока однажды ночью девочки не знакомятся с местной ребятней и не узнают о загадочной хижине, тайну которой никто не смог разгадать. С этого момента начинается настоящее приключение: опасности, неожиданные тайны, старые счеты и ревность, способная разрушить даже крепкую дружбу. Что скрывает лесная хижина? Кому можно доверять? И почему иногда нужно бежать без оглядки?",
  "books.item3.title": "«Небезопасная сеть»",
  "books.item3.description":
    "Рома воспринимает интернет-игру как обычное развлечение, но постепенно она начинает управлять его жизнью. Ложь, прогулы, воровство, ссоры и проблемы дома приводят к тому, что ему приходится на неделю оставить привычный виртуальный мир и отправиться в христианский подростковый лагерь — без телефонов и планшетов. Там он впервые сталкивается с необходимостью честно посмотреть на себя и свои поступки.",
  "books.item4.title": "«22 рассказа»",
  "books.item4.description":
    "22 добрые, поучительные и увлекательные истории для детей.\nВ сборнике вы найдете:\n• зимние и рождественские рассказы;\n• летние истории;\n• рассказы о дне рождения, о маме, о папе и о семейных ценностях;\n• истории о дружбе, выборе, честности, смелости и Божьей заботе;\n• рассказы о выдающихся христианских личностях, написанные простым и понятным для детей языком. В них собраны самые интересные факты из жизни людей, которые доверяли Богу и оставили яркий след в истории.\nНекоторые рассказы основаны на реальных событиях!\nСборник подойдет для семейного чтения, воскресных школ, детских занятий и всех, кто хочет познакомить детей с христианскими ценностями через интересные истории.",
  "books.item5.title": "«Рожденная в неволе»",
  "books.item5.description":
    "Это книга основана на реальных событиях. Светлана Фирсова родилась в тюрьме, а её детство прошло среди бедности, насилия и алкоголизма. Позже были детский дом, приёмная семья и непростые испытания, которые оставили глубокий след в её сердце. Казалось, что такое прошлое может навсегда определить её судьбу, но Бог шаг за шагом менял её жизнь. Светлана рассказывает о том, как училась справляться с болью, прощать, доверять Богу и снова находить силы жить. Эта книга — личное свидетельство о Божьей любви и верности даже в самые трудные времена. Она напоминает нам, что наше прошлое не определяет наше будущее и что с Богом даже после самых тяжёлых испытаний можно обрести надежду, исцеление и настоящую свободу.",
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
    "Scriu cărți creștine din cauza cărora copiii uită de timp, iar adolescenții sunt gata să citească chiar și sub pătură, cu lanterna.",
  "hero.cta": "Lucrările mele",
  "hero.scrollAria": "Derulează la secțiunea următoare",
  "theme.ariaLight": "Comută la tema deschisă",
  "theme.ariaDark": "Comută la tema întunecată",
  "theme.ariaToggle": "Comută tema culorilor",
  "about.heading": "Despre mine",
  "about.bio":
    "Sunt mama a trei copii. Locuiesc în însorita Moldovă și scriu cărți creștine pentru copii și adolescenți.\n\nCreez povești captivante care atrag cititorii, îi inspiră și îi ajută să descopere adevăruri importante.\n\nDe asemenea, scriu povestiri pentru tabere de copii și scenarii de piese de Crăciun pentru biserică.\n\nCânt în corul bisericii și conduc pagina copiilor în timpul slujbelor de duminică. Cred că prin cărți putem semăna în inimile copiilor semințe de credință, iubire și bunătate.",
  "about.imageAlt": "Portretul Svetlanei Mokan",
  "books.heading": "Cărți publicate",
  "books.item1.title": "„Nu ca toți ceilalți”",
  "books.item1.description":
    "Un castel mare, jucării scumpe, cei mai buni profesori… Eduard, în vârstă de zece ani, are tot ce și-ar putea dori. Dar în spatele zidurilor înalte ale castelului îi lipsește cu disperare iubirea celor apropiați. Este ținut pe un scaun cu rotile, mama abia îl observă, iar viața de lux nu poate încălzi o inimă care se simte singură. Totul se schimbă în ziua în care o dădacă bună își aduce fiica la castel. Fetița nu vede lumea cu ochii. Și totuși, pare să fie prima care observă ceea ce nimeni altcineva nu văzuse: un băiat singuratic care tânjește să fie iubit. Eduard va trebui să afle ce înseamnă adevărata bogăție, de ce uneori un om cu ochii închiși vede mult mai mult decât alții și unde să-L caute pe Cel care nu părăsește niciodată.",
  "books.item2.title": "„Fugi fără să privești înapoi”",
  "books.item2.description":
    "Vară. Două surori. O pădure misterioasă. Vacanța la bunica părea obișnuită, până când într-o noapte fetele îi cunosc pe copiii din sat și află despre o cabană tainică al cărei secret nimeni n-a putut să-l dezlege. Din acel moment începe o adevărată aventură: pericole, taine neașteptate, vechi răfuieli și gelozie capabilă să distrugă chiar și o prietenie puternică. Ce ascunde cabana din pădure? Cui poți avea încredere? Și de ce uneori trebuie să fugi fără să privești înapoi?",
  "books.item3.title": "„Rețea nesigură”",
  "books.item3.description":
    "Roma tratează un joc online ca pe o distracție obișnuită, dar treptat acesta începe să-i controleze viața. Minciuni, chiul, furt, certuri și probleme acasă duc la faptul că trebuie să părăsească pentru o săptămână lumea lui virtuală familiară și să meargă la o tabără creștină pentru adolescenți — fără telefoane și tablete. Acolo, pentru prima dată, se confruntă cu nevoia de a se privi sincer pe sine și faptele sale.",
  "books.item4.title": "„22 de povestiri”",
  "books.item4.description":
    "22 de povestiri bune, instructive și captivante pentru copii.\nÎn acest volum veți găsi:\n• povestiri de iarnă și de Crăciun;\n• istorii de vară;\n• povestiri despre ziua de naștere, despre mamă, despre tată și despre valorile familiei;\n• istorii despre prietenie, alegere, cinste, curaj și grija lui Dumnezeu;\n• povestiri despre personalități creștine de seamă, scrise într-un limbaj simplu și ușor de înțeles pentru copii. Ele adună cele mai interesante fapte din viața oamenilor care s-au încrezut în Dumnezeu și au lăsat o urmă luminoasă în istorie.\nUnele povestiri se bazează pe evenimente reale!\nVolumul se potrivește lecturii în familie, școlilor duminicale, activităților cu copiii și tuturor celor care vor să-i familiarizeze pe copii cu valorile creștine prin istorii captivante.",
  "books.item5.title": "„Născută în captivitate”",
  "books.item5.description":
    "Această carte se bazează pe evenimente reale. Svetlana Firsova s-a născut în închisoare, iar copilăria ei a trecut printre sărăcie, violență și alcoolism. Mai târziu au urmat casa de copii, o familie de plasament și încercări grele care i-au lăsat o urmă adâncă în inimă. Părea că un astfel de trecut i-ar putea hotărî soarta pentru totdeauna, dar Dumnezeu i-a schimbat viața pas cu pas. Svetlana povestește cum a învățat să facă față durerii, să ierte, să se încreadă în Dumnezeu și să-și găsească din nou puterea de a trăi. Această carte este o mărturie personală despre dragostea și credincioșia lui Dumnezeu chiar și în cele mai grele vremuri. Ne amintește că trecutul nostru nu ne determină viitorul și că, împreună cu Dumnezeu, chiar și după cele mai grele încercări, putem găsi nădejde, vindecare și adevărata libertate.",
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
