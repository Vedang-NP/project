// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const loginBtn = document.getElementById('loginBtn');
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');
    const productModal = document.getElementById('productModal');
    const closeProductModal = document.getElementById('closeProductModal');
    const exploreBtn = document.getElementById('exploreBtn');
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    const categoryCards = document.querySelectorAll('.category-card');
    const categoryDisplays = document.querySelectorAll('.category-display');
    const backToCategories = document.querySelectorAll('.back-to-categories');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');

    // Cart state
    let cart = [];
    let cartItemCount = 0;

// // Product data
// const productsData = {
//     sport: [
//         {
//             id: 101,
//             name: "Yamaha YZF-R1",
//             price: 17499,
//             image: "https://images.unsplash.com/photo-1550028061-c78be0412d3b?auto=format&fit=crop&w=1200&q=80",
//             description: "The Yamaha YZF-R1 is a 998 cc inline-four, liquid-cooled, 16-valve, DOHC, four-stroke motorcycle. It features a crossplane crankshaft and was first unveiled in 1998.",
//             specs: [
//                 "Engine: 998cc inline-four",
//                 "Power: 197 hp",
//                 "Torque: 112 Nm",
//                 "Top Speed: 186 mph",
//                 "Weight: 201 kg"
//             ]
//         },
//         {
//             id: 102,
//             name: "Honda CBR1000RR-R",
//             price: 28999,
//             image: "https://images.unsplash.com/photo-1686993291984-47e4d3af9f2f?auto=format&fit=crop&w=1200&q=80",
//             description: "The Honda CBR1000RR-R Fireblade SP is a hyper-sport motorcycle designed with technology derived from Honda's MotoGP program.",
//             specs: [
//                 "Engine: 999cc inline-four",
//                 "Power: 214 hp",
//                 "Torque: 113 Nm",
//                 "Top Speed: 186 mph",
//                 "Weight: 201 kg"
//             ]
//         },
//         {
//             id: 103,
//             name: "Suzuki GSX-R1000",
//             price: 16999,
//             image: "https://images.unsplash.com/photo-1558981001-1995369a39cd?auto=format&fit=crop&w=1200&q=80",
//             description: "The Suzuki GSX-R1000 is a sport bike made by Suzuki since 2001. It combines race-winning technology with street-riding practicality.",
//             specs: [
//                 "Engine: 999cc inline-four",
//                 "Power: 199 hp",
//                 "Torque: 117 Nm",
//                 "Top Speed: 186 mph",
//                 "Weight: 203 kg"
//             ]
//         },
//         {
//             id: 104,
//             name: "Aprilia RSV4",
//             price: 21999,
//             image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
//             description: "The Aprilia RSV4 is a high-performance sport bike known for its innovative engineering and race-winning capabilities.",
//             specs: [
//                 "Engine: 1099cc V4",
//                 "Power: 217 hp",
//                 "Torque: 122 Nm",
//                 "Top Speed: 186 mph",
//                 "Weight: 199 kg"
//             ]
//         }
//     ],

//     cruiser: [
//         {
//             id: 201,
//             name: "Harley-Davidson Road King",
//             price: 19999,
//             image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1200&q=80",
//             description: "The Harley-Davidson Road King is a classic touring motorcycle that combines traditional styling with modern performance.",
//             specs: [
//                 "Engine: 1868cc V-Twin",
//                 "Power: 93 hp",
//                 "Torque: 155 Nm",
//                 "Top Speed: 110 mph",
//                 "Weight: 349 kg"
//             ]
//         },
//         {
//             id: 202,
//             name: "Indian Chief Dark Horse",
//             price: 18999,
//             image: "https://images.unsplash.com/photo-1558980664-10e7170c8a8c?auto=format&fit=crop&w=1200&q=80",
//             description: "The Indian Chief Dark Horse combines aggressive blacked-out styling with the legendary power of the Thunder Stroke 116 engine.",
//             specs: [
//                 "Engine: 1890cc V-Twin",
//                 "Power: 92 hp",
//                 "Torque: 162 Nm",
//                 "Top Speed: 115 mph",
//                 "Weight: 337 kg"
//             ]
//         },
//         {
//             id: 203,
//             name: "Yamaha Bolt R-Spec",
//             price: 8999,
//             image: "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1200&q=80",
//             description: "The Yamaha Bolt R-Spec combines classic cruiser styling with modern performance and reliability.",
//             specs: [
//                 "Engine: 942cc V-Twin",
//                 "Power: 65 hp",
//                 "Torque: 80 Nm",
//                 "Top Speed: 110 mph",
//                 "Weight: 245 kg"
//             ]
//         },
//         {
//             id: 204,
//             name: "Honda Rebel 1100",
//             price: 9299,
//             image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
//             description: "The Honda Rebel 1100 offers a perfect blend of classic cruiser styling and modern technology.",
//             specs: [
//                 "Engine: 1084cc parallel-twin",
//                 "Power: 86 hp",
//                 "Torque: 98 Nm",
//                 "Top Speed: 125 mph",
//                 "Weight: 223 kg"
//             ]
//         }
//     ],

