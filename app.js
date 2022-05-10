let input = [
  { nombre: "Pedro", edad: 20, ciudad: "Córdoba" },
  { nombre: "Patricia", edad: 22, ciudad: "Córdoba" },
  { nombre: "José", edad: 23, ciudad: "Mendoza" },
  { nombre: "Maria", edad: 20, ciudad: "Córdoba" },
  { nombre: "Juan", edad: 20, ciudad: "Córdoba" },
  { nombre: "Ana", edad: 22, ciudad: "Córdoba" },
];

const inputFilter = (arr) => {
  return arr
    .filter((obj) => obj.ciudad === "Córdoba")
    .sort((a, b) => a.edad - b.edad)
    .sort((a, b) => {
      if (a.edad === b.edad) {
        return a.nombre > b.nombre ? 1 : -1;
      }
    })
    .map((el) => el.nombre);
};
