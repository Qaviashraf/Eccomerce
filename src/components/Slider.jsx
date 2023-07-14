import Carousel from 'nuka-carousel'
import './slider.css'

export const Slider = () => {
    const slides = [
    'https://marketplace.canva.com/EAFWt8Wq208/1/0/1600w/canva-grey-minimalist-special-offer-banner-landscape-tVz4E4KVLgk.jpg',
    'https://cdn.shopify.com/s/files/1/0883/7918/files/2.1_480x480.jpg?v=1611064571',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvs3TcMwqv3Ekic_yCJ_D5PPBuE1_Q5WMdvZ_sglS-p8Q0aN3Z1pfJTp9Ez97HWfV7gMA&usqp=CAU'
    ]
    const params = {
        wrapAround: true,
        animation: 'zoom',
        autoplay: true,
        defaultControlsConfig: {
            containerClassName : 'containerClassName',
            nextButtonClassName : 'nextButtonClassName',
            prevButtonClassName : 'prevButtonClassName',
            
        }
    }

    return (
        <div className='slidercontainner'>
         <Carousel {...params}>
        {slides.map((slide) => (
          <img src={slide} key={slide}/>
        ))}
      </Carousel>
        </div>
    )
}