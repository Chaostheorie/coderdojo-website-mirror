import Shikwasa from 'shikwasa';
import { fromByteArray } from 'base64-js';

/// collect code for buttons on code helper blocks
function collectCode(element) {
    // going from current helper -> next
    // pre block (next element) ->
    // inner code block -> iterate over spans

    // string buffer for text in highlighted span elements
    let buffer = '';

    // recursively collect all text
    //  from highlighted elements in code block
    // eslint-disable-next-line max-len
    element.nextElementSibling.children[0].childNodes.forEach((node) => {
        buffer += node.innerText;
    });

    return buffer;
}

/**
 * Copy a string to the clipboard.
 * Used to allow the user the sharing of websites with deeplinks.
 *
 * @param {string} value
 * @param {HTMLButtonElement} caller
 */
function copyToClipBoard(value, caller) {
    // create new element
    const shadowInput = document.createElement('textarea', {});

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
    let iconNode, iconNodeClassList;

    // add checkmark icon to button
    for (let i = 0; i < caller.children.length; i++) {
        const node = caller.children[i];

        // find icons in button
        // I should never be used but sometimes browsers seem to uppercase the nodename
        if (node.nodeName == 'I' || node.nodeName == 'i') {
            iconNode = node;
            iconNodeClassList = node.getAttribute('class');
            node.setAttribute('class', 'bi bi-clipboard-check mr-2');
        }
    }

    // reset icon
    setTimeout(() => {
        iconNode.setAttribute('class', iconNodeClassList);
    }, 1000);
}

/**
 * Init general UI elements
 *
 */
async function initUI() {
    // nav toggle
    const menuToggle = document.getElementById('sidenav-toggle');

    menuToggle.addEventListener('click', (evt) => {
        evt.preventDefault();
        menuToggle.classList.toggle('toggled');
        document.getElementById('sidenav').classList.toggle('-ml-[15rem]');
    });

    // Shikwasa support

    document.querySelectorAll("[data-toggle='audio-player']").forEach((audioPlayer) => {
        return new Shikwasa({
            container: audioPlayer,
            audio: {
                artist: audioPlayer.getAttribute('data-artist'),
                cover: audioPlayer.getAttribute('data-cover'),
                src: audioPlayer.getAttribute('data-src'),
                title: audioPlayer.getAttribute('data-title'),
            },
        });
    });

    document.querySelectorAll("[data-action='copy-link']").forEach((element) => {
        element.onclick = () => {
            copyToClipBoard(element.getAttribute('data-target'), element);
        };
    });

    document.querySelectorAll('div[data-type=file-helper]').forEach((element) => {
        element.querySelectorAll('button[data-type=copy]').forEach((button) => {
            if (button instanceof HTMLButtonElement) {
                button.onclick = () => {
                    // copy to clipboard & update btn
                    copyToClipBoard(collectCode(element), button);
                };
            }
        });

        element.querySelectorAll('button[data-type=play]').forEach((button) => {
            if (button instanceof HTMLButtonElement) {
                button.onclick = () => {
                    let encoder = new TextEncoder();
                    let params = new URLSearchParams([
                        ['c', encodeURI(fromByteArray(encoder.encode(collectCode(element))))],
                        ['t', encodeURI(fromByteArray(encoder.encode(button.getAttribute('data-title'))))],
                    ]);

                    // redirect
                    window.location.href = 'https://playground.cobalt.rocks/interactive?'.concat(params.toString());
                };
            }
        });
    });

    console.info(
        '%c[MAIN]%c: Finished Initializing general UI Elements 🐱',
        'background:#00869B80;color:#fff;padding:4px 0'
    );
}

// dynamic on load callback to init_ui
if (document.readyState !== 'loading') {
    initUI();
} else {
    document.addEventListener('DOMContentLoaded', initUI);
}
