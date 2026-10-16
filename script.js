const books = [
  // RTX 30 Series
  {
    id: 1,
    title: "RTX 3060 8GB",
    category: "rtx-30",
    desc: "Kiến trúc Ampere, phiên bản 8GB tiết kiệm, chơi game 1080p mượt mà.",
    price: 6500000,
    sale: true,
    discount: 20,
    img: "images/rtx3060.jpg"
  },
  {
    id: 2,
    title: "RTX 3060 12GB",
    category: "rtx-30",
    desc: "Phiên bản VRAM 12GB quốc dân, tối ưu cho đồ họa, dựng phim và AI.",
    price: 7500000,
    sale: false,
    discount: 0,
    img: "images/rtx3060-12gb.jpg"
  },
  {
    id: 3,
    title: "RTX 3060 OC 12GB",
    category: "rtx-30",
    desc: "Hiệu năng ép xung mạnh mẽ, tản nhiệt kép tối ưu.",
    price: 8000000,
    sale: true,
    discount: 25,
    img: "images/RTX 3060 OC.jpg"
  },
  {
    id: 4,
    title: "RTX 3060 Vision 12GB",
    category: "rtx-30",
    desc: "Phiên bản trắng cao cấp dành cho nhà sáng tạo nội dung.",
    price: 8500000,
    sale: true,
    discount: 15,
    img: "images/rtx3060-vision.jpg"
  },
  // RTX 40 Series
  {
    id: 5,
    title: "RTX 4060 8GB",
    category: "rtx-40",
    desc: "Kiến trúc Ada Lovelace, hỗ trợ DLSS 3 và Ray Tracing thế hệ mới.",
    price: 9000000,
    sale: false,
    discount: 0,
    img: "images/rtx4060.jpg"
  },
  {
    id: 6,
    title: "RTX 4060 Ti 8GB",
    category: "rtx-40",
    desc: "Hiệu năng chơi game 1080p/1440p cực kỳ ấn tượng.",
    price: 11000000,
    sale: true,
    discount: 20,
    img: "images/rtx4060ti.jpg"
  },
  {
    id: 7,
    title: "RTX 4070 Super 12GB",
    category: "rtx-40",
    desc: "Sức mạnh vượt trội cho gaming cấu hình cao 2K.",
    price: 16500000,
    sale: false,
    discount: 0,
    img: "images/rtx4070super.jpg"
  },
  {
    id: 8,
    title: "RTX 4090 24GB",
    category: "rtx-40",
    desc: "Quái vật đồ họa đỉnh cao với 24GB VRAM, chuyên render và game 4K.",
    price: 48000000,
    sale: true,
    discount: 30,
    img: "images/rtx4090.jpg"
  },
  // RTX 50 Series
  {
    id: 9,
    title: "RTX 5090 32GB",
    category: "rtx-50",
    desc: "Kiến trúc Blackwell mới nhất, sở hữu 32GB VRAM siêu khủng.",
    price: 75000000,
    sale: false,
    discount: 0,
    img: "images/rtx5090.jpg"
  },
  {
    id: 10,
    title: "RTX 5080 16GB",
    category: "rtx-50",
    desc: "Hiệu năng thế hệ mới cực mạnh mẽ cho các tác vụ nặng.",
    price: 35000000,
    sale: true,
    discount: 10,
    img: "images/rtx5080.jpg"
  },
  {
    id: 11,
    title: "RTX 5070 12GB",
    category: "rtx-50",
    desc: "Tối ưu hóa năng lượng và hiệu năng AI vượt trội.",
    price: 22000000,
    sale: false,
    discount: 0,
    img: "images/rtx5070.jpg"
  },
  {
    id: 12,
    title: "RTX 5060 8GB",
    category: "rtx-50",
    desc: "Lựa chọn tối ưu cho phân khúc phổ thông thế hệ mới.",
    price: 12000000,
    sale: true,
    discount: 15,
    img: "images/rtx5060.jpg"
  },
  // Phụ kiện PC
  {
    id: 13,
    title: "Giá đỡ VGA RGB",
    category: "phu-kien",
    desc: "Trang trí chống xệ card màn hình cực ngầu.",
    price: 350000,
    sale: true,
    discount: 20,
    img: "images/giado-vga.jpg"
  },
  {
    id: 14,
    title: "Cáp Riser PCIe 4.0",
    category: "phu-kien",
    desc: "Giúp dựng đứng card đồ họa khoe fan đẹp mắt.",
    price: 950000,
    sale: false,
    discount: 0,
    img: "images/riser-cable.jpg"
  },
  {
    id: 15,
    title: "Keo tản nhiệt cao cấp",
    category: "phu-kien",
    desc: "Giúp GPU luôn duy trì nhiệt độ mát mẻ.",
    price: 180000,
    sale: false,
    discount: 0,
    img: "images/thermal-paste.jpg"
  },
  {
    id: 16,
    title: "Bộ nguồn 850W 80 Plus Gold",
    category: "phu-kien",
    desc: "Nguồn điện ổn định cho dòng VGA cao cấp.",
    price: 2800000,
    sale: true,
    discount: 25,
    img: "images/psu-850w.jpg"
  },
  {
    id: 17,
    title: "RTX 4070 Ti Super 16GB",
    category: "rtx-40",
    price: 24500000,
    sale: true,
    discount: 15,
    img: "images/rtx4070ti.jpg",
    desc: "Hiệu năng cực đỉnh cho game 2K/4K và công nghệ DLSS 3.5 thế hệ mới."
  },
  {
    id: 18,
    title: "Tản Nhiệt Nước AIO 360mm RGB",
    category: "phu-kien",
    price: 3200000,
    sale: true,
    discount: 20,
    img: "images/tannhietnuoc.jpg",
    desc: "Tản nhiệt nước tản nhiệt cực tốt, hiển thị LED RGB rực rỡ cho CPU."
  },
  {
    id: 19,
    title: "RTX 4080 Super 16GB",
    category: "rtx-40",
    price: 29900000,
    sale: true,
    discount: 10,
    img: "images/rtx4080super.jpg",
    desc: "Sức mạnh chiến game đỉnh cao, ép xung mạnh mẽ và tối ưu nhiệt độ."
  }
];
// ======= Elements =======
const categoryButtons = document.querySelectorAll('.category-btn');
const bookListEl = document.getElementById('book-list');
const categoryTitle = document.getElementById('category-title');
const cartBtn = document.getElementById('btn-cart');
const cartEl = document.getElementById('cart');
const cartCloseBtn = document.getElementById('cart-close');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');
const paymentMethodEl = document.getElementById('payment-method');
const bankDetailsEl = document.getElementById('bank-details');
const bankAccountNameEl = document.getElementById('bank-account-name');
const bankAccountNumberEl = document.getElementById('bank-account-number');
const btnCheckout = document.getElementById('btn-checkout');
const paymentSummaryEl = document.getElementById('payment-summary');

