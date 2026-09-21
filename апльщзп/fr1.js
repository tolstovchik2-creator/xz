class Modal {
    constructor(dialogId, openBtnId) {

        this.dialog = document.getElementById(dialogId);
        this.openBtn = document.getElementById(openBtnId);
        this.closeBtn = this.dialog.querySelector('.modal__close-btn');

        if (!this.dialog || !this.openBtn) {
            console.error('error')
            return;
        }
        this._initEvents();
    }
    _initEvents() {
        this.openBtn.addEventListener('click', () => this.open());
        
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        this.dialog.addEventListener('click', () => this.close());
    }
    open() {
        this.dialog.showModal();

        document.body.style.overflow = 'hidden';
        this.dialog.classList.add('is-open');
    }
    close() {
        this.dialog.classList.remove('is-open');
        document.body.style.overflow = '';

        setTimeout(() => {
            this.dialog.close();
        }, 200);
    }
    _handleBackdropClick(event) {
        const rect = this.dialog.getBoundingClientRect();
        const isInDialog = (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );

        if (!isInDialog) {
            this.close();
        }
    }
}

const myModal = new Modal('myDialog', 'openBtn');