//     adventure: [
//         {
//             id: 301,
//             name: "BMW R 1250 GS",
//             price: 17495,
//             image: "https://images.unsplash.com/photo-1558980663-2cd3f9a5d1f7?auto=format&fit=crop&w=1200&q=80",
//             description: "The BMW R 1250 GS is the best-selling large-capacity motorcycle in many European countries and is considered the benchmark in the adventure touring category.",
//             specs: [
//                 "Engine: 1254cc flat-twin",
//                 "Power: 136 hp",
//                 "Torque: 143 Nm",
//                 "Top Speed: 124 mph",
//                 "Weight: 249 kg"
//             ]
//         },
//         {
//             id: 302,
//             name: "KTM 1290 Super Adventure R",
//             price: 18999,
//             image: "https://images.unsplash.com/photo-1558980394-0b9f2a3d4c9e?auto=format&fit=crop&w=1200&q=80",
//             description: "The KTM 1290 Super Adventure R is a high-performance adventure bike built for the most challenging off-road conditions.",
//             specs: [
//                 "Engine: 1301cc V-Twin",
//                 "Power: 160 hp",
//                 "Torque: 138 Nm",
//                 "Top Speed: 145 mph",
//                 "Weight: 217 kg"
//             ]
//         },
//         {
//             id: 303,
//             name: "Ducati Multistrada V4",
//             price: 21995,
//             image: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?auto=format&fit=crop&w=1200&q=80",
//             description: "The Ducati Multistrada V4 is a technologically advanced adventure bike with exceptional performance and comfort.",
//             specs: [
//                 "Engine: 1158cc V4",
//                 "Power: 170 hp",
//                 "Torque: 125 Nm",
//                 "Top Speed: 155 mph",
//                 "Weight: 215 kg"
//             ]
//         },
//         {
//             id: 304,
//             name: "Triumph Tiger 1200",
//             price: 19999,
//             image: "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&w=1200&q=80",
//             description: "The Triumph Tiger 1200 is a premium adventure bike designed for long-distance touring and off-road exploration.",
//             specs: [
//                 "Engine: 1215cc triple",
//                 "Power: 141 hp",
//                 "Torque: 122 Nm",
//                 "Top Speed: 135 mph",
//                 "Weight: 251 kg"
//             ]
//         }
//     ],

