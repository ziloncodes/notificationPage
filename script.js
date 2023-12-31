 // Get the button and notification bar elements
  const markAllButton = document.getElementById('button');
  const notificationBar = document.getElementById('notificationbar');

  // Add a click event listener to the "Mark all as read" button
  markAllButton.addEventListener('click', () => {
    // Get all unread notification elements
    const unreadNotifications = notificationBar.querySelectorAll('.unread');

    // Loop through each unread notification and mark them as read
    unreadNotifications.forEach(notification => {
      // Update the data-read attribute to "true"
      notification.setAttribute('data-read', 'true');
      
      // Remove the "unread" class to visually mark as read
      notification.classList.remove('unread');
    });

    // Update the number of unread notifications to 0
    const numberElement = document.querySelector('.number');
    numberElement.textContent = '0';
  });