// Flick comparison between translateX and scrollLeft (React)
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import "./styles.css";

export const FlickEmblaCarousel = () => {
  // Embla Carouselの初期化
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // 前後のスライドに移動するための関数
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // スライド画像の配列を定義
  const slides = [
    { src: "/img/beautiful-rainbow-nature.jpg", alt: "スライド1" },
    {
      src: "/img/aerial-shot-megapolis-with-illuminated-high-buildings.jpg",
      alt: "スライド2",
    },
    { src: "/img/1114_water_hamon_9514.jpg", alt: "スライド3" },
    {
      src: "/img/pexels-ryutaro-tsukata-6249250.jpeg",
      alt: "スライド4",
    },
    {
      src: "/img/photo-1718287888958-efa8b9c8375a.jpeg",
      alt: "スライド5",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
