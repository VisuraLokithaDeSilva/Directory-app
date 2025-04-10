const data = [
    { 
        name: "HON. (Dr.) Jagath Wickramaratne", 
        title: "Speaker", 
        mobile: "0762727123", 
        telephoneSitting: "0762727123", 
        telephoneNonSitting: "0272056964", 
        addressSitting: "464/20, Pannipitiya Road, Palawatta, Battaramulla", 
        addressNonSitting: "2-A, Newtown Road, 2nd Cannal, Polonnaruwa", 
        fax: "", 
        email: "jagathw@parliament.lk", 
        image: "https://i.ibb.co/8DpBv7Sg/Jagath-Wicramaratne.png"
    },
    { 
        name: "HON. (Dr.) Rizvie Salih", 
        title: "Deputy Speaker and the Chair of Committees", 
        mobile: "0777759541", 
        telephoneSitting: "0777759541", 
        telephoneNonSitting: "0777759541", 
        addressSitting: "106C, Barnes Place, Colombo 07.", 
        addressNonSitting: "106C,Barnes Place, Colombo 07.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3467.jpg" 
    },
    { 
        name: "HON. (Mrs.) Hemali Weerasekara", 
        title: "Deputy Chairperson of Committees", 
        mobile: "0775716715", 
        telephoneSitting: "0775716715", 
        telephoneNonSitting: "0775716715", 
        addressSitting: "", 
        addressNonSitting: "No 27/2/B,Seda Mawatha, Eldeniya, Kadawatha.", 
        fax: "", 
        email: " hemaliw@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3483.jpg" 
    },
    { 
        name: "HON. (Dr.)(Ms.) Harini Amarasuriya", 
        title: "Prime Minister and Minister of Education, Higher Education and Vocational Education", 
        mobile: "0777880737", 
        telephoneSitting: "", 
        telephoneNonSitting: "", 
        addressSitting: "No. 464/20, Pannipitiya Road, Pelawatte, Battaramulla.", 
        addressNonSitting: "No. 33B, Janatha Mawatha, Mirihana, Kotte.", 
        fax: "", 
        email: "harini_a@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3449.jpg" 
    },
    { 
        name: "HON. Bimal Rathnayake", 
        title: "Minister of Transport, Highways, Ports and Civil Aviation and Leader of the House of Parliament", 
        mobile: "0773111226", 
        telephoneSitting: "0773111226", 
        telephoneNonSitting: "0112785612", 
        addressSitting: "No. 464/20, Pannipitiya Road, Pelawatta, Battaramulla.", 
        addressNonSitting: "No. 1, Second Lane, Jambugasmulla Mawatha, Nugegoda.", 
        fax: "", 
        email: " bimal_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/161.jpg" 
    },
    { 
        name: "HON. (Dr.) Nalinda Jayathissa", 
        title: "Minister of Health and Mass Media and Chief Government Whip", 
        mobile: "0718100605", 
        telephoneSitting: "0112785612", 
        telephoneNonSitting: "0718100605", 
        addressSitting: "No.157/1/2, Delgahawatta,Balika Niwasa Road, Rukmale,Pannipitiya.", 
        addressNonSitting: "No.157/1/2, Delgahawatta, Balika Niwasa Road, Rukmale, Pannipitiya.", 
        fax: "0112786050", 
        email: "nalinda_j@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3227.jpg" 
    },
    { 
        name: "HON. Vijitha Herath", 
        title: "Minister of Foreign Affairs, Foreign Employment and Tourism", 
        mobile: "0714824345", 
        telephoneSitting: " 0332235406", 
        telephoneNonSitting: "0112785612", 
        addressSitting: "No.154,Yakkala Road,Gampaha.", 
        addressNonSitting: "No.464/20, Pannipitiya Road,Pelawaththa,Battaramulla.", 
        fax: "0332294904", 
        email: "herath_v@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/205.jpg" 
    },
    { 
        name: " HON. K.D. Lal Kantha", 
        title: "Minister of Agriculture, Livestock, Land and Irrigation", 
        mobile: "0712473104", 
        telephoneSitting: "0712473104", 
        telephoneNonSitting: "0712473104", 
        addressSitting: "Janitha Vimukthi Peramuna Head Office, 464/20, Pannipitiya Road, Battaramulla.", 
        addressNonSitting: "Janitha Vimukthi Peramuna Head Office, 464/20, Pannipitiya Road, Battaramulla.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/304.jpg" 
    },
    { 
        name: "HON. Sunil Handunnetti", 
        title: "Minister of Industry and Entrepreneurship Development", 
        mobile: "0773908760", 
        telephoneSitting: "2746718", 
        telephoneNonSitting: "0112896394", 
        addressSitting: "No. 04, Yahiya Road, Issadeen Town, Matara.", 
        addressNonSitting: "No. 04, Yahiya Road, Issadeen Town, Matara.", 
        fax: "0112580429", 
        email: "handunnetti_s@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/201.jpg" 
    },
    { 
        name: "HON. K.V. Samantha Viddyarathna", 
        title: "Minister of Plantation and Community Infrastructure", 
        mobile: "0714479589", 
        telephoneSitting: "0714479589", 
        telephoneNonSitting: "0714479589", 
        addressSitting: "District Co-ordinating Office,No. 96 A, Mahiyangana Road, Badulla.", 
        addressNonSitting: "District Co-ordinating Office,No. 96 A, Mahiyangana Road, Badulla.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1477.jpg" 
    },
    { 
        name: "HON. Ramalingam Chandrasekar", 
        title: "Minister of Fisheries, Aquatic and Ocean Resources", 
        mobile: "0777795958", 
        telephoneSitting: "0212248515", 
        telephoneNonSitting: "0212248515", 
        addressSitting: "42/6, Dharmapala Mw., Madiwela, Kotte.", 
        addressNonSitting: "42/6, Dharmapala Mw., Madiwela, Kotte.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/275.jpg" 
    },
    { 
        name: "HON. Wasantha Samarasinghe", 
        title: "Minister of Trade, Commerce, Food Security and Cooperative Development", 
        mobile: " 0773029004", 
        telephoneSitting: "0112785612", 
        telephoneNonSitting: "0112080312", 
        addressSitting: "No. 10, Council Lane, Mount Lavinia, Colombo 05.", 
        addressNonSitting: "No. 10, Council Lane, Mount Lavinia, Colombo 05.", 
        fax: "", 
        email: "wasanthas@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1495.jpg" 
    },
    { 
        name: "HON. (Prof.) A.H.M.H. Abayarathna", 
        title: "Minister of Public Administration, Provincial Councils and Local Government", 
        mobile: "0718716387", 
        telephoneSitting: "0112969688", 
        telephoneNonSitting: "0112969688", 
        addressSitting: "65/22, Sri Sheelawansha Mw., Suriyapaluwa, Kadawatha.", 
        addressNonSitting: "65/22, Sri Sheelawansha Mw., Suriyapaluwa, Kadawatha.", 
        fax: "", 
        email: "abayarathnah@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3560.jpg" 
    },
    { 
        name: "HON. (Prof.) Chrishantha Abeysena", 
        title: "Minister of Science and Technology", 
        mobile: "0777591715", 
        telephoneSitting: "0112953411", 
        telephoneNonSitting: "0710822848", 
        addressSitting: " 375, Negombo Road, Welisara, Ragama.", 
        addressNonSitting: " 375, Negombo Road, Welisara, Ragama.", 
        fax: "", 
        email: "chrishanthaa@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3474.jpg" 
    },
    { 
        name: "HON. Anura Karunathilaka", 
        title: "Minister of Urban Development, Construction and Housing", 
        mobile: "0714458399", 
        telephoneSitting: "0714458399", 
        telephoneNonSitting: "0714458399", 
        addressSitting: "327/2/D, Wijayaba Place, Gajaba Road, Makola North, Makola.", 
        addressNonSitting: "327/2/D, Wijayaba Place, Gajaba Road, Makola North, Makola.", 
        fax: "", 
        email: "anurak@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3604.jpg" 
    },
    { 
        name: "HON. Sunil Kumara Gamage", 
        title: "Minister of Youth Affairs and Sports", 
        mobile: "0777174146", 
        telephoneSitting: "0777174146", 
        telephoneNonSitting: "0777174146", 
        addressSitting: "No. 49/2, Kottawa, Pannipitiya.", 
        addressNonSitting: "No. 49/2, Kottawa, Pannipitiya.", 
        fax: "", 
        email: "sunilkumara@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3615.jpg" 
    },
    { 
        name: "HON. Kumara Jayakody", 
        title: "Minister of Energy", 
        mobile: "0718449424", 
        telephoneSitting: "0718449424", 
        telephoneNonSitting: "0718449424", 
        addressSitting: "136/2F Mahawela Road, Pahala Biyanwila, Kadawatha.", 
        addressNonSitting: "136/2F Mahawela Road, Pahala Biyanwila, Kadawatha.", 
        fax: "", 
        email: "kumaraj@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3611.jpg" 
    },
    { 
        name: "HON. (Prof.) Anil Jayantha", 
        title: "Minister of Labour and Deputy Minister of Economic Development", 
        mobile: "0714463944", 
        telephoneSitting: "0714463944", 
        telephoneNonSitting: "0714463944", 
        addressSitting: "698/4, Kapuwatta Station Road Kapuwatta Jaela", 
        addressNonSitting: "698/4, Kapuwatta Station Road Kapuwatta Jaela", 
        fax: "", 
        email: "anilj@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3472.jpg" 
    },
    { 
        name: "HON. Harshana Nanayakkara, Attorney at Law", 
        title: "Minister of Justice and National Integration", 
        mobile: "0773572736", 
        telephoneSitting: "0773572736", 
        telephoneNonSitting: "0773572736", 
        addressSitting: "No. 140/31 L, Kalapuraya, Templers Road, Mount Lavinia.", 
        addressNonSitting: "No. 140/31 L, Kalapuraya, Templers Road, Mount Lavinia.", 
        fax: "", 
        email: "harshanan@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3464.jpg" 
    },
    { 
        name: "HON. (Dr.) Dammika Patabendi", 
        title: "Minister of Environment", 
        mobile: "0773436546", 
        telephoneSitting: "", 
        telephoneNonSitting: "0352230380", 
        addressSitting: "464/20, Pannipitiya road, Pelawatta, Battaramulla.", 
        addressNonSitting: "861/1, Ambanpitiya, Galigamuwa Town.", 
        fax: "", 
        email: "dammikap@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3597.jpg" 
    },
    { 
        name: "HON. (Dr.) Upali Pannilage", 
        title: "Minister of Rural Development, Social Security and Community Empowerment", 
        mobile: "0717427156", 
        telephoneSitting: "0717427156", 
        telephoneNonSitting: "0775018545", 
        addressSitting: "20/9/E, Natuduwa, Kelaniya.", 
        addressNonSitting: "20/9/E, Natuduwa, Kelaniya.", 
        fax: "", 
        email: "pannila@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3606.jpg" 
    },
    { 
        name: "HON. (Mrs.) Saroja Savithri Paulraj", 
        title: "Minister of Women and Child Affairs", 
        mobile: "0714878676", 
        telephoneSitting: "0714878676", 
        telephoneNonSitting: "0714878676", 
        addressSitting: "Epitawaththa, Aththudawa, Palatuwa, Matara.", 
        addressNonSitting: "Epitawaththa, Aththudawa, Palatuwa, Matara.", 
        fax: "", 
        email: "sarojap@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3522.jpg" 
    },
    { 
        name: "HON. Ananda Wijepala", 
        title: "Minister of Public Security and Parliamentary Affairs", 
        mobile: "0773041587", 
        telephoneSitting: "0773041587", 
        telephoneNonSitting: "0773041587", 
        addressSitting: "278/24, Sanhinda Mawatha, Nagahakotuwa Road, Imbulgoda.", 
        addressNonSitting: "278/24, Sanhinda Mawatha, Nagahakotuwa Road, Imbulgoda.", 
        fax: "", 
        email: "anandaw@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3549.jpg" 
    },
    { 
        name: "HON. (Dr.) Hiniduma Sunil Senevi", 
        title: "Minister of Buddhasasana, Religious and Cultural Affairs", 
        mobile: "0714370706", 
        telephoneSitting: "0714370706", 
        telephoneNonSitting: "0743760112", 
        addressSitting: "2-F, Sri Seelalankara Road, Mullegama, Homagama.", 
        addressNonSitting: "2-F, Sri Seelalankara Road, Mullegama, Homagama.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3590.jpg" 
    },
    { 
        name: "HON. Sajith Premadasa", 
        title: "Leader of the Opposition in Parliament", 
        mobile: "0777775527", 
        telephoneSitting: "0472238011", 
        telephoneNonSitting: "0112777253", 
        addressSitting: "Apartment No - 2003, Fairway Residencies, Buthgamuwa Road, Rajagiriya.", 
        addressNonSitting: "Apartment No - 2003, Fairway Residencies, Buthgamuwa Road, Rajagiriya.", 
        fax: "", 
        email: "sajithp@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/140.jpg" 
    },
    { 
        name: "HON. Namal Karunaratne", 
        title: "Deputy Minister of Agriculture and Livestock", 
        mobile: "0718220005", 
        telephoneSitting: "0372220131", 
        telephoneNonSitting: "0372220131", 
        addressSitting: "Party Head Quarters Pelwatta, Battaramulla.", 
        addressNonSitting: "No. 34/3, Thalwehera, Makulpotha.", 
        fax: "", 
        email: "namalk@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1465.jpg" 
    },
    { 
        name: "HON. Chathuranga Abeysinghe", 
        title: "Deputy Minister of Industry and Entrepreneurship Development", 
        mobile: "0762255844", 
        telephoneSitting: "0112785612", 
        telephoneNonSitting: "0112692664", 
        addressSitting: "464/20, Pannipitiya Road, Pelawatte, Battaramulla.", 
        addressNonSitting: "464/20, Pannipitiya Road, Pelawatte, Battaramulla.", 
        fax: "", 
        email: "chathuranga@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3460.jpg" 
    },
    { 
        name: "HON. Janitha Ruwan Kodithuwakku", 
        title: "Deputy Minister of Ports and Civil Aviation", 
        mobile: "0770604190", 
        telephoneSitting: "0112705329", 
        telephoneNonSitting: "0112705329", 
        addressSitting: "No. 50, Sri Saranankara Road, Rilawala, Polgasowita.", 
        addressNonSitting: "No. 50, Sri Saranankara Road, Rilawala, Polgasowita.", 
        fax: "", 
        email: " janithak@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3610.jpg" 
    },
    { 
        name: "HON. Rathna Gamage", 
        title: "Deputy Minister of Fisheries, Aquatic and Ocean Resources", 
        mobile: "0725546098", 
        telephoneSitting: "0725546098", 
        telephoneNonSitting: "0725546098", 
        addressSitting: "No.464/20, Pannipitiya Road, Pelawatta, Battaramulla", 
        addressNonSitting: "Manawila, Walahanduwa, Galle", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3515.jpg" 
    },
    { 
        name: "HON. Eranga Gunasekara", 
        title: "Deputy Minister of Youth Affairs", 
        mobile: "0718457920", 
        telephoneSitting: "0112177005", 
        telephoneNonSitting: "0112177005", 
        addressSitting: "No. 157/1A, Himbutana, Mulleriyawa New Town", 
        addressNonSitting: "No. 157/1A, Himbutana, Mulleriyawa New Town", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3463.jpg" 
    },
    { 
        name: "HON. (Dr.) Prasanna Gunasena", 
        title: "Deputy Minister of Transport and Highways", 
        mobile: "0772619242", 
        telephoneSitting: "0772619242", 
        telephoneNonSitting: "0772619242", 
        addressSitting: " 41G, Kumudu Mawatha, Primerose Hill Estate Kandy", 
        addressNonSitting: " 41G, Kumudu Mawatha, Primerose Hill Estate Kandy", 
        fax: "", 
        email: "prasannag@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3497.jpg" 
    },
    { 
        name: "HON. Anton Jayakody", 
        title: "Deputy Minister of Environment", 
        mobile: "0718070499", 
        telephoneSitting: "0718070499", 
        telephoneNonSitting: "0312298471", 
        addressSitting: "No.303, Sesatha, Irabadagama, Sandalankawa.", 
        addressNonSitting: "No.303, Sesatha, Irabadagama, Sandalankawa.", 
        fax: "", 
        email: "antonj@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3564.jpg" 
    },
    { 
        name: "HON. R.M. Jayawardhana", 
        title: "Deputy Minister of Trade, Commerce and Food Security", 
        mobile: "0719758793", 
        telephoneSitting: "0552277964", 
        telephoneNonSitting: "0719758793", 
        addressSitting: "Maligatenna Junction, Badalkumbura", 
        addressNonSitting: "Maligatenna Junction, Badalkumbura", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3583.jpg" 
    },
    { 
        name: "HON. Mahinda Jayasinghe", 
        title: "Deputy Minister of Labour", 
        mobile: "0718297022", 
        telephoneSitting: "0332235406", 
        telephoneNonSitting: "0718297022", 
        addressSitting: "No . 154, Yakkala Road, Gampaha.", 
        addressNonSitting: "No . 154, Yakkala Road, Gampaha.", 
        fax: "", 
        email: "mahindaj@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3473.JPG" 
    },
    { 
        name: "HON. Major General (Rtd.) Aruna Jayasekera", 
        title: "Deputy Minister of Defence", 
        mobile: "0704101300", 
        telephoneSitting: "0112893306", 
        telephoneNonSitting: "0112893306", 
        addressSitting: " 343, Wakanda Waththa, Homagama", 
        addressNonSitting: " 343, Wakanda Waththa, Homagama", 
        fax: "0112893306", 
        email: "arunaj@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3608.jpg" 
    },
    { 
        name: "HON. Sugath Thilakaratne", 
        title: " Deputy Minister of Sports", 
        mobile: "0763525008", 
        telephoneSitting: "0763525008", 
        telephoneNonSitting: "0763525008", 
        addressSitting: "B 1/2, Elapitiwala Housing Scheme, Welisara.", 
        addressNonSitting: "B 1/2, Elapitiwala Housing Scheme, Welisara.", 
        fax: "", 
        email: "sugatht@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3613.jpg" 
    },
    { 
        name: "HON. Gamagedara Dissanayake", 
        title: "Deputy Minister of Buddhasasana, Religious and Cultural Affairs", 
        mobile: "0712391957", 
        telephoneSitting: "0712391957", 
        telephoneNonSitting: "0712391957", 
        addressSitting: "19, Nagolla Road, Matale.", 
        addressNonSitting: "19, Nagolla Road, Matale.", 
        fax: "", 
        email: "gamagedarad@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3505.jpg" 
    },
    { 
        name: "HON. Wasantha Piyathissa", 
        title: "Deputy Minister of Rural Development, Social Security and Community Empowerment", 
        mobile: "0702170152", 
        telephoneSitting: "0702170152", 
        telephoneNonSitting: "0702170152", 
        addressSitting: "94, Dutugamunu Mw., Jayawardhenapura, Ampara", 
        addressNonSitting: "94, Dutugamunu Mw., Jayawardhenapura, Ampara", 
        fax: "", 
        email: "piyathissaw@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3541.jpg" 
    },
    { 
        name: " HON. Sundaralingam Pradeep", 
        title: "Deputy Minister of Plantation and Community Infrastructure", 
        mobile: "0713280729", 
        telephoneSitting: "0773080729", 
        telephoneNonSitting: "0719198140", 
        addressSitting: "3rd lane, Walawwatta, Kahawatta", 
        addressNonSitting: "3rd lane, Walawwatta, Kahawatta", 
        fax: "", 
        email: "lsspradeep@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3589.jpg" 
    },
    { 
        name: "HON. Muneer Mulaffer", 
        title: "Deputy Minister of National Integration", 
        mobile: "0706306744", 
        telephoneSitting: "0706306744", 
        telephoneNonSitting: "0706306744", 
        addressSitting: " 506/3/37/A, Royal Garden, Minhath Mawatha, Thihariya.", 
        addressNonSitting: " 506/3/37/A, Royal Garden, Minhath Mawatha, Thihariya.", 
        fax: "", 
        email: "muneerm@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3475.jpg" 
    },
    { 
        name: "HON. (Prof.) Ruwan Ranasinghe", 
        title: "Deputy Minister of Tourism", 
        mobile: "0777513464", 
        telephoneSitting: "0552226678", 
        telephoneNonSitting: "0552230004", 
        addressSitting: "21/2, Hingurugamuwa Kanupellella New Road, Badulla", 
        addressNonSitting: "21/2, Hingurugamuwa Kanupellella New Road, Badulla", 
        fax: "", 
        email: "ruwanr@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3616.jpg" 
    },
    { 
        name: "HON. (Dr.) Susil Ranasinghe", 
        title: "Deputy Minister of Land and Irrigation", 
        mobile: "0714325051", 
        telephoneSitting: "0112785612", 
        telephoneNonSitting: "0743205051", 
        addressSitting: "464/20, Pannipitiya Road, Pelawatte, Battaramulla.", 
        addressNonSitting: "Nabadawewa Road, Moragoda, Thalawa.", 
        fax: "0112786050", 
        email: "susilr@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3568.jpg" 
    },
    { 
        name: "HON. Sunil Watagala, Attorney at Law", 
        title: "Deputy Minister of Public Security and Parliamentary Affairs", 
        mobile: "0772349348", 
        telephoneSitting: "0743544017", 
        telephoneNonSitting: "0112073505", 
        addressSitting: " 35/A, Ranawakawatta Road, Kalalgoda, Pannipitiya", 
        addressNonSitting: " 35/A, Ranawakawatta Road, Kalalgoda, Pannipitiya", 
        fax: "", 
        email: "swatagala@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3461.jpg" 
    },
    { 
        name: "HON. (Dr.) Hansaka Wijemuni", 
        title: "Deputy Minister of Health and Mass Media", 
        mobile: "0724128266", 
        telephoneSitting: "0774370354", 
        telephoneNonSitting: "0724128266", 
        addressSitting: " No 88/A-2, Fairland Estate, Peradeniya.", 
        addressNonSitting: " No 88/A-2, Fairland Estate, Peradeniya.", 
        fax: "", 
        email: "hansakaw@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3498.jpg" 
    },
    { 
        name: "HON. Eranga Weeraratne", 
        title: "Deputy Minister of Digital Economy", 
        mobile: "0777794334", 
        telephoneSitting: "0112575274", 
        telephoneNonSitting: "0112794158", 
        addressSitting: "Omobio (Pvt) Ltd, No. 1, St. Alban's Place, Colombo 04", 
        addressNonSitting: "Omobio (Pvt) Ltd, No. 1, St. Alban's Place, Colombo 04", 
        fax: "", 
        email: "eranga@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3607.jpg" 
    },
    { 
        name: "HON. Upali Samarasingha", 
        title: "Deputy Minister of Cooperative Development", 
        mobile: "0779080255", 
        telephoneSitting: "0779080255", 
        telephoneNonSitting: "0779080255", 
        addressSitting: "Ambalangodella, Vavuniya", 
        addressNonSitting: "Ambalangodella, Vavuniya", 
        fax: "", 
        email: "upalis@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3619.jpg" 
    },
    { 
        name: "HON. T. B. Sarath", 
        title: "Deputy Minister of Housing", 
        mobile: "0719178866", 
        telephoneSitting: "0719178866", 
        telephoneNonSitting: "0274321010", 
        addressSitting: " 464/20, Pannipitiya Road, Pelawatta, Battaramulla.", 
        addressNonSitting: "Krishani, Kothalawala Road, Raja Ela, Hingurakgoda.", 
        fax: "", 
        email: "sarathtb@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3574.jpg" 
    },
    { 
        name: "HON. (Dr.) Namal Sudarshana", 
        title: " Deputy Minister of Women and Child Affairs", 
        mobile: "0711745184", 
        telephoneSitting: "0112177005", 
        telephoneNonSitting: "0372252842", 
        addressSitting: "No.464/20, Pannipitiya Road, Pelawatta, Battaramulla", 
        addressNonSitting: "Soranawalli watta, Warakavehera, Morathiha.", 
        fax: "", 
        email: "namals@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3553.jpg" 
    },
    { 
        name: " HON. (Dr.) Harshana Suriyapperuma", 
        title: "Deputy Minister of Finance and Planning", 
        mobile: "0777259625", 
        telephoneSitting: "0777259625", 
        telephoneNonSitting: "0777259625", 
        addressSitting: "Ministry of Finance, The Secretariat, Colombo 01.", 
        addressNonSitting: "Ministry of Finance, The Secretariat, Colombo 01.", 
        fax: "", 
        email: "harshana@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3609.jpg" 
    },
    { 
        name: "HON. P. Ruwan Senarath", 
        title: " Deputy Minister of Provincial Councils and Local Government", 
        mobile: "0719068283", 
        telephoneSitting: "0472242302", 
        telephoneNonSitting: "0702699248", 
        addressSitting: "45/1 Weeraketiya Road, Ranna", 
        addressNonSitting: "45/1 Weeraketiya Road, Ranna", 
        fax: "", 
        email: "ruwans@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3531.jpg" 
    },
    { 
        name: "HON. (Dr.) Madhura Senevirathna", 
        title: "Deputy Minister of Education and Higher Education", 
        mobile: "0703514888", 
        telephoneSitting: "0703514888", 
        telephoneNonSitting: "0522222865", 
        addressSitting: "461, Kandy Road, Bambarakelle, Nuwara Eliya.", 
        addressNonSitting: "461, Kandy Road, Bambarakelle, Nuwara Eliya.", 
        fax: "", 
        email: "madhuras@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3510.jpg" 
    },
    { 
        name: "HON. Arun Hemachandra", 
        title: "Deputy Minister of Foreign Affairs and Foreign Employment", 
        mobile: "0773377325", 
        telephoneSitting: "0773377325", 
        telephoneNonSitting: "0773377325", 
        addressSitting: "No. 464/20, Pannipitiya Road, Pelawatte, Battaramulla.", 
        addressNonSitting: "No. 7, New Moor Street, Trincomalee.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3547.jpg" 
    },
    { 
        name: "HON. Nalin Hewage", 
        title: "Deputy Minister of Vocational Education", 
        mobile: "0712669003", 
        telephoneSitting: "0912233389", 
        telephoneNonSitting: "0912230597", 
        addressSitting: "Janitha Vimukthi Peramuna Head Office, 464/20, Pannipitiya Road, Battaramulla.", 
        addressNonSitting: "Janitha Vimukthi Peramuna Head Office, 464/20, Pannipitiya Road, Battaramulla.", 
        fax: "", 
        email: "nalinh@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3514.jpg" 
    },
    { 
        name: "HON. Gayantha Karunathilleka", 
        title: "", 
        mobile: "0777504504", 
        telephoneSitting: "0714995554", 
        telephoneNonSitting: "0112874285", 
        addressSitting: "28/5 4th Lane, Off Epitamulla Road, Pitakoptte, Kotte.", 
        addressNonSitting: "Gurukanda Estate, Thalgaswala.", 
        fax: "0912206775", 
        email: "karunatileka_g@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/71.jpg" 
    },
    { 
        name: "HON. Asoka Sapumal Ranwala", 
        title: "", 
        mobile: "0718342092", 
        telephoneSitting: "0718342092", 
        telephoneNonSitting: "0718342092", 
        addressSitting: " 28, Colombo road, Biyagama.", 
        addressNonSitting: " 28, Colombo road, Biyagama.", 
        fax: "", 
        email: "asokasr@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3476.jpg" 
    },
    { 
        name: "HON. R. M. Ranjith Madduma Bandara", 
        title: "", 
        mobile: "0777562550", 
        telephoneSitting: "0552277489", 
        telephoneNonSitting: "0555672634", 
        addressSitting: "No. 10/4, Pothuwil Road, Monaragala.", 
        addressNonSitting: "No. 10/4, Medagama, Bibila.", 
        fax: "0112823485", 
        email: "bandara_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/148.jpg" 
    },
    { 
        name: "HON. Rauff Hakeem, Attorney at Law", 
        title: "", 
        mobile: "0773401717", 
        telephoneSitting: "0112436752", 
        telephoneNonSitting: "", 
        addressSitting: "263, Galle Road, Colombo 03.", 
        addressNonSitting: "51, Vauxhall Lane, Colombo 02.", 
        fax: "0112396699", 
        email: "hakeem_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/200.jpg" 
    },
    { 
        name: "HON. Ravi Karunanayake", 
        title: "", 
        mobile: "0777590590", 
        telephoneSitting: "0112872287", 
        telephoneNonSitting: "0112872287", 
        addressSitting: "No. 1291/6, Rajamalwatta Road, Battaramulla.", 
        addressNonSitting: "No. 1291/6, Rajamalwatta Road, Battaramulla.", 
        fax: "0112863138", 
        email: "karunanayake_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/72.jpg" 
    },
    { 
        name: "HON. Rishad Bathiudeen", 
        title: "", 
        mobile: "0777487504", 
        telephoneSitting: "0771444775", 
        telephoneNonSitting: "0777487504", 
        addressSitting: "56, 01st Floor, Supun Arcade, Residencies, Galle Road, Colombo 06", 
        addressNonSitting: " 410/16, Bauddhaloka Mawatha, Colombo 07.", 
        fax: "0112360512", 
        email: "rishad_b@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/293.jpg" 
    },
    { 
        name: "HON. Palani Thigambaram", 
        title: "", 
        mobile: "0777797795", 
        telephoneSitting: "0112387590", 
        telephoneNonSitting: "0712151734", 
        addressSitting: "D 22, Parliament Members Housing Complex, Madiwela, Sri Jayawardenepura Kotte.", 
        addressNonSitting: "1/7B, Sri Saranankara road, Dehiwela.", 
        fax: "0112073182", 
        email: "thigambaram_p@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3160.jpg" 
    },
    { 
        name: "HON. Kabir Hashim", 
        title: "", 
        mobile: "0777485591", 
        telephoneSitting: "0352246461", 
        telephoneNonSitting: "0352246461", 
        addressSitting: "NO.156, Lake Drive, Colombo 08.", 
        addressNonSitting: "NO.156, Lake Drive, Colombo 08.", 
        fax: "0352246461", 
        email: "hashim_k@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/259.jpg" 
    },
    { 
        name: "HON. Mano Ganesan", 
        title: "", 
        mobile: "0773133839", 
        telephoneSitting: "0112729810", 
        telephoneNonSitting: "0777312770", 
        addressSitting: " No. 24, Sri Maha Vihara Mawatha, Pamankada, Dehiwala.", 
        addressNonSitting: " No. 24, Sri Maha Vihara Mawatha, Pamankada, Dehiwala.", 
        fax: "0777555413", 
        email: "mano_g@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/271.jpg" 
    },
    { 
        name: "HON. Dayasiri Jayasekara, Attorney at Law", 
        title: "", 
        mobile: "0777882882", 
        telephoneSitting: "0372291841", 
        telephoneNonSitting: "0372291841", 
        addressSitting: " 9/6, Davidson Tower, Havelock City, Colombo 05.", 
        addressNonSitting: " 9/6, Davidson Tower, Havelock City, Colombo 05.", 
        fax: "0372291841", 
        email: "dayasirij@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1468.jpg" 
    },
    { 
        name: "HON. (Dr.) M.L.A.M. Hizbullah", 
        title: "", 
        mobile: "0777818181", 
        telephoneSitting: "0112696900", 
        telephoneNonSitting: "0112696900", 
        addressSitting: "10/18, Lake Drive, Colombo 08.", 
        addressNonSitting: "10/18, Lake Drive, Colombo 08.", 
        fax: "0112696900", 
        email: "hizbullah@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/228.jpg" 
    },
    { 
        name: "HON. Rohitha Abeygunawardhana", 
        title: "", 
        mobile: "0770219219", 
        telephoneSitting: "0342300009", 
        telephoneNonSitting: "0342298481", 
        addressSitting: "No. 4/3 A, Gagadara Mawatha, Sirimal Uyana, Rathmalana", 
        addressNonSitting: " No. 15, Liberty Mawatha, Pahalagoda, Payagala", 
        fax: "0342300009", 
        email: "abeygunawardana_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/234.jpg" 
    },
    { 
        name: "HON. Namal Rajapaksa, Attorney at Law", 
        title: "", 
        mobile: "0775000001", 
        telephoneSitting: "0472240332", 
        telephoneNonSitting: "", 
        addressSitting: "260/12, Torrington avenue, Colombo 05.", 
        addressNonSitting: "Carlton House, Mahawela Road, Tangalle.", 
        fax: "", 
        email: "namalr@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3179.jpg" 
    },
    { 
        name: "HON. Jeevan Thondaman", 
        title: "", 
        mobile: "0717399999", 
        telephoneSitting: "0716868002", 
        telephoneNonSitting: "", 
        addressSitting: " 135, Kumbukgahaduwa, Parliament road, Battaramulle.", 
        addressNonSitting: "C.L.F. Harrington Estate, Kotagala, Nuwara Eliya.", 
        fax: "0112301355", 
        email: "jeevan_t@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3329.jpg" 
    },
    { 
        name: "HON. (Dr.) Harsha de Silva", 
        title: "", 
        mobile: "0777686897", 
        telephoneSitting: "0112597769", 
        telephoneNonSitting: "0112597769", 
        addressSitting: "No. 29 A, 1st Lane, Narahenpita Road, Nawala.", 
        addressNonSitting: "No. 29 A, 1st Lane, Narahenpita Road, Nawala.", 
        fax: "", 
        email: "desilva_h@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3201.jpg" 
    },
    { 
        name: " HON. Ajith P. Perera", 
        title: "", 
        mobile: "0777668993", 
        telephoneSitting: "0382290108", 
        telephoneNonSitting: "0382290108", 
        addressSitting: "169A/2, School Lane, Bandaragama", 
        addressNonSitting: "169A/2, School Lane, Bandaragama", 
        fax: "0384282248", 
        email: "perera_a@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3143.jpg" 
    },
    { 
        name: "HON. Arjuna Sujeewa Senasinghe, Attorney at Law", 
        title: "", 
        mobile: "0777801294", 
        telephoneSitting: "0777801294", 
        telephoneNonSitting: "0777801294", 
        addressSitting: "03, Chelsea Gardens, Colombo 03.", 
        addressNonSitting: "03, Chelsea Gardens, Colombo 03.", 
        fax: "0112564436", 
        email: "senasinghe_s@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3132.jpg" 
    },
    { 
        name: "HON. (Dr.) V.S. Radhakrishnan", 
        title: "", 
        mobile: "0777883943", 
        telephoneSitting: "0522222942", 
        telephoneNonSitting: "0522222942", 
        addressSitting: " No. 689/2, Gen. Larry Wijerathne Mawatha, Pelawatta, Battaramulla.", 
        addressNonSitting: "No.42, Church Road, Nuwara Eliya.", 
        fax: "0522223126", 
        email: "radhakrishnan_v@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3153.jpg" 
    },
    { 
        name: "HON. Dilip Wedaarachchi", 
        title: "", 
        mobile: "0777417299", 
        telephoneSitting: "0472244302", 
        telephoneNonSitting: "0472244302", 
        addressSitting: "No.15, Deepankara Road, Tangalle.", 
        addressNonSitting: "No.5 Deepankara Road, Medaketiya, Tangalle.", 
        fax: "0472244303", 
        email: "wedaarachchi_d@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/181.jpg" 
    },
    { 
        name: " HON. J.C. Alawathuwala", 
        title: "", 
        mobile: "0777530448", 
        telephoneSitting: "0778844933", 
        telephoneNonSitting: "0777530448", 
        addressSitting: "684/4, Kandy Road, Millawa, Kurunegala.", 
        addressNonSitting: "684/4, Kandy Road, Millawa, Kurunegala.", 
        fax: "", 
        email: "alawathuwala_j@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/2869.jpg" 
    },
    { 
        name: "HON. D. V. Chanaka", 
        title: "", 
        mobile: "0779039495", 
        telephoneSitting: "0412255650", 
        telephoneNonSitting: "0412255650", 
        addressSitting: "'Tharaka', Kudawella - South, Nakulugamuwa.", 
        addressNonSitting: "'Tharaka', Kudawella - South, Nakulugamuwa.", 
        fax: "0412255650", 
        email: "chanaka_d@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3240.jpg" 
    },
    { 
        name: "HON. Anuradha Jayaratne", 
        title: "", 
        mobile: "0718009009", 
        telephoneSitting: "0712724724", 
        telephoneNonSitting: "0718009009", 
        addressSitting: "No. 87, Doluwa, Gampola.", 
        addressNonSitting: "Doluwa, Gampola.", 
        fax: "0812415215", 
        email: "anuradha_j@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3232.jpg" 
    },
    { 
        name: "HON. K. Kader Masthan", 
        title: "", 
        mobile: "0777488222", 
        telephoneSitting: "0773453200", 
        telephoneNonSitting: "0773974090", 
        addressSitting: " No. 223/3, Kandy Road, Thekkawatta, Vavuniya.", 
        addressNonSitting: " No. 223/3, Kandy Road, Thekkawatta, Vavuniya.", 
        fax: "", 
        email: "masthan_kk@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3249.jpg" 
    },
    { 
        name: "HON. Chamara Sampath Dasanayake", 
        title: "", 
        mobile: "0773435836", 
        telephoneSitting: "0552225886", 
        telephoneNonSitting: "0773435836", 
        addressSitting: " D 16, Parliament Housing Complex, Madiwala", 
        addressNonSitting: "Rathwatta Mawatha, Badulla", 
        fax: "", 
        email: "chamara_sampath@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3309.jpg" 
    },
    { 
        name: "HON. Nihal Galappaththi", 
        title: "", 
        mobile: "0718219987", 
        telephoneSitting: "0472242302", 
        telephoneNonSitting: "0718219987", 
        addressSitting: " No. 208/2, Muthumala, Mawatha, Pallikkudawa, Thangalla", 
        addressNonSitting: " No. 208/2, Muthumala, Mawatha, Pallikkudawa, Thangalla", 
        fax: "", 
        email: "nihalg@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/83.jpg" 
    },
    { 
        name: "HON. Nalin Bandara Jayamaha", 
        title: "", 
        mobile: "0777578209", 
        telephoneSitting: "0322245455", 
        telephoneNonSitting: "0372284690", 
        addressSitting: "A 20, Parliament Members Housing Complex, Madiwela, Sri Jayawardenepura Kotte.", 
        addressNonSitting: "No. 5, Watthegedara, Udubaddawa.", 
        fax: "0322245455", 
        email: "jayamaha_n@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3208.jpg" 
    },
    { 
        name: "HON. Amirthanathan Adaikkalanathan", 
        title: "", 
        mobile: "0777760795", 
        telephoneSitting: "232222100", 
        telephoneNonSitting: "242222977", 
        addressSitting: "C28 MPP HOUSING, COMPLEX MADIWELA, Colombo, Sri Jayawardenepura Kotte.", 
        addressNonSitting: " Telo office Rayappu Joseph, street, Pettha, Mannar", 
        fax: "0112778524", 
        email: "adaikkalanathan_s@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1247.jpg" 
    },
    { 
        name: "HON. G.G. Ponnambalam", 
        title: "", 
        mobile: "0777301021", 
        telephoneSitting: "0112581677", 
        telephoneNonSitting: "0212223739", 
        addressSitting: "'GITANJALI' No. 15, Queens, Road, Colpetty, Colombo 00300", 
        addressNonSitting: "No. 43, 3rd Cross Street, Jaffna.", 
        fax: "0112586254", 
        email: "ggponnambalam@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/291.jpg" 
    },
    { 
        name: " HON. R.M. Gamini Rathnayake", 
        title: "", 
        mobile: "0773976506", 
        telephoneSitting: "0112720218", 
        telephoneNonSitting: "0352282398", 
        addressSitting: "No. 10, Council Lane, Dehiwela.", 
        addressNonSitting: " B/310/8, 'Sandeepa', Pallovitawaththa, Pahala Kotasa, Ballapana, Galigamuwa Town.", 
        fax: "0112720229", 
        email: "gaminir@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/298.jpg" 
    },
    { 
        name: "HON. Lakshman Nipuna Arachchi", 
        title: "", 
        mobile: "0773497866", 
        telephoneSitting: "0112896394", 
        telephoneNonSitting: "0112896394", 
        addressSitting: "143/5, Temple Road, Nampamunuwa Piliyandala.", 
        addressNonSitting: "143/5, Temple Road, Nampamunuwa Piliyandala.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1418.jpg" 
    },
    { 
        name: "HON. Sivagnanam Shritharan", 
        title: "", 
        mobile: "0776913244", 
        telephoneSitting: "0212280024", 
        telephoneNonSitting: "0212221595", 
        addressSitting: " No. 882, Arumugam Road, Vaddakachichi, Kilinochchi.", 
        addressNonSitting: " No. 882, Arumugam Road, Vaddakachichi, Kilinochchi.", 
        fax: "0212280024", 
        email: "shritharan_s@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3183.jpg" 
    },
    { 
        name: "HON. Hector Appuhamy", 
        title: "", 
        mobile: "0777279951", 
        telephoneSitting: "0777279951", 
        telephoneNonSitting: "0312278453", 
        addressSitting: " 38, Rangammulla, Waikkala.", 
        addressNonSitting: " 38, Rangammulla, Waikkala.", 
        fax: "", 
        email: "hector_a@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3258.jpg" 
    },
    { 
        name: "HON. (Dr.) Kavinda Heshan Jayawardhana", 
        title: "", 
        mobile: "0719909555", 
        telephoneSitting: "0112245135", 
        telephoneNonSitting: "0716022101", 
        addressSitting: "No,34,Dr.Jayalath Jayawardena Mw, Weligampitiya, Ja-ela.", 
        addressNonSitting: "No,34,Dr.Jayalath Jayawardena Mw, Weligampitiya, Ja-ela.", 
        fax: "0112245136", 
        email: "kavinda_j@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3276.jpg" 
    },
    { 
        name: "HON. K. Sujith Sanjaya Perera", 
        title: "", 
        mobile: "0777512535", 
        telephoneSitting: "0362270636", 
        telephoneNonSitting: "0362270636", 
        addressSitting: "245 Vijaya Kumarathunga Mawatha Colombo, Polhengoda Road, Colombo 05.", 
        addressNonSitting: "245 Vijaya Kumarathunga Mawatha Colombo, Polhengoda Road, Colombo 05.", 
        fax: "0362270636", 
        email: "sujith_s@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3270.jpg" 
    },
    { 
        name: "HON. S.M. Marikkar", 
        title: "", 
        mobile: "0777886665", 
        telephoneSitting: "0112533169", 
        telephoneNonSitting: "0777886665", 
        addressSitting: "81/A, Vijaya Road, Salamulla, Kolonnawa,", 
        addressNonSitting: "81/A, Vijaya Road, Salamulla, Kolonnawa,", 
        fax: "0112533169", 
        email: "marikkar_s@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3212.jpg" 
    },
    { 
        name: "HON. Imran Maharoof", 
        title: "", 
        mobile: "0777007590", 
        telephoneSitting: "0262236699", 
        telephoneNonSitting: "0262236699", 
        addressSitting: " E 14, Parliament Members Housing Complex, Madiwela, Sri Jayawardenepura Kotte.", 
        addressNonSitting: "Mancholai, Kinniya 03, Trincomalee.", 
        fax: "", 
        email: "imran_m@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3279.jpg" 
    },
    { 
        name: "HON. Mujibur Rahman", 
        title: "", 
        mobile: "0773312010", 
        telephoneSitting: "0112335613", 
        telephoneNonSitting: "0112532117", 
        addressSitting: "No 317, Jayantha weerasekara mawatha, Colombo 10.", 
        addressNonSitting: "No 317, Jayantha weerasekara mawatha, Colombo 10.", 
        fax: "", 
        email: "rahuman_m@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3213.jpg" 
    },
    { 
        name: "HON. Harshana Rajakaruna", 
        title: "", 
        mobile: "0773058000", 
        telephoneSitting: "0332267081", 
        telephoneNonSitting: "0332267081", 
        addressSitting: "'SiriRanda Bhavana' Millathe, Kiridiwela.", 
        addressNonSitting: "'SiriRanda Bhavana' Millathe, Kiridiwela.", 
        fax: "0332269658", 
        email: "harshana_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3217.jpg" 
    },
    { 
        name: "HON. (Mrs.) Rohini Kumari Wijerathna", 
        title: "", 
        mobile: "0773415003", 
        telephoneSitting: "0662055440", 
        telephoneNonSitting: "0662255400", 
        addressSitting: " Kambiadiya, Kaikawala. Mathale.", 
        addressNonSitting: " Kambiadiya, Kaikawala. Mathale.", 
        fax: "0662255400", 
        email: "rohini_wk@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3233.jpg" 
    },
    { 
        name: "HON. Chaminda Wijesiri", 
        title: "", 
        mobile: "0773607427", 
        telephoneSitting: "0572221440", 
        telephoneNonSitting: "0572232037", 
        addressSitting: " D 23, Parliament Members Housing Complex, Madiwela, Sri Jayawardenepura Kotte.", 
        addressNonSitting: "Navodya Mawatha, Kabillawela North. Bandarawela", 
        fax: "0572221440", 
        email: "wijesiri_c@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3265.jpg" 
    },
    { 
        name: "HON. Hesha Withanage", 
        title: "", 
        mobile: "0772328819", 
        telephoneSitting: "0472261830", 
        telephoneNonSitting: "0472261830", 
        addressSitting: "33/16, Ratnayake Mawatha, Pelawatta, Battaramulla Madiwela, Sri Jayawardenepura Kotte.", 
        addressNonSitting: "180, New Town, Embilipitiya New Town, Embilipitiya.", 
        fax: "0472261830", 
        email: "hesha_w@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3268.jpg" 
    },
    { 
        name: " HON. Kaveenthiran Kodeeswaran", 
        title: "", 
        mobile: "0774669696", 
        telephoneSitting: "0774669696", 
        telephoneNonSitting: "0774669696", 
        addressSitting: "Parliament Members Housing complex, Madivela, Colombo", 
        addressNonSitting: "N~71, Weaving Center Road, Akkaraipattu~07 EP", 
        fax: "0672052477", 
        email: "kodeeswaran_k@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3255.jpg" 
    },
    { 
        name: " HON. Gnanamuththu Srineshan", 
        title: "", 
        mobile: "0766648048", 
        telephoneSitting: "0766648048", 
        telephoneNonSitting: "0652225791", 
        addressSitting: " No.561/3,Lions Centre Road, Batticaloa Batticaloa.", 
        addressNonSitting: " No.561/3,Lions Centre Road, Batticaloa Batticaloa.", 
        fax: "0652225791", 
        email: "srineshan_g@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3250.jpg" 
    },
    { 
        name: "HON. Waruna Liyanage", 
        title: "", 
        mobile: "0717411790", 
        telephoneSitting: "0717411790", 
        telephoneNonSitting: "", 
        addressSitting: " No. 41, Vidyala Mawatha, Pelmadulla.", 
        addressNonSitting: " No. 41, Vidyala Mawatha, Pelmadulla.", 
        fax: "", 
        email: "waruna_l@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3287.jpg" 
    },
    { 
        name: "HON. Kins Nelson", 
        title: "", 
        mobile: "0773105541", 
        telephoneSitting: "0273123881", 
        telephoneNonSitting: "0273123881", 
        addressSitting: " 'Nelson Niwasa', Kaduruwela, Polonnaruwa.", 
        addressNonSitting: " 'Nelson Niwasa', Kaduruwela, Polonnaruwa.", 
        fax: "", 
        email: "kins_n@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3307.jpg" 
    },
    { 
        name: "HON. Rohana Bandara", 
        title: "", 
        mobile: "0766909909", 
        telephoneSitting: "0254928314", 
        telephoneNonSitting: "0254928314", 
        addressSitting: "Sri Lanka Parliament, Sri Jayawardanapura Kotte.", 
        addressNonSitting: "No 144, U.C. Quarters, Anuradhapura.", 
        fax: "", 
        email: "rohanabandara@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3305.jpg" 
    },
    { 
        name: "HON. W. H. M. Dharmasena", 
        title: "", 
        mobile: "0778037029", 
        telephoneSitting: "0779763163", 
        telephoneNonSitting: "0552273764", 
        addressSitting: "123/10, Praja Mandala Mawatha, Kalalgoda, Hokandara South.", 
        addressNonSitting: "Monaragala Road, Buttala.", 
        fax: "", 
        email: "dharmasena_w@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3294.jpg" 
    },
    { 
        name: "HON. Shanakiyan Rajaputhiran Rasamanickam", 
        title: "", 
        mobile: "0722888801", 
        telephoneSitting: "0722888801", 
        telephoneNonSitting: "0722888801", 
        addressSitting: "No.301, Main Street,Kaluwanchikudy, Batticaloa", 
        addressNonSitting: "No.301, Main Street,Kaluwanchikudy, Batticaloa", 
        fax: "", 
        email: "shanakiyan_r@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3394.jpg" 
    },
    { 
        name: "HON. Nayana Wasalathilaka", 
        title: "", 
        mobile: "0768067588", 
        telephoneSitting: "0768067588", 
        telephoneNonSitting: "0768067588", 
        addressSitting: "Unit 1/9, No 07, Barnes Place Residencies, Barnes Place, Colombo 07", 
        addressNonSitting: "Oakland Villa, 3rd Mile Post, Yahalabedda, Diyathalawa.", 
        fax: "", 
        email: "wasalathilake_n@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3455.jpg" 
    },
    { 
        name: "HON. Kathiravelu Shanmugam Kugathasan", 
        title: "", 
        mobile: "0766932971", 
        telephoneSitting: "0262223067", 
        telephoneNonSitting: "0766932971", 
        addressSitting: " Ward No. 05, Thiriyai, Trincomalee.", 
        addressNonSitting: " Ward No. 05, Thiriyai, Trincomalee.", 
        fax: "0262223063", 
        email: "kugathasanks@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3458.jpg" 
    },
    { 
        name: "HON. Ajith Agalakada", 
        title: "", 
        mobile: "0773563660", 
        telephoneSitting: "0773563660", 
        telephoneNonSitting: "0718664063", 
        addressSitting: "No. 33, Anicut Road, Monaragala", 
        addressNonSitting: "No. 33, Anicut Road, Monaragala", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3584.jpg" 
    },
    { 
        name: "HON. Roshan Akmeemana", 
        title: "", 
        mobile: "0717564473", 
        telephoneSitting: "", 
        telephoneNonSitting: "", 
        addressSitting: "Party Head Quarters", 
        addressNonSitting: " No.60, Abayapura, Trincomalee", 
        fax: "", 
        email: "roshanak@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3548.jpg" 
    },
    { 
        name: " HON. Aboobucker Athambawa", 
        title: "", 
        mobile: "0773747973", 
        telephoneSitting: "0773747973", 
        telephoneNonSitting: "0773810737", 
        addressSitting: "No. H,1/11, Sanchiaarachi Waththa, Colombo 12", 
        addressNonSitting: "242 A, Mavady Road, Sainthamaruthu - 06", 
        fax: "", 
        email: "athambawa@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3618.jpg" 
    },
    { 
        name: "HON. (Mrs.) Sagarika Athauda, Attorney at Law", 
        title: "", 
        mobile: "0773426397", 
        telephoneSitting: "0112177005", 
        telephoneNonSitting: "0352233669", 
        addressSitting: "464/20 Pannipitiya Road, Pelawatta, Battaramulla", 
        addressNonSitting: "H 12/8, Siyambalapitiya Road, Kegalle", 
        fax: "", 
        email: "sagarikaa@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3599.jpg" 
    },
    { 
        name: " HON. U.P. Abeywickrama, Attorney at Law", 
        title: "", 
        mobile: "0716253034", 
        telephoneSitting: "0781330300", 
        telephoneNonSitting: "0332269909", 
        addressSitting: "26, A, Diyawala, Kirindiwela.", 
        addressNonSitting: "26, A, Diyawala, Kirindiwela.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3484.gif" 
    },
    { 
        name: "HON. (Prof.) L.M. Abeywickrama", 
        title: "", 
        mobile: "0773229011", 
        telephoneSitting: "0412293811", 
        telephoneNonSitting: "0412293811", 
        addressSitting: "No.3, Pelapolhena Road, Mapalana, Kamburupitiya.", 
        addressNonSitting: "No.3, Pelapolhena Road, Mapalana, Kamburupitiya.", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3523.jpg" 
    },
    { 
        name: "HON. (Dr.) Nihal Abeysinghe", 
        title: "", 
        mobile: "0777199524", 
        telephoneSitting: "0112785612", 
        telephoneNonSitting: "0112692664", 
        addressSitting: "4/3, No. 18, Hedges Court Residencies, Hedges Court Road, Colombo 10.", 
        addressNonSitting: "4/3, No. 18, Hedges Court Residencies, Hedges Court Road, Colombo 10.", 
        fax: "", 
        email: "abeysinghen@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3489.jpg" 
    },
    { 
        name: "HON. (Dr.) Ramanathan Archchuna", 
        title: "", 
        mobile: "0778968025", 
        telephoneSitting: "0778968025", 
        telephoneNonSitting: "0778968025", 
        addressSitting: " C/O H B Samarakoon, Kekunagaswatta, Pannala, Ambagasdowa.", 
        addressNonSitting: "Meesalai (N), Meesalai, Jaffna.", 
        fax: "", 
        email: "ramanathana@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3535.jpg" 
    },
    { 
        name: "HON. M.K.M. Aslam", 
        title: "", 
        mobile: "0758342582", 
        telephoneSitting: "0758342582", 
        telephoneNonSitting: "0758342582", 
        addressSitting: " 31/1, Paliella, Ambakote, Kurunegala", 
        addressNonSitting: " 31/1, Paliella, Ambakote, Kurunegala", 
        fax: "", 
        email: "aslammkm@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3559.jpg" 
    },
    { 
        name: " HON. Manjula Suraweera Arachchi", 
        title: "", 
        mobile: "0766877654", 
        telephoneSitting: "0512224774", 
        telephoneNonSitting: "0766877654", 
        addressSitting: " 'Yasas Sri', Samangiri Janapadaya, Pitawala, Nawalapitiya.", 
        addressNonSitting: " 'Yasas Sri', Samangiri Janapadaya, Pitawala, Nawalapitiya.", 
        fax: "0512224774", 
        email: "manjulas@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3509.jpg" 
    },
    { 
        name: "HON. (Dr.)(Ms.) Kaushalya Ariyarathne", 
        title: "", 
        mobile: "0776733430", 
        telephoneSitting: "0771913004", 
        telephoneNonSitting: "0776733430", 
        addressSitting: "No. 12-4/1 Rohini Road Colombo 06.", 
        addressNonSitting: "No. 12-4/1 Rohini Road Colombo 06.", 
        fax: "", 
        email: "kaushalyaa@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3465.jpg" 
    },
    { 
        name: " HON. B. Ariyawansha", 
        title: "", 
        mobile: "0778353753", 
        telephoneSitting: "0775308420", 
        telephoneNonSitting: "0778353753", 
        addressSitting: "45/1 Kellagama, Kolonna", 
        addressNonSitting: "45/1 Kellagama, Kolonna", 
        fax: "", 
        email: "ariyawansab@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3596.jpg" 
    },
    { 
        name: "HON. (Dr.) Najith Indika", 
        title: "", 
        mobile: "0711010014", 
        telephoneSitting: "0711010014", 
        telephoneNonSitting: "0711010014", 
        addressSitting: "A1, Imbulana, Ruwanwella", 
        addressNonSitting: "A1, Imbulana, Ruwanwella", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3612.jpg" 
    },
    { 
        name: "HON. K. Ilankumaran", 
        title: "", 
        mobile: "0764331526", 
        telephoneSitting: "0212215485", 
        telephoneNonSitting: "0764331526", 
        addressSitting: "122/13, Point pedro, Aanaipandhi, Jaffna", 
        addressNonSitting: "122/13, Point pedro, Aanaipandhi, Jaffna", 
        fax: "", 
        email: "illankumarank@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3532.jpg" 
    },
    { 
        name: "HON. Arkam Ilyas", 
        title: "", 
        mobile: "0777117544", 
        telephoneSitting: "0777117544", 
        telephoneNonSitting: "0777772974", 
        addressSitting: "428/4A, New Street, Weligama.", 
        addressNonSitting: "428/4A, New Street, Weligama.", 
        fax: "", 
        email: "arkam@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3524.jpg" 
    },
    { 
        name: "HON. M.S. Uthumalebbe", 
        title: "", 
        mobile: "0773184357", 
        telephoneSitting: "0773184357", 
        telephoneNonSitting: "", 
        addressSitting: " 12, Lake Road, Addalachchanai 07.", 
        addressNonSitting: " 12, Lake Road, Addalachchanai 07.", 
        fax: "", 
        email: "uthumalebbe@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3545.jpg" 
    },
    { 
        name: " HON. (Mrs.) Oshani Umanga", 
        title: "", 
        mobile: "0777775999", 
        telephoneSitting: "0777775999", 
        telephoneNonSitting: "0767219008", 
        addressSitting: " Karagahadeniya, Uduwa (S), Kudauduwa, Horana", 
        addressNonSitting: " Karagahadeniya, Uduwa (S), Kudauduwa, Horana", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3492.jpg" 
    },
    { 
        name: "HON. (Ms.) Krishnan Kalaichelvi", 
        title: "", 
        mobile: "0702845151", 
        telephoneSitting: "0512224774", 
        telephoneNonSitting: "0702845151", 
        addressSitting: "No. 23, Circular Road, Hatton.", 
        addressNonSitting: "No. 23, Circular Road, Hatton.", 
        fax: "0512224774", 
        email: "krishnank@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3513.jpg" 
    },
    { 
        name: "HON. Upul Kithsiri", 
        title: "", 
        mobile: "0714242470", 
        telephoneSitting: "0776267637", 
        telephoneNonSitting: "0472233088", 
        addressSitting: "No.105, Hospital Road, New Town, Ratnapura", 
        addressNonSitting: "515, Susil Mawatha, South Canal, Udawalawa", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3593.jpg" 
    },
    { 
        name: "HON. (Mrs.) Chamindranee Kiriella, Attorney at Law", 
        title: "", 
        mobile: "0777748593", 
        telephoneSitting: "0777748593", 
        telephoneNonSitting: "0777748593", 
        addressSitting: "397/4 kandahenawatte Off Samagi Mawatha, Hokandara", 
        addressNonSitting: "397/4 kandahenawatte Off Samagi Mawatha, Hokandara", 
        fax: "", 
        email: "chamindraneek@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3504.jpg" 
    },
    { 
        name: "HON. Wasantha Pushpa Kumara", 
        title: "", 
        mobile: "0716376386", 
        telephoneSitting: "0716376386", 
        telephoneNonSitting: "0716376386", 
        addressSitting: "8, Kalthota Rd., Balagahamula, Balangoda", 
        addressNonSitting: "8, Kalthota Rd., Balagahamula, Balangoda", 
        fax: "", 
        email: "", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3594.jpg" 
    },
    { 
        name: "HON. Chaminda Lalith Kumara", 
        title: "", 
        mobile: "", 
        telephoneSitting: "", 
        telephoneNonSitting: "", 
        addressSitting: "No: 30/4, Lindara, Pamunuwatta, Mirigama", 
        addressNonSitting: "No: 30/4, Lindara, Pamunuwatta, Mirigama", 
        fax: "", 
        email: "chamindal@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3486.jpg" 
    },
    { 
        name: "HON. Faiszer Musthapha, PC", 
        title: "", 
        mobile: "0777318900", 
        telephoneSitting: "0112671447", 
        telephoneNonSitting: "0777318900", 
        addressSitting: " No. 206/1, Lake Drive, Colombo 08.", 
        addressNonSitting: " No. 206/1, Lake Drive, Colombo 08.", 
        fax: "", 
        email: "musthapha_f@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1432.jpg" 
    },
    { 
        name: "HON. Sarath Kumara, Attorney at Law", 
        title: "", 
        mobile: "0773819310", 
        telephoneSitting: "0714525246", 
        telephoneNonSitting: "0552266197", 
        addressSitting: "Welihinda Watta, Wegama, Bibila", 
        addressNonSitting: "Welihinda Watta, Wegama, Bibila", 
        fax: "", 
        email: "sarathk1@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3587.jpg" 
    },
    { 
        name: "HON. (Mrs.) Nilanthi Kottahachchi, Attorney at Law", 
        title: "", 
        mobile: "0770474489", 
        telephoneSitting: "0770474489", 
        telephoneNonSitting: "0770474489", 
        addressSitting: "12/4A, Daham Patumaga, Indrajothi Mawatha, Thanthirimulla, Panadura", 
        addressNonSitting: "12/4A, Daham Patumaga, Indrajothi Mawatha, Thanthirimulla, Panadura", 
        fax: "", 
        email: "nilanthik@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3488.jpg" 
    },
    { 
        name: "HON. (Mrs.) M.A.C.S. Chathuri Gangani", 
        title: "", 
        mobile: "0712806803", 
        telephoneSitting: "0712806803", 
        telephoneNonSitting: "0712806803", 
        addressSitting: "Ganga Rd, Weerasekara Gama Wellawaya", 
        addressNonSitting: "Ganga Rd, Weerasekara Gama Wellawaya", 
        fax: "", 
        email: "chathurig@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3585.jpg" 
    },
    { 
        name: "HON. Lasith Bhashana Gamage", 
        title: "", 
        mobile: "0773191172", 
        telephoneSitting: "0332223494", 
        telephoneNonSitting: "0332223494", 
        addressSitting: " No: 09, 2nd Lane, Kumarathunga Mawatha, Gampaha.", 
        addressNonSitting: " No: 09, 2nd Lane, Kumarathunga Mawatha, Gampaha.", 
        fax: "", 
        email: "lasithb@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3479.jpg" 
    },
    { 
        name: "HON. Thilanka U. Gamage", 
        title: "", 
        mobile: "0775329994", 
        telephoneSitting: "0912233389", 
        telephoneNonSitting: "0912233389", 
        addressSitting: "Janitha Vimukthi Peramuna Head Office, 464/20, Pannipitiya Road, Battaramulla.", 
        addressNonSitting: "No. 204, Delgahaduwa, Ihala Nakiyadeniya, Nakiyadeniya.", 
        fax: "", 
        email: "thilankau@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3518.jpg" 
    },
    { 
        name: "HON. (Mrs.) Nilusha Lakmali Gamage", 
        title: "", 
        mobile: "0777791824", 
        telephoneSitting: "0777791824", 
        telephoneNonSitting: "0452271144", 
        addressSitting: "142 Main Street, Kahawatta, Ratnapura", 
        addressNonSitting: "142 Main Street, Kahawatta, Ratnapura", 
        fax: "", 
        email: "nilushag@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3595.jpg" 
    },
    { 
        name: "HON. Ajantha Gammeddage", 
        title: "", 
        mobile: "0714469490", 
        telephoneSitting: "0714469490", 
        telephoneNonSitting: "0714469490", 
        addressSitting: "'Saviga', Henegewatta Road, Nandugala, Matara", 
        addressNonSitting: "'Saviga', Henegewatta Road, Nandugala, Matara", 
        fax: "", 
        email: "ajanthag@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3525.jpg" 
    },
    { 
        name: "HON. Chathura Galappaththi", 
        title: "", 
        mobile: "0716000007", 
        telephoneSitting: "0412231120", 
        telephoneNonSitting: "0412238856", 
        addressSitting: " 'Samaragiri', Pamburana, Matara.", 
        addressNonSitting: " 'Samaragiri', Pamburana, Matara.", 
        fax: "", 
        email: "chathurag@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3527.jpg" 
    },
    { 
        name: "HON. Ajith Gihan", 
        title: "", 
        mobile: "0776303632", 
        telephoneSitting: "0776305960", 
        telephoneNonSitting: "0776305960", 
        addressSitting: " No.134/2, Sangattatana Road Puttalam Road, Chilaw.", 
        addressNonSitting: "No.134/2, Sangattatana Road Puttalam Road, Chilaw.", 
        fax: "", 
        email: "ajithg@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3561.jpg" 
    },
    { 
        name: "HON. (Dr.) Jagath Gunawardana", 
        title: "", 
        mobile: "0714432256", 
        telephoneSitting: "0714432256", 
        telephoneNonSitting: "0372229170", 
        addressSitting: "311/7, Negombo Road, Kurunegala", 
        addressNonSitting: "311/7, Negombo Road, Kurunegala", 
        fax: "", 
        email: "jagathg@parliament.lk", 
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3554.jpg" 
    },
    {
        name: "HON. (Mrs.) Samanmali Gunasingha",
        title: "",
        mobile: "0714404610",
        telephoneSitting: "0714404610",
        telephoneNonSitting: "0714404610",
        addressSitting: "No.01 Second Lane . Jambugasmulla Avenue Nugegoda",
        addressNonSitting: "No.01 Second Lane , Jambusamulla Avenue Nugegoda",
        fax: "",
        email: "samanmalig@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3470.jpg"
      },
      {
        name: "HON. Ashoka Gunasena",
        title: "",
        mobile: "0776855419",
        telephoneSitting: "0776855419",
        telephoneNonSitting: "0776855419",
        addressSitting: "No : 192 Abbowa Alawwa",
        addressNonSitting: "No : 192 Abbowa Alawwa",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3555.jpg"
      },
      {
        name: "HON. Gayan Janaka",
        title: "",
        mobile: "0763203457",
        telephoneSitting: "0763203457",
        telephoneNonSitting: "0763203457",
        addressSitting: "119/2 , 3rd Lane . Sapumalwaththa Chillaw",
        addressNonSitting: "119/2 , 3rd Lane , Sapumalwaththa Chillaw",
        fax: "",
        email: "gayanj@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3562.jpg"
      },
    {
        name: "HON. Ruwanthilaka Jayakody",
        title: "",
        mobile: "0740687400",
        telephoneSitting: "0740687400",
        telephoneNonSitting: "0740687400",
        addressSitting: "94 / D , Dolagatha Road , Udugampala .",
        addressNonSitting: "94 / D , Dolagatha Road , Udugampala .",
        fax: "",
        email: "ruwanthilakaj@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3482.jpg"
    },
    {
        name: "HON. Dilith Jayaweera",
        title: "",
        mobile: "0777802067",
        telephoneSitting: "0115300600",
        telephoneNonSitting: "0112769946",
        addressSitting: "4/6 , Jeswell Place ,\nMirihana ,\nNugegoda",
        addressNonSitting: "4/6 , Jeswell Place ,\nMirihana .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3620.jpg"
      },
      {
        name: "HON. Kosala Nuwan Jayaweera",
        title: "",
        mobile: "0714524898",
        telephoneSitting: "0714524898",
        telephoneNonSitting: "0779484898",
        addressSitting: "137 / A / 2\nNapawala ,\nAwissawella .",
        addressNonSitting: "137 / A / 2\nNapawala ,\nAwissawella .",
        fax: "",
        email: "kosalaj@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3598.jpg"
      },
      {
        name: "HON. (Mrs.) Thushari Jayasingha, Attorney at Law",
        title: "",
        mobile: "0714159151",
        telephoneSitting: "0542222069",
        telephoneNonSitting: "0542222069",
        addressSitting: "No. 14 ,\nBaily Road ,\nNawalapitiya .",
        addressNonSitting: "No. 14 ,\nBaily Road ,\nNawalapitiya .",
        fax: "",
        email: "tusharij@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3502.jpg"
      },
      {
        name: "HON . T.K. Jayasundara",
        title: "",
        mobile: "0715782954",
        telephoneSitting: "0912233389",
        telephoneNonSitting: "0912233389",
        addressSitting: "464/20 , Pannipitiya Road ,\nPelawatta ,\nBattaramulla .",
        addressNonSitting: "31 A , Peella Road , Mount\nPlasant ,\nHapugala\nWackwella",
        fax: "",
        email: "jayasundaratk@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3520.jpg"
      },
      {
        name: "HON. Mayilvaganam Jegatheeswaran",
        title: "",
        mobile: "0776735902",
        telephoneSitting: "0706735902",
        telephoneNonSitting: "0776735902",
        addressSitting: "No. 12 A , Main Road , Kumankulam , Vavuniya",
        addressNonSitting: "No.12 A , Main Road , Kumankulam , Vavuniya",
        fax: "",
        email: "jegatheeswaranm@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3537.jpg"
      },
      {
        name: "HON. Rajeevan Jeyachandramoorthy",
        title: "",
        mobile: "0773400418",
        telephoneSitting: "0773400418",
        telephoneNonSitting: "0773400418",
        addressSitting: "No. 320/3 , Pointpedro Road , Anaipandhi , Jaffna .",
        addressNonSitting: "No. 320/3 , Pointpedro Road , Anaipandhi , Jaffna .",
        fax: "",
        email: "rajeevanj@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3534.jpg"
      },
      {
        name: "HON , M.A.M. Thahir",
        title: "",
        mobile: "0772915188",
        telephoneSitting: "0672250188",
        telephoneNonSitting: "0672250188",
        addressSitting: "175A . Imam Roomy Vidyalaya Road , Nintavur - 02",
        addressNonSitting: "175A . Imam Roomy Vidyalaya Road , Nintavur - 02",
        fax: "",
        email: "thahin @ parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3546.jpg"
      },
      {
        name: "HON. Sellaththamby Thilaganathan",
        title: "",
        mobile: "0774244477",
        telephoneSitting: "0774244477",
        telephoneNonSitting: "0242225652",
        addressSitting: "No. 4 kalikovil road , koomankulam , Vavuniya .",
        addressNonSitting: "No. 4 kalikovil road , koomankulam , Vavuniya .",
        fax: "",
        email: "thilaganathans@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3536.jpg"
      },
      {
        name: "HON. (Mrs.) Anushka Thilakarathne , Attorney at Law",
        title: "",
        mobile: "0718316045",
        telephoneSitting: "0718316045",
        telephoneNonSitting: "0718316045",
        addressSitting: "No. 48 , Weerapura , Wijabahukanda , Via Hatton .",
        addressNonSitting: "No. 48 , Weerapura , Wijabahukanda , Via Hatton .",
        fax: "",
        email: "anushkat@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3512.jpg"
      },
      {
        name: "HON . Chandana Thennakoon",
        title: "",
        mobile: "0771334201",
        telephoneSitting: "0771334201",
        telephoneNonSitting: "0771334201",
        addressSitting: "No.73 / 2 , Senarathgama , Nelumpathgama Mahagalkadawala",
        addressNonSitting: "No.73 / 2 , Senarathgama , Nelumpathgama Mahagalkadawala",
        fax: "",
        email: "chandanat@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3557.jpg"
      },
      {
        name: "HON. Sugath Wasantha de Silva",
        title: "",
        mobile: "0716875484",
        telephoneSitting: "0773763558",
        telephoneNonSitting: "0716875484",
        addressSitting: "431/6 , Sampath sewana , Talagalawatta road , Thalagala , Kiriwanthuduwa .",
        addressNonSitting: "431/6 , Sampath sewana . Talagalawatta road , Thalagala , Kiriwanthuduwa .",
        fax: "",
        email: "sugathw@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3617.jpg"
      },
      {
        name: "HON. Thanura Dissanayake",
        title: "",
        mobile: "0717049493",
        telephoneSitting: "0717049493",
        telephoneNonSitting: "0717049493",
        addressSitting: "No. 85/A . Warapitiya , Kundasale .",
        addressNonSitting: "No. 85/A , Warapitiya , Kundasale .",
        fax: "",
        email: "thanurad@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3499.jpg"
      },
      {
        name: "HON. Dharmapriya Dissanayake",
        title: "",
        mobile: "0714260092",
        telephoneSitting: "0714260092",
        telephoneNonSitting: "0714260092",
        addressSitting: "Pahala Kubalpola ,\nKubalapola ,\nBoyagane .",
        addressNonSitting: "Pahala Kubalpola ,\nKubalapola ,\nBoyagane .",
        fax: "",
        email: "dhrmapriyad@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3558.jpg"
      },
      {
        name: "HON. Sujeewa Dissanayake",
        title: "",
        mobile: "0715814854",
        telephoneSitting: "0715814854",
        telephoneNonSitting: "0714012465",
        addressSitting: "Dampitiya ,\nEthanawaththa",
        addressNonSitting: "Dampitiya ,\nEthanawaththa",
        fax: "",
        email: "sujeewad@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3550.jpg"
      },
      {
        name: "HON. Susantha Dodawatta, Attorney at Law",
        title: "",
        mobile: "0772987288",
        telephoneSitting: "0772987288",
        telephoneNonSitting: "0112618004",
        addressSitting: "120/124 , CT Garden ,\nGangarama Road ,\nPiliyandala .",
        addressNonSitting: "120/124 , CT Garden ,\nGangarama Road ,\nPiliyandala .",
        fax: "",
        email: "susanthad@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3468.jpg"
      },
      {
        name: "HON . Susantha Kumara Nawarathna",
        title: "",
        mobile: "0770086443",
        telephoneSitting: "0770086443",
        telephoneNonSitting: "0716540533",
        addressSitting: "464/20 , Pannipitiya Road , Pelawatta Battaramulla",
        addressNonSitting: "1191/85 . Second Stage . Anuradapura .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3569.jpg"
      },
      {
        name: "HON. (Prof.) Sena Nanayakkara",
        title: "",
        mobile: "0718101539",
        telephoneSitting: "0252266789",
        telephoneNonSitting: "0252266844",
        addressSitting: "\"Sajana\" , 5th Lane , Kurundankulama , Anuradhapura .",
        addressNonSitting: "\"Sajana\" , 5th Lane . Kurundankulama , Anuradhapura .",
        fax: "",
        email: "senan@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3567.jpg"
      },
      {
        name: "HON. Nandana Pathmakumara",
        title: "",
        mobile: "0715566242",
        telephoneSitting: "0382285274",
        telephoneNonSitting: "0382285274",
        addressSitting: "No 18 Chamlipura Moronthuduwa",
        addressNonSitting: "No 18 Chamlipura Moronthuduwa",
        fax: "",
        email: "nandanapk@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3494.jpg"
      },
      {
        name: "HON. Aruna Panagoda",
        title: "",
        mobile: "0718135160",
        telephoneSitting: "0718135160",
        telephoneNonSitting: "0718135160",
        addressSitting: "130/C, Palagama, Polgasowita",
        addressNonSitting: "130/C, Palagama, Polgasowita",
        fax: "",
        email: "arunap@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3462.jpg"
      },
      {
        name: "HON. Nimal Palihena",
        title: "",
        mobile: "0716838739",
        telephoneSitting: "0252226989",
        telephoneNonSitting: "0252226989",
        addressSitting: "581/43 Thammannakulama Anuradhapura",
        addressNonSitting: "581/43 Thammannakulama Anuradhapura",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3571.jpg"
      },
      {
        name: "HON. Nishantha Perera",
        title: "",
        mobile: "0701073538",
        telephoneSitting: "0912233389",
        telephoneNonSitting: "0912233389",
        addressSitting: "464/20 Pannipitiya Road . Pelawatte , Battaramulla .",
        addressNonSitting: "464/20 Pannipitiya Road , Pelawatte . Battaramulla .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3519.jpg"
      },
      {
        name: "HON. Chithral Fernando, Attorney at Law",
        title: "",
        mobile: "0777566847",
        telephoneSitting: "0312245730",
        telephoneNonSitting: "0312245730",
        addressSitting: "No. 632 , Convent Road , Wennaopuwa .",
        addressNonSitting: "No. 632 , Convent Road , Wennaopuwa .",
        fax: "",
        email: "chithralfernando@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3566.jpg"
      },
      {
        name: "HON. Stepni Fernando",
        title: "",
        mobile: "9471435143",
        telephoneSitting: "0112232564",
        telephoneNonSitting: "0112232564",
        addressSitting: "No : 170/3 Wevala Ja- Ela 11350",
        addressNonSitting: "No : 170/3 Wevala Ja - Ela 11350",
        fax: "",
        email: "stepnif@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3485.jpg"
      },
      {
        name: "HON. Kanthasamy Prabu",
        title: "",
        mobile: "0771266464",
        telephoneSitting: "0740081358",
        telephoneNonSitting: "0758565843",
        addressSitting: "No 54/6 , 7th cross street Iruthayapuram West Batticaloa",
        addressNonSitting: "No 54/6 , 7th cross street Iruthayapuram West Batticaloa",
        fax: "",
        email: "prabuk@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3540.jpg"
      },
      {
        name: "HON. Amila Prasad",
        title: "",
        mobile: "0770727199",
        telephoneSitting: "0332234444",
        telephoneNonSitting: "0332287886",
        addressSitting: "105/G , Balabowa , Dewalapola .",
        addressNonSitting: "105/G , Balabowa , Dewalapola .",
        fax: "",
        email: "amilap@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3487.jpg"
      },
      {
        name: "HON. Lal Premanath",
        title: "",
        mobile: "0779308536",
        telephoneSitting: "0779308536",
        telephoneNonSitting: "0714121786",
        addressSitting: "1/120 , \" Vasana \" . Deniyaya Road , Waralla , Matara .",
        addressNonSitting: "1/120 , \" Vasana \" , Deniyaya Road , Waralla , Matara .",
        fax: "",
        email: "lalpre@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3526.jpg"
      },
      {
        name: "HON. Nanda Bandara",
        title: "",
        mobile: "0762253458",
        telephoneSitting: "",
        telephoneNonSitting: "0762253458",
        addressSitting: "244 , Kalwana , Annayaka .",
        addressNonSitting: "244 , Kalwana , Annayaka .",
        fax: "",
        email: "nandab@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3603.jpg"
      },
      {
        name: "HON . Padmasiri Bandara",
        title: "",
        mobile: "0703333179",
        telephoneSitting: "0274321010",
        telephoneNonSitting: "0274321010",
        addressSitting: "464/20 , Pannipitiya Road Pelawatta Battaramulla",
        addressNonSitting: "4/7 , Yatiyal Pathana South Pinpara Kawudulla",
        fax: "",
        email: "bandaranrp @ parliament . Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3577.jpg"
      },
      {
        name: "HON . Ravindra Bandara",
        title: "",
        mobile: "0777621701",
        telephoneSitting: "0777621701",
        telephoneNonSitting: "0777621701",
        addressSitting: "Highland Nursery Badulla Road Bandarawela",
        addressNonSitting: "Highland Nursery Badulla Road Bandarawela",
        fax: "",
        email: "ravindrab@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3580.jpg"
      },
      {
        name: "HON. Sudath Balagalla",
        title: "",
        mobile: "0774005006",
        telephoneSitting: "0774005006",
        telephoneNonSitting: "0774005006",
        addressSitting: "Padiyathalawa Road , Mahiyanganaya .",
        addressNonSitting: "Padiyathalawa Road . Mahiyanganaya .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3581.jpg"
      },
      {
        name: "HON. (Dr.) S. Sri Bavanandarajah",
        title: "",
        mobile: "0777570161",
        telephoneSitting: "0112363955",
        telephoneNonSitting: "0777570161",
        addressSitting: "12.B / 2 / 1 , 46th Lanc , Wellawatta , Colombo 06 .",
        addressNonSitting: "Tellippalai , Pandaterappu Road , Ampanai , Tellippalai .",
        fax: "",
        email: "sribavanandarajahs@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3533.jpg"
      },
      {
        name: "HON. E.M. Basnayaka",
        title: "",
        mobile: "0717641127",
        telephoneSitting: "0717641127",
        telephoneNonSitting: "0717641127",
        addressSitting: "No 516/2 , Mahayaya , Ulpathagama .",
        addressNonSitting: "No 516/2 , Mahayaya , Ulpathagama .",
        fax: "",
        email: "basnayaka@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3500.jpg"
      },
      {
        name: "HON. Wijesiri Basnayake .",
        title: "",
        mobile: "0777758615",
        telephoneSitting: "0777758615",
        telephoneNonSitting: "0777758615",
        addressSitting: "\" Pahala Alhena \" . Kandegedara , Maharachchimulla",
        addressNonSitting: "\" Pahala Alhena \" , Kandegedara , Maharachchimulla",
        fax: "",
        email: "wijeb@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3551.jpg"
      },
      {
        name: "HON. Sunil Biyanwila",
        title: "",
        mobile: "0779061916",
        telephoneSitting: "0779061916",
        telephoneNonSitting: "0779061916",
        addressSitting: "Ehelepola , Pallepola",
        addressNonSitting: "Ehelepola , Pallepola",
        fax: "",
        email: "biyanwilas@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3506.jpg"
      },
      {
        name: "HON . (Dr.) Sandaruwan Madarasinghe",
        title: "",
        mobile: "0769194703",
        telephoneSitting: "0769194703",
        telephoneNonSitting: "0769194703",
        addressSitting: "Pelawatta , Pallekanda , Walasmulla .",
        addressNonSitting: "Pelawatta , Pallekanda , Walasmulla .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3529.jpg"
      },
      {
        name: "HON . Lieutenant Commander (Rtd.) Prageeth Madhuranga",
        title: "",
        mobile: "0718199392",
        telephoneSitting: "0718199392",
        telephoneNonSitting: "0332209392",
        addressSitting: "44/18 , Kochchiwatta , Weliveriya .",
        addressNonSitting: "44/18 , Kochchiwatta , Weliveriya .",
        fax: "",
        email: "prageethm@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3480.jpg"
      },
      {
        name: "HON. Jagath Manuwarna",
        title: "",
        mobile: "0760642059",
        telephoneSitting: "0760642059",
        telephoneNonSitting: "0760642059",
        addressSitting: "162 , Belwood , Galaha .",
        addressNonSitting: "162 . Belwood , Galaha .",
        fax: "",
        email: "manuwarna@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3496.jpg"
      },
      {
        name: "HON. Chanaka Madugoda",
        title: "",
        mobile: "0715364438",
        telephoneSitting: "0912246790",
        telephoneNonSitting: "0717364438",
        addressSitting: "\" Sampath \" , Navinna Raod , Hapugala , Wakwella .",
        addressNonSitting: "\" Sampath \" , Navinna Raod , Hapugala , Wakwella .",
        fax: "",
        email: "chanakam@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3521.jpg"
      },
      {
        name: "HON. Ruwan Mapalagama",
        title: "",
        mobile: "0772294732",
        telephoneSitting: "0715109004",
        telephoneNonSitting: "0112240272",
        addressSitting: "NO 339 Bollatha Ganemulla",
        addressNonSitting: "NO 339 Bollatha Ganemulla",
        fax: "",
        email: "ruwanm @ parliament . Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3478.jpg"
      },
      {
        name: "HON. (Dr.) Nandana Millagala.",
        title: "",
        mobile: "0718001791",
        telephoneSitting: "0718001791",
        telephoneNonSitting: "0372241990",
        addressSitting: "464/20 , Pannipitiya Road , Pelawatta , Battaramulla .",
        addressNonSitting: "B 40/3 , Godapola , Imbulgasdeniya",
        fax: "",
        email: "nandanam@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3601.jpg"
      },
      {
        name: "HON. Riyas Farook",
        title: "",
        mobile: "0773240278",
        telephoneSitting: "0772929695",
        telephoneNonSitting: "0772929695",
        addressSitting: "281 , Hingurumuduna Road , Dematagahamulathenna , Akurana .",
        addressNonSitting: "281 , Hingurumuduna Road , Dematagahamulathenna . Akurana .",
        fax: "",
        email: "riyasf@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3501.jpg"
      },
      {
        name: "HON. Danushka Ranganath",
        title: "",
        mobile: "0715912908",
        telephoneSitting: "0715912908",
        telephoneNonSitting: "0715912908",
        addressSitting: "13 Mail Spot . 12 Mawatha , Thinniyawala , Agalawatta .",
        addressNonSitting: "13 Mail Spot . 12 Mawatha , Thinniyawala , Agalawatta .",
        fax: "",
        email: "dhanushkar@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3491.jpg"
      },
      {
        name: "HON. Sanjeewa Ranasingha",
        title: "",
        mobile: "0704339583",
        telephoneSitting: "0342240015",
        telephoneNonSitting: "0342273994",
        addressSitting: "\" Singhapaya \" , Uragoda , Welipanna .",
        addressNonSitting: "\" Singhapaya \" , Uragoda , Welipanna .",
        fax: "",
        email: "sanjeewar@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3490.jpg"
      },
      {
        name: "HON. Sunil Rathnasiri",
        title: "",
        mobile: "0718619750",
        telephoneSitting: "0274321010",
        telephoneNonSitting: "0710604201",
        addressSitting: "No. 448/1 , Palugasdamana Polonnaruwa",
        addressNonSitting: "No. 448/1 , Palugasdamana Polonnaruwa",
        fax: "",
        email: "sunilr@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3576.jpg"
      },
      {
        name: "HON. Manjula Sugath Rathnayaka",
        title: "",
        mobile: "0711624260",
        telephoneSitting: "0632050685",
        telephoneNonSitting: "0632050685",
        addressSitting: "51/A , 2nd Lane , Nawagampura , Ampara .",
        addressNonSitting: "51/A , 2nd Lane , Nawagampura . Ampara .",
        fax: "",
        email: "manjular@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3542.jpg"
      },
      {
        name: "HON. Suranga Rathnayaka",
        title: "",
        mobile: "0770296837",
        telephoneSitting: "0774785777",
        telephoneNonSitting: "0770296837",
        addressSitting: "Dambuluhalmillewa , Kakirawa .",
        addressNonSitting: "Dambuluhalmillewa , Kakirawa .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3573.jpg"
      },
      {
        name: "HON. (Mrs.) Α.Μ.Μ.M. Rathwaththe",
        title: "",
        mobile: "0729967296",
        telephoneSitting: "0729967296",
        telephoneNonSitting: "0729967296",
        addressSitting: "212 , Kelegama , Nawamedagama , Dehiaththakandiya",
        addressNonSitting: "212 , Kelegama , Nawamedagama , Dehiaththakandiya",
        fax: "",
        email: "mrathwaththe @ parliament . Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3544.jpg"
      },
      {
        name: "HON. Thurairasa Ravikaran",
        title: "",
        mobile: "0770657751",
        telephoneSitting: "0770657751",
        telephoneNonSitting: "0770657751",
        addressSitting: "Kallappadu North , Mulathiu",
        addressNonSitting: "Kallappadu North , Mulathiu",
        fax: "",
        email: "ravikaran@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3538.jpg"
      },
      {
        name: "HON. Manoj Rajapaksha",
        title: "",
        mobile: "0760835066",
        telephoneSitting: "",
        telephoneNonSitting: "0760835066",
        addressSitting: "No. 464/20 , Pannipitiya Road , Pelawatta , Battaramulla",
        addressNonSitting: "No. D 81/2 , Polwatta , Metiyagane . Beligala ( Sabaragamuwa Province )",
        fax: "",
        email: "manojr@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3600.jpg"
      },
      {
        name: "HON. Sunil Rajapaksha",
        title: "",
        mobile: "0714448282",
        telephoneSitting: "0714448282",
        telephoneNonSitting: "0772500800",
        addressSitting: "Koratuwegoda Opanayaka - 70080",
        addressNonSitting: "Koratuwegoda Opanayaka - 70080",
        fax: "",
        email: "rajapakses@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3592.jpg"
      },
      {
        name: "HON. (Mrs.) Hasara Liyanage, Attorney at Law",
        title: "",
        mobile: "0702826608",
        telephoneSitting: "0702826608",
        telephoneNonSitting: "0342270546",
        addressSitting: "\" Eco Star Farm House \" , Kommala , Benthota .",
        addressNonSitting: "\" Eco Star Farm House \" , Kommala . Benthota .",
        fax: "",
        email: "hasaral@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3516.jpg"
      },
      {
        name: "HON. (Mrs.) Deepthi Wasalage",
        title: "",
        mobile: "0777938863",
        telephoneSitting: "0777938863",
        telephoneNonSitting: "0777938863",
        addressSitting: "2/1C , Aittaliyadda road . 2nd mile post , Kumbiyangoda , Matale .",
        addressNonSitting: "2/1C . Aittaliyadda road , 2nd mile post , Kumbiyangoda , Matale .",
        fax: "",
        email: "deepthiw@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3507.jpg"
      },
      {
        name: "HON. Kanchana Welipitiya",
        title: "",
        mobile: "0718316398",
        telephoneSitting: "0352230380",
        telephoneNonSitting: "0352282567",
        addressSitting: "\" Siyambalagahawatta \" . Kobbewala . Galigamuwa Town .",
        addressNonSitting: "\" Siyambalagahawatta \" , Kobbewala , Galigamuwa Town .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3602.jpg"
      },
      {
        name: "HON. R.G. Wijerathna",
        title: "",
        mobile: "0764373273",
        telephoneSitting: "0812365391",
        telephoneNonSitting: "0812365391",
        addressSitting: "165, Rathmetiya, Rikillagaskada .",
        addressNonSitting: "165, Rathmetiya, Rikillagaskada .",
        fax: "",
        email: "wijerathna@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3511.jpg"
      },
      {
        name: "HON, Priyantha Wijerathna, Attorney at Law",
        title: "",
        mobile: "0715425434",
        telephoneSitting: "0632052909",
        telephoneNonSitting: "0632052909",
        addressSitting: "28/189/C , Weranketagoda , Ampara .",
        addressNonSitting: "28/189/C, Weranketagoda , Ampara .",
        fax: "",
        email: "priyanthaw@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3543.jpg"
      },
      {
        name: "HON. Ruwan Wijeweera",
        title: "",
        mobile: "0703445592",
        telephoneSitting: "0703445592",
        telephoneNonSitting: "0552273580",
        addressSitting: "477/A , Kataragama Road , Buttala .",
        addressNonSitting: "477/A , Kataragama Road , Buttala .",
        fax: "",
        email: "ruwanw @ parliament . Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3586.jpg"
      },
      {
        name: "HON. Darmapriya Wijesinghe",
        title: "",
        mobile: "0718522029",
        telephoneSitting: "0718522029",
        telephoneNonSitting: "0718522029",
        addressSitting: "4 D1, Lansiyawadiya, Kotugoda .",
        addressNonSitting: "4 D1, Lansiyawadiya, Kotugoda .",
        fax: "0332235406",
        email: "wijesinghed@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3477.jpg"
      },
      {
        name: "HON. (Mrs.) Hiruni Wijesinghe, Attorney at Law",
        title: "",
        mobile: "0773859493",
        telephoneSitting: "0717474540",
        telephoneNonSitting: "0717474540",
        addressSitting: "No.75/A, Nelumpokuna, Madampe.",
        addressNonSitting: "No.75/A, Nelumpokuna, Madampe .",
        fax: "",
        email: "hiruniw@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3563.jpg"
      },
      {
        name: "HON. Asitha Niroshana Egoda Vithana",
        title: "",
        mobile: "0770748340",
        telephoneSitting: "0770748340",
        telephoneNonSitting: "0770748340",
        addressSitting: "412/G, Sri Sumanathissa Mawatha, Nawagamuwa South, Ranala .",
        addressNonSitting: "412/G, Sri Sumanathissa Mawatha, Nawagamuwa South, Ranala .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3466.jpg"
      },
      {
        name: "HON. Jagath Vithana",
        title: "",
        mobile: "0777411034",
        telephoneSitting: "0342243006",
        telephoneNonSitting: "0342247651",
        addressSitting: "No.51, Jagath Trade centre, Ist Floor, Agalawaththa Road, Mathugama",
        addressNonSitting: "No.51, Jagath Trade centre, 1st Floor, Agalawaththa Road, Mathugama",
        fax: "",
        email: "jagathy@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3495.jpg"
      },
      {
        name: "HON. Athula Welandagoda",
        title: "",
        mobile: "0760652482",
        telephoneSitting: "0472242302",
        telephoneNonSitting: "0702043003",
        addressSitting: "kurulu uyana mawatha, Ginigalllanda, Hungama",
        addressNonSitting: "kurulu uyana mawatha, Ginigalllanda, Hungama",
        fax: "",
        email: "athulaw@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3528.jpg"
      },
      {
        name: "HON. Fasmin Sharif",
        title: "",
        mobile: "0777951687",
        telephoneSitting: "0763651687",
        telephoneNonSitting: "0812352427",
        addressSitting: "No. 16/B , Parathota road, Bothalapitiya, Gampola 20500 .",
        addressNonSitting: "No. 16/B, Parathota road, Bothalapitiya, Gampola 20500 .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3503.jpg"
      },
      {
        name: "HON. (Dr.) Pathmanathan Sathiyalingam",
        title: "",
        mobile: "0710732726",
        telephoneSitting: "0710732726",
        telephoneNonSitting: "0710732726",
        addressSitting: "No. 25, 5th Lane, Vairavarpuliyankulam, Vavuniya",
        addressNonSitting: "No. 25, 5th Lanc, Vairavarpuliyankulam, Vavuniya",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3621.jpg"
      },
      {
        name: "HON. Dinindu Saman",
        title: "",
        mobile: "0710330306",
        telephoneSitting: "0710330306",
        telephoneNonSitting: "0710330306",
        addressSitting: "Party Head Quarters Pannipitiya Road , Pelawatta , Battaramulla",
        addressNonSitting: "7/1 , Batuwaththa Lane , Pitawalagama Badulla",
        fax: "",
        email: "dinindus@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3582.jpg"
      },
      {
        name: "HON. Thilina Samarakoon",
        title: "",
        mobile: "0716122711",
        telephoneSitting: "0252264696",
        telephoneNonSitting: "0252264696",
        addressSitting: "No. 08, Shanthagama, Ipalogama .",
        addressNonSitting: "No. 08, Shanthagama, Ipalogama .",
        fax: "",
        email: "thilinas@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3572.jpg"
      },
      {
        name: "HON. (Dr.) Nishantha Samaraweera",
        title: "",
        mobile: "0773042621",
        telephoneSitting: "0773042641",
        telephoneNonSitting: "07730926421",
        addressSitting: "No 51 , Sandasiri Uyana 1 Kuruduwatta Akmeemana",
        addressNonSitting: "No 51 , Sandasiri Uyana 1 Kuruduwatta Akmeemana",
        fax: "",
        email: "nishanthas@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3517.jpg"
      },
      {
        name: "HON. (Ms.) Ambika Samivel",
        title: "",
        mobile: "0771549944",
        telephoneSitting: "0771549944",
        telephoneNonSitting: "",
        addressSitting: "No. 37, Haputale Estate, Haputale",
        addressNonSitting: "No. 37, Haputale Estate, Haputale",
        fax: "",
        email: "ambikas@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3579.jpg"
      },
      {
        name: "HON. (Dr.) Elayathamby Srinath",
        title: "",
        mobile: "0775387081",
        telephoneSitting: "0775387081",
        telephoneNonSitting: "0775387081",
        addressSitting: "No.561/86, Trinco Road, Batticaloa .",
        addressNonSitting: "No.561/86, Trinco Road, Batticaloa .",
        fax: "",
        email: "srinathe@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3539.jpg"
      },
      {
        name: "HON. Shantha Pathma Kumara Subasingha",
        title: "",
        mobile: "0714431483",
        telephoneSitting: "0714431483",
        telephoneNonSitting: "0452121491",
        addressSitting: "No. 105, Hospital Rd, New Town, Rathnapura .",
        addressNonSitting: "Kalugala, Wijeriya ,70348 .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3588.jpg"
      },
      {
        name: "HON. Dewananda Suraweera",
        title: "",
        mobile: "0772496650",
        telephoneSitting: "0112896394",
        telephoneNonSitting: "0112189956",
        addressSitting: "1566/9/15, Sirimal Watta, Kottawa, Pannipitiya.",
        addressNonSitting: "1566/9/15, Sirimal Watta, Kottawa, Pannipitiya.",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3471.jpg"
      },
      {
        name: "HON. Chandana Sooriyaarachchi",
        title: "",
        mobile: "0718178268",
        telephoneSitting: "0112720218",
        telephoneNonSitting: "0362251316",
        addressSitting: "No 55 D, Pahala Kosgama, Kosgama",
        addressNonSitting: "No 55 D, Pahala Kosgama, Kosgama .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3469.jpg"
      },
      {
        name: "HON. Major General (Rtd.) G.D. Sooriyabandara",
        title: "",
        mobile: "0718185933",
        telephoneSitting: "0755920404",
        telephoneNonSitting: "0372230211",
        addressSitting: "235/8/1, Isuru Uyana, Dematagahapelessa, Kurunegala",
        addressNonSitting: "235/8/1, Isuru Uyana, Dematagahapelessa, Kurunegala",
        fax: "",
        email: "gdsbandara@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3556.jpg"
      },
      {
        name: "HON. Aravinda Senarath",
        title: "",
        mobile: "0716982712",
        telephoneSitting: "0472248712",
        telephoneNonSitting: "0472248712",
        addressSitting: "No. 14/3 , Panamura Road , Sapugahavava, Middeniya .",
        addressNonSitting: "No.14/3, Panamura Road , Sapugahayaya, Middeniya .",
        fax: "",
        email: "aravindas@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3530.jpg"
      },
      {
        name: "HON. Kitnan Selvaraj",
        title: "",
        mobile: "0772822449",
        telephoneSitting: "0772822449",
        telephoneNonSitting: "0772822449",
        addressSitting: "ULG Poonagala, Bandarawela",
        addressNonSitting: "ULG Poonagala, Bandarawela",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3578.jpg"
      },
      {
        name: "HON. (Dr.) Janaka Senarathna",
        title: "",
        mobile: "0718381333",
        telephoneSitting: "0718381333",
        telephoneNonSitting: "",
        addressSitting: "No 255/A(30), Kandagewatta Galukagama, Hidellana Ratnapura",
        addressNonSitting: "No 255/A(30), Kandagewatta Galukagama, Hidellana Ratnapura",
        fax: "",
        email: "janakas@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3591.jpg"
      },
      {
        name: "HON. Chandima Hettiaratchi",
        title: "",
        mobile: "0776937422",
        telephoneSitting: "0763886232",
        telephoneNonSitting: "0706937422",
        addressSitting: "196 / 4A , Galle Road , Panadura",
        addressNonSitting: "196 / 4A . Galle Road , Panadura",
        fax: "",
        email: "chandima@parliament.lk",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3493.jpg"
      },
      {
        name: "HON. Champika Hettiarachchi",
        title: "",
        mobile: "0778899581",
        telephoneSitting: "0778899581",
        telephoneNonSitting: "0778899581",
        addressSitting: "No. 293. HK COLLECTION , Kotugoda Road . Seeduwa .",
        addressNonSitting: "No. 293 , HK COLLECTION , Kotugoda Road . Seeduwa .",
        fax: "0112260015",
        email: "champikah@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3481.jpg"
      },
      {
        name: "HON. (Ms.) Lakmali Hemachandra, Attorney at Law",
        title: "",
        mobile: "0776021250",
        telephoneSitting: "0776021250",
        telephoneNonSitting: "0112172871",
        addressSitting: "3D, Sambuddhiwatte, Mattegoda",
        addressNonSitting: "3D, Sambuddhiwatte, Mattegoda",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3614.jpg"
      },
      {
        name: "HON. Dinesh Hemantha",
        title: "",
        mobile: "0713659494",
        telephoneSitting: "0772448361",
        telephoneNonSitting: "0713659494",
        addressSitting: "Karawilahena Road , Naula .",
        addressNonSitting: "Karawilahena Road , Naula .",
        fax: "",
        email: "hemanthad@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3508.jpg"
      },
      {
        name: "HON. (Mrs.) Geetha Herath, Attorney at Law",
        title: "",
        mobile: "0712097549",
        telephoneSitting: "0712097549",
        telephoneNonSitting: "0712097549",
        addressSitting: "No.77, Wewagedara Uyana, Werapola, Wariyapola .",
        addressNonSitting: "No.77, Wewagedara Uyana, Werapola, Wariyapola .",
        fax: "",
        email: "geethah@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3552.jpg"
      },
      {
        name: "HON. Bhagya Sri Herath, Attorney at Law",
        title: "",
        mobile: "0715704749",
        telephoneSitting: "0715704749",
        telephoneNonSitting: "0773164799",
        addressSitting: "464/20 , Pannipitiya Road Pelawatta Battaramulla",
        addressNonSitting: "1191/85 . 2nd lane . Anuradapura",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3570.jpg"
      },
      {
        name: "HON . Muhammad Faizal",
        title: "",
        mobile: "0778200869",
        telephoneSitting: "0778200869",
        telephoneNonSitting: "0778200869",
        addressSitting: "2/D/1 , Elluchchenai Viruthodai , Madurankuli, Puttalam",
        addressNonSitting: "2/D/1 , Elluchchenai Viruthodai , Madurankuli , Puttalam",
        fax: "",
        email: "mfaizal@parliament.Ik",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3565.jpg"
      },
      {
        name: "HON. Ismail Muththu Mohamed",
        title: "",
        mobile: "0776277389",
        telephoneSitting: "",
        telephoneNonSitting: "0776277389",
        addressSitting: "Mannar Road , Salambaikulam , Vavuniya .",
        addressNonSitting: "Mannar Road , Salambaikulam , Vavuniya .",
        fax: "",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3624.jpg"
      },
      {
        name: "HON. XXXXXXXX XXXXXXXX",
        title: "Minister Of XXXXXXXX",
        mobile: "XXXXXXXXXX",
        telephoneSitting: "XXXXXXXXXX",
        telephoneNonSitting: "XXXXXXXXXX",
        addressSitting: "XXXXXXXXXX, XXXXXXXXXX, XXXXXXXXXX",
        addressNonSitting: "XXXXXXXXXX, XXXXXXXXXX, XXXXXXXXXX",
        fax: "XXXXXXXXXX",
        email: "XXXXXXXXX@gmail.com",
        image: "https://static.wixstatic.com/media/e5040e_77e52dc034ff4f659f62dbb0423866e9~mv2.png/v1/fill/w_1692,h_1974,al_c/Placeholder.png"
      },
      {
        name: "HON. M. Nizam Kariapper, PC",
        title: "",
        mobile: "0777308363",
        telephoneSitting: "0777308363",
        telephoneNonSitting: "0777308363",
        addressSitting: "No. 51 , Vauxhall Street , Colombo 02 .",
        addressNonSitting: "No. 51 , Vauxhall Street , Colombo 02 .",
        fax: "011232633",
        email: "",
        image: "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3623.jpg"
      }
      

];

