import { check_circle_icon } from "./icons.js";
import { fromByteArray } from "base64-js";

export const run_playground = (id: string, caller: HTMLButtonElement) => {
  // retrieve and decode code from parent codetitle
  const value = document.getElementById(id).getAttribute("data-code");

  let encoder = new TextEncoder();
  console.log(value);
  let params = new URLSearchParams([
    ["c", fromByteArray(encoder.encode(decodeURIComponent(value)))],
    [
      "t",
      fromByteArray(
        encoder.encode(decodeURIComponent(caller.getAttribute("data-title")))
      ),
    ],
  ]);

  // redirect
  window.location.href = "https://playground.cobalt.rocks/interactive?".concat(
    params.toString()
  );
};

export const copy_to_clipboard = (id: string, caller: HTMLButtonElement) => {
  // retrieve and decode code from parent codetitle
  const value = decodeURIComponent(
    document.getElementById(id).getAttribute("data-code")
  );

  // provide user feedback
  const update_icon = () => {
    // set check circle icon as instead of 'copy icon' to provide feedback after success
    const old = caller.innerHTML;
    caller.innerHTML = check_circle_icon;

    // reverse feedback after a second
    setTimeout(() => {
      caller.innerHTML = old;
    }, 1000);

    // control log
    console.info("Done copying to clipboard");
  };

  // The navigator.clipboard API is the successor to document.execCommand for managing clipboard data
  // Though it has yet to reach a high coverage and as such is still only a fallback
  if (
    navigator.clipboard !== undefined &&
    navigator.clipboard.writeText !== undefined
  ) {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        update_icon();
      })
      .catch((reason) => {
        console.error("Failed to write to clipboard", reason);
      });

    return;
  }

  // create new element
  const shadowInput = document.createElement(
    "textarea",
    {}
  ) as HTMLTextAreaElement;

  // make invisible and usable for text operations
  shadowInput.style.opacity = "0";
  shadowInput.value = value;

  // attach to body to be focusable
  document.body.appendChild(shadowInput);

  // select and copy to clipboard
  shadowInput.select();
  shadowInput.setSelectionRange(0, value.length + 1);
  document.execCommand("copy", false);

  // remove element once done
  shadowInput.remove();

  // update icon after copying was done
  update_icon();
};
