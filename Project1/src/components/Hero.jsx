const HeroSection = () => {
    return(
        <main className="Hero container">
            <div className="Hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH 
            OUR 
            SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-bth">Catagory</button>
            </div> 
            <div className="shopping">
                <p>Also Available on</p>
                <div className="Brand-Icon">
                    <img src="/images/amazon.png" alt="amazon.logo" />
                    <img src="/images/flipkart.png" alt="flipkart.logo" />
                </div>
                </div> 
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="hero-image" />
            </div>
        </main>
    );
};
export default HeroSection 