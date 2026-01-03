// Search functionality initialization
function initSearch() {
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchBarContainer = document.getElementById('searchBarContainer');
    const searchInput = document.getElementById('searchInput');
    const searchCloseBtn = document.getElementById('searchCloseBtn');
    const searchResults = document.getElementById('searchResults');

    if (!searchToggleBtn || !searchBarContainer || !searchInput) return;

    // Get current page info
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentPageTitle = document.title.replace(' - The Student Kitchen', '').trim() || 'Home';

    // Toggle search bar
    searchToggleBtn.addEventListener('click', function() {
        searchBarContainer.classList.toggle('active');
        if (searchBarContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            clearResults();
        }
    });

    // Close search bar
    if (searchCloseBtn) {
        searchCloseBtn.addEventListener('click', function() {
            searchBarContainer.classList.remove('active');
            searchInput.value = '';
            clearResults();
        });
    }

    // Search functionality
    let searchTimeout;
    let currentSearchResults = [];

    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            clearResults();
            return;
        }

        searchTimeout = setTimeout(function() {
            performSearch(query);
        }, 300);
    });

    // Handle Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.trim().toLowerCase();
            if (query.length >= 2) {
                performSearch(query);
            }
        }
        if (e.key === 'Escape') {
            searchBarContainer.classList.remove('active');
            this.value = '';
            clearResults();
        }
    });

    function performSearch(query) {
        const results = [];
        
        // Always search current page dynamically (so it's always up-to-date)
        // Only search main content, exclude header and footer
        const mainContent = document.querySelector('main');
        
        // Search main content only (excludes header and footer)
        if (mainContent) {
            // Comprehensive selector to catch all text content
            const elements = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .card, .stat-text, .program-title, .program-description, .program-preview, .testimonial-text, .testimonial-quote, .news-title, .news-excerpt, article, .section-heading, .section-text, .section-title, .section-subtitle, .about-text, .hero-mission-text, .testimonial-name, .testimonial-author, button, a, span:not([class*="icon"]):not([class*="logo"]), div:not([class*="container"]):not([class*="wrapper"]):not([class*="grid"])');
            
            // Use Set to avoid duplicates
            const textElements = new Set();
            
            // Add elements from specific selector
            elements.forEach(function(el) {
                textElements.add(el);
            });
            
            // Also search for elements with specific classes that might be missed
            const additionalSelectors = mainContent.querySelectorAll('.news-title, .news-excerpt, article, .section-heading, .section-text, .section-title, .section-subtitle, .about-text, .hero-mission-text, .testimonial-name, .testimonial-author, .donation-label, button, a, span, div');
            additionalSelectors.forEach(function(el) {
                // Skip if already added or if it's a container/image/link
                if (textElements.has(el) || el.tagName === 'IMG' || el.tagName === 'A' || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') {
                    return;
                }
                // Skip if it has many children (likely a container)
                if (el.children.length > 8) {
                    return;
                }
                // Add if it has meaningful text content that matches
                const text = el.textContent.trim();
                if (text.length > 5 && text.length < 800 && text.toLowerCase().includes(query)) {
                    // Check if this element is a child of an already-added element
                    let isChild = false;
                    textElements.forEach(function(parentEl) {
                        if (parentEl !== el && parentEl.contains(el)) {
                            isChild = true;
                        }
                    });
                    if (!isChild) {
                        textElements.add(el);
                    }
                }
            });
            
            textElements.forEach(function(el) {
                // Skip if element is in header or footer
                const header = document.querySelector('header, .site-header');
                const footer = document.querySelector('footer, #footer');
                if ((header && header.contains(el)) || (footer && footer.contains(el))) {
                    return;
                }
                
                const text = el.textContent.toLowerCase();
                if (text.includes(query)) {
                    const fullText = el.textContent.trim();
                    const index = fullText.toLowerCase().indexOf(query);
                    const contextStart = Math.max(0, index - 50);
                    const contextEnd = Math.min(fullText.length, index + query.length + 50);
                    const context = fullText.substring(contextStart, contextEnd);
                    const highlighted = context.replace(
                        new RegExp(query, 'gi'),
                        '<span class="search-highlight">$&</span>'
                    );
                    results.push({
                        text: fullText,
                        context: highlighted,
                        page: currentPage,
                        pageTitle: currentPageTitle,
                        isCurrentPage: true,
                        element: el // Store element reference for better scrolling
                    });
                }
            });
        }
        
        // Also search through site-wide index for other pages (if available)
        if (typeof searchIndex !== 'undefined') {
            searchIndex.forEach(function(pageData) {
                // Skip current page since we already searched it dynamically
                if (pageData.page === currentPage) {
                    return;
                }
                
                pageData.content.forEach(function(item) {
                    const text = item.text.toLowerCase();
                    if (text.includes(query)) {
                        const index = text.indexOf(query);
                        const contextStart = Math.max(0, index - 50);
                        const contextEnd = Math.min(text.length, index + query.length + 50);
                        const context = item.text.substring(contextStart, contextEnd);
                        
                        const highlighted = context.replace(
                            new RegExp(query, 'gi'),
                            '<span class="search-highlight">$&</span>'
                        );

                        results.push({
                            text: item.text,
                            context: highlighted,
                            page: pageData.page,
                            pageTitle: pageData.title,
                            type: item.type,
                            author: item.author || null,
                            isCurrentPage: false
                        });
                    }
                });
            });
        }

        // Sort results: prioritize current page results, then exact matches
        results.sort(function(a, b) {
            // Current page results first
            if (a.isCurrentPage && !b.isCurrentPage) return -1;
            if (!a.isCurrentPage && b.isCurrentPage) return 1;
            
            // Then prioritize exact matches
            const aExact = a.text.toLowerCase().indexOf(query) === 0;
            const bExact = b.text.toLowerCase().indexOf(query) === 0;
            if (aExact && !bExact) return -1;
            if (!aExact && bExact) return 1;
            return 0;
        });

        currentSearchResults = results;
        displayResults(results, query);
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-results-item"><p>No results found for "' + query + '"</p></div>';
            searchResults.classList.add('has-results');
            return;
        }

        let html = '';
        // Group results by page
        const resultsByPage = {};
        results.slice(0, 20).forEach(function(result) {
            if (!resultsByPage[result.page]) {
                resultsByPage[result.page] = [];
            }
            resultsByPage[result.page].push(result);
        });

        // Display results grouped by page
        Object.keys(resultsByPage).forEach(function(page) {
            const pageResults = resultsByPage[page];
            const firstResult = pageResults[0];
            
            // Add "Current Page" indicator for the current page
            const pageLabel = firstResult.isCurrentPage ? 
                firstResult.pageTitle + ' <span style="color: #056D70; font-size: 0.85em;">(Current Page)</span>' : 
                firstResult.pageTitle;
            
            html += '<div class="search-results-item search-results-page-header" data-page="' + page + '" data-query="' + query + '">' +
                '<h4>' + pageLabel + '</h4>' +
                '</div>';
            
            pageResults.slice(0, 3).forEach(function(result, index) {
                html += '<div class="search-results-item" data-page="' + result.page + '" data-index="' + index + '" data-query="' + query + '">' +
                    '<p>' + result.context + '</p>' +
                    '</div>';
            });
        });

        searchResults.innerHTML = html;
        searchResults.classList.add('has-results');

        // Add click handlers to navigate to pages
        const resultItems = searchResults.querySelectorAll('.search-results-item');
        resultItems.forEach(function(item) {
            item.addEventListener('click', function() {
                const page = this.getAttribute('data-page');
                const searchQuery = this.getAttribute('data-query') || '';
                const resultIndex = this.getAttribute('data-index');
                
                if (page && page !== currentPage) {
                    // Navigate to the page with search query parameter
                    const url = new URL(page, window.location.origin);
                    if (searchQuery) {
                        url.searchParams.set('search', encodeURIComponent(searchQuery));
                        // If clicking on a specific result (not the header), add index
                        if (resultIndex !== null) {
                            url.searchParams.set('resultIndex', resultIndex);
                        }
                    }
                    window.location.href = url.pathname + url.search;
                    searchBarContainer.classList.remove('active');
                } else if (page === currentPage) {
                    // If clicking on current page result, scroll to it
                    const index = resultIndex !== null ? parseInt(resultIndex) : 0;
                    const pageResults = currentSearchResults.filter(function(r) {
                        return r.page === page && r.isCurrentPage === true;
                    });
                    if (pageResults[index] && searchQuery) {
                        // Use stored element reference if available
                        if (pageResults[index].element && pageResults[index].element.isConnected) {
                            // Element is still in DOM, scroll to it directly
                            pageResults[index].element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            pageResults[index].element.style.backgroundColor = '#fff3cd';
                            pageResults[index].element.style.transition = 'background-color 2s ease';
                            setTimeout(function() {
                                pageResults[index].element.style.backgroundColor = '';
                            }, 2000);
                        } else {
                            // Fallback: find element by text content
                            const mainContent = document.querySelector('main');
                            if (mainContent) {
                                const allElements = mainContent.querySelectorAll('*');
                                const matchingElements = Array.from(allElements).filter(function(el) {
                                    if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'IMG') {
                                        return false;
                                    }
                                    const text = el.textContent.trim().toLowerCase();
                                    return text.length > 0 && text.includes(searchQuery) && el.children.length <= 10;
                                });
                                if (matchingElements[index]) {
                                    matchingElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    matchingElements[index].style.backgroundColor = '#fff3cd';
                                    matchingElements[index].style.transition = 'background-color 2s ease';
                                    setTimeout(function() {
                                        matchingElements[index].style.backgroundColor = '';
                                    }, 2000);
                                }
                            }
                        }
                        searchBarContainer.classList.remove('active');
                    }
                }
            });
        });
    }

    function clearResults() {
        searchResults.innerHTML = '';
        searchResults.classList.remove('has-results');
    }
}

