/** model template
    {
        id: ,
        name: '',
        location: '',
        shadowSize: '',
        value: '',
        time: '',
        monthStart: '',
        monthEnd: ''
    }
 */

const createData = (
  id,
  name,
  location,
  shadowSize = null,
  value,
  time,
  isYearRound,
  month = null,
) => {
  return {
    id,
    name,
    location,
    shadowSize,
    value,
    time,
    isYearRound,
    month
  };
};

export const fishData = [
  createData(
    1,
    "Bitterling",
    "River",
    "Smallest",
    "900",
    "All day",
    false,
    "November-March"
  ),
  createData(2, "Pale Chub", "River", "Smallest", "180", "9 a.m - 4 p.m", true),
  createData(3, "Crucian Carp", "River", "Small", "160", "All day", true),
  createData(4, "Dace", "River", "Medium", "240", "4 p.m - 9 a.m", true),
  createData(5, "Carp", "Pond", "Large", "300", "All day", true),
  createData(6, "Koi", "Pond", "Large", "4,000", "4 p.m - 9 a.m", true),
  createData(7, "Goldfish", "Pond", "Smallest", "1,300", "All day", true),
  createData(
    8,
    "Pop-eyed Goldfish",
    "Pond",
    "Smallest",
    "1,300",
    "9 a.m. - 4 p.m.",
    true
  ),
  createData(
    9,
    "Ranchu Goldfish",
    "Pond",
    "Small",
    "4,500",
    "9 a.m. - 4 p.m.",
    true
  ),
  createData(
    10,
    "Killifish",
    "Pond",
    "Smallest",
    "300",
    "All day",
    false,
    "April-August"
  ),
  createData(
    11,
    "Crawfish",
    "Pond",
    "Medium",
    "200",
    "All day",
    false,
    "April-September"
  ),
  createData(
    12,
    "Soft-shelled Turtle",
    "River",
    "Large",
    "3,750",
    "4 p.m. - 9 a.m.",
    false,
    "August-September"
  ),
  createData(
    13,
    "Snapping Turtle",
    "River",
    "X Large",
    "5,000",
    "9 p.m. - 4 a.m.",
    false,
    "April-October"
  ),

  createData(
    14,
    "Tadpole",
    "Pond",
    "Smallest",
    "100",
    "All day",
    false,
    "March-July"
  ),
  createData(
    15,
    "Frog",
    "Pond",
    "Small",
    "120",
    "All day",
    false,
    "May-August"
  ),
  createData(
    16,
    "Freshwater Goby",
    "River",
    "Small",
    "400",
    "4 p.m. - 9 a.m.",
    true
  ),
  createData(
    17,
    "Loach",
    "River",
    "Small",
    "400",
    "All day",
    false,
    "March-May"
  ),
  createData(
    18,
    "Catfish",
    "Pond",
    "Large",
    "800",
    "4 p.m. - 9 a.m.",
    false,
    "May-October"
  ),
  createData(
    19,
    "Giant Snakehead",
    "Pond",
    "X Large",
    "5,500",
    "9 a.m. - 4 p.m.",
    false,
    "June-August"
  ),
  createData(20, "Bluegill", "River", "Small", "180", "9 a.m. - 4 p.m.", true),
  createData(
    21,
    "Yellow Perch",
    "River",
    "Medium",
    "300",
    "All day",
    false,
    "October-March"
  ),
  createData(22, "Black Bass", "River", "Large", "400", "All day", true),
  createData(
    23,
    "Tilapia",
    "River",
    "Medium",
    "800",
    "All day",
    false,
    "June-October"
  ),
  createData(
    24,
    "Pike",
    "River",
    "X Large",
    "1,800",
    "All day",
    false,
    "September-December"
  ),
  createData(
    25,
    "Pond Smelt",
    "River",
    "Small",
    "500",
    "All day",
    false,
    "December-February"
  ),
  createData(
    26,
    "Sweetfish",
    "River",
    "Medium",
    "900",
    "All day",
    false,
    "July-September"
  ),
  createData(
    27,
    "Cherry Salmon",
    "River",
    "Medium",
    "1,000",
    "All day",
    false,
    "March-June, September-November"
  ),
  createData(
    28,
    "Char",
    "River/Pond",
    "Medium",
    "3,800",
    "4 p.m. - 9 a.m.",
    false,
    "March-June, September-November"
  ),
  createData(
    29,
    "Golden Trout",
    "River (Clifftop)",
    "Large",
    "15,000",
    "4 p.m. - 9 a.m.",
    false,
    "March-June, September-November"
  ),
  createData(
    30,
    "Stringfish",
    "River (Clifftop)",
    "Largest",
    "15,000",
    "4 p.m. - 9 a.m.",
    false,
    "December-March"
  ),
  createData(
    31,
    "Salmon",
    "River (mouth)",
    "Small",
    "700",
    "All day",
    false,
    "September"
  ),
  createData(
    32,
    "King Salmon",
    "River (mouth)",
    "Smallest",
    "1,800",
    "All day",
    false,
    "September"
  ),
  createData(
    33,
    "Mitten Crab",
    "River",
    "Small",
    "2,000",
    "4 p.m. - 9 a.m.",
    false,
    "September-November"
  ),
  createData(
    34,
    "Guppy",
    "River",
    "Smallest",
    "1,300",
    "9 a.m. - 4 p.m.",
    false,
    "April-November"
  ),
  createData(
    35,
    "Nibble Fish",
    "River",
    "Small",
    "1,500",
    "9 a.m. - 4 p.m.",
    false,
    "May-September"
  ),
  createData(
    36,
    "Angelfish",
    "River",
    "Small",
    "3,000",
    "4 p.m. - 9 a.m.",
    false,
    "May-October"
  ),
  createData(
    37,
    "Betta",
    "River",
    "Small",
    "2,500",
    "9 a.m. - 4 p.m.",
    false,
    "May-October"
  ),
  createData(
    38,
    "Neon Tetra",
    "River",
    "Smallest",
    "500",
    "9 a.m. - 4 p.m.",
    false,
    "April-November"
  ),
  createData(
    39,
    "Rainbowfish",
    "River",
    "Small",
    "800",
    "9 a.m. - 4 p.m.",
    false,
    "May-October"
  ),
  createData(
    40,
    "Piranha",
    "River",
    "Small",
    "2,500",
    "9 a.m. - 4 p.m., 9 p.m. - 4 a.m.",
    false,
    "June-September"
  ),
  createData(
    41,
    "Arowana",
    "River",
    "Large",
    "10,000",
    "4 p.m. - 9 a.m.",
    false,
    "June-September"
  ),
  createData(
    42,
    "Dorado",
    "River",
    "X Large",
    "15,000",
    "4 a.m - 9 p.m.",
    false,
    "June-September"
  ),
  createData(
    43,
    "Gar",
    "Pond",
    "Largest",
    "6,000",
    "4 p.m. - 9 a.m.",
    false,
    "July-October"
  ),
  createData(
    44,
    "Arapaima",
    "River",
    "Largest",
    "10,000",
    "4 p.m. - 9 a.m.",
    false,
    "June-September"
  ),
  createData(
    45,
    "Saddled Bichir",
    "River",
    "Large",
    "4,000",
    "9 p.m. - 4 a.m.",
    false,
    "June-September"
  ),
  createData(
    46,
    "Sturgeon",
    "River (mouth)",
    "Largest",
    "10,000",
    "All day",
    false,
    "September-March"
  ),
  createData(
    47,
    "Sea Butterfly",
    "Sea",
    "Smallest",
    "1,000",
    "All day",
    false,
    "December-March"
  ),
  createData(
    48,
    "Sea Horse",
    "Sea",
    "Smallest",
    "1,100",
    "All day",
    false,
    "April-November"
  ),
  createData(
    49,
    "Clown Fish",
    "Sea",
    "Smallest",
    "650",
    "All day",
    false,
    "April-September"
  ),
  createData(
    50,
    "Surgeonfish",
    "Sea",
    "Small",
    "1,000",
    "All day",
    false,
    "April-September"
  ),
  createData(
    51,
    "Butterfly Fish",
    "Sea",
    "Small",
    "1,000",
    "All day",
    false,
    "April-September"
  ),
  createData(
    52,
    "Napoleonfish",
    "Sea",
    "Largest",
    "10,000",
    "4 a.m. - 9 p.m.",
    false,
    "July-August"
  ),
  createData(
    53,
    "Zebra Turkeyfish",
    "Sea",
    "Medium",
    "500",
    "All day",
    false,
    "April-November"
  ),
  createData(
    54,
    "Blowfish",
    "Sea",
    "Medium",
    "5,000",
    "6 p.m. - 4 a.m.",
    false,
    "November-February"
  ),
  createData(
    55,
    "Puffer Fish",
    "Sea",
    "Medium",
    "250",
    "All day",
    false,
    "July-September"
  ),
  createData(56, "Anchovy", "Sea", "Small", "200", "4 a.m. - 9 p.m.", true),
  createData(57, "Horse Mackerel", "Sea", "Small", "150", "All day", true),
  createData(
    58,
    "Barred Knifejaw",
    "Sea",
    "Medium",
    "5,000",
    "All day",
    false,
    "March-November"
  ),
  createData(59, "Sea Bass", "Sea", "X Large", "400", "All day", true),
  createData(60, "Red Snapper", "Sea", "Medium", "3,000", "All day", true),
  createData(
    61,
    "Dab",
    "Sea",
    "Medium",
    "300",
    "All day",
    false,
    "October-April"
  ),
  createData(62, "Olive Flounder", "Sea", "Large", "800", "All day", true),
  createData(
    63,
    "Squid",
    "Sea",
    "Medium",
    "500",
    "All day",
    false,
    "December-August"
  ),
  createData(
    64,
    "Moray Eel",
    "Sea",
    "X Large",
    "2,000",
    "All day",
    false,
    "August-October"
  ),
  createData(
    65,
    "Ribbon Eel",
    "Sea",
    "Narrow",
    "600",
    "All day",
    false,
    "June-October"
  ),
  createData(
    66,
    "Tuna",
    "Pier",
    "X Large",
    "7,000",
    "All day",
    false,
    "November-April"
  ),
  createData(
    67,
    "Blue Marlin",
    "Pier",
    "X Large",
    "10,000",
    "All day",
    false,
    "July-September, November-April"
  ),
  createData(
    68,
    "Giant Trevally",
    "Pier",
    "Large",
    "4,500",
    "All day",
    false,
    "May-October"
  ),
  createData(
    69,
    "Mahi-mahi",
    "Sea",
    "Large",
    "6,000",
    "All day",
    false,
    "May-October"
  ),
  createData(
    70,
    "Ocean Sunfish",
    "Sea",
    "Largest (Fin)",
    "4,000",
    "4 a.m. - 9 p.m.",
    false,
    "July-September"
  ),
  createData(
    71,
    "Ray",
    "Sea",
    "X Large",
    "3,000",
    "4 a.m. - 9 p.m.",
    false,
    "August-November"
  ),
  createData(
    72,
    "Saw Shark",
    "Sea",
    "Largest (fin)",
    "12,000",
    "4 p.m. - 9 a.m.",
    false,
    "June-September"
  ),
  createData(
    73,
    "Hammerhead Shark",
    "Sea",
    "Largest (fin)",
    "8,000",
    "4 p.m. - 9 a.m.",
    false,
    "June-September"
  ),
  createData(
    74,
    "Great White Shark",
    "Sea",
    "Largest (fin)",
    "15,000",
    "4 p.m. - 9 a.m.",
    false,
    "June-September"
  ),
  createData(
    75,
    "Whale Shark",
    "Sea",
    "Largest (fin)",
    "13,000",
    "All day",
    false,
    "June-September"
  ),
  createData(
    76,
    "Suckerfish",
    "Sea",
    "(Fin)",
    "1,500",
    "All day",
    false,
    "June-September"
  ),
  createData(
    77,
    "Football Fish",
    "Sea",
    "Large",
    "2,500",
    "4 p.m. - 9 a.m.",
    false,
    "November-March"
  ),
  createData(
    78,
    "Oarfish",
    "Sea",
    "Largest",
    "9,000",
    "All day",
    false,
    "December-May"
  ),
  createData(
    79,
    "Barreleye",
    "Sea",
    "Small",
    "15,000",
    "9 p.m. - 4 a.m.",
    true
  ),
  createData(
    80,
    "Coelacanth",
    "Sea (rainy days)",
    "Largest",
    "15,000",
    "All day",
    true
  )
];

const fishWithDates = fishData.filter(fish => fish.isYearRound === false);

export const importantFishData = fishWithDates.reduce((acc, fish) => {
  const currentMonth = new Date().toLocaleDateString("default", {
    month: "long"
  });
  const fishEndMonths = fish.month.split(/[-,]/g)

  if (fishEndMonths[1] === currentMonth || (fishEndMonths[3] && fishEndMonths[3] === currentMonth)) acc.push(fish)

  return acc;

}, []);
