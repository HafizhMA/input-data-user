import { useState } from "react";
import "./App.css";

function App() {
  const [dataUser, setDataUser] = useState([
    {
      id: 1,
      nama: "Adam",
      umur: 20,
      jeniskelamin: "Laki-laki",
    },
    {
      id: 2,
      nama: "Budi",
      umur: 25,
      jeniskelamin: "Laki-laki",
    },
    {
      id: 3,
      nama: "Citra",
      umur: 22,
      jeniskelamin: "Perempuan",
    },
  ]);

  const [formData, setFormData] = useState({
    nama: "",
    umur: "",
    jeniskelamin: "laki-laki",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      ...formData,
    };
    setDataUser([...dataUser, newUser]);
    setFormData({
      nama: "",
      umur: "",
      jeniskelamin: "Laki-laki",
    });
  };
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="container mx-auto bg-gray-600 text-white rounded-sm p-7">
          <h1 className="text-center font-bold">input data user</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" for="nama">
                  nama
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                  placeholder="nama"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" for="umur">
                  umur
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="umur"
                  name="umur"
                  value={formData.umur}
                  onChange={handleInputChange}
                  required
                  placeholder="umur"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  for="jenis-kelamin"
                >
                  jenis-kelamin
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="jeniskelamin"
                  name="jeniskelamin"
                  value={formData.jeniskelamin}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <br />
              </div>
              <div className="mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="output-Container">
            {dataUser.map((user) => (
              <div
                className="user-data mb-4 bg-slate-200 text-slate-900 rounded-sm p-3"
                key={user.id}
              >
                <p>nama: {user.nama}</p>
                <p>umur: {user.umur}</p>
                <p>jenis-kelamin: {user.jeniskelamin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
