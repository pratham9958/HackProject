import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const CreateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  width: auto;
  color: black;
  flex-direction: column;
  margin: 2rem;
  margin-top: 4rem;
  border-radius: 2rem;
`;
export const CreateForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;
export const CreateInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 7vh;
  background-color:lightgrey;
  width: 82vw;
  margin: 1rem;
  border-radius: 1rem;
  border: 1px solid #A9A9A9;
  &:focus {
    outline: none;
  }
`;
export const InputText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  width: 5vw;
  border-radius: 2rem;
  transform: translateX(2rem);
`;
export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 82vw;
  background-color: lightgrey;
  margin: 1rem;
  border-radius: 2rem;
  border: 1px solid #A9A9A9;
  &:focus {
    outline: none;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;

export const CreateTextArea = styled.textarea`
  display: flex;
  resize: none;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  height: 20vh;
  width: 82vw;
  background-color:lightgrey;
  margin: 1rem;
  border-radius: 2rem;
  border: 1px solid #A9A9A9;
  &:focus {
    outline: none;
  }
`;
function Admin() {
  const [data, setdata] = useState({
    price: "",
    image: "",
    content: "",
    heading: "",
    subheading: "",
    Features: "",
    Amenities: "",
  });

  function submitfunc(e) {
    e.preventDefault();
    let Data = {
      Heading: data.heading,
      SubHeading: data.subheading,
      Image: data.image,
      Features: data.Features.split(" "),
      Amenities: data.Amenities.split(" "),
      Price: data.price,
      Content: data.content,
    };
    axios.post("/api/RoomData", Data);

    setdata({
      price: "",
      image: "",
      content: "",
      heading: "",
      subheading: "",
      Features: "",
      Amenities: "",
    });
  }

  return (
    <CreateDiv>
      <form onSubmit={submitfunc}>
        <InputDiv style={{ flexDirection: "row" }}>
          <InputDiv>
            <InputText>Heading</InputText>
            <CreateInput
              type="text"
              value={data.heading}
              style={{ width: "40vw" }}
              onChange={(e) => setdata({ ...data, heading: e.target.value })}
            />
          </InputDiv>
          <InputDiv>
            <InputText>SubHeading</InputText>
            <CreateInput
              type="text"
              style={{ width: "40vw" }}
              value={data.subheading}
              onChange={(e) => setdata({ ...data, subheading: e.target.value })}
            />
          </InputDiv>
        </InputDiv>
        <InputDiv style={{ flexDirection: "row" }}>
          <InputDiv>
            <InputText>Image</InputText>
            <CreateInput
              type="text"
              style={{ width: "40vw" }}
              value={data.image}
              onChange={(e) => setdata({ ...data, image: e.target.value })}
            />
          </InputDiv>
          <InputDiv>
            <InputText>Price</InputText>
            <CreateInput
              type="text"
              style={{ width: "40vw" }}
              value={data.price}
              onChange={(e) => setdata({ ...data, price: e.target.value })}
            />
          </InputDiv>
        </InputDiv>
        <InputDiv>
          <InputText>Content</InputText>
          <CreateTextArea
            type="text"
            value={data.content}
            onChange={(e) => setdata({ ...data, content: e.target.value })}
          />
        </InputDiv>

        <InputDiv>
          <InputText>Features</InputText>
          <CreateInput
            type="text"
            value={data.Features}
            onChange={(e) => setdata({ ...data, Features: e.target.value })}
          />
        </InputDiv>
        <InputDiv>
          <InputText>Amenities</InputText>
          <CreateInput
            type="text"
            value={data.Amenities}
            onChange={(e) => setdata({ ...data, Amenities: e.target.value })}
          />
        </InputDiv>
        <CreateButton type="submit">Submit</CreateButton>
      </form>
    </CreateDiv>
  );
}

export default Admin;

{
  /* <form className="w-full max-w-lg mx-auto my-[5%]"  onSubmit={submitfunc} > */
}
//   <h1 className="text-2xl text-center font-bold mb-[50px] mt-5">PG Rooms</h1>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
//         PGName
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={data.heading} onChange={(e)=>setdata({...data,"heading":e.target.value})}/>
//     </div>
//     <div className="w-full px-3 md:w-1/2">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
//         Address
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={data.subheading} onChange={(e)=>setdata({...data,"subheading":e.target.value})} />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
//         About PG
//       </label>
//       <textarea rows="3" className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  resize-none"  type="text" value={data.content} onChange={(e)=>setdata({...data,"content":e.target.value})} />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
//         PG Img
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={data.image} onChange={(e)=>setdata({...data,"image":e.target.value})} />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
//         Price
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={data.price} onChange={(e)=>setdata({...data,"price":e.target.value})} />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
//         Features
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={data.Features} onChange={(e)=>setdata({...data,"Features":e.target.value})} />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
//         Amenities
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={data.Amenities} onChange={(e)=>setdata({...data,"Amenities":e.target.value})} />
//     </div>
//   </div>
//   <div className="md:flex md:items-center">
//     <div className="md:w-1/3">
//       <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded" type="submit">
//         Submit
//       </button>
//     </div>
//     <div className="md:w-2/3"></div>
//   </div>
// </form>
