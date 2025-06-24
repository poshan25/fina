// import React from 'react';

// const features = [
//   {
//     icon: '#calendar',
//     title: 'Book An Appointment',
//     desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
//     delay: '0',
//   },
//   {
//     icon: '#shopping-bag',
//     title: 'Pick up in store',
//     desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
//     delay: '300',
//   },
//   {
//     icon: '#gift',
//     title: 'Special packaging',
//     desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
//     delay: '600',
//   },
//   {
//     icon: '#arrow-cycle',
//     title: 'Free global returns',
//     desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
//     delay: '900',
//   },
// ];

// const BestSelling = () => {
//   return (
//     <section className="features py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="py-5 aos-init aos-animate"
//               data-aos="fade-in"
//               data-aos-delay={feature.delay}
//             >
//               <svg width="35" height="35" viewBox="0 0 24 24" className="mx-auto text-pink-600">
//                 <use xlinkHref={feature.icon}></use>
//               </svg>
//               <h4 className="text-xl font-semibold my-3 capitalize">{feature.title}</h4>
//               <p className="text-gray-600">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSelling;



import React from 'react';
import { CalendarDays, ShoppingBag, Gift, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <CalendarDays size={35} className="text-pink-600 mx-auto" />,
    title: 'Book An Appointment',
    desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
  },
  {
    icon: <ShoppingBag size={35} className="text-pink-600 mx-auto" />,
    title: 'Pick up in store',
    desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
  },
  {
    icon: <Gift size={35} className="text-pink-600 mx-auto" />,
    title: 'Special packaging',
    desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
  },
  {
    icon: <RefreshCw size={35} className="text-pink-600 mx-auto" />,
    title: 'Free global returns',
    desc: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
  },
];

const BestSelling = () => {
  return (
    <section className="features py-20 md:px-30 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="py-5"
              data-aos="fade-in"
              data-aos-delay={index * 300}
            >
              {feature.icon}
              <h4 className="text-xl font-semibold my-3 capitalize">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
