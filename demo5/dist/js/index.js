const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$$('.js-toggleControl').forEach(control => {
    control.onclick = () => {
        $$('.js-toggleControl').forEach(control => {
            control.classList.remove("active")
        })
        control.classList.add("active")


    }
});