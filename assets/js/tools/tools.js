export function setLocalStorage(data, address){
    localStorage.setItem(address, JSON.stringify(data));
}

export function getLocalStorage(address){
    let data = JSON.parse(localStorage.getItem(address)); 
    return data;
}