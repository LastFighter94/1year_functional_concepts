// для того чтобы все это работало лучше - можно обернуть весь функционал в IIFE контроллеры
// а также добавить TypeScript - и будем хорошо.

"use strict";

// selectors
let searchForm = document.querySelector('#search-form')
let usersTable = document.querySelector('.users-table')
let sortByData = document.querySelector('.sort-by-data')
let sortByRate = document.querySelector('.sort-by-rate')
let cleanFilter = document.querySelector('.clean-filter')
let pagesDiv = document.querySelector('#pages-div')

// constants
const url = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users'
const usersPerPage = 5

// state
let currentPage = 1

// значения "по возрастанию" на сортировку по дате и рейтингу - изначально стоят в true, далее меняются в обратную сторону
let rateUp, dataUp = true

let totalPages, arrToSort
let pagesArray = []

// arrUsers - основной массив пользователей, который берем с сервера изначально
// arrFilteredUsers - отфильтрованный по совпадению с полями email && username массив,
// arrFilteredAndSortedUsers - отсортированный и отфильтрованный массив, либо просто отсортированный
let arrFilteredAndSortedUsers = []
let arrFilteredUsers = []
let arrUsers = []

document.addEventListener("DOMContentLoaded", getUsers);

// event listeners
sortByData.addEventListener('click', e => sortByAttr(e, 'data'))
sortByRate.addEventListener('click', e => sortByAttr(e, 'rate'))
cleanFilter.addEventListener('click', clearFilterFunction)
searchForm.addEventListener('input', searchUsers)

// Берем пользователей с сервера по url вверху, а также ловим ошибку в случае неправильного URL
function getUsers(){
    fetch(url)
        .then((res) => {
            if (res.ok) return res.json()
            throw new Error('Something went wrong');
        })
        .then(users => arrUsers = users)
        .then(() => {
            setTotalPagesAndPagesArray()
            refreshPageState(currentPage)
            usersTable.after(pagesDiv)
        })
        .catch(e => {console.error(e)});
}

//////////////////////// RENDER USERS /////////////////

// Функция для рендера пользователей в зависимости от значения currentPage
function arrCurrentPageUsers(){
    return arrUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
}

function fillUsers(users, filterOrSorted=false){
    // при каждом fillUsers идет перерисовка tbody у usersTable
    if (usersTable.tBodies[0]) usersTable.removeChild(usersTable.tBodies[0])
    let usersTableTbody = usersTable.createTBody()

    let usersPageView

    if (filterOrSorted){
        // если массив отфильтрован или отсортирован или и то и другое, значит
        // мы передали arrFilteredAndSortedUsers || arrFilteredUsers,
        // значит users.length в нашей функции может быть больше 5
        // а на странице должно быть только пять пользователей
        usersPageView = users.slice(0, 5)
    } else {
        // если не отфильтрован и не отсортирован то нужно отобразить пользователей по currentPage
        usersPageView = arrCurrentPageUsers()
    }

    usersPageView.map((user) => {
        let userTr = document.createElement('tr')
        userTr.id = user.id
        userTr.innerHTML = `
            <th>${user.username}</th>
            <td>${user.email}</td>
            <td>${user.registration_date}</td>
            <td>${user.rating}</td>
            <td><i onClick="askToDeleteUser(${user.id})" class="fa-solid fa-xmark delete"></i></td>
        `
        usersTableTbody.appendChild(userTr)
    })
}

//////////////////////// SORT AND FILTER //////////////

// можно обернуть в debounce при желании
function searchUsers(){
    // если была сортировка (arrToSort !== null) или есть значение в поле поиска пользователей - показать "очистить фильтр"
    if (searchForm.value.length || arrToSort){
        showClearFilter()
    } else {
        hideClearFilter()
    }

    arrFilteredUsers = arrUsers.filter(user => // в этом случае на страницу будут выводиться фильтрованные пользователи со всех страниц
    // arrFilteredUsers = arrCurrentPageUsers().filter(user => // в этом случае - только с текущей страницы
        user.username
            .toLowerCase()
            .includes(searchForm.value) || user.email.toLowerCase().includes(searchForm.value)
    )

    if (!arrFilteredUsers.length){
        usersTable.style.display = 'none'
        pagesDiv.style.display = 'none'
    } else {
        usersTable.style.display = 'block'
        pagesDiv.style.display = 'flex'
    }

    // если фильтр активен, то заполняем табличку массивом отфильтрованным, иначе основным массивом
    if (isArrUsersFiltered()){
        fillUsers(arrFilteredUsers, true)
    } else {
        fillUsers(arrUsers)
    }
}

