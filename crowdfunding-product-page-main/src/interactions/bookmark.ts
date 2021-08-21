const bookmarkBtn = document.querySelector('.bookmark') as HTMLButtonElement;
let isBookmarked = false;

function bookmarked() {
  const bookmarkLogo = bookmarkBtn.querySelector('img')!;
  const bookmarkContent = bookmarkBtn.querySelector('span')!;

  if (!isBookmarked) {
    bookmarkLogo.src = './images/icon-bookmarked.svg';
    bookmarkContent.textContent = 'Bookmarked';
    bookmarkContent.style.color = '#147b74';

    isBookmarked = !isBookmarked;
  } else {
    bookmarkLogo.src = './images/icon-bookmark.svg';
    bookmarkContent.textContent = 'Bookmark';
    bookmarkContent.style.color = '#7a7a7a';

    isBookmarked = !isBookmarked;
  }
}

bookmarkBtn.addEventListener('click', bookmarked);
