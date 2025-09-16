<template>
  <v-app>

    <v-main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <v-container fluid class="hero-content px-6">
            <!-- Navigation within Hero -->
            <div class="hero-navbar">
              <v-container fluid class="px-0">
                <!-- Desktop Navigation -->
                <v-row align="center" justify="center" no-gutters class="d-none d-lg-flex">
                  <v-col cols="12" class="d-flex justify-center flex-wrap align-center">
                    <v-btn text class="nav-link mx-3">Sample Page</v-btn>
                    <v-btn text class="nav-link mx-3">Sample Page</v-btn>
                    <v-btn text class="nav-link mx-3">Sample Page</v-btn>
                    <v-btn text class="nav-link mx-3">Sample Page</v-btn>
                    <v-btn text class="nav-link mx-3">Sample Page</v-btn>
                    <v-btn text class="nav-link mx-3">Sample Page</v-btn>
                    <v-btn 
                      variant="outlined" 
                      class="book-now-btn ml-4"
                      color="white"
                    >
                      Log In
                    </v-btn>
                  </v-col>
                </v-row>
                
                <!-- Mobile Navigation -->
                <v-row align="center" justify="center" no-gutters class="d-flex d-lg-none">
                  <v-col cols="auto">
                    <v-btn 
                      icon
                      class="mobile-menu-btn"
                      @click="mobileMenuOpen = !mobileMenuOpen"
                      color="white"
                    >
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            
            <!-- Mobile Menu Drawer -->
            <v-navigation-drawer
              v-model="mobileMenuOpen"
              location="top"
              temporary
              class="mobile-drawer"
              height="auto"
            >
              <div class="mobile-menu-content">
                <v-list class="mobile-nav-list">
                  <v-list-item>
                    <v-btn text class="mobile-nav-link" block @click="closeMobileMenu">Sample Page</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text class="mobile-nav-link" block @click="closeMobileMenu">Sample Page</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text class="mobile-nav-link" block @click="closeMobileMenu">Sample Page</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text class="mobile-nav-link" block @click="closeMobileMenu">Sample Page</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text class="mobile-nav-link" block @click="closeMobileMenu">Sample Page</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text class="mobile-nav-link" block @click="closeMobileMenu">Sample Page</v-btn>
                  </v-list-item>
                  <v-list-item class="mt-4">
                    <v-btn 
                      variant="outlined" 
                      class="mobile-login-btn"
                      color="white"
                      block
                      @click="closeMobileMenu"
                    >
                      Log In
                    </v-btn>
                  </v-list-item>
                </v-list>
              </div>
            </v-navigation-drawer>
            
            <!-- Hero Text Content -->
            <div class="hero-text-content text-center">
              <h1 class="hero-title mb-4">
                Voyage Of Pure<br>Connection
              </h1>
              <p class="hero-subtitle mb-8">
                Experience life onboard, designed for those who travel differently.
              </p>
            </div>
          </v-container>
          
          <!-- Booking Form at bottom of hero -->
          <div class="hero-form-area">
            <v-container fluid class="px-6">
              <v-row justify="center">
                <v-col cols="12">
                  <!-- Advanced Booking Form -->
                  <v-card class="booking-form mx-auto" max-width="1200" elevation="24" rounded="xl">
                    <v-card-text class="pa-8">
                      <v-row align="end" no-gutters>
                        <!-- Start Date -->
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-grow-1">
                          <div class="booking-field-container">
                            <label class="field-label">Start Date</label>
                            <v-text-field
                              v-model="bookingForm.startDate"
                              variant="outlined"
                              hide-details
                              density="comfortable"
                              class="booking-field"
                              readonly
                            >
                              <template v-slot:prepend-inner>
                                <v-icon size="18" color="teal">mdi-calendar</v-icon>
                              </template>
                            </v-text-field>
                          </div>
                        </v-col>

                        <!-- End Date -->
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-grow-1">
                          <div class="booking-field-container">
                            <label class="field-label">End Date</label>
                            <v-text-field
                              v-model="bookingForm.endDate"
                              variant="outlined"
                              hide-details
                              density="comfortable"
                              class="booking-field"
                              readonly
                            >
                              <template v-slot:prepend-inner>
                                <v-icon size="18" color="teal">mdi-calendar</v-icon>
                              </template>
                            </v-text-field>
                          </div>
                        </v-col>

                        <!-- Charter Type -->
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-grow-1">
                          <div class="booking-field-container">
                            <label class="field-label">Charter Type</label>
                            <v-select
                              v-model="bookingForm.charterType"
                              :items="charterTypes"
                              variant="outlined"
                              hide-details
                              density="comfortable"
                              class="booking-field"
                              item-title="name"
                              item-value="value"
                            >
                              <template v-slot:prepend-inner>
                                <v-icon size="18" color="teal">mdi-sail-boat</v-icon>
                              </template>
                            </v-select>
                          </div>
                        </v-col>

                        <!-- Nights -->
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-shrink-0" style="min-width: 120px;">
                          <div class="booking-field-container">
                            <label class="field-label">Nights</label>
                            <v-select
                              v-model="bookingForm.nights"
                              :items="nightOptions"
                              variant="outlined"
                              hide-details
                              density="comfortable"
                              class="booking-field"
                            >
                              <template v-slot:prepend-inner>
                                <v-icon size="18" color="teal">mdi-moon-waning-crescent</v-icon>
                              </template>
                            </v-select>
                          </div>
                        </v-col>

                        <!-- Passengers -->
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-grow-1">
                          <div class="booking-field-container">
                            <label class="field-label">Passengers</label>
                            <v-select
                              v-model="bookingForm.passengers"
                              :items="passengerOptions"
                              variant="outlined"
                              hide-details
                              density="comfortable"
                              class="booking-field"
                            >
                              <template v-slot:prepend-inner>
                                <v-icon size="18" color="teal">mdi-account-group</v-icon>
                              </template>
                            </v-select>
                          </div>
                        </v-col>

                        <!-- Departure -->
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-grow-1">
                          <div class="booking-field-container">
                            <label class="field-label">Departure</label>
                            <v-select
                              v-model="bookingForm.departure"
                              :items="departureOptions"
                              variant="outlined"
                              hide-details
                              density="comfortable"
                              class="booking-field"
                            >
                              <template v-slot:prepend-inner>
                                <v-icon size="18" color="teal">mdi-clock-time-four</v-icon>
                              </template>
                            </v-select>
                          </div>
                        </v-col>

                        <!-- Search Button -->
                        <v-col cols="12" lg="auto" class="px-2 d-flex align-end flex-shrink-0">
                          <div class="booking-field-container">
                            <label class="field-label" style="visibility: hidden;">Button</label>
                            <v-btn 
                              color="teal darken-2"
                              size="large" 
                              class="search-btn"
                              height="56"
                              variant="elevated"
                              elevation="8"
                              min-width="180"
                            >
                              <v-icon left size="18" class="mr-1">mdi-magnify</v-icon>
                              Check Availability
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="our-story-section py-16">
        <v-container>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" lg="8" class="text-center">
              <h4 class="our-story-title mb-6">Our Story</h4>
              <h2 class="section-title modern-luxury-title mb-6">
                Modern Luxury <span class="experiences-text">Experiences</span>
              </h2>
              <p class="section-description mb-8">
                Whether it's culinary experiences, live music or luxury stays, Kove Collection takes pride in inspiring and delighting the senses. Our vibrant restaurants and bars and five-star hotels, spas and boutique have all been created with the vision to curate and host world-class experiences that enrich our guests' lives and live on in their memories. Because, after all, modern luxury is first and foremost about how you make people feel.
              </p>
              <v-btn 
                class="explore-voyages-btn"
                size="large"
                variant="elevated"
                elevation="4"
              >
                Explore All Voyages
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Private Caribbean Sailing Vacation Section -->
      <section class="caribbean-section py-16">
        <v-container>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="section-title">
                Private Caribbean <span class="text-teal">Sailing Vacation</span>
              </h2>
              <p class="section-subtitle mt-4">
                Discover our exclusive collection of premium yachts designed for unforgettable moments
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" v-for="yacht in yachtTypes" :key="yacht.id">
              <v-card class="yacht-card" elevation="4">
                <v-img 
                  :src="yacht.image" 
                  height="300"
                  cover
                  class="yacht-image"
                >
                  <div class="yacht-overlay">
                    <h3 class="yacht-name">{{ yacht.name }}</h3>
                  </div>
                </v-img>
                <v-card-text class="pa-6">
                  <div class="yacht-details">
                    <div class="yacht-specs">
                      <div class="spec-item">
                        <span class="spec-label">Capacity:</span>
                        <span class="spec-value">{{ yacht.capacity }}</span>
                      </div>
                      <div class="spec-item">
                        <span class="spec-label">Length:</span>
                        <span class="spec-value">{{ yacht.length }}</span>
                      </div>
                      <div class="spec-item">
                        <span class="spec-label">Starting from:</span>
                        <span class="spec-price">${{ yacht.price }}/day</span>
                      </div>
                    </div>
                    <v-btn 
                      color="teal darken-2" 
                      variant="outlined" 
                      block 
                      class="mt-4 yacht-btn"
                    >
                      View Details
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- World Class Yachts Introduction -->
      <section class="world-class-section py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6">
              <v-img 
                src="/assets/image 13.png"
                class="world-class-image"
                cover
              ></v-img>
            </v-col>
            <v-col cols="12" md="6" class="pl-md-8">
              <div class="world-class-content">
                <h2 class="section-title mb-6">
                  Explore Our <br>World Class<br>
                  <span class="text-teal">Yachts</span>
                </h2>
                <p class="section-description mb-6">
                  Our fleet represents the pinnacle of maritime luxury, featuring state-of-the-art 
                  amenities and impeccable design. Each yacht is meticulously maintained to ensure 
                  your experience exceeds every expectation.
                </p>
                <v-btn 
                  color="teal darken-2" 
                  size="large"
                  class="explore-btn"
                >
                  Explore Fleet
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Voyage 50 Introduction -->
      <section class="voyage-50-section py-16 bg-grey-lighten-5">
        <v-container>
          <v-row justify="center" class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="section-title mb-4">
                Introducing <span class="text-teal">Voyage 50</span>
              </h2>
              <p class="section-subtitle">
                The epitome of luxury and performance on the water
              </p>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" lg="10">
              <v-img 
                src="/assets/Copy of express-exterior-4.jpg"
                class="voyage-50-image"
                cover
              ></v-img>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-8">
            <v-col cols="12" md="8" class="text-center">
              <v-btn 
                color="teal darken-2" 
                size="large"
                class="discover-btn"
              >
                Discover More
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Seasonal Offers -->
      <section class="seasonal-section py-16">
        <v-container>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="section-title">
                Seasonal <span class="text-teal">Offers</span>
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
              cols="12" 
              sm="6" 
              md="3" 
              v-for="offer in seasonalOffers" 
              :key="offer.id"
            >
              <v-card class="seasonal-card" elevation="2">
                <v-img 
                  :src="offer.image" 
                  height="250"
                  cover
                  class="seasonal-image"
                >
                  <div class="seasonal-overlay">
                    <h4 class="seasonal-title">{{ offer.title }}</h4>
                    <p class="seasonal-description">{{ offer.description }}</p>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Fleet Showcase -->
      <section class="fleet-section py-16 bg-grey-lighten-5">
        <v-container>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="section-title">
                Explore Our <span class="text-teal">Fleet</span>
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
              cols="12" 
              sm="6" 
              md="3" 
              v-for="yacht in fleetYachts" 
              :key="yacht.id"
            >
              <v-card class="fleet-card" elevation="4">
                <v-img 
                  :src="yacht.image" 
                  height="300"
                  cover
                  class="fleet-image"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Activities Section -->
      <section class="activities-section py-16">
        <v-container>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="section-title">
                Explore Our <span class="text-teal">Activities</span>
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
              cols="12" 
              sm="6" 
              md="4" 
              v-for="activity in activities" 
              :key="activity.id"
            >
              <v-card class="activity-card" elevation="2">
                <v-img 
                  :src="activity.image" 
                  height="250"
                  cover
                  class="activity-image"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-8">
            <v-col cols="12" class="text-center">
              <v-btn 
                color="teal darken-2" 
                size="large"
                class="view-all-btn"
              >
                View All Activities
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Charter Consultant Section -->
      <section class="consultant-section py-16 bg-grey-lighten-4">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6">
              <div class="consultant-content">
                <h2 class="section-title mb-6">
                  Get in Touch with<br>your Personal<br>
                  <span class="text-teal">Charter Consultant</span>
                </h2>
                <p class="section-description mb-6">
                  Our expert team is here to help you plan the perfect yacht experience. 
                  From selecting the ideal vessel to customizing your itinerary, 
                  we ensure every detail meets your expectations.
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="contact-card" elevation="8">
                <v-card-text class="pa-8">
                  <v-form>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="First Name"
                          variant="outlined"
                          hide-details="auto"
                          class="mb-4"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Last Name"
                          variant="outlined"
                          hide-details="auto"
                          class="mb-4"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field
                      label="Email"
                      type="email"
                      variant="outlined"
                      hide-details="auto"
                      class="mb-4"
                    ></v-text-field>
                    <v-text-field
                      label="Phone"
                      variant="outlined"
                      hide-details="auto"
                      class="mb-4"
                    ></v-text-field>
                    <v-textarea
                      label="Message"
                      variant="outlined"
                      rows="4"
                      hide-details="auto"
                      class="mb-6"
                    ></v-textarea>
                    <v-btn 
                      color="teal darken-2" 
                      size="large" 
                      block
                      class="contact-btn"
                    >
                      Send Message
                    </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Footer -->
      <v-footer class="footer-section bg-teal-darken-3" padless>
        <v-container>
          <v-row class="py-8">
            <v-col cols="12" md="3">
              <div class="footer-logo mb-4">
                <h3 class="text-white">Voyage</h3>
                <p class="text-grey-lighten-2 mt-2">
                  Premium yacht rentals for unforgettable experiences
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <h4 class="text-white mb-4">Services</h4>
              <div class="footer-links">
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Yacht Rentals
                </v-btn><br>
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Private Charters
                </v-btn><br>
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Corporate Events
                </v-btn><br>
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Wedding Venues
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <h4 class="text-white mb-4">Company</h4>
              <div class="footer-links">
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  About Us
                </v-btn><br>
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Our Fleet
                </v-btn><br>
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Careers
                </v-btn><br>
                <v-btn text size="small" class="text-grey-lighten-2 pa-0 mb-2 justify-start">
                  Contact
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <h4 class="text-white mb-4">Contact Info</h4>
              <div class="footer-contact">
                <p class="text-grey-lighten-2 mb-2">
                  <v-icon size="small" class="mr-2">mdi-phone</v-icon>
                  +1 (555) 123-4567
                </p>
                <p class="text-grey-lighten-2 mb-2">
                  <v-icon size="small" class="mr-2">mdi-email</v-icon>
                  info@voyage.com
                </p>
                <p class="text-grey-lighten-2 mb-4">
                  <v-icon size="small" class="mr-2">mdi-map-marker</v-icon>
                  Miami, Florida
                </p>
                <div class="social-links">
                  <v-btn icon size="small" class="mr-2" color="white">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn icon size="small" class="mr-2" color="white">
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn icon size="small" class="mr-2" color="white">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider color="white" opacity="0.3"></v-divider>
          <v-row class="py-4">
            <v-col cols="12" class="text-center">
              <p class="text-grey-lighten-2 mb-0">
                &copy; 2024 Voyage. All rights reserved.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'YachtLanding',
  data() {
    return {
      mobileMenuOpen: false,
      bookingForm: {
        startDate: '07 29 2024',
        endDate: '07 30 2024',
        charterType: 'All-inclusive',
        nights: '3',
        passengers: '8',
        departure: '10:00pm'
      },
      charterTypes: [
        { name: 'All-inclusive', value: 'All-inclusive' },
        { name: 'Bareboat', value: 'Bareboat' },
        { name: 'Skippered', value: 'Skippered' },
        { name: 'Crewed', value: 'Crewed' }
      ],
      nightOptions: ['1', '2', '3', '4', '5', '6', '7', '14', '21'],
      passengerOptions: ['1', '2', '4', '6', '8', '10', '12', '15', '20'],
      departureOptions: ['9:00am', '10:00am', '2:00pm', '6:00pm', '10:00pm'],
      yachtTypes: [
        {
          id: 1,
          name: 'Treasure Hunter',
          image: '/assets/hero-background.jpg',
          capacity: '8 guests',
          length: '45 ft',
          price: '1,500'
        },
        {
          id: 2,
          name: 'Nowhere Else',
          image: '/assets/treasure-hunter-11 3.png',
          capacity: '12 guests',
          length: '55 ft',
          price: '2,200'
        },
        {
          id: 3,
          name: 'Home Away',
          image: '/assets/treasure-hunter-11 4 (1).png',
          capacity: '10 guests',
          length: '50 ft',
          price: '1,800'
        }
      ],
      seasonalOffers: [
        {
          id: 1,
          title: 'Summer Special',
          description: 'Book now and save 20%',
          image: '/assets/Copy of express-exterior-4.jpg'
        },
        {
          id: 2,
          title: 'Weekend Getaway',
          description: 'Perfect for short trips',
          image: '/assets/Copy of express-guests-11.jpg'
        },
        {
          id: 3,
          title: 'Corporate Packages',
          description: 'Team building events',
          image: '/assets/Copy of express-service-7.jpg'
        },
        {
          id: 4,
          title: 'Romantic Sunset',
          description: 'Intimate dinner cruises',
          image: '/assets/Copy of Thumbnail-3.png'
        }
      ],
      fleetYachts: [
        {
          id: 1,
          image: '/assets/fleet 1.png'
        },
        {
          id: 2,
          image: '/assets/fleet 3.png'
        },
        {
          id: 3,
          image: '/assets/fleet 4.png'
        },
        {
          id: 4,
          image: '/assets/treasure-hunter-11 4 (1).png'
        }
      ],
      activities: [
        {
          id: 1,
          image: '/assets/activity 1.png'
        },
        {
          id: 2,
          image: '/assets/activity 2.png'
        },
        {
          id: 3,
          image: '/assets/activity 3.png'
        },
        {
          id: 4,
          image: '/assets/activity 4.png'
        },
        {
          id: 5,
          image: '/assets/activity 5.png'
        },
        {
          id: 6,
          image: '/assets/activity 1.png'
        }
      ]
    }
  },
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    openDatePicker(type) {
      console.log('Opening date picker for:', type);
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    initScrollAnimations() {
      // Create intersection observer for scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe all sections and cards
      const elementsToAnimate = document.querySelectorAll(
        '.our-story-section, .caribbean-section, .world-class-section, .voyage-50-section, .seasonal-section, .fleet-section, .activities-section, .consultant-section, .yacht-card, .seasonal-card, .fleet-card, .activity-card'
      );
      
      elementsToAnimate.forEach(element => {
        observer.observe(element);
      });
    }
  }
}
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Global Styles */
* {
  font-family: 'Inter', sans-serif;
}

