export interface CollegeEvent {
  name: string;
  category: 'Hackathon' | 'Sports' | 'Culture' | 'Techfest';
  prizePool: string;
  schedule: string;
}

export interface College {
  id: string;
  name: string;
  city: string;
  state: string;
  type: 'IIT' | 'NIT' | 'IIIT' | 'BITS' | 'State Govt' | 'Central' | 'Private' | 'Deemed';
  examAccepted: string[];
  famousFest: string;
  website: string;
  established: number;
  events: CollegeEvent[];
}

const RAW_COLLEGES_MAP: Record<string, { name: string; city: string; type: College['type']; esty: number }[]> = {
  "Andhra Pradesh": [
    { name: "IIT Tirupati", city: "Tirupati", type: "IIT", esty: 2015 },
    { name: "NIT Andhra Pradesh", city: "Tadepalligudem", type: "NIT", esty: 2015 },
    { name: "IIIT Sri City", city: "Chittoor", type: "IIIT", esty: 2013 },
    { name: "IIITDM Kurnool", city: "Kurnool", type: "IIIT", esty: 2015 },
    { name: "Andhra University College of Engineering", city: "Visakhapatnam", type: "State Govt", esty: 1946 },
    { name: "Andhra University College of Engineering for Women", city: "Visakhapatnam", type: "State Govt", esty: 1946 },
    { name: "SV University College of Engineering", city: "Tirupati", type: "State Govt", esty: 1959 },
    { name: "Yogi Vemana University College of Engineering", city: "Proddatur", type: "State Govt", esty: 2006 },
    { name: "JNTU Anantapur", city: "Anantapur", type: "State Govt", esty: 1946 },
    { name: "JNTU Kakinada", city: "Kakinada", type: "State Govt", esty: 1946 },
    { name: "JNTU Pulivendula", city: "Pulivendula", type: "State Govt", esty: 2006 },
    { name: "JNTU Vizianagaram", city: "Vizianagaram", type: "State Govt", esty: 2007 },
    { name: "JNTU Kalikiri", city: "Kalikiri", type: "State Govt", esty: 2013 },
    { name: "JNTU Narasaraopet", city: "Narasaraopet", type: "State Govt", esty: 2016 },
    { name: "Sri Krishnadevaraya University College of Engineering", city: "Anantapur", type: "State Govt", esty: 1981 },
    { name: "Rayalaseema University College of Engineering", city: "Kurnool", type: "State Govt", esty: 2008 },
    { name: "University of Hyderabad (SCIS)", city: "Hyderabad", type: "Central", esty: 1974 },
    { name: "K L University", city: "Guntur", type: "Private", esty: 1980 },
    { name: "GITAM University", city: "Visakhapatnam", type: "Private", esty: 1980 },
    { name: "VR Siddhartha Engineering College", city: "Vijayawada", type: "Private", esty: 1977 },
    { name: "GMR Institute of Technology", city: "Rajam", type: "Private", esty: 1997 }
  ],
  "Arunachal Pradesh": [
    { name: "NIT Arunachal Pradesh", city: "Yupia", type: "NIT", esty: 2010 },
    { name: "NERIST", city: "Nirjuli", type: "Central", esty: 1984 }
  ],
  "Assam": [
    { name: "IIT Guwahati", city: "Guwahati", type: "IIT", esty: 1994 },
    { name: "NIT Silchar", city: "Silchar", type: "NIT", esty: 1967 },
    { name: "IIIT Guwahati", city: "Guwahati", type: "IIIT", esty: 2013 },
    { name: "Assam Engineering College", city: "Guwahati", type: "State Govt", esty: 1955 },
    { name: "Jorhat Engineering College", city: "Jorhat", type: "State Govt", esty: 1959 },
    { name: "Bineswar Brahma Engineering College", city: "Kokrajhar", type: "State Govt", esty: 2008 },
    { name: "Barak Valley Engineering College", city: "Karimganj", type: "State Govt", esty: 2017 },
    { name: "Golaghat Engineering College", city: "Golaghat", type: "State Govt", esty: 2018 },
    { name: "Dhemaji Engineering College", city: "Dhemaji", type: "State Govt", esty: 2020 },
    { name: "Assam Science and Technology University", city: "Guwahati", type: "State Govt", esty: 2010 },
    { name: "Tezpur University (CSE)", city: "Tezpur", type: "Central", esty: 1994 },
    { name: "Don Bosco University", city: "Guwahati", type: "Private", esty: 2008 },
    { name: "Kaziranga University", city: "Jorhat", type: "Private", esty: 2012 },
    { name: "Royal Global University", city: "Guwahati", type: "Private", esty: 2013 }
  ],
  "Bihar": [
    { name: "IIT Patna", city: "Patna", type: "IIT", esty: 2008 },
    { name: "NIT Patna", city: "Patna", type: "NIT", esty: 1886 },
    { name: "IIIT Bhagalpur", city: "Bhagalpur", type: "IIIT", esty: 2017 },
    { name: "Central University of South Bihar", city: "Gaya", type: "Central", esty: 2009 },
    { name: "MIT Muzaffarpur", city: "Muzaffarpur", type: "State Govt", esty: 1954 },
    { name: "BCE Bhagalpur", city: "Bhagalpur", type: "State Govt", esty: 1960 },
    { name: "NCE Chandi", city: "Nalanda", type: "State Govt", esty: 2008 },
    { name: "DCE Darbhanga", city: "Darbhanga", type: "State Govt", esty: 2008 },
    { name: "MCE Motihari", city: "Motihari", type: "State Govt", esty: 2008 },
    { name: "LNJPIT Chapra", city: "Saran", type: "State Govt", esty: 1994 },
    { name: "Purnea College of Engineering", city: "Purnea", type: "State Govt", esty: 2017 },
    { name: "GEC Bakhtiyarpur", city: "Patna", type: "State Govt", esty: 2016 },
    { name: "GEC Saharsa", city: "Saharsa", type: "State Govt", esty: 2017 },
    { name: "GEC Supaul", city: "Supaul", type: "State Govt", esty: 2017 },
    { name: "GEC Madhepura", city: "Madhepura", type: "State Govt", esty: 2018 },
    { name: "GEC Kishanganj", city: "Kishanganj", type: "State Govt", esty: 2019 },
    { name: "GEC Araria", city: "Araria", type: "State Govt", esty: 2019 },
    { name: "GEC Katihar", city: "Katihar", type: "State Govt", esty: 2019 },
    { name: "GEC Bhojpur", city: "Bhojpur", type: "State Govt", esty: 2019 },
    { name: "GEC Buxar", city: "Buxar", type: "State Govt", esty: 2019 },
    { name: "GEC West Champaran", city: "Bettiah", type: "State Govt", esty: 2019 },
    { name: "GEC East Champaran", city: "Motihari", type: "State Govt", esty: 2019 },
    { name: "GEC Vaishali", city: "Vaishali", type: "State Govt", esty: 2019 },
    { name: "GEC Jamui", city: "Jamui", type: "State Govt", esty: 2019 },
    { name: "GEC Banka", city: "Banka", type: "State Govt", esty: 2019 },
    { name: "GEC Sheohar", city: "Sheohar", type: "State Govt", esty: 2019 },
    { name: "GEC Sitamarhi", city: "Sitamarhi", type: "State Govt", esty: 2019 },
    { name: "GEC Kaimur", city: "Kaimur", type: "State Govt", esty: 2019 },
    { name: "GEC Aurangabad", city: "Aurangabad", type: "State Govt", esty: 2019 },
    { name: "GEC Jehanabad", city: "Jehanabad", type: "State Govt", esty: 2019 },
    { name: "GEC Gaya", city: "Gaya", type: "State Govt", esty: 2019 },
    { name: "GEC Arwal", city: "Arwal", type: "State Govt", esty: 2019 },
    { name: "GEC Nawada", city: "Nawada", type: "State Govt", esty: 2019 },
    { name: "GEC Rohtas", city: "Sasaram", type: "State Govt", esty: 2019 },
    { name: "GEC Munger", city: "Munger", type: "State Govt", esty: 2019 },
    { name: "GEC Lakhisarai", city: "Lakhisarai", type: "State Govt", esty: 2019 },
    { name: "GEC Sheikhpura", city: "Sheikhpura", type: "State Govt", esty: 2019 },
    { name: "GEC Khagaria", city: "Khagaria", type: "State Govt", esty: 2019 },
    { name: "GEC Begusarai", city: "Begusarai", type: "State Govt", esty: 2019 },
    { name: "GEC Samastipur", city: "Samastipur", type: "State Govt", esty: 2019 },
    { name: "GEC Madhubani", city: "Madhubani", type: "State Govt", esty: 2019 },
    { name: "GEC Siwan", city: "Siwan", type: "State Govt", esty: 2019 },
    { name: "GEC Saran", city: "Saran", type: "State Govt", esty: 2019 },
    { name: "GEC Gopalganj", city: "Gopalganj", type: "State Govt", esty: 2019 },
    { name: "Amity University Patna", city: "Patna", type: "Private", esty: 2017 },
    { name: "Netaji Subhas Institute of Technology", city: "Bihta", type: "Private", esty: 2001 },
    { name: "NSIT", city: "Saraikela", type: "Private", esty: 2001 },
    { name: "Sandip University", city: "Sijoul", type: "Private", esty: 2017 }
  ],
  "Chhattisgarh": [
    { name: "IIT Bhilai", city: "Bhilai", type: "IIT", esty: 2016 },
    { name: "NIT Raipur", city: "Raipur", type: "NIT", esty: 1956 },
    { name: "IIIT Naya Raipur", city: "Raipur", type: "IIIT", esty: 2015 },
    { name: "GEC Raipur", city: "Raipur", type: "State Govt", esty: 2014 },
    { name: "GEC Bilaspur", city: "Bilaspur", type: "State Govt", esty: 1964 },
    { name: "GEC Jagdalpur", city: "Jagdalpur", type: "State Govt", esty: 1983 },
    { name: "Bhilai Institute of Technology", city: "Durg", type: "Private", esty: 1986 },
    { name: "OP Jindal University", city: "Raigarh", type: "Private", esty: 2014 },
    { name: "Amity University Raipur", city: "Raipur", type: "Private", esty: 2014 },
    { name: "Kalinga University", city: "Raipur", type: "Private", esty: 2013 }
  ],
  "Goa": [
    { name: "IIT Goa", city: "Farmagudi", type: "IIT", esty: 2016 },
    { name: "NIT Goa", city: "Farmagudi", type: "NIT", esty: 2010 },
    { name: "Goa College of Engineering", city: "Farmagudi, Ponda", type: "State Govt", esty: 1963 },
    { name: "Don Bosco College of Engineering", city: "Fatorda", type: "Private", esty: 2011 },
    { name: "Padre Conceicao College of Engineering", city: "Verna", type: "Private", esty: 1997 },
    { name: "Agnel Institute of Technology and Design", city: "Assagao", type: "Private", esty: 2012 }
  ],
  "Gujarat": [
    { name: "IIT Gandhinagar", city: "Gandhinagar", type: "IIT", esty: 2008 },
    { name: "SVNIT Surat", city: "Surat", type: "NIT", esty: 1961 },
    { name: "IIIT Vadodara", city: "Vadodara", type: "IIIT", esty: 2013 },
    { name: "IIIT Surat", city: "Surat", type: "IIIT", esty: 2013 },
    { name: "L.D. College of Engineering", city: "Ahmedabad", type: "State Govt", esty: 1948 },
    { name: "Vishwakarma Government Engineering College", city: "Chandkheda", type: "State Govt", esty: 1994 },
    { name: "L.E. College", city: "Morbi", type: "State Govt", esty: 1951 },
    { name: "Dr. S. & S.S. Ghandhy Government Engineering College", city: "Surat", type: "State Govt", esty: 2004 },
    { name: "Shantilal Shah Engineering College", city: "Bhavnagar", type: "State Govt", esty: 1983 },
    { name: "GEC Gandhinagar", city: "Gandhinagar", type: "State Govt", esty: 2004 },
    { name: "GEC Rajkot", city: "Rajkot", type: "State Govt", esty: 2004 },
    { name: "GEC Bhavnagar", city: "Bhavnagar", type: "State Govt", esty: 2009 },
    { name: "GEC Patan", city: "Patan", type: "State Govt", esty: 2004 },
    { name: "GEC Modasa", city: "Modasa", type: "State Govt", esty: 1984 },
    { name: "GEC Bhuj", city: "Bhuj", type: "State Govt", esty: 1994 },
    { name: "GEC Bharuch", city: "Bharuch", type: "State Govt", esty: 2004 },
    { name: "GEC Dahod", city: "Dahod", type: "State Govt", esty: 2004 },
    { name: "GEC Valsad", city: "Valsad", type: "State Govt", esty: 2004 },
    { name: "GEC Palanpur", city: "Palanpur", type: "State Govt", esty: 2009 },
    { name: "GEC Godhra", city: "Godhra", type: "State Govt", esty: 2009 },
    { name: "Nirma University", city: "Ahmedabad", type: "Private", esty: 2003 },
    { name: "DA-IICT", city: "Gandhinagar", type: "Deemed", esty: 2001 },
    { name: "Pandit Deendayal Energy University", city: "Gandhinagar", type: "Private", esty: 2007 },
    { name: "Parul University", city: "Vadodara", type: "Private", esty: 2015 },
    { name: "Marwadi University", city: "Rajkot", type: "Private", esty: 2016 }
  ],
  "Haryana": [
    { name: "NIT Kurukshetra", city: "Kurukshetra", type: "NIT", esty: 1963 },
    { name: "IIIT Sonipat", city: "Sonipat", type: "IIIT", esty: 2014 },
    { name: "Central University of Haryana", city: "Mahendergarh", type: "Central", esty: 2009 },
    { name: "J.C. Bose UST YMCA", city: "Faridabad", type: "State Govt", esty: 1969 },
    { name: "Deenbandhu Chhotu Ram UST", city: "Murthal", type: "State Govt", esty: 2006 },
    { name: "Ch. Devi Lal State Institute of Engineering", city: "Sirsa", type: "State Govt", esty: 2003 },
    { name: "Rao Birender Singh State Institute of Engineering & Technology", city: "Rewari", type: "State Govt", esty: 2017 },
    { name: "State Institute of Engineering & Technology", city: "Nilokheri", type: "State Govt", esty: 2016 },
    { name: "Ch. Ranbir Singh State Institute of Engineering & Technology", city: "Jhajjar", type: "State Govt", esty: 2017 },
    { name: "Ashoka University", city: "Sonipat", type: "Private", esty: 2014 },
    { name: "NorthCap University", city: "Gurugram", type: "Private", esty: 1996 },
    { name: "Amity University Gurugram", city: "Gurugram", type: "Private", esty: 2010 },
    { name: "BML Munjal University", city: "Gurugram", type: "Private", esty: 2014 },
    { name: "O.P. Jindal Global University", city: "Sonipat", type: "Private", esty: 2009 }
  ],
  "Himachal Pradesh": [
    { name: "IIT Mandi", city: "Mandi", type: "IIT", esty: 2009 },
    { name: "NIT Hamirpur", city: "Hamirpur", type: "NIT", esty: 1986 },
    { name: "IIIT Una", city: "Una", type: "IIIT", esty: 2014 },
    { name: "Rajiv Gandhi Government Engineering College", city: "Kangra", type: "State Govt", esty: 2014 },
    { name: "Jawaharlal Nehru Government Engineering College", city: "Sundernagar", type: "State Govt", esty: 2006 },
    { name: "Mahatma Gandhi Government Engineering College", city: "Jeori/Kottla", type: "State Govt", esty: 2015 },
    { name: "Atal Bihari Vajpayee Government Institute of Engineering & Technology", city: "Pragatinagar", type: "State Govt", esty: 1997 },
    { name: "Hydro Engineering College", city: "Bilaspur", type: "State Govt", esty: 2021 },
    { name: "Jaypee University of Information Technology", city: "Waknaghat", type: "Private", esty: 2002 },
    { name: "Chitkara University Solan", city: "Solan", type: "Private", esty: 2008 },
    { name: "Shoolini University", city: "Solan", type: "Private", esty: 2009 },
    { name: "Baddi University", city: "Baddi", type: "Private", esty: 2002 }
  ],
  "Jharkhand": [
    { name: "IIT (ISM) Dhanbad", city: "Dhanbad", type: "IIT", esty: 1926 },
    { name: "NIT Jamshedpur", city: "Jamshedpur", type: "NIT", esty: 1960 },
    { name: "IIIT Ranchi", city: "Ranchi", type: "IIIT", esty: 2016 },
    { name: "BIT Sindri", city: "Dhanbad", type: "State Govt", esty: 1949 },
    { name: "Ramgarh Engineering College", city: "Ramgarh", type: "State Govt", esty: 2013 },
    { name: "Dumka Engineering College", city: "Dumka", type: "State Govt", esty: 2013 },
    { name: "Chaibasa Engineering College", city: "Chaibasa", type: "State Govt", esty: 2013 },
    { name: "BIT Mesra", city: "Ranchi", type: "Deemed", esty: 1955 },
    { name: "Arka Jain University", city: "Jamshedpur", type: "Private", esty: 2017 },
    { name: "Usha Martin University", city: "Ranchi", type: "Private", esty: 2012 },
    { name: "RKDF University", city: "Ranchi", type: "Private", esty: 2012 }
  ],
  "Karnataka": [
    { name: "IIT Dharwad", city: "Dharwad", type: "IIT", esty: 2016 },
    { name: "NIT Surathkal", city: "Mangaluru", type: "NIT", esty: 1960 },
    { name: "IIIT Bangalore", city: "Bengaluru", type: "IIIT", esty: 1998 },
    { name: "IIIT Dharwad", city: "Dharwad", type: "IIIT", esty: 2015 },
    { name: "IIIT Raichur", city: "Raichur", type: "IIIT", esty: 2019 },
    { name: "University Visvesvaraya College of Engineering (UVCE)", city: "Bengaluru", type: "State Govt", esty: 1917 },
    { name: "UBDT College of Engineering", city: "Davangere", type: "State Govt", esty: 1951 },
    { name: "Sri Krishnarajendra Silver Jubilee Technological Institute", city: "Bengaluru", type: "State Govt", esty: 1938 },
    { name: "GEC Hassan", city: "Hassan", type: "State Govt", esty: 2007 },
    { name: "GEC Haveri", city: "Haveri", type: "State Govt", esty: 2007 },
    { name: "GEC K.R. Pet", city: "K.R. Pet", type: "State Govt", esty: 2007 },
    { name: "GEC Kushalnagar", city: "Kushalnagar", type: "State Govt", esty: 2007 },
    { name: "GEC Raichur", city: "Raichur", type: "State Govt", esty: 2007 },
    { name: "GEC Ramanagara", city: "Ramanagara", type: "State Govt", esty: 2007 },
    { name: "GEC Chamarajanagar", city: "Chamarajanagar", type: "State Govt", esty: 2007 },
    { name: "GEC Karwar", city: "Karwar", type: "State Govt", esty: 2009 },
    { name: "GEC Huvina Hadagali", city: "Huvina Hadagali", type: "State Govt", esty: 2007 },
    { name: "GEC Gangavathi", city: "Gangavathi", type: "State Govt", esty: 2007 },
    { name: "GEC Challakere", city: "Challakere", type: "State Govt", esty: 2007 },
    { name: "GEC Mosalehosahalli", city: "Mosalehosahalli", type: "State Govt", esty: 2021 },
    { name: "GEC Talakal", city: "Talakal", type: "State Govt", esty: 2007 },
    { name: "RV College of Engineering", city: "Bengaluru", type: "Private", esty: 1963 },
    { name: "BMS College of Engineering", city: "Bengaluru", type: "Private", esty: 1946 },
    { name: "M.S. Ramaiah Institute of Technology", city: "Bengaluru", type: "Private", esty: 1962 },
    { name: "Manipal Institute of Technology", city: "Manipal", type: "Private", esty: 1957 },
    { name: "PES University", city: "Bengaluru", type: "Private", esty: 1972 },
    { name: "BIT Bangalore", city: "Bengaluru", type: "Private", esty: 1979 },
    { name: "New Horizon College of Engineering", city: "Bengaluru", type: "Private", esty: 2001 }
  ],
  "Kerala": [
    { name: "IIT Palakkad", city: "Palakkad", type: "IIT", esty: 2015 },
    { name: "NIT Calicut", city: "Kozhikode", type: "NIT", esty: 1961 },
    { name: "IIIT Kottayam", city: "Kottayam", type: "IIIT", esty: 2015 },
    { name: "College of Engineering Trivandrum (CET)", city: "Trivandrum", type: "State Govt", esty: 1939 },
    { name: "Rajiv Gandhi Institute of Technology", city: "Kottayam", type: "State Govt", esty: 1991 },
    { name: "GEC Thrissur", city: "Thrissur", type: "State Govt", esty: 1957 },
    { name: "GEC Barton Hill", city: "Trivandrum", type: "State Govt", esty: 1999 },
    { name: "GEC Kannur", city: "Kannur", type: "State Govt", esty: 1986 },
    { name: "GEC Kozhikode", city: "Kozhikode", type: "State Govt", esty: 1999 },
    { name: "GEC Wayanad", city: "Wayanad", type: "State Govt", esty: 1999 },
    { name: "GEC Idukki", city: "Idukki", type: "State Govt", esty: 2000 },
    { name: "GEC Palakkad", city: "Palakkad", type: "State Govt", esty: 1999 },
    { name: "GEC Mananthavady", city: "Mananthavady", type: "State Govt", esty: 1999 },
    { name: "LBS College of Engineering", city: "Kasaragod", type: "State Govt", esty: 1989 },
    { name: "LBS Institute of Technology for Women", city: "Poojappura", type: "State Govt", esty: 2001 },
    { name: "Rajagiri School of Engineering & Technology", city: "Ernakulam", type: "Private", esty: 2001 },
    { name: "Federal Institute of Science and Technology", city: "Angamaly", type: "Private", esty: 2002 },
    { name: "SCMS School of Engineering", city: "Kochi", type: "Private", esty: 2001 },
    { name: "Amal Jyothi College of Engineering", city: "Kanjirappally", type: "Private", esty: 2001 }
  ],
  "Madhya Pradesh": [
    { name: "IIT Indore", city: "Indore", type: "IIT", esty: 2009 },
    { name: "MANIT Bhopal", city: "Bhopal", type: "NIT", esty: 1960 },
    { name: "ABV-IIITM Gwalior", city: "Gwalior", type: "IIIT", esty: 1997 },
    { name: "IIITDM Jabalpur", city: "Jabalpur", type: "IIIT", esty: 2005 },
    { name: "IIIT Bhopal", city: "Bhopal", type: "IIIT", esty: 2017 },
    { name: "Jabalpur Engineering College (JEC)", city: "Jabalpur", type: "State Govt", esty: 1947 },
    { name: "Ujjain Engineering College (UEC)", city: "Ujjain", type: "State Govt", esty: 1966 },
    { name: "Rewa Engineering College (REC)", city: "Rewa", type: "State Govt", esty: 1964 },
    { name: "Indira Gandhi Engineering College", city: "Sagar", type: "State Govt", esty: 1981 },
    { name: "Nowgong Engineering College", city: "Chhatarpur", type: "State Govt", esty: 2012 },
    { name: "SGSITS Indore", city: "Indore", type: "State Govt", esty: 1952 },
    { name: "MITS Gwalior", city: "Gwalior", type: "State Govt", esty: 1957 },
    { name: "SATI Vidisha", city: "Vidisha", type: "State Govt", esty: 1960 },
    { name: "VIT Bhopal University", city: "Bhopal", type: "Private", esty: 2017 },
    { name: "LNCT Group of Colleges", city: "Bhopal", type: "Private", esty: 1994 },
    { name: "Amity University Gwalior", city: "Gwalior", type: "Private", esty: 2010 },
    { name: "IPS Academy", city: "Indore", type: "Private", esty: 1999 },
    { name: "Medi-Caps University", city: "Indore", type: "Private", esty: 2016 }
  ],
  "Maharashtra": [
    { name: "IIT Bombay", city: "Mumbai", type: "IIT", esty: 1958 },
    { name: "VNIT Nagpur", city: "Nagpur", type: "NIT", esty: 1960 },
    { name: "IIIT Pune", city: "Pune", type: "IIIT", esty: 2016 },
    { name: "IIIT Nagpur", city: "Nagpur", type: "IIIT", esty: 2016 },
    { name: "College of Engineering Pune (COEP)", city: "Pune", type: "State Govt", esty: 1854 },
    { name: "Veermata Jijabai Technological Institute (VJTI)", city: "Mumbai", type: "State Govt", esty: 1887 },
    { name: "Sardar Patel College of Engineering (SPCE)", city: "Mumbai", type: "State Govt", esty: 1962 },
    { name: "Shri Guru Gobind Singhji Institute of Engineering and Technology", city: "Nanded", type: "State Govt", esty: 1981 },
    { name: "Walchand College of Engineering", city: "Sangli", type: "State Govt", esty: 1947 },
    { name: "GCOE Amravati", city: "Amravati", type: "State Govt", esty: 1964 },
    { name: "GCOE Chhatrapati Sambhajinagar", city: "Aurangabad", type: "State Govt", esty: 1966 },
    { name: "GCOE Nagpur", city: "Nagpur", type: "State Govt", esty: 1960 },
    { name: "GCOE Karad", city: "Karad", type: "State Govt", esty: 1960 },
    { name: "GCOE Jalgaon", city: "Jalgaon", type: "State Govt", esty: 1996 },
    { name: "GCOE Chandrapur", city: "Chandrapur", type: "State Govt", esty: 1996 },
    { name: "GCOE Avasari", city: "Pune", type: "State Govt", esty: 2009 },
    { name: "GCOE Yavatmal", city: "Yavatmal", type: "State Govt", esty: 2018 },
    { name: "GCOE Ratnagiri", city: "Ratnagiri", type: "State Govt", esty: 2021 },
    { name: "GCOE Kolhapur", city: "Kolhapur", type: "State Govt", esty: 2021 },
    { name: "ICT Mumbai", city: "Mumbai", type: "Central", esty: 1933 },
    { name: "NMIMS Mukesh Patel School of Engineering", city: "Mumbai", type: "Private", esty: 2006 },
    { name: "Symbiosis Institute of Technology", city: "Pune", type: "Private", esty: 2008 },
    { name: "MIT-WPU", city: "Pune", type: "Private", esty: 2017 },
    { name: "K. J. Somaiya College of Engineering", city: "Mumbai", type: "Private", esty: 1983 },
    { name: "Sinhgad Colleges", city: "Pune", type: "Private", esty: 1996 },
    { name: "Thadomal Shahani Engineering College", city: "Mumbai", type: "Private", esty: 1977 }
  ],
  "Manipur": [
    { name: "NIT Manipur", city: "Imphal", type: "NIT", esty: 2010 },
    { name: "IIIT Manipur", city: "Senapati", type: "IIIT", esty: 2015 },
    { name: "Manipur Technical University", city: "Imphal", type: "State Govt", esty: 2016 },
    { name: "Manipur Institute of Technology", city: "Imphal", type: "State Govt", esty: 1998 },
    { name: "Manipur University", city: "Imphal", type: "Central", esty: 1980 }
  ],
  "Meghalaya": [
    { name: "NIT Meghalaya", city: "Shillong", type: "NIT", esty: 2010 },
    { name: "Shillong Engineering College", city: "Shillong", type: "State Govt", esty: 2022 },
    { name: "NEHU School of Technology", city: "Shillong", type: "Central", esty: 2006 },
    { name: "Techno Global University", city: "Shillong", type: "Private", esty: 2008 },
    { name: "University of Technology and Management", city: "Shillong", type: "Private", esty: 2011 }
  ],
  "Mizoram": [
    { name: "NIT Mizoram", city: "Aizawl", type: "NIT", esty: 2010 },
    { name: "Mizoram University (SOET)", city: "Aizawl", type: "Central", esty: 2001 }
  ],
  "Nagaland": [
    { name: "NIT Nagaland", city: "Chumukedima", type: "NIT", esty: 2010 },
    { name: "Nagaland University (SOET)", city: "Dimapur", type: "Central", esty: 1994 }
  ],
  "Odisha": [
    { name: "IIT Bhubaneswar", city: "Bhubaneswar", type: "IIT", esty: 2008 },
    { name: "NIT Rourkela", city: "Rourkela", type: "NIT", esty: 1961 },
    { name: "IIIT Bhubaneswar", city: "Bhubaneswar", type: "State Govt", esty: 2006 },
    { name: "VSSUT", city: "Burla", type: "State Govt", esty: 1956 },
    { name: "OUTR Bhubaneswar", city: "Bhubaneswar", type: "State Govt", esty: 1981 },
    { name: "IGIT", city: "Sarang", type: "State Govt", esty: 1982 },
    { name: "Parala Maharaja Engineering College", city: "Berhampur", type: "State Govt", esty: 2009 },
    { name: "Government College of Engineering Keonjhar", city: "Keonjhar", type: "State Govt", esty: 1995 },
    { name: "Government College of Engineering Kalahandi", city: "Kalahandi", type: "State Govt", esty: 2009 },
    { name: "Institute of Management and Information Technology", city: "Cuttack", type: "State Govt", esty: 1962 },
    { name: "KIIT University", city: "Bhubaneswar", type: "Private", esty: 1992 },
    { name: "ITER / SOA University", city: "Bhubaneswar", type: "Private", esty: 1996 },
    { name: "Silicon Institute of Technology", city: "Bhubaneswar", type: "Private", esty: 2001 },
    { name: "C. V. Raman Global University", city: "Bhubaneswar", type: "Private", esty: 1997 }
  ],
  "Punjab": [
    { name: "IIT Ropar", city: "Rupnagar", type: "IIT", esty: 2008 },
    { name: "NIT Jalandhar", city: "Jalandhar", type: "NIT", esty: 1987 },
    { name: "Giani Zail Singh Campus College of Engineering", city: "Bathinda", type: "State Govt", esty: 1989 },
    { name: "Shaheed Bhagat Singh State Technical Campus", city: "Ferozepur", type: "State Govt", esty: 1994 },
    { name: "Beant College of Engineering and Technology", city: "Gurdaspur", type: "State Govt", esty: 1994 },
    { name: "IKGPTU Main Campus", city: "Kapurthala", type: "State Govt", esty: 1997 },
    { name: "IKGPTU Campus Amritsar", city: "Amritsar", type: "State Govt", esty: 2014 },
    { name: "IKGPTU Campus Hoshiarpur", city: "Hoshiarpur", type: "State Govt", esty: 2014 },
    { name: "IKGPTU Campus Batala", city: "Batala", type: "State Govt", esty: 2014 },
    { name: "Thapar Institute of Engineering and Technology", city: "Patiala", type: "Private", esty: 1956 },
    { name: "Lovely Professional University", city: "Phagwara", type: "Private", esty: 2005 },
    { name: "Chandigarh University", city: "Mohali", type: "Private", esty: 2012 },
    { name: "Chitkara University Rajpura", city: "Rajpura", type: "Private", esty: 2010 }
  ],
  "Rajasthan": [
    { name: "IIT Jodhpur", city: "Jodhpur", type: "IIT", esty: 2008 },
    { name: "MNIT Jaipur", city: "Jaipur", type: "NIT", esty: 1963 },
    { name: "IIIT Kota", city: "Kota", type: "IIIT", esty: 2013 },
    { name: "BITS Pilani", city: "Pilani", type: "BITS", esty: 1964 },
    { name: "MBM University", city: "Jodhpur", type: "State Govt", esty: 1951 },
    { name: "College of Technology and Engineering", city: "Udaipur", type: "State Govt", esty: 1964 },
    { name: "MLV Textile and Engineering College", city: "Bhilwara", type: "State Govt", esty: 1984 },
    { name: "GEC Ajmer", city: "Ajmer", type: "State Govt", esty: 1997 },
    { name: "Women's EC Ajmer", city: "Ajmer", type: "State Govt", esty: 2006 },
    { name: "GEC Bikaner", city: "Bikaner", type: "State Govt", esty: 1999 },
    { name: "GEC Bharatpur", city: "Bharatpur", type: "State Govt", esty: 2007 },
    { name: "GEC Jhalawar", city: "Jhalawar", type: "State Govt", esty: 2007 },
    { name: "GEC Banswara", city: "Banswara", type: "State Govt", esty: 2012 },
    { name: "GEC Barmer", city: "Barmer", type: "State Govt", esty: 2017 },
    { name: "GEC Churu", city: "Churu", type: "State Govt", esty: 2017 },
    { name: "GEC Dholpur", city: "Dholpur", type: "State Govt", esty: 2017 },
    { name: "GEC Karauli", city: "Karauli", type: "State Govt", esty: 2017 },
    { name: "GEC Pratapgarh", city: "Pratapgarh", type: "State Govt", esty: 2017 },
    { name: "GEC Jalore", city: "Jalore", type: "State Govt", esty: 2017 },
    { name: "GEC Baran", city: "Baran", type: "State Govt", esty: 2017 },
    { name: "Central University of Rajasthan", city: "Ajmer", type: "Central", esty: 2009 },
    { name: "LNMIIT", city: "Jaipur", type: "Private", esty: 2002 },
    { name: "Banasthali Vidyapith", city: "Tonk", type: "Private", esty: 1935 },
    { name: "Jodhpur National University", city: "Jodhpur", type: "Private", esty: 2008 },
    { name: "NIMS University", city: "Jaipur", type: "Private", esty: 2008 }
  ],
  "Sikkim": [
    { name: "NIT Sikkim", city: "Ravangla", type: "NIT", esty: 2010 },
    { name: "Center for Computers and Communication Technology (CCCT)", city: "Chisopani", type: "State Govt", esty: 1999 },
    { name: "Advanced Technical Training Centre (ATTC)", city: "Bardang", type: "State Govt", esty: 1999 },
    { name: "Sikkim Manipal Institute of Technology (SMIT)", city: "Majitar", type: "Private", esty: 1997 }
  ],
  "Tamil Nadu": [
    { name: "IIT Madras", city: "Chennai", type: "IIT", esty: 1959 },
    { name: "NIT Trichy", city: "Trichy", type: "NIT", esty: 1964 },
    { name: "IIITDM Kancheepuram", city: "Chennai", type: "IIIT", esty: 2007 },
    { name: "IIIT Tiruchirappalli", city: "Trichy", type: "IIIT", esty: 2013 },
    { name: "College of Engineering Guindy", city: "Chennai", type: "State Govt", esty: 1794 },
    { name: "Madras Institute of Technology", city: "Chennai", type: "State Govt", esty: 1949 },
    { name: "AC Tech (Anna University)", city: "Chennai", type: "State Govt", esty: 1944 },
    { name: "Government College of Technology", city: "Coimbatore", type: "State Govt", esty: 1945 },
    { name: "Alagappa Chettiar GCE", city: "Karaikudi", type: "State Govt", esty: 1952 },
    { name: "Institute of Road and Transport Technology", city: "Erode", type: "State Govt", esty: 1984 },
    { name: "GCE Salem", city: "Salem", type: "State Govt", esty: 1966 },
    { name: "GCE Tirunelveli", city: "Tirunelveli", type: "State Govt", esty: 1981 },
    { name: "GCE Bargur", city: "Bargur", type: "State Govt", esty: 1994 },
    { name: "GCE Srirangam", city: "Srirangam", type: "State Govt", esty: 2013 },
    { name: "GCE Thanjavur", city: "Thanjavur", type: "State Govt", esty: 2013 },
    { name: "GCE Bodinayakkanur", city: "Bodinayakkanur", type: "State Govt", esty: 2012 },
    { name: "GCE Dharmapuri", city: "Dharmapuri", type: "State Govt", esty: 2013 },
    { name: "VIT University", city: "Vellore", type: "Private", esty: 1984 },
    { name: "SRM Institute of Science and Technology", city: "Kattankulathur", type: "Private", esty: 1985 },
    { name: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", type: "Private", esty: 1994 },
    { name: "Sathyabama Institute of Science and Technology", city: "Chennai", type: "Private", esty: 1987 },
    { name: "PSG College of Technology", city: "Coimbatore", type: "Private", esty: 1951 },
    { name: "SASTRA Deemed University", city: "Thanjavur", type: "Private", esty: 1984 },
    { name: "SSN College of Engineering", city: "Chennai", type: "Private", esty: 1996 }
  ],
  "Telangana": [
    { name: "IIT Hyderabad", city: "Kandi", type: "IIT", esty: 2008 },
    { name: "NIT Warangal", city: "Warangal", type: "NIT", esty: 1959 },
    { name: "IIIT Hyderabad", city: "Hyderabad", type: "IIIT", esty: 1998 },
    { name: "BITS Pilani Hyderabad", city: "Hyderabad", type: "BITS", esty: 2008 },
    { name: "University of Hyderabad (UoH)", city: "Hyderabad", type: "Central", esty: 1974 },
    { name: "Osmania University College of Engineering", city: "Hyderabad", type: "State Govt", esty: 1929 },
    { name: "JNTU Hyderabad College of Engineering", city: "Hyderabad", type: "State Govt", esty: 1965 },
    { name: "JNTU Campus Jagtial", city: "Jagtial", type: "State Govt", esty: 2007 },
    { name: "JNTU Campus Manthani", city: "Manthani", type: "State Govt", esty: 2010 },
    { name: "JNTU Campus Sultanpur", city: "Sultanpur", type: "State Govt", esty: 2012 },
    { name: "JNTU Campus Sircilla", city: "Sircilla", type: "State Govt", esty: 2021 },
    { name: "JNTU Campus Mahabubabad", city: "Mahabubabad", type: "State Govt", esty: 2022 },
    { name: "JNTU Campus Palair", city: "Palair", type: "State Govt", esty: 2023 },
    { name: "Kakatiya University College of Engineering", city: "Kothagudem", type: "State Govt", esty: 1978 },
    { name: "CBIT", city: "Hyderabad", type: "Private", esty: 1979 },
    { name: "VNR Vignana Jyothi Institute", city: "Hyderabad", type: "Private", esty: 1995 },
    { name: "Mahindra University", city: "Hyderabad", type: "Private", esty: 2020 },
    { name: "Anurag University", city: "Hyderabad", type: "Private", esty: 2002 }
  ],
  "Tripura": [
    { name: "NIT Agartala", city: "Agartala", type: "NIT", esty: 1965 },
    { name: "IIIT Tripura", city: "Agartala", type: "IIIT", esty: 2015 },
    { name: "Tripura Institute of Technology", city: "Narsingarh", type: "State Govt", esty: 1958 },
    { name: "Tripura University", city: "Suryamaninagar", type: "Central", esty: 1987 },
    { name: "ICFAI University", city: "Agartala", type: "Private", esty: 2004 }
  ],
  "Uttar Pradesh": [
    { name: "IIT Kanpur", city: "Kanpur", type: "IIT", esty: 1959 },
    { name: "IIT (BHU) Varanasi", city: "Varanasi", type: "IIT", esty: 1919 },
    { name: "MNNIT Allahabad", city: "Prayagraj", type: "NIT", esty: 1961 },
    { name: "IIIT Allahabad", city: "Prayagraj", type: "IIIT", esty: 1999 },
    { name: "IIIT Lucknow", city: "Lucknow", type: "IIIT", esty: 2015 },
    { name: "Institute of Engineering and Technology", city: "Lucknow", type: "State Govt", esty: 1984 },
    { name: "Harcourt Butler Technical University", city: "Kanpur", type: "State Govt", esty: 1921 },
    { name: "Madan Mohan Malaviya University of Technology", city: "Gorakhpur", type: "State Govt", esty: 1962 },
    { name: "Kamla Nehru Institute of Technology", city: "Sultanpur", type: "State Govt", esty: 1979 },
    { name: "Bundelkhand Institute of Engineering & Technology", city: "Jhansi", type: "State Govt", esty: 1986 },
    { name: "REC Ambedkar Nagar", city: "Ambedkar Nagar", type: "State Govt", esty: 2010 },
    { name: "REC Azamgarh", city: "Azamgarh", type: "State Govt", esty: 2010 },
    { name: "REC Banda", city: "Banda", type: "State Govt", esty: 2010 },
    { name: "REC Bijnor", city: "Bijnor", type: "State Govt", esty: 2010 },
    { name: "REC Kannauj", city: "Kannauj", type: "State Govt", esty: 2015 },
    { name: "REC Mainpuri", city: "Mainpuri", type: "State Govt", esty: 2015 },
    { name: "REC Sonbhadra", city: "Sonbhadra", type: "State Govt", esty: 2015 },
    { name: "REC Gonda", city: "Gonda", type: "State Govt", esty: 2021 },
    { name: "REC Pratapgarh", city: "Pratapgarh", type: "State Govt", esty: 2021 },
    { name: "REC Mirzapur", city: "Mirzapur", type: "State Govt", esty: 2021 },
    { name: "REC Basti", city: "Basti", type: "State Govt", esty: 2021 },
    { name: "Aligarh Muslim University (AMU)", city: "Aligarh", type: "Central", esty: 1920 },
    { name: "Rajiv Gandhi Institute of Petroleum Technology", city: "Amethi", type: "Central", esty: 2007 },
    { name: "BBAU Lucknow", city: "Lucknow", type: "Central", esty: 1996 },
    { name: "Amity University Noida", city: "Noida", type: "Private", esty: 2005 },
    { name: "Jaypee Institute of Information Technology", city: "Noida", type: "Private", esty: 2001 },
    { name: "Shiv Nadar University", city: "Dadri", type: "Private", esty: 2011 },
    { name: "Galgotias University", city: "Greater Noida", type: "Private", esty: 2011 },
    { name: "GL Bajaj Institute of Technology & Management", city: "Greater Noida", type: "Private", esty: 2005 },
    { name: "JSS Academy of Technical Education", city: "Noida", type: "Private", esty: 1998 },
    { name: "Sharda University", city: "Greater Noida", type: "Private", esty: 2009 }
  ],
  "Uttarakhand": [
    { name: "IIT Roorkee", city: "Roorkee", type: "IIT", esty: 1847 },
    { name: "NIT Uttarakhand", city: "Srinagar Garhwal", type: "NIT", esty: 2010 },
    { name: "College of Technology Pantnagar", city: "Pantnagar", type: "State Govt", esty: 1960 },
    { name: "G.B. Pant Engineering College", city: "Pauri Garhwal", type: "State Govt", esty: 1989 },
    { name: "Bipin Tripathi Kumaon Institute of Technology", city: "Dwarahat", type: "State Govt", esty: 1991 },
    { name: "THDC Institute of Hydropower Engineering", city: "Tehri", type: "State Govt", esty: 2011 },
    { name: "Seemant Institute of Technology", city: "Pithoragarh", type: "State Govt", esty: 2011 },
    { name: "Women Institute of Technology", city: "Dehradun", type: "State Govt", esty: 2012 },
    { name: "UPES Dehradun", city: "Dehradun", type: "Private", esty: 2003 },
    { name: "Graphic Era University", city: "Dehradun", type: "Private", esty: 1993 },
    { name: "DIT University", city: "Dehradun", type: "Private", esty: 1998 },
    { name: "Tula's Institute", city: "Dehradun", type: "Private", esty: 2006 }
  ],
  "West Bengal": [
    { name: "IIT Kharagpur", city: "Kharagpur", type: "IIT", esty: 1951 },
    { name: "NIT Durgapur", city: "Durgapur", type: "NIT", esty: 1960 },
    { name: "IIEST Shibpur", city: "Shibpur", type: "Central", esty: 1856 },
    { name: "IIIT Kalyani", city: "Kalyani", type: "IIIT", esty: 2014 },
    { name: "Jadavpur University", city: "Kolkata", type: "State Govt", esty: 1955 },
    { name: "Kalyani Government Engineering College", city: "Kalyani", type: "State Govt", esty: 1995 },
    { name: "Jalpaiguri Government Engineering College", city: "Jalpaiguri", type: "State Govt", esty: 1961 },
    { name: "Cooch Behar Government Engineering College", city: "Cooch Behar", type: "State Govt", esty: 2016 },
    { name: "Purulia Government Engineering College", city: "Purulia", type: "State Govt", esty: 2016 },
    { name: "Ramkrishna Mahato Government Engineering College", city: "Purulia", type: "State Govt", esty: 2016 },
    { name: "Government College of Engineering & Textile Technology", city: "Berhampore", type: "State Govt", esty: 1927 },
    { name: "Government College of Engineering & Textile Technology", city: "Serampore", type: "State Govt", esty: 1959 },
    { name: "Government College of Engineering & Leather Technology", city: "Kolkata", type: "State Govt", esty: 1919 },
    { name: "Government College of Engineering & Ceramic Technology", city: "Kolkata", type: "State Govt", esty: 1941 },
    { name: "Aliah University", city: "Kolkata", type: "Central", esty: 1780 },
    { name: "Heritage Institute of Technology", city: "Kolkata", type: "Private", esty: 2001 },
    { name: "Institute of Engineering and Management (IEM)", city: "Kolkata", type: "Private", esty: 1989 },
    { name: "Techno India (Salt Lake)", city: "Kolkata", type: "Private", esty: 2001 },
    { name: "Haldia Institute of Technology", city: "Haldia", type: "Private", esty: 1996 },
    { name: "Netaji Subhash Engineering College", city: "Kolkata", type: "Private", esty: 1998 }
  ],
  "Delhi (NCT)": [
    { name: "IIT Delhi", city: "Delhi", type: "IIT", esty: 1961 },
    { name: "NIT Delhi", city: "Delhi", type: "NIT", esty: 2010 },
    { name: "DTU (Delhi Technological University)", city: "Delhi", type: "State Govt", esty: 1941 },
    { name: "NSUT (Netaji Subhas University of Technology)", city: "Delhi", type: "State Govt", esty: 1983 },
    { name: "IGDTUW (Indira Gandhi Technical University for Women)", city: "Delhi", type: "State Govt", esty: 1998 },
    { name: "IIIT Delhi", city: "Delhi", type: "IIIT", esty: 2008 },
    { name: "Jamia Millia Islamia (JMI)", city: "Delhi", type: "Central", esty: 1920 },
    { name: "DSEU (Delhi Skill and Entrepreneurship University)", city: "Delhi", type: "State Govt", esty: 2020 },
    { name: "Maharaja Agrasen Institute of Technology (MAIT)", city: "Delhi", type: "Private", esty: 1999 },
    { name: "Maharaja Surajmal Institute of Technology (MSIT)", city: "Delhi", type: "Private", esty: 2001 },
    { name: "Bharati Vidyapeeth's College of Engineering (BVP)", city: "Delhi", type: "Private", esty: 1999 }
  ],
  "Chandigarh": [
    { name: "Punjab Engineering College (PEC)", city: "Chandigarh", type: "Deemed", esty: 1921 },
    { name: "Chandigarh College of Engineering and Technology (CCET)", city: "Chandigarh", type: "State Govt", esty: 2002 },
    { name: "University Institute of Engineering and Technology (UIET, PU)", city: "Chandigarh", type: "State Govt", esty: 2002 }
  ],
  "Jammu & Kashmir": [
    { name: "IIT Jammu", city: "Jammu", type: "IIT", esty: 2016 },
    { name: "NIT Srinagar", city: "Srinagar", type: "NIT", esty: 1960 },
    { name: "Government College of Engineering and Technology (GCET Jammu)", city: "Jammu", type: "State Govt", esty: 1994 },
    { name: "Government College of Engineering and Technology (GCET Ganderbal)", city: "Ganderbal", type: "State Govt", esty: 2017 },
    { name: "Shri Mata Vaishno Devi University (SMVDU)", city: "Katra", type: "State Govt", esty: 1999 },
    { name: "Islamic University of Science and Technology (IUST)", city: "Awantipora", type: "State Govt", esty: 2005 }
  ],
  "Puducherry": [
    { name: "NIT Puducherry", city: "Karaikal", type: "NIT", esty: 2010 },
    { name: "Puducherry Technological University (PTU)", city: "Puducherry", type: "State Govt", esty: 1984 },
    { name: "Perunthalaivar Kamarajar Institute of Engineering and Technology", city: "Karaikal", type: "State Govt", esty: 2007 }
  ]
};

export const getColleges = (): College[] => {
  const result: College[] = [];
  let idCounter = 1;

  Object.entries(RAW_COLLEGES_MAP).forEach(([state, list]) => {
    list.forEach((col, idx) => {
      // Create ALL FOUR events for EVERY college to allow perfect filtering.
      const categories: ('Hackathon' | 'Sports' | 'Culture' | 'Techfest')[] = ['Hackathon', 'Sports', 'Culture', 'Techfest'];
      
      const events = categories.map((category, cIdx) => {
        let prizePool = "Varies";
        let schedule = "TBD";

        if (category === 'Hackathon') {
          prizePool = `${50 + ((idx + cIdx) % 5) * 20}K INR`;
          schedule = `Oct ${12 + ((idx + cIdx) % 10)}, 2026`;
        } else if (category === 'Sports') {
          prizePool = `${30 + ((idx + cIdx) % 5) * 15}K INR`;
          schedule = `Nov ${8 + ((idx + cIdx) % 10)}, 2026`;
        } else if (category === 'Culture') {
          prizePool = `${100 + ((idx + cIdx) % 5) * 25}K INR`;
          schedule = `Jan ${15 + ((idx + cIdx) % 10)}, 2027`;
        } else if (category === 'Techfest') {
          prizePool = `${80 + ((idx + cIdx) % 5) * 20}K INR`;
          schedule = `Feb ${20 + ((idx + cIdx) % 10)}, 2027`;
        }

        const eventNames: Record<string, string> = {
          'Hackathon': 'Innowave Hackathon',
          'Sports': 'Pratishtha Sports Meet',
          'Culture': 'Sangam Cultural Fest',
          'Techfest': 'Cognizance TechFest'
        };

        return {
          name: `${col.name} ${eventNames[category]}`,
          category: category,
          prizePool,
          schedule
        };
      });

      const examAccepted = col.type === 'IIT' 
        ? ["JEE Advanced", "JEE Main"] 
        : (col.type === 'NIT' || col.type === 'IIIT') 
          ? ["JEE Main"] 
          : ["JEE Main", "State Entrance"];

      result.push({
        id: `college_${idCounter++}`,
        name: col.name,
        city: col.city,
        state: state,
        type: col.type,
        examAccepted,
        famousFest: col.type === 'IIT' ? "Antaragni" : col.type === 'NIT' ? "Tathva" : "Culrav",
        website: `https://www.${col.name.toLowerCase().replace(/[^a-z]/g, "") || "college"}.edu.in`,
        established: col.esty,
        events: events
      });
    });
  });

  return result;
};

export const ALL_STATES: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi (NCT)",
  "Chandigarh",
  "Jammu & Kashmir",
  "Puducherry"
];
