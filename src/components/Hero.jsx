const Hero = () => {
    return (
        <main className="Hero container">
            <div className="hero-cont">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
                </p>
                <div className="hero-button">
                    <button>SHOP NOW</button>
                    <button>CATEGORY</button>
                </div>
                <div className="shop">
                    <p>
                    Also Available On 
                    </p>

                    <div className="logo">
                        <img src="./images/shop.png" alt="amazon" />
                    </div>
                    
                </div>
            </div>
            <div className="hero-photo">
                <img src="public\images\shoe_image.png" alt="sheo" />
            </div>
        </main>
    )
}
export default Hero;