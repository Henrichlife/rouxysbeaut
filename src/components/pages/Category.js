const Category = ({ image, title, price, span, tag, cart }) => {
    return (
        <div className="Category">
            <div className="category-content">
                <div className="content-hold">
                    <img src={image} alt="item" />

                    <h4>{title}</h4>
                    <aside>{tag}</aside>
                </div>
                <div className="category-items">
                    <div className="price-tag">
                        <p>
                            {price}
                            <span>{span}</span>
                        </p>
                    </div>

                    <div className="price-cart">{cart}</div>
                </div>
            </div>
        </div>
    );
};

export default Category;
