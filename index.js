function removeCardStyle(card) {
    // Check if the card has a dot element
    if (card.querySelector('.unread')) {
      // Remove the dot element
      card.querySelector('.unread').remove();
    }
    // Remove the background color
    card.style.backgroundColor = 'transparent';
  }
  