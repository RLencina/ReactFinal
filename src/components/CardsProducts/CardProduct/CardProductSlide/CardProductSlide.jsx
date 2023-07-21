import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";


const CardProductSlide = ({imgs, title}) => {
  return (
    <Swiper
        style={{
        marginTop: '8px',
        width: '100%',
        height: '500px',
        borderRadius: '5px',
        boxShadow: '2px 2px 4px pink, -2px 2px 4px pink'
    }}
      
    >
        {imgs.map(img=>(
            <SwiperSlide key={img.id}>
                <img 
                src={img.img} 
                alt={`${title}`}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'contain'

                }}
                />
            </SwiperSlide>
        ))}

    </Swiper>
  );
};
export default CardProductSlide;
