import Collapse from 'bootstrap/js/dist/collapse';
import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import FloatSidebar from 'float-sidebar';

/**
 * Init general UI elements
 *
 */
export async function initUI() {
    document
        .querySelectorAll('.collapse')
        .forEach((collapseEl: HTMLElement) => {
            return new Collapse(collapseEl, { toggle: false });
        });

    document.querySelectorAll('.btn-close').forEach((btn: HTMLElement) => {
        const target = btn.getAttribute('data-target');
        if (target !== null) {
            btn.addEventListener('click', () => {
                document.querySelector(target).remove();
            });
        }
    });

    // navbar floating support
    const pageContentWrapper = document.getElementById('page-content-wrapper');
    const _floatSidebar = new FloatSidebar({
        sidebar: document.getElementById('sidebar-wrapper'),
        relative: pageContentWrapper,
        topSpacing: 80,
        bottomSpacing: 0,
    });

    // scrollspy support
    const spyBarElement = document.getElementById('chapter-spybar');
    let spy: ScrollSpy;

    if (spyBarElement !== undefined && spyBarElement !== null) {
        spy = new ScrollSpy(pageContentWrapper, {
            target: '#chapter-spybar',
        });
        console.log(spy);
        console.log('[MAIN]: Initiales Scrollspy');
    }

    // nav toggle
    const menuToggle = document.getElementById('menu-toggle');

    menuToggle.addEventListener('click', (evt: MouseEvent) => {
        evt.preventDefault();
        menuToggle.classList.toggle('toggled');
        document.getElementById('wrapper').classList.toggle('sidebar-toggled');
        if (spy.refresh !== undefined) {
            spy.refresh();
        }
    });

    document
        .querySelectorAll('div[data-type=file-helper]')
        .forEach((element: HTMLElement) => {
            element
                .querySelectorAll('button[data-type=copy]')
                .forEach((button: HTMLButtonElement) => {
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
                        console.log(buffer.indexOf('\n'));
                        copyToClipBoard(buffer, button);
                    };
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
