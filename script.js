const data = [{itemName: 'test', price: 10}]

function mostExpensiveItemName(items){
    let highestItemName = {price: 0};
    for(let i = 0; i < items.length; i++){
      if(items[i].price > highestItemName.price){
        highestItemName = items[i];
      }
    }
    return highestItemName.itemName;
  }

  console.log(mostExpensiveItemName(data))