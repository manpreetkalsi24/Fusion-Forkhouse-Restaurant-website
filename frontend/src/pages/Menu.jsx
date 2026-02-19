// Importing CSS file
import "./Menu.css";

// This is our menu data
const menuItems = [
  { id: 1, name: "Grilled Asparagus", price: 12.99, image: "/images/a1.jpg" },
  { id: 2, name: "Classic Caesar Salad", price: 11.99, image: "/images/cs2.jpg" },
  { id: 3, name: "Grilled Salmon", price: 24.99, image: "/images/g3.jpg" },
  { id: 4, name: "Tandoori Legs", price: 10.99, image: "/images/t1.jpg" },
  { id: 5, name: "Grilled Salmon", price: 8.99, image: "/images/g1.jpg" },
  { id: 6, name: "Oven Baked Wings", price: 7.99, image: "/images/indian2.jpg" },
  { id: 7, name: "Chaat Paapdi", price: 8.99, image: "/images/cp2.jpg" },
  { id: 8, name: "Tiramisu", price: 15.95, image: "/images/tm2.jpg" },
  { id: 9, name: "Tandoori Chicken", price: 6.49, image: "/images/t1.jpg" }
];


export default function Menu() {
    return (
        <section className="menu-page">

            {/* Page Title */}
            <div className="menu-header">
                <h1>Our Menu</h1>
                <p>
                    Explore a curated selection of delicious dishes crafted with the
                    freshest ingredients to satisfy every palate.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="menu-grid">

                {menuItems.map((item) => (
                    <div className="menu-card" key={item.id}>

                        {/* Dish Image */}
                        <div className="menu-image">
                            <img src={item.image} alt={item.name} />
                        </div>

                        {/* Dish Name + Price */}
                        <div className="menu-info">
                            <h3>{item.name}</h3>
                            <span>${item.price.toFixed(2)}</span>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}