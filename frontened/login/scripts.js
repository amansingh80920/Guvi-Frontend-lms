document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const issuedBookList = document.getElementById('issuedBookList');

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const bookId = document.getElementById('bookId').value;
        const bookName = document.getElementById('bookName').value;
        const studentName = document.getElementById('studentName').value;
        const courseName = document.getElementById('courseName').value;
        const issueDate = document.getElementById('issueDate').value;
        const returnDate = document.getElementById('returnDate').value;

        const bookItem = createBookItem(bookId, bookName, studentName, courseName, issueDate, returnDate);
        issuedBookList.appendChild(bookItem);

        bookForm.reset();
    });

    function createBookItem(bookId, bookName, studentName, courseName, issueDate, returnDate) {
        const bookItem = document.createElement('li');
        bookItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'book-item');

        const bookContent = document.createElement('div');
        bookContent.classList.add('d-flex', 'align-items-center');
        
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.innerHTML = `
            <strong>${bookName}</strong> (ID: ${bookId})<br>
            Student: ${studentName} | Course: ${courseName}<br>
            Issued on: ${issueDate} | Return by: ${returnDate}
        `;

        const returnButton = createReturnButton(bookItem);

        bookItem.appendChild(bookContent);
        bookContent.appendChild(bookInfo);
        bookItem.appendChild(returnButton);

        return bookItem;
    }

    function createReturnButton(bookItem) {
        const button = document.createElement('button');
        button.textContent = 'Return Book';
        button.classList.add('btn', 'btn-success', 'btn-sm', 'return-btn');
        button.addEventListener('click', () => issuedBookList.removeChild(bookItem));
        return button;
    }
});
