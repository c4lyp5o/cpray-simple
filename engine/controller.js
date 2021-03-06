const Cpray = require('cpray');
const cpray = new Cpray();

exports.comingHome = (req, res, next) => {
    res.render('index', { data: 'none' });
}

exports.scoutingHome = (req, res, next) => {
    const url = req.body.zone;
    res.redirect('/' + url);
}

exports.knowingHome = (req, res, next) => {
    cpray.getTimesbyWeek(req.params.zone)
        .then(data => {
            const zoneNum = req.params.zone;
            const zoneReplace = {
                "kdh01": "KOTA SETAR, POKOK SENA DAN KUBANG PASU",
                "kdh02": "KUALA MUDA, PENDANG DAN YAN",
                "kdh03": "PADANG TERAP DAN SIK",
                "kdh04": "BALING",
                "kdh05": "KULIM DAN BANDAR BAHARU",
                "kdh06": "LANGKAWI",
                "kdh07": "GUNUNG JERAI",
                "mlk01": "SELURUH NEGERI MELAKA",
                "ngs01": "JEMPOL DAN TAMPIN",
                "ngs02": "PORT DICKSON, SEREMBAN, KUALA PILAH, JELEBU DAN REMBAU",
                "phg01": "PULAU TIOMAN",
                "phg02": "ROMPIN, PEKAN, MUADZAM SHAH DAN KUANTAN",
                "phg03": "MARAN, CHENOR, TEMERLOH, BERA, JENGKA DAN JERANTUT",
                "phg04": "BENTONG, RAUB DAN LIPIS",
                "phg05": "BUKIT TINGGI, GENTING SEMPAH, DAN JANDA BAIK",
                "phg06": "CAMERON HIGHLANDS, BUKIT FRASER DAN GENTING HIGHLANDS",
                "prk01": "TAPAH, SLIM RIVER DAN TANJUNG MALIM",
                "prk02": "IPOH, BATU GAJAH, KAMPAR, SG. SIPUT DAN KUALA KANGSAR",
                "prk03": "PENGKALAN HULU, GERIK DAN LENGGONG",
                "prk04": "TEMENGOR DAN BELUM",
                "prk05": "TELUK INTAN, BAGAN DATUK, KG. GAJAH, SERI ISKANDAR, BERUAS, PARIT, LUMUT, SITIAWAN DAN PULAU PANGKOR",
                "prk06": "SELAMA, TAIPING, BAGAN SERAI DAN PARIT BUNTAR",
                "prk07": "BUKIT LARUT",
                "pls01": "SELURUH NEGERI PERLIS",
                "png01": "SELURUH NEGERI PULAU PINANG",
                "sgr01": "HULU SELANGOR, GOMBAK, PETALING/SHAH ALAM, HULU LANGAT DAN SEPANG",
                "sgr02": "SABAK BERNAM DAN KUALA SELANGOR",
                "sgr03": "KLANG DAN KUALA LANGAT",
                "trg01": "KUALA TERENGGANU, MARANG DAN KUALA NERUS",
                "trg02": "BESUT DAN SETIU",
                "trg03": "HULU TERENGGANU",
                "trg04": "DUNGUN DAN KEMAMAN",
                "jhr01": "PULAU AUR DAN PULAU PEMANGGIL",
                "jhr02": "KOTA TINGGI, MERSING DAN JOHOR BAHRU",
                "jhr03": "KLUANG DAN PONTIAN",
                "jhr04": "BATU PAHAT, MUAR, SEGAMAT DAN GEMAS JOHOR",
                "ktn01": "JAJAHAN KOTA BHARU, BACHOK, PASIR PUTEH, TUMPAT , PASIR MAS, TANAH MERAH, MACHANG KUALA KRAI DAN GUA MUSANG (DAERAH CHIKU)",
                "ktn03": "JAJAHAN JELI, GUA MUSANG (DAERAH GALAS DAN BERTAM) DAN JAJAHAN KECIL LOJING",
                "sbh01": "BAHAGIAN SANDAKAN (TIMUR) BANDAR SANDAKAN, BUKIT GARAM, SEMAWANG, TEMANGGONG DAN TAMBISAN",
                "sbh02": "BAHAGIAN SANDAKAN (BARAT) PINANGAH, TERUSAN, BELURAN, KUAMUT DAN TELUPID",
                "sbh03": "BAHAGIAN TAWAU (TIMUR) LAHAD DATU, KUNAK, SILABUKAN, TUNGKU, SAHABAT, DAN SEMPORNA",
                "sbh04": "BAHAGIAN TAWAU (BARAT), BANDAR TAWAU, BALONG, MEROTAI DAN KALABAKAN",
                "sbh05": "BAHAGIAN KUDAT KUDAT, KOTA MARUDU, PITAS DAN PULAU BANGGI",
                "sbh06": "GUNUNG KINABALU",
                "sbh07": "BAHAGIAN PANTAI BARAT KOTA KINABALU, PENAMPANG, TUARAN, PAPAR, KOTA BELUD, PUTATAN DAN RANAU",
                "sbh08": "BAHAGIAN PEDALAMAN (ATAS) PENSIANGAN, KENINGAU, TAMBUNAN DAN NABAWAN",
                "sbh09": "BAHAGIAN PEDALAMAN (BAWAH) SIPITANG, MEMBAKUT, BEAUFORT, KUALA PENYU, WESTON, TENOM DAN LONG PA SIA",
                "swk01": "LIMBANG, SUNDAR, TRUSAN DAN LAWAS",
                "swk02": "NIAH, SIBUTI, MIRI, BEKENU DAN MARUDI",
                "swk03": "TATAU, SUAI, BELAGA, PANDAN, SEBAUH, BINTULU",
                "swk04": "IGAN, KANOWIT, SIBU, DALAT, OYA, BALINGIAN, MUKAH, KAPIT DAN SONG",
                "swk05": "BELAWAI, MATU, DARO, SARIKEI, JULAU, BINTANGOR DAN RAJANG",
                "swk06": "KABONG, LINGGA, SRI AMAN, ENGKELILI, BETONG, SPAOH, PUSA, SARATOK, ROBAN, DEBAK DAN LUBOK ANTU",
                "swk07": "SAMARAHAN, SIMUNJAN, SERIAN, SEBUYAU DAN MELUDAM",
                "swk08": "KUCHING, BAU, LUNDU DAN SEMATAN",
                "swk09": "KAMPUNG PATARIKAN",
                "wly01": "KUALA LUMPUR DAN PUTRAJAYA",
                "wly02": "LABUAN",
            };
            const realZone = zoneReplace[zoneNum];
            // console.log(realZone);
            res.render('index', { data: data, zone: realZone });
        }
        )
        .catch(err => {
            res.status(500).send('error' + err);
        }
    );
}
    