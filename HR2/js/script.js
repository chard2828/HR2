// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target') || 
                       (counter.id === 'operators-counter' ? 42 : 
                        counter.id === 'certified-counter' ? 29 : 
                        counter.id === 'training-counter' ? 15 : 0);
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Calendar Generation
function generateCalendar() {
    const calendarDays = document.getElementById('calendar-days');
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Clear previous days
    calendarDays.innerHTML = '';
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        calendarDays.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Mark today
        if (day === now.getDate() && currentMonth === now.getMonth() && currentYear === now.getFullYear()) {
            dayElement.classList.add('today');
        }
        
        // Randomly add some events (for demo)
        if (Math.random() > 0.7) {
            dayElement.classList.add('event');
        }
        
        calendarDays.appendChild(dayElement);
    }
}

// Chart Initialization
function initCharts() {
    const ctx = document.getElementById('trainingChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Training Completion',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(211, 47, 47, 0.7)'
                ],
                borderColor: [
                    'rgba(211, 47, 47, 1)',
                    'rgba(211, 47, 47, 1)',
                    'rgba(211, 47, 47, 1)',
                    'rgba(211, 47, 47, 1)',
                    'rgba(211, 47, 47, 1)',
                    'rgba(211, 47, 47, 1)',
                    'rgba(211, 47, 47, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Sidebar Toggle Functionality
function setupSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('.main-content');
    const sidebarCollapsedClass = 'collapsed';
    const sidebarVisibleClass = 'visible';
    
    function toggleSidebar() {
        if (window.innerWidth >= 1024) {
            // Desktop - toggle collapsed state
            sidebar.classList.toggle(sidebarCollapsedClass);
        } else {
            // Mobile - toggle visibility
            sidebar.classList.toggle(sidebarVisibleClass);
            
            // Add/remove overlay
            if (sidebar.classList.contains(sidebarVisibleClass)) {
                const overlay = document.createElement('div');
                overlay.className = 'sidebar-overlay';
                overlay.addEventListener('click', toggleSidebar);
                mainContent.appendChild(overlay);
            } else {
                const overlay = document.querySelector('.sidebar-overlay');
                if (overlay) overlay.remove();
            }
        }
    }
    
    function initSidebar() {
        if (window.innerWidth < 1024) {
            // Mobile - start hidden
            sidebar.classList.remove(sidebarCollapsedClass);
            sidebar.classList.remove(sidebarVisibleClass);
            document.querySelector('.sidebar-overlay')?.remove();
        } else {
            // Desktop - start expanded
            sidebar.classList.remove(sidebarCollapsedClass);
        }
    }
    
    toggleBtn.addEventListener('click', toggleSidebar);
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 1024 && 
            !sidebar.contains(e.target) && 
            !toggleBtn.contains(e.target) &&
            sidebar.classList.contains(sidebarVisibleClass)) {
            toggleSidebar();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', initSidebar);
    initSidebar();
}

// Notification System
function setupNotificationSystem() {
    const notificationBell = document.querySelector('.notification-bell');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    const notificationList = document.querySelector('.notification-list');
    const markAllReadBtn = document.querySelector('.mark-all-read');
    
    // Sample notification data
    let notifications = [
        {
            id: 1,
            title: '3 certifications expiring soon',
            message: 'Operator certifications for John D., Sarah M., and Robert T. will expire in 7 days.',
            time: '10 minutes ago',
            read: false,
            icon: 'fa-certificate'
        },
        {
            id: 2,
            title: 'New training assignment available',
            message: 'Advanced Crane Safety training has been assigned to your team.',
            time: '2 hours ago',
            read: false,
            icon: 'fa-graduation-cap'
        },
        {
            id: 3,
            title: 'System maintenance scheduled',
            message: 'The system will be down for maintenance on July 15 from 2:00 AM to 4:00 AM.',
            time: '1 day ago',
            read: true,
            icon: 'fa-tools'
        }
    ];
    
    // Render notifications
    function renderNotifications() {
        notificationList.innerHTML = '';
        
        // Update badge count
        const unreadCount = notifications.filter(n => !n.read).length;
        document.querySelector('.notification-count').textContent = unreadCount;
        
        // Add each notification to the list
        notifications.forEach(notification => {
            const notificationItem = document.createElement('div');
            notificationItem.className = `notification-item ${notification.read ? '' : 'unread'}`;
            notificationItem.innerHTML = `
                <i class="fas ${notification.icon}"></i>
                <div class="notification-content">
                    <div class="notification-title">${notification.title}</div>
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-time">${notification.time}</div>
                </div>
            `;
            
            // Mark as read when clicked
            notificationItem.addEventListener('click', () => {
                if (!notification.read) {
                    notification.read = true;
                    renderNotifications();
                }
            });
            
            notificationList.appendChild(notificationItem);
        });
    }
    
    // Mark all notifications as read
    markAllReadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifications = notifications.map(n => ({ ...n, read: true }));
        renderNotifications();
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!notificationBell.contains(e.target)) {
            notificationDropdown.style.display = 'none';
        }
    });
    
    // Toggle dropdown when clicking bell
    notificationBell.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationDropdown.style.display = 
            notificationDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Initialize
    renderNotifications();
    
    // Simulate new notifications arriving
    setInterval(() => {
        // 20% chance of a new notification
        if (Math.random() < 0.2) {
            const newNotification = {
                id: Date.now(),
                title: ['New training available', 'System alert', 'Certification update'][Math.floor(Math.random() * 3)],
                message: 'This is an automatically generated notification.',
                time: 'Just now',
                read: false,
                icon: ['fa-exclamation-circle', 'fa-info-circle', 'fa-check-circle'][Math.floor(Math.random() * 3)]
            };
            notifications.unshift(newNotification);
            renderNotifications();
            
            // Show visual alert for new notification
            if (document.hidden) {
                document.title = '⚠️ ' + document.title.replace('⚠️ ', '');
            }
        }
    }, 30000); // Check every 30 seconds
}

// Calendar Event Handling
function setupCalendarEvents() {
    const calendarDays = document.getElementById('calendar-days');
    
    calendarDays.addEventListener('click', function(e) {
        if (e.target.classList.contains('calendar-day') && e.target.textContent) {
            const day = e.target.textContent;
            const now = new Date();
            const month = now.toLocaleString('default', { month: 'long' });
            alert(`You clicked on ${month} ${day}. This would show details for any scheduled events.`);
        }
    });
}

// System Status Check
function checkSystemStatus() {
    const statusElement = document.querySelector('#system-status .online');
    
    // 95% chance of being online
    if (Math.random() > 0.05) {
        statusElement.textContent = 'Online';
        statusElement.className = 'online';
    } else {
        statusElement.textContent = 'Offline';
        statusElement.className = 'offline';
        statusElement.style.color = 'var(--primary-red)';
    }
    
    // Check every minute
    setTimeout(checkSystemStatus, 60000);
}

// Real-time Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById('real-time-clock').textContent = `${dateString} ${timeString}`;
    setTimeout(updateClock, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up UI interactions
    setupSidebarToggle();
    setupNotificationSystem();
    setupCalendarEvents();
    
    // Initialize components
    animateCounters();
    generateCalendar();
    initCharts();
    updateClock();
    checkSystemStatus();
    
    // Reset document title when tab becomes visible
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            document.title = document.title.replace('⚠️ ', '');
        }
    });
});