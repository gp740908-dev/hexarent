// Equipment data types and mock data for HEXA Rent

export interface Equipment {
    id: string;
    slug: string;
    name: string;
    category: EquipmentCategory;
    brand: string;
    model: string;
    description: string;
    shortDescription: string;
    heroImage: string;
    gallery: string[];
    specifications: Specification[];
    capacity: number;
    weight: number;
    fuelType: "Diesel" | "Electric" | "Hybrid";
    dailyRate: number;
    weeklyRate: number;
    monthlyRate: number;
    availability: "available" | "limited" | "unavailable";
    features: string[];
    yearManufactured: number;
}

export interface Specification {
    name: string;
    value: string;
    unit?: string;
}

export type EquipmentCategory =
    | "excavators"
    | "cranes"
    | "bulldozers"
    | "loaders"
    | "dump-trucks"
    | "compactors"
    | "forklifts";

export interface Project {
    id: string;
    slug: string;
    name: string;
    client: string;
    industry: string;
    location: string;
    date: string;
    heroImage: string;
    beforeImage?: string;
    afterImage?: string;
    challenge: string;
    solution: string;
    results: string;
    equipmentUsed: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    gallery: string[];
}

export interface Service {
    id: string;
    name: string;
    slug: string;
    icon: string;
    description: string;
    features: string[];
    pricingInfo: string;
}

