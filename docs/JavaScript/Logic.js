function navigateTo(pageUrl) {
    window.location.href = pageUrl;
}

function handleFormSubmit(event, nextRoute) {
    event.preventDefault();
    navigateTo(nextRoute);
}

// FILTER FOR DASHBOARD
function filterTable() {
    let itemFilter = document.getElementById("filterItem").value.toLowerCase();
    let areaFilter = document.getElementById("filterArea").value.toLowerCase();
    let dateFilter = document.getElementById("filterDate").value;

    let rows = document.querySelectorAll(".dashboard tbody tr");

    rows.forEach(row => {
        let item = row.cells[2].textContent.toLowerCase();
        let area = row.cells[1].textContent.toLowerCase();
        let dateText = row.cells[3].textContent.trim();

        let matchItem = itemFilter === "" || item.includes(itemFilter);
        let matchArea = areaFilter === "" || area.includes(areaFilter);

        let matchDate = true;

        if (dateFilter !== "") {
            let tableDate = new Date(dateText);
            let inputDate = new Date(dateFilter);

            matchDate =
                tableDate.getFullYear() === inputDate.getFullYear() &&
                tableDate.getMonth() === inputDate.getMonth() &&
                tableDate.getDate() === inputDate.getDate();
        }

        row.style.display = (matchItem && matchArea && matchDate) ? "" : "none";
    });
}

function resetFilter() {
    document.getElementById("filterItem").value = "";
    document.getElementById("filterArea").value = "";
    document.getElementById("filterDate").value = "";

    document.querySelectorAll(".dashboard tbody tr").forEach(row => {
        row.style.display = "";
    });
}

window.onload = function () {
    document.getElementById("filterBtn").onclick = filterTable;
    document.getElementById("resetBtn").onclick = resetFilter;
};