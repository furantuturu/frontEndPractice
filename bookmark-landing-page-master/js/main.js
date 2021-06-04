const navEl = {
    mobileNav: document.querySelector('#mobile-header-links-container'),
    menuBar: document.querySelector('.menu-bar'),
    closeBtn: document.querySelector('.close-button')
}

function toggleMenu(expand = true) {
    this.mobileNav.style.display = 'none';
    this.mobileNav.setAttribute('aria-expanded', false)
    if (expand) {
        this.mobileNav.style.display = 'block';
        this.mobileNav.setAttribute('aria-expanded', true)
    }
}
//===============================================================================

const questionEL = {
    questionWrapperDiv: document.querySelectorAll('.question-wrapper div')
}

function answerExpand(e) {
    e.stopPropagation();
    this.parentElement.classList.toggle('expand')

}

//===============================================================================

const tabsEl = {
    tabs: document.querySelectorAll('.tab'),
    tabContent: document.querySelector('#tab-content'),
    tabContentImg: document.querySelector('#tab-content div img'),
    tabContentTitle: document.querySelector('#tab-content .tab-detail h3'),
    tabContentPara: document.querySelector('#tab-content .tab-detail p'),
}

function switchTab(i) {
    tabsEl.tabs.forEach(tab => tab.classList.remove('active-tab'))
    switch (i) {
        case 0:
            tabsEl.tabContentImg.src = 'images/illustration-features-tab-1.svg';
            tabsEl.tabContentTitle.textContent = 'Bookmark in one click'
            tabsEl.tabContentPara.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
            break;
        case 1:
            tabsEl.tabContentImg.src = 'images/illustration-features-tab-2.svg'
            tabsEl.tabContentTitle.textContent = 'Intellegent search'
            tabsEl.tabContentPara.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
            break;
        case 2:
            tabsEl.tabContentImg.src = 'images/illustration-features-tab-3.svg'
            tabsEl.tabContentTitle.textContent = 'Share your bookmarks'
            tabsEl.tabContentPara.textContent = 'Easily share your bookmarks  and collebtions with others. Create a shareable link that you can send the click of a button.'
            break;
    }
    this.classList.add('active-tab')
    tabsEl.tabContent.innerHTML = `
    <div>
    <img src=${tabsEl.tabContentImg.src} alt="">
</div>
<div class="tab-detail">
    <h3>
        ${tabsEl.tabContentTitle.textContent}
    </h3>
    <p>
       ${tabsEl.tabContentPara.textContent}
    </p>
    <button class="more-info-btn cta-btn-blue-clr">More Info</button>
</div>
    `
}

//===============================================================================

const formEl = {
    form: document.querySelector('.contact-form'),
    emailLabel: document.querySelector('#label'),
    emailInput: document.querySelector('#email')
}

/* email validating function */
function isEmail(email) { // this validation is always going to return false unless it has "blahblah.com" after @
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkEmail(e) {
    const emailValue = formEl.emailInput.value.trim();
    if (emailValue.length <= 0 || !isEmail(emailValue)) {
        formEl.emailLabel.classList.add('error')
        e.preventDefault()
    }
}

//===============================================================================

/* listeners */
navEl.menuBar.addEventListener('click', toggleMenu.bind(navEl));

navEl.closeBtn.addEventListener('click', toggleMenu.bind(navEl, false));

questionEL.questionWrapperDiv.forEach(question => question.addEventListener('click', answerExpand), { capture: true })

tabsEl.tabs.forEach((tab, i) => tab.addEventListener('click', switchTab.bind(tab, i)))

formEl.form.addEventListener('submit', checkEmail)