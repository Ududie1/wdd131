const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Get the select element by ID
const selectElement = document.getElementById('product-select');

// Loop through the products array and create option elements
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;  // Set the option's value to the product's id
  option.textContent = product.name;  // Set the option's display text to the product's name
  selectElement.appendChild(option);  // Append the option to the select element
});
