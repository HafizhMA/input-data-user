import { useState } from "react";
import "./App.css";

const dataUser = [
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
];

function App() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="container mx-auto bg-gray-600 text-white rounded-sm p-7">
          <h1 className="text-center font-bold">input data user</h1>
          <div className="form-container">
            <form>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="nama">
                  nama
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nama"
                  type="text"
                  placeholder="nama"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="umur">
                  umur
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="umur"
                  type="number"
                  placeholder="umur"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="jenis-kelamin">
                  jenis-kelamin
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="jenis-kelamin"
                  type="text"
                  placeholder="jenis-kelamin"
                />
              </div>
              <div class="mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