function sortByAttr(e, attr){
    // если массив отфильтрован, то сортируем отфильтрованный массив
    // иначе сортируем массив в зависимости от currentPage
    isArrUsersFiltered()
        ? arrToSort = arrFilteredUsers
        : arrToSort = arrCurrentPageUsers()

    if (arrToSort.length <= 1) return // если длина массива выше меньше единицы, смысл сортировки = 0

    showClearFilter()
    // только пользователь нажал на сортировку, появляется "очистить фильтр" - сбросить его можно будет только нажав на него

    e.target.classList.toggle('active')
    // красим текст "Дата регистрации" и "Рейтинг"

    // переиспользуемый функционал сортировки
    if (attr === 'rate'){
        rateUp = !rateUp
        arrFilteredAndSortedUsers = arrToSort.sort((a, b) => {
            if (rateUp) return a.rating - b.rating
            return b.rating - a.rating
        })
    }

    if (attr === 'data'){
        dataUp = !dataUp
        arrFilteredAndSortedUsers = arrToSort.sort((a, b) => {
            if (dataUp) return Date.parse(a.registration_date) - Date.parse(b.registration_date)
            return Date.parse(b.registration_date) - Date.parse(a.registration_date)
        })
    }

    searchForm.value = ''

    fillUsers(arrFilteredAndSortedUsers, true)
}

// Функция проверки активности фильтрации (поиска) пользователей
function isArrUsersFiltered(){
    return (arrFilteredUsers.length > 0 || (arrFilteredUsers.length === arrUsers.length) || searchForm.value.length > 0)
}

//////////////////////// MODAL ////////////////////////

function createModal(){
    let modalWrapperDiv = document.createElement('div')
    modalWrapperDiv.className = 'modal-wrapper'

    modalWrapperDiv.innerHTML = `
        <div class="modal">
            Вы уверены, что хотите удалить пользователя?
            <br/>
            <button class="confirm-btn">Да</button>
            <button class="deny-btn">Нет</button>
        </div>
    `

    document.body.insertBefore(modalWrapperDiv, document.body.children[0])
    document.body.style.overflow = 'hidden'
}

function defineModalConfirmBtnAction(action){
    let confirmBtn = document.querySelector('.confirm-btn')

    let denyBtn = document.querySelector('.deny-btn')
    denyBtn.addEventListener('click', deleteModal)

    if (action.name === 'deleteUser'){
        confirmBtn.addEventListener('click', () => deleteUser(action.info.userId))
    }
}

//// MODAL ACTION HANDLERS

// здесь реализован переиспользуемый функционал модалки (можно сделать целую кучу модалок через
// MODAL ACTION HANDLERS и MODAL ACTIONS - не стоит забывать делать deleteModal() при dispatch
// model action

function askToDeleteUser(id){
    createModal()
    defineModalConfirmBtnAction({
        name: 'deleteUser',
        info: {userId: id}
    })
}

function deleteModal(){
    let modalWrapper = document.querySelector('.modal-wrapper')
    document.body.style.overflow = 'auto'
    modalWrapper.remove()
}

//// MODAL ACTIONS ////

function deleteUser(userId){
    // удаляем пользователя по его id
    arrUsers = arrUsers.filter(user => +user.id !== userId)
    // заполняем табличку
    fillUsers(arrUsers)
    // убираем фильтры
    clearFilterFunction()
    // удаляем модалку
    deleteModal()
    // устанавливаем totalPages && pagesArray
    setTotalPagesAndPagesArray()
    // обновляем состояние страниц
    refreshPageState(currentPage)
}

//////////////////////// CLEAR FILTER /////////////////

function clearFilterFunction(){
    // refresh state
    arrFilteredUsers = []
    arrToSort = null
    fillUsers(arrUsers)
    // можно вынести отдельно, я так полагаю

    sortByRate.className = 'sort-by-rate'
    sortByData.className = 'sort-by-data'

    hideClearFilter()
}

function showClearFilter(){
    cleanFilter.style.display = 'block'
}

function hideClearFilter(){
    cleanFilter.style.display = 'none'
    searchForm.value = ''
}

//////////////////////// PAGES ////////////////////////

// функционал пагинации

function setCurrentPage(page){
    clearFilterFunction()
    currentPage = page
    setActivePage()

    fillUsers(arrUsers)
}

function refreshPageState(currentPage, isNoInfo=false){
    if (isNoInfo){
        return pagesDiv.innerHTML = 'No info'
    }

    let page

    if (isPageStateStatic()) return // если состояние страниц осталось статичным ничего не делаем

    if (currentPage - 1 === pagesArray.length){
        page = pagesArray[pagesArray.length - 1] // срабатывает когда последняя страница активна и мы удалили из нее все элементы
    } else {
        page = currentPage // срабатывает в ином случае
    }

    pagesDiv.innerHTML = ''

    pagesArray.forEach(page => {
        pagesDiv.innerHTML += `
        <span 
            id="page${page}"
            class="page"
            onClick="setCurrentPage(${page})"
        >
        ${page}
        </span>
    `
    })

    setCurrentPage(page)
}

function setActivePage(){
    pagesArray.forEach(pNumber => {
        let page = document.getElementById(`page${pNumber}`)

        if (page.id === `page${currentPage}`){
            page.className = 'page active'
        } else {
            page.className = 'page'
        }

    })
}

function isPageStateStatic(){
    return pagesArray.includes(currentPage) && pagesArray.length * usersPerPage > arrUsers.length
}

function setTotalPagesAndPagesArray(){
    pagesArray = []
    totalPages = Math.ceil(arrUsers.length / usersPerPage)
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1)
    }
}