'use strict';

var gProjects;

function createProjects() {
    gProjects = [
        createProj('bookshop', 'Book Shop', 'You need this book', '', 'https://orbiton2007.github.io/book-shop/', '28/05/2019', 'img/book-shop.png'),
        createProj('minesweepershop', 'Minesweeper', 'Better you not fall on a mine ', '', 'https://orbiton2007.github.io/Minesweeper/', '16/05/2019', 'img/Minesweeper.png'),
        createProj('todos', 'Todos', 'Don`t forget to do!', '', 'https://orbiton2007.github.io/Todos/', '23/05/2019', 'img/todos.png')
    ]
}

function createProj(id, name, title, desc, url, publishedAt, imgUrl) {
    return {
        id: id, 
        name: name, 
        title: title, 
        desc: desc, 
        url: url, 
        publishedAt: publishedAt, 
        imgUrl: imgUrl
    }
}


function getProjById(projId){
    return gProjects.find(function (proj) {
        return (proj.id === projId);
    });
}