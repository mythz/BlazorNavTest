export function load() {
    document.querySelectorAll('[data-load]').forEach(content => {
        const template = document.querySelector(content.getAttribute('data-load'))
        console.log('load', content.id, template?.innerHTML ?? `template missing`)
        if (template) content.innerHTML = template.innerHTML
    })
}

document.addEventListener('DOMContentLoaded', () =>
    Blazor.addEventListener('enhancedload', load))