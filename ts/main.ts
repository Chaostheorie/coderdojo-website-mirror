import Collapse from 'bootstrap/js/dist/collapse';
import Modal from 'bootstrap/js/dist/modal';
import ScrollSpy from 'bootstrap/js/dist/scrollspy';

/**
 * Init general UI elements
 *
 */
export async function initUI() {
    document.querySelectorAll('.collapse').forEach((collapseEl: Element) => {
        return new Collapse(collapseEl, { toggle: false });
    });

    document.querySelectorAll('.btn-close').forEach((btn: Element) => {
        const target = btn.getAttribute('data-target');
        if (target !== null) {
            btn.addEventListener('click', () => {
                document.querySelector(target).remove();
            });
        }
    });

    // nav toggle
    const menuToggle = document.getElementById('menu-toggle');

    menuToggle.addEventListener('click', (evt: MouseEvent) => {
        evt.preventDefault();
        menuToggle.classList.toggle('toggled');
        document.getElementById('wrapper').classList.toggle('sidebar-toggled');
    });

    const modals = Array.from(document.querySelectorAll('.modal')).map(
        (modal: Element) => {
            return {
                id: modal.id,
                modal: new Modal(modal),
            };
        },
    );

    document
        .querySelectorAll('[data-toggle=toc]')
        .forEach((trigger: Element) => {
            trigger.addEventListener('click', (evt) => {
                evt.preventDefault();
                const id = trigger.getAttribute('data-target');
                modals.forEach((element) => {
                    if (element.id === id) {
                        element.modal.hide();
                    }
                });
                setTimeout(
                    () =>
                        document
                            // @ts-ignore
                            .querySelector(`${evt.target.getAttribute('href')}`)
                            .scrollIntoView(),
                    350,
                );
            });
        });

    // scrollspy support
    // broken ATM until is resolved https://github.com/twbs/bootstrap/pull/34412
    /*    const scrollSpy = new ScrollSpy(document.body, {
        target: '#chapter-spybar'
    });*/
    /*    const scrollSpy = new ScrollSpy(document.body, {
        target: '#chapter-inline-spybar'
    });*/

    document
        .querySelectorAll('div[data-type=file-helper]')
        .forEach((element: Element) => {
            element
                .querySelectorAll('button[data-type=copy]')
                .forEach((button: Element) => {
                    if (button instanceof HTMLButtonElement) {
                        button.onclick = () => {
                            // going from current helper -> next
                            // pre block (next element) ->
                            // inner code block -> iterate over spans

                            // string buffer for text in highlighted span elements
                            let buffer = '';

                            // recursively collect all text
                            //  from highlighted elements in code block
                            // eslint-disable-next-line max-len
                            element.nextElementSibling.children[0].childNodes.forEach(
                                (node: ChildNode) => {
                                    if (node instanceof HTMLSpanElement) {
                                        buffer += node.innerText;
                                    }
                                },
                            );

                            // copy to clipboard & update btn
                            copyToClipBoard(buffer, button);
                        };
                    }
                });
        });

    // @ts-ignore
    window.CopyToClipBoard = copyToClipBoard;

    console.info('[MAIN]: Finished Initializing general UI Elements 🐱');
}

/**
 * Copy a string to the clipboard.
 * Used to allow the user the sharing of websites with deeplinks.
 *
 * @param {string} value
 * @param {HTMLButtonElement} caller
 */
function copyToClipBoard(value: string, caller: HTMLButtonElement) {
    // create new element
    const shadowInput = document.createElement(
        'textarea',
        {},
    ) as HTMLTextAreaElement;

    // make invisible and usable for text operations
    shadowInput.style.opacity = '0';
    shadowInput.value = value;

    // attach to body to be focusable
    document.body.appendChild(shadowInput);

    // select and copy to clipboard
    shadowInput.select();
    shadowInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    // remove element once done
    shadowInput.remove();

    // get icon element from button
    let iconNode: Element;
    let iconNodeClassList: string;

    // add checkmark icon to button
    for (let i = 0; i < caller.children.length; i++) {
        const node = caller.children[i];

        // find icons in button
        // I should never be used but sometimes browsers seem to uppercase the nodename
        if (node.nodeName == 'I' || node.nodeName == 'i') {
            iconNode = node;
            iconNodeClassList = node.getAttribute('class');
            node.setAttribute('class', 'bi bi-clipboard-check');
        }
    }

    // reset icon
    setTimeout(() => {
        iconNode.setAttribute('class', iconNodeClassList);
    }, 1000);
}

// dynamic on load callback to init_ui
if (document.readyState !== 'loading') {
    initUI();
} else {
    document.addEventListener('DOMContentLoaded', initUI);
}
