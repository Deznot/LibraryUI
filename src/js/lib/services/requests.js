import $ from '../core';

/**
 * метод get - посылает get запросы на сервер.
 * @param {*} url - адрес сервера
 * @param {*} dataTypeAnswer - формат ожидаемого ответа от сервера
 * @example
 * $().get('https://jsonplaceholder.typicode.com/todos/1')
 * .then(json => console.log(json));
 */
$.prototype.get = async function(url, dataTypeAnswer = 'json'){
    let res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    switch (dataTypeAnswer){
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'bloob':
            return await res.blob();
    }   
};


/**
 * метод post - отправляет post запросы на сервер.
 * @param {*} url - адрес сервера
 * @param {*} data - тело запроса
 * @param {*} dataTypeAnswer - тип ожидаемого ответа от сервера.
 * @example
 * $().post('https://jsonplaceholder.typicode.com/todos/1','123')
 * .then(text => console.log(text));
 */
$.prototype.post = async function (url, data, dataTypeAnswer = 'text'){
    let res = await fetch(url,{
        method: "POST",
        body: data,

    });

    switch (dataTypeAnswer){
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'bloob':
            return await res.blob();
    }   

};