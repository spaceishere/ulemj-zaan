// import { data } from "@/utils/data";
// import Image from "next/image";

// interface CarDetailProps {
//   params: {
//     id: string;
//   };
// }

// const CarDetail = async ({ params }: CarDetailProps) => {
//   const { id } = params;

//   // Convert id to a number and safely filter for the matching item
//   const item = data
//     .flatMap((car) => car.category)
//     .flatMap((cat) => cat.items)
//     .find((item) => item.id === Number(id)); // Find the first matching item

//   if (!item) {
//     return <p>Car not found.</p>;
//   }

//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>
//         Year: {item.year1} - {item.year2}
//       </p>
//       <p>Color: {item.color}</p>
//       <Image src={item.image} alt={item.name} width={100} height={100} />
//     </div>
//   );
// };

// // Add metadata if needed
// export const metadata = ({ params }: { params: { id: string } }) => {
//   return {
//     title: `Car Detail - ${params.id}`,
//     description: `Details about car with ID ${params.id}`,
//   };
// };
const CarDetail = async () => {
  <div className=""></div>;
};

export default CarDetail;
