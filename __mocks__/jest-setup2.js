const rn = require('@r/api-client');

const mockData = {
	"posts": {
		"t3_5vpnjl": {
			"cleanUrl":"http://www.businessinsider.com.au/elijah-wood-hollywood-pedophile-ring-2016-5?r=US&IR=T",
			"createdUTC":1487844877,"name":"t3_5vpnjl","author":"yeoldgolddigger",
			"title":"Elijah Wood says there's a secret paedophile ring in Hollywood and child actors are 'prey'",
			"score":4329
		},
		"t3_5vo7nw": {
			"cleanUrl":"https://i.redd.it/9un6j34abjhy.png",
			"createdUTC":1487824111,"name":"t3_5vo7nw","author":"iwvp",
			"title":"Alien visits /pol/",
			"score":16119
		},
		"t3_5vo5en": {
			"cleanUrl":"https://motherboard.vice.com/en_us/article/3000-scientists-have-asked-for-help-running-for-office-to-oppose-trump",
			"createdUTC":1487823483,"name":"t3_5vo5en","author":"200357931",
			"title":"3,000 Scientists Have Asked for Help Running for Office to Oppose Trump",
			"score":13851
		},
		"t3_5vol5q": {
			"cleanUrl":"http://www.cnn.com/2017/02/22/politics/boy-toby-question-tom-cotton-town-hall-trnd/",
			"createdUTC":1487828174,"name":"t3_5vol5q","author":"doogie92",
			"title":"7-year-old to senator: Don't take away PBS to build the wall.",
			"score":6880
		},
		"t3_5vo599": {
			"cleanUrl":"https://www.nytimes.com/2015/01/14/opinion/tom-hanks-on-his-two-years-at-chabot-college.html?_r=1",
			"createdUTC":1487823444, "name":"t3_5vo599", "author":"freddyjohnson",
			"title":"TIL Tom Hanks is a big fan of community colleges. Since he had poor grades in high school and lousy SAT scores Hanks ended up at Chabot, a nearby community college, because it accepted everyone and was free.",
			"score":12347
		},
		"t3_5vo8c6": {
			"cleanUrl":"http://i.imgur.com/lxVpCqu.gifv",
			"createdUTC":1487824312,"name":"t3_5vo8c6","author":"ClosingDownSummer",
			"title":"Just a guy taking down the Confederate Flag on live TV",
			"score":38763
		},
		"t3_5vo1ow": {
			"cleanUrl":"/r/Showerthoughts/comments/5vo1ow/as_a_child_i_pretended_to_like_carrots_for_my/",
			"createdUTC":1487822460, "name":"t3_5vo1ow", "author":"Jalexgeorge",
			"title":"As a child I pretended to like carrots for my parents. As an adult I pretend to like them for my child. I fucking hate carrots.",
			"score":23182
		},
		"t3_5voqhq": {
			"cleanUrl":"https://i.redd.it/yyosucwfsjhy.gif",
			"createdUTC":1487829864,"name":"t3_5voqhq","author":"nyr3188",
			"title":"Runaway truck",
			"score":4727
		},
		"t3_5vnlu2": {
			"cleanUrl":"https://www.theguardian.com/world/2017/feb/23/north-korea-malaysia-investigating-kim-jong-nam-death",
			"createdUTC":1487818229,"name":"t3_5vnlu2","author":"EpycWyn",
			"title":"North Korea demands Malaysia stop investigating Kim Jong-nam death",
			"score":20560
		},
		"t3_5vnp96": {
			"cleanUrl":"http://i.imgur.com/GPxQTZY.jpg",
			"createdUTC":1487819173,"name":"t3_5vnp96","author":"Ferenginar",
			"title":"$0.25 out of a machine. $947.36 out of a dog. Gotta love that smug \"worth it\" look.",
			"score":48443
		},
		"t3_5vnjqm": {
			"cleanUrl":"http://i.imgur.com/7YKo3w3.gifv",
			"createdUTC":1487817633,"name":"t3_5vnjqm","author":"RuchW",
			"title":"Today's Google Doodle is pretty amazing [GIF]",
			"score":43695
		},
		"t3_5vo45r": {
			"cleanUrl":"https://gfycat.com/OpenKeyAfricanmolesnake",
			"createdUTC":1487823147,"name":"t3_5vo45r","author":"namraka",
			"title":"Shooting at a snake, WCGW?",
			"score":5654
		},
		"t3_5vowxr": {
			"cleanUrl":"/r/Overwatch/comments/5vowxr/hey_jeff_as_a_lucio_main_i_think_its_imperative/",
			"createdUTC":1487831948,"name":"t3_5vowxr","author":"FelonysShadow",
			"title":"Hey Jeff, as a Lucio main, I think it's imperative to get Hippity Hoppity Get off My Property as a voice line.",
			"score":3137
		},
		"t3_5vnbtl": {
			"cleanUrl":"http://i.imgur.com/pICwGoj.png",
			"createdUTC":1487815533,"name":"t3_5vnbtl","author":"redsox1524",
			"title":"Love, Morriage, Boby?",
			"score":12638
		},
		"t3_5vnnzh": {
			"cleanUrl":"http://www.simonstalenhag.se/bilderbig/by_renderfarm_1920.jpg",
			"createdUTC":1487818832,"name":"t3_5vnnzh","author":"Cyrusdexter",
			"title":"Render Farm, Simon Stålenhag, Digital, 2017 (1920x1920)",
			"score":11383
		},
		"t3_5vny22": {
			"cleanUrl":"https://i.redd.it/b2205igl3jhy.jpg",
			"createdUTC":1487821473,"name":"t3_5vny22","author":"TBoneTheOriginal",
			"title":"My great grandfather, posing with his bicycle in 1894",
			"score":7540
		},
		"t3_5vnmzx": {
			"cleanUrl":"https://i.reddituploads.com/e3f34897e0d24cb9b266c89712a0c7c3?fit=max&h=1536&w=1536&s=b19610aae32f95c77bf4d0c84dc123ca",
			"createdUTC":1487818558, "name":"t3_5vnmzx", "author":"chipperblueberry",
			"title":"I volunteer at the humane society and this girl shook my hand when I first met her! Dogs are the best",
			"score":8899
		},
		"t3_5vnqcp": {
			"cleanUrl":"https://www.youtube.com/watch?v=EkXgRlRao5I",
			"createdUTC":1487819457,"name":"t3_5vnqcp","author":"filmfanatic5",
			"title":"Alien: Covenant | “Prologue: Last Supper\" [HD] | 20th Century FOX",
			"score":7291
		},
		"t3_5vnfzu": {
			"cleanUrl":"http://imgur.com/8r7tPbo",
			"createdUTC":1487816634,"name":"t3_5vnfzu","author":"Mystery22X",
			"title":"Admit it, you'll do the same thing when you get yours",
			"score":8619
		},
		"t3_5vn6uj": {
			"cleanUrl":"https://gfycat.com/MeekObeseAnole",
			"createdUTC":1487814235,"name":"t3_5vn6uj","author":"Alpha-Phoenix",
			"title":"The North Star isn't special because it's bright. It's unique because it appears to stand still!",
			"score":8971
		},
		"t3_5vmvpj": {
			"cleanUrl":"http://i.imgur.com/pI8vkWY.gifv",
			"createdUTC":1487811351,"name":"t3_5vmvpj","author":"RespectMyAuthoriteh",
			"title":"\"Is he coming?\"",
			"score":11569
		},
		"t3_5vnmwd": {
			"cleanUrl":"http://www.forbes.com/sites/jaymcgregor/2017/02/20/reddit-is-being-manipulated-by-big-financial-services-companies/#9d4c3951e150",
			"createdUTC":1487818529,"name":"t3_5vnmwd","author":"skoalbrother",
			"title":"Reddit is Being Manipulated By Big Financial Services Companies",
			"score":6031
		},
		"t3_5vmqix": {
			"cleanUrl":"http://www.reuters.com/article/us-usa-trump-lgbt-idUSKBN161243?il=0",
			"createdUTC":1487810048,"name":"t3_5vmqix","author":"truthmatters286s",
			"title":"Trump revokes Obama guidelines on transgender bathrooms",
			"score":40214
		},
		"t3_5vmj8y": {
			"cleanUrl":"https://i.redd.it/qnhu1ird0ihy.jpg",
			"createdUTC":1487808324,"name":"t3_5vmj8y","author":"Derp43",
			"title":"Robert filed a five day protesting permit with the city so he can yell at Best Buy for the rest of the week.",
			"score":53704
		},
		"t3_5vms93": {
			"cleanUrl":"https://i.imgur.com/zDiiSAV.gifv",
			"createdUTC":1487810490,"name":"t3_5vms93","author":"IHaeTypos",
			"title":"Battle Simulator - chicken vs 20,000 soldiers",
			"score":42496
		},
		"t3_5vmp0r": {
			"cleanUrl":"http://www.philly.com/philly/news/Philly-man-lied-about-kidnapped-child-to-make-police-work-harder-to-find-his-stolen-car-.html",
			"createdUTC":1487809675,"name":"t3_5vmp0r","author":"gn3xu5",
			"title":"Philly man lied about kidnapped child to make police 'work harder' to find his stolen car",
			"score":18404
		},
		"t3_5vmtxd": {
			"cleanUrl":"http://i.imgur.com/WpPMaq8.jpg",
			"createdUTC":1487810905,"name":"t3_5vmtxd","author":"rsimmonds",
			"title":"[IMAGE] Friendly Reminder from Elon Musk...",
			"score":21504
		},
		"t3_5vnm6f": {
			"cleanUrl":"http://i.imgur.com/h7NGVdm.png",
			"createdUTC":1487818325,"name":"t3_5vnm6f","author":"zakiay93",
			"title":"And they call it puppy love",
			"score":4728
		},
		"t3_5vnql7": {
			"cleanUrl":"http://imgur.com/xVKptPT",
			"createdUTC":1487819517,"name":"t3_5vnql7","author":"jesuschristpope",
			"title":"So burnie was in Always sunny",
			"score":3913
		},
		"t3_5vofdz": {
			"cleanUrl":"http://i.imgur.com/nySwrXi.gifv",
			"createdUTC":1487826401,"name":"t3_5vofdz","author":"ClosingDownSummer",
			"title":"The 1975 smoking spliffs under the table at the Brit Awards tonight",
			"score":2573
		},
		"t3_5vnnvu": {
			"cleanUrl":"https://i.reddituploads.com/dd84d8ab951543738ef50883868c61c2?fit=max&h=1536&w=1536&s=d3778580d2304bc2628c8d87df30549a",
			"createdUTC":1487818805,"name":"t3_5vnnvu","author":"x-filesandchill",
			"title":"Animorphs.",
			"score":3990
		},
		"t3_5vmrhh": {
			"cleanUrl":"/r/AskReddit/comments/5vmrhh/what_is_the_worst_adult_temper_tantrum_you_have/",
			"createdUTC":1487810298,"name":"t3_5vmrhh","author":"Lumbrical",
			"title":"What is the worst adult temper tantrum you have seen?",
			"score":11501
		},
		"t3_5vphyc": {
			"cleanUrl":"https://imgur.com/gallery/wg8LI",
			"createdUTC":1487842064,"name":"t3_5vphyc","author":"ridiculouschemist",
			"title":"Guy calls out \"clingy ass girls\", Girls reply with messages from him.",
			"score":1074
		},
		"t3_5vnpmb": {
			"cleanUrl":"https://i.redd.it/gnhkyog0xihy.jpg",
			"createdUTC":1487819266,"name":"t3_5vnpmb","author":"CallMeClinton",
			"title":"me_irl",
			"score":3697
		},
		"t3_5vlz3r": {
			"cleanUrl":"https://i.redd.it/hbca6f73lhhy.jpg",
			"createdUTC":1487803160,"name":"t3_5vlz3r","author":"SnusTheMus",
			"title":"r/The_Donald",
			"score":19708
		},
		"t3_5vns60": {
			"cleanUrl":"https://i.redd.it/xwpz5rkeyihy.png",
			"createdUTC":1487819961,"name":"t3_5vns60","author":"Androze",
			"title":"My gecko has a tiny forest in his eye",
			"score":3980
		},
		"t3_5vn4k3": {
			"cleanUrl":"http://www.forbes.com/sites/jaymcgregor/2017/02/20/reddit-is-being-manipulated-by-big-financial-services-companies/2/#2d77de7b1e15",
			"createdUTC":1487813630,"name":"t3_5vn4k3","author":"magnora7",
			"title":"Forbes.com - Reddit is Being Manipulated By Big Financial Services Companies - There's no more denying it, the secret is as open as it can get",
			"score":5022
		},
		"t3_5vne86": {
			"cleanUrl":"http://i.imgur.com/dfJgI4s.png",
			"createdUTC":1487816173,"name":"t3_5vne86","author":"RyankHudson",
			"title":"Teach you...",
			"score":4258
		},
		"t3_5vm1tn": {
			"cleanUrl":"http://i.imgur.com/Gb0B0Tu.jpg",
			"createdUTC":1487803902,"name":"t3_5vm1tn","author":"awesomedan24",
			"title":"When the Respect State Marijuana Laws Act hits the House floor",
			"score":14338
		},
		"t3_5vpd0q": {
			"cleanUrl":"http://imgur.com/gallery/X1U0t",
			"createdUTC":1487839446,"name":"t3_5vpd0q","author":"dsfgorg",
			"title":"This bro is a bro for sure",
			"score":1131
		},
		"t3_5vmgau": {
			"cleanUrl":"http://i.imgur.com/nfCT4en.jpg",
			"createdUTC":1487807514,"name":"t3_5vmgau","author":"Chrishaidaczuk",
			"title":"[I Ate] A Smoores Crepe, with marshmallow and chocolate filling",
			"score":14167
		},
		"t3_5vpnoh": {
			"cleanUrl":"http://www.dailymail.co.uk/news/article-3611046/I-molested-passed-Corey-Feldman-details-horrors-Hollywood-pedophile-ring-reveals-Corey-Haim-just-11-raped-leading-life-drugs.html",
			"createdUTC":1487844951,"name":"t3_5vpnoh","author":"yeoldgolddigger",
			"title":"'I was molested and passed around': Corey Feldman describes his ordeal at the hands of Hollywood pedophile ring",
			"score":2226
		},
		"t3_5vmhhe": {
			"cleanUrl":"https://i.reddituploads.com/d651e5200ea94e92878aae171dd817ca?fit=max&h=1536&w=1536&s=bda3b653ab137c818d3d9ce456c07a29",
			"createdUTC":1487807837,"name":"t3_5vmhhe","author":"MomoYaseen",
			"title":"Netherlands bred this Tulip to look like the Canadian flag!",
			"score":7203
		},
		"t3_5vo6nj": {
			"cleanUrl":"http://i.imgur.com/C0WuZCv.jpg",
			"createdUTC":1487823825,"name":"t3_5vo6nj","author":"Xidas",
			"title":"anime_irl",
			"score":2376
		},
		"t3_5vlsd2": {
			"cleanUrl":"http://imgur.com/aPuriIh",
			"createdUTC":1487801287,"name":"t3_5vlsd2","author":"The_Prodigal_Pariah",
			"title":"To the guy that enjoyed 5 relaxing days while the wife was away....",
			"score":43758
		},
		"t3_5vp3v6": {
			"cleanUrl":"/r/explainlikeimfive/comments/5vp3v6/eli5_are_2_in_1_shampoo_and_conditioner_just/",
			"createdUTC":1487834786,"name":"t3_5vp3v6","author":"therap321",
			"title":"ELI5: Are 2 in 1 shampoo and conditioner just shampoo and conditioner mixed together or is it a different chemical?",
			"score":1327
		},
		"t3_5vms1l": {
			"cleanUrl":"https://i.reddituploads.com/7b7f7bd86572401faa658f626a9251d8?fit=max&h=1536&w=1536&s=e6547b98ee500aadf7379162cf86953a",
			"createdUTC":1487810442,"name":"t3_5vms1l","author":"MarkLedger",
			"title":"Order 66's greatest loss.",
			"score":5485
		},
		"t3_5vo1tc": {
			"cleanUrl":"/r/nba/comments/5vo1tc/id_like_to_take_a_moment_to_acknowledge_that/",
			"createdUTC":1487822494,"name":"t3_5vo1tc","author":"sonnlich",
			"title":"I'd like to take a moment to acknowledge that Buddy Hield is the other guy who got monumentally screwed this week.",
			"score":2543
		},
		"t3_5vlqqg": {
			"cleanUrl":"https://i.reddituploads.com/de0df04ba99444d9a081d5f1fac6087e?fit=max&h=1536&w=1536&s=b9515418036bb25b9e817c0feb2e2128",
			"createdUTC":1487800826,"name":"t3_5vlqqg","author":"zanem8",
			"title":"A tight fit or a tight wallet? 🤔",
			"score":25257
		},
		"t3_5vnnu5": {
			"cleanUrl":"http://www.bbc.com/news/video_and_audio/features/magazine-39039876/39039876",
			"createdUTC":1487818790,"name":"t3_5vnnu5","author":"super_amazing",
			"title":"Killed for Christ in the Amazon (2017) - in 1956, five American missionaries were speared to death after making contact with a remote Ecuadorian tribe.",
			"score":3253
		},
		"t3_5vnoqs": {
			"cleanUrl":"/r/LifeProTips/comments/5vnoqs/lpt_always_leave_bottles_of_water_in_your_car/",
			"createdUTC":1487819025,"name":"t3_5vnoqs","author":"fechs_1812",
			"title":"LPT: Always leave bottles of water in your car incase your car breaks down in the middle of nowhere.",
			"score":3073
		},
		"t3_5vny99": {
			"cleanUrl":"http://imgur.com/ouRuUID",
			"createdUTC":1487821523,"name":"t3_5vny99","author":"Rotten89",
			"title":"It's a-me",
			"score":10018
		},
		"t3_5vq37a": {
			"cleanUrl":"https://gfycat.com/HandmadeDirectAnglerfish",
			"createdUTC":1487852441,"name":"t3_5vq37a","author":"GallowBoob",
			"title":"Trying to flirt with her man",
			"score":null},
		"t3_5vlmlr": {
			"cleanUrl":"http://www.barstoolsports.com/barstoolu/huffington-post-lifestyle-blogger-brags-about-finishing-2nd-in-florida-half-marathon-part-time-marathon-investigation-blogger-proves-she-cheated-and-gets-her-dqed/",
			"createdUTC":1487799689,"name":"t3_5vlmlr","author":"Tiivo",
			"title":"Blogger Proves Huffington Post Writer Cheated in Florida Half Marathon and gets her DQ’ed",
			"score":13850
		},
		"t3_5vn4ee": {
			"cleanUrl":"http://www.ibtimes.com/what-will-bernie-sanders-do-next-supporters-fighting-donald-trump-taking-over-2496254",
			"createdUTC":1487813590,"name":"t3_5vn4ee","author":"chickenpeak",
			"title":"Bernie Sanders Supporters Are Fighting Donald Trump By Taking Over Democratic Party",
			"score":3739
		},
		"t3_5vptsk": {
			"cleanUrl":"https://gfycat.com/CanineDapperAlleycat",
			"createdUTC":1487848092,"name":"t3_5vptsk","author":"ronglangren",
			"title":"Train Cars Lining Up",
			"score":593
		},
		"t3_5vlr3z": {
			"cleanUrl":"https://pbs.twimg.com/media/C5TScOAWMAIesmb.jpg",
			"createdUTC":1487800928,"name":"t3_5vlr3z","author":"youdidntreddit",
			"title":"Good People",
			"score":10908
		},
		"t3_5vpojo": {
			"cleanUrl":"https://i.redd.it/r3g3esfn2lhy.jpg",
			"createdUTC":1487845375,"name":"t3_5vpojo","author":"KinleyMark",
			"title":"The final moments of a Japanese Dive Bomber, 1945. [1595X1774]",
			"score":646
		},
		"t3_5vpudz": {
			"cleanUrl":"https://pbs.twimg.com/media/C5WGtHwWEAAR5Sp.jpg:large",
			"createdUTC":1487848385,"name":"t3_5vpudz","author":"llHybr1dll",
			"title":"Mercedes top down shot",
			"score":537
		},
		"t3_5vm89t": {
			"cleanUrl":"https://i.reddituploads.com/71cc617d1d954757be16338967308127?fit=max&h=1536&w=1536&s=49e2ac54440e0368e79137aece96a66c",
			"createdUTC":1487805491,"name":"t3_5vm89t","author":"strawky",
			"title":"me irl",
			"score":24995
		},
		"t3_5vlo3r": {
			"cleanUrl":"https://i.redd.it/1kodvcz3cdhy.png",
			"createdUTC":1487800092,"name":"t3_5vlo3r","author":"cinemassacress",
			"title":"Hey, thats pretty goooodd",
			"score":11243
		},
		"t3_5vlbyf": {
			"cleanUrl":"https://i.redd.it/0n7g1x7c2hhy.jpg",
			"createdUTC":1487796874,"name":"t3_5vlbyf","author":"jschwartz9502",
			"title":"The First Family",
			"score":13562
		},
		"t3_5voef5": {
			"cleanUrl":"/r/nosleep/comments/5voef5/ive_been_seeing_a_man_in_my_backyard_for_the_past/",
			"createdUTC":1487826124,"name":"t3_5voef5","author":"Opinionson",
			"title":"I've been seeing a man in my backyard for the past two nights - Update 5 Final Update",
			"score":1920
		},
		"t3_5vluls": {
			"cleanUrl":"http://m.imgur.com/HCgeDI6",
			"createdUTC":1487801893,"name":"t3_5vluls","author":"Impatient_Nerd",
			"title":"Attempted Mirror Cake Today",
			"score":6928
		},
		"t3_5vm06j": {
			"cleanUrl":"http://you.regettingold.com/",
			"createdUTC":1487803428,"name":"t3_5vm06j","author":"mhuraizee",
			"title":"This website gives you stats about your life so far",
			"score":8495
		},
		"t3_5vlc80": {
			"cleanUrl":"https://i.redd.it/89t565gv1hhy.jpg",
			"createdUTC":1487796946,"name":"t3_5vlc80","author":"Rentashark",
			"title":"Got lucky and had the place all to myself for a couple of minutes. Grjótagjá, Iceland. [5183x3454] [OC]",
			"score":25760
		},
		"t3_5vmyuq": {
			"cleanUrl":"https://i.redd.it/9o0vek7wbihy.gif",
			"createdUTC":1487812173,"name":"t3_5vmyuq","author":"Skunkhunt43",
			"title":"Google gif about the 7 new earth like planet is awesome",
			"score":71602
		},
		"t3_5vlomm": {
			"cleanUrl":"http://cdn.shopify.com/s/files/1/1427/9954/products/H4-R_1024x1024.jpg?v=1486064096",
			"createdUTC":1487800234,"name":"t3_5vlomm","author":"jessejdena",
			"title":"The Official Hat of Pedophiles Nationwide",
			"score":8098
		},
		"t3_5vpejn": {
			"cleanUrl":"https://youtu.be/5JnIv5bUoH8",
			"createdUTC":1487840293,"name":"t3_5vpejn","author":"Podolskia",
			"title":"Off Duty LAPD officer Discharges Weapon in Front of Kids While Trying to Detain Child",
			"score":718
		},
		"t3_5vm0pt": {
			"cleanUrl":"https://gfycat.com/EmotionalFaithfulHomalocephale",
			"createdUTC":1487803588,"name":"t3_5vm0pt","author":"doozmyy",
			"title":"How to 1v2 with style",
			"score":6108
		},
		"t3_5vpj5l": {
			"cleanUrl":"http://www.independent.co.uk/news/world/americas/supreme-court-cerebral-palsy-a7594266.html",
			"createdUTC":1487842674,"name":"t3_5vpj5l","author":"loremipsumchecksum",
			"title":"Girl with cerebral palsy wins Supreme Court case after her school banned service dog",
			"score":635
		},
		"t3_5vlm4d": {
			"cleanUrl":"https://i.redd.it/ocv0oqhbahhy.jpg",
			"createdUTC":1487799553,"name":"t3_5vlm4d","author":"Badithan1",
			"title":"\"I have a better idea memes\" hitting their peak! Sell now while their value is still high!",
			"score":8792
		},
		"t3_5vn4le": {
			"cleanUrl":"https://i.imgur.com/YPJ7Z5N.jpg",
			"createdUTC":1487813640,"name":"t3_5vn4le","author":"MountainDewFountain",
			"title":"Undercover Cop at a Music Festival Starter",
			"score":2795
		},
		"t3_5vlyrw": {
			"cleanUrl":"/r/Jokes/comments/5vlyrw/give_a_man_a_cheeseburger_you_feed_him_for_a_day/",
			"createdUTC":1487803057,"name":"t3_5vlyrw","author":"JLR0309",
			"title":"Give a man a cheeseburger, you feed him for a day.",
			"score":18278
		},
		"t3_5vpa0h": {
			"cleanUrl":"https://i.imgur.com/4NefkF8.gifv",
			"createdUTC":1487837819,"name":"t3_5vpa0h","author":"Billalm56",
			"title":"I'll just lay here",
			"score":1911
		},
		"t3_5vlcjs": {
			"cleanUrl":"http://www.geekwire.com/2017/amazon-quietly-reduces-free-shipping-minimum-back-35order-non-prime-members/",
			"createdUTC":1487797032,"name":"t3_5vlcjs","author":"RandomIslamophobia",
			"title":"Amazon quietly reduces free shipping minimum back to $35/order",
			"score":9404
		},
		"t3_5vodqx": {
			"cleanUrl":"https://i.reddituploads.com/077fb0afb9e64b989f199bf72bcfbf03?fit=max&h=1536&w=1536&s=3a598bfa5fa3ad0890290e8f380276b4",
			"createdUTC":1487825922,"name":"t3_5vodqx","author":"EpicPundah",
			"title":"Ik, my editing is so bad lol",
			"score":1440
		},
		"t3_5vkvww": {
			"cleanUrl":"http://i.imgur.com/rssDwoS.gif",
			"createdUTC":1487792603,"name":"t3_5vkvww","author":"simsalapim",
			"title":"I made a shitty claw machine",
			"score":21325
		},
		"t3_5vpb86": {
			"cleanUrl":"http://i.imgur.com/aqpjIIm.gifv",
			"createdUTC":1487838475,"name":"t3_5vpb86","author":"MyPenLeaksFire",
			"title":"The perfect half flip",
			"score":699
		},
		"t3_5vpzml": {
			"cleanUrl":"/r/science/comments/5vpzml/science_ama_series_we_are_jimmy_odea_and_josh/",
			"createdUTC":1487850821,"name":"t3_5vpzml","author":"ConcernedScientists",
			"title":"Science AMA Series: We are Jimmy O’Dea and Josh Goldman, here to talk about self-driving cars and what the science says about their potential impacts on our economy and environment. AUA!",
			"score":null},
		"t3_5vm1i8": {
			"cleanUrl":"/r/askscience/comments/5vm1i8/trappist1_exoplanets_megathread/",
			"createdUTC":1487803812,"name":"t3_5vm1i8","author":"AskScienceModerator",
			"title":"Trappist-1 Exoplanets Megathread!",
			"score":5038
		},
		"t3_5vmmfm": {
			"cleanUrl":"http://podcasts.joerogan.net/",
			"createdUTC":1487809088,"name":"t3_5vmmfm","author":"trapsosolo",
			"title":"Joe Rogan will have Dominick Cruz on JRE tomorrow",
			"score":3370
		},
		"t3_5vmldt": {
			"cleanUrl":"https://i.reddituploads.com/e3cb6d3ce9c041bc992b8ea8c49b128d?fit=max&h=1536&w=1536&s=86f33357a2059412542e5ee8ac2999ed",
			"createdUTC":1487808837,"name":"t3_5vmldt","author":"puddingslice714",
			"title":"Pool gatekeeping",
			"score":3458
		},
		"t3_5vmlt3": {
			"cleanUrl":"http://thehill.com/homenews/administration/320744-trump-administration-withdraws-protections-for-transgender-students",
			"createdUTC":1487808940,"name":"t3_5vmlt3","author":"parzo",
			"title":"Trump administration withdraws protections for transgender students",
			"score":24280
		},
		"t3_5vpeff": {
			"cleanUrl":"http://i.imgur.com/sj0lE5V.png",
			"createdUTC":1487840236,"name":"t3_5vpeff","author":"ZombieL",
			"title":"När man får till precis rätt comeback",
			"score":618
		},
		"t3_5vozs6": {
			"cleanUrl":"https://i.redd.it/492qa3ne1khy.jpg",
			"createdUTC":1487832977,"name":"t3_5vozs6","author":"Dont-Drink-And-Post",
			"title":"Fick dich, Heinz-Günter. Fick dich hart. (via FB)",
			"score":900
		},
		"t3_5vmbfp": {
			"cleanUrl":"https://imgur.com/A5SD2JL.jpg",
			"createdUTC":1487806278,"name":"t3_5vmbfp","author":"malgoya",
			"title":"When you're so rich, pushing luxury cars into the ocean becomes a fun game",
			"score":3783
		},
		"t3_5vkoyd": {
			"cleanUrl":"/r/IAmA/comments/5vkoyd/were_nasa_scientists_exoplanet_experts_ask_us/",
			"createdUTC":1487790761,"name":"t3_5vkoyd","author":"NASAJPL",
			"title":"We're NASA scientists &amp; exoplanet experts. Ask us anything about today's announcement of seven Earth-size planets orbiting TRAPPIST-1!",
			"score":57532
		},
		"t3_5vkr7d": {
			"cleanUrl":"https://i.reddituploads.com/d669856821dc40f39050489bb53a2b84?fit=max&h=1536&w=1536&s=3c2e4b625304890c7594225b8ebd0ce2",
			"createdUTC":1487791332,"name":"t3_5vkr7d","author":"AnUnsuspectingVictim",
			"title":"A snuggle scandal",
			"score":33717
		},
		"t3_5vnvky": {
			"cleanUrl":"http://imgur.com/a/YhxUr",
			"createdUTC":1487820903,"name":"t3_5vnvky","author":"Squealio",
			"title":"Healed up pretty good I'd say.",
			"score":1615
		},
		"t3_5vnbcv": {
			"cleanUrl":"https://i.reddituploads.com/8a8ebd6c1ff24c4d895829de7eab0d46?fit=max&h=1536&w=1536&s=d163a37b11ca17d3b26a2cdee2762f76",
			"createdUTC":1487815405,"name":"t3_5vnbcv","author":"Dane-0",
			"title":"My moms last Hospital day was today 🎀",
			"score":18684
		},
		"t3_5vmjyd": {
			"cleanUrl":"https://i.redd.it/336qgasd0ihy.png",
			"createdUTC":1487808513,"name":"t3_5vmjyd","author":"SaintierSet",
			"title":"[No Spoilers]Found this in /r/ImaginaryFeels (xpost /r/ImaginaryFeels)",
			"score":3070
		},
		"t3_5vn6m9": {
			"cleanUrl":"https://i.redd.it/sj1w528thihy.png",
			"createdUTC":1487814169,"name":"t3_5vn6m9","author":"DickEvil",
			"title":"Jim Crow Laws = White Safe Spaces",
			"score":2212
		},
		"t3_5vl0s8": {
			"cleanUrl":"https://i.imgur.com/41LxAgb.jpg",
			"createdUTC":1487793913,"name":"t3_5vl0s8","author":"Tyler1492",
			"title":"2meirl4meirl",
			"score":9420
		},
		"t3_5vngni": {
			"cleanUrl":"https://i.reddituploads.com/329e77f891a84ca6ab9698c66506170d?fit=max&h=1536&w=1536&s=7e0daf69a0e24784383897c05f51894b",
			"createdUTC":1487816811,"name":"t3_5vngni","author":"snowsurfer2017",
			"title":"[ I ] proposed on top of the space needle today",
			"score":1822
		},
		"t3_5vmbmz": {
			"cleanUrl":"http://imgur.com/yZ8jyZL",
			"createdUTC":1487806337,"name":"t3_5vmbmz","author":"Rvckvs",
			"title":"We all know their real names.",
			"score":3270
		},
		"t3_5vnsdy": {
			"cleanUrl":"https://i.redd.it/5tv8m6qiyihy.jpg",
			"createdUTC":1487820017,"name":"t3_5vnsdy","author":"In_the_East",
			"title":"When I was your age, phones asked permission to charge",
			"score":1535
		},
		"t3_5vn080": {
			"cleanUrl":"https://i.reddituploads.com/cb155c06bcdd4032b0507acd70f32e37?fit=max&h=1536&w=1536&s=c870dca69f3582d55fbbb858cdf2e1d0",
			"createdUTC":1487812516,"name":"t3_5vn080","author":"Angry_Apollo",
			"title":"An abandoned subdivision construction in California.",
			"score":2293
		},
		"t3_5vl16m": {
			"cleanUrl":"http://nypost.com/2017/02/22/teen-charged-with-lying-about-being-raped-by-college-football-players",
			"createdUTC":1487794023,"name":"t3_5vl16m","author":"DaytonaDemon",
			"title":"Teen accused college football players of rape. They lost their scholarships and were expelled. Now the \"victim\" admits she made it all up.",
			"score":8249
		},
		"t3_5vptls": {
			"cleanUrl":"https://gfycat.com/HandmadeDirectAnglerfish",
			"createdUTC":1487847993,"name":"t3_5vptls","author":"GallowBoob",
			"title":"Trying to steal her man",
			"score":354
		}
	}
};

const keys = Object.keys(mockData.posts);
for (let key1 of keys)
	mockData.posts[key1].uuid = mockData.posts[key1].name;
rn.collections.PostsFromSubreddit.fetch = jest.fn();
rn.collections.PostsFromSubreddit.fetch.mockImplementation((apiOptions, filter, options) => {
		return new Promise(resolve => {
			let startIndex = options.after ? (keys.indexOf(options.after) + 1) : 0;
			let limit = options.limit || 25;
			let slice = keys.slice(startIndex, startIndex + limit);
			let answer = {posts: {}};
			for (let key1 of slice)
				answer.posts[key1] = mockData.posts[key1];
			resolve({apiResponse: answer});
		});
	});

module.exports = rn;