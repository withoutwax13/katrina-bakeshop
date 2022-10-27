const VARS = {
    app_url: `http://localhost:3000/`,
    api_url: `http://withoutwax13.github.io/katrina-bakeshop-react`,
    store: [
        {
            id: 0,
            type: "cake",
            name: "Blueberry Cheesecake",
            price: {
                no_bundle: 1499.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "This rich, velvety, and luscious cheesecake is studded with blueberries that burst with sweetness in every bite.",
            imageSource: "p1_blueberry.jpg",
            storeStock: 100
        },
        {
            id: 1,
            type: "bread&pastries",
            name: "Filled Croissant",
            price: {
                no_bundle: null,
                with_bundle: {
                    box_with_6: 90.00,
                    box_with_12: 160.00
                }
            },
            defaultCurrency: "PHP",
            productDescription: "A rich, buttery, crescent-shaped roll of leavened dough with its rich flavorful fillings!",
            imageSource: "p12_croissant.webp",
            storeStock: 100
        },
        {
            id: 2,
            type: "cake",
            name: "Redvelvet Cake",
            price: {
                no_bundle: 1299.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "Super moist, buttery, tender and soft cake with the most perfect red velvet flavor. Topped with easy cream cheese frosting.",
            imageSource: "p2_Redvelvet_cake.jpg",
            storeStock: 100
        },
        {
            id: 3,
            type: "cake",
            name: "Strawberry Shortcake",
            price: {
                no_bundle: 1699.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "A tender vanilla cake filled with layers of whipped cream frosting and juicy strawberries",
            imageSource: "p5_strawberryshortcake.jpg",
            storeStock: 100
        },
        {
            id: 4,
            type: "cake",
            name: "Mocha Cake",
            price: {
                no_bundle: 1399.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "This mocha cake is moist, fluffy and packed with chocolate and coffee flavor.",
            imageSource: "p6_mocha_cake.jpg",
            storeStock: 100
        },
        {
            id: 5,
            type: "cake",
            name: "Triple chocolate Cake",
            price: {
                no_bundle: 1199.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "This Simple Chocolate Cake is wonderfully moist and so delicious with a chocolate fudge frosting.",
            imageSource: "p3_triple_chocolate_cake.jpg",
            storeStock: 100
        },
        {
            id: 6,
            type: "cake",
            name: "Sans Rival",
            price: {
                no_bundle: 1999.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "This cake is a popular Filipino layer cake consisting of cashews meringue and French buttercream.",
            imageSource: "p9_sans_rival.jpg",
            storeStock: 100
        },
        {
            id: 7,
            type: "cake",
            name: "Carrot Cake",
            price: {
                no_bundle: 999.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "This Carrot Cake is moist and flavorful with grated carrots and is frosted with a delicious cream cheese frosting.",
            imageSource: "p4_carrotcake",
            storeStock: 100
        },
        {
            id: 8,
            type: "cake",
            name: "Brazo De Mercedes",
            price: {
                no_bundle: 699.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "This Filipino favorite cake, a delectably rich roll meringue with lemon custard filling.",
            imageSource: "p8_brazo_de_mercedes.jpg",
            storeStock: 100
        },
        {
            id: 9,
            type: "cake",
            name: "Ube Macapuno Cake",
            price: {
                no_bundle: 1899.00,
                with_bundle: null
            },
            defaultCurrency: "PHP",
            productDescription: "Bbe cake is made with purple yams, filled with macapuno (coconut preserves), Our Bakeshops BEST SELLING cake!",
            imageSource: "p14_ube_macapuno.jpg",
            storeStock: 100
        },
        {
            id: 10,
            type: "bread&pastries",
            name: "Macarons",
            price: {
                no_bundle: null,
                with_bundle: {
                    box_with_6: 150.00,
                    box_with_12: 160.00
                }
            },
            defaultCurrency: "PHP",
            productDescription: "Sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food flavorings!",
            imageSource: "p7_macaroon.jpg",
            storeStock: 100
        },
        {
            id: 11,
            type: "bread&pastries",
            name: "Glazed Donuts",
            price: {
                no_bundle: null,
                with_bundle: {
                    box_with_6: 130.00,
                    box_with_12: 160.00
                }
            },
            defaultCurrency: "PHP",
            productDescription: "This homemade Glazed Donuts recipe makes light and fluffy donuts which are truly luscious and classic!",
            imageSource: "p11_glazed donut.jpg",
            storeStock: 100
        },
        {
            id: 12,
            type: "bread&pastries",
            name: "Baguette",
            price: {
                no_bundle: null,
                with_bundle: {
                    box_with_6: 90.00,
                    box_with_12: 160.00
                }
            },
            defaultCurrency: "PHP",
            productDescription: "A long, thin loaf of bread made from white wheat flour that is freshly baked every day!",
            imageSource: "bread.jpg",
            storeStock: 100
        },
        {
            id: 13,
            type: "bread&pastries",
            name: "Premium Muffins",
            price: {
                no_bundle: null,
                with_bundle: {
                    box_with_6: 250.00,
                    box_with_12: 160.00
                }
            },
            defaultCurrency: "PHP",
            productDescription: "This chocolate muffins with its mouth watering chocolate chips on top that your family will surely love!",
            imageSource: "p13_chocolate chip_muffins.webp",
            storeStock: 100
        },
        {
            id: 14,
            type: "bread&pastries",
            name: "Assorted Cupcakes",
            price: {
                no_bundle: null,
                with_bundle: {
                    box_with_6: 180.00,
                    box_with_12: 160.00
                }
            },
            defaultCurrency: "PHP",
            productDescription: "This cupcakes are colorful, beautifully made and aesthetically designed to satisfy not just your stomach but your eyes as well!",
            imageSource: "p13 cupcake.jpg",
            storeStock: 100
        },
    ]
}

export default VARS