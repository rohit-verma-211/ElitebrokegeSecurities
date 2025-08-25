// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const contactForm = document.getElementById('contactForm');
const currentTimeElement = document.getElementById('currentTime');
const marketIndices = document.getElementById('marketIndices');
const marketDataTable = document.getElementById('marketDataTable');
const stockTicker = document.getElementById('stockTicker');

// Sample market data
const indicesData = [
    { name: 'S&P 500', value: 4532.12, change: 24.56, percentChange: 0.54 },
    { name: 'NASDAQ', value: 15231.45, change: 87.32, percentChange: 0.58 },
    { name: 'DOW JONES', value: 35490.21, change: 156.78, percentChange: 0.44 },
    { name: 'FTSE 100', value: 7123.45, change: -12.34, percentChange: -0.17 },
    { name: 'DAX', value: 15876.54, change: 45.67, percentChange: 0.29 },
    { name: 'NIKKEI 225', value: 28765.43, change: 123.45, percentChange: 0.43 }
];

// Sample stock ticker data
const tickerData = [
    { symbol: 'AAPL', price: 148.56, change: 1.23, percentChange: 0.84 },
    { symbol: 'MSFT', price: 305.21, change: 2.34, percentChange: 0.77 },
    { symbol: 'GOOGL', price: 2756.34, change: -12.45, percentChange: -0.45 },
    { symbol: 'AMZN', price: 3456.78, change: 23.56, percentChange: 0.69 },
    { symbol: 'TSLA', price: 789.12, change: -5.67, percentChange: -0.71 },
    { symbol: 'FB', price: 345.67, change: 3.45, percentChange: 1.01 },
    { symbol: 'NVDA', price: 234.56, change: 4.56, percentChange: 1.98 },
    { symbol: 'JPM', price: 167.89, change: -0.45, percentChange: -0.27 },
    { symbol: 'V', price: 245.67, change: 1.23, percentChange: 0.50 },
    { symbol: 'WMT', price: 145.67, change: 0.89, percentChange: 0.61 }
];

// Initialize the application
function init() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Modal controls
    loginBtn.addEventListener('click', () => toggleModal(loginModal));
    registerBtn.addEventListener('click', () => toggleModal(registerModal));
    closeLoginModal.addEventListener('click', () => toggleModal(loginModal));
    closeRegisterModal.addEventListener('click', () => toggleModal(registerModal));
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(loginModal);
        toggleModal(registerModal);
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(registerModal);
        toggleModal(loginModal);
    });
    
    // Form submissions
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    contactForm.addEventListener('submit', handleContact);
    
    // Update time
    updateTime();
    setInterval(updateTime, 1000);
    
    // Load market data
    loadMarketIndices();
    loadMarketDataTable();
    loadStockTicker();
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Toggle modal
function toggleModal(modal) {
    modal.classList.toggle('hidden');
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // In a real app, you would validate and send to server
    console.log('Login attempt with:', { email, password });
    alert('Login functionality would be implemented in a real application');
    toggleModal(loginModal);
}

// Handle register form submission
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real app, you would validate and send to server
    console.log('Registration attempt with:', { name, email, password });
    alert('Registration functionality would be implemented in a real application');
    toggleModal(registerModal);
}

// Handle contact form submission
function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real app, you would send this to your server
    console.log('Contact form submitted:', { name, email, subject, message });
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}

// Update current time
function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    currentTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Load market indices
function loadMarketIndices() {
    // Display first 3 indices in the hero section
    const topIndices = indicesData.slice(0, 3);
    
    marketIndices.innerHTML = topIndices.map(index => `
        <div class="flex justify-between items-center">
            <span class="font-medium">${index.name}</span>
            <div class="text-right">
                <div class="font-bold">${index.value.toFixed(2)}</div>
                <div class="text-sm ${index.change >= 0 ? 'text-green-400' : 'text-red-400'}">
                    ${index.change >= 0 ? '+' : ''}${index.change.toFixed(2)} (${index.percentChange >= 0 ? '+' : ''}${index.percentChange.toFixed(2)}%)
                </div>
            </div>
        </div>
    `).join('');
}

// Load market data table
function loadMarketDataTable() {
    marketDataTable.innerHTML = indicesData.map(index => `
        <tr class="hover:bg-gray-50">
            <td class="py-3 px-4 font-medium">${index.name}</td>
            <td class="py-3 px-4">${index.value.toFixed(2)}</td>
            <td class="py-3 px-4 ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}">
                ${index.change >= 0 ? '+' : ''}${index.change.toFixed(2)}
            </td>
            <td class="py-3 px-4 ${index.percentChange >= 0 ? 'text-green-600' : 'text-red-600'}">
                ${index.percentChange >= 0 ? '+' : ''}${index.percentChange.toFixed(2)}%
            </td>
            <td class="py-3 px-4">
                <div class="chart-placeholder w-24"></div>
            </td>
        </tr>
    `).join('');
}

// Load stock ticker
function loadStockTicker() {
    // Duplicate the data to make the ticker longer
    const extendedTickerData = [...tickerData, ...tickerData];
    
    stockTicker.innerHTML = extendedTickerData.map(stock => `
        <div class="flex items-center">
            <span class="font-bold mr-1">${stock.symbol}</span>
            <span class="mr-1">${stock.price.toFixed(2)}</span>
            <span class="${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}">
                (${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)})
            </span>
        </div>
    `).join('');
    
    // Apply ticker animation class
    stockTicker.querySelectorAll('div').forEach(div => {
        div.classList.add('ticker');
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);


















