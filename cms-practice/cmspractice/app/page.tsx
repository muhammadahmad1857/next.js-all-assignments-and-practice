// import client from "@/lib/contentful";
// const fetchTask = async () => {
//   let response = await client.getEntries({ content_type: "Todo" });
//   const services = response.map((items: any) => {
//     return {
//       task: items.field.Task,
//     };
//   });
//   return services;
// };
// const Home = async () => {
//   let services = await fetchTask();
//   console.log(`services:`, services);

//   return (
//     <>
//       {fetchTask()}
//       {/* home page
//       {console.log("hello world")}
//       <button
//         // onClick={() => fetchTask()}
//         style={{ border: "none", background: "black", color: "white" }}
//       >
//         Click me
//       </button> */}
//       <div>
//         {services.map((items: any, index: number) => {
//           return (
//             <>
//               <h2 key={index}>{items.task}</h2>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Home;
"use client";
import client from "./lib/contentful";

const fetchServices = async () => {
  let response = await client.getEntries();
  console.log(`response:${response.items[0].fields.Task}`);

  const services = response.items.map((item: any) => {
    return {
      task: item.fields.Task,
    };
  });
  return services;
};
fetchServices();

const increment_handler = () => {};
export default async function page() {
  const services = await fetchServices();
  console.log("fetchServices", services);

  return (
    <div>
      <h1>Home Seriveces</h1>
      <br />
      <button onClick={() => services()}>Click here</button>
      {services.map((service: any) => {
        return (
          <>
            <h2>{service.Task}</h2>
            <hr />
          </>
        );
      })}
    </div>
  );
}
