var cards = document.querySelectorAll('.cats-food-item');
if ( cards.length > 0 ) {
    for( var i = 0; i < cards.length; i++ ) {
       var card = cards[i].querySelector('.card'),
           link = cards[i].querySelector('.select-card');
       if (card) {
           card.addEventListener('click', selectCard);
       }
        if (link) {
            link.addEventListener('click', selectCard);
        }

    }
}

function selectCard(event) {
    event.preventDefault();
    var parent = this.closest('.cats-food-item');
    if (parent.classList.contains('disabled')) return;
    if (!parent.classList.contains('selected')) {
        parent.classList.add('selected');
        if (this.tagName === 'A') {
            parent.classList.add('selected-hover');
        }
        else {
            parent.addEventListener('mouseleave', function () {
                parent.classList.add('selected-hover');
            }, {once: true});
        }
    }
    else {
        parent.classList.remove('selected');
        parent.classList.remove('selected-hover');
    }
}
