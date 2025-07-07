<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crane & Trucking Management System | HR 2</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <button class="sidebar-toggle">
                <i class="fas fa-bars"></i>
            </button>
            <div class="logo">
                <h1>CRANE & TRUCKING <span>MANAGEMENT SYSTEM</span></h1>
                <p>HR 2 MODULE</p>
            </div>
            <div class="user-info">
                <div class="notification-bell">
                    <i class="fas fa-bell"></i>
                    <span class="notification-count">3</span>
                    <div class="notification-dropdown">
                        <div class="notification-header">
                            <h4>Notifications</h4>
                            <span class="mark-all-read">Mark all as read</span>
                        </div>
                        <div class="notification-list">
                            <!-- Notifications will be added here by JavaScript -->
                        </div>
                        <div class="notification-footer">
                            <a href="#">View all notifications</a>
                        </div>
                    </div>
                </div>
                <div class="user">
                    <img src="https://via.placeholder.com/40" alt="User">
                    <span>ADMIN: RICHARD GULMATICO</span>
                </div>
            </div>
        </header>

        <nav class="sidebar">
            <ul>
                <li class="active"><a href="#"><i class="fas fa-tachometer-alt"></i> <span>Dashboard</span></a></li>
                <li><a href="#"><i class="fas fa-people-arrows"></i> <span>Succession Planning</span></a></li>
                <li><a href="#"><i class="fas fa-graduation-cap"></i> <span>Training Management</span></a></li>
                <li><a href="#"><i class="fas fa-star"></i> <span>Competency Management</span></a></li>
                <li><a href="#"><i class="fas fa-book-open"></i> <span>Learning Management</span></a></li>
                <li><a href="#"><i class="fas fa-file-invoice-dollar"></i> <span>Claims & Reimbursement</span></a></li>
            </ul>
        </nav>

        <main class="main-content">
            <div class="stats-row">
                <div class="stat-card">
                    <h3>Active Operators</h3>
                    <div class="counter" id="operators-counter">0</div>
                    <div class="progress-bar">
                        <div class="progress" style="width: 80%;"></div>
                    </div>
                    <span>80% of target</span>
                </div>
                
                <div class="stat-card">
                    <h3>Certified Operators</h3>
                    <div class="counter" id="certified-counter">0</div>
                    <div class="progress-bar">
                        <div class="progress" style="width: 70%;"></div>
                    </div>
                    <span>70% of target</span>
                </div>
                
                <div class="stat-card alert">
                    <h3>Training Due</h3>
                    <div class="counter" id="training-counter">0</div>
                    <div class="progress-bar">
                        <div class="progress" style="width: 50%;"></div>
                    </div>
                    <span>50% overdue</span>
                </div>
            </div>

            <div class="charts-row">
                <div class="chart-container">
                    <h3>Monthly Training Completion</h3>
                    <canvas id="trainingChart"></canvas>
                </div>
                
                <div class="info-container">
                    <div class="info-box">
                        <h3>Training Categories</h3>
                        <ul>
                            <li><span class="dot safety"></span> Safety Training</li>
                            <li><span class="dot technical"></span> Technical Skills</li>
                            <li><span class="dot compliance"></span> Compliance</li>
                        </ul>
                    </div>
                    
                    <div class="info-box">
                        <h3>Certification Status</h3>
                        <ul>
                            <li><span class="dot completed"></span> Completed</li>
                            <li><span class="dot pending"></span> Pending</li>
                            <li><span class="dot expired"></span> Expired</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

        <footer class="footer">
            <div class="footer-left">
                <p>&copy; 2025 Crane & Truck Management System - HR 2 Module</p>
            </div>
            <div class="footer-right">
                <p id="real-time-clock">Loading time...</p>
                <p id="system-status">System Status: <span class="online">Online</span></p>
            </div>
        </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/script.js"></script>
</body>
</html>