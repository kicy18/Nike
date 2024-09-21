import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-start max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">

        
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You

            <span className="text-coral-red "> Super
               </span>
            <span className="text-coral-red "> Quality
               </span> Shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text ">
            Whether you're looking for trendy sneakers, comfortable casuals, or elegant formal shoes, we’ve got something for every style and occasion.  
            </p>
            
            <p className="mt-6 lg:max-w-lg info-text">Explore our range, enjoy secure transactions, and step into the world of quality and innovation. </p>
            <div className="mt-11">
            <Button label='View Details' />
              </div>

      </div>
      <div className="flex-1 flex justify-center items-start">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />

      </div>

    
    </section>
  )
}

export default SuperQuality