export function activateKey (e, activate) {
    (e.key === 'Enter' || e.key === ' ') ?? activate();
}

export function closeKey (e, closeItem) {
    window.addEventListener('keydown', () => {
        if (e.key === 'Escape') {
            closeItem();
        }
    })
}