//     touring: [
//         {
//             id: 401,
//             name: "Harley-Davidson Electra Glide",
//             price: 21999,
//             image: "https://images.unsplash.com/photo-1558980664-10e7170c8a8c?auto=format&fit=crop&w=1200&q=80",
//             description: "The Harley-Davidson Electra Glide is a classic touring motorcycle known for its comfort, style, and long-distance capabilities.",
//             specs: [
//                 "Engine: 1868cc V-Twin",
//                 "Power: 93 hp",
//                 "Torque: 155 Nm",
//                 "Top Speed: 110 mph",
//                 "Weight: 379 kg"
//             ]
//         },
//         {
//             id: 402,
//             name: "BMW K 1600 GTL",
//             price: 24999,
//             image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
//             description: "The BMW K 1600 GTL is the ultimate luxury touring motorcycle with a powerful inline-six engine and premium features.",
//             specs: [
//                 "Engine: 1649cc inline-six",
//                 "Power: 160 hp",
//                 "Torque: 175 Nm",
//                 "Top Speed: 124 mph",
//                 "Weight: 348 kg"
//             ]
//         },
//         {
//             id: 403,
//             name: "Honda Gold Wing",
//             price: 23999,
//             image: "https://images.unsplash.com/photo-1558980394-0b9f2a3d4c9e?auto=format&fit=crop&w=1200&q=80",
//             description: "The Honda Gold Wing is the benchmark for luxury touring motorcycles, offering unparalleled comfort and advanced features.",
//             specs: [
//                 "Engine: 1833cc flat-six",
//                 "Power: 126 hp",
//                 "Torque: 170 Nm",
//                 "Top Speed: 124 mph",
//                 "Weight: 383 kg"
//             ]
//         },
//         {
//             id: 404,
//             name: "Yamaha Star Venture",
//             price: 26999,
//             image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
//             description: "The Yamaha Star Venture is a full-featured touring motorcycle designed for the ultimate long-distance riding experience.",
//             specs: [
//                 "Engine: 1854cc V-Twin",
//                 "Power: 100 hp",
//                 "Torque: 126 Nm",
//                 "Top Speed: 115 mph",
//                 "Weight: 427 kg"
//             ]
//         }
//     ]
// };


// // Featured products
// const featuredProducts = [
//     {
//         id: 1,
//         name: "Kawasaki H2R",
//         price: 55000,
//         image: "https://images.unsplash.com/photo-1558980664-10e7170c8a8c?auto=format&fit=crop&w=1200&q=80",
//         description: "Supercharged beast with 310 horsepower, carbon fiber body, and track-focused aerodynamics.",
//         specs: [
//             "Engine: 998cc supercharged inline-four",
//             "Power: 310 hp",
//             "Torque: 165 Nm",
//             "Top Speed: 249 mph (limited)",
//             "Weight: 216 kg"
//         ]
//     },
//     {
//         id: 2,
//         name: "BMW S1000RR",
//         price: 16995,
//         image: "https://images.unsplash.com/photo-1550028061-c78be0412d3b?auto=format&fit=crop&w=1200&q=80",
//         description: "Precision engineering with 207 horsepower, dynamic traction control, and race ABS.",
//         specs: [
//             "Engine: 999cc inline-four",
//             "Power: 207 hp",
//             "Torque: 113 Nm",
//             "Top Speed: 186 mph",
//             "Weight: 197 kg"
//         ]
//     },
//     {
//         id: 3,
//         name: "Ducati Panigale V4",
//         price: 23995,
//         image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1200&q=80",
//         description: "Italian masterpiece with 214 horsepower, advanced electronics, and MotoGP-derived technology.",
//         specs: [
//             "Engine: 1103cc V4",
//             "Power: 214 hp",
//             "Torque: 124 Nm",
//             "Top Speed: 186 mph",
//             "Weight: 198 kg"
//         ]
//     }
// ];


