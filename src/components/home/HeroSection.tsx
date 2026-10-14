
{/* CÔTÉ DROIT : IMAGE RESPONSIVE, SANS TEXTE NI TRAIT DÉCORATIF */}
<div className="flex min-w-0 w-full items-center justify-center md:justify-end">
  <div className="w-full max-w-[500px]">
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full overflow-hidden rounded-[28px]"
    >
      <CarouselContent className="ml-0">
        {heroImages.map((img, index) => (
          <CarouselItem
            key={index}
            className="basis-full pl-0"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-transparent sm:aspect-[5/4]">
              <img
                src={img.src}
                alt={img.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                draggable={false}
                className="absolute inset-0 block h-full w-full rounded-[28px] object-cover object-center"
                onError={(event) => {
                  console.error(
                    "Impossible de charger l'image du héros :",
                    img.src
                  );
                  event.currentTarget.style.visibility = "hidden";
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</div>
