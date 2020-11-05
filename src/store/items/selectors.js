export const selectItems = state => state.items

export const selectItemById = id => state => state.items.find(item => item.id)

export const selectFridgeItems = state => state.items.filter(item => item.location === 'fridge')

export const selectPantryItems = state => state.items.filter(item => item.location === 'pantry')