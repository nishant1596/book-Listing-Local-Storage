//Es5
//Book Constructor
function Book(title,author,isbn) {
  this.title=title;
  this.author=author;
  this.isbn=isbn;
}
//UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
   const list = document.getElementById('book-list');
   const row = document.createElement('tr');
   row.innerHTML=`<td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><i class="fa fa-window-close" aria-hidden="true"></i></td>`;
   list.appendChild(row);
   console.log(row);
}
UI.prototype.clearFields = function () {
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('isbn').value='';
  console.log('cleared');
}
UI.prototype.deleteItem=function (e) {

  console.log(e);
}
const ui=new UI();
// const ook = new Book(title,author,isbn);
//Event Listeners
document.getElementById('book-form').addEventListener('submit',function (e) {
  let title=document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let isbn = document.getElementById('isbn').value;

  //Instantiate Book
  if (title === '' || author === '' || isbn === '') {
    if (title==='') {
      document.getElementById('title').style.border="1px solid red";
      document.getElementById('title').setAttribute("placeholder","please enter a value here")
    }
    if (author==='') {
      document.getElementById('author').style.border="1px solid red";
      document.getElementById('author').setAttribute("placeholder","please enter a value here")
    }
    if (isbn==='') {
      document.getElementById('isbn').style.border="1px solid red";
      document.getElementById('isbn').setAttribute("placeholder","please enter a value here")
    }
  }
  else{
    const book = new Book(title,author,isbn);
    ui.addBookToList(book);
    document.getElementById('title').style.border="1px solid green";
    document.getElementById('author').style.border="1px solid green";
    document.getElementById('isbn').style.border="1px solid green";
  }
  e.preventDefault();
})

document.getElementById('clear').addEventListener('click',function () {
  if (confirm('Do you want to clear all the fields ?')) {
    ui.clearFields();
  }
})
document.getElementById('book-list').addEventListener('click',function (e) {
  if(e.target.classList.contains('fa-window-close')){
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
})
// ui.deleteItem();
