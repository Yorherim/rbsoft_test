import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

import styles from "./Slider.module.css";

export const Slider = memo(({ pictures, className }) => {
  console.log("rerender Slider");
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      className={`${styles.slider} ${className}`}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {pictures.map((picture) => {
        return (
          <SwiperSlide key={picture.id}>
            <div className={styles["img-container"]}>
              <img src={picture.address} alt="picture" className={styles.img} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
});
