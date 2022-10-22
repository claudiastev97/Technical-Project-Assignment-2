const movies = [
    {
      id: 985939,
      adult: false,
      title: 'Dr. Strange',
      original_title: 'Dr. Sttrange',
      poster_path: 'https://th.bing.com/th/id/OIP.B103tVvW4xaoeIJMvBToYgHaK9?pid=ImgDet&w=811&h=1200&rs=1',
      popularity: 6059.21,
      vote_average: 7.4,
      overview:
        'For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights',
      release_date: '2022-08-11',
    },
    {
      id: 532639,
      adult: false,
      title: 'Cinderella',
      original_title: 'Cinderella',
      poster_path: 'https://th.bing.com/th/id/OIP.CfGKKYE6HbwipiI6KCMtawHaKe?pid=ImgDet&rs=1',
      popularity: 4374.186,
      vote_average: 6.8,
      overview: 'A wooden puppet embarks on a thrilling adventure to become a real boy.',
      release_date: '2022-09-07',
    },
    {
      id: 760741,
      adult: false,
      title: 'Moana',
      original_title: 'Moana',
      poster_path: 'https://4.bp.blogspot.com/-nH4QCe2o4Nc/WFgXpLGZa0I/AAAAAAAAAVI/yQOdRD5mtJU6H10NUKTmC2yUdlgOHUHhgCLcB/s1600/2c06ab2066d490503a84db1882d1ff08.jpg',
      popularity: 3966.681,
      vote_average: 7.1,
      overview: 'A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.',
      release_date: '2022-08-11',
    },
    {
      id: 760161,
      adult: false,
      title: 'Toy Story',
      original_title: 'Toy Story',
      poster_path: 'https://th.bing.com/th/id/OIP.nzFMyB5_JdtzDPlIHA0OpQHaLD?pid=ImgDet&rs=1',
      popularity: 3204.398,
      vote_average: 7.1,
      overview:
        'After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.',
      release_date: '2022-07-27',
    },
    {
      id: 629176,
      adult: false,
      title: 'Nemo 3',
      original_title: 'Nemo 3',
      poster_path: 'https://vignette.wikia.nocookie.net/pixar/images/6/66/Finding-Nemo-3D-poster.jpg/revision/latest?cb=20120608233453',
      popularity: 2933.265,
      vote_average: 7,
      overview:
        'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
      release_date: '2022-08-25',
    },
    {
      id: 579974,
      adult: false,
      title: 'Ratatouille ',
      original_title: 'Ratatouille',
      poster_path: 'https://th.bing.com/th/id/R.b7c2faa89a79d070e07ae2f9344832a3?rik=WXdqgfZM2Q7xGw&riu=http%3a%2f%2fwww.zoom-cinema.fr%2fmedia%2fphotos%2f2693%2fratatouille-17.jpg&ehk=R3mB2QoSc1eLQH1I6ny7dsUZpcZwTH4J8UD2MsT4XxE%3d&risl=&pid=ImgRaw&r=0',
      popularity: 2592.005,
      vote_average: 7.8,
      overview: "A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
      release_date: '2022-03-24',
    },
    {
      id: 810693,
      adult: false,
      title: 'Aladdin',
      original_title: 'Aladdin',
      poster_path: 'https://th.bing.com/th/id/OIP.J1ho42v6_qkXLrPm1ZDJ4gHaK-?pid=ImgDet&rs=1',
      popularity: 2383.269,
      vote_average: 8,
      overview:
        "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
      release_date: '2021-12-24',
    },
    {
      id: 616037,
      adult: false,
      title: 'The Incredibles',
      original_title: 'The Incredibles',
      poster_path: 'https://images-na.ssl-images-amazon.com/images/I/716RrNAAMQL._SL1500_.jpg', 
      popularity: 2309.939,
      vote_average: 6.8,
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      release_date: '2022-07-06',
    },
    {
      id: 610150,
      adult: false,
      title: 'Frozen II',
      original_title: 'Frozen II',
      poster_path: 'https://th.bing.com/th/id/OIP.1g0R82-TshpS7b3Xcp0iOQHaIn?pid=ImgDet&rs=1',
      popularity: 2272.782,
      vote_average: 8,
      overview:
        'The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.',
      release_date: '2022-06-11',
    },
    {
      id: 960700,
      adult: false,
      title: 'Frozen',
      original_title: 'Frozen',
      poster_path: 'https://i.pinimg.com/originals/a7/da/24/a7da2422dce82cb1738f93a1b3c5ba21.jpg',
      popularity: 1944.941,
      vote_average: 6.9,
      overview: 'In this sequel to the 2017 live-action netflix Adaptation of the manga the Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.',
      release_date: '2022-05-20',
    },
    {
      id: 766507,
      adult: false,
      title: 'Mulan',
      original_title: 'Mulan',
      poster_path: 'https://th.bing.com/th/id/OIP.ZI0H7nl7gqzq6dWjyLlhUwHaK-?pid=ImgDet&rs=1',
      popularity: 1850.89,
      vote_average: 7.9,
      overview:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
      release_date: '2022-08-02',
    },
    {
      id: 921360,
      adult: false,
      title: 'Avengers',
      original_title: 'Avengers',
      poster_path: 'https://th.bing.com/th/id/OIP.xuapYeCFQO7EECVET2xcfgHaKf?pid=ImgDet&rs=1',
      popularity: 1741.76,
      vote_average: 6.9,
      overview:
        'New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.',
      release_date: '2022-09-02',
    },
    {
      id: 781099,
      adult: false,
      title: 'Raya and The Last Dragon',
      original_title: 'Raya and The Last Dragon',
      poster_path: 'https://s3.ap-southeast-1.amazonaws.com/kincirimage/production/2021-01/original_700/740x1058_e13c5f4f5b19171f943c60a82fd4b10ebc5bb788.jpeg',
      popularity: 1680.515,
      vote_average: 5.6,
      overview: 'Desperately seeking inspiration for the follow-up novel to his bestseller "Inexorable", Marcel Bellmer moves in his wife\'s old family mansion with his family.',
      release_date: '2022-04-06',
    },
    {
      id: 361743,
      adult: false,
      title: 'Snow White and The Seven Dwarfs',
      original_title: 'Snow White and The Seven Dwarfs',
      poster_path: 'https://images-na.ssl-images-amazon.com/images/I/81jp9cBKtsL._AC_SL1500_.jpg',
      popularity: 1645.58,
      vote_average: 8.4,
      overview:
        'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
      release_date: '2022-05-24',
    },
    {
      id: 507086,
      adult: false,
      title: 'The Romance of Tiger and Rose',
      original_title: 'The Romance of Tiger and Rose',
      poster_path: 'https://dramaslot.com/wp-content/uploads/2020/07/Romance-Of-Tiger-And-Rose-Poster.jpeg',
      popularity: 1634.454,
      vote_average: 7.1,
      overview:
        'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
      release_date: '2022-06-01',
    },
    {
      id: 773867,
      adult: false,
      title: 'Put Your Head on My Shoulder', 
      original_title: '致我們暖暖的小時光',
      poster_path: 'https://th.bing.com/th/id/OIP.xTX-71FpzfLFgFly2G0XewHaLH?pid=ImgDet&rs=1',
      popularity: 1597.596,
      vote_average: 6.9,
      overview: 'Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.',
      release_date: '2022-08-26',
    },
    {
      id: 539681,
      adult: false,
      title: 'The World of The Married',
      original_title: 'The World of The Married',
      poster_path: 'https://i.pinimg.com/originals/02/ff/3e/02ff3e1625b179e8a749b0684fded816.jpg',
      popularity: 1575.235,
      vote_average: 7.5,
      overview:
        'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
      release_date: '2022-07-27',
    },
    {
      id: 773975,
      adult: false,
      title: 'Thor : Love and Thunder',
      original_title: 'Thor : Love and Thunder',
      poster_path: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      popularity: 1573.562,
      vote_average: 6.5,
      overview: 'Recently widowed mom Brenda fights to protect her family during a harrowing road trip when a murder and a missing bag of cash plunge them into danger.',
      release_date: '2022-09-09',
    },
    {
      id: 438148,
      adult: false,
      title: 'Legend Of The Blue Sea',
      original_title: '푸른바다의전설',
      poster_path: 'https://th.bing.com/th/id/OIP.h6c-5RpHRGMrhN9EHz8brQHaKl?pid=ImgDet&rs=1',
      vote_average: 7.6,
      overview: 'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
      release_date: '2022-06-29',
    },
    {
      id: 838197,
      adult: false,
      title: "My ID is Gangnam Beauty",
      original_title: 'My ID is Gangnam Beauty',
      poster_path: 'https://a.ltrbxd.com/resized/film-poster/7/3/4/0/8/2/734082-my-id-is-gangnam-beauty-0-460-0-690-crop.jpg?k=c4b9176bde',
      popularity: 1429.022,
      vote_average: 5.1,
      overview:
        "Carezza and Sorriso, brothers very different from each other and in quarrel since childhood, will have to put aside their controversies to recover the legendary Dune Buggy, once belonged to their beloved father and now stolen from him by Torsillo, an unscrupulous building speculator, and his son Raniero. In doing so, they will forge an unusual alliance with a circus community, headed by the beautiful and dangerous Miriam and threatened by Torsillo's dirty business. Between daring chases, memorable fights and delicate meals based on beer and sausages, will the two brothers be able to find their beloved car?",
      release_date: '2022-03-23',
    },
    {
      id: 19995,
      adult: false,
      title: 'Stranger',
      original_title: '비밀의 숲',
      poster_path: 'https://data.ibtimes.sg/en/full/17781/poster-for-stranger.jpg?w=660',
      popularity: 1270.395,
      vote_average: 7.5,
      overview: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      release_date: '2009-12-10',
    },
    {
      id: 927341,
      adult: false,
      title: 'Big Mouth',
      original_title: 'Big Mouth',
      poster_path: 'https://th.bing.com/th/id/OIP.bcnhYSPfgnnbKhG_oQ0MHQHaKm?pid=ImgDet&rs=1',
      popularity: 1263.428,
      vote_average: 6.5,
      overview: 'Billionaire sportsman Buddy King unwinds by hunting human captives on his remote mountain estate. But his latest victim, Ava Bravo is no easy target.',
      release_date: '2022-04-01',
    },
    {
      id: 1015602,
      adult: false,
      title: '18 Again',
      original_title: '18 어게인',
      poster_path: 'https://i.mydramalist.com/xnNnq_4f.jpg',
      popularity: 1221.345,
      vote_average: 6.7,
      overview: 'Heart set on becoming a princess, Lisa Simpson is surprised to learn being bad might be more fun.',
      release_date: '2022-09-08',
    },
    {
      id: 936897,
      adult: false,
      title: 'Tangled',
      original_title: 'Tangled',
      poster_path: 'https://th.bing.com/th/id/OIP.KPGOJyQnOKHPspPDncgtugHaKj?pid=ImgDet&rs=1',
      popularity: 1110.351,
      vote_average: 5.9,
      overview:
        'Goldy is a spirited single mom who’s thrust into the role of town sleuth to help solve a friend’s mysterious death. With the clock ticking to find the culprit, Goldy strikes up an unlikely partnership with Detective Tom Schultz, who leans into Goldy’s local knowledge. As their relationship shows signs of becoming something more, the suspect list rises. Will Goldy narrow in on the killer before the killer narrows in on her?',
      release_date: '2022-04-10',
    },
    {
      id: 997120,
      adult: false,
      title: 'Break The Silence : The Movie',
      original_title: 'Break The Silence : The Movie',
      poster_path: 'https://1.bp.blogspot.com/-4Hw2VGubVLE/XzEnfMlkiBI/AAAAAAABBik/gd9ANQjPhzsLmFqLSD8UEEX7OUX6u7OxgCLcBGAsYHQ/s2048/Sinopsis%2BFilm%2BKonser%2BBTS%2BBreak%2BThe%2BSilence%2BThe%2BMovie%2B%25282020%2529.jpeg',
      popularity: 1101.603,
      vote_average: 6.9,
      overview:
        'When a crooked federal agent is involved in a human sex trafficking ring, Sniper and CIA Rookie Brandon Beckett goes rogue, teaming up with his former allies Homeland Security Agent Zero and assassin Lady Death to uncover the corrupt agent and take down the criminal organization.',
      release_date: '2022-08-15',
    },
    {
      id: 952374,
      adult: false,
      title: 'Minions : ilumination',
      original_title: 'Minions : ilumination',
      poster_path: 'https://2.bp.blogspot.com/-jcY4tFKGf3c/VZO0Iy-Lw8I/AAAAAAAAA3g/Kx_bhqlGFQM/s640/minions-movie-poster.jpg',
      popularity: 1066.172,
      vote_average: 5.5,
      overview:
        'A twisted journey of two women’s desperate flee to escape the clutches of Skylight, an insidious cult. Lured in by the promise of “freedom” in the isolated desert campus called The Aviary, Jillian and Blair join forces to escape in hopes of real freedom. Consumed by fear and paranoia, they can’t shake the feeling that they are being followed by the cult’s leader, Seth, a man as seductive as he is controlling. The more distance the pair gains from the cult, the more Seth holds control of their minds. With supplies dwindling and their senses failing, Jillian and Blair are faced with a horrifying question: how do you run from an enemy who lives inside your head?',
      release_date: '2022-04-29',
    },
    {
      id: 756999,
      adult: false,
      title: 'Spider-Man : Far From Home',
      original_title: 'Spider-Man : Far From Home',
      poster_path: 'https://1.bp.blogspot.com/-4fTHGty4i3k/XRy-N1K9PwI/AAAAAAAAWeg/K8YWFz_JWGoTJknCfShTfor9RCxYFDxtQCLcBGAs/s1600/Spider-Man%2BFar%2BFrom%2BHome.jpg',
      popularity: 1055.311,
      vote_average: 7.9,
      overview:
        'Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.',
      release_date: '2022-06-22',
    },
    {
      id: 634649,
      adult: false,
      title: 'Spider-Man : No Way Home',
      original_title: 'Spider-Man : No Way Home',
      poster_path: 'https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
      popularity: 998.765,
      vote_average: 8,
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      release_date: '2021-12-15',
    },
    {
      id: 585511,
      adult: false,
      title: 'KKN di desa Penari',
      original_title: 'KKN di desa Penari',
      poster_path: 'https://img.reelgood.com/content/movie/d1c1cd7b-76b7-49bd-97c3-84af39b3303e/poster-780.jpg',
      popularity: 992.94,
      vote_average: 8,
      overview: 'Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.',
      release_date: '2022-08-05',
    },
    {
      id: 755566,
      adult: false,
      title: 'Maleficent',
      original_title: 'Maleficent',
      poster_path: 'https://th.bing.com/th/id/OIP.pYASJfsBHuHZ4OdWBXlIbAHaK-?pid=ImgDet&rs=1',
      popularity: 990.538,
      vote_average: 6.9,
      overview: "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
      release_date: '2022-08-10',
    },
    {
      id: 453395,
      adult: false,
      title: 'Brave',
      original_title: 'Brave',
      poster_path: 'https://th.bing.com/th/id/R.d5565e34d214f0f075446eb5e484843e?rik=UBU%2b53PgzR8%2fHA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-s4XJiU8lzpc%2fUSd1rZo1T-I%2fAAAAAAAAHc0%2fzrq1rv0bAA4%2fs1600%2fbrave-poster.jpg&ehk=k9T%2b6MhHkj%2b7o3V7qungjQDxrpDu86Vyn%2fw%2bA%2b9eRzw%3d&risl=&pid=ImgRaw&r=0',
      popularity: 974.998,
      vote_average: 7.5,
      overview: 'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
      release_date: '2022-05-04',
    },
    {
      id: 762968,
      adult: false,
      title: 'The Walking Dead',
      original_title: 'The Walking Dead',
      poster_path: 'https://th.bing.com/th/id/OIP.orZ6g5dfmjLXfOv8pwf9kgHaLH?pid=ImgDet&rs=1',
      popularity: 937.385,
      vote_average: 7.1,
      overview: 'A dethroned queen bee at a posh private high school strikes a secret deal with an unassuming new student to enact revenge on one another’s enemies.',
      release_date: '2022-09-14',
    },
    {
      id: 848123,
      adult: false,
      title: 'Train to Busan',
      original_title: 'Train to Busan',
      poster_path: 'https://static.filmin.es/images/media/17852/1/poster_0_3_900x0.jpg',
      popularity: 933.824,
      vote_average: 7.2,
      overview:
        'A group of officers based in a labyrinthine top-secret prison must fight for their lives against Hatchet, a brilliant and infamous high-value detainee. When he escapes, his mysterious and deadly agenda has far reaching and dire consequences.',
      release_date: '2022-05-05',
    },
    {
      id: 762504,
      adult: false,
      title: 'Jailangkung',
      original_title: 'Jailangkung',
      poster_path: 'https://movizland.online/wp-content/uploads/poster-jailangkung.jpg',
      popularity: 925.645,
      vote_average: 7,
      overview: 'Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.',
      release_date: '2022-07-20',
    },
    {
      id: 675353,
      adult: false,
      title: 'Sabrina',
      original_title: 'Sabrina',
      poster_path: 'https://3.bp.blogspot.com/-iGT06_vXjL0/WwqyDOqkF6I/AAAAAAAAOq8/Vx_d5zA3P4EuAw1s7AHXkO9kGdhEYE2cACLcBGAs/s1600/SABRINA-POSTER.jpg',
      popularity: 902.493,
      vote_average: 7.7,
      overview:
        'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
      release_date: '2022-03-30',
    },
    {
      id: 772450,
      adult: false,
      title: 'The Dool 3',
      original_title: 'The Dool 3',
      poster_path: 'https://hitmakerstudios.com/wp-content/uploads/2020/03/Doll3_Teaser-Poster_for-WEb.jpg',
      popularity: 856.071,
      vote_average: 6.8,
      overview: 'A man who loses his wife and goes to seclude himself in a cabin in the woods, where strange things happen.',
      release_date: '2022-09-07',
    },
    {
      id: 924482,
      adult: false,
      title: 'Secret of The Wings',
      original_title: 'Secret of The Wings',
      poster_path: 'https://m.media-amazon.com/images/M/MV5BOTc1OWM4MzEtMTlmMC00NjdiLTkwZTUtYmYwMmY1YjNhNTg1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UY1200_CR105,0,630,1200_AL_.jpg',
      popularity: 840.766,
      vote_average: 6.3,
      overview:
        'A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.',
      release_date: '2022-02-18',
    },
    {
      id: 76600,
      adult: false,
      title: 'Tinkerbell : Great Fairy Rescue',
      original_title: 'Tinkerbell and the Great Fairy Rescue',
      poster_path: 'https://th.bing.com/th/id/OIP.yZpSv-5Z-kzRotvuYOF9RwHaLH?pid=ImgDet&rs=1',
      popularity: 815.874,
      vote_average: 0,
      overview:
        'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      release_date: '2022-12-14',
    },
    {
      id: 1006851,
      adult: false,
      title: 'Barbie Princess Charm School',
      original_title: 'Barbie Princess Charm School',
      poster_path: 'https://vignette.wikia.nocookie.net/barbie-movies/images/b/b2/Barbie_Princess_Charm_School_Digital_Copy.png/revision/latest?cb=20130425174555',
      popularity: 794.949,
      vote_average: 5.7,
      overview: 'Three friends come together to defend their valuable mining company from…aliens?! What could possibly go wrong?',
      release_date: '2022-08-10',
    },
    {
      id: 911129,
      adult: false,
      title: 'Barbie as Rapunzel',
      original_title: 'Barbie as Rapunzel',
      poster_path: 'https://www.mobygames.com/images/covers/l/210534-barbie-as-rapunzel-a-creative-adventure-macintosh-front-cover.png',
      popularity: 794.252,
      vote_average: 6.4,
      overview: "Roxana Aubrey decides to drop her studies and escape her life in Paris for a free diving course in the south of France. She is quickly pulled into a life that reaches new depths brought by the weight of an ocean's descent.",
      release_date: '2022-09-09',
    },
    {
      id: 576925,
      adult: false,
      title: 'Finding Nemo',
      original_title: 'Finding Nemo',
      poster_path: 'https://image.tmdb.org/t/p/w1280/wp2jsfdVlhKdlXCroJ7IesZmWEY.jpg',
      popularity: 762.997,
      vote_average: 6,
      overview:
        "A scandal in the royal family: the wayward princess Barbara escaped from the palace and went through the forest in search of a handsome prince. However, instead of the cherished meeting with her beloved, she is captured by Buka, the most dangerous robber of the kingdom. But it quickly becomes clear that the brisk princess is ready to turn Buka's life into a nightmare, just to reach her goal. So the restless Varvara begins to establish her own order in the forest.",
      release_date: '2022-01-27',
    },
    {
      id: 1010818,
      adult: false,
      title: "Dory",
      original_title: "Dory",
      poster_path: 'https://www.regarder-films.net/wp-content/uploads/2017/11/le-monde-de-dory.jpg',
      popularity: 723.129,
      vote_average: 7.4,
      overview: 'Following the events of “Guardians of the Galaxy Vol. 1,” Baby Groot is finally ready to try taking his first steps out of his pot—only to learn you have to walk before you can run.',
      release_date: '2022-08-10',
    },
    {
      id: 769636,
      adult: false,
      title: 'One Piece',
      original_title: 'One Piece',
      poster_path: 'https://th.bing.com/th/id/OIP.a6HekuQgqgkXfcgDc3aCngHaKg?pid=ImgDet&rs=1',
      popularity: 702.245,
      vote_average: 5.9,
      overview: 'Follows Juan, an agent working for the intelligence services, who also reports to a parallel unit involved in illegal activities.',
      release_date: '2022-03-18',
    },
    {
      id: 718789,
      adult: false,
      title: 'Cruella',
      original_title: 'Cruella',
      poster_path: 'https://movieposters.ie/wp-content/uploads/2021/05/Cruella_Payoff_Digital-KeyArt_Lg_v7-1037x1536.jpg',
      popularity: 700.226,
      vote_average: 7.2,
      overview: 'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
      release_date: '2022-06-15',
    },
    {
      id: 1012801,
      adult: false,
      title: 'Coco',
      original_title: 'Coco',
      poster_path: 'https://i.pinimg.com/736x/52/40/93/52409341203bb9276ec911ebbda4f91d.jpg',
      popularity: 692.549,
      vote_average: 7.5,
      overview:
        'Join Barbie “Brooklyn” Roberts, Barbie “Malibu” Roberts, and her sisters Skipper, Stacie, and Chelsea on an underwater adventure as they transform into mermaids to help save the world of Pacifica! In Barbie Mermaid Power™, Barbie and Barbie are summoned by Isla (from Dolphin Magic) to compete to be the underwater Power Keeper in a series of challenges designed to find their inner powers. Through these competitions, they discover whether they are mermaids of Earth, Air, Water, or Fire, all while making new animal and mermaid friends. In this fish-tale of friendship, adventure, and bravery, Barbie, Barbie, and family experience first-hand what it’s like to balance the worlds above and below the sea and learn a lesson in finding their inner powers along the way.',
      release_date: '2022-07-17',
    },
    {
      id: 829560,
      adult: false,
      title: 'Zootopia',
      original_title: 'Zootopia',
      poster_path: 'https://2.bp.blogspot.com/-o0-3u5pr-uI/Vwsvp7Rh4NI/AAAAAAAAACU/dkMhTP00v-o5zaUaNyux46aKwX8eRqs1g/s1600/Zootopia%2BFull%2BMovie.jpg',
      popularity: 676.5,
      vote_average: 6.7,
      overview: "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
      release_date: '2022-08-19',
    },
    {
      id: 919355,
      adult: false,
      title: 'Hwarang',
      original_title: '화랑',
      poster_path: 'https://i.pinimg.com/originals/85/ab/b2/85abb2d2bed681d11bc35a0ef20a6399.jpg',
      popularity: 669.07,
      vote_average: 6.9,
      overview:
        "Many years after the war has been lost, and all the dragons slain, a lone knight travels the lands of Agonos seeking to raise an army against the demon lord Abaddon. When a healer's vision reveals that one dragon still lives, and together with an eager young squire, the knight sets off in search of the fabled creature. As the armies of Abaddon descend on the human kingdoms, the dragon is their last hope of fending off the horde, before it lays waste to the lands of men. But does the creature even exist? And if it does, will it fight for them once more?",
      release_date: '2022-03-21',
    },
    {
      id: 1010821,
      adult: false,
      title: 'Hotel De Luna',
      original_title: '호텔 델루나',
      poster_path: 'https://i.pinimg.com/736x/c1/56/23/c156239ec7d3b0cac10f7b7bab8c5a33.jpg',
      popularity: 654.62,
      vote_average: 7,
      overview: 'Everybody needs some alone time to relax and wash up, but things go quite differently when you’re a Flora Colossi toddler.',
      release_date: '2022-08-10',
    },
    {
      id: 414906,
      adult: false,
      title: 'Strong Woman DoBongSoon',
      original_title: 'Strong Woman Do-Bong-Soon',
      poster_path: 'https://3.bp.blogspot.com/-aVVy5Wmm5IA/WsVK0xHY7NI/AAAAAAAAEKk/4qTHEdhFG3sjJB0h87B8vV18eMYzPrTIACLcBGAs/s1600/poster-780.jpg',
      popularity: 647.157,
      vote_average: 7.7,
      overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
      release_date: '2022-03-01',
    },
    {
      id: 81774,
      adult: false,
      title: 'Whats Wrong with Secretary Kim',
      original_title: "Whats Wrong with Sekretaris Kim",
      poster_path: 'https://th.bing.com/th/id/OIP.tz9XDOaBiaUtz7g-l0s4HwHaLH?pid=ImgDet&rs=1',
      popularity: 642.606,
      vote_average: 5.5,
      overview:
        'Roger is a 16-year-old who seeks to lose his virginity in this erotic drama. His initial efforts are unsuccessful, but World War I breaks out and men are seen marching off to battle. Roger goes overboard when he is presented with several amorous opportunities.',
      release_date: '1986-11-04',
    },
  ];
  
  function searchMovies(title = '', keyword = '') {
    const movieTitle = String(title).toUpperCase().trim();
    const searchValue = String(keyword).toUpperCase().trim();
    return movieTitle.includes(searchValue);
  }
  
  console.log(searchMovies('', '     Upin    '));
  console.log(searchMovies('Insidious', '    IDI   '));
  
  function getMovies(keyword = '') {
    const filterMovies = [];
    for (let i = 0; i < movies.length; i++) {
      if (searchMovies(movies[i].title, keyword)) {
        filterMovies.push(movies[i]);
      }
    }
    return filterMovies;
  }
  
  console.log(getMovies('la'));
  
  function showMovies(keyword = '') {
    const moviesList = getMovies(keyword);
    document.getElementById('list-movies').innerHTML = '';
    for (let i = 0; i < moviesList.length; i++) {
      document.getElementById('list-movies').innerHTML += `
          <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-center p-4 pt-3 pb-4">
            <div class="card" style="width: 100%; max-width: 15rem;">
              <img src="${moviesList[i].poster_path}"
                alt="..." style="width: 100%; height: 100%;">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <p class="card-text">${moviesList[i].title}</p>
                  </div>
                  <div class="col-3 text-end">
                    <p class="card-text"><b>${moviesList[i].vote_average}</b></p>
                  </div>
                </div>
                <br />
                <p class="card-text">${moviesList[i].release_date}</p>
              </div>
            </div>
          </div>
          `;
    }
  }
  
  showMovies('');