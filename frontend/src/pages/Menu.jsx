import { useState, useEffect } from "react";

// Importing CSS file
import "./Menu.css";

export default function Menu() {

    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Fetch from backend
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/menu`)
            .then(res => res.json())
            .then(data => setMenuItems(data))
            .catch(err => console.error("Error fetching menu:", err));
    }, []);

    // Get unique categories dynamically
    const categories = [
        "All",
        ...new Set(menuItems.map(item => item.category))
    ];

    // Filtering logic
    const filteredItems =
        selectedCategory === "All"
            ? menuItems
            : menuItems.filter(item => item.category === selectedCategory);

    return (
        <section className="menu-page">

            <div className="menu-header">
                <h1>Our Menu</h1>
                <p>
                    Explore a curated selection of delicious dishes crafted with the
                    freshest ingredients to satisfy every palate.
                </p>
            </div>

            <div className="menu-categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="menu-grid">
                {filteredItems.map((item) => (
                    <div className="menu-card" key={item._id}>
                        {/* <img 
                          src={`http://localhost:8888${item.image}`} 
                          alt={item.name} 
                        /> */}

                        <img 
                            src={`${import.meta.env.VITE_API_URL}${item.image}`} 
                            alt={item.name} 
                            />
                        <div className="menu-info">
                            <h3>{item.name}</h3>
                            <span>${Number(item.price).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

// // This is our menu data
//             const menuItems = [
//             {id: 1, name: "Grilled Asparagus", price: 12.99, category: "Starters", image: "/images/a1.jpg" },
//             {id: 2, name: "Classic Caesar Salad", price: 11.99, category: "Starters", image: "/images/cs2.jpg" },
//             {id: 3, name: "Grilled Salmon", price: 24.99, category: "Main Course", image: "/images/g3.jpg" },
//             {id: 4, name: "Tandoori Legs", price: 10.99, category: "Main Course", image: "/images/t1.jpg" },
//             {id: 5, name: "Grilled Salmon", price: 8.99, category: "Desserts", image: "/images/g1.jpg" },
//             {id: 6, name: "Oven Baked Wings", price: 7.99, category: "Desserts", image: "/images/indian2.jpg" },
//             {id: 7, name: "Chaat Paapdi", price: 8.99, category: "Drinks", image: "/images/cp2.jpg" },
//             {id: 8, name: "Tiramisu", price: 15.95, category: "Drinks", image: "/images/tm2.jpg" },
//             {id: 9, name: "Tandoori Chicken", price: 6.49, category: "Drinks", image: "/images/t1.jpg" }
//             ];

//             // Categories list
//             const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

//             export default function Menu() {

//     // This state keeps track of selected category
//     const [selectedCategory, setSelectedCategory] = useState("All");

//             // Filtering logic
//             const filteredItems =
//             selectedCategory === "All"
//             ? menuItems
//             : menuItems.filter((item) => item.category === selectedCategory);

//             return (
//             <section className="menu-page">

//                 {/* Page Title */}
//                 <div className="menu-header">
//                     <h1>Our Menu</h1>
//                     <p>
//                         Explore a curated selection of delicious dishes crafted with the
//                         freshest ingredients to satisfy every palate.
//                     </p>
//                 </div>

//                 {/* Category Buttons */}
//                 <div className="menu-categories">
//                     {categories.map((cat) => (
//                         <button
//                             key={cat}
//                             className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
//                             onClick={() => setSelectedCategory(cat)}
//                         >
//                             {cat}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Grid Layout */}
//                 {/* MENU GRID */}
//                 <div className="menu-grid">
//                     {filteredItems.map((item) => (
//                         <div className="menu-card" key={item.id}>
//                             <img src={item.image} alt={item.name} />
//                             <div className="menu-info">
//                                 <h3>{item.name}</h3>
//                                 <span>${item.price.toFixed(2)}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </section>
//             );
// }