// Mock Equipment Data
export const equipmentData: Equipment[] = [
    {
        id: "1",
        slug: "cat-320-excavator",
        name: "CAT 320 Excavator",
        category: "excavators",
        brand: "Caterpillar",
        model: "320 GC",
        description: "The Cat 320 GC excavator delivers the performance, durability and fuel efficiency you need for your operations. It offers lower maintenance costs and simplified serviceability to help you get the most from your investment.",
        shortDescription: "20-ton hydraulic excavator with GPS and advanced hydraulics",
        heroImage: "/equipment/cat-320.jpg",
        gallery: ["/equipment/cat-320-1.jpg", "/equipment/cat-320-2.jpg", "/equipment/cat-320-3.jpg"],
        specifications: [
            { name: "Operating Weight", value: "20,000", unit: "kg" },
            { name: "Engine Power", value: "121", unit: "kW" },
            { name: "Bucket Capacity", value: "1.19", unit: "m³" },
            { name: "Max Dig Depth", value: "6.7", unit: "m" },
            { name: "Max Reach", value: "9.9", unit: "m" },
            { name: "Fuel Tank", value: "410", unit: "L" },
        ],
        capacity: 20,
        weight: 20000,
        fuelType: "Diesel",
        dailyRate: 350,
        weeklyRate: 2100,
        monthlyRate: 7500,
        availability: "available",
        features: ["GPS Equipped", "Climate Control Cab", "Rear Camera", "Quick Coupler"],
        yearManufactured: 2022,
    },
    {
        id: "2",
        slug: "liebherr-ltm-1100",
        name: "Liebherr LTM 1100",
        category: "cranes",
        brand: "Liebherr",
        model: "LTM 1100-5.2",
        description: "The Liebherr LTM 1100-5.2 is an all-terrain mobile crane with a maximum lifting capacity of 100 tonnes. Its compact dimensions and excellent mobility make it ideal for a wide range of lifting tasks.",
        shortDescription: "100-ton all-terrain mobile crane for heavy lifting",
        heroImage: "/equipment/liebherr-ltm1100.jpg",
        gallery: ["/equipment/liebherr-1.jpg", "/equipment/liebherr-2.jpg"],
        specifications: [
            { name: "Max Capacity", value: "100", unit: "tonnes" },
            { name: "Main Boom", value: "52", unit: "m" },
            { name: "Max Tip Height", value: "91", unit: "m" },
            { name: "Axles", value: "5", unit: "" },
            { name: "Engine Power", value: "370", unit: "kW" },
            { name: "Travel Speed", value: "80", unit: "km/h" },
        ],
        capacity: 100,
        weight: 60000,
        fuelType: "Diesel",
        dailyRate: 850,
        weeklyRate: 5100,
        monthlyRate: 18000,
        availability: "available",
        features: ["All-Terrain", "LICCON Control", "VarioBase", "Wind Speed Indicator"],
        yearManufactured: 2021,
    },
    {
        id: "3",
        slug: "komatsu-d65-bulldozer",
        name: "Komatsu D65EX Bulldozer",
        category: "bulldozers",
        brand: "Komatsu",
        model: "D65EX-18",
        description: "The Komatsu D65EX-18 is equipped with an auto blade control system, providing efficient and precise grading. The powerful engine and strong undercarriage ensure reliable performance in demanding conditions.",
        shortDescription: "18-ton crawler dozer with auto blade control",
        heroImage: "/equipment/komatsu-d65.jpg",
        gallery: ["/equipment/komatsu-1.jpg", "/equipment/komatsu-2.jpg"],
        specifications: [
            { name: "Operating Weight", value: "18,500", unit: "kg" },
            { name: "Engine Power", value: "153", unit: "kW" },
            { name: "Blade Capacity", value: "4.5", unit: "m³" },
            { name: "Blade Width", value: "3.9", unit: "m" },
            { name: "Ground Pressure", value: "0.64", unit: "kg/cm²" },
            { name: "Track Shoe Width", value: "560", unit: "mm" },
        ],
        capacity: 18,
        weight: 18500,
        fuelType: "Diesel",
        dailyRate: 400,
        weeklyRate: 2400,
        monthlyRate: 8500,
        availability: "limited",
        features: ["Auto Blade Control", "Ripper Equipped", "Palm Command", "ROPS Cab"],
        yearManufactured: 2023,
    },
    {
        id: "4",
        slug: "volvo-l220h-loader",
        name: "Volvo L220H Wheel Loader",
        category: "loaders",
        brand: "Volvo",
        model: "L220H",
        description: "The Volvo L220H is a high-production wheel loader designed for heavy-duty applications. With OptiShift technology and a Volvo engine, it delivers exceptional fuel efficiency without compromising power.",
        shortDescription: "22-ton wheel loader with OptiShift technology",
        heroImage: "/equipment/volvo-l220h.jpg",
        gallery: ["/equipment/volvo-1.jpg", "/equipment/volvo-2.jpg"],
        specifications: [
            { name: "Operating Weight", value: "33,400", unit: "kg" },
            { name: "Engine Power", value: "283", unit: "kW" },
            { name: "Bucket Capacity", value: "5.6", unit: "m³" },
            { name: "Breakout Force", value: "269", unit: "kN" },
            { name: "Dump Height", value: "3.2", unit: "m" },
            { name: "Fuel Tank", value: "480", unit: "L" },
        ],
        capacity: 22,
        weight: 33400,
        fuelType: "Diesel",
        dailyRate: 380,
        weeklyRate: 2280,
        monthlyRate: 8100,
        availability: "available",
        features: ["OptiShift", "Load Assist", "Boom Suspension", "Climate Control"],
        yearManufactured: 2022,
    },
    {
        id: "5",
        slug: "hitachi-zx350-excavator",
        name: "Hitachi ZX350LC Excavator",
        category: "excavators",
        brand: "Hitachi",
        model: "ZX350LC-6",
        description: "The Hitachi ZX350LC-6 offers powerful performance with excellent fuel efficiency. Its advanced hydraulic system ensures smooth operation and precise control for demanding excavation tasks.",
        shortDescription: "35-ton excavator with advanced HIOS IV hydraulics",
        heroImage: "/equipment/hitachi-zx350.jpg",
        gallery: ["/equipment/hitachi-1.jpg", "/equipment/hitachi-2.jpg"],
        specifications: [
            { name: "Operating Weight", value: "35,200", unit: "kg" },
            { name: "Engine Power", value: "202", unit: "kW" },
            { name: "Bucket Capacity", value: "1.6", unit: "m³" },
            { name: "Max Dig Depth", value: "7.6", unit: "m" },
            { name: "Max Reach", value: "11.7", unit: "m" },
            { name: "Fuel Tank", value: "650", unit: "L" },
        ],
        capacity: 35,
        weight: 35200,
        fuelType: "Diesel",
        dailyRate: 480,
        weeklyRate: 2880,
        monthlyRate: 10200,
        availability: "available",
        features: ["HIOS IV Hydraulics", "ECO Mode", "Spacious Cab", "Pattern Select"],
        yearManufactured: 2021,
    },
    {
        id: "6",
        slug: "terex-rt100-crane",
        name: "Terex RT100 Rough Terrain Crane",
        category: "cranes",
        brand: "Terex",
        model: "RT 100",
        description: "The Terex RT100 is a versatile rough terrain crane with 100-ton capacity. Its four-wheel drive and crab steering provide excellent maneuverability on challenging job sites.",
        shortDescription: "100-ton rough terrain crane for off-road lifting",
        heroImage: "/equipment/terex-rt100.jpg",
        gallery: ["/equipment/terex-1.jpg", "/equipment/terex-2.jpg"],
        specifications: [
            { name: "Max Capacity", value: "100", unit: "tonnes" },
            { name: "Main Boom", value: "47", unit: "m" },
            { name: "Jib Extension", value: "17", unit: "m" },
            { name: "Engine Power", value: "276", unit: "kW" },
            { name: "Travel Speed", value: "35", unit: "km/h" },
            { name: "Gradeability", value: "65", unit: "%" },
        ],
        capacity: 100,
        weight: 55000,
        fuelType: "Diesel",
        dailyRate: 780,
        weeklyRate: 4680,
        monthlyRate: 16500,
        availability: "available",
        features: ["4WD", "Crab Steering", "LMI System", "Outrigger Sensors"],
        yearManufactured: 2022,
    },
    {
        id: "7",
        slug: "cat-d8t-bulldozer",
        name: "CAT D8T Bulldozer",
        category: "bulldozers",
        brand: "Caterpillar",
        model: "D8T",
        description: "The Cat D8T dozer offers legendary performance with improved fuel efficiency. Its robust structure and powerful drivetrain make it ideal for large earthmoving projects.",
        shortDescription: "38-ton track-type tractor for major earthmoving",
        heroImage: "/equipment/cat-d8t.jpg",
        gallery: ["/equipment/cat-d8t-1.jpg", "/equipment/cat-d8t-2.jpg"],
        specifications: [
            { name: "Operating Weight", value: "38,500", unit: "kg" },
            { name: "Engine Power", value: "264", unit: "kW" },
            { name: "Blade Capacity", value: "11.9", unit: "m³" },
            { name: "Blade Width", value: "4.5", unit: "m" },
            { name: "Ground Pressure", value: "0.89", unit: "kg/cm²" },
            { name: "Track Shoe Width", value: "610", unit: "mm" },
        ],
        capacity: 38,
        weight: 38500,
        fuelType: "Diesel",
        dailyRate: 650,
        weeklyRate: 3900,
        monthlyRate: 13800,
        availability: "limited",
        features: ["ARO", "Slope Assist", "Single Shank Ripper", "Comfort Cab"],
        yearManufactured: 2023,
    },
    {
        id: "8",
        slug: "komatsu-wa470-loader",
        name: "Komatsu WA470 Wheel Loader",
        category: "loaders",
        brand: "Komatsu",
        model: "WA470-8",
        description: "The Komatsu WA470-8 is designed for efficiency and productivity in quarry and heavy construction applications. Its powerful engine and intelligent control systems ensure optimal performance.",
        shortDescription: "27-ton wheel loader for quarry operations",
        heroImage: "/equipment/komatsu-wa470.jpg",
        gallery: ["/equipment/komatsu-wa470-1.jpg", "/equipment/komatsu-wa470-2.jpg"],
        specifications: [
            { name: "Operating Weight", value: "27,000", unit: "kg" },
            { name: "Engine Power", value: "232", unit: "kW" },
            { name: "Bucket Capacity", value: "4.8", unit: "m³" },
            { name: "Breakout Force", value: "222", unit: "kN" },
            { name: "Dump Height", value: "3.0", unit: "m" },
            { name: "Fuel Tank", value: "400", unit: "L" },
        ],
        capacity: 27,
        weight: 27000,
        fuelType: "Diesel",
        dailyRate: 420,
        weeklyRate: 2520,
        monthlyRate: 8900,
        availability: "available",
        features: ["EMMS", "Variable Traction Control", "Lock-up Torque Converter", "ROPS Cab"],
        yearManufactured: 2022,
    },
];

