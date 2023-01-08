// Storage Controller



// Item Controller
const ItemCtrl = (function (){
    // Item Constructor
    const Item = function (id, name, cost){
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    // Data Structure / State
    const data = {
        items: [
            // {id: 0, name: 'Fuel', cost: 300},
            // {id: 1, name: 'Food', cost: 400},
            // {id: 3, name: 'Fun', cost: 600}
        ],
        currentItem: null,
        totalCost: 0
    }

    // Public methods
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function (name, cost){
            let ID
            // Create ID
            if (data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0
            }
            // Cost to number
            cost = parseInt(cost)
            // Create new item
            newItem = new Item(ID, name, cost)
            // Add to items array
            data.items.push(newItem)
            return newItem
        },
        getItemById: function (id){
            let found = null
            // Loop through items
            data.items.forEach(function (item){
                if(item.id === id){
                    found = item
                }
            })
            return found
        },
        updateItem: function (name, cost){
            // Cost to number
            cost = parseInt(cost)

            let found = null

            data.items.forEach(function (item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.cost = cost;
                    found = item;
                }
            })
            return found
        },
        deleteItem: function (id){
            // Get ids
            ids = data.items.map(function (item){
                return item.id
            })
            // Get index
            const index = ids.indexOf(id)
            // Remove item
            data.items.splice(index, 1)
        },
        clearAllItems: function (){
            data.items = []
        },
        logData: function () {
            return data
        },
        getTotalCost: function (){
            let total = 0

            // Loop through items and add costs
            data.items.forEach(function (item){
                total += item.cost
            })
            // Set total cost in data structure
            data.totalCost = total
            return data.totalCost
        },
        setCurrentItem: function (item){
            data.currentItem = item
        },
        getCurrentItem: function (){
            return data.currentItem
        }
    }
})()



// UI Controller
const UICtrl = (function (){

    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCostInput: '#item-cost',
        totalCost: '#total-cost'
    }

    // Public methods
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(function (item){
                html += `
                <li id="item-${item.id}" class="collection-item">
                    <strong>${item.name}</strong>
                    <em>${item.cost}</em>
                    <a href="#">
                        <i class="edit-item">Edit</i>
                    </a>
                </li>`;
            })
            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html
        },
        getSelectors: function (){
            return UISelectors
        },
        getItemInput: function (){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                cost: document.querySelector(UISelectors.itemCostInput).value
            }
        },
        addListItem: function (item){
            // Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block'
            // Create li element
            const li = document.createElement('li')
            // Add class
            li.className = 'collection-item'
            // Add ID
            li.id = `item-${item.id}`
            // Add HTML
            li.innerHTML = `
                <strong>${item.name}</strong>
                <em>${item.cost}</em>
                <a href="#">
                    <i class="edit-item">Edit</i>
                </a>
            `
            // Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },
        updateListItem: function (item){
            let listItems = document.querySelectorAll(UISelectors.listItems)

            // Turn Node List into Array
            listItems = Array.from(listItems)

            listItems.forEach(function (listItem){
                const itemID = listItem.getAttribute('id')

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `
                        <strong>${item.name}</strong>
                        <em>${item.cost}</em>
                        <a href="#">
                            <i class="edit-item">Edit</i>
                        </a>
                    `
                }
            })
        },
        deleteListItem: function (id){
            const itemID = `#item-${id}`
            const item = document.querySelector(itemID)
            item.remove()
        },
        removeItems: function (){
            let listItems = document.querySelectorAll(UISelectors.listItems)
            // Turn Node list into array
            listItems = Array.from(listItems)
            listItems.forEach(function (item){
                item.remove()
            })
        },
        hideList: function (){
            document.querySelector(UISelectors.itemList).style.display = 'none'
        },
        clearInput: function (){
            document.querySelector(UISelectors.itemNameInput).value = ''
            document.querySelector(UISelectors.itemCostInput).value = ''
        },
        addItemToForm: function (){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
            document.querySelector(UISelectors.itemCostInput).value = ItemCtrl.getCurrentItem().cost
            UICtrl.showEditState()
        },
        showTotalCost: function (totalCost){
            document.querySelector(UISelectors.totalCost).textContent = totalCost
        },
        clearEditState: function (){
            UICtrl.clearInput()
            document.querySelector(UISelectors.updateBtn).style.display = 'none'
            document.querySelector(UISelectors.deleteBtn).style.display = 'none'
            document.querySelector(UISelectors.backBtn).style.display = 'none'
            document.querySelector(UISelectors.addBtn).style.display = 'inline'
        },
        showEditState: function (){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline'
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
            document.querySelector(UISelectors.backBtn).style.display = 'inline'
            document.querySelector(UISelectors.addBtn).style.display = 'none'
        }
    }

})()