let highlightedIndex = -1;

// Initialize event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const clearButton = document.getElementById('clearButton');
    
    // Add event listeners
    searchBox.addEventListener('input', handleSearchInput);
    searchBox.addEventListener('keydown', navigateSuggestions);
    clearButton.addEventListener('click', clearSearch);
    
    // Initial check for search box content
    updateClearButtonVisibility();
});

function handleSearchInput() {
    showSuggestions();
    updateClearButtonVisibility();
}

function updateClearButtonVisibility() {
    const searchBox = document.getElementById('searchBox');
    const clearButton = document.getElementById('clearButton');
    
    // Show or hide clear button based on search box content
    if (searchBox.value.trim() !== '') {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
}

function showSuggestions() {
    const input = document.getElementById("searchBox").value.toLowerCase().trim();
    const mode = document.getElementById("searchMode").value;
    const suggestionsDiv = document.getElementById("suggestions");
    
    suggestionsDiv.innerHTML = "";
    highlightedIndex = -1;
    
    if (input.length > 0) {
        const suggestions = data
            .filter(item => item[mode]?.toLowerCase().includes(input))
            .slice(0, 10); // Limit to 10 suggestions for performance
            
        suggestionsDiv.style.display = suggestions.length ? "block" : "none"; // Hide if no results
        
        suggestions.forEach((suggestion, index) => {
            const div = document.createElement("div");
            div.innerText = suggestion[mode];
            div.classList.add("suggestion-item");
            div.onclick = () => displayResults(suggestion);
            div.onmouseenter = () => highlightSuggestion(index);
            suggestionsDiv.appendChild(div);
        });
    } else {
        suggestionsDiv.style.display = "none";
    }
}

function navigateSuggestions(event) {
    const suggestionItems = document.querySelectorAll(".suggestion-item");
    if (suggestionItems.length === 0) return;
    
    if (event.key === "ArrowDown") {
        event.preventDefault();
        if (highlightedIndex < suggestionItems.length - 1) {
            highlightedIndex++;
            highlightSuggestion(highlightedIndex);
        }
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (highlightedIndex > 0) {
            highlightedIndex--;
            highlightSuggestion(highlightedIndex);
        }
    } else if (event.key === "Enter") {
        event.preventDefault();
        if (highlightedIndex !== -1) {
            suggestionItems[highlightedIndex].click();
        }
    } else if (event.key === "Escape") {
        document.getElementById("suggestions").style.display = "none";
    }
}

function highlightSuggestion(index) {
    const suggestionItems = document.querySelectorAll(".suggestion-item");
    suggestionItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add("highlighted");
        } else {
            item.classList.remove("highlighted");
        }
    });
    highlightedIndex = index;
}

