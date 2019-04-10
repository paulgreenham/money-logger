const expenses = [
    {
      "amount": "351.58",
      "group": "food",
      "date": "Tuesday, September 11, 2018 11:22 PM",
      "item": "Bristo"
    },
    {
      "amount": "435.42",
      "group": "food",
      "date": "Saturday, May 5, 2018 2:06 PM",
      "item": "Amril"
    },
    {
      "amount": "249.95",
      "group": "misc",
      "date": "Tuesday, July 17, 2018 4:18 AM",
      "item": "Unq"
    },
    {
      "amount": "711.07",
      "group": "fun",
      "date": "Monday, July 23, 2018 3:16 AM",
      "item": "Codact"
    },
    {
      "amount": "329.24",
      "group": "food",
      "date": "Saturday, May 26, 2018 4:31 AM",
      "item": "Rodeology"
    },
    {
      "amount": "823.24",
      "group": "bills",
      "date": "Monday, October 29, 2018 4:40 AM",
      "item": "Dyno"
    },
    {
      "amount": "383.02",
      "group": "misc",
      "date": "Wednesday, September 19, 2018 11:11 PM",
      "item": "Ziore"
    },
    {
      "amount": "615.51",
      "group": "bills",
      "date": "Sunday, July 22, 2018 12:44 PM",
      "item": "Medcom"
    },
    {
      "amount": "652.00",
      "group": "bills",
      "date": "Tuesday, October 9, 2018 1:47 AM",
      "item": "Tri@Tribalog"
    },
    {
      "amount": "918.46",
      "group": "food",
      "date": "Thursday, March 29, 2018 3:45 PM",
      "item": "Envire"
    },
    {
      "amount": "320.40",
      "group": "misc",
      "date": "Tuesday, January 2, 2018 5:21 PM",
      "item": "Schoolio"
    },
    {
      "amount": "474.73",
      "group": "bills",
      "date": "Tuesday, July 31, 2018 10:55 AM",
      "item": "Zaphire"
    },
    {
      "amount": "94.45",
      "group": "fun",
      "date": "Friday, January 5, 2018 3:12 AM",
      "item": "Autograte"
    },
    {
      "amount": "396.22",
      "group": "bills",
      "date": "Wednesday, April 25, 2018 7:41 AM",
      "item": "Musix"
    },
    {
      "amount": "78.70",
      "group": "fun",
      "date": "Monday, July 16, 2018 11:37 PM",
      "item": "Kog"
    },
    {
      "amount": "368.27",
      "group": "food",
      "date": "Sunday, April 22, 2018 7:24 AM",
      "item": "Besto"
    },
    {
      "amount": "290.10",
      "group": "misc",
      "date": "Tuesday, November 20, 2018 4:05 AM",
      "item": "Zilphur"
    },
    {
      "amount": "89.81",
      "group": "misc",
      "date": "Friday, January 19, 2018 10:24 AM",
      "item": "Artiq"
    },
    {
      "amount": "684.70",
      "group": "food",
      "date": "Saturday, February 3, 2018 5:19 AM",
      "item": "Empirica"
    },
    {
      "amount": "860.07",
      "group": "fun",
      "date": "Wednesday, January 31, 2018 6:58 PM",
      "item": "Digigene"
    },
    {
      "amount": "289.34",
      "group": "food",
      "date": "Tuesday, May 1, 2018 11:14 AM",
      "item": "Exoswitch"
    },
    {
      "amount": "12.12",
      "group": "rent",
      "date": "Friday, January 12, 2018 4:15 AM",
      "item": "Techmania"
    },
    {
      "amount": "883.42",
      "group": "fun",
      "date": "Thursday, October 4, 2018 7:02 PM",
      "item": "Hivedom"
    },
    {
      "amount": "268.07",
      "group": "food",
      "date": "Wednesday, October 17, 2018 1:07 PM",
      "item": "Earbang"
    },
    {
      "amount": "796.93",
      "group": "bills",
      "date": "Wednesday, August 15, 2018 9:40 AM",
      "item": "Lingoage"
    },
    {
      "amount": "449.55",
      "group": "fun",
      "date": "Thursday, March 15, 2018 11:53 AM",
      "item": "Aeora"
    },
    {
      "amount": "799.69",
      "group": "misc",
      "date": "Tuesday, November 20, 2018 1:31 PM",
      "item": "Uni"
    },
    {
      "amount": "441.91",
      "group": "rent",
      "date": "Tuesday, September 11, 2018 6:51 AM",
      "item": "Cuizine"
    },
    {
      "amount": "248.83",
      "group": "misc",
      "date": "Monday, September 3, 2018 12:27 PM",
      "item": "Elpro"
    },
    {
      "amount": "349.02",
      "group": "misc",
      "date": "Monday, November 26, 2018 8:35 AM",
      "item": "Techtrix"
    },
    {
      "amount": "920.95",
      "group": "misc",
      "date": "Tuesday, October 9, 2018 4:35 PM",
      "item": "Unia"
    },
    {
      "amount": "508.37",
      "group": "rent",
      "date": "Thursday, January 25, 2018 12:19 AM",
      "item": "Jamnation"
    },
    {
      "amount": "160.86",
      "group": "misc",
      "date": "Saturday, March 31, 2018 8:11 PM",
      "item": "Portalis"
    },
    {
      "amount": "356.74",
      "group": "food",
      "date": "Wednesday, September 5, 2018 12:52 PM",
      "item": "Flotonic"
    },
    {
      "amount": "10.56",
      "group": "fun",
      "date": "Friday, November 16, 2018 5:34 PM",
      "item": "Soprano"
    },
    {
      "amount": "352.29",
      "group": "bills",
      "date": "Wednesday, April 18, 2018 8:21 PM",
      "item": "Applideck"
    },
    {
      "amount": "490.06",
      "group": "rent",
      "date": "Sunday, June 17, 2018 11:27 PM",
      "item": "Viagreat"
    },
    {
      "amount": "46.45",
      "group": "rent",
      "date": "Sunday, February 25, 2018 7:59 PM",
      "item": "Eclipto"
    },
    {
      "amount": "573.17",
      "group": "bills",
      "date": "Wednesday, March 28, 2018 12:26 AM",
      "item": "Zilencio"
    },
    {
      "amount": "147.75",
      "group": "rent",
      "date": "Wednesday, August 22, 2018 7:52 PM",
      "item": "Krog"
    },
    {
      "amount": "372.58",
      "group": "rent",
      "date": "Tuesday, September 4, 2018 3:22 PM",
      "item": "Qiao"
    },
    {
      "amount": "79.91",
      "group": "misc",
      "date": "Thursday, October 18, 2018 7:09 PM",
      "item": "Zanymax"
    },
    {
      "amount": "61.63",
      "group": "fun",
      "date": "Friday, October 26, 2018 11:01 PM",
      "item": "Coriander"
    },
    {
      "amount": "478.42",
      "group": "food",
      "date": "Sunday, June 17, 2018 2:59 AM",
      "item": "Tingles"
    },
    {
      "amount": "502.04",
      "group": "misc",
      "date": "Wednesday, April 25, 2018 3:29 PM",
      "item": "Exoplode"
    },
    {
      "amount": "333.16",
      "group": "bills",
      "date": "Sunday, May 13, 2018 4:44 AM",
      "item": "Egypto"
    },
    {
      "amount": "104.85",
      "group": "fun",
      "date": "Friday, January 5, 2018 10:04 PM",
      "item": "Oronoko"
    },
    {
      "amount": "433.64",
      "group": "food",
      "date": "Monday, September 17, 2018 5:34 AM",
      "item": "Conferia"
    },
    {
      "amount": "178.34",
      "group": "bills",
      "date": "Friday, March 9, 2018 10:41 PM",
      "item": "Terragen"
    },
    {
      "amount": "565.80",
      "group": "misc",
      "date": "Friday, March 30, 2018 9:52 PM",
      "item": "Rodeomad"
    },
    {
      "amount": "19.39",
      "group": "bills",
      "date": "Monday, February 5, 2018 9:10 PM",
      "item": "Zidox"
    },
    {
      "amount": "585.41",
      "group": "misc",
      "date": "Sunday, October 14, 2018 4:39 PM",
      "item": "Anixang"
    },
    {
      "amount": "809.46",
      "group": "fun",
      "date": "Friday, June 22, 2018 1:50 PM",
      "item": "Pyramia"
    },
    {
      "amount": "129.79",
      "group": "rent",
      "date": "Monday, September 3, 2018 10:33 AM",
      "item": "Buzzopia"
    },
    {
      "amount": "549.82",
      "group": "bills",
      "date": "Saturday, June 16, 2018 7:34 AM",
      "item": "Vicon"
    },
    {
      "amount": "856.65",
      "group": "food",
      "date": "Thursday, July 5, 2018 3:50 AM",
      "item": "Zepitope"
    },
    {
      "amount": "831.01",
      "group": "fun",
      "date": "Friday, October 26, 2018 1:16 AM",
      "item": "Exovent"
    },
    {
      "amount": "484.02",
      "group": "rent",
      "date": "Monday, February 12, 2018 7:41 PM",
      "item": "Insource"
    },
    {
      "amount": "35.12",
      "group": "rent",
      "date": "Friday, September 7, 2018 3:05 AM",
      "item": "Telepark"
    },
    {
      "amount": "932.12",
      "group": "misc",
      "date": "Friday, October 19, 2018 10:59 PM",
      "item": "Fiberox"
    },
    {
      "amount": "722.78",
      "group": "fun",
      "date": "Saturday, July 7, 2018 4:44 AM",
      "item": "Zyple"
    },
    {
      "amount": "957.50",
      "group": "fun",
      "date": "Wednesday, October 3, 2018 4:06 PM",
      "item": "Voipa"
    },
    {
      "amount": "302.43",
      "group": "fun",
      "date": "Saturday, October 20, 2018 4:11 PM",
      "item": "Isotronic"
    },
    {
      "amount": "893.44",
      "group": "misc",
      "date": "Thursday, July 19, 2018 12:08 AM",
      "item": "Cowtown"
    },
    {
      "amount": "78.57",
      "group": "fun",
      "date": "Sunday, December 2, 2018 9:09 AM",
      "item": "Comtext"
    },
    {
      "amount": "163.75",
      "group": "bills",
      "date": "Monday, August 27, 2018 11:35 AM",
      "item": "Yogasm"
    },
    {
      "amount": "580.65",
      "group": "rent",
      "date": "Monday, March 5, 2018 8:45 AM",
      "item": "Jetsilk"
    },
    {
      "amount": "745.75",
      "group": "fun",
      "date": "Tuesday, February 13, 2018 6:55 PM",
      "item": "Quadeebo"
    },
    {
      "amount": "905.03",
      "group": "bills",
      "date": "Thursday, May 3, 2018 1:32 AM",
      "item": "Bovis"
    },
    {
      "amount": "962.52",
      "group": "fun",
      "date": "Sunday, August 19, 2018 9:23 PM",
      "item": "Biohab"
    }
  ]

  module.exports = expenses