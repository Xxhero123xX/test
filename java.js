const items = [
    { name: 'Pickaxe', image: 'image/pickaxe.gif' },
    { name: 'Axe', image: 'image/axe.gif' },
    { name: 'Shovel', image: 'image/shovel.png' },
    { name: 'Sword', image: 'image/sword.gif' },
    { name: 'Hoe', image: 'image/hoe.gif' },
    { name: 'Stick', image: 'image/stick.gif' },
    { name: 'Bow', image: 'image/bow.gif' },
    { name: 'Arrow', image: 'image/arrow.gif' },
    { name: 'Andesite', image: 'image/Andesite.gif' },
    { name: 'Bucket', image: 'image/bucjet.gif' },
    { name: 'Chears', image: 'image/chears.gif' },
    { name: 'Cobblestone Slab', image: 'image/cobblestone slab.gif' },
    { name: 'Cobblestone Wall', image: 'image/cobblestone wall gif.gif' },
    { name: 'Compass', image: 'image/compass.gif' },
    { name: 'Flint and Steel', image: 'image/flint and steel.gif' },
    { name: 'Furnace', image: 'image/furnace.gif' },
    { name: 'Minecart', image: 'image/minecart.gif' },
    { name: 'Moss cobblestone', image: 'image/moss cobblestone.gif' },
    { name: 'Polished Andesite', image: 'image/polished andesite.gif' },
    { name: 'Powered Rail', image: 'image/powered rail.gif' },
    { name: 'Rail', image: 'image/rail.gif' },
 
 
 
 
    // Add more items here
];

function displayItems(filteredItems) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <img class="item-image" src="${item.image}" alt="${item.name}">
            <p class="item-name">${item.name}</p>
        `;
        itemList.appendChild(div);
    });
}

function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    displayItems(filteredItems);
}

// Initial display of all items
displayItems(items);
