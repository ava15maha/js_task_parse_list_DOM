"use strict";
function getSalary(salary) {
    return +salary.replace(/[^0-9]/g, "");
}
function sortList(list) {
    const items = Array.from(list.querySelectorAll("li"));
    const itemsSorted = items.sort((a, b)=>{
        const salaryA = getSalary(a.dataset.salary);
        const salaryB = getSalary(b.dataset.salary);
        return salaryB - salaryA;
    });
    list.innerHTML = "";
    itemsSorted.forEach((item)=>list.appendChild(item));
}
function getEmployees(list) {
    const employees = Array.from(list.querySelectorAll("li"));
    return employees.map((el)=>{
        const names = el.textContent.trim();
        const salary = getSalary(el.getAttribute("data-salary"));
        return {
            names,
            salary
        };
    });
}
const employeesList = document.querySelector("ul");
sortList(employeesList);
getEmployees(employeesList);

//# sourceMappingURL=index.f75de5e1.js.map