// Function to scroll to search results on page load
function scrollToSearchResult() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const resultIndex = urlParams.get('resultIndex');
    
    if (!searchQuery) return;
    
    // Wait for page to fully load (including header/footer)
    function performScroll() {
        setTimeout(function() {
            performScrollToSearch(searchQuery, resultIndex);
        }, 300);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', performScroll);
    } else {
        performScroll();
    }
}

function performScrollToSearch(query, resultIndex) {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    
    const searchTerm = decodeURIComponent(query).toLowerCase();
    
    // Use comprehensive search to find all matching elements
    const allElements = mainContent.querySelectorAll('*');
    const matchingElements = [];
    
    // First, try specific selectors for common content types
    const specificSelectors = 'h1, h2, h3, h4, h5, h6, p, li, .card, .stat-text, .program-title, .program-description, .program-preview, .testimonial-text, .testimonial-quote, .program-card-content, .about-text, .news-title, .news-excerpt, article, .section-heading, .section-text, .section-title, .section-subtitle, .hero-mission-text, .testimonial-name, .testimonial-author, button, a';
    const specificElements = mainContent.querySelectorAll(specificSelectors);
    
    specificElements.forEach(function(el) {
        const text = el.textContent.trim().toLowerCase();
        if (text.length > 0 && text.includes(searchTerm)) {
            matchingElements.push(el);
        }
    });
    
    // If not enough matches, search more broadly
    if (matchingElements.length === 0 || (resultIndex !== null && parseInt(resultIndex) >= matchingElements.length)) {
        allElements.forEach(function(el) {
            // Skip containers, images, scripts, etc.
            if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'IMG' || el.tagName === 'A') {
                return;
            }
            // Skip if it has many children (likely a container)
            if (el.children.length > 10) {
                return;
            }
            const text = el.textContent.trim().toLowerCase();
            // Only add if it has meaningful text and matches, and isn't already in the array
            if (text.length > 5 && text.length < 1000 && text.includes(searchTerm) && matchingElements.indexOf(el) === -1) {
                matchingElements.push(el);
            }
        });
    }
    
    if (matchingElements.length > 0) {
        // Use specific index if provided, otherwise use first match
        const index = resultIndex !== null ? parseInt(resultIndex) : 0;
        const targetIndex = Math.min(index, matchingElements.length - 1);
        const targetElement = matchingElements[targetIndex];
        
        if (targetElement) {
            // Wait a bit for page to fully render
            setTimeout(function() {
                // Scroll to the element
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Highlight the element briefly
                targetElement.style.backgroundColor = '#fff3cd';
                targetElement.style.transition = 'background-color 2s ease';
                setTimeout(function() {
                    targetElement.style.backgroundColor = '';
                }, 2000);
            }, 200);
            
            // Remove search parameters from URL without reloading
            const url = new URL(window.location);
            url.searchParams.delete('search');
            url.searchParams.delete('resultIndex');
            window.history.replaceState({}, '', url);
        }
    }
}

// Run scroll to search on page load
scrollToSearchResult();