// // Additional collection products
// const collectionProducts = [
//     {
//         id: 501,
//         name: "Triumph Street Triple RS",
//         price: 11999,
//         image: "https://images.unsplash.com/photo-1558980664-10e7170c8a8c?auto=format&fit=crop&w=1200&q=80",
//         description: "The Triumph Street Triple RS is a premium naked sport bike with exceptional handling and performance.",
//         specs: [
//             "Engine: 765cc triple",
//             "Power: 123 hp",
//             "Torque: 79 Nm",
//             "Top Speed: 145 mph",
//             "Weight: 166 kg"
//         ]
//     },
//     {
//         id: 502,
//         name: "MV Agusta Brutale 1000",
//         price: 28999,
//         image: "https://images.unsplash.com/photo-1550028061-c78be0412d3b?auto=format&fit=crop&w=1200&q=80",
//         description: "The MV Agusta Brutale 1000 is an exotic Italian naked bike with breathtaking performance and styling.",
//         specs: [
//             "Engine: 998cc inline-four",
//             "Power: 208 hp",
//             "Torque: 116 Nm",
//             "Top Speed: 186 mph",
//             "Weight: 186 kg"
//         ]
//     },
//     {
//         id: 503,
//         name: "KTM 790 Duke",
//         price: 9999,
//         image: "https://images.unsplash.com/photo-1558980663-2cd3f9a5d1f7?auto=format&fit=crop&w=1200&q=80",
//         description: "The KTM 790 Duke is a lightweight naked bike known for its agility and punchy performance.",
//         specs: [
//             "Engine: 799cc parallel-twin",
//             "Power: 105 hp",
//             "Torque: 87 Nm",
//             "Top Speed: 140 mph",
//             "Weight: 169 kg"
//         ]
//     },
//     {
//         id: 504,
//         name: "Moto Guzzi V85 TT",
//         price: 11999,
//         image: "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1200&q=80",
//         description: "The Moto Guzzi V85 TT is a stylish adventure bike with classic Italian character and modern capabilities.",
//         specs: [
//             "Engine: 853cc V-Twin",
//             "Power: 80 hp",
//             "Torque: 80 Nm",
//             "Top Speed: 125 mph",
//             "Weight: 229 kg"
//         ]
//     }
// ];


// Verified Unsplash image URLs

const motorcycleImages = {
    yamahaR1:
        "https://images.unsplash.com/photo-1693321693576-9cc424b521b4?auto=format&fit=crop&w=1200&q=80",

    hondaCBR:
        "https://images.unsplash.com/photo-1729789688814-4017f5fee2b4?auto=format&fit=crop&w=1200&q=80",

    bmwS1000RR:
        "https://images.unsplash.com/photo-1711664803712-59587a849ed6?auto=format&fit=crop&w=1200&q=80",

    ktmAdventure:
        "https://images.unsplash.com/photo-1581661677546-13d490186195?auto=format&fit=crop&w=1200&q=80",

    ducati:
        "https://images.unsplash.com/photo-1769673459502-0cfd5de56a60?auto=format&fit=crop&w=1200&q=80",

    ducatiMonster:
        "https://images.unsplash.com/photo-1619419047157-7ea1f8e2ab38?auto=format&fit=crop&w=1200&q=80",

    bmw1000:
        "https://images.unsplash.com/photo-1594132665437-d2e8fd3c7ed0?auto=format&fit=crop&w=1200&q=80",

    yamahaR1Track:
        "https://images.unsplash.com/photo-1635933312878-d58e7153aa5c?auto=format&fit=crop&w=1200&q=80",

    adventure:
        "https://images.unsplash.com/photo-1781950878596-a16655127d7b?auto=format&fit=crop&w=1200&q=80",

    cruiser:
        "https://images.unsplash.com/photo-1592023012618-26584696df52?auto=format&fit=crop&w=1200&q=80",

    yamahaCruiser:
        "https://images.unsplash.com/photo-1595250100076-52b24d73b846?auto=format&fit=crop&w=1200&q=80"
};

