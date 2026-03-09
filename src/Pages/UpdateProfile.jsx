// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { updateProfile } from "firebase/auth";

// const UpdateProfile = () => {

//   const { user } = useContext(AuthContext);

//   const [name, setName] = useState(user?.displayName || "");
//   const [photo, setPhoto] = useState(user?.photoURL || "");

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     updateProfile(user, {
//       displayName: name,
//       photoURL: photo,
//     })
//       .then(() => {
//         alert("Profile updated successfully");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 shadow rounded">

//       <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

//       <form onSubmit={handleUpdate} className="flex flex-col gap-4">

//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2"
//         />

//         <input
//           type="text"
//           placeholder="Photo URL"
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//           className="border p-2"
//         />

//         <button className="bg-green-600 text-white py-2 rounded">
//           Update Profile
//         </button>

//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;