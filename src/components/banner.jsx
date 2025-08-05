import logo from "../assets/facet.jpg"
const Banner = () => {
    return (
        <header>
            <div>
                {/* form src */}
                <img src={logo} alt="logo"></img>
            </div>
           <div>
               Provide
           </div>
           <div>
               {/* from global assets */}
           <img src="./vite.svg" alt="logo"></img>
           </div>
        </header>
    )
}

export default Banner;