const productsData = {
    sport: [
        {
            id: 101,
            name: "Yamaha YZF-R1",
            price: 17499,
            image: motorcycleImages.yamahaR1,
            description: "The Yamaha YZF-R1 is a 998 cc inline-four, liquid-cooled, 16-valve, DOHC, four-stroke motorcycle. It features a crossplane crankshaft and was first unveiled in 1998.",
            specs: [
                "Engine: 998cc inline-four",
                "Power: 197 hp",
                "Torque: 112 Nm",
                "Top Speed: 186 mph",
                "Weight: 201 kg"
            ]
        },
        {
            id: 102,
            name: "Honda CBR1000RR-R",
            price: 28999,
            image: motorcycleImages.hondaCBR,
            description: "The Honda CBR1000RR-R Fireblade SP is a hyper-sport motorcycle designed with technology derived from Honda's MotoGP program.",
            specs: [
                "Engine: 999cc inline-four",
                "Power: 214 hp",
                "Torque: 113 Nm",
                "Top Speed: 186 mph",
                "Weight: 201 kg"
            ]
        },
        {
            id: 103,
            name: "Suzuki GSX-R1000",
            price: 16999,
            image: motorcycleImages.bmw1000,
            description: "The Suzuki GSX-R1000 is a sport bike made by Suzuki since 2001. It combines race-winning technology with street-riding practicality.",
            specs: [
                "Engine: 999cc inline-four",
                "Power: 199 hp",
                "Torque: 117 Nm",
                "Top Speed: 186 mph",
                "Weight: 203 kg"
            ]
        },
        {
            id: 104,
            name: "Aprilia RSV4",
            price: 21999,
            image: motorcycleImages.ducati,
            description: "The Aprilia RSV4 is a high-performance sport bike known for its innovative engineering and race-winning capabilities.",
            specs: [
                "Engine: 1099cc V4",
                "Power: 217 hp",
                "Torque: 122 Nm",
                "Top Speed: 186 mph",
                "Weight: 199 kg"
            ]
        }
    ],

    cruiser: [
        {
            id: 201,
            name: "Harley-Davidson Road King",
            price: 19999,
            image: motorcycleImages.cruiser,
            description: "The Harley-Davidson Road King is a classic touring motorcycle that combines traditional styling with modern performance.",
            specs: [
                "Engine: 1868cc V-Twin",
                "Power: 93 hp",
                "Torque: 155 Nm",
                "Top Speed: 110 mph",
                "Weight: 349 kg"
            ]
        },
        {
            id: 202,
            name: "Indian Chief Dark Horse",
            price: 18999,
            image: motorcycleImages.yamahaCruiser,
            description: "The Indian Chief Dark Horse combines aggressive blacked-out styling with the legendary power of the Thunder Stroke 116 engine.",
            specs: [
                "Engine: 1890cc V-Twin",
                "Power: 92 hp",
                "Torque: 162 Nm",
                "Top Speed: 115 mph",
                "Weight: 337 kg"
            ]
        },
        {
            id: 203,
            name: "Yamaha Bolt R-Spec",
            price: 8999,
            image: motorcycleImages.yamahaCruiser,
            description: "The Yamaha Bolt R-Spec combines classic cruiser styling with modern performance and reliability.",
            specs: [
                "Engine: 942cc V-Twin",
                "Power: 65 hp",
                "Torque: 80 Nm",
                "Top Speed: 110 mph",
                "Weight: 245 kg"
            ]
        },
        {
            id: 204,
            name: "Honda Rebel 1100",
            price: 9299,
            image: motorcycleImages.cruiser,
            description: "The Honda Rebel 1100 offers a perfect blend of classic cruiser styling and modern technology.",
            specs: [
                "Engine: 1084cc parallel-twin",
                "Power: 86 hp",
                "Torque: 98 Nm",
                "Top Speed: 125 mph",
                "Weight: 223 kg"
            ]
        }
    ],

    adventure: [
        {
            id: 301,
            name: "BMW R 1250 GS",
            price: 17495,
            image: "images/category-adventure.jpg",
            description: "The BMW R 1250 GS is the best-selling large-capacity motorcycle in many European countries and is considered the benchmark in the adventure touring category.",
            specs: [
                "Engine: 1254cc flat-twin",
                "Power: 136 hp",
                "Torque: 143 Nm",
                "Top Speed: 124 mph",
                "Weight: 249 kg"
            ]
        },
        {
            id: 302,
            name: "KTM 1290 Super Adventure R",
            price: 18999,
            image: motorcycleImages.ktmAdventure,
            description: "The KTM 1290 Super Adventure R is a high-performance adventure bike built for the most challenging off-road conditions.",
            specs: [
                "Engine: 1301cc V-Twin",
                "Power: 160 hp",
                "Torque: 138 Nm",
                "Top Speed: 145 mph",
                "Weight: 217 kg"
            ]
        },
        {
            id: 303,
            name: "Ducati Multistrada V4",
            price: 21995,
            image: motorcycleImages.ducati,
            description: "The Ducati Multistrada V4 is a technologically advanced adventure bike with exceptional performance and comfort.",
            specs: [
                "Engine: 1158cc V4",
                "Power: 170 hp",
                "Torque: 125 Nm",
                "Top Speed: 155 mph",
                "Weight: 215 kg"
            ]
        },
        {
            id: 304,
            name: "Triumph Tiger 1200",
            price: 19999,
            image: motorcycleImages.adventure,
            description: "The Triumph Tiger 1200 is a premium adventure bike designed for long-distance touring and off-road exploration.",
            specs: [
                "Engine: 1215cc triple",
                "Power: 141 hp",
                "Torque: 122 Nm",
                "Top Speed: 135 mph",
                "Weight: 251 kg"
            ]
        }
    ],

    touring: [
        {
            id: 401,
            name: "Harley-Davidson Electra Glide",
            price: 21999,
            image: "images/category-cruiser.jpg",
            description: "The Harley-Davidson Electra Glide is a classic touring motorcycle known for its comfort, style, and long-distance capabilities.",
            specs: [
                "Engine: 1868cc V-Twin",
                "Power: 93 hp",
                "Torque: 155 Nm",
                "Top Speed: 110 mph",
                "Weight: 379 kg"
            ]
        },
        {
            id: 402,
            name: "BMW K 1600 GTL",
            price: 24999,
            image: "images/category-touring.jpg",
            description: "The BMW K 1600 GTL is the ultimate luxury touring motorcycle with a powerful inline-six engine and premium features.",
            specs: [
                "Engine: 1649cc inline-six",
                "Power: 160 hp",
                "Torque: 175 Nm",
                "Top Speed: 124 mph",
                "Weight: 348 kg"
            ]
        },
        {
            id: 403,
            name: "Honda Gold Wing",
            price: 23999,
            image: "images/category-touring.jpg",
            description: "The Honda Gold Wing is the benchmark for luxury touring motorcycles, offering unparalleled comfort and advanced features.",
            specs: [
                "Engine: 1833cc flat-six",
                "Power: 126 hp",
                "Torque: 170 Nm",
                "Top Speed: 124 mph",
                "Weight: 383 kg"
            ]
        },
        {
            id: 404,
            name: "Yamaha Star Venture",
            price: 26999,
            image: motorcycleImages.yamahaCruiser,
            description: "The Yamaha Star Venture is a full-featured touring motorcycle designed for the ultimate long-distance riding experience.",
            specs: [
                "Engine: 1854cc V-Twin",
                "Power: 100 hp",
                "Torque: 126 Nm",
                "Top Speed: 115 mph",
                "Weight: 427 kg"
            ]
        }
    ]
};

