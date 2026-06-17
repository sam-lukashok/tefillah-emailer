// Full Ashkenazi Shacharit prayer rotation — 56 prayers in davening order.
// Each entry is an identifier only; content is generated fresh daily by Claude.

export const prayers = [
  // ── Birkot HaShachar ──────────────────────────────────────────────────────
  {
    id: 1,
    name_hebrew: "מוֹדֶה אֲנִי",
    name_english: "Modeh Ani",
    section: "Birkot HaShachar",
    context: "The very first words said each morning upon waking, before washing hands — expressing gratitude for the soul's return before one is even halachically ready to say God's name."
  },
  {
    id: 2,
    name_hebrew: "עַל נְטִילַת יָדַיִם",
    name_english: "Al Netilat Yadayim",
    section: "Birkot HaShachar",
    context: "The blessing recited after ritual hand-washing upon waking, connecting the physical act of purification to spiritual readiness for prayer."
  },
  {
    id: 3,
    name_hebrew: "אַשֶׁר יָצַר",
    name_english: "Asher Yatzar",
    section: "Birkot HaShachar",
    context: "The blessing recited after using the restroom, marveling at the complexity and fragility of the human body and the miracle of its functioning."
  },
  {
    id: 4,
    name_hebrew: "אֱלֹהַי נְשָׁמָה",
    name_english: "Elohai Neshamah",
    section: "Birkot HaShachar",
    context: "A morning blessing thanking God for the soul — its purity, its origin, and its daily return — one of the most theologically rich prayers in Shacharit."
  },
  {
    id: 5,
    name_hebrew: "בִּרְכוֹת הַתּוֹרָה",
    name_english: "Birkot HaTorah",
    section: "Birkot HaShachar",
    context: "The three blessings preceding Torah study each day — including the priestly blessing (Birkat Kohanim) said as a Torah text, and the prayer that Torah remain sweet in our mouths and those of our children."
  },
  {
    id: 6,
    name_hebrew: "פּוֹקֵחַ עִוְרִים",
    name_english: "Pokeach Ivrim — Who opens the eyes of the blind",
    section: "Birkot HaShachar",
    context: "One of the fifteen Birkot HaShachar, recited as one opens their eyes upon waking — moving from physical sight to the deeper gift of spiritual perception."
  },
  {
    id: 7,
    name_hebrew: "מַלְבִּישׁ עֲרוּמִּים",
    name_english: "Malbish Arumim — Who clothes the naked",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when getting dressed, linking the physical act to God's provision and to human dignity rooted in tzelem Elokim."
  },
  {
    id: 8,
    name_hebrew: "מַתִּיר אֲסוּרִים",
    name_english: "Matir Asurim — Who releases the bound",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when stretching the limbs after sleep — the body released from its nocturnal stillness as from bonds."
  },
  {
    id: 9,
    name_hebrew: "זוֹקֵף כְּפוּפִים",
    name_english: "Zokeif Kefufim — Who straightens the bent",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when standing upright — physical posture mirroring the spiritual standing before God that defines each day."
  },
  {
    id: 10,
    name_hebrew: "רוֹקַע הָאָרֶץ עַל הַמָּיִם",
    name_english: "Roka Ha'aretz — Who spreads the earth over the waters",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when placing feet on the floor, invoking the act of creation — the firm ground one stands on as a daily miracle of order from chaos."
  },
  {
    id: 11,
    name_hebrew: "שֶׁעָשָׂה לִי כָּל צָרְכִּי",
    name_english: "She'asah Li Kol Tzarki — Who has provided all my needs",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when putting on shoes — classically tied to the wearing of leather shoes as a mark of dignity and provision."
  },
  {
    id: 12,
    name_hebrew: "הַמֵּכִין מִצְעֲדֵי גָבֶר",
    name_english: "HaMechin Mitz'adei Gaver — Who firms a man's steps",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when beginning to walk, echoing the verse from Proverbs that a person plans their path but God directs their steps."
  },
  {
    id: 13,
    name_hebrew: "אוֹזֵר יִשְׂרָאֵל בִּגְבוּרָה",
    name_english: "Ozer Yisrael BiGvurah — Who girds Israel with strength",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when fastening a belt or garment, invoking Israel's collective strength as a gift of God rather than a product of national pride."
  },
  {
    id: 14,
    name_hebrew: "עוֹטֵר יִשְׂרָאֵל בְּתִפְאָרָה",
    name_english: "Oter Yisrael BeTifarah — Who crowns Israel with splendor",
    section: "Birkot HaShachar",
    context: "Morning blessing recited when covering the head, connecting the kippah or hat to Israel's unique splendor as God's people."
  },
  {
    id: 15,
    name_hebrew: "הַנּוֹתֵן לַיָּעֵף כֹּחַ",
    name_english: "HaNoten LaYaef Koach — Who gives strength to the weary",
    section: "Birkot HaShachar",
    context: "A later addition to the Birkot HaShachar, drawn from Isaiah 40:29, expressing gratitude for renewed physical and spiritual energy after sleep."
  },
  {
    id: 16,
    name_hebrew: "שֶׁלֹּא עָשַׂנִי גּוֹי",
    name_english: "She'lo Asani Goy — Who has not made me a non-Jew",
    section: "Birkot HaShachar",
    context: "Morning blessing expressing gratitude for Jewish identity — for the privilege of mitzvot and covenant, not a claim of superiority over others."
  },
  {
    id: 17,
    name_hebrew: "שֶׁלֹּא עָשַׂנִי עֶבֶד",
    name_english: "She'lo Asani Aved — Who has not made me a slave",
    section: "Birkot HaShachar",
    context: "Morning blessing expressing gratitude for freedom — with roots in the Exodus narrative and the halachic freedom to fulfill all mitzvot without restriction."
  },
  {
    id: 18,
    name_hebrew: "שֶׁלֹּא עָשַׂנִי אִשָּׁה / שֶׁעָשַׂנִי כִּרְצוֹנוֹ",
    name_english: "She'lo Asani Ishah / She'asani KiRtzono",
    section: "Birkot HaShachar",
    context: "The gendered blessing — men say 'who has not made me a woman,' taking on the obligation of time-bound mitzvot; women say 'who has made me according to His will,' affirming their distinct role. One of the most discussed and reinterpreted blessings in the siddur."
  },

  // ── Pesukei D'Zimrah ──────────────────────────────────────────────────────
  {
    id: 19,
    name_hebrew: "בָּרוּךְ שֶׁאָמַר",
    name_english: "Baruch She'amar",
    section: "Pesukei D'Zimrah",
    context: "The opening blessing of Pesukei D'Zimrah, said to have come down from heaven on a slip of parchment. It frames the entire section of praise psalms that follows."
  },
  {
    id: 20,
    name_hebrew: "הוֹדוּ לַה׳ — תְּהִלִּים קה",
    name_english: "Hodu — Psalm 105 (opening)",
    section: "Pesukei D'Zimrah",
    context: "The psalm beginning Pesukei D'Zimrah proper, calling Israel to give thanks, seek God, and recount His wonders — originally sung by the Levites when David brought the Ark to Jerusalem."
  },
  {
    id: 21,
    name_hebrew: "מִזְמוֹר שִׁיר לְיוֹם הַשַּׁבָּת — תְּהִלִּים צב",
    name_english: "Mizmor Shir LeYom HaShabbat — Psalm 92",
    section: "Pesukei D'Zimrah",
    context: "Said to be the song that Adam sang on the first Shabbat, and traditionally attributed to the future World to Come. Recited in weekday Pesukei D'Zimrah in many Ashkenazi congregations."
  },
  {
    id: 22,
    name_hebrew: "אַשְׁרֵי — תְּהִלָּה לְדָוִד — תְּהִלִּים קמה",
    name_english: "Ashrei — Psalm 145",
    section: "Pesukei D'Zimrah",
    context: "The alphabetical acrostic at the heart of Pesukei D'Zimrah. The Talmud says one who recites it three times daily is guaranteed a place in the World to Come — largely because of the verse 'You open Your hand and satisfy all living things.'"
  },
  {
    id: 23,
    name_hebrew: "הַלְלוּיָהּ — תְּהִלִּים קמח-קנ",
    name_english: "Hallelu'yah — Psalms 148–150",
    section: "Pesukei D'Zimrah",
    context: "The closing crescendo of Pesukei D'Zimrah — Psalms 148, 149, and 150 — calling every level of creation from the heavens to the earth to praise God, culminating in 'Let everything that has breath praise God.'"
  },
  {
    id: 24,
    name_hebrew: "יִשְׁתַּבַּח",
    name_english: "Yishtabach",
    section: "Pesukei D'Zimrah",
    context: "The closing blessing of Pesukei D'Zimrah, listing fifteen forms of praise — corresponding, according to the Levush, to the fifteen psalms of Shir HaMa'alot and the fifteen steps of the Temple."
  },

  // ── Birkot Kriat Shema ───────────────────────────────────────────────────
  {
    id: 25,
    name_hebrew: "בָּרְכוּ",
    name_english: "Barkhu",
    section: "Shacharit — Birkot Kriat Shema",
    context: "The formal call to communal prayer, marking the transition from the preparatory sections into the heart of Shacharit. The chazzan calls and the congregation responds, enacting the ancient Temple liturgical form."
  },
  {
    id: 26,
    name_hebrew: "יוֹצֵר אוֹר",
    name_english: "Yotzer Or",
    section: "Shacharit — Birkot Kriat Shema",
    context: "First of the two blessings before the Shema, praising God as the creator of light — physical sunlight each morning, and by extension the spiritual light of Torah and creation."
  },
  {
    id: 27,
    name_hebrew: "קְדֻשַּׁת יוֹצֵר — אֵל אָדוֹן",
    name_english: "El Adon — Kedushah of Yotzer",
    section: "Shacharit — Birkot Kriat Shema",
    context: "A piyut (liturgical poem) embedded in Yotzer Or, describing how the celestial luminaries praise God and how the angels sanctify Him — the Kedushah of the heavenly world that precedes our own."
  },
  {
    id: 28,
    name_hebrew: "אַהֲבָה רַבָּה",
    name_english: "Ahavah Rabbah",
    section: "Shacharit — Birkot Kriat Shema",
    context: "Second blessing before the Shema — focusing entirely on God's love for Israel, expressed through the gift of Torah. We are commanded to love God (in the Shema that follows) only after first hearing that we are loved."
  },

  // ── Kriat Shema ──────────────────────────────────────────────────────────
  {
    id: 29,
    name_hebrew: "שְׁמַע יִשְׂרָאֵל",
    name_english: "Shema Yisrael",
    section: "Kriat Shema",
    context: "The central declaration of Jewish faith — six words that contain the entire theology of monotheism. Said twice daily, it is the first prayer taught to Jewish children and the last words said at death."
  },
  {
    id: 30,
    name_hebrew: "וְאָהַבְתָּ — פָּרָשָׁה רִאשׁוֹנָה",
    name_english: "Ve'ahavta — First paragraph of Shema",
    section: "Kriat Shema",
    context: "The commandment to love God with all one's heart, soul, and might — to internalize Torah, teach it to children, bind it on the hand and head (tefillin), and affix it to the doorpost (mezuzah)."
  },
  {
    id: 31,
    name_hebrew: "וְהָיָה אִם שָׁמֹעַ — פָּרָשָׁה שְׁנִיָּה",
    name_english: "Ve'hayah Im Shamoa — Second paragraph of Shema",
    section: "Kriat Shema",
    context: "The paragraph of consequence — linking collective observance of mitzvot to blessing and rain, and neglect to drought and exile. One of the more difficult passages theologically, and one of the most discussed."
  },
  {
    id: 32,
    name_hebrew: "וַיֹּאמֶר — פָּרָשַׁת צִיצִית",
    name_english: "Vayomer — Third paragraph of Shema (Tzitzit)",
    section: "Kriat Shema",
    context: "The tzitzit paragraph — commanded as a visual reminder of all 613 mitzvot, and ending with the Exodus from Egypt. The only paragraph said even at night when tzitzit are not visible, because it contains the Exodus."
  },

  // ── After Shema ──────────────────────────────────────────────────────────
  {
    id: 33,
    name_hebrew: "אֱמֶת וְיַצִּיב",
    name_english: "Emet Ve'Yatziv",
    section: "Shacharit — After Shema",
    context: "The first blessing after the Shema, affirming the truth of what was just declared and weaving in the Exodus narrative. It is forbidden to interrupt between the Shema and this blessing — they form a single unit."
  },
  {
    id: 34,
    name_hebrew: "מִי כָמֹכָה — גְּאֻלָּה",
    name_english: "Mi Chamocha — Ge'ulah",
    section: "Shacharit — After Shema",
    context: "The song of the sea (Shirat HaYam) compressed into the blessing — the words Moses and Israel sang at the splitting of the Red Sea, now embedded in daily morning prayer as the transition into the Amidah."
  },

  // ── Shmonah Esrei (Amidah) ───────────────────────────────────────────────
  {
    id: 35,
    name_hebrew: "אָבוֹת",
    name_english: "Avot — Forefathers",
    section: "Shmonah Esrei",
    context: "First blessing of the Amidah — invoking the merit of Avraham, Yitzchak, and Yaakov, establishing our credentials before God. Contains the foundational attributes of God repeated throughout the liturgy."
  },
  {
    id: 36,
    name_hebrew: "גְּבוּרוֹת",
    name_english: "Gevurot — God's Might",
    section: "Shmonah Esrei",
    context: "Second blessing of the Amidah — praising God's power expressed not in conquest but in sustaining life, healing, and especially techiyat hameitim (resurrection of the dead)."
  },
  {
    id: 37,
    name_hebrew: "קְדֻשַּׁת הַשֵּׁם",
    name_english: "Kedushat HaShem — Sanctification of God",
    section: "Shmonah Esrei",
    context: "Third blessing of the Amidah — the holiness blessing. In the chazzan's repetition, it expands into the Kedushah, where the congregation joins the angels in declaring 'Kadosh, Kadosh, Kadosh.'"
  },
  {
    id: 38,
    name_hebrew: "אַתָּה חוֹנֵן — בִּינָה",
    name_english: "Atah Chonen — Wisdom / Binah",
    section: "Shmonah Esrei",
    context: "Fourth blessing of the Amidah and first of the thirteen middle petitions — asking for chochmah (wisdom), binah (understanding), and da'at (knowledge). Said at Havdalah time on Motza'ei Shabbat."
  },
  {
    id: 39,
    name_hebrew: "הֲשִׁיבֵנוּ — תְּשׁוּבָה",
    name_english: "Hashiveinu — Teshuvah / Repentance",
    section: "Shmonah Esrei",
    context: "Fifth blessing of the Amidah — asking God to draw us back to Him in complete teshuvah. Notably, the request is not that we find our own way back, but that God help us return."
  },
  {
    id: 40,
    name_hebrew: "סְלַח לָנוּ — סְלִיחָה",
    name_english: "Slach Lanu — Selichah / Forgiveness",
    section: "Shmonah Esrei",
    context: "Sixth blessing of the Amidah — asking for forgiveness of sins. The only blessing in the Amidah that opens with its own petition (slach lanu — forgive us) rather than an attribute of God."
  },
  {
    id: 41,
    name_hebrew: "רְאֵה בְעָנְיֵנוּ — גְּאֻלָּה",
    name_english: "Re'eh Ve'onyenu — Geulah / Redemption",
    section: "Shmonah Esrei",
    context: "Seventh blessing of the Amidah — asking God to see our affliction and redeem us. The sequence teshuvah → selichah → geulah reflects the classical understanding: repentance leads to forgiveness, which opens the door to redemption."
  },
  {
    id: 42,
    name_hebrew: "רְפָאֵנוּ — רְפוּאָה",
    name_english: "Refa'enu — Refuah / Healing",
    section: "Shmonah Esrei",
    context: "Eighth blessing of the Amidah — asking for physical and spiritual healing. The place in this blessing where personal prayers for the sick (Mi Sheberach style) are inserted by name during silent Amidah."
  },
  {
    id: 43,
    name_hebrew: "בָּרֵךְ עָלֵינוּ — בִּרְכַּת הַשָּׁנִים",
    name_english: "Bareich Aleinu — Birkat HaShanim / Blessing of the Years",
    section: "Shmonah Esrei",
    context: "Ninth blessing of the Amidah — asking for agricultural prosperity and blessing. The text changes seasonally: 'dew and rain' in winter (from Shemini Atzeret), 'blessing' in summer."
  },
  {
    id: 44,
    name_hebrew: "תְּקַע בְּשׁוֹפָר — קִבּוּץ גָּלֻיּוֹת",
    name_english: "Teka BeShoar — Kibbutz Galuyot / Ingathering of Exiles",
    section: "Shmonah Esrei",
    context: "Tenth blessing of the Amidah — praying for the ingathering of all exiles to the Land of Israel, with the image of the great shofar blast that will announce the final redemption."
  },
  {
    id: 45,
    name_hebrew: "הָשִׁיבָה שׁוֹפְטֵינוּ — מִשְׁפָּט",
    name_english: "Hashivah Shofteinu — Mishpat / Justice",
    section: "Shmonah Esrei",
    context: "Eleventh blessing of the Amidah — praying for the restoration of righteous judges and a just society, rooted in the verse from Isaiah: 'I will restore your judges as at first.'"
  },
  {
    id: 46,
    name_hebrew: "וְלַמַּלְשִׁינִים — בִּרְכַּת הַמִּינִים",
    name_english: "VeLamalshinim — Birkat HaMinim",
    section: "Shmonah Esrei",
    context: "Twelfth blessing of the Amidah — asking that heresy, apostasy, and those who harm the Jewish people find no hope. Added in the Talmudic period and one of the most historically discussed blessings in the Amidah."
  },
  {
    id: 47,
    name_hebrew: "עַל הַצַּדִּיקִים — צַדִּיקִים",
    name_english: "Al HaTzaddikim — Tzaddikim / The Righteous",
    section: "Shmonah Esrei",
    context: "Thirteenth blessing of the Amidah — praying for the righteous, the pious, the elders, Torah scholars, righteous converts, and the remnant of Israel. A blessing of solidarity with all who labor for God."
  },
  {
    id: 48,
    name_hebrew: "וְלִירוּשָׁלַיִם — בִּנְיַן יְרוּשָׁלַיִם",
    name_english: "VeLiYerushalayim — Binyan Yerushalayim / Rebuilding Jerusalem",
    section: "Shmonah Esrei",
    context: "Fourteenth blessing of the Amidah — praying for the rebuilding of Jerusalem, the return of the Shechina (Divine Presence) to Zion, and the restoration of the Davidic throne within it."
  },
  {
    id: 49,
    name_hebrew: "אֶת צֶמַח דָּוִד — מַלְכוּת בֵּית דָּוִד",
    name_english: "Et Tzemach David — Malchut Beit David / Mashiach",
    section: "Shmonah Esrei",
    context: "Fifteenth blessing of the Amidah — praying for the sprouting of the 'shoot of David,' the arrival of Mashiach ben David, and the salvation he brings."
  },
  {
    id: 50,
    name_hebrew: "שְׁמַע קוֹלֵנוּ",
    name_english: "Shema Koleinu — Hear Our Voice",
    section: "Shmonah Esrei",
    context: "Sixteenth blessing of the Amidah — a general, open-ended plea for God to accept all of our prayers. The place where additional personal requests may be inserted during the silent Amidah."
  },
  {
    id: 51,
    name_hebrew: "רְצֵה — עֲבוֹדָה",
    name_english: "Retzei — Avodah / Temple Service",
    section: "Shmonah Esrei",
    context: "Seventeenth blessing of the Amidah — praying for the restoration of Temple worship and that God accept Israel's prayer as He once accepted the Temple service. Includes Ya'aleh VeYavo on Rosh Chodesh and Yom Tov."
  },
  {
    id: 52,
    name_hebrew: "מוֹדִים — הוֹדָאָה",
    name_english: "Modim — Hoda'ah / Thanksgiving",
    section: "Shmonah Esrei",
    context: "Eighteenth blessing of the Amidah — the only blessing where the congregation says its own version (Modim DeRabbanan) during the chazzan's repetition, because acknowledgment of God must come from each person's own mouth."
  },
  {
    id: 53,
    name_hebrew: "שִׂים שָׁלוֹם — שָׁלוֹם",
    name_english: "Sim Shalom — Shalom / Peace",
    section: "Shmonah Esrei",
    context: "Nineteenth and final blessing of the Amidah — the priestly blessing (Birkat Kohanim) expanded into a prayer for peace, goodness, blessing, and light. The Sages teach that the entire Torah was given for the sake of peace."
  },

  // ── After the Amidah ──────────────────────────────────────────────────────
  {
    id: 54,
    name_hebrew: "תַּחֲנוּן — נְפִילַת אַפַּיִם",
    name_english: "Tachanun — Supplication / Nefilat Apayim",
    section: "Post-Amidah",
    context: "The supplication prayers said after the Amidah on weekdays — including Nefilat Apayim (falling on the face), Psalm 6, and Viduy (confession). Not said on Shabbat, Yom Tov, or joyous occasions."
  },
  {
    id: 55,
    name_hebrew: "אוּבָא לְצִיּוֹן",
    name_english: "Uva L'Tzion",
    section: "Post-Amidah",
    context: "A passage built around verses from Isaiah and Ezekiel about redemption, containing the Kedushah D'Sidra — the third daily recitation of the angelic Kedushah, said in the language of the masses (Aramaic), making it accessible to all."
  },
  {
    id: 56,
    name_hebrew: "עָלֵינוּ לְשַׁבֵּחַ",
    name_english: "Aleinu",
    section: "Post-Amidah",
    context: "The concluding prayer of Shacharit — originally the opening of the Rosh Hashana Mussaf and attributed by tradition to Yehoshua. Its two paragraphs move from Israel's particular mission to the universal hope for all humanity to recognize God."
  }
];

export const totalPrayers = prayers.length;
