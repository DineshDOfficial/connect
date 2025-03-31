import Sidebar from './components/.layout/sidebar.js';
import Header from './components/.layout/header.js';
import Footer from './components/.layout/footer.js';

import ChatPage from './pages/chat/index.js';
import UsersPage from './pages/users/index.js';
import SettingsPage from './pages/settings/index.js';

const root = document.getElementById('app');

// Create Layout Components
const header = Header();
const sidebar = Sidebar();
const footer = Footer();
const content = document.createElement('div');
content.className = 'content';

// Apply Layout Styling
Object.assign(root.style, {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#1f1f1f',
    color: '#ffffff',
});

// Set Sidebar and Content Wrapping
const mainLayout = document.createElement('div');
mainLayout.className = 'main-layout';
Object.assign(mainLayout.style, {
    display: 'flex',
    flex: '1',
    overflow: 'hidden',
});

// Append Layout Components
root.appendChild(header);
mainLayout.appendChild(sidebar);
mainLayout.appendChild(content);
root.appendChild(mainLayout);
root.appendChild(footer);

// Navigation Logic
function navigateTo(page) {
    content.innerHTML = ''; // Clear current content
    switch (page) {
        case 'chat':
            content.appendChild(ChatPage());
            break;
        case 'users':
            content.appendChild(UsersPage());
            break;
        case 'settings':
            content.appendChild(SettingsPage());
            break;
        default:
            content.innerHTML = '<div>404 - Page Not Found</div>';
    }
}

// Set Default Page
navigateTo('chat');

// Expose Navigation to Sidebar
window.navigateTo = navigateTo;