/* Scroll Animations */
.our-story-section,
.caribbean-section,
.world-class-section,
.voyage-50-section,
.seasonal-section,
.fleet-section,
.activities-section,
.consultant-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.yacht-card,
.seasonal-card,
.fleet-card,
.activity-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.yacht-card:nth-child(2) {
  transition-delay: 0.1s;
}

.yacht-card:nth-child(3) {
  transition-delay: 0.2s;
}

.seasonal-card:nth-child(2) {
  transition-delay: 0.1s;
}

.seasonal-card:nth-child(3) {
  transition-delay: 0.2s;
}

.seasonal-card:nth-child(4) {
  transition-delay: 0.3s;
}

.fleet-card:nth-child(2) {
  transition-delay: 0.1s;
}

.fleet-card:nth-child(3) {
  transition-delay: 0.2s;
}

.fleet-card:nth-child(4) {
  transition-delay: 0.3s;
}

.activity-card:nth-child(2) {
  transition-delay: 0.1s;
}

.activity-card:nth-child(3) {
  transition-delay: 0.2s;
}

.activity-card:nth-child(4) {
  transition-delay: 0.15s;
}

.activity-card:nth-child(5) {
  transition-delay: 0.25s;
}

.activity-card:nth-child(6) {
  transition-delay: 0.35s;
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Navigation Styles - Now integrated in hero */

.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

.nav-link {
  color: white !important;
  font-weight: 500;
  text-transform: none;
  background: none !important;
  box-shadow: none !important;
}

.nav-link::before {
  background: none !important;
}

.nav-link:hover {
  background: none !important;
  box-shadow: none !important;
}

/* Mobile Menu Styles */
.mobile-menu-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px !important;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.05);
}