// Mock Projects Data
export const projectsData: Project[] = [
    {
        id: "1",
        slug: "downtown-tower-construction",
        name: "Downtown Tower Construction",
        client: "Metro Development Corp",
        industry: "Commercial Construction",
        location: "Houston, TX",
        date: "2024-01",
        heroImage: "/projects/tower-1.jpg",
        challenge: "The client needed to construct a 45-story commercial tower in a congested downtown area with limited space for equipment staging.",
        solution: "We provided a fleet of compact excavators, high-reach tower cranes, and specialized material handlers. Our logistics team coordinated just-in-time equipment delivery to maximize site efficiency.",
        results: "The project was completed 2 weeks ahead of schedule with zero equipment-related delays. The client saved an estimated $200,000 in project costs.",
        equipmentUsed: ["2", "1", "5"],
        testimonial: {
            quote: "HEXA Rent's equipment and support were instrumental in keeping our project on track. Their 24/7 availability meant we never had downtime.",
            author: "Michael Johnson",
            role: "Project Director, Metro Development Corp",
        },
        gallery: ["/projects/tower-2.jpg", "/projects/tower-3.jpg"],
    },
    {
        id: "2",
        slug: "highway-expansion-project",
        name: "I-45 Highway Expansion",
        client: "Texas DOT",
        industry: "Infrastructure",
        location: "Dallas-Houston Corridor",
        date: "2023-06",
        heroImage: "/projects/highway-1.jpg",
        challenge: "A major highway expansion requiring massive earthmoving operations across a 50-mile stretch while maintaining traffic flow.",
        solution: "Deployed multiple D8T bulldozers, excavators, and motor graders. Coordinated night-shift operations to minimize traffic impact.",
        results: "Moved over 2 million cubic yards of earth. Project met all environmental compliance requirements and finished within budget.",
        equipmentUsed: ["7", "3", "8"],
        gallery: ["/projects/highway-2.jpg", "/projects/highway-3.jpg"],
    },
    {
        id: "3",
        slug: "solar-farm-installation",
        name: "West Texas Solar Farm",
        client: "GreenEnergy Partners",
        industry: "Renewable Energy",
        location: "Midland, TX",
        date: "2024-03",
        heroImage: "/projects/solar-1.jpg",
        challenge: "Installing solar panels across 500 acres of desert terrain required specialized ground preparation and pile driving equipment.",
        solution: "Provided compact loaders, mini excavators, and specialized pile drivers. Equipment was modified for minimal ground disturbance.",
        results: "Successfully prepared groundwork for 150,000 solar panels. The farm now generates 75MW of clean energy.",
        equipmentUsed: ["4", "1"],
        testimonial: {
            quote: "The reliability of HEXA Rent's equipment was crucial for our remote operation. Their preventive maintenance kept our project running smoothly.",
            author: "Sarah Chen",
            role: "Operations Manager, GreenEnergy Partners",
        },
        gallery: ["/projects/solar-2.jpg", "/projects/solar-3.jpg"],
    },
];