const flashSaleTimerEl = document.getElementById('flash-sale-timer');

const bestSellerList = document.getElementById('best-seller-list');
const featuredList = document.getElementById('featured-list');
const bestSellerSection = document.getElementById('best-seller-section');
const featuredSection = document.getElementById('featured-section');

const bsPrev = document.getElementById('bs-prev');
const bsNext = document.getElementById('bs-next');
const ftPrev = document.getElementById('ft-prev');
const ftNext = document.getElementById('ft-next');

let currentCategory = "all";
let cart = {};

// ====== Functions ======
function escapeHtml(text) {
  return text.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

// Hàm chuẩn dùng chung để tạo khung sản phẩm tránh lặp code và lệch giao diện
function createProductCard(b) {
  const salePrice = b.sale ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
  return `
    <div class="book">
      ${b.sale ? `<div class="sale-label">${b.discount}% SALE</div>` : ''}
      <img src="${b.img || 'https://placehold.co/400x400/eeeeee/333333?text=VGA'}" alt="${escapeHtml(b.title)}" onerror="this.src='https://placehold.co/400x400/eeeeee/333333?text=VGA'"/>
      <h3>${escapeHtml(b.title)}</h3>
      <p class="desc">${escapeHtml(b.desc)}</p>
      <p class="price">
        ${
          b.sale
            ? `<del>${b.price.toLocaleString()}₫</del> →${salePrice.toLocaleString()}₫`
            : `${b.price.toLocaleString()}₫`
        }
      </p>
      <button onclick="addToCart(${b.id})">Thêm vào giỏ</button>
    </div>
  `;
}

// Flash Sale (Trang chủ)
function renderFlashSale(){
  const flashBooks = books.filter(b => b.sale);
  bookListEl.innerHTML = flashBooks.map(b => createProductCard(b)).join('');
}

// thời gian đếm ngược
function countdownFlashSale(){
  const saleEnd = new Date();
  saleEnd.setHours(saleEnd.getHours() + 24);

  function updateTimer(){
    const now = new Date();
    let diff = Math.max(0, saleEnd - now);
    let hrs  = Math.floor(diff / 1000 / 3600);
    let mins = Math.floor(diff / 1000 / 60) % 60;
    let secs = Math.floor(diff / 1000) % 60;
    flashSaleTimerEl.textContent = `⏰ Kết thúc sau: ${hrs} giờ ${mins} phút ${secs} giây`;
    if (diff <= 0) clearInterval(timerInterval);
  }
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// sản phẩm bán chạy và nổi bật nhất
function renderCarousels(){
  const bestSellers = books.slice(0, 5);
  const featured = books.slice(5, 10);

  bestSellerList.innerHTML = bestSellers.map(b => {
    const salePrice = b.sale ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
    return `
    <div class="carousel-item book">
      ${b.sale ? `<div class="sale-label">${b.discount}% SALE</div>` : ''}
      <img src="${b.img || 'https://placehold.co/400x400/eeeeee/333333?text=VGA'}" alt="${escapeHtml(b.title)}" onerror="this.src='https://placehold.co/400x400/eeeeee/333333?text=VGA'"/>
      <h3>${escapeHtml(b.title)}</h3>
      <p class="price">
        ${b.sale ? `<del>${b.price.toLocaleString()}₫</del> →${salePrice.toLocaleString()}₫` : `${b.price.toLocaleString()}₫`}
      </p>
      <button onclick="addToCart(${b.id})">Thêm vào giỏ</button>
    </div>
  `}).join('');

  featuredList.innerHTML = featured.map(b => {
    const salePrice = b.sale ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
    return `
    <div class="carousel-item book">
      ${b.sale ? `<div class="sale-label">${b.discount}% SALE</div>` : ''}
      <img src="${b.img || 'https://placehold.co/400x400/eeeeee/333333?text=VGA'}" alt="${escapeHtml(b.title)}" onerror="this.src='https://placehold.co/400x400/eeeeee/333333?text=VGA'"/>
      <h3>${escapeHtml(b.title)}</h3>
      <p class="price">
        ${b.sale ? `<del>${b.price.toLocaleString()}₫</del> →${salePrice.toLocaleString()}₫` : `${b.price.toLocaleString()}₫`}
      </p>
      <button onclick="addToCart(${b.id})">Thêm vào giỏ</button>
    </div>
  `}).join('');
}

// thanh trượt sản phẩm
function carouselNav(track, prev, next){
  prev.addEventListener('click', () => {
    track.scrollBy({ left: -220, behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    track.scrollBy({ left: 220, behavior: 'smooth' });
  });
}

// giỏ hàng
function addToCart(id){
  const book = books.find(b => b.id === id);
  if (cart[id]) cart[id].qty++;
  else cart[id] = { book, qty: 1 };
  renderCart();
}

function renderCart(){
  cartItemsEl.innerHTML = Object.values(cart).map(c => `
    <li>${escapeHtml(c.book.title)} x ${c.qty} <button onclick="removeFromCart(${c.book.id})">x</button></li>
  `).join('');

  const total = Object.values(cart).reduce((sum, c) => {
    const price = c.book.sale
      ? Math.round(c.book.price * (1 - c.book.discount / 100))
      : c.book.price;
    return sum + price * c.qty;
  }, 0);

  cartTotalEl.textContent = `Tổng tiền: ${total.toLocaleString()}₫`;
  cartCountEl.textContent = Object.values(cart).reduce((sum, c) => sum + c.qty, 0);
}

function removeFromCart(id){
  delete cart[id];
  renderCart();
}

// Payment
paymentMethodEl.addEventListener('change', () => {
  bankDetailsEl.style.display = paymentMethodEl.value === 'bank' ? 'block' : 'none';
});

btnCheckout.addEventListener('click', () => {
  const method = paymentMethodEl.value;
  if (!method){
    alert("Vui lòng chọn phương thức thanh toán");
    return;
  }
  let summary = `Phương thức: ${method}`;
  if (method === 'bank'){
    summary += `\nTên: ${bankAccountNameEl.value}\nSố TK: ${bankAccountNumberEl.value}`;
  }
  paymentSummaryEl.style.display = 'block';
  paymentSummaryEl.textContent = summary;
});

// điều hướng danh mục
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;

    if (currentCategory === 'all'){
      renderFlashSale();
      bestSellerSection.style.display = 'block';
      featuredSection.style.display = 'block';
      flashSaleTimerEl.style.display = 'block';
      categoryTitle.textContent = 'Flash Sale – Giá cực rẻ – Mua 1 tặng 1 tính tiền 3';
    } else {
      const catBooks = books.filter(b => b.category === currentCategory);
      bookListEl.innerHTML = catBooks.map(b => createProductCard(b)).join('');

      bestSellerSection.style.display = 'none';
      featuredSection.style.display = 'none';
      flashSaleTimerEl.style.display = 'none';
      categoryTitle.textContent = btn.textContent;
    }
  });
});

