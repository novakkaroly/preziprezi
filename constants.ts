
import type { Chapter, ChecklistCategory } from './types';

export const chapters: Chapter[] = [
  {
    id: 'fejezet-1',
    title: '1. Fejezet',
    subtitle: 'Az Alapok Letétele – A Tervezés Művészete',
    sections: [
      {
        title: 'Kihez beszélsz? – Ismerd meg a közönséged!',
        content: [
          { type: 'paragraph', text: 'Egy előadás nem monológ, hanem párbeszéd, még akkor is, ha többnyire te beszélsz. Ahhoz, hogy a mondanivalód célba érjen, tudnod kell, ki ül veled szemben. Az osztálytársaidnak tartod az előadást, akik már hallottak a témáról? Vagy egy iskolai ünnepségen kell beszélned, ahol tanárok és más évfolyamok diákjai is ott lesznek?' },
          { type: 'paragraph', text: 'A közönség ismerete segít eldönteni, hogy milyen mélységig menj bele a részletekbe, milyen szavakat használj, és milyen hangnemet üss meg. Gondolj bele: teljesen máshogy magyaráznád el a kedvenc videójátékod szabályait a legjobb barátodnak, és máshogy a nagymamádnak. Ugyanez az elv érvényes a prezentációdra is.' }
        ]
      },
      {
        title: 'Mi a legfontosabb üzeneted? – A Fókusz Kijelölése',
        content: [
          { type: 'paragraph', text: 'Gyakori hiba, hogy egy előadó megpróbál mindent elmondani egy témáról, amit csak tud. Az eredmény általában egy zavaros, túlzsúfolt prezentáció. Itt érvényesül a legfontosabb szabály: „a kevesebb több”.' },
          { type: 'quote', text: 'Ha a közönség csak egyetlen dolgot jegyezne meg az előadásomból, mi lenne az?' },
          { type: 'paragraph', text: 'Ez lesz a te fő üzeneted. Az előadásod minden elemének – minden történetnek, adatnak és képnek – ezt az egy gondolatot kell támogatnia és megerősítenie. Például, ha a vulkánokról tartasz előadást, a fő üzeneted lehet az, hogy „A vulkánok egyszerre pusztító és teremtő erők”.' }
        ]
      },
      {
        title: 'Építsd fel, mint egy filmet! – A Prezentáció Szerkezete',
        content: [
          { type: 'paragraph', text: 'A legkönnyebben követhető előadásoknak világos szerkezetük van. Képzeld el a prezentációdat úgy, mint egy jó filmet: van egy izgalmas bevezetője, egy tartalmas közepe és egy emlékezetes befejezése.' },
          { type: 'list', items: [
            'A Bevezetés (A nyitójelenet): Az előadás első percei a legkritikusabbak. Itt kell megragadnod a közönség figyelmét, és felkeltened az érdeklődésüket.',
            'A Tárgyalás (A cselekmény): Ez az előadás leghosszabb része. Oszd a mondanivalódat három fő pontra vagy témakörre, hogy a szerkezet logikus és könnyen követhető legyen.',
            'A Befejezés (A nagy finálé): Itt kell lezárnod a történetet. Foglald össze a tanulságokat, és utalj vissza a fő üzenetedre, hogy kerek egésszé formáld az előadást.'
          ]}
        ]
      }
    ]
  },
  {
    id: 'fejezet-2',
    title: '2. Fejezet',
    subtitle: 'A Vizuális Varázslat – A Diák Elkészítése',
    sections: [
      {
        title: 'A legfontosabb szabály: A kevesebb több!',
        content: [
          { type: 'paragraph', text: 'Az aranyszabály, amit sosem szabad elfelejteni: a diák legyenek egyszerűek és letisztultak. A közönség nem tud egyszerre olvasni és figyelni rád. Ha a diáidat teleírod, a hallgatóság olvasni fog, és lemarad arról, amit mondasz.' },
          { type: 'list', items: [
            'Egy dia, egy gondolat: Soha ne zsúfolj több ötletet egyetlen diára. Minden új gondolat kapjon egy új diát.',
            'Kulcsszavak, nem körmondatok: Felejtsd el a teljes mondatokat. Használj inkább kulcsszavakat, rövid kifejezéseket.',
            'A 6x6-os szabály: Egy dián ne legyen több 6 sornál, és egy sorban ne legyen több 6 szónál.'
          ]}
        ]
      },
      {
        title: 'Színek, Betűk és Képek – A Dizájn Titkai',
        content: [
          { type: 'paragraph', text: 'Egy átgondolt dizájn professzionális hatást kelt. A zavaros, nehezen olvasható diák azt üzenik, hogy nem fektettél elég energiát a munkádba.' },
          { type: 'list', items: [
              'Színek: Használj egységes színpalettát (max. 2-3 szín/dia, 5/prezentáció). A legfontosabb a kontraszt: sötét szöveg világos alapon (vagy fordítva).',
              'Betűtípusok: Válassz 1-2 egyszerű, jól olvasható betűtípust (pl. Arial, Calibri). Kerüld a díszes betűket. A betűméret legalább 30 pontos legyen.',
              'Képek és Ikonok: Egy jó kép többet mond ezer szónál. Használj jó minőségű, éles, a témához illő képeket. A valódi fotók hitelesebbek a stockfotóknál.'
          ]}
        ]
      },
      {
        title: 'Az elrendezés: Adj levegőt a gondolataidnak!',
        content: [
            { type: 'paragraph', text: 'A zsúfolt dia nehezen értelmezhető. Az üresen hagyott terület, az úgynevezett „fehér tér” nem elpazarolt hely, hanem a legfontosabb dizájnelem. Segít strukturálni a tartalmat, kiemelni a lényeget, és pihenőt ad a szemnek.' }
        ]
      },
      {
        title: 'Gyakori hibák és jó megoldások',
        content: [
          { type: 'mistakesTable', items: [
            { badTitle: 'Teleírt dia', badReason: 'A közönség olvas, nem rád figyel. Unalmas és átláthatatlan.', goodTitle: 'Egy gondolat, 1-2 kulcsszó vagy egy nagy kép.', goodReason: 'Könnyen érthető, a figyelmet rád irányítja, és vizuálisan megerősíti a mondandódat.' },
            { badTitle: 'Olvashatatlan szöveg', badReason: 'Rossz kontraszt vagy túl kicsi betűméret. A közönségnek fáj a szeme, és feladja.', goodTitle: 'Nagy kontraszt (sötét/világos), legalább 30-as betűméret.', goodReason: 'Mindenki könnyedén el tudja olvasni, még a hátsó sorból is. Professzionális hatást kelt.' },
            { badTitle: 'Dizájn-káosz', badReason: 'Túl sok szín, 5-6 különböző betűtípus, csillogó-villogó animációk. Zavaró és komolytalan.', goodTitle: 'Egységes dizájn: 2-3 szín, 1-2 betűtípus következetesen használva.', goodReason: 'Letisztult, profi, és segít a közönségnek a tartalomra fókuszálni, nem a zavaró elemekre.' },
            { badTitle: 'Rossz minőségű képek', badReason: 'Pixeles, homályos, vagy témához nem illő stockfotók. Elveszi a prezentáció értékét.', goodTitle: 'Nagy felbontású, éles, a témát illusztráló képek.', goodReason: 'Vizuálisan vonzó, érzelmeket kelthet, és segít megjegyezni az információt.' }
          ]}
        ]
      }
    ]
  },
  {
    id: 'fejezet-3',
    title: '3. Fejezet',
    subtitle: 'Te a Színpadon – Az Előadás Mesterfogásai',
    sections: [
      {
        title: 'Az első 30 másodperc: Ragadd meg őket!',
        content: [
          { type: 'paragraph', text: 'Az emberek leginkább az előadások elejére és végére emlékeznek. Az első fél perc kritikus. Soha ne kezdj bocsánatkéréssel („Bocsi, kicsit izgulok…”), mert ezzel aláásod a hitelességedet.' },
          { type: 'tips', items: [
            { icon: 'question', title: 'Meghökkentő kérdés', description: '„Gondoltátok volna, hogy egyetlen teáskanálnyi anyag egy neutroncsillagból annyit nyom, mint az összes ember a Földön?”' },
            { icon: 'story', title: 'Rövid, személyes történet', description: '„Amikor először láttam egy igazi teleszkópot, azt hittem, varázslat…”' },
            { icon: 'quote', title: 'Érdekes idézet', description: '„Ahogy Neil Armstrong mondta egyszer: \'Ez egy kis lépés egy embernek...\'”' }
          ]}
        ]
      },
      {
        title: 'A figyelem fenntartása: Ne hagyd őket elkalandozni!',
        content: [
          { type: 'paragraph', text: 'Az emberi figyelem körülbelül 10 perc után lankadni kezd. Ha az előadásod ennél hosszabb, tudatosan meg kell törnöd a monotóniát.' },
          { type: 'tips', items: [
            { icon: 'audience', title: 'Vond be a közönséget', description: 'Tegyél fel kérdéseket, akár költői, akár valódi kérdéseket, amik gondolkodásra ösztönöznek.' },
            { icon: 'rhythm', title: 'Válts ritmust', description: 'Mutass egy rövid videót, egy érdekes képet vagy egy beszédes grafikont.' },
            { icon: 'narrate', title: 'Mesélj', description: 'Szúrj be egy újabb rövid, személyes történetet vagy egy érdekes esettanulmányt.' }
          ]}
        ]
      },
      {
        title: 'A testbeszéded ereje: Beszélj a kezeiddel is!',
        content: [
          { type: 'paragraph', text: 'A kommunikációnak csupán egy kis része a kimondott szó. A magabiztos testbeszéd nemcsak a közönségre hat, hanem visszahat rád is: ha magabiztosan állsz, magabiztosabbnak is fogod érezni magad.' },
           { type: 'tips', items: [
            { icon: 'posture', title: 'Nyitott testtartás', description: 'Húzd ki magad, a válladat engedd le lazán. Ne tedd karba a kezed, mert az zárkózottságot sugall.' },
            { icon: 'eye', title: 'Szemkontaktus', description: 'Lassan pásztázz végig a termen, és próbálj meg több emberrel is felvenni a tekintetet.' },
            { icon: 'gesture', title: 'Gesztikuláció', description: 'Használd a kezeidet természetesen a mondandód alátámasztására. Kerüld a zsebre dugott kezeket.' },
            { icon: 'smile', title: 'Mosolyogj', description: 'Egy őszinte mosoly oldja a feszültséget benned és a közönségben is. Azt üzeni, hogy élvezed, amit csinálsz.' }
          ]}
        ]
      },
      {
        title: 'Az utolsó szó jogán: Zárj emlékezetesen!',
        content: [
            { type: 'paragraph', text: 'Ahogy a kezdés, úgy a befejezés is kulcsfontosságú. A „Köszönöm a figyelmet!” dia a világ legnagyobb kihagyott ziccere. Használd ki az utolsó pillanatokat arra, hogy mély benyomást tegyél.' },
            { type: 'tips', items: [
                { icon: 'summary', title: 'Erőteljes összefoglalás', description: 'Röviden, egy-két mondatban ismételd meg a fő üzenetedet.' },
                { icon: 'callback', title: 'Visszacsatolás a kezdéshez', description: 'Ha egy kérdéssel indítottál, a végén add meg a csattanós választ.' },
                { icon: 'callToAction', title: 'Felhívás cselekvésre', description: 'Ösztönözd a közönséget valamire, pl. „Legközelebb, ha felnéztek az égre, gondoljatok erre...”' },
                { icon: 'thought', title: 'Elgondolkodtató kérdés', description: 'Zárj egy olyan kérdéssel, ami tovább foglalkoztatja a hallgatóságot.' }
            ]}
        ]
      }
    ]
  },
  {
    id: 'fejezet-4',
    title: '4. Fejezet',
    subtitle: 'A Lámpaláz Legyőzése és a Főpróba',
    sections: [
      {
        title: 'A drukk normális! – Barátkozz meg a lámpalázzal!',
        content: [
          { type: 'paragraph', text: 'Még a legtapasztaltabb előadók is izgulnak. A lámpaláz nem a gyengeség jele, hanem annak, hogy törődsz a teljesítményeddel. A cél nem a megszüntetése, hanem a kezelése. Az extra energia szenvedélyesebbé teheti az előadásodat.' }
        ]
      },
      {
        title: 'Trükkök a fellépés előtt és közben',
        content: [
            { type: 'paragraph', text: 'A lámpaláz fizikai és mentális tünetekkel is jár. Szerencsére mindkettőre léteznek egyszerű, de hatásos gyakorlatok.' },
            { type: 'tips', items: [
                { icon: 'breathe', title: 'Légzőgyakorlat', description: 'Vegyél néhány lassú, mély lélegzetet. Számolj 4-ig beszívás, 4-ig bent tart, 6-ig kifúj. Ez lelassítja a szívverést.' },
                { icon: 'positive', title: 'Pozitív belső monológ', description: 'Cseréld le a negatív gondolatokat („El fogom rontani”) pozitívakra („Alaposan felkészültem”).' },
                { icon: 'visualize', title: 'Mentális próba (Vizualizáció)', description: 'Képzeld el, ahogy magabiztosan és sikeresen megtartod az előadást. Ez csökkenti az ismeretlentől való félelmet.' },
                { icon: 'shake', title: 'Stressz kirázása', description: 'Rázd ki a kezeidet és a lábaidat, ugorj párat. Ez segít felszabadítani a felgyülemlett feszültséget.' }
            ]}
        ]
      },
      {
        title: 'Gyakorlat teszi a mestert! – A Főpróba Fontossága',
        content: [
          { type: 'paragraph', text: 'A lámpaláz elleni leghatékonyabb fegyver a felkészültség. Minél jobban tudod az anyagot, annál magabiztosabb leszel.' },
          { type: 'list', items: [
            'Gyakorolj hangosan! Ne csak gondolatban fuss át rajta.',
            'Gyakorolj a tükör előtt! Így láthatod a testbeszédedet.',
            'Vedd fel videóra! Ez a leghatékonyabb módszer a hibák észrevételére.',
            'Tartsd a főpróbát a családodnak vagy barátaidnak! Kérj tőlük visszajelzést.',
            'Mérd az időt! Győződj meg róla, hogy beleférsz az időkeretbe.'
          ]}
        ]
      }
    ]
  }
];

export const checklist: ChecklistCategory[] = [
    {
        title: 'Tervezés Fázis',
        items: [
            'Tudom, ki a közönségem?',
            'Megvan az egyetlen, legfontosabb fő üzenetem?',
            'Megvan a bevezetés-tárgyalás-befejezés vázlatom?',
        ]
    },
    {
        title: 'Diakészítés Fázis',
        items: [
            'Egy dia = egy gondolat?',
            'A diákon csak kulcsszavak vannak, nem regények?',
            'Jól olvasható a szöveg (kontraszt, méret)?',
            'A képeim jó minőségűek és a témához illenek?',
        ]
    },
    {
        title: 'Gyakorlás Fázis',
        items: [
            'Gyakoroltam hangosan, legalább ötször?',
            'Megmutattam valakinek, és kértem visszajelzést?',
            'Tudom, hogy beleférek az időkeretbe?',
        ]
    },
    {
        title: 'Az Előadás Napja',
        items: [
            'Tudom, mivel fogom kezdeni (ütős kezdés)?',
            'Tudom, mivel fogom befejezni (emlékezetes zárás)?',
            'Emlékszem, hogy tartsak szemkontaktust és mosolyogjak?',
            'Készen állok a legjobbamat nyújtani?',
        ]
    }
]
