import Carousel from 'nuka-carousel'
import './slider.css'

export const Slider = () => {
    const slides = [
    'https://img.freepik.com/free-psd/fashion-banner-template-design_23-2148509058.jpg',
    'https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148939458.jpg',
    'https://img.freepik.com/free-psd/fashion-banner-template_23-2148509060.jpg'
    ]
    const params = {
        wrapAround: true,
        animation: 'fade',
        autoplay: true,
        autoplayInterval: '5000',
        speed: '1000',
        pauseOnHover:false,
        defaultControlsConfig: {
            containerClassName : 'containerClassName',
            nextButtonClassName : 'nextButtonClassName',
            prevButtonClassName : 'prevButtonClassName',
            pagingDotsContainerClassName: 'dotButton',
            
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