const featuredProducts = [
    {
        id: 1,
        name: "Kawasaki H2R",
        price: 55000,
        image: "images/featured-kawasaki-h2r.jpg",
        description: "Supercharged beast with 310 horsepower, carbon fiber body, and track-focused aerodynamics.",
        specs: [
            "Engine: 998cc supercharged inline-four",
            "Power: 310 hp",
            "Torque: 165 Nm",
            "Top Speed: 249 mph (limited)",
            "Weight: 216 kg"
        ]
    },
    {
        id: 2,
        name: "BMW S1000RR",
        price: 16995,
        image: "images/featured-bmw-s1000rr.jpg",
        description: "Precision engineering with 207 horsepower, dynamic traction control, and race ABS.",
        specs: [
            "Engine: 999cc inline-four",
            "Power: 207 hp",
            "Torque: 113 Nm",
            "Top Speed: 186 mph",
            "Weight: 197 kg"
        ]
    },
    {
        id: 3,
        name: "Ducati Panigale V4",
        price: 23995,
        image: "images/featured-ducati-v4.jpg",
        description: "Italian masterpiece with 214 horsepower, advanced electronics, and MotoGP-derived technology.",
        specs: [
            "Engine: 1103cc V4",
            "Power: 214 hp",
            "Torque: 124 Nm",
            "Top Speed: 186 mph",
            "Weight: 198 kg"
        ]
    }
];