.mobile-drawer {
  background: rgba(0, 0, 0, 0.95) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu-content {
  padding: 20px;
}

.mobile-nav-list {
  background: transparent !important;
}

.mobile-nav-link {
  color: white !important;
  font-weight: 500;
  text-transform: none;
  background: none !important;
  box-shadow: none !important;
  text-align: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-link:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateX(5px);
}

.mobile-login-btn {
  border: 2px solid white !important;
  color: white !important;
  font-weight: 600;
  text-transform: none;
  padding: 12px 24px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  margin-top: 10px;
}

.mobile-login-btn:hover {
  background-color: white !important;
  color: #135252 !important;
}

.book-now-btn {
  border: 2px solid white !important;
  color: white !important;
  font-weight: 600;
  text-transform: none;
  padding: 12px 28px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
}

.book-now-btn:hover {
  background-color: white !important;
  color: #006064 !important;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: 
    linear-gradient(135deg, 
      rgba(0, 105, 92, 0.3) 0%, 
      rgba(0, 0, 0, 0.4) 25%, 
      rgba(0, 0, 0, 0.6) 50%, 
      rgba(0, 77, 77, 0.4) 75%, 
      rgba(0, 0, 0, 0.8) 100%
    ),
    linear-gradient(to bottom, 
      rgba(0, 0, 0, 0.1) 0%, 
      rgba(0, 0, 0, 0.3) 30%, 
      rgba(0, 0, 0, 0.7) 100%
    ),
    url('/assets/hero-background.jpg') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: stretch;
  overflow: visible;
}

.hero-overlay {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  height: 100vh;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.hero-navbar {
  flex-shrink: 0;
  padding: 20px 0;
  z-index: 60;
  display: flex;
  justify-content: center;
  width: 100%;
}

.hero-navbar .v-col {
  display: flex !important;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  z-index: 50;
}

.hero-form-area {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transform: translateY(50%);
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: white;
  opacity: 0.95;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 0 auto;
}

.booking-form {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2) !important;
  position: relative;
  z-index: 10;
}

.booking-form .v-row {
  align-items: end;
  flex-wrap: nowrap;
}

.booking-form .v-col {
  min-width: 0;
}

@media (min-width: 1024px) {
  .booking-form .flex-grow-1 {
    flex: 1 1 0;
    min-width: 140px;
  }
  
  .booking-form .flex-shrink-0 {
    flex: 0 0 auto;
  }
}

.booking-field-container {
  position: relative;
  margin-bottom: 8px;
}

.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #424242;
  margin-bottom: 8px;
  text-transform: capitalize;
}

