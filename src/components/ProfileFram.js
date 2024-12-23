// import React from 'react'

// const ProfileFrame = ({images}) => {
//     console.log(images);
    
//   return (
//     <div className='profile-frame'>
//       {images.map((image) => {
//         return(
//             <img 
//             src={image.img}
//             alt={`${image.class.toLocaleUpperCase()} PNG`} 
//             className={image.class}
//             style={image.style}
//             />
//         )
//       })}
//     </div>
//   )
// }

// export default ProfileFrame

import React, { useState, useEffect } from 'react';

const ProfileFrame = ({ images }) => {
  const [arrangedImages, setArrangedImages] = useState([]);

//   const positions = [
//         {     left: 20%;
//             top: 18%;
//          }, //c++
//         {     left: 3%;
//             top: 8%;
//          }, //algo
//         { left: 7%;
//             top: 34%;},  // comp
//         {     left: 14%;
//             top: 58%;
//          }, //python
//         { left: 8%;
//             top: 82%; }, //graph
//         { left: 33%;
//             top: 83%; }, //binary
//         { left: 50%;
//             top: 76%; }, //leaderbord
//         {     left: 68%;
//             top: 82%;
//          }, //que
//          { left: 56%;
//             top: 5%; }, //cdoecheff
//          {     left: 73%;
//             top: 15%; }, //codeforce
//          { left: 83%;
//             top: 35%; },//leetcode 
//          { left: 84%;
//             top: 62%; }, //stack
//          { left: 89%;
//             top: 4%; }, //java
//             { left: 81%;
//                 top: 83%; }, // some othere

//       ];

const positions = [
    { left: '3%', top: '8%' },    // Algorithm ('algo')
    { left: '33%', top: '4%' },   // C ('c')
    { left: '56%', top: '5%' },   // CodeChef ('codeche')
    { left: '73%', top: '15%' },  // Codeforces ('codeforc')
    { left: '7%', top: '34%' },   // Competition ('comp')
    { left: '20%', top: '18%' },  // C++ ('cpp')
    { left: '89%', top: '4%' },   // Java ('java')
    { left: '83%', top: '35%' },  // LeetCode ('leetcode')
    { left: '14%', top: '58%' },  // Python ('python')
    { left: '50%', top: '76%' },  // Leaderboard ('leadbord')
    { left: '68%', top: '82%' },  // Queue ('queue')
    { left: '84%', top: '62%' },  // Stack ('stack')
    { left: '8%', top: '82%' },   // Graph ('graph')
    { left: '33%', top: '83%' },  // Binary ('binary')
    {left: '88%' , top: '84%' }   //Timer ('timer)
];


  useEffect(() => {
    const arrangeImages = () => {
      const gridSize = Math.ceil(Math.sqrt(images.length));
      const cellSize = 100 / gridSize;

      return images.map((image, index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        return {
          ...image,
          style: {
            position: 'absolute',
            left: positions[index].left,
            top: positions[index].top,
            transform: `rotate(${Math.random() * 30 - 15}deg)`, // Reduced rotation
            opacity: 0.4, // Increased minimum opacity
            zIndex: Math.floor(Math.random() * 10),
            transition: 'all 0.3s ease-in-out',
          }
        };
      });
    };

    setArrangedImages(arrangeImages());
  }, [images]);

  return (
    <div className='profile-frame'>
      {arrangedImages.map((image, index) => (
        <img 
          key={index}
          src={image.img}
          alt={`${image.class.toUpperCase()} PNG`} 
          className={`icon ${image.class}`}
          style={image.style}
        />
      ))}
    </div>
  );
};

export default ProfileFrame;



// import React from 'react';

// const ProfileFrame = ({ images }) => {
//   // Predefined positions to match the example layout
//   const positions = [
//     { left: '10%', top: '15%' },  // Top-left
//     { left: '80%', top: '15%' },  // Top-right
//     { left: '50%', top: '5%' },   // Top-center
//     { left: '15%', top: '50%' },  // Left-center
//     { left: '80%', top: '50%' },  // Right-center
//     { left: '10%', top: '80%' },  // Bottom-left
//     { left: '50%', top: '90%' },  // Bottom-center
//     { left: '80%', top: '80%' },  // Bottom-right
//   ];

//   return (
//     <div className='profile-frame' style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image.img}
//           alt={`${image.class.toUpperCase()} PNG`}
//           className={`icon ${image.class}`}
//           style={{
//             position: 'absolute',
//             left: positions[index % positions.length].left,
//             top: positions[index % positions.length].top,
//             transform: 'translate(-50%, -50%)',
//             width: '122px', // Adjust size accordingly
//             height: '122px', // Adjust size accordingly
//             opacity: 0.4, // Fixed opacity
//             zIndex: 10,
//             transition: 'all 0.3s ease-in-out',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProfileFrame;

// import React from 'react';

// const ProfileFrame = ({ images }) => {
//   // Positions remain the same as in the previous version
//   const positions = [
//     { left: '15%', top: '15%' },      // Top-left (graduate)
//     { right: '15%', top: '15%' },     // Top-right (android)
//     { left: '15%', top: '50%' },      // Middle-left (atom)
//     { right: '15%', top: '50%' },     // Middle-right (www)
//     { left: '15%', bottom: '15%' },   // Bottom-left (PHP, C#, HTML)
//     { left: '15%', bottom: '25%' },   // Bottom-left (Java)
//     { right: '15%', bottom: '15%' },  // Bottom-right (JS)
//     { right: '15%', bottom: '25%' },  // Bottom-right (GitHub)
//   ];

//   return (
//     <div className='profile-frame' style={{ position: 'relative', width: '100%', height: '100vh' }}>
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image.img}
//           alt={`${image.class} icon`}
//           style={{
//             position: 'absolute',
//             ...positions[index % positions.length],
//             transform: 'translate(-50%, -50%)',
//             width: '122px',
//             height: '122px',
//             opacity: 0.8,
//             zIndex: 10,
//             transition: 'all 0.3s ease-in-out'
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProfileFrame;
