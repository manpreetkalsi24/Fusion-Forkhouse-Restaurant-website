// Importing CSS file
import "./Menu.css";

// This is our menu data
const menuItems = [
  { id: 1, name: "Crispy Calamari", price: 12.99, image: "/images/calamari.jpg" },
  { id: 2, name: "Classic Caesar Salad", price: 11.99, image: "/images/caesar.jpg" },
  { id: 3, name: "Grilled Salmon", price: 24.99, image: "/images/salmon.jpg" },
  { id: 4, name: "Tiramisu", price: 10.99, image: "/images/tiramisu.jpg" },
  { id: 5, name: "Crème Brûlée", price: 8.99, image: "/images/creme.jpg" },
  { id: 6, name: "Grilled Asparagus", price: 7.99, image: "/images/asparagus.jpg" },
  { id: 7, name: "Grilled Chicken Bites", price: 8.99, image: "/images/chicken.jpg" },
  { id: 8, name: "Spicy Shrimp Pasta", price: 15.95, image: "/images/pasta.jpg" },
  { id: 9, name: "Veggie Delight Wrap", price: 6.49, image: "/images/wrap.jpg" }
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