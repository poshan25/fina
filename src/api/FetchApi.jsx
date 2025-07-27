import React, { useState, useEffect, useRef } from 'react';

const AutoScrollingHero = () => {
  // Sample banner images (replace with your own)
  const banners = [
    {
      id: 1,
      src: 'https://d2wfc4v12a2zxr.cloudfront.net/resized/huge/banners/main_slider_1753358385.webp',
      alt: 'Buy Makeup Products Online | Foreveryng'
    },
    {
      id: 2,
      src: 'https://d2wfc4v12a2zxr.cloudfront.net/resized/huge/banners/main_slider_1748232546.webp',
      alt: 'Buy Makeup Products Online | Foreveryng'
    },
    {
      id: 3,
      src: 'https://d2wfc4v12a2zxr.cloudfront.net/resized/huge/banners/main_slider_1751603999.webp',
      alt: 'Buy Makeup Products Online | Foreveryng'
    },
    {
      id: 4,
      src: 'https://d2wfc4v12a2zxr.cloudfront.net/resized/huge/banners/main_slider_1749111905.png',
      alt: 'Buy Makeup Products Online | Foreveryng'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % banners.length);
      }, 3000); // Change slide every 3 seconds
    };

    startAutoScroll();

    // Pause on hover
    const slider = sliderRef.current;
    const pauseAutoScroll = () => clearInterval(intervalRef.current);
    const resumeAutoScroll = () => {
      pauseAutoScroll();
      startAutoScroll();
    };

    slider.addEventListener('mouseenter', pauseAutoScroll);
    slider.addEventListener('mouseleave', resumeAutoScroll);

    return () => {
      clearInterval(intervalRef.current);
      slider.removeEventListener('mouseenter', pauseAutoScroll);
      slider.removeEventListener('mouseleave', resumeAutoScroll);
    };
  }, [banners.length]);

  // Handle manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % banners.length);
    resetTimer();
  };

  const goToPrev = () => {
    setCurrentSlide(prev => (prev - 1 + banners.length) % banners.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 3000);
  };

  return (
    <div className="w-[calc(100%-16px)] mx-auto overflow-hidden relative group" ref={sliderRef}>
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`slide min-w-full ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              loading="lazy"
              tabIndex="0"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-gray-600 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingHero;


































// // <div className="mainproduct_blocks normal w-50 rounded-xl max-w-xs bg-white  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
// //       {/* Image section with 3 stacked components */}
// //       <div className="imageproduct_sections border rounded-xl border-gray-300 p-2">
// //         <div className="flex flex-col items-start gap-2">
// //           {/* 1. Quick Delivery badge */}
// //           <div>
// //             <img
// //               alt="Quick Delivery"
// //               style={{ height: "35px" }}
// //               src="https://d2wfc4v12a2zxr.cloudfront.net/quick-deliverable-icon-1708409648.png"
// //             />
// //           </div>

// //           {/* 2. Product Image */}
// //           <div className="w-full">
// //             <img
// //               alt="Lenphor Eye Shadow 9 in 1 Palette"
// //               className="cover_image w-full h-auto object-cover cursor-pointer"
// //               tabIndex="0"
// //               src="https://d2wfc4v12a2zxr.cloudfront.net/resized/medium/products/main_lenphor-eye-shadow-9-in-1-palette-108gm_1733646650.webp"
// //             />
// //           </div>

// //           {/* 3. Rating */}
// //           <div className="product_block_new_rating text-gray-700 px-2 py-1 rounded flex items-center gap-1">
// //             <span className="text-xs">0</span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="20"
// //               height="16"
// //               viewBox="0 0 17 16"
// //               fill="#515151"
// //             >
// //               <path d="M8.0793 13.4436C8.38573 13.2694 8.76124 13.2694 9.06767 13.4436L12.4196 15.349C13.1834 15.7832 14.0957 15.092 13.8845 14.2392L13.0388 10.8248C12.9458 10.4494 13.0776 10.0541 13.3773 9.80957L16.1451 7.5513C16.8434 6.98157 16.4909 5.85144 15.5925 5.77966L11.8325 5.47921C11.4689 5.45016 11.15 5.22541 11.0003 4.89276L9.4854 1.52645C9.13162 0.740274 8.01535 0.740274 7.66157 1.52645L6.1467 4.89276C5.997 5.22541 5.67805 5.45016 5.31443 5.47921L1.55443 5.77966C0.656085 5.85144 0.303623 6.98157 1.0019 7.5513L3.76971 9.80957C4.06937 10.0541 4.20118 10.4494 4.1082 10.8248L3.26248 14.2392C3.05124 15.092 3.96354 15.7832 4.72733 15.349L8.0793 13.4436Z" />
// //             </svg>
// //             <strong className="text-xs">/5 (0)</strong>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Product details */}
// //       <div className="product_details_cnts p-3">
// //         <div className="sales_tags_prod_block text-sm text-pink-500 py-1 rounded font-bold inline-block mb-2">
// //           20% off
// //         </div>

// //         <div className="price_product_block flex items-center gap-2 mb-1">
// //           <span className="discounted_price font-bold text-gray-700">
// //             Rs. 960
// //           </span>
// //           <span className="main_price text-sm text-gray-500 line-through">
// //             Rs. 1,200
// //           </span>
// //         </div>

// //         <div className="offers_validations text-pink-600 flex items-center gap-1 text-xs font-semibold mb-2">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             width="23"
// //             height="22"
// //             viewBox="0 0 23 22"
// //             fill="none"
// //           >
// //             <path
// //               d="M20.6135 8.93064L20.6134 8.93073L20.6213 8.938C20.8833 9.17931 21.1307 9.4368 21.3861 9.70673C21.4175 9.73993 21.4491 9.77337 21.4809 9.807C21.7032 10.0424 21.934 10.2867 22.1762 10.5225C22.3935 10.7405 22.4371 10.8804 22.4397 10.9555C22.442 11.0211 22.4172 11.1521 22.203 11.3662C22.0799 11.4894 21.9578 11.6279 21.8497 11.7507C21.8074 11.7987 21.7672 11.8443 21.73 11.8856C21.5858 12.0454 21.4583 12.1731 21.321 12.2719L21.3194 12.2731C20.7079 12.7171 20.3392 13.2455 20.1757 13.861C20.0166 14.4598 20.0642 15.0952 20.1942 15.7377L20.1945 15.739C20.3123 16.3133 20.3893 16.713 20.4131 17.0094C20.4375 17.3126 20.3949 17.4029 20.3778 17.4284C20.3663 17.4456 20.3155 17.5107 20.0496 17.579C19.7846 17.6472 19.4061 17.6949 18.8474 17.7538C18.0764 17.8325 17.4352 18.0384 16.9005 18.4329C16.3673 18.8262 15.9841 19.3745 15.6721 20.0608C15.4444 20.5565 15.2816 20.8939 15.1357 21.1226C14.9879 21.3543 14.9088 21.3898 14.8866 21.3971C14.8656 21.4039 14.7833 21.4224 14.5318 21.3224C14.2828 21.2234 13.9573 21.0462 13.4873 20.7782C12.8026 20.3847 12.1455 20.1739 11.4649 20.1804C10.7858 20.1869 10.1358 20.4094 9.46417 20.792L9.46363 20.7923C9.00092 21.0567 8.67937 21.2316 8.43339 21.3296C8.18447 21.4287 8.10264 21.411 8.08304 21.4048C8.06509 21.3991 7.99042 21.3688 7.84942 21.1475C7.70952 20.928 7.55405 20.6024 7.33736 20.1213L7.33647 20.1193C7.01896 19.4223 6.63394 18.8563 6.09496 18.4477C5.55293 18.0368 4.8992 17.8183 4.10234 17.7392C3.54491 17.6805 3.1661 17.6318 2.90106 17.5635C2.63393 17.4946 2.58176 17.4293 2.57041 17.4126C2.55523 17.3904 2.51296 17.3064 2.53707 17.0143C2.56071 16.7281 2.63723 16.3422 2.755 15.7864C2.91296 15.0514 2.91402 14.3908 2.70786 13.7701C2.50219 13.1509 2.10683 12.6214 1.55838 12.12L1.55766 12.1193C1.1467 11.7451 0.868747 11.4808 0.691602 11.2668C0.512369 11.0502 0.500127 10.9586 0.5 10.9302C0.499881 10.9035 0.509696 10.8154 0.685131 10.6042C0.859267 10.3945 1.13363 10.1361 1.54115 9.76901L1.54233 9.76794C2.12688 9.23795 2.5561 8.66494 2.76005 8.00483C2.96292 7.34821 2.92667 6.65838 2.67884 5.91923L2.67319 5.88224C2.59901 5.39633 2.54908 5.0617 2.53806 4.81114C2.52678 4.55466 2.5638 4.48836 2.57097 4.47763L2.57109 4.47746C2.57276 4.47494 2.5797 4.46446 2.60922 4.44733C2.64376 4.42728 2.70431 4.40117 2.80857 4.37413C3.0247 4.31808 3.3407 4.27898 3.82107 4.23498L3.82226 4.23487C4.73226 4.14931 5.50853 3.90357 6.13573 3.4305C6.76617 2.95498 7.20114 2.28365 7.48643 1.42779L7.48652 1.42782L7.48933 1.41882C7.50922 1.35516 7.54217 1.28737 7.59539 1.19545C7.60856 1.17269 7.62606 1.14353 7.64578 1.11068C7.68967 1.03756 7.74453 0.946144 7.78709 0.866356L7.78724 0.866438L7.79313 0.854669C7.91514 0.610637 8.0236 0.537891 8.08439 0.516348C8.13814 0.497304 8.26077 0.480684 8.50763 0.609726L8.50762 0.609748L8.51202 0.611995C8.82274 0.770525 9.11927 0.912015 9.40995 1.05071C9.83064 1.25145 10.2391 1.44633 10.6605 1.67857L10.6605 1.6786L10.6657 1.68139C10.9276 1.82168 11.2005 1.90219 11.492 1.89658C11.7807 1.89103 12.047 1.80177 12.2982 1.66737C12.7056 1.45121 13.0995 1.2607 13.5012 1.06641C13.8099 0.917119 14.1232 0.765597 14.4508 0.598487C14.6856 0.481452 14.8055 0.493719 14.8601 0.511476C14.9164 0.529783 15.0164 0.590738 15.1334 0.806933C15.2022 0.939253 15.2829 1.08027 15.3571 1.21003C15.3956 1.27732 15.4324 1.34157 15.4648 1.40002C15.5692 1.58782 15.654 1.75726 15.7123 1.92615L15.7128 1.92784C15.9535 2.61778 16.3154 3.18284 16.8442 3.56927C17.3748 3.95699 18.0237 4.1286 18.7709 4.12095C19.0675 4.12136 19.37 4.19446 19.7335 4.28229C19.8112 4.30107 19.8918 4.32053 19.9756 4.34009L19.9756 4.34012L19.9808 4.34127C20.2679 4.40507 20.3394 4.47589 20.3557 4.49672C20.3657 4.50957 20.4055 4.56613 20.3899 4.7893C20.354 5.06427 20.3242 5.32448 20.2955 5.57429C20.2285 6.15912 20.1681 6.68692 20.0511 7.21356L20.051 7.21355L20.0499 7.21902C19.9774 7.56326 19.9829 7.88334 20.0952 8.18914C20.2046 8.48725 20.3981 8.7235 20.6135 8.93064Z"
// //               stroke="#E8346C"
// //             />
// //             <path
// //               d="M16.0001 12.6052C16.0001 13.3422 15.3742 13.9397 14.6022 13.9397C13.8302 13.9397 13.2043 13.3422 13.2043 12.6052C13.2043 11.8681 13.8302 11.2706 14.6022 11.2706C15.3742 11.2706 16.0001 11.8681 16.0001 12.6052Z"
// //               fill="#E8346C"
// //             />
// //             <path
// //               d="M10.9677 8.33456C10.9677 9.07161 10.3419 9.66911 9.56987 9.66911C8.79785 9.66911 8.17201 9.07161 8.17201 8.33456C8.17201 7.5975 8.79785 7 9.56987 7C10.3419 7 10.9677 7.5975 10.9677 8.33456Z"
// //               fill="#E8346C"
// //             />
// //             <path
// //               d="M14.0255 7.54474C14.3661 7.24498 14.8967 7.26555 15.2107 7.59069C15.5247 7.91583 15.5031 8.42241 15.1626 8.72217L9.40729 13.788C9.06673 14.0877 8.53612 14.0672 8.22214 13.742C7.90817 13.4169 7.92971 12.9103 8.27027 12.6105L14.0255 7.54474Z"
// //               fill="#E8346C"
// //             />
// //           </svg>
// //           <span>More Offer Inside</span>
// //         </div>

// //         <h2
// //           className="text-sm font-normal text-gray-700 cursor-pointer"
// //           tabIndex="0"
// //         >
// //           Lenphor Eye Shadow 9 in 1 Palette - 10.8gm
// //         </h2>
// //       </div>

// //       {/* Product actions */}
// //       <div className="product_actions p-3 border-t border-gray-100">
// //         <div className="wrap_products_sections flex justify-between items-center">
// //           <a
// //             href="javascript:void(0)"
// //             className="addtocart_btn bg-pink-600 hover:bg-gray-500 text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded"
// //           >
// //             Add To Cart
// //           </a>

// //           <a
// //             href="javascript:void(0)"
// //             className="wishlist-iconslist p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
// //           >
// //             <svg
// //               width="24"
// //               height="23"
// //               viewBox="0 0 24 23"
// //               fill="none"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 fill-rule="evenodd"
// //                 clip-rule="evenodd"
// //                 d="M5.30306 2.67201C3.49591 3.54294 2.17241 5.61571 2.17241 8.08718C2.17241 10.6115 3.15278 12.5579 4.5558 14.2262C5.71373 15.6004 7.11457 16.7402 8.48056 17.8501C8.80517 18.1144 9.1276 18.3775 9.44459 18.6406C10.0176 19.1174 10.5284 19.5345 11.0219 19.839C11.5143 20.1423 11.9108 20.2813 12.2485 20.2813C12.5861 20.2813 12.9826 20.1435 13.475 19.839C13.9685 19.5345 14.4793 19.1174 15.0523 18.6406C15.3682 18.3763 15.6917 18.1144 16.0163 17.8501C17.3823 16.7402 18.7832 15.6004 19.9411 14.2262C21.3452 12.5579 22.3245 10.6115 22.3245 8.08718C22.3245 5.61686 21.001 3.54294 19.1938 2.67201C17.4379 1.82521 15.0785 2.04926 12.8367 4.50694C12.7605 4.59034 12.6691 4.65668 12.568 4.70199C12.467 4.7473 12.3583 4.77065 12.2485 4.77065C12.1386 4.77065 12.0299 4.7473 11.9289 4.70199C11.8278 4.65668 11.7364 4.59034 11.6602 4.50694C9.41844 2.04926 7.05902 1.82521 5.30306 2.67201ZM12.2485 2.71338C9.72999 0.33498 6.90978 0.00177479 4.62334 1.10365C2.21162 2.26987 0.538452 4.97228 0.538452 8.08832C0.538452 11.1504 1.74758 13.4874 3.33469 15.3717C4.60482 16.8804 6.15925 18.1431 7.53286 19.2576C7.8444 19.5104 8.14614 19.7563 8.43262 19.9952C8.99144 20.4594 9.59055 20.9535 10.1973 21.3281C10.804 21.7015 11.4968 22.006 12.2485 22.006C13.0001 22.006 13.6929 21.7015 14.2996 21.3281C14.9074 20.9535 15.5055 20.4594 16.0643 19.9952C16.3626 19.7473 16.6626 19.5014 16.964 19.2576C18.3366 18.1431 19.8921 16.8792 21.1622 15.3717C22.7493 13.4874 23.9585 11.1504 23.9585 8.08832C23.9585 4.97228 22.2864 2.26987 19.8736 1.10595C17.5871 0.00292405 14.7669 0.336129 12.2485 2.71338Z"
// //                 fill="#E8346C"
// //               />
// //             </svg>
// //           </a>
// //         </div>
// //       </div>
// //     </div>
























// //multiple products

// import React from 'react';

// // http://makeup-api.herokuapp.com/api/v1/products?brand=maybelline
// const ProductList = () => {
//   // Product data array
//   const products = [
//     {
//       id: 1,
//       title: "Cetaphil Gentle Skin Cleanser Classic",
//       shortTitle: "Cetaphil Gentle Skin Cleanser Classic",
//       image: "https://d2wfc4v12a2zxr.cloudfront.net/resized/medium/products/main_cetaphil-gentle-skin-cleanser-classic_1741504545.webp",
//       isBestSeller: true,
//       quickDelivery: true,
//       rating: 4.8,
//       reviewCount: 310,
//       discountPrice: "Rs. 618",
//       originalPrice: "Rs. 687",
//       discountPercentage: "10% off",
//       hasMoreOffers: true
//     },
//     {
//       id: 2,
//       title: "Pax Moly Dr.Jk1 Sunscreen Lotion Spf 50+/+++",
//       shortTitle: "Pax Moly Dr.Jk1 Sunscreen Lotion Spf 50+/+++ ...",
//       image: "https://d2wfc4v12a2zxr.cloudfront.net/resized/medium/products/main_pax-moly-drjk1-sunscreen-lotion-spf-50-200ml_1738144835.webp",
//       isBestSeller: true,
//       quickDelivery: true,
//       rating: 4.6,
//       reviewCount: 792,
//       discountPrice: "Rs. 1,040",
//       originalPrice: "Rs. 1,600",
//       discountPercentage: "35% off",
//       hasMoreOffers: true
//     },
//     // Add all other products in the same format
//     // ...
//   ];

//   return (
//     <div className="products-list hide-scroll-bar overflow-x-auto whitespace-nowrap bg-blue-300 py-4">
//       {/* Product cards */}
//       {products.map((product) => (
//         <div key={product.id} className="mainproduct_blocks normal inline-block w-50  mx-2 rounded-xl max-w-xs overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
//           {/* Image section */}
//           <div className="imageproduct_sections border rounded-xl border-gray-300 p-2">
//             <div className="flex flex-col items-start gap-2">
//               {/* Quick delivery badge */}
//               {product.quickDelivery && (
//                 <div>
//                   <img
//                     alt="Quick Delivery"
//                     style={{ height: '35px' }}
//                     src="https://d2wfc4v12a2zxr.cloudfront.net/quick-deliverable-icon-1708409648.png"
//                   />
//                 </div>
//               )}

//               {/* Product image */}
//               <div className="w-full">
//                 <img
//                   alt={product.title}
//                   className="cover_image w-full h-auto object-cover cursor-pointer"
//                   tabIndex="0"
//                   src={product.image}
//                 />
//               </div>

//               {/* Rating */}
//               <div className="product_block_new_rating text-gray-700 px-2 py-1 rounded flex items-center gap-1">
//                 <span className="text-xs">{product.rating}</span>
//                 {/* Replaced with the SVG from the example */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="16"
//                   viewBox="0 0 17 16"
//                   fill="#515151"
//                 >
//                   <path d="M8.0793 13.4436C8.38573 13.2694 8.76124 13.2694 9.06767 13.4436L12.4196 15.349C13.1834 15.7832 14.0957 15.092 13.8845 14.2392L13.0388 10.8248C12.9458 10.4494 13.0776 10.0541 13.3773 9.80957L16.1451 7.5513C16.8434 6.98157 16.4909 5.85144 15.5925 5.77966L11.8325 5.47921C11.4689 5.45016 11.15 5.22541 11.0003 4.89276L9.4854 1.52645C9.13162 0.740274 8.01535 0.740274 7.66157 1.52645L6.1467 4.89276C5.997 5.22541 5.67805 5.45016 5.31443 5.47921L1.55443 5.77966C0.656085 5.85144 0.303623 6.98157 1.0019 7.5513L3.76971 9.80957C4.06937 10.0541 4.20118 10.4494 4.1082 10.8248L3.26248 14.2392C3.05124 15.092 3.96354 15.7832 4.72733 15.349L8.0793 13.4436Z" />
//                 </svg>
//                 <strong className="text-xs">/5 ({product.reviewCount})</strong>
//               </div>
//             </div>
//           </div>

//           {/* Product details */}
//           <div className="product_details_cnts p-3">
//             {/* Discount percentage */}
//             {product.discountPercentage && (
//               <div className="sales_tags_prod_block text-sm text-pink-500 py-1 rounded font-bold inline-block mb-2">
//                 {product.discountPercentage}
//               </div>
//             )}

//             {/* Price */}
//             <div className="price_product_block flex items-center gap-2 mb-1">
//               <span className="discounted_price font-bold text-gray-700">
//                 {product.discountPrice}
//               </span>
//               <span className="main_price text-sm text-gray-500 line-through">
//                 {product.originalPrice}
//               </span>
//             </div>

//             {/* More offers */}
//             {product.hasMoreOffers && (
//               <div className="offers_validations text-pink-600 flex items-center gap-1 text-xs font-semibold mb-2">
//                 {/* Replaced with the SVG from the example */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="23"
//                   height="22"
//                   viewBox="0 0 23 22"
//                   fill="none"
//                 >
//                   <path
//                     d="M20.6135 8.93064L20.6134 8.93073L20.6213 8.938C20.8833 9.17931 21.1307 9.4368 21.3861 9.70673C21.4175 9.73993 21.4491 9.77337 21.4809 9.807C21.7032 10.0424 21.934 10.2867 22.1762 10.5225C22.3935 10.7405 22.4371 10.8804 22.4397 10.9555C22.442 11.0211 22.4172 11.1521 22.203 11.3662C22.0799 11.4894 21.9578 11.6279 21.8497 11.7507C21.8074 11.7987 21.7672 11.8443 21.73 11.8856C21.5858 12.0454 21.4583 12.1731 21.321 12.2719L21.3194 12.2731C20.7079 12.7171 20.3392 13.2455 20.1757 13.861C20.0166 14.4598 20.0642 15.0952 20.1942 15.7377L20.1945 15.739C20.3123 16.3133 20.3893 16.713 20.4131 17.0094C20.4375 17.3126 20.3949 17.4029 20.3778 17.4284C20.3663 17.4456 20.3155 17.5107 20.0496 17.579C19.7846 17.6472 19.4061 17.6949 18.8474 17.7538C18.0764 17.8325 17.4352 18.0384 16.9005 18.4329C16.3673 18.8262 15.9841 19.3745 15.6721 20.0608C15.4444 20.5565 15.2816 20.8939 15.1357 21.1226C14.9879 21.3543 14.9088 21.3898 14.8866 21.3971C14.8656 21.4039 14.7833 21.4224 14.5318 21.3224C14.2828 21.2234 13.9573 21.0462 13.4873 20.7782C12.8026 20.3847 12.1455 20.1739 11.4649 20.1804C10.7858 20.1869 10.1358 20.4094 9.46417 20.792L9.46363 20.7923C9.00092 21.0567 8.67937 21.2316 8.43339 21.3296C8.18447 21.4287 8.10264 21.411 8.08304 21.4048C8.06509 21.3991 7.99042 21.3688 7.84942 21.1475C7.70952 20.928 7.55405 20.6024 7.33736 20.1213L7.33647 20.1193C7.01896 19.4223 6.63394 18.8563 6.09496 18.4477C5.55293 18.0368 4.8992 17.8183 4.10234 17.7392C3.54491 17.6805 3.1661 17.6318 2.90106 17.5635C2.63393 17.4946 2.58176 17.4293 2.57041 17.4126C2.55523 17.3904 2.51296 17.3064 2.53707 17.0143C2.56071 16.7281 2.63723 16.3422 2.755 15.7864C2.91296 15.0514 2.91402 14.3908 2.70786 13.7701C2.50219 13.1509 2.10683 12.6214 1.55838 12.12L1.55766 12.1193C1.1467 11.7451 0.868747 11.4808 0.691602 11.2668C0.512369 11.0502 0.500127 10.9586 0.5 10.9302C0.499881 10.9035 0.509696 10.8154 0.685131 10.6042C0.859267 10.3945 1.13363 10.1361 1.54115 9.76901L1.54233 9.76794C2.12688 9.23795 2.5561 8.66494 2.76005 8.00483C2.96292 7.34821 2.92667 6.65838 2.67884 5.91923L2.67319 5.88224C2.59901 5.39633 2.54908 5.0617 2.53806 4.81114C2.52678 4.55466 2.5638 4.48836 2.57097 4.47763L2.57109 4.47746C2.57276 4.47494 2.5797 4.46446 2.60922 4.44733C2.64376 4.42728 2.70431 4.40117 2.80857 4.37413C3.0247 4.31808 3.3407 4.27898 3.82107 4.23498L3.82226 4.23487C4.73226 4.14931 5.50853 3.90357 6.13573 3.4305C6.76617 2.95498 7.20114 2.28365 7.48643 1.42779L7.48652 1.42782L7.48933 1.41882C7.50922 1.35516 7.54217 1.28737 7.59539 1.19545C7.60856 1.17269 7.62606 1.14353 7.64578 1.11068C7.68967 1.03756 7.74453 0.946144 7.78709 0.866356L7.78724 0.866438L7.79313 0.854669C7.91514 0.610637 8.0236 0.537891 8.08439 0.516348C8.13814 0.497304 8.26077 0.480684 8.50763 0.609726L8.50762 0.609748L8.51202 0.611995C8.82274 0.770525 9.11927 0.912015 9.40995 1.05071C9.83064 1.25145 10.2391 1.44633 10.6605 1.67857L10.6605 1.6786L10.6657 1.68139C10.9276 1.82168 11.2005 1.90219 11.492 1.89658C11.7807 1.89103 12.047 1.80177 12.2982 1.66737C12.7056 1.45121 13.0995 1.2607 13.5012 1.06641C13.8099 0.917119 14.1232 0.765597 14.4508 0.598487C14.6856 0.481452 14.8055 0.493719 14.8601 0.511476C14.9164 0.529783 15.0164 0.590738 15.1334 0.806933C15.2022 0.939253 15.2829 1.08027 15.3571 1.21003C15.3956 1.27732 15.4324 1.34157 15.4648 1.40002C15.5692 1.58782 15.654 1.75726 15.7123 1.92615L15.7128 1.92784C15.9535 2.61778 16.3154 3.18284 16.8442 3.56927C17.3748 3.95699 18.0237 4.1286 18.7709 4.12095C19.0675 4.12136 19.37 4.19446 19.7335 4.28229C19.8112 4.30107 19.8918 4.32053 19.9756 4.34009L19.9756 4.34012L19.9808 4.34127C20.2679 4.40507 20.3394 4.47589 20.3557 4.49672C20.3657 4.50957 20.4055 4.56613 20.3899 4.7893C20.354 5.06427 20.3242 5.32448 20.2955 5.57429C20.2285 6.15912 20.1681 6.68692 20.0511 7.21356L20.051 7.21355L20.0499 7.21902C19.9774 7.56326 19.9829 7.88334 20.0952 8.18914C20.2046 8.48725 20.3981 8.7235 20.6135 8.93064Z"
//                     stroke="#E8346C"
//                   />
//                   <path
//                     d="M16.0001 12.6052C16.0001 13.3422 15.3742 13.9397 14.6022 13.9397C13.8302 13.9397 13.2043 13.3422 13.2043 12.6052C13.2043 11.8681 13.8302 11.2706 14.6022 11.2706C15.3742 11.2706 16.0001 11.8681 16.0001 12.6052Z"
//                     fill="#E8346C"
//                   />
//                   <path
//                     d="M10.9677 8.33456C10.9677 9.07161 10.3419 9.66911 9.56987 9.66911C8.79785 9.66911 8.17201 9.07161 8.17201 8.33456C8.17201 7.5975 8.79785 7 9.56987 7C10.3419 7 10.9677 7.5975 10.9677 8.33456Z"
//                     fill="#E8346C"
//                   />
//                   <path
//                     d="M14.0255 7.54474C14.3661 7.24498 14.8967 7.26555 15.2107 7.59069C15.5247 7.91583 15.5031 8.42241 15.1626 8.72217L9.40729 13.788C9.06673 14.0877 8.53612 14.0672 8.22214 13.742C7.90817 13.4169 7.92971 12.9103 8.27027 12.6105L14.0255 7.54474Z"
//                     fill="#E8346C"
//                   />
//                 </svg>
//                 <span>More Offer Inside</span>
//               </div>
//             )}

//             {/* Product title */}
//             <h2 className="text-sm font-normal text-gray-700 cursor-pointer truncate" tabIndex="0">
//               {product.shortTitle}
//             </h2>
//           </div>

//           {/* Product actions */}
//           <div className="product_actions p-3 border-t border-gray-100">
//             <div className="wrap_products_sections flex justify-between items-center">
//               {/* Add to cart button */}
//               <a
//                 href="javascript:void(0)"
//                 className="addtocart_btn bg-pink-600 hover:bg-gray-500 text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded"
//               >
//                 Add To Cart
//               </a>

//               {/* Wishlist button */}
//               <a
//                 href="javascript:void(0)"
//                 className="wishlist-iconslist p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//               >
//                 {/* Replaced with the SVG from the example */}
//                 <svg
//                   width="24"
//                   height="23"
//                   viewBox="0 0 24 23"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M5.30306 2.67201C3.49591 3.54294 2.17241 5.61571 2.17241 8.08718C2.17241 10.6115 3.15278 12.5579 4.5558 14.2262C5.71373 15.6004 7.11457 16.7402 8.48056 17.8501C8.80517 18.1144 9.1276 18.3775 9.44459 18.6406C10.0176 19.1174 10.5284 19.5345 11.0219 19.839C11.5143 20.1423 11.9108 20.2813 12.2485 20.2813C12.5861 20.2813 12.9826 20.1435 13.475 19.839C13.9685 19.5345 14.4793 19.1174 15.0523 18.6406C15.3682 18.3763 15.6917 18.1144 16.0163 17.8501C17.3823 16.7402 18.7832 15.6004 19.9411 14.2262C21.3452 12.5579 22.3245 10.6115 22.3245 8.08718C22.3245 5.61686 21.001 3.54294 19.1938 2.67201C17.4379 1.82521 15.0785 2.04926 12.8367 4.50694C12.7605 4.59034 12.6691 4.65668 12.568 4.70199C12.467 4.7473 12.3583 4.77065 12.2485 4.77065C12.1386 4.77065 12.0299 4.7473 11.9289 4.70199C11.8278 4.65668 11.7364 4.59034 11.6602 4.50694C9.41844 2.04926 7.05902 1.82521 5.30306 2.67201ZM12.2485 2.71338C9.72999 0.33498 6.90978 0.00177479 4.62334 1.10365C2.21162 2.26987 0.538452 4.97228 0.538452 8.08832C0.538452 11.1504 1.74758 13.4874 3.33469 15.3717C4.60482 16.8804 6.15925 18.1431 7.53286 19.2576C7.8444 19.5104 8.14614 19.7563 8.43262 19.9952C8.99144 20.4594 9.59055 20.9535 10.1973 21.3281C10.804 21.7015 11.4968 22.006 12.2485 22.006C13.0001 22.006 13.6929 21.7015 14.2996 21.3281C14.9074 20.9535 15.5055 20.4594 16.0643 19.9952C16.3626 19.7473 16.6626 19.5014 16.964 19.2576C18.3366 18.1431 19.8921 16.8792 21.1622 15.3717C22.7493 13.4874 23.9585 11.1504 23.9585 8.08832C23.9585 4.97228 22.2864 2.26987 19.8736 1.10595C17.5871 0.00292405 14.7669 0.336129 12.2485 2.71338Z"
//                     fill="#E8346C"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;




//end of multiple products




// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   // 1. We need a place to store the products we get from the internet.
//   //    'products' will hold our list, and 'setProducts' is how we update it.
//   const [products, setProducts] = useState([]);

//   // 2. We need to know if we're still waiting for the products to load.
//   //    'loading' will be true while fetching, and false when done.
//   const [loading, setLoading] = useState(true);

//   // 3. This special React function runs when the component first shows up.
//   //    It's perfect for fetching data!
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true); // Start loading, so show a "Loading..." message.

//         // Go to the internet (API) and ask for Maybelline products.
//         // The API gives us ALL Maybelline products, so we'll pick the first 10 later.
//         const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');

//         // Check if the internet request worked. If not, stop and show an error.
//         if (!response.ok) {
//           throw new Error('Failed to fetch products!');
//         }

//         // Get the data from the internet request and turn it into something React can use.
//         const data = await response.json();

//         // Take only the first 10 products from the data we got and save them.
//         setProducts(data.slice(0, 10));
//       } catch (error) {
//         // If something went wrong, let us know there was an error.
//         console.error("Oops, something went wrong fetching products:", error);
//       } finally {
//         setLoading(false); // Done loading, hide the "Loading..." message.
//       }
//     };

//     fetchProducts(); // Run our function to fetch products!
//   }, []); // The empty array here means "run this only ONCE when the component appears."

//   // --- What to show on the screen ---

//   // If we're still loading, show a simple message.
//   if (loading) {
//     return <div className="text-center py-4">Loading products...</div>;
//   }

//   // If we loaded but got no products, show that message.
//   if (products.length === 0) {
//     return <div className="text-center py-4">No Maybelline products found.</div>;
//   }

//   // If we have products, show them!
//   return (
//     <div className="products-list hide-scroll-bar overflow-x-auto whitespace-nowrap bg-blue-300 py-4">
//       {/* Go through each 'product' in our 'products' list */}
//       {products.map((product) => (
//         // For each product, create a card to show its info
//         <div key={product.id} className="mainproduct_blocks normal inline-block w-50 mx-2 rounded-xl max-w-xs overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
//           {/* Image Part */}
//           <div className="imageproduct_sections border rounded-xl border-gray-300 p-2">
//             <div className="flex flex-col items-start gap-2">
//               {/* Product Image */}
//               <div className="w-full">
//                 <img
//                   alt={product.name} // Use the product's name for image description
//                   className="cover_image w-full h-auto object-cover cursor-pointer"
//                   tabIndex="0"
//                   src={product.image_link || 'https://via.placeholder.com/150'} // Use the product's image, or a placeholder if no image
//                 />
//               </div>

//               {/* Rating (if available) */}
//               {product.rating && (
//                 <div className="product_block_new_rating text-gray-700 px-2 py-1 rounded flex items-center gap-1">
//                   <span className="text-xs">{product.rating.toFixed(1)}</span> {/* Show rating, rounded to one decimal */}
//                   {/* Star Icon */}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 17 16" fill="#515151">
//                     <path d="M8.0793 13.4436C8.38573 13.2694 8.76124 13.2694 9.06767 13.4436L12.4196 15.349C13.1834 15.7832 14.0957 15.092 13.8845 14.2392L13.0388 10.8248C12.9458 10.4494 13.0776 10.0541 13.3773 9.80957L16.1451 7.5513C16.8434 6.98157 16.4909 5.85144 15.5925 5.77966L11.8325 5.47921C11.4689 5.45016 11.15 5.22541 11.0003 4.89276L9.4854 1.52645C9.13162 0.740274 8.01535 0.740274 7.66157 1.52645L6.1467 4.89276C5.997 5.22541 5.67805 5.45016 5.31443 5.47921L1.55443 5.77966C0.656085 5.85144 0.303623 6.98157 1.0019 7.5513L3.76971 9.80957C4.06937 10.0541 4.20118 10.4494 4.1082 10.8248L3.26248 14.2392C3.05124 15.092 3.96354 15.7832 4.72733 15.349L8.0793 13.4436Z" />
//                   </svg>
//                   <strong className="text-xs">/5</strong>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Product Details Part */}
//           <div className="product_details_cnts p-3">
//             {/* Discount/Tag (if available) */}
//             {product.tag_list && product.tag_list.length > 0 && (
//               <div className="sales_tags_prod_block text-sm text-pink-500 py-1 rounded font-bold inline-block mb-2">
//                 {product.tag_list[0]} {/* Show the first tag as an example */}
//               </div>
//             )}

//             {/* Price */}
//             <div className="price_product_block flex items-center gap-2 mb-1">
//               <span className="discounted_price font-bold text-gray-700">
//                 {product.price_sign}{product.price} {/* Show currency sign and price */}
//               </span>
//             </div>

//             {/* Product Name (title) */}
//             <h2 className="text-sm font-normal text-gray-700 cursor-pointer truncate" tabIndex="0">
//               {product.name}
//             </h2>
//           </div>

//           {/* Product Actions (Buttons) */}
//           <div className="product_actions p-3 border-t border-gray-100">
//             <div className="wrap_products_sections flex justify-between items-center">
//               {/* Add to Cart Button */}
//               <a
//                 href="javascript:void(0)"
//                 className="addtocart_btn bg-pink-600 hover:bg-gray-500 text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded"
//               >
//                 Add To Cart
//               </a>

//               {/* Wishlist Button */}
//               <a
//                 href="javascript:void(0)"
//                 className="wishlist-iconslist p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//               >
//                 {/* Heart Icon */}
//                 <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M5.30306 2.67201C3.49591 3.54294 2.17241 5.61571 2.17241 8.08718C2.17241 10.6115 3.15278 12.5579 4.5558 14.2262C5.71373 15.6004 7.11457 16.7402 8.48056 17.8501C8.80517 18.1144 9.1276 18.3775 9.44459 18.6406C10.0176 19.1174 10.5284 19.5345 11.0219 19.839C11.5143 20.1423 11.9108 20.2813 12.2485 20.2813C12.5861 20.2813 12.9826 20.1435 13.475 19.839C13.9685 19.5345 14.4793 19.1174 15.0523 18.6406C15.3682 18.3763 15.6917 18.1144 16.0163 17.8501C17.3823 16.7402 18.7832 15.6004 19.9411 14.2262C21.3452 12.5579 22.3245 10.6115 22.3245 8.08718C22.3245 5.61686 21.001 3.54294 19.1938 2.67201C17.4379 1.82521 15.0785 2.04926 12.8367 4.50694C12.7605 4.59034 12.6691 4.65668 12.568 4.70199C12.467 4.7473 12.3583 4.77065 12.2485 4.77065C12.1386 4.77065 12.0299 4.7473 11.9289 4.70199C11.8278 4.65668 11.7364 4.59034 11.6602 4.50694C9.41844 2.04926 7.05902 1.82521 5.30306 2.67201ZM12.2485 2.71338C9.72999 0.33498 6.90978 0.00177479 4.62334 1.10365C2.21162 2.26987 0.538452 4.97228 0.538452 8.08832C0.538452 11.1504 1.74758 13.4874 3.33469 15.3717C4.60482 16.8804 6.15925 18.1431 7.53286 19.2576C7.8444 19.5104 8.14614 19.7563 8.43262 19.9952C8.99144 20.4594 9.59055 20.9535 10.1973 21.3281C10.804 21.7015 11.4968 22.006 12.2485 22.006C13.0001 22.006 13.6929 21.7015 14.2996 21.3281C14.9074 20.9535 15.5055 20.4594 16.0643 19.9952C16.3626 19.7473 16.6626 19.5014 16.964 19.2576C18.3366 18.1431 19.8921 16.8792 21.1622 15.3717C22.7493 13.4874 23.9585 11.1504 23.9585 8.08832C23.9585 4.97228 22.2864 2.26987 19.8736 1.10595C17.5871 0.00292405 14.7669 0.336129 12.2485 2.71338Z" fill="#E8346C"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;