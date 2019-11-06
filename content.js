$(document).ready(function () {

    var messages = ['Yes you can :)', 'Really easy', 'Just do it!', 'Just solve it'];
    var properties = ['[diff="easy"]', '[diff="medium"]', '[diff="hard"]']

    // Hide main content while loading
    document.getElementById("app").style.display = "block";

    function choose() {
        var index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }

    function handleDifficulty(difficulty) {
        difficulty.innerText = choose();
        difficulty.style.color = 'green';
    }

    // set up the mutation observer
    var observer = new MutationObserver(function (mutations, me) {
        for (var i = 0; i < properties.length; i++) {
            var difficulty = document.querySelectorAll(properties[i]);
            if (difficulty.length > 0) {
                handleDifficulty(difficulty[0]);
                me.disconnect(); // stop observing
                return;
            }
        }
    });

    // start observing
    observer.observe(document, {
      childList: true,
      subtree: true
    });



});