import singleSpaHtml from 'single-spa-html'

const htmlLifecycles = singleSpaHtml({
    template: `
        <h1> Vanilla </h1>
        <h2>contador <span id="counterVal"></span></h2>
        <input type="button" onClick="window.myapp.incrementor()" value="+"></input>
        <input type="button" onClick="window.myapp.decrementor()" value="-"></input>
    `,
})

htmlLifecycles.originalMount = htmlLifecycles.mount
htmlLifecycles.mount = function(opts, props) {
    return htmlLifecycles.originalMount(opts, props)
        .then(() => {
            const el = document.querySelector('#counterVal')
            el.innerText = window.myapp.counter
            window.addEventListener('onIncrement', () => {
                el.innerText = window.myapp.counter
            })
            window.addEventListener('onDecrement', () => {
                el.innerText = window.myapp.counter
            })
        })
}.bind(htmlLifecycles)

export const { bootstrap, mount, unmount } = htmlLifecycles