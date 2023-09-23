import { useState } from "react";
import "./App.css";

function App() {
  const initialFormData = {
    nama: "",
    umur: "",
    jeniskelamin: "Laki-laki",
  };

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

  const [formData, setFormData] = useState(initialFormData);
  const [selectedId, setSelectedId] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedId !== -1) {
      const updatedUser = {
        id: selectedId,
        ...formData,
      };
      console.log(formData);

      const updatedDataUser = dataUser.map((user) =>
        user.id === selectedId ? updatedUser : user
      );

      setDataUser(updatedDataUser);

      setSelectedId(-1);
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
      };
      setDataUser([...dataUser, newUser]);
    }
    setFormData(initialFormData);
  };

  const handleUpdate = (user) => {
    setSelectedId(user.id);
    setFormData(user);
    console.log(user);
  };

  const handleDelete = (userId) => {
    const newDataUser = dataUser.filter((user) => user.id !== userId);
    setDataUser(newDataUser);
    setSelectedId(-1);
  };

  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="container mx-auto bg-gray-600 text-white rounded-sm p-7">
          <div className="update-form-container">
            <h1 className="text-center font-bold">
              {selectedId !== -1 ? "Update" : "Input"} Data User
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="nama">
                  Nama
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                  placeholder="Nama"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="umur">
                  Umur
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="umur"
                  name="umur"
                  value={formData.umur}
                  onChange={handleInputChange}
                  required
                  placeholder="Umur"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="jenis-kelamin"
                >
                  Jenis Kelamin
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
                  {selectedId !== -1 ? "Update" : "Submit"}
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
                <p>Nama: {user.nama}</p>
                <p>Umur: {user.umur}</p>
                <p>Jenis Kelamin: {user.jeniskelamin}</p>
                <div className="button-action flex justify-end mt-4">
                  <button
                    onClick={() => handleUpdate(user)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-3"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