.booking-field .v-field {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 8px;
}

.booking-field .v-field--focused {
  box-shadow: 0 0 0 2px rgba(0, 105, 92, 0.2);
}

.booking-field .v-field__outline {
  color: rgba(0, 0, 0, 0.2);
}

.booking-field .v-field__outline--focused {
  color: #00695C;
  border-width: 2px;
}

.booking-field .v-input__control .v-field__input {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
}

.hero-text-content {
  margin-bottom: 0;
}


.search-btn {
  height: 56px !important;
  min-width: 180px !important;
  background: linear-gradient(135deg, #00695C 0%, #004d4d 100%) !important;
  text-transform: none;
  font-weight: 700;
  font-size: 0.9rem !important;
  border-radius: 8px;
  color: white !important;
  box-shadow: 0 8px 24px rgba(0, 105, 92, 0.4);
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  padding: 0 20px !important;
  white-space: nowrap;
}

.search-btn:hover {
  background: linear-gradient(135deg, #004d4d 0%, #00382b 100%) !important;
  box-shadow: 0 12px 32px rgba(0, 105, 92, 0.5);
  transform: translateY(-3px);
}

.search-btn .v-icon {
  color: white !important;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.section-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.text-teal {
  color: #00695C !important;
}

/* Our Story Section */
.our-story-section {
  background: #F5F5F5;
  padding-top: 120px !important;
}

.our-story-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.modern-luxury-title {
  color: #135252 !important;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.experiences-text {
  color: #31C9CA !important;
}

.explore-voyages-btn {
  background: #135252 !important;
  color: white !important;
  text-transform: none;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(19, 82, 82, 0.3);
  transition: all 0.3s ease;
}

.explore-voyages-btn:hover {
  background: #0f4142 !important;
  box-shadow: 0 6px 20px rgba(19, 82, 82, 0.4);
  transform: translateY(-2px);
}

/* Caribbean Section */
.caribbean-section {
  background: white;
}

.yacht-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.yacht-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
}

.yacht-image {
  position: relative;
}

.yacht-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px;
}

.yacht-name {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.yacht-details {
  padding: 8px 0;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.spec-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.spec-label {
  color: #666;
  font-weight: 500;
}

.spec-value {
  color: #333;
  font-weight: 600;
}

.spec-price {
  color: #00695C;
  font-weight: 700;
  font-size: 1.1rem;
}

.yacht-btn {
  text-transform: none;
  font-weight: 600;
  border-width: 2px !important;
}

/* World Class Section */
.world-class-section {
  background: white;
}

.world-class-image {
  border-radius: 12px;
}

.world-class-content {
  padding: 20px 0;
}

.explore-btn {
  text-transform: none;
  font-weight: 600;
  padding: 12px 32px;
}

/* Voyage 50 Section */
.voyage-50-section {
  background: #fafafa;
}

.voyage-50-image {
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.discover-btn {
  text-transform: none;
  font-weight: 600;
  padding: 12px 32px;
}

/* Seasonal Offers */
.seasonal-section {
  background: white;
}

.seasonal-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.seasonal-card:hover {
  transform: translateY(-4px);
}

.seasonal-image {
  position: relative;
}

.seasonal-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px;
  color: white;
}

.seasonal-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.seasonal-description {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

/* Fleet Section */
.fleet-section {
  background: #fafafa;
}

.fleet-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.fleet-card:hover {
  transform: scale(1.03);
}

.fleet-image {
  border-radius: 12px;
}

/* Activities Section */
.activities-section {
  background: white;
}

.activity-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-4px);
}

.activity-image {
  border-radius: 12px;
}

.view-all-btn {
  text-transform: none;
  font-weight: 600;
  padding: 12px 32px;
}

/* Consultant Section */
.consultant-section {
  background: #f5f5f5;
}

.contact-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
}

.contact-btn {
  text-transform: none;
  font-weight: 600;
  height: 48px;
}

/* Footer */
.footer-section {
  background: #004d4d !important;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-contact p {
  display: flex;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 8px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .navbar-overlay .v-container {
    padding: 0 24px;
  }
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .world-class-content {
    text-align: center;
    margin-top: 2rem;
  }
  
  .booking-form {
    max-width: 95% !important;
  }
  
  .hero-text-content {
    margin-bottom: 1rem;
  }
  
  .hero-form-area {
    transform: translateY(30%);
  }
  
  .our-story-section {
    padding-top: 100px !important;
  }
  
  .booking-form .v-row {
    flex-direction: column;
  }
  
  .booking-form .v-col {
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
    line-height: 1.2;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-content {
    padding-top: 20px;
  }
  
  .hero-navbar {
    padding: 15px 0;
  }
  
  .booking-form {
    margin: 0 12px !important;
    max-width: calc(100% - 24px) !important;
  }
  
  .booking-form .v-card-text {
    padding: 20px !important;
  }
  
  .booking-field-container {
    margin-bottom: 16px;
  }
  
  .hero-form-area {
    transform: translateY(20%);
  }
  
  .our-story-section {
    padding-top: 80px !important;
  }
  
  .logo-text {
    font-size: 24px;
  }
  
  .book-now-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .search-btn {
    margin-top: 12px;
    height: 56px !important;
    font-size: 0.9rem !important;
    min-width: 150px !important;
    padding: 0 16px !important;
  }
}
</style>
