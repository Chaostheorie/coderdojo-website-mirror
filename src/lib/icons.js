// Copy and Play icon from phosphor icon set
// distributed under MIT license (https://github.com/phosphor-icons/phosphor-home/blob/master/LICENSE) with a licensing notice in the final webpage
const copy_phosphor_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 168 216 168 216 40 88 40 88 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><rect x="40" y="88" width="128" height="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>';
const play_phosphor_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>';
const check_circle_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="172 104 113.3 160 84 132" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>';
const belt_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><image id="image0" width="512" height="512" x="0" y="0" xlink:href="data:image/png;base64,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" /></svg>';

export { copy_phosphor_icon, play_phosphor_icon, belt_icon, check_circle_icon };