// bật tắt giỏ hàng
cartBtn.addEventListener('click', () => {
  cartEl.style.display = 'flex';
});

cartCloseBtn.addEventListener('click', () => {
  cartEl.style.display = 'none';
});

// khởi tạo lại trang web
renderFlashSale();
countdownFlashSale();
renderCarousels();
carouselNav(bestSellerList, bsPrev, bsNext);
carouselNav(featuredList, ftPrev, ftNext);

// ===== Hiệu ứng click chuột hiện 1 con số nhị phân Matrix đơn lẻ
document.addEventListener('click', function(e) {
  const chars = ['0', '1']; // Ký tự nhị phân
  const matrixColors = ['#00ff66', '#00e5ff', '#76b900', '#ffffff']; // các hệ màu

  const codeEl = document.createElement('div');
  codeEl.className = 'matrix-code';
  
  // Chỉ chọn ngẫu nhiên 1 số 0 hoặc 1
  codeEl.innerHTML = chars[Math.floor(Math.random() * chars.length)];
  
  // Đặt chính xác tại vị trí con trỏ chuột click
  codeEl.style.left = e.clientX + 'px';
  codeEl.style.top = e.clientY + 'px';
  
  // Chọn màu sắc ngẫu nhiên cho số đó
  const randomColor = matrixColors[Math.floor(Math.random() * matrixColors.length)];
  codeEl.style.color = randomColor;
  codeEl.style.textShadow = `0 0 8px ${randomColor}, 0 0 16px ${randomColor}`;
  
  // Kích thước hiệu ứng
  codeEl.style.fontSize = '18px';
  
  document.body.appendChild(codeEl);
  
  // Tự động xóa sau khi chạy xong animation (0.8 giây)
  setTimeout(() => {
    codeEl.remove();
  }, 800);
});

