/**
 * TUYEN QUANG TOURISM LANDING PAGE - MAIN JAVASCRIPT
 * Xử lý logic tương tác: lọc điểm đến, modal chi tiết, bản đồ Leaflet,
 * tabs văn hóa, timeline lịch trình, lightbox thư viện ảnh, menu mobile.
 * Đảm bảo 100% hình ảnh hiển thị chuẩn xác hoặc hiển thị thẻ "Đang cập nhật hình ảnh".
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDestinations();
  initExperiences();
  initCultures();
  initCuisines();
  initItineraries();
  initGallery();
  initMap();
  initModals();
  initBackToTop();
});

/* ==========================================================================
   1. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  }

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   2. DESTINATIONS & FILTER
   ========================================================================== */
function initDestinations() {
  const grid = document.getElementById('destinations-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid || !TUYEN_QUANG_DATA.destinations) return;

  function renderDestinations(category = 'all') {
    grid.innerHTML = '';

    const filtered = category === 'all'
      ? TUYEN_QUANG_DATA.destinations
      : TUYEN_QUANG_DATA.destinations.filter(d => d.category === category);

    filtered.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'dest-card';
      card.setAttribute('data-id', dest.id);

      // Render media: Image if verified, or elegant "Đang cập nhật hình ảnh" placeholder
      let mediaMarkup = '';
      if (dest.image && !dest.isPendingImage) {
        mediaMarkup = `
          <div class="dest-card-media">
            <img src="${dest.image}" alt="${dest.name}" loading="lazy" onerror="handleImageFallback(this, '${dest.name}', '${dest.fallbackColor}')">
            <span class="dest-tag-badge">${dest.tag}</span>
            <span class="dest-category-pill">${dest.categoryName}</span>
          </div>
        `;
      } else {
        mediaMarkup = `
          <div class="dest-card-media dest-card-pending" style="background:${dest.fallbackColor || '#1b4a35'};">
            <div class="pending-content">
              <i class="fa-solid fa-camera-retro pending-icon"></i>
              <span class="pending-badge"><i class="fa-solid fa-clock-rotate-left"></i> Đang cập nhật hình ảnh</span>
              <p class="pending-note">Đang đối chiếu tư liệu chính thức</p>
            </div>
            <span class="dest-tag-badge">${dest.tag}</span>
            <span class="dest-category-pill">${dest.categoryName}</span>
          </div>
        `;
      }

      card.innerHTML = `
        ${mediaMarkup}
        <div class="dest-card-body">
          <div class="dest-location-info">
            <i class="fa-solid fa-location-dot"></i>
            <span>${dest.location}</span>
          </div>
          <h3 class="dest-title">${dest.name}</h3>
          <p class="dest-desc">${dest.shortDesc}</p>
          <div class="dest-card-footer">
            <button class="dest-btn-explore" onclick="openDestinationModal('${dest.id}')">
              <span>Khám phá chi tiết</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <a href="${dest.gmapsUrl}" target="_blank" rel="noopener noreferrer" class="dest-btn-map" title="Xem trên Google Maps">
              <i class="fa-solid fa-map-location-dot"></i>
              <span>Bản đồ</span>
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderDestinations(category);
    });
  });

  // Initial render
  renderDestinations('all');
}

/**
 * Xử lý khi ảnh ngoài mạng không tải được hoặc offline:
 * Tạo thẻ placeholder vector thẩm mỹ, ghi rõ tên địa danh, không bao giờ để lỗi ảnh
 */
window.handleImageFallback = function(imgElement, placeName, bgColor) {
  const container = imgElement.parentElement;
  imgElement.style.display = 'none';

  const placeholder = document.createElement('div');
  placeholder.className = 'dest-card-placeholder';
  placeholder.style.backgroundColor = bgColor || '#123d29';
  placeholder.innerHTML = `
    <div class="placeholder-icon"><i class="fa-solid fa-image"></i></div>
    <div class="placeholder-name">${placeName}</div>
    <div class="pending-badge" style="margin-top:8px;"><i class="fa-solid fa-clock-rotate-left"></i> Đang cập nhật hình ảnh</div>
  `;
  container.appendChild(placeholder);
};

/* ==========================================================================
   3. EXPERIENCES
   ========================================================================== */
function initExperiences() {
  const grid = document.getElementById('experiences-grid');
  if (!grid || !TUYEN_QUANG_DATA.experiences) return;

  grid.innerHTML = '';
  TUYEN_QUANG_DATA.experiences.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'exp-card';
    card.innerHTML = `
      <div class="exp-icon-box">
        <i class="fa-solid ${exp.icon}"></i>
      </div>
      <h3 class="exp-title">${exp.title}</h3>
      <span class="exp-sub">${exp.subtitle}</span>
      <p class="exp-desc">${exp.description}</p>
      <div class="exp-places">
        <i class="fa-solid fa-location-arrow"></i>
        <span>${exp.destinations}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ==========================================================================
   4. ETHNIC CULTURES TABS
   ========================================================================== */
function initCultures() {
  const navContainer = document.getElementById('culture-tabs-nav');
  const displayContainer = document.getElementById('culture-detail-display');

  if (!navContainer || !displayContainer || !TUYEN_QUANG_DATA.cultures) return;

  navContainer.innerHTML = '';
  TUYEN_QUANG_DATA.cultures.forEach((cult, index) => {
    const btn = document.createElement('button');
    btn.className = `culture-tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerHTML = `<i class="fa-solid fa-user-group"></i> <span>${cult.name}</span>`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.culture-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCultureDetail(cult);
    });
    navContainer.appendChild(btn);
  });

  function renderCultureDetail(cult) {
    displayContainer.innerHTML = `
      <div class="culture-detail-card">
        <div class="culture-header">
          <h3 class="culture-ethnic-name">${cult.name}</h3>
          <p class="culture-tagline">“${cult.tagline}”</p>
        </div>
        <p class="culture-desc">${cult.desc}</p>
        <div class="culture-features-grid">
          ${cult.features.map(f => `
            <div class="culture-feature-pill">
              <i class="fa-solid fa-certificate"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (TUYEN_QUANG_DATA.cultures.length > 0) {
    renderCultureDetail(TUYEN_QUANG_DATA.cultures[0]);
  }
}

/* ==========================================================================
   5. CUISINE
   ========================================================================== */
function initCuisines() {
  const grid = document.getElementById('cuisine-grid');
  if (!grid || !TUYEN_QUANG_DATA.cuisines) return;

  grid.innerHTML = '';
  TUYEN_QUANG_DATA.cuisines.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cuisine-card';
    card.innerHTML = `
      <div class="cuisine-card-top">
        <div class="cuisine-icon">
          <i class="fa-solid ${item.icon || 'fa-utensils'}"></i>
        </div>
        <span class="cuisine-badge">${item.badge}</span>
      </div>
      <h4 class="cuisine-title">${item.name}</h4>
      <p class="cuisine-desc">${item.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ==========================================================================
   6. INTERACTIVE MAP (LEAFLET.JS)
   ========================================================================== */
let mapInstance = null;
let markersMap = {};

function initMap() {
  const mapElement = document.getElementById('map-view');
  const sidebarList = document.getElementById('map-locations-list');

  if (!mapElement || !TUYEN_QUANG_DATA.destinations) return;

  try {
    if (typeof L !== 'undefined') {
      mapInstance = L.map('map-view', {
        scrollWheelZoom: false
      }).setView([22.4, 105.3], 8);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> đóng góp',
        maxZoom: 18,
      }).addTo(mapInstance);

      const customPin = L.divIcon({
        className: 'custom-map-marker',
        html: `<div style="background:#123d29;color:#ffffff;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.3);border:2px solid #ffffff;"><i class="fa-solid fa-location-dot" style="font-size:16px;color:#f5b041;"></i></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -32]
      });

      TUYEN_QUANG_DATA.destinations.forEach(dest => {
        if (dest.geo) {
          const marker = L.marker(dest.geo, { icon: customPin }).addTo(mapInstance);
          const popupContent = `
            <div class="popup-card">
              <h4 class="popup-title">${dest.name}</h4>
              <p class="popup-desc">${dest.shortDesc.slice(0, 100)}...</p>
              <a href="${dest.gmapsUrl}" target="_blank" rel="noopener noreferrer" class="popup-link">
                <i class="fa-solid fa-route"></i> Chỉ đường Google Maps
              </a>
            </div>
          `;
          marker.bindPopup(popupContent);
          markersMap[dest.id] = marker;
        }
      });
    }
  } catch (err) {
    console.warn('Map initialization:', err);
  }

  // Populate sidebar
  if (sidebarList) {
    sidebarList.innerHTML = '';
    TUYEN_QUANG_DATA.destinations.forEach(dest => {
      const item = document.createElement('div');
      item.className = 'map-loc-item';
      item.setAttribute('data-id', dest.id);
      item.innerHTML = `
        <div class="map-loc-name">${dest.name}</div>
        <div class="map-loc-meta">
          <span>${dest.categoryName}</span>
          <span class="map-loc-link">Xem điểm <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      `;
      item.addEventListener('click', () => {
        document.querySelectorAll('.map-loc-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        if (mapInstance && dest.geo) {
          mapInstance.flyTo(dest.geo, 11, { duration: 1.2 });
          if (markersMap[dest.id]) {
            markersMap[dest.id].openPopup();
          }
        }
      });
      sidebarList.appendChild(item);
    });
  }
}

/* ==========================================================================
   7. ITINERARIES
   ========================================================================== */
function initItineraries() {
  const selector = document.getElementById('itinerary-selector');
  const display = document.getElementById('itinerary-display');

  if (!selector || !display || !TUYEN_QUANG_DATA.itineraries) return;

  selector.innerHTML = '';
  TUYEN_QUANG_DATA.itineraries.forEach((itin, index) => {
    const btn = document.createElement('button');
    btn.className = `itinerary-btn ${index === 0 ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="itinerary-btn-duration"><i class="fa-regular fa-clock"></i> ${itin.duration}</span>
      <span class="itinerary-btn-title">${itin.title}</span>
    `;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.itinerary-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderItinerary(itin);
    });
    selector.appendChild(btn);
  });

  function renderItinerary(itin) {
    display.innerHTML = `
      <div class="itinerary-header">
        <h3 class="itinerary-main-title">${itin.title}</h3>
        <div class="itinerary-meta-info">
          <span><i class="fa-solid fa-route"></i> <strong>Lộ trình:</strong> ${itin.subtitle}</span>
          <span><i class="fa-solid fa-users"></i> <strong>Thích hợp:</strong> ${itin.suitableFor}</span>
        </div>
      </div>
      <div class="timeline">
        ${itin.timeline.map(step => `
          <div class="timeline-step">
            <span class="timeline-time">${step.time}</span>
            <h4 class="timeline-step-title">${step.title}</h4>
            <p class="timeline-step-desc">${step.detail}</p>
          </div>
        `).join('')}
      </div>
      <div class="itinerary-disclaimer">
        <i class="fa-solid fa-circle-info"></i>
        <span>Gợi ý mang tính tham khảo. Thời gian di chuyển có thể thay đổi tùy điều kiện thời tiết và tình hình thực tế.</span>
      </div>
    `;
  }

  if (TUYEN_QUANG_DATA.itineraries.length > 0) {
    renderItinerary(TUYEN_QUANG_DATA.itineraries[0]);
  }
}

/* ==========================================================================
   8. GALLERY & LIGHTBOX
   ========================================================================== */
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || !TUYEN_QUANG_DATA.gallery) return;

  grid.innerHTML = '';
  TUYEN_QUANG_DATA.gallery.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `gallery-item ${index === 0 || index === 5 ? 'span-2' : ''}`;
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="handleImageFallback(this, '${item.title}', '#123d29')">
      <div class="gallery-item-overlay">
        <h4 class="gallery-item-title">${item.title}</h4>
        <p class="gallery-item-caption">${item.caption}</p>
      </div>
    `;
    div.addEventListener('click', () => {
      openLightbox(item);
    });
    grid.appendChild(div);
  });
}

function openLightbox(item) {
  const lightbox = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');
  const credit = document.getElementById('lightbox-credit');

  if (!lightbox) return;

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  caption.textContent = item.caption;
  credit.textContent = item.credit ? `Nguồn ảnh: ${item.credit}` : '';

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   9. MODALS & POPUPS
   ========================================================================== */
window.openDestinationModal = function(id) {
  const dest = TUYEN_QUANG_DATA.destinations.find(d => d.id === id);
  if (!dest) return;

  const modal = document.getElementById('destination-modal');
  const mediaContainer = document.getElementById('modal-media-container');
  const badge = document.getElementById('modal-badge');
  const title = document.getElementById('modal-title');
  const location = document.getElementById('modal-location');
  const desc = document.getElementById('modal-desc');
  const highlightsList = document.getElementById('modal-highlights');
  const tipsBox = document.getElementById('modal-tips');
  const credit = document.getElementById('modal-credit');
  const mapLink = document.getElementById('modal-map-link');

  if (!modal) return;

  if (dest.image && !dest.isPendingImage) {
    mediaContainer.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" onerror="handleImageFallback(this, '${dest.name}', '${dest.fallbackColor}')">
      <span class="dest-tag-badge">${dest.tag}</span>
    `;
  } else {
    mediaContainer.innerHTML = `
      <div class="modal-media-pending" style="background:${dest.fallbackColor || '#1b4a35'};">
        <i class="fa-solid fa-camera-retro" style="font-size:3rem;margin-bottom:12px;opacity:0.85;"></i>
        <span class="pending-badge"><i class="fa-solid fa-clock-rotate-left"></i> Đang cập nhật hình ảnh</span>
        <p style="font-size:0.85rem;margin-top:8px;opacity:0.8;">Đang đối chiếu tư liệu chính thức</p>
      </div>
      <span class="dest-tag-badge">${dest.tag}</span>
    `;
  }

  badge.textContent = dest.categoryName;
  title.textContent = dest.name;
  location.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${dest.location}`;
  desc.textContent = dest.shortDesc;

  highlightsList.innerHTML = dest.highlights.map(h => `
    <div class="modal-highlight-item">
      <i class="fa-solid fa-check-circle"></i>
      <span>${h}</span>
    </div>
  `).join('');

  tipsBox.innerHTML = `<strong><i class="fa-solid fa-lightbulb"></i> Gợi ý khi tham quan:</strong> ${dest.tips}`;
  credit.textContent = `Nguồn tư liệu & ảnh: ${dest.imageCredit}`;
  mapLink.href = dest.gmapsUrl;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function initModals() {
  const destModal = document.getElementById('destination-modal');
  const lightboxModal = document.getElementById('lightbox-modal');

  if (destModal) {
    const closeBtn = destModal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        destModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    destModal.addEventListener('click', (e) => {
      if (e.target === destModal) {
        destModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (lightboxModal) {
    const closeBtn = lightboxModal.querySelector('.lightbox-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (destModal) destModal.classList.remove('active');
      if (lightboxModal) lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   10. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
