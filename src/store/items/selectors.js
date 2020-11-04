export const selectItems = state => state.items

export const selectItemById = id => state => state.items.find(item => item.id)