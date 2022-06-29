const form = document.querySelector('#form');
const table = document.querySelector('table')
const elListData = document.querySelector('#table-data');
const inputFullName = document.querySelector('#input--name')
const selectYear = document.querySelector('#input--year');
const radioGender = document.querySelectorAll('.input--gender')
const yearFilterSelect = document.querySelector('#filter-year');
const genderFilterSelect = document.querySelector('#filter-gender');
const sortBy = document.querySelector('#sort-name');
const sortByType = document.querySelector('#sort-type');
const yearFilter = document.querySelector('#filter-year');
let dataFilter = [];



const savedData = (dataList) => {
    localStorage.setItem('dataList', JSON.stringify(dataList));
}
const getData = () => {
    return JSON.parse(localStorage.getItem('dataList')) || []
}
const uid = () => {
    return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
};
const appendData = (data) => {
    const index = elListData.childElementCount + 1
    elListData.innerHTML +=
        `<tr class="odd:bg-sky-100 group">
        <th class="px-6 py-2">${index}</th>
        <td class="px-6 py-2">${data.fullName}</td>
        <td class="px-6 py-2">${data.yearOfBirth}</td>
        <td class="px-6 py-2">${data.gender}</td>
        <td class="px-6 py-2">${data.createAt}</td>
        <td class="px-6 py-2 linear duration-200 opacity-0 group-hover:opacity-100">
            <button onclick="return deleteData(event,'${data.id}')" class="outline-none btn-delete">
            <img src="./assets/images/trash.png"/>
            </button>
        </td>
    </tr>`
}
const addData = (data) => {
    const dataList = getData();
    dataList.push(data);
    savedData(dataList)
    dataFilter = dataList;
    // elListData.childElementCount
    appendData(data);
    sortData();
}
const deleteData = (event, id) => {
    //delete row in table
    const getTrParent = (child) => {
        let parent = child.parentNode
        while (parent.nodeName.toLowerCase() !== 'tr') {
            parent = parent.parentNode
        }
        return parent;
    }
    const row = getTrParent(event.target);
    const indexRow = row.rowIndex
    table.deleteRow(indexRow)

    //update data on localStorage
    const dataDeleted = getData().filter(data => data.id !== id);
    savedData(dataDeleted)
    dataFilter = dataDeleted;

    //update index row
    for (let i = indexRow; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = table.rows[i].rowIndex; //
    }
}

const loadYearSelect = () => {
    for (let index = 1990; index <= 2022; index++) {
        selectYear.innerHTML += `<option value=${index}>${index}</option>`
    }
}

const render = (dataRender = []) => {
    elListData.innerHTML = ""
    dataRender.forEach((data) => {
        appendData(data)
    })

}


const filterData = () => {
    const yearFilterValue = yearFilterSelect.value
    const genderFilterValue = genderFilterSelect.value
    dataFilter = getData().filter(data => {
        if (!yearFilterValue && genderFilterValue) {
            return data.gender.toLowerCase() === genderFilterValue;
        }
        else if (!genderFilterValue && yearFilterValue) {
            return data.yearOfBirth === yearFilterValue
        } else if (genderFilterValue && yearFilterValue) {
            return data.yearOfBirth === yearFilterValue && data.gender.toLowerCase() === genderFilterValue
        }
        return true;
    })
    sortBy.selectedIndex = 0;
    sortByType.selectedIndex = 0;
    console.log(sortBy.defaultSelected)
    // render(dataFilter);
    sortData();
}

const sortData = () => {
    const nameSort = sortBy.value;
    const typeSort = sortByType.value;
    const dataSort = dataFilter.sort((a, b) => {
        return a[nameSort] >= b[nameSort] ? typeSort : -typeSort
    })
    render(dataSort)
}

const loadSelectYearFilter = () => {
    const yearList = [];
    yearFilter.innerHTML = `<option value="">Year of birth</option>`
    const dataList = getData();
    dataList.forEach(({ yearOfBirth: year }) => {
        if (!yearList.includes(year)) {
            yearList.push(year);
            yearFilter.innerHTML += `<option value=${year}>${year}</option>`
        }
    })
}

form.addEventListener('submit', (event) => {
    const formData = new FormData(form)
    const dataSubmit = Object.fromEntries(formData)
    //convert dateTime
    const dateNow = new Date().toLocaleString();
    const [dateCreated, timeCreated] = dateNow.split(',')
    dataSubmit.createAt = `${timeCreated.replaceAll(' ', '')} ${dateCreated}`
    dataSubmit.id = uid();

    addData(dataSubmit)
    loadSelectYearFilter();
    form.reset()
    event.preventDefault();
});

const init = () => {
    loadYearSelect();
    loadSelectYearFilter();
    render(getData());
    dataFilter = getData()
}
init();