// ===== 1. Hiệu ứng rê chuột tạo dải mã Matrix (RGB 16 triệu màu) =====
let lastMoveTime = 0;
document.addEventListener('mousemove', function(e) {
  const now = Date.now();
  // Giới hạn tốc độ sinh số (50ms/lần) để mượt web
  if (now - lastMoveTime < 50) return; 
  lastMoveTime = now;

  const chars = ['0', '1'];

  for (let i = 0; i < 2; i++) {
    const trailEl = document.createElement('div');
    trailEl.className = 'matrix-trail';
    
    trailEl.innerHTML = chars[Math.floor(Math.random() * chars.length)];
    
    // Tản vị trí xung quanh con trỏ chuột
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    
    trailEl.style.left = (e.clientX + offsetX) + 'px';
    trailEl.style.top = (e.clientY + offsetY) + 'px';
    
    // Tạo màu ngẫu nhiên toàn dải RGB 16 triệu màu bằng HSL (Hue từ 0 đến 360)
    const randomHue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${randomHue}, 100%, 50%)`;
    
    trailEl.style.color = randomColor;
    trailEl.style.textShadow = `0 0 6px ${randomColor}, 0 0 10px ${randomColor}`;
    
    document.body.appendChild(trailEl);
    
    // Xóa sau 0.5 giây
    setTimeout(() => {
      trailEl.remove();
    }, 500);
  }
});


// ===== 2. Hiệu ứng click chuột hiện 1 con số đơn lẻ (RGB 16 triệu màu) =====
document.addEventListener('click', function(e) {
  const chars = ['0', '1'];

  const codeEl = document.createElement('div');
  codeEl.className = 'matrix-code';
  
  codeEl.innerHTML = chars[Math.floor(Math.random() * chars.length)];
  
  // Đặt chính xác tại vị trí click
  codeEl.style.left = e.clientX + 'px';
  codeEl.style.top = e.clientY + 'px';
  
  // Tạo màu ngẫu nhiên toàn dải RGB 16 triệu màu cho số khi click
  const randomHue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${randomHue}, 100%, 50%)`;
  
  codeEl.style.color = randomColor;
  codeEl.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;
  codeEl.style.fontSize = '18px';
  
  document.body.appendChild(codeEl);
  
  // Xóa sau 0.8 giây
  setTimeout(() => {
    codeEl.remove();
  }, 800);
});


