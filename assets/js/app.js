// Price Section
$('.sworks').on('click', function () {
    $('#price').removeClass('display')
})

// SHOW AND HIDE PASSWORD
function tooglePassword() {
    const togglePassword = document.querySelector('#togglePassword')
    const password = document.querySelector('#password')

    togglePassword.addEventListener('click', e => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
        password.setAttribute('type', type)
        togglePassword.classList.toggle('ri-eye-off-fill')
    })



    const anotherTogglePassword = document.querySelector('#anotherTogglePassword')
    const anotherPassword = document.querySelector('#anotherPassword')

    anotherTogglePassword.addEventListener('click', e => {
        const type = anotherPassword.getAttribute('type') === 'password' ? 'text' : 'password'
        anotherPassword.setAttribute('type', type)
        anotherTogglePassword.classList.toggle('ri-eye-off-fill')
    })
}
tooglePassword()

// TogglePage
function togglePage() {
    $('#show').click(() => {
        $('#form-1').slideDown(100).addClass('display')
        $('#form-2').toggleClass('display')
      
    })
}
togglePage()

// SWITCH PAGES

$('#switch').click(()=> {
    $('#login').removeClass('display')
    $('#register').addClass('display')
})

$('#switch2').click(()=> {
    $('#login').addClass('display')
    $('#register').removeClass('display')
})

$('#switch3').click(()=> {
    $('#login').addClass('display')
    $('#forgot-password').removeClass('display')
})