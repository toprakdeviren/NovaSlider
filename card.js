(() => {
    'use strict';

    const CAROUSEL_ID = 'productCarousel';
    const CONFIG = {
        animationDuration: 300,
        swipeThreshold: 50,
        touchMovementScaleFactor: 0.6,
        initialLoadDelay: 600,
        notificationTimeout: 3500,
        debounceResizeTime: 150
    };

    const ICONS = {
        heart: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`,
        eye: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
        star: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.543 2.86c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>`,
        cart: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.44M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>`,
        chatBubble: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a.375.375 0 01.265-.109c.635-.058 1.27-.145 1.903-.257C17.79 15.995 19.5 14.6 19.5 12.751c0-1.446-.767-2.752-1.903-3.462C16.331 8.69 15.174 8.5 13.95 8.5c-1.223 0-2.379.19-3.442.539C8.628 9.45 7.5 10.754 7.5 12.251v.501z" /></svg>`,
        checkCircle: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        tv: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m-3.75-3.75V15a3 3 0 013-3h3a3 3 0 013 3v1.5m-9 3.75h9A2.25 2.25 0 0021 18v-6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12v6a2.25 2.25 0 002.25 2.25z" /></svg>`,
        gamepad: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448c.019-.104.039-.207.06-.311m-4.8 4.8A14.952 14.952 0 018.41 9.632m5.96 5.96c.346.054.69.101 1.043.135a14.963 14.963 0 01-5.841 2.58m5.841-2.58a14.962 14.962 0 012.58-5.841m2.58 5.841a14.927 14.927 0 015.841-2.58M9.632 8.41a14.935 14.935 0 012.58-5.84m-2.58 5.84c-.346-.054-.69-.101-1.043-.135a14.963 14.963 0 005.841-2.58m-5.841 2.58A14.927 14.927 0 003.75 14.37m10.82-5.96A14.926 14.926 0 0012.12 3.75M3.75 14.37a14.952 14.952 0 014.66-8.418m0 16.836a14.952 14.952 0 01-4.66-8.418m16.836 0a14.952 14.952 0 01-4.66 8.418m0-16.836a14.952 14.952 0 014.66 8.418" /></svg>`,
        camera: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>`,
        watch: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        headphones: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l9.75 9.75M9.343 17.314a5.25 5.25 0 01-7.424 0M12 21.75l3.375-3.375M8.625 3.375L12 6.75M3.375 8.625L6.75 12m14.25 0a2.25 2.25 0 01-2.25 2.25H12a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 0112 4.5h4.5a2.25 2.25 0 012.25 2.25v7.5z" /></svg>`,
    };

    const PRODUCTS_DATA = [
        { id: 1, imageSrc: 'https://picsum.photos/id/3/600/400', name: 'PURSHE Mini Projector, Portable HD Display for Home Cinema & Outdoor Movies', rating: 4.3, reviews: 61, sku: 'BOCRYVL494', price: '$41.32', category: { name: 'Electronics', class: 'electronics', iconSvg: ICONS.tv }, featured: false, actionButtons: [{label: ICONS.heart, aria: 'Add to favorites'}, {label: ICONS.eye, aria: 'View details'}] },
        { id: 2, imageSrc: 'https://picsum.photos/id/96/600/400', name: 'XBOX Wireless Controller - Electric Volt Special Edition with Textured Grips', rating: 4.8, reviews: 1205, sku: 'GAMEXCTRL01', price: '$59.99', category: { name: 'Gaming', class: 'gaming', iconSvg: ICONS.gamepad }, featured: true, actionButtons: [{label: ICONS.heart, aria: 'Add to favorites'}, {label: ICONS.eye, aria: 'View details'}] },
        { id: 3, imageSrc: 'https://picsum.photos/id/250/600/400', name: 'Polaroid Now i-Type Instant Camera - Retro Blue Design, Autofocus', rating: 4.5, reviews: 350, sku: 'POLAROIDNOW', price: '$99.99', category: { name: 'Photography', class: 'photo', iconSvg: ICONS.camera }, featured: false, actionButtons: [{label: ICONS.heart, aria: 'Add to favorites'}, {label: ICONS.eye, aria: 'View details'}] },
        { id: 4, imageSrc: 'https://picsum.photos/id/160/600/400', name: 'FitVerse Smart Watch Pro - Advanced Health & Fitness Tracker with GPS', rating: 4.6, reviews: 890, sku: 'SMTWCHPROX', price: '$129.50', category: { name: 'Wearables', class: 'wearables', iconSvg: ICONS.watch }, featured: false, actionButtons: [{label: ICONS.heart, aria: 'Add to favorites'}, {label: ICONS.eye, aria: 'View details'}] },
        { id: 5, imageSrc: 'https://picsum.photos/id/127/600/400', name: 'AuraSound Noise Cancelling Over-Ear Headphones - Onyx Black, Hi-Fi Audio', rating: 4.9, reviews: 2100, sku: 'AURAHDP005', price: '$199.00', category: { name: 'Audio', class: 'audio', iconSvg: ICONS.headphones }, featured: true, actionButtons: [{label: ICONS.heart, aria: 'Add to favorites'}, {label: ICONS.eye, aria: 'View details'}] }
    ];

    const DOM = {
        carouselContainer: null,
        cardsWrapper: null,
        prevArrow: null,
        nextArrow: null,
        paginationDotsContainer: null,
        loadingOverlay: null,
        progressBar: null,
    };

    const STATE = {
        currentIndex: 0,
        cardWidthWithMargin: 0,
        isAnimating: false,
        isLoaded: false,
        isInteracting: false,
        touchData: { startX: 0, currentX: 0, startTime: 0, isDragging: false },
        resizeTimeoutId: null,
        imagePreloadPromises: []
    };

    const Utils = {
        getStarRatingHTML(rating, totalStars = 5) {
            const fullStar = `<span aria-hidden="true">★</span>`;
            const emptyStar = `<span class="empty-star" aria-hidden="true">☆</span>`;
            return Array.from({ length: totalStars }, (_, i) =>
                (i + 1 <= rating + 0.25) ? fullStar : emptyStar
            ).join('');
        },
        showNotification(message, type = 'success', iconSvg = ICONS.checkCircle) {
            document.querySelectorAll('.notification.visible').forEach(n => n.classList.remove('visible'));
            setTimeout(() => document.querySelectorAll('.notification').forEach(n => n.remove()), 500);

            const notificationEl = document.createElement('div');
            notificationEl.className = `notification ${type}`;
            notificationEl.innerHTML = `${iconSvg} <span>${message}</span>`;

            const anchor = document.getElementById('notification-anchor') || document.body;
            anchor.appendChild(notificationEl);


            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    notificationEl.classList.add('visible');
                });
            });

            setTimeout(() => {
                notificationEl.classList.remove('visible');
                setTimeout(() => notificationEl.remove(), 500);
            }, CONFIG.notificationTimeout);
        },
        debounce(func, delay) {
            let timeoutId;
            return (...args) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        },
        preloadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
                img.onerror = (err) => reject(new Error(`Failed to load image: ${src}. Error: ${err.type}`));
            });
        }
    };

    const Carousel = {
        init() {
            DOM.carouselContainer = document.getElementById(CAROUSEL_ID);
            if (!DOM.carouselContainer) {
                console.error(`Carousel container with ID #${CAROUSEL_ID} not found.`);
                return;
            }

            DOM.cardsWrapper = DOM.carouselContainer.querySelector('.cards-wrapper');
            DOM.prevArrow = DOM.carouselContainer.querySelector('.prev-arrow');
            DOM.nextArrow = DOM.carouselContainer.querySelector('.next-arrow');
            DOM.paginationDotsContainer = DOM.carouselContainer.querySelector('.pagination-dots');
            DOM.loadingOverlay = DOM.carouselContainer.querySelector('.loading-overlay');
            DOM.progressBar = DOM.carouselContainer.querySelector('.progress-bar');

            const requiredElements = [DOM.cardsWrapper, DOM.prevArrow, DOM.nextArrow, DOM.paginationDotsContainer, DOM.loadingOverlay, DOM.progressBar];
            if (requiredElements.some(el => !el)) {
                console.error("One or more essential carousel elements are missing. Check HTML structure and CSS selectors.");
                return;
            }

            DOM.loadingOverlay.classList.add('visible');
            STATE.imagePreloadPromises = PRODUCTS_DATA.map(product => Utils.preloadImage(product.imageSrc).catch(e => e));

            Promise.allSettled(STATE.imagePreloadPromises).then(results => {
                results.filter(result => result.status === 'rejected').forEach(result => console.warn(result.reason));
                
                setTimeout(() => {
                    this.renderCards();
                    this.renderPaginationDots();
                    this.calculateCardWidth();
                    this.setInitialPosition();
                    this.bindEvents();
                    STATE.isLoaded = true;
                    DOM.loadingOverlay.classList.remove('visible');
                    this.updateAccessibility();
                    
                    const activeCard = DOM.cardsWrapper.querySelector('.card.active');
                    if (activeCard) activeCard.focus({ preventScroll: true });

                }, CONFIG.initialLoadDelay);
            });
        },

        renderCards() {
            const fragment = document.createDocumentFragment();
            PRODUCTS_DATA.forEach((product, index) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card';
                cardEl.dataset.index = index;
                cardEl.setAttribute('role', 'tabpanel');
                cardEl.setAttribute('id', `product-panel-${product.id}`);
                cardEl.setAttribute('aria-labelledby', `product-tab-${product.id}`);
                cardEl.setAttribute('tabindex', '-1');

                const featuredBadgeHTML = product.featured ?
                    `<div class="card__featured-badge" aria-hidden="true">${ICONS.star} FEATURED</div>` : '';

                const actionButtonsHTML = product.actionButtons.map(btn =>
                    `<button type="button" class="card__image-action-btn" aria-label="${btn.aria}">${btn.label}</button>`
                ).join('');

                cardEl.innerHTML = `
                    <div class="card__top">
                        <div class="card__category-badge ${product.category.class}">
                            ${product.category.iconSvg}
                            <span>${product.category.name}</span>
                        </div>
                    </div>
                    ${featuredBadgeHTML}
                    <div class="card__image-container">
                        <img src="${product.imageSrc}" alt="${product.name}" class="card__product-image" loading="lazy" fetchpriority="${index < 2 ? 'high' : 'auto'}">
                        <div class="card__image-actions">${actionButtonsHTML}</div>
                    </div>
                    <h3 class="card__product-name" title="${product.name}">${product.name}</h3>
                    ${product.sku ? `<span class="card__product-sku">SKU: ${product.sku}</span>` : ''}
                    <div class="card__rating-reviews" aria-label="Rating: ${product.rating.toFixed(1)} out of 5 stars, ${product.reviews.toLocaleString()} reviews.">
                        <span class="card__stars" aria-hidden="true">${Utils.getStarRatingHTML(product.rating)}</span>
                        <span aria-hidden="true">${product.rating.toFixed(1)}</span>
                        <span class="card__review-count" aria-hidden="true">
                            ${ICONS.chatBubble} ${product.reviews.toLocaleString()}
                        </span>
                    </div>
                    <div class="card__price">${product.price}</div>
                    <button type="button" class="card__action-button primary-action">
                        ${ICONS.cart} View Product
                    </button>
                `;
                fragment.appendChild(cardEl);
            });
            DOM.cardsWrapper.appendChild(fragment);
        },

        renderPaginationDots() {
            const fragment = document.createDocumentFragment();
            PRODUCTS_DATA.forEach((product, index) => {
                const dotEl = document.createElement('button');
                dotEl.type = 'button';
                dotEl.className = 'pagination-dot';
                dotEl.setAttribute('role', 'tab');
                dotEl.setAttribute('id', `product-tab-${product.id}`);
                dotEl.setAttribute('aria-controls', `product-panel-${product.id}`);
                dotEl.setAttribute('aria-label', `Go to Product ${index + 1}: ${product.name}`);
                dotEl.dataset.index = index;
                fragment.appendChild(dotEl);
            });
            DOM.paginationDotsContainer.innerHTML = '';
            DOM.paginationDotsContainer.appendChild(fragment);
        },

        calculateCardWidth() {
            const firstCard = DOM.cardsWrapper.querySelector('.card');
            if (firstCard) {
                const style = window.getComputedStyle(firstCard);
                STATE.cardWidthWithMargin = firstCard.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }
        },

        setInitialPosition() {
            STATE.currentIndex = 0;
            this.update(false);
        },

        update(animate = true, customOffset = 0) {
            if (STATE.isAnimating && animate) return;
            if (animate) STATE.isAnimating = true;

            const baseOffset = (DOM.carouselContainer.offsetWidth / 2) - (STATE.cardWidthWithMargin / 2);
            const targetTranslateX = baseOffset - (STATE.currentIndex * STATE.cardWidthWithMargin) + customOffset;

            DOM.cardsWrapper.style.transitionProperty = animate ? 'transform' : 'none';
            DOM.cardsWrapper.style.transitionDuration = animate ? `${CONFIG.animationDuration}ms` : '0ms';
            DOM.cardsWrapper.style.transitionTimingFunction = animate ? 'var(--timing-ease-out-quint)' : 'linear';
            DOM.cardsWrapper.style.transform = `translateX(${targetTranslateX}px)`;

            this.updateAccessibility();
            this.updateProgressBar();

            if (animate) {
                const animationEndHandler = () => {
                    STATE.isAnimating = false;
                    const activeCard = DOM.cardsWrapper.querySelector('.card.active');
                    if (activeCard && document.activeElement !== activeCard &&
                        (!DOM.carouselContainer.contains(document.activeElement) || document.activeElement.matches('.nav-arrow'))) {
                       activeCard.focus({ preventScroll: true });
                    }
                };
                DOM.cardsWrapper.addEventListener('transitionend', animationEndHandler, { once: true });
            } else if (!STATE.isLoaded) {
                 const activeCard = DOM.cardsWrapper.querySelector('.card.active');
                 if (activeCard) activeCard.focus({ preventScroll: true });
            }
        },

        updateAccessibility() {
            DOM.cardsWrapper.querySelectorAll('.card').forEach((card, index) => {
                const isActive = index === STATE.currentIndex;
                card.classList.toggle('active', isActive);
                card.setAttribute('aria-selected', isActive);
                card.setAttribute('tabindex', isActive ? '0' : '-1');
            });

            DOM.paginationDotsContainer.querySelectorAll('.pagination-dot').forEach((dot, index) => {
                const isActive = index === STATE.currentIndex;
                dot.classList.toggle('active', isActive);
                dot.setAttribute('aria-selected', isActive);
                dot.setAttribute('tabindex', isActive ? '0' : '-1');
            });
        },

        updateProgressBar() {
            if (DOM.progressBar && PRODUCTS_DATA.length > 0) {
                const percentage = ((STATE.currentIndex + 1) / PRODUCTS_DATA.length) * 100;
                DOM.progressBar.style.width = `${percentage}%`;
                DOM.progressBar.setAttribute('aria-valuenow', Math.round(percentage));
            }
        },

        goToSlide(index) {
            if (index === STATE.currentIndex || STATE.isAnimating || index < 0 || index >= PRODUCTS_DATA.length) return;
            STATE.currentIndex = index;
            this.update();
        },

        next() {
            if (STATE.isAnimating) return;
            STATE.currentIndex = (STATE.currentIndex + 1) % PRODUCTS_DATA.length;
            this.update();
        },

        prev() {
            if (STATE.isAnimating) return;
            STATE.currentIndex = (STATE.currentIndex - 1 + PRODUCTS_DATA.length) % PRODUCTS_DATA.length;
            this.update();
        },

        bindEvents() {
            DOM.prevArrow.addEventListener('click', () => this.prev());
            DOM.nextArrow.addEventListener('click', () => this.next());

            DOM.paginationDotsContainer.addEventListener('click', (e) => {
                const dot = e.target.closest('.pagination-dot');
                if (dot?.dataset.index) {
                    this.goToSlide(parseInt(dot.dataset.index, 10));
                }
            });

            DOM.cardsWrapper.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                if (!card) return;

                const cardIndex = parseInt(card.dataset.index, 10);
                if (cardIndex !== STATE.currentIndex) {
                    this.goToSlide(cardIndex);
                } else {
                    if (e.target.closest('.card__action-button')) {
                        Utils.showNotification(`"${PRODUCTS_DATA[STATE.currentIndex].name}" added to cart (demo).`, 'success', ICONS.cart);
                    } else if (e.target.closest('.card__image-action-btn')) {
                        const actionButton = e.target.closest('.card__image-action-btn');
                        const actionLabel = actionButton.getAttribute('aria-label') || 'Action';
                        Utils.showNotification(`${actionLabel} for "${PRODUCTS_DATA[STATE.currentIndex].name}" (demo).`);
                    }
                }
            });

            DOM.carouselContainer.addEventListener('keydown', this.handleKeyDown.bind(this));
            DOM.cardsWrapper.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
            DOM.cardsWrapper.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
            DOM.cardsWrapper.addEventListener('touchend', this.handleTouchEnd.bind(this));
            DOM.cardsWrapper.addEventListener('touchcancel', this.handleTouchEnd.bind(this));
            window.addEventListener('resize', Utils.debounce(this.handleResize.bind(this), CONFIG.debounceResizeTime));
        },

        handleKeyDown(e) {
            const activeCard = DOM.cardsWrapper.querySelector('.card.active');
            if (activeCard?.contains(e.target) && e.target !== activeCard && ['Tab', 'Enter', ' '].includes(e.key)) {
                return;
            }

            let handled = true;
            switch (e.key) {
                case 'ArrowLeft': case 'Left': this.prev(); break;
                case 'ArrowRight': case 'Right': this.next(); break;
                case 'Home': this.goToSlide(0); break;
                case 'End': this.goToSlide(PRODUCTS_DATA.length - 1); break;
                case 'Tab':
                    if (DOM.paginationDotsContainer.contains(e.target)) {
                        const dots = Array.from(DOM.paginationDotsContainer.querySelectorAll('[role="tab"]'));
                        const currentDotIndex = dots.indexOf(e.target);
                        if (currentDotIndex !== -1) {
                            const nextIndex = (currentDotIndex + (e.shiftKey ? -1 : 1) + dots.length) % dots.length;
                            dots[nextIndex].focus();
                        } else {
                             handled = false;
                        }
                    } else {
                        handled = false;
                    }
                    break;
                default: handled = false;
            }
            if (handled) e.preventDefault();
        },

        handleResize() {
            this.calculateCardWidth();
            this.update(false);
        },

        handleTouchStart(e) {
            if (STATE.isAnimating) return;
            STATE.isInteracting = true;
            STATE.touchData.isDragging = true;
            STATE.touchData.startX = e.touches[0].clientX;
            STATE.touchData.currentX = STATE.touchData.startX;
            STATE.touchData.startTime = Date.now();
            DOM.cardsWrapper.style.transitionProperty = 'none';
        },

        handleTouchMove(e) {
            if (!STATE.touchData.isDragging || STATE.isAnimating) return;
            STATE.touchData.currentX = e.touches[0].clientX;
            const diffX = STATE.touchData.currentX - STATE.touchData.startX;

            if (Math.abs(diffX) > 10) {
                if (e.cancelable) e.preventDefault();
            }
            this.update(false, diffX * CONFIG.touchMovementScaleFactor);
        },

        handleTouchEnd() {
            if (!STATE.touchData.isDragging) return;
            STATE.touchData.isDragging = false;
            STATE.isInteracting = false;

            const diffX = STATE.touchData.currentX - STATE.touchData.startX;
            const elapsedTime = Date.now() - STATE.touchData.startTime;
            const velocity = Math.abs(diffX / elapsedTime);

            DOM.cardsWrapper.style.transitionProperty = '';

            if (Math.abs(diffX) > CONFIG.swipeThreshold || (velocity > 0.3 && elapsedTime < 300 && Math.abs(diffX) > 10)) {
                diffX < 0 ? this.next() : this.prev();
            } else {
                this.update();
            }
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => Carousel.init());
    } else {
        Carousel.init();
    }
})();