const collectionProducts = [
    {
        id: 501,
        name: "Triumph Street Triple RS",
        price: 11999,
        image: motorcycleImages.bmw1000,
        description: "The Triumph Street Triple RS is a premium naked sport bike with exceptional handling and performance.",
        specs: [
            "Engine: 765cc triple",
            "Power: 123 hp",
            "Torque: 79 Nm",
            "Top Speed: 145 mph",
            "Weight: 166 kg"
        ]
    },
    {
        id: 502,
        name: "MV Agusta Brutale 1000",
        price: 28999,
        image: motorcycleImages.bmwS1000RR,
        description: "The MV Agusta Brutale 1000 is an exotic Italian naked bike with breathtaking performance and styling.",
        specs: [
            "Engine: 998cc inline-four",
            "Power: 208 hp",
            "Torque: 116 Nm",
            "Top Speed: 186 mph",
            "Weight: 186 kg"
        ]
    },
    {
        id: 503,
        name: "KTM 790 Duke",
        price: 9999,
        image: motorcycleImages.ktmAdventure,
        description: "The KTM 790 Duke is a lightweight naked bike known for its agility and punchy performance.",
        specs: [
            "Engine: 799cc parallel-twin",
            "Power: 105 hp",
            "Torque: 87 Nm",
            "Top Speed: 140 mph",
            "Weight: 169 kg"
        ]
    },
    {
        id: 504,
        name: "Moto Guzzi V85 TT",
        price: 11999,
        image: motorcycleImages.adventure,
        description: "The Moto Guzzi V85 TT is a stylish adventure bike with classic Italian character and modern capabilities.",
        specs: [
            "Engine: 853cc V-Twin",
            "Power: 80 hp",
            "Torque: 80 Nm",
            "Top Speed: 125 mph",
            "Weight: 229 kg"
        ]
    }
];


    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
           
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Explore button scroll to featured section
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const featuredSection = document.getElementById('featured');
            if (featuredSection) {
                window.scrollTo({
                    top: featuredSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Modal functionality
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            authModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            authModal.style.display = 'none';
        });
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
    }

    if (closeProductModal) {
        closeProductModal.addEventListener('click', () => {
            productModal.style.display = 'none';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // Tab switching in auth modal
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
           
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
           
            // Update active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tab}Tab`).classList.add('active');
        });
    });

    // View product details
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.closest('.product-card').getAttribute('data-id');
            const product = featuredProducts.find(p => p.id === parseInt(productId));
           
            if (product) {
                showProductDetails(product);
            }
        });
    });

    // Show product details in modal
    function showProductDetails(product) {
        const productDetailContent = document.getElementById('productDetailContent');
       
        productDetailContent.innerHTML = `
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h3>${product.name}</h3>
                <div class="price">$${product.price.toLocaleString()}</div>  
                <p>${product.description}</p>
               
                <div class="specs">
                    <h4>Specifications</h4>
                    <ul>
                        ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </div>
               
                <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
       
        // Add event listener to the Add to Cart button
        const addToCartBtn = productDetailContent.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                addToCart(product);
                productModal.style.display = 'none';
                cartSidebar.classList.add('active');
            });
        }
       
        productModal.style.display = 'flex';
    }

    // Category cards functionality
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            showCategoryDisplay(category);
        });
    });

    // Show category display
    function showCategoryDisplay(category) {
        // Hide all category displays
        categoryDisplays.forEach(display => {
            display.classList.remove('active');
        });
       
        // Show the selected category display
        const categoryDisplay = document.getElementById(`${category}-bikes-display`);
        if (categoryDisplay) {
            categoryDisplay.classList.add('active');
           
            // Scroll to the category display
            window.scrollTo({
                top: categoryDisplay.offsetTop - 100,
                behavior: 'smooth'
            });
           
            // Load category products
            loadCategoryProducts(category);
        }
    }

    // Load category products
    function loadCategoryProducts(category) {
        const categoryCollection = document.querySelector(`#${category}-bikes-display .category-collection`);
        const products = productsData[category] || [];
       
        categoryCollection.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description.substring(0, 100)}...</p>
                    <div class="price">$${product.price.toLocaleString()}</div>
                    <button class="view-details">View Details</button>
                </div>
            </div>
        `).join('');
       
        // Add event listeners to the new View Details buttons
        categoryCollection.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = btn.closest('.product-card').getAttribute('data-id');
                const product = products.find(p => p.id === parseInt(productId));
               
                if (product) {
                    showProductDetails(product);
                }
            });
        });
    }

    // Back to categories functionality
    backToCategories.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
           
            // Hide all category displays
            categoryDisplays.forEach(display => {
                display.classList.remove('active');
            });
           
            // Scroll to categories section
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) {
                window.scrollTo({
                    top: categoriesSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add to cart function
    function addToCart(product) {
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === product.id);
       
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
       
        cartItemCount += 1;
        updateCartUI();
    }

    // Update cart UI
    function updateCartUI() {
        // Update cart count
        cartCount.textContent = cartItemCount;
       
        // Update cart items
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toLocaleString()} x ${item.quantity}</div>
                </div>
                <div class="cart-item-remove">&times;</div>
            </div>
        `).join('');
       
        // Add event listeners to remove buttons
        cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.closest('.cart-item').getAttribute('data-id');
                removeFromCart(parseInt(itemId));
            });
        });
       
        // Update cart total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toLocaleString()}`;
    }

    // Remove from cart
    function removeFromCart(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
       
        if (itemIndex !== -1) {
            cartItemCount -= cart[itemIndex].quantity;
            cart.splice(itemIndex, 1);
            updateCartUI();
        }
    }

    // Form submissions
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality would be implemented here.');
            authModal.style.display = 'none';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign up functionality would be implemented here.');
            authModal.style.display = 'none';
        });
    }

    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
   
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
   
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Mouse move effect for product cards
    const productCards = document.querySelectorAll('.product-card');
   
    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
           
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Initialize the collection grid
    function initCollectionGrid() {
        const collectionGrid = document.querySelector('.collection-grid');
        if (!collectionGrid) return;
       
        // Combine all products from all categories
        const allProducts = [];
        for (const category in productsData) {
            allProducts.push(...productsData[category]);
        }
       
        // Add featured products
        allProducts.push(...featuredProducts);
       
        // Add collection products
        allProducts.push(...collectionProducts);
       
        // Display products in the collection grid
        collectionGrid.innerHTML = allProducts.map(product => `
            <div class="bike-item" data-id="${product.id}">
                <div class="bike-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="bike-info">
                    <h3>${product.name}</h3>
                    <div class="price">$${product.price.toLocaleString()}</div>
                    <button class="view-details">View Details</button>
                </div>
            </div>
        `).join('');
       
        // Add click event to show product details
        collectionGrid.querySelectorAll('.bike-item').forEach(item => {
            item.addEventListener('click', () => {
                const productId = item.getAttribute('data-id');
                let product = allProducts.find(p => p.id === parseInt(productId));
               
                if (product) {
                    showProductDetails(product);
                }
            });
        });
    }

    // Video fallback handling
    const video = document.getElementById('heroVideo');
    const videoBackground = document.querySelector('.video-background');
   
    if (video) {
        video.addEventListener('error', function() {
            // If video fails to load, show fallback
            if (videoBackground) videoBackground.classList.add('no-video');
        });
       
        // Check if video can play
        video.addEventListener('canplay', function() {
            if (videoBackground) videoBackground.classList.remove('no-video');
        });
       
        // For mobile devices, handle play interaction
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile && videoBackground) {
            const playButton = document.createElement('button');
            playButton.innerHTML = '▶ Play Video';
            playButton.className = 'mobile-play-btn';
            playButton.style.cssText = `
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--primary);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 20px;
                cursor: pointer;
                z-index: 10;
            `;
            playButton.addEventListener('click', function() {
                video.play();
                playButton.style.display = 'none';
            });
            videoBackground.appendChild(playButton);
        }
    }

    // Initialize the page
    initCollectionGrid();
});

