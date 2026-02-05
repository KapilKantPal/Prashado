export type MenuItem = {
    id: string;
    name: string;
    price: number;
    description?: string;
    image?: string; // URL to the image
    isAddOn?: boolean;
};

export type MenuCategory = {
    id: string;
    title: string;
    items: MenuItem[];
    color: string;
    doodle: 'pizza' | 'momo' | 'beverage' | 'noodles' | 'fries' | 'spiral' | 'corn';
};

export const MENU_DATA: MenuCategory[] = [
    {
        id: "cat_pizza",
        title: "Pizzas",
        color: "text-orange-500",
        doodle: "pizza",
        items: [
            { id: "p1", name: "Corn and Cheese Pizza", price: 149, description: "Sweet corn and cheesy goodness" },
            { id: "p2", name: "Veggie Loaded Pizza", price: 199, description: "Fully loaded with fresh vegetables" },
            { id: "p3", name: "Capsicum and Tomato Pizza", price: 149, description: "Classic combination" },
            { id: "p4", name: "Paneer Tikka Pizza", price: 199, description: "Spicy marinated paneer topping" },
            { id: "p5", name: "Margherita Pizza", price: 179, description: "Classic cheese pizza" },
            { id: "ADD1", name: "Cheese Burst (Add on)", price: 49, isAddOn: true, description: "Extra cheese layer for any pizza" },
        ],
    },
    {
        id: "cat_momo",
        title: "Momos",
        color: "text-yellow-500",
        doodle: "momo",
        items: [
            { id: "m_steamed_half", name: "Steamed Momos - Half Plate", price: 59, description: "Pure sattvik momos made with fresh veggies" },
            { id: "m_steamed_full", name: "Steamed Momos - Full Plate", price: 109, description: "Pure sattvik momos made with fresh veggies" },
            { id: "m_fried_half", name: "Fried Momos - Half Plate", price: 69, description: "Crispy fried pure sattvik momos" },
            { id: "m_fried_full", name: "Fried Momos - Full Plate", price: 129, description: "Crispy fried pure sattvik momos" },
            { id: "m_gravy_half", name: "Gravy Momos - Half Plate", price: 79, description: "Momos tossed in rich gravy" },
            { id: "m_gravy_full", name: "Gravy Momos - Full Plate", price: 149, description: "Momos tossed in rich gravy" },
            { id: "m_kurkure_half", name: "Kurkure Momos - Half Plate", price: 89, description: "Crunchy kurkure coated momos" },
            { id: "m_kurkure_full", name: "Kurkure Momos - Full Plate", price: 169, description: "Crunchy kurkure coated momos" },
        ],
    },
    {
        id: "cat_noodles",
        title: "Noodles",
        color: "text-red-500",
        doodle: "noodles",
        items: [
            { id: "n1", name: "Classic Instant Noodles", price: 49 },
            { id: "n2", name: "Butter Peri Peri Instant Noodles", price: 59 },
            { id: "n3", name: "Cream Cheese Instant Noodles", price: 69 },
        ],
    },
    {
        id: "cat_fries",
        title: "Fries",
        color: "text-yellow-400",
        doodle: "fries",
        items: [
            { id: "f1", name: "Classic Salted Fries", price: 59 },
            { id: "f2", name: "Peri Peri Fries", price: 69 },
            { id: "f3", name: "Cheese Fries", price: 89 },
            { id: "f4", name: "Loaded Fries", price: 109, description: "Topped with cheese and veggies" },
        ],
    },
    {
        id: "cat_spiral",
        title: "Spiral Potato",
        color: "text-amber-600",
        doodle: "spiral",
        items: [
            { id: "s1", name: "Masala Spiral Potato", price: 59 },
            { id: "s2", name: "Creamy Spiral Potato", price: 79 },
        ],
    },
    {
        id: "cat_corn",
        title: "Corn",
        color: "text-yellow-300",
        doodle: "corn",
        items: [
            { id: "c1", name: "Peri Peri Masala Sweet Corn", price: 55 },
            { id: "c2", name: "Sweet Corn Chaat", price: 59 },
            { id: "c3", name: "Cheese and Herbs Sweet Corn", price: 65 },
        ],
    },
    {
        id: "cat_beverage",
        title: "Beverages & Mojitos",
        color: "text-blue-400",
        doodle: "beverage",
        items: [
            { id: "b1", name: "Lemon Masala Soda", price: 59 },
            { id: "b2", name: "Black Currant Mojito", price: 79 },
            { id: "b3", name: "Kiwi Mojito", price: 79 },
            { id: "b4", name: "Pineapple Mojito", price: 79 },
            { id: "b5", name: "Strawberry Mojito", price: 79 },
        ],
    },
];
