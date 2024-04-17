const button = document.getElementById('myButton');
const notificationContainer = document.getElementById('notificationContainer');

const notifications = [];

button.addEventListener('click', () => {
  if (notifications.length >= 5) {
    button.classList.add('error');
    return;
  }

  const notification = document.createElement('div');
  notification.classList.add('notification', 'show');

  const notificationText = document.createElement('div');
  notificationText.classList.add('notification__text');
  notificationText.textContent = 'Notification Message';

  const notificationClose = document.createElement('button');
  notificationClose.classList.add('notification__close');
  notificationClose.textContent = '×';
  notificationClose.addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
      notifications.splice(notifications.indexOf(notification), 1);
      button.classList.remove('error');
    }, 300);
  });

  if (notifications.length === 0) {
    notification.classList.add('green');
  } else if (notifications.length === 3) {
    notification.classList.add('yellow');
  } else {
    notification.classList.add('red');
  }

  if (notifications.length === 5) {
    notifications[0].remove();
    notifications.shift();
  }

  notification.appendChild(notificationText);
  notification.appendChild(notificationClose);
  notificationContainer.appendChild(notification);
  notifications.push(notification);
});
