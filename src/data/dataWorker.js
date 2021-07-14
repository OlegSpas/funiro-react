const storage = window.localStorage;
const _key = "data";

export function ReadData() {
    const dataFromStorage = storage.getItem(_key)
    
    if (dataFromStorage !== null) {
        const arrayOfNames = JSON.parse(dataFromStorage);
        const cards = []

        for(let i = 0; i < arrayOfNames.length; i++) {
            const item = storage.getItem(_key + arrayOfNames[i])
            if( item !== null)
                cards.push(JSON.parse(item))
        }

        return {
            cards: cards
        }
    }

    return { 
        cards: [
            { 
                name:"Syltherine", 
                details:"Stylish cafe chair",
                price:"Rp. 2.500.000",
                oldPrice:"Rp. 3.500.000"
            }
        ]
    };
}

export function WriteData(objectToWrite, key) {
    storage.setItem(_key + key, JSON.stringify(objectToWrite));
}

export function WriteNewKey(key) {
    const dataFromStorage = storage.getItem(_key);

    var itemToSet = [key];

    if (dataFromStorage !== null) {
        const parsedData = JSON.parse(dataFromStorage);

        parsedData.push(key);

        itemToSet = parsedData;
    }
    
    storage.setItem(_key, JSON.stringify(itemToSet))
}

export function DeleteKey(keyToDelete) {
    const dataFromStorage = storage.getItem(_key)

    const parsedData = JSON.parse(dataFromStorage)

    parsedData.splice(parsedData.findIndex(key => key === keyToDelete), 1)

    storage.removeItem(keyToDelete)
    
    storage.setItem(_key, JSON.stringify(parsedData))
}

export function WriteCard(card) {
    if (storage.getItem(_key + card.name) === null) {
        WriteNewKey(card.name)
    }
    
    WriteData(card, card.name)
}

export function ChangeCardName(card, oldName) {
    DeleteKey(oldName)
    
    WriteCard(card)
}