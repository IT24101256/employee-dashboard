const employees = [
  {
    first: "John",
    last: "Doe",
    department: "HR",
    designation: "Manager"
  },
  {
    first: "Anna",
    last: "Smith",
    department: "Marketing",
    designation: "Executive"
  },
  {
    first: "James",
    last: "Brown",
    department: "IT",
    designation: "Developer"
  },
  {
    first: "Emily",
    last: "Wilson",
    department: "Finance",
    designation: "Analyst"
  },
  {
    first: "Michael",
    last: "Taylor",
    department: "IT",
    designation: "Engineer"
  },
  {
    first: "David",
    last: "Lee",
    department: "HR",
    designation: "Officer"
  },
  {
    first: "Sarah",
    last: "Miller",
    department: "Finance",
    designation: "Executive"
  },
  {
    first: "Kevin",
    last: "Clark",
    department: "IT",
    designation: "Developer"
  }
];

const tbody = document.getElementById("employeeBody");

function renderTable(data) {
  tbody.innerHTML = "";

  data.forEach(emp => {
    tbody.innerHTML += `
      <tr>
        <td>${emp.first}</td>
        <td>${emp.last}</td>
        <td>${emp.department}</td>
        <td>${emp.designation}</td>
        <td>
          <button onclick="viewEmployee('${emp.first}','${emp.last}','${emp.department}','${emp.designation}')">
            View
          </button>
        </td>
      </tr>
    `;
  });
}

renderTable(employees);

document.getElementById("search").addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  const filtered = employees.filter(emp =>
    emp.first.toLowerCase().includes(value) ||
    emp.last.toLowerCase().includes(value) ||
    emp.department.toLowerCase().includes(value)
  );

  renderTable(filtered);
});

function sortTable(column) {
  let key;

  switch (column) {
    case 0:
      key = "first";
      break;

    case 1:
      key = "last";
      break;
  }

  employees.sort((a, b) =>
    a[key].localeCompare(b[key])
  );

  renderTable(employees);
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));

    tab.classList.add("active");
  });
});

function viewEmployee(first, last, dep, des) {
  document.getElementById("employeeDetails").innerHTML = `
    <h3>${first} ${last}</h3>
    <p>Department: ${dep}</p>
    <p>Designation: ${des}</p>
  `;

  document.getElementById("modal").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});