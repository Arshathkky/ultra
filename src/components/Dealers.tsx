import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, MapPin, Mail, X, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Dealer = {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  district: string;
  contact: string;
  phone: string;
};

const dealers: Dealer[] = [
  {
    "id": 1,
    "name": "A.G.C.N.Jayasooriya",
    "location": "A.G.C.N.Jayasooriya",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 2,
    "name": "Amex Trading",
    "location": "Amex Trading, Kandy",
    "district": "Kandy",
    "phone": "0775212320",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 3,
    "name": "Asian Picture Palace",
    "location": "Asian Picture Palace, Kurunegala",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 4,
    "name": "Buhari Construction",
    "location": "Buhari Construction, Kaduruwela",
    "district": "Polonnaruwa",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 5,
    "name": "City Picture Palace",
    "location": "City Picture Palace, Kaduruwela",
    "district": "Polonnaruwa",
    "phone": "777327094",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 6,
    "name": "DD Marketing Service (PVT) Ltd",
    "location": "DD Marketing Service (PVT) Ltd, Hedeniya",
    "district": "Kandy",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 7,
    "name": "Globe Glass House",
    "location": "Globe Glass House, Gampola",
    "district": "Kandy",
    "phone": "0812352728",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 8,
    "name": "Hazeem Hardware",
    "location": "Hazeem Hardware, Dippitiya",
    "district": "Kegalle",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 9,
    "name": "Kandurata Glass",
    "location": "Kandurata Glass, Matale",
    "district": "Matale",
    "phone": "773846858",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 10,
    "name": "Kandy Hw",
    "location": "Kandy Hw, Kandy",
    "district": "Kandy",
    "phone": "0773707977",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 11,
    "name": "M.P.P TRADING PVT LTD",
    "location": "M.P.P TRADING PVT LTD, Matara",
    "district": "Matara",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 12,
    "name": "Menik Wine Store",
    "location": "Menik Wine Store, Kadugannawa",
    "district": "Kandy",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 13,
    "name": "Shaf Lanka (Pvt) Ltd",
    "location": "Shaf Lanka (Pvt) Ltd",
    "district": "",
    "phone": "0775822723",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 14,
    "name": "Siyam Aluminium",
    "location": "Siyam Aluminium, Melsiripura",
    "district": "Kurunegala",
    "phone": "787215955",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 15,
    "name": "T C L Aluminium",
    "location": "T C L Aluminium, Pilimathalawa",
    "district": "Kandy",
    "phone": "771764903",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 16,
    "name": "Thoshiba Steel & Ent",
    "location": "Thoshiba Steel & Ent, Balagolla",
    "district": "Kandy",
    "phone": "812424388",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"

  },
  {
    "id": 16,
    "name": "A C U Agri Holdings(Private)Limited.",
    "location": "A C U Agri Holdings(Private)Limited.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 17,
    "name": "Alcon (Pvt) Ltd",
    "location": "Alcon (Pvt) Ltd,Moratuwa.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 18,
    "name": "Alucast Traders",
    "location": "Alucast Traders,Colombo-12",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 19,
    "name": "ALUGROW TRADING PVT LTD.",
    "location": "ALUGROW TRADING PVT LTD.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 20,
    "name": "Ashan Glass & Aluminium",
    "location": "Ashan Glass & Aluminium,Angoda.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 21,
    "name": "Asia Trade Center",
    "location": "Asia Trade Center,Colombo-10.773839755",
    "district": "Colombo",
    "phone": "773839755",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 22,
    "name": "Athurugiriya Aluminium (Private) Limited",
    "location": "Athurugiriya Aluminium (Private) Limited",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 23,
    "name": "Best Aluminium & Accessories",
    "location": "Best Aluminium & Accessories,Kalutara.",
    "district": "Kalutara",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 24,
    "name": "Capital Trade Center",
    "location": "Capital Trade Center ,Ratmalane.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 25,
    "name": "CG Alucare Aluminium",
    "location": "CG Alucare Aluminium,Kaduwela.777049307",
    "district": "Colombo",
    "phone": "777049307",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 26,
    "name": "Chamari Construction(Private) Limited.",
    "location": "Chamari Construction(Private) Limited.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 27,
    "name": "City Glass Centre",
    "location": "City Glass Centre, Colombo- 6",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 28,
    "name": "Colombo Trading Company(Pvt) Ltd",
    "location": "Colombo Trading Company(Pvt) Ltd",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 29,
    "name": "Glass & Aluminium",
    "location": "Glass & Aluminium, Dehiwela North1",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 30,
    "name": "Golden Sun Industries (Pvt) Ltd",
    "location": "Golden Sun Industries (Pvt) Ltd",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 31,
    "name": "Hill Country Farms Ltd.",
    "location": "Hill Country Farms Ltd.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 32,
    "name": "House Of Aluminium (Pvt) Ltd",
    "location": "House Of Aluminium (Pvt) Ltd,Nugegoda.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 33,
    "name": "House Of Shelter (Pvt) Ltd",
    "location": "House Of Shelter (Pvt) Ltd,Athurugiriya.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 34,
    "name": "I S Aluminium Trade Colmb-12",
    "location": "I S Aluminium Trade Colmb-12 114923057",
    "district": "Colombo",
    "phone": "114923057",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 35,
    "name": "Isura Aluminium",
    "location": "Isura Aluminium.Piliyandala.0112618555",
    "district": "Colombo",
    "phone": "0112618555",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 36,
    "name": "Isuru Construction.",
    "location": "Isuru Construction.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 37,
    "name": "K H S CONTRACTORS.",
    "location": "K H S CONTRACTORS.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 38,
    "name": "Kingdom Of Aluminium",
    "location": "Kingdom Of Aluminium,Angoda.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 39,
    "name": "M.K.G Construction(Pvt) Ltd.",
    "location": "M.K.G Construction(Pvt) Ltd.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 40,
    "name": "Max Asia",
    "location": "Max Asia, Colombo 0777483068",
    "district": "Colombo",
    "phone": "0777483068",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 41,
    "name": "Nimal Picture Palace",
    "location": "Nimal Picture Palace,Minuwangoda.",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 42,
    "name": "Nippon City Glass",
    "location": "Nippon City Glass,Awissawela.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 43,
    "name": "N-RICH (PVT) LIMITED",
    "location": "N-RICH (PVT) LIMITED.Ratmalana.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 44,
    "name": "P F Perera Logistic PVT Ltd.",
    "location": "P F Perera Logistic PVT Ltd.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 45,
    "name": "PERERA R.C.J",
    "location": "PERERA R.C.J",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 46,
    "name": "Riwin Hardware",
    "location": "Riwin Hardware,Colombo-12 777398023",
    "district": "Colombo",
    "phone": "777398023",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 47,
    "name": "Roshan Aluminium",
    "location": "Roshan Aluminium,Kaduwela.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 48,
    "name": "Royal Manufacturers (Pvt) Ltd",
    "location": "Royal Manufacturers (Pvt) Ltd,Dehiwela",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 49,
    "name": "Sabith Fabrication",
    "location": "Sabith Fabrication,Panadura.776711245",
    "district": "Kalutara",
    "phone": "776711245",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 50,
    "name": "Sithumana Interior Solutions",
    "location": "Sithumana Interior Solutions,Panagoda.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 51,
    "name": "T.C.I Enterprises(Pvt)Ltd",
    "location": "T.C.I Enterprises(Pvt)Ltd,Nugegoda.",
    "district": "Colombo",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 52,
    "name": "UNi-art Italian Steel Fabrication's",
    "location": "UNi-art Italian Steel Fabrication's",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 53,
    "name": "Waruna Glass Center",
    "location": "Waruna Glass Center,Horana.",
    "district": "Kalutara",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 54,
    "name": "World Of Outdoor(Private) Limited.",
    "location": "World Of Outdoor(Private) Limited.",
    "district": "",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 55,
    "name": "WP Aluminium",
    "location": "WP Aluminium,Kesbewa.773751235",
    "district": "Colombo",
    "phone": "773751235",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 56,
    "name": "Asian Aluminium",
    "location": "Asian Aluminium, Mawanelle.",
    "district": "Kegalle",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 57,
    "name": "Asoka Glass",
    "location": "Asoka Glass Kochchikade 0776646941",
    "district": "Gampaha",
    "phone": "0776646941",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 58,
    "name": "City Glass",
    "location": "City Glass ,Nigambo.0770572267",
    "district": "Gampaha",
    "phone": "0770572267",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 59,
    "name": "Dinusha Picture Palace",
    "location": "Dinusha Picture Palace,Katana773793425",
    "district": "Gampaha",
    "phone": "773793425",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 60,
    "name": "Euro Max Aluminium",
    "location": "Euro Max Aluminium. Mawenella.7788363363",
    "district": "Kegalle",
    "phone": "7788363363",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 61,
    "name": "F.G Glass & Aluminium",
    "location": "F.G Glass & Aluminium Warakapola",
    "district": "Kegalle",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 62,
    "name": "Fine Glass Center",
    "location": "Fine Glass Center,thihariya.0773926396",
    "district": "Gampaha",
    "phone": "0773926396",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 63,
    "name": "Glass & Mirror Work",
    "location": "Glass & Mirror Work,Nigambo 777868830",
    "district": "Gampaha",
    "phone": "777868830",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 64,
    "name": "Glass Emporium",
    "location": "Glass Emporium Negombo",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 65,
    "name": "Glass House",
    "location": "Glass House,Negombo.312237342",
    "district": "Gampaha",
    "phone": "312237342",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 66,
    "name": "GS Glass & Aluminium",
    "location": "GS Glass & Aluminium,Kadawatha.",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 67,
    "name": "H2 Fabricating",
    "location": "H2 Fabricating, Moratuwa. 0776201495",
    "district": "Colombo",
    "phone": "0776201495",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 68,
    "name": "Jayantha Aluminium (PVt) Limited",
    "location": "Jayantha Aluminium (PVt) Limited,Yakkala",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 69,
    "name": "Kulathunga Hardware",
    "location": "Kulathunga Hardware,Dompe.",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 70,
    "name": "Lucky Aluminium",
    "location": "Lucky Aluminium,Thihariya. 775245670",
    "district": "Gampaha",
    "phone": "775245670",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 71,
    "name": "Mihiri Picture Palce",
    "location": "Mihiri Picture Palce,Ja-Ela.",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 72,
    "name": "Modern Glass",
    "location": "Modern Glass - Kochikade 0770439320",
    "district": "Gampaha",
    "phone": "0770439320",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 73,
    "name": "Nawa Lanka Trade",
    "location": "Nawa Lanka Trade 0312281441 / 0774881655",
    "district": "Gampaha",
    "phone": "0312281441 / 0774881655",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 74,
    "name": "Nawala Ceramic",
    "location": "Nawala Ceramic,Thihariya.755107667",
    "district": "Gampaha",
    "phone": "755107667",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 75,
    "name": "New Lanka Glass",
    "location": "New Lanka Glass,NIgambo.312220755",
    "district": "Gampaha",
    "phone": "312220755",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
    {
    "id": 76,
    "name": "AGM- ASIAN INTERIOR DESIGNERS",
    "location": "AGM- ASIAN INTERIOR DESIGNERS, VAVUNIYA",
    "district": "Vavuniya",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 77,
    "name": "AJ Enterprisess",
    "location": "AJ Enterprisess,kilinochi.777395227",
    "district": "Kilinochchi",
    "phone": "777395227",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 78,
    "name": "Asha Picture Palace",
    "location": "Asha Picture Palace, Kilinochi.",
    "district": "Kilinochchi",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 79,
    "name": "Atheeq Picture Palace",
    "location": "Atheeq Picture Palace-Kinniya 0774408008",
    "district": "Trincomalee",
    "phone": "0774408008",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 80,
    "name": "City Hardware & Store",
    "location": "City Hardware & Store, Jaffna 0767676256",
    "district": "Jaffna",
    "phone": "0767676256",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 81,
    "name": "Dilu Aluminium Fitting",
    "location": "Dilu Aluminium Fitting ,Trincomalee.",
    "district": "Trincomalee",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 82,
    "name": "Dinisuha H/w",
    "location": "Dinisuha H/w, Muthur.",
    "district": "Trincomalee",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 83,
    "name": "Glory Aluminium",
    "location": "Glory Aluminium,Jaffna.0212221153",
    "district": "Jaffna",
    "phone": "0212221153",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 84,
    "name": "Jaffna Glass House",
    "location": "Jaffna Glass House,Jaffna.0712769189",
    "district": "Jaffna",
    "phone": "0712769189",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 85,
    "name": "Jazeema Picture Palace",
    "location": "Jazeema Picture Palace,Jaffna 777490282",
    "district": "Jaffna",
    "phone": "777490282",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 86,
    "name": "Kajhanan Picture Palace",
    "location": "Kajhanan Picture Palace,Chankanai",
    "district": "Jaffna",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 87,
    "name": "New Mubarak Agency",
    "location": "New Mubarak Agency Trinco 0772271288",
    "district": "Trincomalee",
    "phone": "0772271288",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 88,
    "name": "North Lanka Aluminium (Pvt) Ltd",
    "location": "North Lanka Aluminium (Pvt) Ltd,Jaffna.",
    "district": "Jaffna",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 89,
    "name": "S L G Aluminium",
    "location": "S L G Aluminium, Vavuniya. (Cash)",
    "district": "Vavuniya",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 90,
    "name": "Selva Brothers",
    "location": "Selva Brothers,Chavakacheri 777245099",
    "district": "Jaffna",
    "phone": "777245099",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 91,
    "name": "SN GLASS HOUSE",
    "location": "SN GLASS HOUSE,Jaffna 07757744819",
    "district": "Jaffna",
    "phone": "07757744819",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 92,
    "name": "T.K Kumarasamy",
    "location": "T.K Kumarasamy ,Jaffna",
    "district": "Jaffna",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 93,
    "name": "Thampu Aluminium (PVT) Ltd",
    "location": "Thampu Aluminium (PVT) Ltd,Vavuniya.",
    "district": "Vavuniya",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 94,
    "name": "Tharan Traders",
    "location": "Tharan Traders ,Jaffna.0212228520",
    "district": "Jaffna",
    "phone": "0212228520",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 95,
    "name": "Thusaani Glass House",
    "location": "Thusaani Glass House,Nelliyady.",
    "district": "Jaffna",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 96,
    "name": "Trust Traders",
    "location": "Trust Traders,trincomalee 0779788898",
    "district": "Trincomalee",
    "phone": "0779788898",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 97,
    "name": "Vamanan Paint Center",
    "location": "Vamanan Paint Center,Chavakachery.",
    "district": "Jaffna",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 98,
    "name": "Vasanth Aluminium & Picture",
    "location": "Vasanth Aluminium& Picture,Khilinochi.",
    "district": "Kilinochchi",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 99,
    "name": "VR 1 Aluminium",
    "location": "VR 1 Aluminium,Vavuniya.",
    "district": "Vavuniya",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
   {
    "id": 100,
    "name": "AA Hardware",
    "location": "AA Hardware,Khobigane.772886263",
    "district": "Kurunegala",
    "phone": "772886263",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 101,
    "name": "Alulux Aluminium (Pvt) Ltd",
    "location": "Alulux Aluminium (Pvt) Ltd,Mahawewa.",
    "district": "Puttalam",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 102,
    "name": "Asian Picture Palace",
    "location": "Asian Picture Palace,Kurunagala.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 103,
    "name": "BIMREX",
    "location": "BIMREX, Anuradhapura.",
    "district": "Anuradhapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 104,
    "name": "City Glass Center",
    "location": "City Glass Center,Hettipola.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 105,
    "name": "Deepthi Glass House",
    "location": "Deepthi Glass House,Narammala.372248191",
    "district": "Kurunegala",
    "phone": "372248191",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 106,
    "name": "G.B.Aluminium",
    "location": "G.B.Aluminium,Tamputhegama.",
    "district": "Anuradhapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 107,
    "name": "Gamodh Construction & Enterprises",
    "location": "Gamodh Construction & Enterprises.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 108,
    "name": "Giriulla Picture Place",
    "location": "Giriulla Picture Place Giriulla",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 109,
    "name": "Grand Aluminium",
    "location": "Grand Aluminium,Alawwe",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 110,
    "name": "Grand Aluminium",
    "location": "Grand Aluminium,Mirigama.",
    "district": "Gampaha",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 111,
    "name": "I M F Glass",
    "location": "I M F Glass ,Polgahawela.715646605",
    "district": "Kurunegala",
    "phone": "715646605",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 112,
    "name": "Koshwatta Picture Palace",
    "location": "Koshwatta Picture Palace,Koshwatta.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 113,
    "name": "Kumbukulawa Glass",
    "location": "Kumbukulawa Glass,Polpitigama.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 114,
    "name": "Madeena Glass House",
    "location": "Madeena Glass House Puttalam 779047661",
    "district": "Puttalam",
    "phone": "779047661",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 115,
    "name": "Needs Lanka Distributors (Pvt) Ltd",
    "location": "Needs Lanka Distributors (Pvt) Ltd",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 116,
    "name": "New Rajarata Glass",
    "location": "New Rajarata Glass,anurathapura713993682",
    "district": "Anuradhapura",
    "phone": "713993682",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 117,
    "name": "New Union Hardware",
    "location": "New Union Hardware,Nikaweratiya.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 118,
    "name": "Nipun Hardware",
    "location": "Nipun Hardware,Kadigamuwa.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 119,
    "name": "Ranjith Construction",
    "location": "Ranjith Construction",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 120,
    "name": "Royal Ceramic",
    "location": "Royal Ceramic ,Siyambalagaskotuwa.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 121,
    "name": "Royal Steel",
    "location": "Royal Steel,Nikaweratiya.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 122,
    "name": "S K Assalaarachchi Constructions",
    "location": "S K Assalaarachchi Constructions",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 123,
    "name": "Saboor Glass House",
    "location": "Saboor Glass House - Puttalam 0776917392",
    "district": "Puttalam",
    "phone": "0776917392",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 124,
    "name": "Sai Aluminium Pvt Ltd",
    "location": "Sai Aluminium Pvt Ltd,Kuliyapitiya.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 125,
    "name": "Shisini Picture Palace",
    "location": "Shisini Picture Palace,Pannala.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 126,
    "name": "Simrana Swisstek Aluminium",
    "location": "Simrana Swisstek Aluminium ,anuradhapura",
    "district": "Anuradhapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 127,
    "name": "Sisila Glass House",
    "location": "Sisila Glass House,Naramala,0713941825",
    "district": "Kurunegala",
    "phone": "0713941825",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 128,
    "name": "Sujeewa Glass House",
    "location": "Sujeewa Glass House,Nikaweratiya.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 129,
    "name": "The Kurunagala Picture Palace",
    "location": "The Kurunagala Picture Palace.0372223529",
    "district": "Kurunegala",
    "phone": "0372223529",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 130,
    "name": "Usara Hardware",
    "location": "Usara Hardware,Kithalawa.0705635636",
    "district": "Kurunegala",
    "phone": "0705635636",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 131,
    "name": "Wayamba Picture Palace",
    "location": "Wayamba Picture Palace,Galgamuwa.",
    "district": "Kurunegala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 132,
    "name": "Amila Aluminium&Glass",
    "location": "Ambalantota",
    "district": "Hambantota",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 133,
    "name": "Asian Glass",
    "location": "Weligama",
    "district": "Matara",
    "phone": "0777906346",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 134,
    "name": "City Plywood",
    "location": "Galla",
    "district": "Matara",
    "phone": "759348872/915716119",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 135,
    "name": "Danushka Glass",
    "location": "Weeravila",
    "district": "Hambantota",
    "phone": "0710105929",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 136,
    "name": "Dikwella Picture Palace",
    "location": "Dikwella",
    "district": "Matara",
    "phone": "77447515",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 137,
    "name": "Harshana Enterprisess",
    "location": "Empilipitiya",
    "district": "Ratnapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 138,
    "name": "Harshi Glass Center",
    "location": "Batapola",
    "district": "Hambantota",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 139,
    "name": "M.P.P TRADING PVT LTD",
    "location": "Matara",
    "district": "Matara",
    "phone": "412224265",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 140,
    "name": "Sasiri Lanka Aluminium",
    "location": "",
    "district": "",
    "phone": "0773385153",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 141,
    "name": "Priyanthi Enterprises",
    "location": "Ambalangoda",
    "district": "Galle",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 142,
    "name": "Tecno Aluminium",
    "location": "Ranna",
    "district": "Hambantota",
    "phone": "714236230",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 143,
    "name": "Weerasigha Aluminium",
    "location": "Ampalanthota",
    "district": "Hambantota",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 144,
    "name": "Wijesuriya Enterprises",
    "location": "Ambalangoda",
    "district": "Galle",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 145,
    "name": "CMS Glass & Fitting Center",
    "location": "Sammanthurai",
    "district": "Ampara",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 146,
    "name": "Dinesha H/W",
    "location": "Wellavaya",
    "district": "Monaragala",
    "phone": "72851743",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 147,
    "name": "Fahim Glass House",
    "location": "Bandarawela",
    "district": "Badulla",
    "phone": "0766756087",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 148,
    "name": "Janaka Aluminium",
    "location": "Lellupitiya",
    "district": "Ratnapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 149,
    "name": "Jayanetthi Construction",
    "location": "Welimada",
    "district": "Badulla",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 150,
    "name": "Lanka Hardware",
    "location": "Badakumbara",
    "district": "Nuwara Eliya",
    "phone": "777898622",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 151,
    "name": "Luky Hardwere",
    "location": "Badulla",
    "district": "Badulla",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 152,
    "name": "Mega Energy Solution (Pvt) Ltd",
    "location": "Buttala",
    "district": "Monaragala",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 153,
    "name": "Nawalanka Distributors",
    "location": "Ehiliyagoda",
    "district": "Ratnapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 154,
    "name": "Orient Trading Company",
    "location": "Ehiliyagoda",
    "district": "Ratnapura",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 155,
    "name": "Sevena Glass House",
    "location": "Balangoda",
    "district": "Ratnapura",
    "phone": "773027315",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 156,
    "name": "Top Power Solution (Pvt) Ltd",
    "location": "",
    "district": "",
    "phone": "0773787133",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 157,
    "name": "Welimada Stores (PVT) Ltd",
    "location": "Welimada",
    "district": "Badulla",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 158,
    "name": "A-Life Tecnologies",
    "location": "Kattankudy",
    "district": "Batticaloa",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  },
  {
    "id": 159,
    "name": "Jiyath Fabricator",
    "location": "Kattankudy",
    "district": "Batticaloa",
    "phone": "",
    "description": "",
    "contact": "",
    "image": "images/logo1.png"
  }


]

export default function BranchCard() {
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [filteredDealers, setFilteredDealers] = useState<Dealer[]>([]);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const allDistricts = Array.from(
    new Set(dealers.map((dealer) => dealer.district).filter(Boolean))
  );

  // 🔎 Filtering logic
  useEffect(() => {
    const filtered = dealers.filter((dealer) => {
      const matchesSearch =
        dealer.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDistrict =
        selectedDistrict === "All" || dealer.district === selectedDistrict;

      return matchesSearch && matchesDistrict;
    });

    setFilteredDealers(filtered);

    // Reset visible counts when filters change
    const initialCounts: Record<string, number> = {};
    filtered.forEach((dealer) => {
      if (!initialCounts[dealer.district]) {
        initialCounts[dealer.district] = 6; // Show 6 initially
      }
    });
    setVisibleCounts(initialCounts);
  }, [searchTerm, selectedDistrict]);

  // 🟢 GSAP animations
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredDealers]);

  // 🟢 Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedDealer(null);
      }
    };

    if (selectedDealer) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedDealer]);

  // 🟢 Group by district
  const groupedDealers = filteredDealers.reduce((acc, dealer) => {
    if (!acc[dealer.district]) {
      acc[dealer.district] = [];
    }
    acc[dealer.district].push(dealer);
    return acc;
  }, {} as Record<string, Dealer[]>);

  const loadMore = (district: string) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [district]: prev[district] + 6,
    }));
  };

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedDealer(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* 🔎 Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by district, name, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* 🏷 District Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedDistrict("All")}
            className={`px-4 py-2 rounded-full border ${
              selectedDistrict === "All"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            All
          </button>
          {allDistricts.map((district) => (
            <button
              key={district}
              onClick={() => setSelectedDistrict(district)}
              className={`px-4 py-2 rounded-full border ${
                selectedDistrict === district
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {district}
            </button>
          ))}
        </div>

        {/* 🟢 Dealers Grid Grouped by District */}
        {Object.entries(groupedDealers).map(([district, dealers]) => {
          const visibleCount = visibleCounts[district] || 6;
          const visibleDealers = dealers.slice(0, visibleCount);

          return (
            <div key={district} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                {district}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleDealers.map((dealer, index) => (
                  <div
                    key={dealer.id}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    onClick={() => setSelectedDealer(dealer)}
                  >
                    <div className="relative">
                      <img
                        src={dealer.image}
                        alt={dealer.name}
                        className="w-full h-48 object-contain p-4"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {dealer.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {dealer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 🔵 Load More Button */}
              {dealers.length > visibleCount && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => loadMore(district)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 🔵 Dealer Details Modal */}
      {selectedDealer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 w-96 max-w-full relative"
            ref={modalRef}
          >
            <button
              onClick={() => setSelectedDealer(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedDealer.image}
              alt={selectedDealer.name}
              className="w-full h-48 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedDealer.name}
            </h3>
            <p className="text-gray-600 mb-4">{selectedDealer.description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {selectedDealer.location}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>District:</strong> {selectedDealer.district}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Contact:</strong> {selectedDealer.contact}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {selectedDealer.phone}
            </p>
 
 
          </div>
        </div>
      )}
    </div>
  );
}