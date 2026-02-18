// ==========================================
// DOMAIN PAGE - SHARED JAVASCRIPT
// ==========================================

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Placeholder data for engaged members (can be populated per domain)
const engagedMemberData = {};

// State
let domainCalMonth, domainCalYear;
let engagedMonth, engagedYear;

function initDomainPage() {
    const now = new Date();
    domainCalMonth = now.getMonth();
    domainCalYear = now.getFullYear();
    engagedMonth = now.getMonth();
    engagedYear = now.getFullYear();
    
    renderDomainCalendar();
    updateEngagedLabel();
}

function getLabel(m, y) {
    return `${monthNames[m]} ${y}`;
}

// Calendar
function navDomainCal(dir) {
    domainCalMonth += dir;
    if (domainCalMonth > 11) { domainCalMonth = 0; domainCalYear++; }
    if (domainCalMonth < 0) { domainCalMonth = 11; domainCalYear--; }
    renderDomainCalendar();
}

function renderDomainCalendar() {
    const label = document.getElementById('domainCalLabel');
    const grid = document.getElementById('domainCalGrid');
    if (!label || !grid) return;
    
    label.textContent = getLabel(domainCalMonth, domainCalYear);
    grid.innerHTML = '';
    
    const firstDay = new Date(domainCalYear, domainCalMonth, 1).getDay();
    const daysInMonth = new Date(domainCalYear, domainCalMonth + 1, 0).getDate();
    const today = new Date();
    
    for (let i = 0; i < firstDay; i++) {
        const cell = document.createElement('div');
        cell.className = 'cal-day empty';
        grid.appendChild(cell);
    }
    
    for (let d = 1; d <= daysInMonth; d++) {
        const cell = document.createElement('div');
        cell.className = 'cal-day';
        cell.textContent = d;
        
        if (d === today.getDate() && domainCalMonth === today.getMonth() && domainCalYear === today.getFullYear()) {
            cell.classList.add('today');
        }
        
        if (d % 10 === 5 || d === 20) {
            cell.classList.add('has-event');
        }
        
        grid.appendChild(cell);
    }
}

// Most Engaged Member navigation
function navEngaged(dir) {
    engagedMonth += dir;
    if (engagedMonth > 11) { engagedMonth = 0; engagedYear++; }
    if (engagedMonth < 0) { engagedMonth = 11; engagedYear--; }
    updateEngagedLabel();
    updateEngagedMember();
}

function updateEngagedLabel() {
    const el = document.getElementById('engagedMonthLabel');
    if (el) el.textContent = getLabel(engagedMonth, engagedYear);
}

function updateEngagedMember() {
    const key = `${engagedYear}-${engagedMonth}`;
    const data = engagedMemberData[key];
    const card = document.querySelector('.engaged-card');
    if (!card) return;
    
    const name = card.querySelector('h3');
    const role = card.querySelector('.engaged-role');
    const photo = card.querySelector('.engaged-photo');
    const stats = card.querySelectorAll('.engaged-stat-number');
    
    if (data) {
        name.textContent = data.name;
        role.textContent = data.role || 'Community Member';
        if (data.photo) photo.src = data.photo;
        if (stats[0]) stats[0].textContent = data.messages || '—';
        if (stats[1]) stats[1].textContent = data.contributions || '—';
        if (stats[2]) stats[2].textContent = data.impact || '—';
    } else {
        name.textContent = 'Coming Soon';
        role.textContent = 'Community Member';
        photo.src = 'images/logos/logo.jpeg';
        if (stats[0]) stats[0].textContent = '—';
        if (stats[1]) stats[1].textContent = '—';
        if (stats[2]) stats[2].textContent = '—';
    }
}

// Fire sparks (simplified from main site)
function createSpark() {
    const spark = document.createElement('div');
    spark.style.cssText = `
        position: fixed;
        width: 3px; height: 3px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        bottom: -5px;
        background: radial-gradient(circle, ${Math.random() > 0.5 ? '#FFD36A, #FF6A00' : '#87CEEB, #0066FF'});
        box-shadow: 0 0 8px 2px rgba(255, 106, 0, 0.3);
        animation: sparkFloat ${3 + Math.random() * 4}s linear forwards;
    `;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 7000);
}

// Spark animation
const sparkStyle = document.createElement('style');
sparkStyle.textContent = `
    @keyframes sparkFloat {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-100vh); }
    }
`;
document.head.appendChild(sparkStyle);

setInterval(createSpark, 800);

// Init
document.addEventListener('DOMContentLoaded', initDomainPage);
