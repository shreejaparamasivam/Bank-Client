// import axios from "axios";
// import { useState } from "react";

// export default function Alldata() {
//   let [data, setData] = useState([]);
//   let [editId, setEditId] = useState(null);
//   let [formData, setFormData] = useState({

//     name: "",
//     email: "",
//     password: "",
//     amount: ""
//   });

//   // Fetch data from backend
//   async function handleClick(e) {
//     if (e && e.preventDefault) e.preventDefault(); 
//     try {
//       let result = await axios.get("https://bank-server-nm3b.onrender.com/data");
//       setData(result.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   // Delete user by ID
//   async function handleDelete(id) {
//     try {
//       await axios.delete(`https://bank-server-nm3b.onrender.com/delete/${id}`);
//       setData(data.filter(item => item._id !== id)); 
//     } catch (error) {
//       console.error("Error deleting:", error);
//     }
//   }

//   // Prepare form for editing
//   function handleEdit(item) {
//     setEditId(item._id);
//     setFormData({
//       name: item.name,
//       email: item.email,
//       password: item.password,
//       amount: item.amount
//     });
//   }

//   // Track form changes
//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   // Update user data
//   async function handleUpdate() {
//     try {
//       await axios.put(`https://bank-server-nm3b.onrender.com/update/${editId}`, formData);
//       setEditId(null);
//       handleClick(); 
//     } catch (error) {
//       console.error("Error updating:", error);
//     }
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div style={{ textAlign: 'center', padding: '70px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 8px rgba(125, 29, 29, 0.1)', backgroundColor: '#f9f9f9' }}>
//       <h1>Alldata</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">E-mail</th>
//             <th scope="col">Password</th>
//             <th scope="col">Balance</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item._id}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.password}</td>
//               <td>{item.amount}</td>
//               <td>
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleClick}>Fetch Data</button>

//       {editId && (
//         <div>
//           <h2>Edit User</h2>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//           <input
//             type="number"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             placeholder="Balance"
//           />
//           <button onClick={handleUpdate}>Update</button>
//           <button onClick={() => setEditId(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }
































import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Alldata() {
  let [data, setData] = useState([]);
  let [editId, setEditId] = useState(null);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    amount: ""
  });

  async function handleClick(e) {
    if (e && e.preventDefault) e.preventDefault();
    try {
      let result = await axios.get("https://bank-server-nm3b.onrender.com/data");
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`https://bank-server-nm3b.onrender.com/delete/${id}`);
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  }

  function handleEdit(item) {
    setEditId(item._id);
    setFormData({
      name: item.name,
      email: item.email,
      password: item.password,
      amount: item.amount
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleUpdate() {
    try {
      await axios.put(`https://bank-server-nm3b.onrender.com/update/${editId}`, formData);
      setEditId(null);
      handleClick();
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm w-75">
        <h1 className="text-center mb-4">All Data</h1>
        <table className="table table-bordered table-striped table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.amount}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={handleClick}>Fetch Data</button>

        {editId && (
          <div className="mt-4">
            <h2>Edit User</h2>
            <div className="input-group mb-2">
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            </div>
            <div className="input-group mb-2">
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div className="input-group mb-2">
              <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div className="input-group mb-2">
              <input type="number" className="form-control" name="amount" value={formData.amount} onChange={handleChange} placeholder="Balance" />
            </div>
            <button className="btn btn-success me-2" onClick={handleUpdate}>Update</button>
            <button className="btn btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}