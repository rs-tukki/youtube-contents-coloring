'use strict';

/**
 * Initialize the coloring contents of youtube feed.
 */
const init: (() => void) = function() {
  coloring(document.getElementsByTagName("ytd-grid-video-renderer"));
  const target = document.getElementById("contents")!;
  const observer = new MutationObserver(() => {
    setTimeout(coloring!, 1000, document.getElementsByTagName("ytd-grid-video-renderer"));
  });
  observer.observe(target, {
    childList: true
  });
};

const coloring: ((contents: HTMLCollectionOf<Element>) => void) = function(contents: HTMLCollectionOf<Element>) {
  Array.prototype.forEach.call(contents, content => {
    const progressBar = content.querySelector("#progress") as HTMLElement;
    if (progressBar === null) {
      content.style.backgroundColor = "lightskyblue";
    } else if (progressBar.style.width === "100%") {
      content.style.backgroundColor = "lightgray";
    } else {
      content.style.backgroundColor = "khaki";
    }
  });
};
setTimeout(init, 1500);