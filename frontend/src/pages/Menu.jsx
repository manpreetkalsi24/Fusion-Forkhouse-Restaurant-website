


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