function displayResults(person) {
    const resultsDiv = document.getElementById("results");
    const suggestionsDiv = document.getElementById("suggestions");
    
    // Update the search box with the selected suggestion
    document.getElementById("searchBox").value = person[document.getElementById("searchMode").value];
    
    // Hide the suggestions
    suggestionsDiv.style.display = "none";
    
    // Show the results
    resultsDiv.innerHTML = `
        <div class="result">
            <img src="${person.image}" alt="Profile Image"><br>
            <strong>${person.name}</strong>
            ${person.title ? `<strong>${person.title}</strong>` : ""}
            <div class="details">
                ${person.mobile ? `<div class="label">Mobile:</div><div class="value">${person.mobile}</div>` : ""}
                ${person.telephoneSitting ? `<div class="label">Telephone (Sitting):</div><div class="value">${person.telephoneSitting}</div>` : ""}
                ${person.telephoneNonSitting ? `<div class="label">Telephone (Non-Sitting):</div><div class="value">${person.telephoneNonSitting}</div>` : ""}
                ${person.fax ? `<div class="label">Fax:</div><div class="value">${person.fax}</div>` : ""}
                ${person.email ? `<div class="label">Email:</div><div class="value">${person.email}</div>` : ""}
                ${person.addressSitting ? `<div class="label">Address (Sitting):</div><div class="value">${person.addressSitting}</div>` : ""}
                ${person.addressNonSitting ? `<div class="label">Address (Non-Sitting):</div><div class="value">${person.addressNonSitting}</div>` : ""}
            </div>
        </div>
    `;
    
    // Make sure the clear button visibility is updated
    updateClearButtonVisibility();
}

function clearSearch() {
    // Clear the search box
    document.getElementById('searchBox').value = '';
    
    // Hide suggestions and results
    document.getElementById('suggestions').style.display = 'none';
    document.getElementById('results').innerHTML = '';
    
    // Hide the clear button
    document.getElementById('clearButton').style.display = 'none';
    
    // Focus on the search box
    document.getElementById('searchBox').focus();
}
