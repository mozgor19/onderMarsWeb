// MARS Projesi - Etkinlik Takvimi JavaScript

class MarsEventsCalendar {
    constructor() {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.events = this.loadEvents();
        this.months = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ];
        this.days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
        
        this.init();
    }

    init() {
        this.createCalendarHTML();
        this.bindEvents();
        this.renderCalendar();
        this.renderEventLists();
    }

    loadEvents() {
        // Bu fonksiyon gerçek uygulamada bir API'den veya veritabanından veri çekecek
        return [
            // Geçmiş Etkinlikler
            {
                id: 1,
                title: 'Medya ve İletişim - Karadelik 1',
                description: 'Dijital medyanın toplumsal etkileri ve yeni iletişim dinamikleri üzerine derinlemesine araştırma.',
                date: '2025-08-15',
                time: '14:00',
                type: 'karadelik',
                status: 'completed',
                location: 'Online',
                participants: 45
                /* images: [
                    'assets/imgs/events/medya-iletisim-1.jpg',
                    'assets/imgs/events/medya-iletisim-2.jpg',
                    'assets/imgs/events/medya-iletisim-3.jpg'
                ] */
            },
            {
                id: 2,
                title: 'Uluslararası Hukuk - Kuluçka Buluşması',
                description: 'Uluslararası hukuk uzmanı Prof. Dr. Ahmet Yılmaz ile özel buluşma.',
                date: '2025-08-15',
                time: '19:00',
                type: 'kulucka',
                status: 'completed',
                location: 'Online',
                participants: 38
                /* images: [
                    'assets/imgs/events/hukuk-kulucka-1.jpg',
                    'assets/imgs/events/hukuk-kulucka-2.jpg'
                ] */
            },
            {
                id: 3,
                title: 'Sürdürülebilirlik - Karadelik 2',
                description: 'Çevresel sürdürülebilirlik ve iş dünyasındaki uygulamaları üzerine kapsamlı araştırma.',
                date: '2025-08-22',
                time: '15:30',
                type: 'karadelik',
                status: 'completed',
                location: 'Online',
                participants: 52
                /* images: [
                    'assets/imgs/events/surdurulebilirlik-1.jpg',
                    'assets/imgs/events/surdurulebilirlik-2.jpg',
                    'assets/imgs/events/surdurulebilirlik-3.jpg',
                    'assets/imgs/events/surdurulebilirlik-4.jpg'
                ] */
            },
            {
                id: 4,
                title: 'Ekonomi ve Ticaret - Workshop',
                description: 'Modern ekonomi teorileri ve girişimcilik üzerine interaktif workshop.',
                date: '2025-08-22',
                time: '18:00',
                type: 'kulucka',
                status: 'completed',
                location: 'Online',
                participants: 41
                /* images: [
                    'assets/imgs/avatar-1.jpg',
                    'assets/imgs/avatar-2.jpg',
                    'assets/imgs/avatar-3.jpg'
                ] */
            },
            {
                id: 5,
                title: 'Tarih - Karadelik 3',
                description: 'Türk tarihinde dönüm noktaları ve toplumsal değişimler analizi.',
                date: '2025-09-10',
                time: '14:00',
                type: 'karadelik',
                status: 'completed',
                location: 'Online',
                participants: 38
                /* images: [
                    'assets/imgs/events/tarih-karadelik-1.jpg',
                    'assets/imgs/events/tarih-karadelik-2.jpg'
                ] */
            },
            
            // Yaklaşan Etkinlikler
            {
                id: 6,
                title: 'Psikoloji ve Sosyoloji - Karadelik 4',
                description: 'Toplumsal psikoloji ve davranış kalıpları üzerine interdisipliner yaklaşım.',
                date: '2025-10-05',
                time: '14:00',
                type: 'karadelik',
                status: 'upcoming',
                location: 'Online',
                participants: null
                /* images: [
                    'assets/imgs/events/psikoloji-sosyoloji-1.jpg'
                ] */
            },
            {
                id: 7,
                title: 'Sanat ve Zanaat - Kuluçka Atölyesi',
                description: 'Geleneksel el sanatları uzmanı ile praktik atölye çalışması.',
                date: '2025-10-05',
                time: '16:30',
                type: 'kulucka',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/sanat-zanaat-atolye.jpg'
            },
            {
                id: 8,
                title: 'Sanayi ve Teknoloji - Karadelik 5',
                description: 'Endüstri 4.0 ve gelecekteki teknolojik dönüşümler üzerine araştırma.',
                date: '2025-10-12',
                time: '13:00',
                type: 'karadelik',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/sanayi-teknoloji.jpg'
            },
            {
                id: 9,
                title: 'Teknoloji ve Gelecek - Panel',
                description: 'Teknoloji uzmanları ile yapay zeka ve dijital dönüşüm paneli.',
                date: '2025-10-12',
                time: '19:00',
                type: 'kulucka',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/teknoloji-gelecek.jpg'
            },
            {
                id: 10,
                title: 'Medya ve İletişim - Karadelik 6',
                description: 'Sosyal medyanın toplumsal etkileri ve bilgi kirliliği araştırması.',
                date: '2025-10-20',
                time: '15:00',
                type: 'karadelik',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/medya-sosyal.jpg'
            },
            {
                id: 11,
                title: 'İletişim Stratejileri - Workshop',
                description: 'Etkili iletişim teknikleri ve sunum becerileri geliştirme atölyesi.',
                date: '2025-10-20',
                time: '17:30',
                type: 'kulucka',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/iletisim-stratejileri.jpg'
            },
            {
                id: 12,
                title: 'Edebiyat - Karadelik 7',
                description: 'Modern Türk edebiyatı ve sosyal değişim ilişkisi üzerine araştırma.',
                date: '2025-11-02',
                time: '14:30',
                type: 'karadelik',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/edebiyat-modern.jpg'
            },
            {
                id: 13,
                title: 'Yaratıcı Yazım - Kuluçka',
                description: 'Ünlü yazar ile yaratıcı yazım teknikleri ve edebiyat söyleşisi.',
                date: '2025-11-02',
                time: '18:00',
                type: 'kulucka',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/yaratici-yazim.jpg'
            },
            {
                id: 14,
                title: 'Sürdürülebilirlik - Karadelik 8',
                description: 'Çevre politikaları ve iklim değişikliği üzerine derinlemesine analiz.',
                date: '2025-11-15',
                time: '13:30',
                type: 'karadelik',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/cevre-politikalari.jpg'
            },
            {
                id: 15,
                title: 'Yeşil Girişimcilik - Panel',
                description: 'Çevre dostu girişimciler ile sürdürülebilir iş modelleri paneli.',
                date: '2025-11-15',
                time: '16:00',
                type: 'kulucka',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/yesil-girisimcilik.jpg'
            },
            {
                id: 16,
                title: 'Çevre ve Toplum - Açık Oturum',
                description: 'Çevre aktivistleri ile iklim krizi ve toplumsal çözümler tartışması.',
                date: '2025-11-15',
                time: '19:30',
                type: 'special',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/cevre-toplum.jpg'
            },
            {
                id: 17,
                title: 'MARS Yıl Sonu Değerlendirmesi',
                description: 'Proje katılımcıları ile yıllık değerlendirme ve gelecek planları toplantısı.',
                date: '2025-12-10',
                time: '15:00',
                type: 'special',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/yil-sonu-degerlendirme.jpg'
            },
            {
                id: 18,
                title: 'Gelecek Vizyonu - Kuluçka Finali',
                description: 'Tüm alanlardan uzmanlarla gelecek öngörüleri ve vizyon paylaşımı.',
                date: '2025-12-10',
                time: '18:30',
                type: 'kulucka',
                status: 'upcoming',
                location: 'Online',
                participants: null
                // image: 'assets/imgs/events/gelecek-vizyonu.jpg'
            }
        ];
    }

    createCalendarHTML() {
        const container = document.querySelector('#events-calendar-container');
        if (!container) return;

        container.innerHTML = `
            <div class="events-calendar">
                <div class="calendar-header">
                    <div class="calendar-nav prev">
                        <button id="prev-month"><i class="ti-angle-left"></i></button>
                    </div>
                    <h3 id="calendar-title"></h3>
                    <div class="calendar-nav next">
                        <button id="next-month"><i class="ti-angle-right"></i></button>
                    </div>
                </div>
                <div class="calendar-grid">
                    ${this.days.map(day => `<div class="calendar-day-header">${day}</div>`).join('')}
                    ${Array(42).fill().map((_, i) => `<div class="calendar-day-slot" data-day="${i}"></div>`).join('')}
                </div>
            </div>
            
            <div class="event-details">
                <div class="event-tabs">
                    <button class="event-tab active" data-tab="upcoming">Yaklaşan Etkinlikler</button>
                    <button class="event-tab" data-tab="past">Geçmiş Etkinlikler</button>
                </div>
                
                <div id="upcoming-events" class="event-list active">
                    <!-- Yaklaşan etkinlikler buraya yüklenecek -->
                </div>
                
                <div id="past-events" class="event-list">
                    <!-- Geçmiş etkinlikler buraya yüklenecek -->
                </div>
            </div>

            <!-- Event Modal -->
            <div id="event-modal" class="event-modal">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <div id="modal-event-content">
                        <!-- Event details will be loaded here -->
                    </div>
                </div>
            </div>
        `;
    }

    renderCalendar() {
        const title = document.getElementById('calendar-title');
        const daySlots = document.querySelectorAll('.calendar-day-slot');
        
        if (!title || !daySlots.length) return;

        title.textContent = `${this.months[this.currentMonth]} ${this.currentYear}`;

        // Ay bilgilerini al
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        
        // Pazartesi ile başlamak için ayarlama
        const dayOfWeek = firstDay.getDay();
        const mondayStart = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        startDate.setDate(startDate.getDate() - mondayStart);

        // Takvim günlerini oluştur
        const today = new Date();
        
        daySlots.forEach((slot, i) => {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            
            const isCurrentMonth = currentDate.getMonth() === this.currentMonth;
            const isToday = this.isSameDay(currentDate, today);
            const hasEvent = this.hasEventOnDate(currentDate);
            const eventsOnDate = this.getEventsOnDate(currentDate);
            const eventCount = eventsOnDate.length;
            const eventTypes = eventsOnDate.map(e => e.type);
            const hasMultipleEvents = eventCount > 1;
            const isPast = hasEvent && eventsOnDate.some(e => e.status === 'completed');
            
            let classes = ['calendar-day'];
            if (!isCurrentMonth) classes.push('other-month');
            if (isToday) classes.push('today');
            if (hasEvent) {
                classes.push('has-event');
                if (hasMultipleEvents) {
                    classes.push('multiple-events');
                } else {
                    classes.push(eventTypes[0]);
                }
                if (isPast) classes.push('past');
            }
            
            // Etkinlik göstergelerini oluştur
            let eventIndicators = '';
            if (hasEvent) {
                if (hasMultipleEvents) {
                    eventIndicators = '<div class="event-indicators">';
                    for (let j = 0; j < Math.min(eventCount, 3); j++) {
                        eventIndicators += '<div class="event-indicator"></div>';
                    }
                    eventIndicators += '</div>';
                } else {
                    eventIndicators = '<div class="event-indicator"></div>';
                }
            }
            
            // calendar-day-slot class'ını koru, diğerlerini ekle
            classes.unshift('calendar-day-slot');
            slot.className = classes.join(' ');
            slot.setAttribute('data-date', this.formatDate(currentDate));
            slot.innerHTML = `
                <div class="day-number">${currentDate.getDate()}</div>
                ${eventIndicators}
            `;
        });
    }

    renderEventLists() {
        const upcomingContainer = document.getElementById('upcoming-events');
        const pastContainer = document.getElementById('past-events');
        
        if (!upcomingContainer || !pastContainer) return;

        const upcomingEvents = this.events.filter(event => event.status === 'upcoming');
        const pastEvents = this.events.filter(event => event.status === 'completed');

        // Yaklaşan etkinlikler
        if (upcomingEvents.length > 0) {
            upcomingContainer.innerHTML = upcomingEvents.map(event => this.createEventHTML(event)).join('');
        } else {
            upcomingContainer.innerHTML = '<div class="no-events">Henüz planlanmış etkinlik bulunmuyor.</div>';
        }

        // Geçmiş etkinlikler
        if (pastEvents.length > 0) {
            pastContainer.innerHTML = pastEvents.map(event => this.createEventHTML(event)).join('');
        } else {
            pastContainer.innerHTML = '<div class="no-events">Henüz tamamlanmış etkinlik bulunmuyor.</div>';
        }
    }

    createEventHTML(event) {
        const date = new Date(event.date);
        const formattedDate = this.formatDateTurkish(date);
        const typeText = event.type === 'karadelik' ? 'Karadelik' : 
                        event.type === 'kulucka' ? 'Kuluçka' : 'Özel Etkinlik';
        
        // Fotoğraf desteği geçici olarak devre dışı
        /* 
        const primaryImage = event.images ? event.images[0] : (event.image || 'assets/imgs/events/default-event.jpg');
        const imageCount = event.images ? event.images.length : (event.image ? 1 : 0);
        */
        
        return `
            <div class="event-item ${event.type} ${event.status === 'completed' ? 'past' : ''}" data-event-id="${event.id}">
                <div class="event-content-full">
                    <div class="event-date">${formattedDate}</div>
                    <div class="event-title">${event.title}</div>
                    <div class="event-type-badge-inline">${typeText}</div>
                    <div class="event-description">${event.description}</div>
                    <div class="event-meta">
                        <span><i class="ti-time"></i> ${event.time}</span>
                        <span><i class="ti-location-pin"></i> ${event.location}</span>
                        ${event.participants ? `<span><i class="ti-user"></i> ${event.participants} katılımcı</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Tüm event'leri document üzerinden dinle (event delegation)
        document.addEventListener('click', (e) => {
            // Prev month button
            if (e.target.closest('#prev-month')) {
                e.preventDefault();
                this.previousMonth();
                return;
            }
            
            // Next month button
            if (e.target.closest('#next-month')) {
                e.preventDefault();
                this.nextMonth();
                return;
            }
            
            // Event tabs
            if (e.target.closest('.event-tab')) {
                const targetTab = e.target.closest('.event-tab').dataset.tab;
                this.switchTab(targetTab);
                return;
            }
            
            // Calendar day clicks
            if (e.target.closest('.calendar-day.has-event')) {
                const date = e.target.closest('.calendar-day').dataset.date;
                this.showEventsForDate(date);
                return;
            }
            
            // Event item clicks
            if (e.target.closest('.event-item')) {
                const eventId = parseInt(e.target.closest('.event-item').dataset.eventId);
                this.showEventDetails(eventId);
                return;
            }
            
            // Modal close
            if (e.target.id === 'event-modal' || e.target.classList.contains('modal-close')) {
                this.closeModal();
                return;
            }
        });
        
        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    previousMonth() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
        this.renderCalendar();
    }

    nextMonth() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
        this.renderCalendar();
    }

    switchTab(targetTab) {
        document.querySelectorAll('.event-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.event-list').forEach(list => list.classList.remove('active'));
        
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}-events`).classList.add('active');
    }

    showEventsForDate(dateStr) {
        const eventsForDate = this.events.filter(event => event.date === dateStr);
        if (eventsForDate.length > 0) {
            if (eventsForDate.length === 1) {
                this.showEventDetails(eventsForDate[0].id);
            } else {
                this.showMultipleEventsModal(eventsForDate, dateStr);
            }
        }
    }

    showMultipleEventsModal(events, dateStr) {
        const modal = document.getElementById('event-modal');
        const content = document.getElementById('modal-event-content');
        
        if (!modal || !content) return;

        const date = new Date(dateStr);
        const formattedDate = this.formatDateTurkish(date);
        
        let eventsHTML = `
            <h3>${formattedDate} - Günün Etkinlikleri</h3>
            <p class="mb-4">Bu tarihte ${events.length} etkinlik bulunmaktadır:</p>
            <div class="daily-events-list">
        `;
        
        events.forEach((event, index) => {
            const typeText = event.type === 'karadelik' ? 'Karadelik' : 
                           event.type === 'kulucka' ? 'Kuluçka' : 'Özel Etkinlik';
            const statusText = event.status === 'completed' ? 'Tamamlandı' : 'Yaklaşan';
            const statusClass = event.status === 'completed' ? 'past' : '';
            
            eventsHTML += `
                <div class="daily-event-item ${event.type} ${statusClass}" data-event-id="${event.id}">
                    <div class="event-time-badge">${event.time}</div>
                    <div class="daily-event-content">
                        <h5>${event.title}</h5>
                        <p>${event.description}</p>
                        <div class="event-meta">
                            <span><i class="ti-bookmark"></i> ${typeText}</span>
                            <span><i class="ti-flag"></i> ${statusText}</span>
                            <span><i class="ti-location-pin"></i> ${event.location}</span>
                            ${event.participants ? `<span><i class="ti-user"></i> ${event.participants} katılımcı</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        eventsHTML += `</div>`;
        content.innerHTML = eventsHTML;
        modal.classList.add('show');
        
        // Daily event items'a click event ekle
        content.querySelectorAll('.daily-event-item').forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                const eventId = parseInt(e.currentTarget.dataset.eventId);
                this.showEventDetails(eventId);
            });
        });
    }

    showEventDetails(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (!event) return;

        const modal = document.getElementById('event-modal');
        const content = document.getElementById('modal-event-content');
        
        if (!modal || !content) return;

        const date = new Date(event.date);
        const formattedDate = this.formatDateTurkish(date);
        const typeText = event.type === 'karadelik' ? 'Karadelik' : 
                        event.type === 'kulucka' ? 'Kuluçka' : 'Özel Etkinlik';
        const statusText = event.status === 'completed' ? 'Tamamlandı' : 'Yaklaşan';

        // Fotoğraf gösterimi geçici olarak devre dışı
        /* 
        const images = event.images || (event.image ? [event.image] : ['assets/imgs/events/default-event.jpg']);
        const imageGalleryHTML = this.createImageGallery(images);
        */

        content.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-meta mb-3">
                <span><i class="ti-calendar"></i> ${formattedDate}</span>
                <span><i class="ti-time"></i> ${event.time}</span>
                <span><i class="ti-bookmark"></i> ${typeText}</span>
                <span><i class="ti-flag"></i> ${statusText}</span>
            </div>
            <p>${event.description}</p>
            <div class="event-meta">
                <span><i class="ti-location-pin"></i> ${event.location}</span>
                ${event.participants ? `<span><i class="ti-user"></i> ${event.participants} katılımcı</span>` : ''}
            </div>
        `;

        modal.classList.add('show');
        
        // Fotoğraf galerisi etkileşimlerini başlat - geçici olarak devre dışı
        // this.initImageGallery();
    }

    createImageGallery(images) {
        if (!images || images.length === 0) {
            return `<div class="modal-event-image">
                <img src="assets/imgs/events/default-event.jpg" alt="Varsayılan" onerror="this.style.display='none'">
            </div>`;
        }
        
        if (images.length === 1) {
            return `<div class="modal-event-image">
                <img src="${images[0]}" alt="Etkinlik fotoğrafı" onerror="this.src='assets/imgs/events/default-event.jpg'">
            </div>`;
        }
        
        // Çoklu fotoğraf için galeri
        return `
            <div class="modal-image-gallery">
                <div class="main-image">
                    <img id="main-gallery-image" src="${images[0]}" alt="Ana fotoğraf" onerror="this.src='assets/imgs/events/default-event.jpg'">
                    <div class="image-counter">
                        <span id="current-image-index">1</span> / ${images.length}
                    </div>
                    ${images.length > 1 ? `
                        <button class="gallery-nav prev" id="gallery-prev"><i class="ti-angle-left"></i></button>
                        <button class="gallery-nav next" id="gallery-next"><i class="ti-angle-right"></i></button>
                    ` : ''}
                </div>
                <div class="thumbnail-strip">
                    ${images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image-index="${index}">
                            <img src="${img}" alt="Küçük resim ${index + 1}" onerror="this.src='assets/imgs/events/default-event.jpg'">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    initImageGallery() {
        const mainImage = document.getElementById('main-gallery-image');
        const currentIndexSpan = document.getElementById('current-image-index');
        const prevBtn = document.getElementById('gallery-prev');
        const nextBtn = document.getElementById('gallery-next');
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        if (!mainImage || thumbnails.length <= 1) return;
        
        let currentIndex = 0;
        const images = Array.from(thumbnails).map(thumb => thumb.querySelector('img').src);
        
        const updateGallery = (index) => {
            mainImage.src = images[index];
            currentIndexSpan.textContent = index + 1;
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };
        
        // Thumbnail clicks
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => updateGallery(index));
        });
        
        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                updateGallery(newIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                updateGallery(newIndex);
            });
        }
        
        // Keyboard navigation
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                updateGallery(newIndex);
            } else if (e.key === 'ArrowRight') {
                const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                updateGallery(newIndex);
            }
        };
        
        document.addEventListener('keydown', handleKeyDown);
        
        // Modal kapandığında keyboard listener'ı temizle
        const modal = document.getElementById('event-modal');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (!modal.classList.contains('show')) {
                        document.removeEventListener('keydown', handleKeyDown);
                        observer.disconnect();
                    }
                }
            });
        });
        observer.observe(modal, { attributes: true });
    }

    closeModal() {
        const modal = document.getElementById('event-modal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // Yardımcı fonksiyonlar
    hasEventOnDate(date) {
        const dateStr = this.formatDate(date);
        return this.events.some(event => event.date === dateStr);
    }

    getEventsOnDate(date) {
        const dateStr = this.formatDate(date);
        return this.events.filter(event => event.date === dateStr);
    }

    getEventTypeOnDate(date) {
        const dateStr = this.formatDate(date);
        const event = this.events.find(e => e.date === dateStr);
        return event ? event.type : '';
    }

    isEventPast(date) {
        const dateStr = this.formatDate(date);
        const event = this.events.find(e => e.date === dateStr);
        return event ? event.status === 'completed' : false;
    }

    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    formatDate(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    formatDateTurkish(date) {
        const day = date.getDate();
        const month = this.months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
}

// DOM yüklendiğinde takvimi başlat
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#events-calendar-container')) {
        new MarsEventsCalendar();
    }
});