// App Controller
const App = (function (ItemCtrl, UICtrl){
    // Load event listeners
    const loadEventListeners = function (){
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors()
        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
        // Disable submit on enter
        document.addEventListener('keypress', function (e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault()
                return false;
            }
        })
        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)
        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
        // Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        // Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)
        // Clear items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick)
    }

    // Add item submit
    const itemAddSubmit = function (e){
        // Get form input from UI controller
        const input = UICtrl.getItemInput()
        // Check for name and cost input
        if (input.name !== '' && input.cost !== ''){
            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.cost)
            // Add item to UI list
            UICtrl.addListItem(newItem)
            // Get total cost
            const totalCost = ItemCtrl.getTotalCost()
            // Add total cost to UI
            UICtrl.showTotalCost(totalCost)
            // Clear fields
            UICtrl.clearInput()
        }
        e.preventDefault()
    }

    // Update item submit
    const itemUpdateSubmit = function (e){
        // Get item input
        const input = UICtrl.getItemInput()
        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.cost)
        // Update UI
        UICtrl.updateListItem(updatedItem)
        // Get total cost
        const totalCost = ItemCtrl.getTotalCost()
        // Add total cost to UI
        UICtrl.showTotalCost(totalCost)
        UICtrl.clearEditState()
        e.preventDefault()
    }

    // Delete button event
    const itemDeleteSubmit = function (e){
        // Get current Item
        const currentItem = ItemCtrl.getCurrentItem()
        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id)
        // Delete from UI
        UICtrl.deleteListItem(currentItem.id)
        // Get total cost
        const totalCost = ItemCtrl.getTotalCost()
        // Add total cost to UI
        UICtrl.showTotalCost(totalCost)
        UICtrl.clearEditState()
        e.preventDefault()
    }

    // Clear items event
    const clearAllItemsClick = function (){
        // Delete all items from data structure
        ItemCtrl.clearAllItems()
        // Get total cost
        const totalCost = ItemCtrl.getTotalCost()
        // Add total cost to UI
        UICtrl.showTotalCost(totalCost)
        // Remove from UI
        UICtrl.removeItems()
        // Hide ul
        UICtrl.hideList()
    }

    // Click edit item
    const itemEditClick = function (e){
        if(e.target.classList.contains('edit-item')){
            // Get list item id (item-0, item-1)
            const listId = e.target.parentNode.parentNode.id;
            // Break into an array
            const listIdArr = listId.split('-')
            // Get the actual id
            const id = parseInt(listIdArr[1])
            // Get item
            const itemToEdit = ItemCtrl.getItemById(id)
            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit)
            // Add item to form
            UICtrl.addItemToForm()
        }

        e.preventDefault()
    }

    // Public methods
    return {
        // init() {... console.log('Initializing app')} - also works
        init: function (){
            console.log('Initializing app')
            // Clear edit state/ set initial state
            UICtrl.clearEditState()
            // Fetch items from data structure
            const items = ItemCtrl.getItems()
            // Check if any items
            if (items.length === 0){
                UICtrl.hideList()
            } else {
                // Populate list with items
                UICtrl.populateItemList(items)
            }
            // Get total cost
            const totalCost = ItemCtrl.getTotalCost()
            // Add total cost to UI
            UICtrl.showTotalCost(totalCost)
            // Load event listeners
            loadEventListeners()
        }
    }

})(ItemCtrl, UICtrl)

// Initialize App
App.init()