// Mock Services Data
export const servicesData: Service[] = [
    {
        id: "1",
        name: "Equipment Rental",
        slug: "rental",
        icon: "Truck",
        description: "Access our comprehensive fleet of heavy machinery for short or long-term projects. All equipment is regularly maintained and inspected.",
        features: [
            "Daily, weekly, and monthly rates",
            "Latest model equipment",
            "Regular maintenance included",
            "Flexible rental terms",
            "Insurance options available",
        ],
        pricingInfo: "Starting from $250/day",
    },
    {
        id: "2",
        name: "Operated Equipment",
        slug: "operated",
        icon: "Users",
        description: "Need skilled operators? Our certified professionals come with the equipment, ensuring safe and efficient operation on your job site.",
        features: [
            "Certified operators",
            "All licenses and permits",
            "Safety briefings included",
            "Flexible shifts available",
            "Bilingual operators",
        ],
        pricingInfo: "Contact for custom quotes",
    },
    {
        id: "3",
        name: "Transport & Logistics",
        slug: "transport",
        icon: "MapPin",
        description: "We handle all transportation needs, from equipment delivery to site relocation. Our logistics team ensures timely arrivals.",
        features: [
            "Nationwide delivery",
            "GPS tracking",
            "Same-day delivery (select areas)",
            "Oversized load permits",
            "Site assessment included",
        ],
        pricingInfo: "Starting from $500",
    },
    {
        id: "4",
        name: "Maintenance & Support",
        slug: "maintenance",
        icon: "Wrench",
        description: "Keep your rental equipment running smoothly with our 24/7 maintenance support. On-site repairs and preventive maintenance available.",
        features: [
            "24/7 emergency support",
            "Preventive maintenance",
            "On-site repairs",
            "Genuine parts only",
            "Equipment swap for major repairs",
        ],
        pricingInfo: "Included with rental",
    },
    {
        id: "5",
        name: "Project Consultation",
        slug: "consultation",
        icon: "ClipboardCheck",
        description: "Not sure what equipment you need? Our experts will assess your project and recommend the optimal equipment mix.",
        features: [
            "Free initial consultation",
            "Site visits available",
            "Equipment recommendations",
            "Cost optimization strategies",
            "Project timeline planning",
        ],
        pricingInfo: "Free consultation",
    },
];

// Helper functions
export function getEquipmentByCategory(category: EquipmentCategory): Equipment[] {
    return equipmentData.filter((eq) => eq.category === category);
}

export function getEquipmentBySlug(slug: string): Equipment | undefined {
    return equipmentData.find((eq) => eq.slug === slug);
}

export function getEquipmentById(id: string): Equipment | undefined {
    return equipmentData.find((eq) => eq.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projectsData.find((p) => p.slug === slug);
}

export function getRelatedEquipment(currentId: string, limit: number = 3): Equipment[] {
    const current = getEquipmentById(currentId);
    if (!current) return [];

    return equipmentData
        .filter((eq) => eq.id !== currentId && eq.category === current.category)
        .slice(0, limit);
}

export const categoryLabels: Record<EquipmentCategory, string> = {
    excavators: "Excavators",
    cranes: "Cranes",
    bulldozers: "Bulldozers",
    loaders: "Loaders",
    "dump-trucks": "Dump Trucks",
    compactors: "Compactors",
    forklifts: "Forklifts",
};
