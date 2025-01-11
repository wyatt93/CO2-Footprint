function searchByCompany() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            var txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function searchByCountry() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[1];

        if (td) {
            var txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

var search = document.getElementById("inputGroupSelect");
    search.addEventListener("change", searchFunction());

function searchFunction() {
    
    var choice = document.getElementById("inputGroupSelect").value;

    if (choice == "1") {
        searchByCompany();
    } else if (choice == "2") {
        searchByCountry();
    }

}