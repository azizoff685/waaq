let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.söz)}”`, m)
}
handler.help = ['söz']
handler.tags = ['quotes']
handler.command = /^(söz)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Yalnız olmağı seçirəm, çünki mükəmməl birini gözlədiyim üçün deyil, əsla təslim olmayacaq birinə ehtiyacım var."
   "Tək bir insan hələ tapmamış bir ortağı ilə yaradılır.",
   "Subaylar. Bəlkə Tanrının Yanlış sevgidən istirahət et deməsi belədir.",
   "Subaylar, daha sonra bir sinif sevgisi üçün fərdi inkişaflarına üstünlük verən gənclərdir."
   "Mükəmməl olanı axtarmıram, amma güclü olduğum sayəsində mükəmməl olan birini axtarıram.",
   "İnsanların sevgililəri bizim gözləyən ruh yoldaşlarımızdır.",
   "Subaylar keçməlidir. Hər şeyin bir vaxtı var, bütün tənhalığın halal sevgilisi ilə birliyə çevrildiyi zaman. Səbirli olun."
   "Romeo Juliet üçün ölməyə hazırdı, Jack Rose'u qurtardığı üçün öldü. Məsələ burasındadır ki, yaşamaq istəyirsinizsə subay olun.",
   "İnsanları güclü tərəflərindən deyil, insanları səmimiyyətindən axtarıram.",
   "Madmates tez-tez qarışıq olan flip-flop deyil. Buna görə lazımi mübarizədə olmağa davam edin.",
   "Gitara telləri olsanız, gitaraçı olmaq istəmirəm. Çünki sizi atmaq istəmirəm.",
   "Əgər səni sevmək bir xəyaldırsa, qoy sonsuza qədər xəyal edim."
   "Balım ... Mənim işim yalnız səni sevməkdir, taleylə mübarizə aparmaq deyil.",
   "Yanınızda olduğum zaman 1 saat cəmi 1 saniyə kimi hiss olunur, ancaq mən sizinlə uzaqlaşanda 1 gün 1 il kimi olur."
   "Kolak banan sumedang bilir, baxmayaraq ki, məsafə uzanır mənim sevgim heç vaxt yox olmayacaq."
   "Mən tək olmaq istəyirəm, tək deyil.",
   "Yaxşı olacağına söz verə bilmərəm. Ancaq söz verirəm ki, həmişə sənin yanında olacağam.",
   "Əgər xalqın nümayəndəsi olsam, mütləq uğursuzluğa düçar olaram, ağlımdakı tək şey sənsənsə, insanlar haqqında necə düşünə bilərəm."
   "Çiçəklərlə dolu bağçama baxın. Gözlərinizə baxın, ürəyim çiçəklənir.",
   "İndi, sabah və həmişəlik yanımda olacağına söz ver."
   "İtkin düşmək təkcə aradakı məsafədən qaynaqlanmır. Həm də reallaşmayan istəklər üzündən.",
   "Sən məndən heç vaxt uzaq olmayacaqsan, hara getsəm də daima oradasan, çünki sən həmişə ürəyimdəsən, uzaq olan yalnız bədənimizdir, ürəyimiz deyil."
   "Hər baxışdan bilirəm, məsafə və zaman bizə mane olur. Ancaq inanıram ki, daha sonra mütləq birləşəcəyik."
   "Heç görüşmədən darıxmaq heç vaxt oxunmayan bir mahnı yaratmaqla eynidir."
   "Elə vaxtlar olur ki, məsafə mənimlə sizin aranızda hər zaman bir maneədir, amma yenə də ürəyimdə həmişə yaxınıq."
   "Əgər bu ürək bütün həsrətini dayandıra bilmirsə, sənin üçün dua etməkdən başqa nə edə bilərəm."
   "Bəlkə də bu anda yalnız bu həsrətimi saxlaya bilərəm. Vaxt çatana qədər bu həsrətini sizinlə görüşüb azad edə biləcəyəm.",
   "Ürəyimdəki təlatümlü həsrətdən bəzən sənin sevgi dolu qucaqlaşmalarına ehtiyac duyuram."
   "Soyuq gecədə daha xatırlamıram; nə qədər tez-tez sənin üçün darıxdığımı düşünürəm.",
   "Sənin üçün darıxmaq birdən gələn və uzun sürən yağış kimidir. Və yağış dayandıqdan sonra da səni darıxıram."
   "Səni tanıdığımdan bəri öyrənməyə davam etmək, sənin üçün ən yaxşısı olmağı öyrənmək istəyirəm."
   "Bir qələmlə üzün arasındakı fərqi bilirsinizmi? Yazı qələmini silə bilsəniz, ancaq üzünüz heç bir şeyi ağlımdan silə bilməyəcəksə."
   "Narahat olmağım sabahkı Milli İmtahan deyil, sən məni tərk etdikdən sonra keçdiyim həyat sınağıdır.",
   "Məktəbdəki xoşbəxtlik haqqında məni motivasiya edən bir şey, hər gün gülüşünüzü görə bilməkdir."
   "Məktəbə getməklə evinə getmək arasındakı fərqi bilirsinizmi? Əgər məktəbə gedirsinizsə, mütləq kitab və qələm gətirməlisiniz, ancaq evinizə getsəniz, sadəcə ürəyimi və sevgimi gətirirəm.",
   "Sabah bazar ertəsi olsa kədərlənmirəm, sizinlə görüşməsəm kədərlənirəm.",
   "Mənim sevgi anım, sizin sevgi anınıza dikdir. Sevgimizi mükəmməl bir tarazlıq nöqtəsinə çevirin."
   "Mən finiş xətti olduğunuz müddətcə dünyadakı qaçış yarışlarında iştirak etməyə hazıram."
   "Ev tapşırığım səni darıxmaqdır. Riyaziyyatdan daha güclü, Fizikadan daha geniş, Biologiyadan daha güclü.",
   "Sənə olan sevgim, ölənə qədər dayanmayacaq bir maddələr mübadiləsinə bənzəyir."
   "Jelangkung sənin kimidirsə, gəl məni götür, səni evə apararam.",
   "Qaraciyər yemək də daxil olmaqla, yanında olduğum müddətdə istədiyimi yeyin."
   "Sevgi ölüm hökmünə bənzəyir. Əgər vurulmasan, onu as."
   "Səni sevmək narkotik kimi bir şeydir: bir dəfə aludə olmağa çalışarsan, özünüzü maraqlandırmağa çalışmırsınız, onu asılılığa salmaq üçün buraxın."
   "Ən çox qəlyanaltı yeməyi sevirəm, çünki qəlyanaltı dadlıdır. Üstəlik, sənə tamamilə sahib olmaq ...",
   "Bu dünya yalnız ikimizə aiddir. Qalan hər şey sadəcə bir müqavilədir."
   "Mənim üçün bu günlərin hamısı çərşənbə axşamıdır. Sənin yanındaykən cənnətdə çərşənbə axşamı ...",
   "İkimiz də bir cinayətkar dəstə olsaq nə olar? Mən sənin ürəyini oğurladın, sən də mənim oğurladım.",
   "Sən bu səhər içdiyim qəhvəyə oxşayırsan. Acı, amma asılılıq yaradan.",
   "Dodaq boyanızı tez-tez qısqanıram. Səhərdən axşama kimi hər gün sizi öpə bilər.",
   "Adınızı eşitmək məni axmaq kimi gülümsəməyə vadar edə bilər.",
   "Bilirəm ki, sevgiliniz tək deyil, sizin kimi yalnız mən deyiləm.",
   "Sizə arzulamağı dayandırdığım vaxtdan bəri hər şeydə həvəssiz oldum ...",
   "Səninlə aşiq olmaq ən qəsdən ürək ağrısıdır.",
   "Yanımda olmağınız olmadan həyat xoşbəxtliyini hiss etmək çox çətindir."
   "Ürəyimdəki təlatümlü həsrətdən bəzən sənin sevgi dolu qucaqlaşmalarına ehtiyac duyuram."
   "Bilirsinizsə, indiyə qədər sizi hələ də sevirəm.",
   "Bəzən uçurtmalara həsəd aparıram ... iplər sadəcə qırılır, hələ də təqib olunur və başqalarının əlinə keçmək istəmirlər ...",
   "Nəhayət, sizinlə görüşənə qədər sevginin nə olduğunu bilmirdim. Ancaq, o anda ürəyimi sıxmağı necə hiss etdiyimi bilirdim."
   "Kovalamaq yorucu, amma daha da yorğun gözləmə \ nMənim varlığımı görməyinizi gözləyirəm ...",
   "Yalnız incitdiyin üçün sevməyi dayandırma. Çünki yağışsız göy qurşağı olmaz, göz yaşı olmadan əsl sevgi olmaz.",
   "Səni unutmağım üçün bir milyon səbəbim var, amma heç bir şey səni sevməyimi dayandırmağa məcbur edə bilməz."
   "Bəzən insan yalnız birini sevmək üçün özünü bu qədər axmaq hiss edir.",
   "Sən heç peşman olmadığım ən yaxşı ürək ağrısın.",
   "Gözləməyə dəyməməsi deyil, sadəcə tez-tez saxta ümid verməsi."
   "Bir hissəm ağrıyır, onu bu qədər yaxından xatırlayıram, toxunulmazdır.",
   "Birisini sevməyin ən yaxşısı gizli olaraq onun üçün dua etməkdir."
   "Kaş ki səni itirən kimi bu hissdən qurtarsaydım."
   "Sevgi naminə özümüzü aldadırıq. Güclü olmağa çalışmaq şərəfsiz olur."
   "Məni eviniz kimi düşünün, getsəniz evə hara gedəcəyinizi bilirsiniz. İstəsəniz qalın, darıxırsınızsa ...",
   "Başım qarışıq, məyus olmalıyam, yoxsa məyus olsam, onun yanında kiməm? \ N \ nMəyus deyiləmsə, ancaq sözlərini gözləyirəm.",
   "Mənim həsrətim dayanan bir budağa bənzəyir. Nəhayət quruyana, qırılana və ölənə qədər onu müşayiət edəcək daha çox yarpaq olmasa da.",
   "Düşünürəm ki, indi eyni xatirələri yaşayan yalnız iki qəribik.",
   "Yalnız bir neçə dəqiqə olsa da səndən nifrət et, buna görə səni unutmaq çox çətin deyil."
   "Səni bütün ürəyimlə sevirəm, ancaq hisslərinizi başqaları ilə bölüşürsünüz.",
   "Səni sevmək məni sındıra bilər, amma bir şəkildə səni tərk etmək məni düzəldə bilməz.",
   "Sən həyatımda hər şeydən əvvəl sənsən. Ancaq mən səndən ikinciyəm.",
   "Yalnız bir xəyalda görüşə bilsək, sonsuza qədər yatmaq istəyirəm."
   "Səni xoşbəxt görmək mənim xoşbəxtliyimdir, baxmayaraq ki, mənsiz xoşbəxt olursan.",
   "Bəzən bir obyektə həsəd aparıram. Dadı yoxdur, amma həmişə lazımdır. Dadı olan, amma tərk edilmiş və görməməzlikdən gələn məndən fərqli olaraq ...",
   "Yalnız ürəyim dayanarsa, necə hərəkət edə bilərəm?",
   "Səninlə bağlı xatirələr mənim üçün ev kimidir. Beləliklə, hər dəfə ağlım gəzəndə həmişə sənə qayıdacaq.",
   "Niyə toxuma faydalıdır? Çünki sevgi heç vaxt quruymur. - Sujiwo Tejo",
   "Əgər səni sevmək bir səhvdirsə, yaxşıdır, icazə verin səhv etməyimə davam edim."
   "Səninlə tanış olduğumdan bəri öyrənməyə davam etmək istəyirəm. Sizin üçün ən yaxşısını olmağı öyrənin."
   "Bəzi insanlar yalnız sənin gülümsəməyini görmək üçün axmaq davranırlar. Və buna görə xoşbəxtdir.",
   "Mən yaxşı bir insan deyiləm, amma sənin üçün ən yaxşısını öyrənəcəyəm."
   "Biz ölmürük, amma əvvəlki kimi yeriməməyimizə səbəb olan yaralar."
   "Sizin varlığınız hər gün ehtiyac duyduğum bir fincan qəhvəyə bənzəyir ki, günün həyəcanını yaşamağa təşviq edə bilər."
   "Həqiqətən dünyanı sənə vermək istəyirəm. Ancaq bu mümkün olmadığı üçün, həyatımdakı ən vacib şeyi sənə verəcəyəm, bu da mənim dünyam.",
   "Romantik görünməkdənsə, faciəli bir sona çatmaqdansa, yumoristik, lakin şirin oxumaq daha yaxşıdır."
   "Ben xəyal qırıqlığı ilə bitmir, nə vaxt ümid edib nə vaxt dayanacağını bilməlisən."
   "Mən, Ki wong Jowo, 'I Love U' nin mənasını başa düşmürəm. Amma başa düşürəm ki, 'tresno sənin heyətinəm."
   "Ayu və sugihə ehtiyacınız yoxdur, əminəm ki, qadınlar xoşbəxt və dəli olurlar.",
   "Heyətinizə olan sevgim kamera tərəfindən pozulur, ekipajınıza diqqət hələ də bulanıkdır.",
   "Saben dino kegowo xəyal edir, amma axmaq ola bilməz.",
   "30 dino ilə görüşməyin, özümü bir ay kimi hiss edirəm.",
   "Mən rezin itirən bir pişik kimi sənsizəm. Ambyar.",
   "İstəyirəm, hər dəfə oyun oynayıram. Supoyo mən iso nemokne kowe lewih hot. Ben Lewih dowo olduğum zaman sizin slira ilə urip.",
   "Heç vaxt opo kui tresno nə olduğunu bilmirdim, yalnız slatanız sayəsində tanış oldum.",
   "Sevgi aa ka neng moal leungit-leungit sanajan aa geus deui evlənin.",
   "Səbriniz məhduddur, amma sevginiz, ka anjeun henteu aya se epna.",
   "Kanyaah, Bayclean'ı tükənməkdən əziyyət çəkirəm.",
   "Endah keur babarengan jeung anjeun ek tuluy xatirələri xatırlanır, nepi ka poho.",
   "Hər zaman tək nəfəs alacaqsınız, sadə bir jalmi relyefə ehtiyacınız var."
   "Nyaahna aa, bank məmuru hələ borclar yığırsa (hayoh mumuntil). Çaya ehtiyacınız var."
   "Urangın səbri həddi, ancaq uranqa olan sevginiz sizin üçün yaxşıdır."
   "Hayang, bu dünyada belə bir sevgi sözünə lənət etdiyimi düşünürəm, sonra kumpulkeunu müalicə etməyi məsləhət görürəm ki, Anjeun nyaho çox böyük olsun, sənə olan sevgi azdır, Ka Anjeun."
   "Sakit ol, wae neng, Qardaş sevgisindən, mən krispatih mahnısını sapertos edirəm; zamansız.",
   "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu ən yaxşı kanggo anjeun.
   "Yalnız şəbəkəni itirmək kifayətdir, yox.",
   "Məni tez-tez qaraciyər yeməyə məcbur edirlər. Ancaq hələ də burada olduğunuzu başa düşmək məni yenidən sevindirir.",
   "Düşmənlərim də sənə sahib olmaq istəyənlərdir.",
   "Çoxları həmişə var, amma mənim istədiyim tək sənsənsə, onda nə olacaq?",
   "Yuxu saatlarım həsrətdən xarab olur.",
   "Çinin uzaq olması kifayətdir, bizi sevməyin.",
   "Əhəmiyyətli olan sənin xoşbəxtliyindir, mən vacib deyiləm ..",
   "Mənim yeganə arzum sənin tərəfindən sevilməkdir ...",
   "Mən sənsiz wiuw wiuw wiuw olmadan təcili yardım maşını kimidir."
   "Antarktidanın uzaq olması kifayətdir. Antarktida deyil."
]
