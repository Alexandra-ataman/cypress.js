describe('Автотесты на форму логина', function () {
   it('Позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут ввода имейла и ввожу его
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#pass').type('iLoveqastudio1'); // проверяем инпут ввода пароля и ввод его
       cy.get('#loginButton').should('be.enabled'); // проверяем что кнопка доступна
       cy.get('#loginButton').click(); // клик по кнопке "Войти "
       cy.contains('Авторизация прошла успешно').should('be.visible'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка закрыть
    })

   it('Проверка логики восстановления пароля', function () { 
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#forgotEmailButton').click(); // ищу и нажимаю "Забыли пароль]?"
       cy.get('#mailForgot').type('german@dolnikov.ru'); // ищу инпут и ввожу пароль
       cy.get('#restoreEmailButton').click(); // нажимаю на кнопку "Отправить"
       cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка закрыть
    })
   
   it('Верный логин и не верный пароль: негативный кейс авторизации', function () { 
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут ввода имейла и ввожу его
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#pass').type('chepuha'); // проверяем инпут ввода пароля и ввод его
       cy.get('#loginButton').should('be.enabled'); // проверяем что кнопка доступна
       cy.get('#loginButton').click(); // клик по кнопке "Войти "
       cy.contains('Такого логина или пароля нет').should('be.visible'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка закрыть
    })

   it('Не верный логин и верный пароль: негативный кейс авторизации', function () { 
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#mail').type('chepuha'); // ищу инпут ввода имейла и ввожу "chepuha"
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#pass').type('iLoveqastudio1'); // проверяем инпут ввода пароля и ввод его
       cy.get('#loginButton').should('be.enabled'); // проверяем что кнопка доступна
       cy.get('#loginButton').click(); // клик по кнопке "Войти "
       cy.contains('Нужно исправить проблему валидации').should('be.visible'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка закрыть
    })

   it('Проверка валидации логина: негативный кейс валидации', function () { 
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#mail').type('germandolnikov.ru'); // ищу инпут ввода имейла и ввожу его
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#pass').type('iLoveqastudio1 '); // проверяем инпут ввода пароля и ввод его
       cy.get('#loginButton').should('be.enabled'); // проверяем что кнопка доступна
       cy.get('#loginButton').click(); // клик по кнопке "Войти "
       cy.contains('Нужно исправить проблему валидации').should('be.visible'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка закрыть
    })

    it('Приведение к строчным буквам в логине', function () { 
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#mail').type('GerMan@Dolnikov.ru'); // ищу инпут ввода имейла и ввожу его
       cy.get('#loginButton').should('be.disabled'); // проверяем что кнопка задизейблена
       cy.get('#pass').type('iLoveqastudio1 '); // проверяем инпут ввода пароля и ввод его
       cy.get('#loginButton').should('be.enabled'); // проверяем что кнопка доступна
       cy.get('#loginButton').click(); // клик по кнопке "Войти "
       cy.contains('Авторизация прошла успешно').should('be.visible'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка закрыть
    })

    it('Один длинный автотест для покемонов',  function () { 
       cy.visit('https://pokemonbattle.me/login'); 
       cy.get(':nth-child(1) > .auth__input').type('alexaataman@yandex.ru');
       cy.get('#password').type('12345Sasha');
       cy.get('.auth__button').click();
       cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Alexa Ataman');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})

   
