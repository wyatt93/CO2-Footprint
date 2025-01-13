function searchByCompany() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            let txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchByCountry() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];

        if (td) {
            let txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//listener um zwischen Suche nach Unternehmen und Land zu wechseln
var search = document.getElementById("inputGroupSelect");
    search.addEventListener("change", searchFunction);

function searchFunction() {
    
    let choice = document.getElementById("inputGroupSelect").value;

    if (choice == "1") {
        searchByCompany();
    } else if (choice == "2") {
        searchByCountry();
    }

}

//Navbarverlauf ändern, abhängig ob Deutsch oder Arabisch gewählt ist, links oder rechts
function languageSetterGer(){
    document.dir = "ltr"
}

function languageSetterArab(){
    document.dir = "rtl";
}