// ===== Tăng số lượng sản phẩm =====
function increaseQty(id) {
  if (cart[id]) {
    cart[id].qty++;
    renderCart();
  }
}

// ===== Giảm số lượng sản phẩm =====
function decreaseQty(id) {
  if (cart[id]) {
    cart[id].qty--;
    if (cart[id].qty <= 0) {
      delete cart[id]; // Nếu giảm về 0 thì tự động xóa sản phẩm khỏi giỏ
    }
    renderCart();
  }
}

// =====giao diện hiển thị Giỏ hàng =====
function renderCart(){
  cartItemsEl.innerHTML = Object.values(cart).map(c => `
    <li>
      <span>${escapeHtml(c.book.title)}</span>
      <div class="cart-controls">
        <button onclick="decreaseQty(${c.book.id})">-</button>
        <span>${c.qty}</span>
        <button onclick="increaseQty(${c.book.id})">+</button>
        <button class="btn-remove" onclick="removeFromCart(${c.book.id})">x</button>
      </div>
    </li>
  `).join('');

  const total = Object.values(cart).reduce((sum, c) => {
    const price = c.book.sale
      ? Math.round(c.book.price * (1 - c.book.discount / 100))
      : c.book.price;
    return sum + price * c.qty;
  }, 0);

  cartTotalEl.textContent = `Tổng tiền: ${total.toLocaleString()}₫`;
  cartCountEl.textContent = Object.values(cart).reduce((sum, c) => sum + c.qty, 0);
}

function removeFromCart(id){
  delete cart[id];
  renderCart();
}



// Hàm bật tắt popup giỏ hàng chạy trực tiếp 100%
function toggleCart() {
  const cartModal = document.getElementById('cart');
  if (cartModal) {
    cartModal.classList.toggle('active');
  }
}