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
                <!-- Navigation -->
                <v-row align="center" justify="center" no-gutters>
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
              </v-container>
            </div>
            
            <!-- Hero Text Content -->
            <div class="hero-text-content text-center">
              <h1 class="hero-title mb-4">
                Voyage Of Pure<br>Connection
              </h1>
              <p class="hero-subtitle mb-6">
                Experience life onboard, designed for those who travel differently.
              </p>
              <p class="hero-cta mb-8">
                EXPLORE LIFE ONBOARD
              </p>
            </div>
          </v-container>
          
          <!-- Booking Form at bottom of hero -->
          <div class="hero-form-area">
            <v-container fluid class="px-6">
              <v-row justify="center">
                <v-col cols="12">
                  <!-- Advanced Booking Form -->
                  <v-card class="booking-form mx-auto" max-width="1200" elevation="24" rounded="0">
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
                        <v-col cols="12" sm="6" lg="auto" class="px-2 flex-grow-1">
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
          <v-row>
            <v-col cols="12" class="mb-4">
              <h2 class="section-title caribbean-title">
                Private Luxury Caribbean sailing vacation
              </h2>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="4" v-for="yacht in yachtTypes" :key="yacht.id">
              <v-card class="yacht-card-new" elevation="2">
                <div class="yacht-image-container">
                  <v-img 
                    :src="yacht.image" 
                    height="200"
                    cover
                    class="yacht-image-new"
                  ></v-img>
                </div>
                
                <v-card-text class="yacht-content">
                  <h3 class="yacht-title">{{ yacht.name }}</h3>
                  <hr class="yacht-divider">
                  
                  <div class="available-dates">
                    <h4 class="dates-title">Available Dates</h4>
                    <div class="date-chips">
                      <v-chip 
                        v-for="date in yacht.availableDates" 
                        :key="date"
                        class="date-chip"
                        size="small"
                      >
                        {{ date }}
                      </v-chip>
                    </div>
                  </div>
                  
                  <div class="yacht-pricing">
                    <div class="nights-info">{{ yacht.nights }} nights</div>
                    <div class="price-info">per booking starting from {{ yacht.startingPrice }}</div>
                  </div>
                  
                  <div class="yacht-buttons">
                    <v-btn 
                      variant="outlined"
                      class="explore-btn-yacht"
                      block
                    >
                      EXPLORE
                    </v-btn>
                    <v-btn 
                      color="#135252"
                      class="inquire-btn-yacht mt-2"
                      block
                    >
                      INQUIRE NOW
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          
          <v-row justify="center" class="mt-8">
            <v-col cols="auto">
              <v-btn 
                color="#135252"
                size="large"
                class="explore-all-btn"
              >
                EXPLORE ALL VOYAGES
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- World Class Yachts Introduction -->
      <section class="world-class-section py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6" class="pr-md-8">
              <div class="world-class-content">
                <h4 class="yachts-subtitle mb-4">Yachts</h4>
                <h2 class="section-title world-class-title mb-6">
                  Explore Our <br>World Class<br>
                  <span class="text-teal">Yachts</span>
                </h2>
                <p class="section-description world-class-description mb-6">
                  Designed by style visionary Prosper Assouline, each of the suites aboard our yacht features decor inspired by the sea and sky. The largest of their kind within.
                </p>
                <v-btn 
                  color="#135252" 
                  size="large"
                  class="explore-btn world-class-btn"
                >
                  Explore Fleet
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img 
                src="/assets/image 13.png"
                class="world-class-image"
                cover
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Voyage 50 Introduction -->
      <section class="voyage-50-section py-16">
        <v-container>
          <v-row justify="center" class="mb-6">
            <v-col cols="12" class="text-center">
              <h4 class="voyage-50-subtitle mb-3">Yachts</h4>
              <h2 class="voyage-50-title mb-4">
                Introducing Voyage 510
              </h2>
              <div class="voyage-50-description-container">
                <p class="voyage-50-description mb-6">
                  A stunning 150-foot motor yacht, meticulously designed and expertly manned to provide every modern comfort to its guests on deck areas. It offers an unparalleled charter experience. The yacht accommodates up to 15 guests in 9 lavish cabins, ensuring a personalized and unforgettable journey. A professional crew of 9 is committed to providing exceptional service and catering to every need.
                </p>
              </div>
              <v-btn 
                color="#135252" 
                size="large"
                class="voyage-50-btn mb-8"
              >
                EXPLORE ALL VOYAGES
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <div class="voyage-50-image-full">
          <v-img 
            src="/assets/Copy of Thumbnail-3.png"
            class="voyage-50-image"
            height="600"
            cover
          ></v-img>
        </div>
      </section>

      <!-- Seasonal Offers -->
      <section class="seasonal-section py-4">
        <v-container>
          <v-row class="mb-3">
            <v-col cols="12">
              <h4 class="seasonal-subtitle mb-2">Yachts</h4>
              <h1 class="seasonal-title mb-2">
                <span class="seasonal-text">Seasonal</span> <span class="offers-text">Offers</span>
              </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
              cols="12" 
              md="4" 
              v-for="offer in seasonalOffers.slice(0, 3)" 
              :key="offer.id"
              class="d-flex"
            >
              <v-card class="seasonal-card-new" elevation="0">
                <div class="seasonal-image-container">
                  <v-img 
                    :src="offer.image" 
                    height="300"
                    cover
                    class="seasonal-image-new"
                  ></v-img>
                  <div class="yacht-experience-badge">
                    Yacht Experience
                  </div>
                </div>
                <v-card-text class="seasonal-content">
                  <h3 class="seasonal-offer-title">{{ offer.title }}</h3>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Fleet Showcase -->
      <section class="fleet-section py-16">
        <v-container>
          <v-row justify="center" class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="fleet-section-title">
                <span class="explore-text">Explore Our</span> <span class="fleet-text">Fleet</span>
              </h2>
            </v-col>
          </v-row>
          <div class="fleet-carousel-container">
            <div class="fleet-images-grid">
              <div 
                v-for="(yacht, index) in fleetYachts" 
                :key="yacht.id"
                class="fleet-image-item"
              >
                <v-img 
                  :src="yacht.image" 
                  height="280"
                  cover
                  class="fleet-image-new"
                ></v-img>
                <div class="fleet-nav-dot fleet-nav-left" v-if="index === 0">
                  <v-icon size="45" color="#135252">mdi-circle</v-icon>
                </div>
                <div class="fleet-nav-dot fleet-nav-right" v-if="index === fleetYachts.length - 1">
                  <v-icon size="45" color="#135252">mdi-circle</v-icon>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </section>

      <!-- Activities Section -->
      <section class="activities-section py-16">
        <v-container>
          <v-row justify="center" class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="activities-section-title">
                <span class="explore-activities-text">Explore Our</span> <span class="activities-text">Activities</span>
              </h2>
            </v-col>
          </v-row>
          <div class="activities-grid">
            <div class="activities-row-1">
              <div 
                v-for="activity in activities.slice(0, 3)" 
                :key="activity.id"
                class="activity-image-item"
              >
                <v-img 
                  :src="activity.image" 
                  height="200"
                  cover
                  class="activity-image-new"
                ></v-img>
              </div>
            </div>
            <div class="activities-row-2">
              <div 
                v-for="activity in activities.slice(3, 6)" 
                :key="activity.id"
                class="activity-image-item"
              >
                <v-img 
                  :src="activity.image" 
                  height="200"
                  cover
                  class="activity-image-new"
                ></v-img>
              </div>
            </div>
          </div>
          <v-row justify="center" class="mt-12">
            <v-col cols="auto">
              <v-btn 
                color="#135252" 
                size="large"
                class="explore-activities-btn"
              >
                EXPLORE ALL VOYAGES
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Charter Consultant Section -->
      <section class="consultant-section py-16 bg-grey-lighten-4">
        <v-container>
          <v-row align="start">
            <v-col cols="12" md="5">
              <div class="consultant-content">
                <h2 class="consultant-section-title mb-6">
                  Get in Touch with<br>your Personal<br>
                  <span class="charter-consultant-text">Charter Consultant</span>
                </h2>
                <p class="consultant-description mb-8">
                  Ut dignissim ac libero sed consequat. Odio sed risus quis dui<br>
                  magna bibendum erat mauris quis et.
                </p>
                
                <div class="contact-info-section">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <div class="contact-info-group mb-6">
                        <h4 class="contact-info-heading">PHONE</h4>
                        <div class="contact-info-items">
                          <div class="contact-item">
                            <v-icon size="16" color="#135252" class="mr-2">mdi-phone</v-icon>
                            <span class="contact-text">1-800-958-2898 x975</span>
                          </div>
                          <div class="contact-item">
                            <v-icon size="16" color="#135252" class="mr-2">mdi-phone</v-icon>
                            <span class="contact-text">1-844-445-8489 x892</span>
                          </div>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="contact-info-group">
                        <h4 class="contact-info-heading">EMAIL</h4>
                        <div class="contact-info-items">
                          <div class="contact-item">
                            <v-icon size="16" color="#135252" class="mr-2">mdi-email</v-icon>
                            <span class="contact-text">support@yachtera.com</span>
                          </div>
                          <div class="contact-item">
                            <v-icon size="16" color="#135252" class="mr-2">mdi-email</v-icon>
                            <span class="contact-text">office@yachtera.com</span>
                          </div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="7">
              <div class="contact-form-container">
                <v-form class="contact-form">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <div class="form-field-group">
                        <label class="form-label">Your First Name</label>
                        <v-text-field
                          placeholder="enter your full first name"
                          variant="outlined"
                          hide-details="auto"
                          class="contact-input mb-4"
                        ></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="form-field-group">
                        <label class="form-label">Your last Name</label>
                        <v-text-field
                          placeholder="enter your full last name"
                          variant="outlined"
                          hide-details="auto"
                          class="contact-input mb-4"
                        ></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <div class="form-field-group">
                        <label class="form-label">Your Phone</label>
                        <v-text-field
                          placeholder="enter your phone number"
                          variant="outlined"
                          hide-details="auto"
                          class="contact-input mb-4"
                        ></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="form-field-group">
                        <label class="form-label">Your Email</label>
                        <v-text-field
                          placeholder="enter your email address"
                          type="email"
                          variant="outlined"
                          hide-details="auto"
                          class="contact-input mb-4"
                        ></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                  <div class="form-field-group">
                    <label class="form-label">Your Message</label>
                    <v-textarea
                      placeholder="enter your full message here"
                      variant="outlined"
                      rows="5"
                      hide-details="auto"
                      class="contact-input mb-6"
                    ></v-textarea>
                  </div>
                  <div class="form-button-container">
                    <v-btn 
                      class="send-message-btn"
                    >
                      Send Message
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Footer -->
      <v-footer class="footer-section" padless>
        <v-container>
          <v-row class="py-12">
            <v-col cols="12" md="6">
              <div class="footer-main-content">
                <div class="footer-logo mb-4">
                  <v-icon size="20" color="white" class="mr-2">mdi-ferry</v-icon>
                  <h3 class="footer-brand-title">VOYAGE CHARTERS</h3>
                </div>
                <p class="footer-description mb-6">
                  From selecting the perfect yacht to crafting bespoke itineraries, our team of seasoned yacht specialists ensures every aspect of your voyage is flawlessly orchestrated.
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="footer-column">
                    <h4 class="footer-column-title mb-4">Company</h4>
                    <div class="footer-links">
                      <p class="footer-link mb-2">Fleet</p>
                      <p class="footer-link mb-2">About us</p>
                      <p class="footer-link mb-2">Services</p>
                      <p class="footer-link mb-2">Contact Us</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
                  <div class="footer-column">
                    <h4 class="footer-column-title mb-4">Resources</h4>
                    <div class="footer-links">
                      <p class="footer-link mb-2">Destinations</p>
                      <p class="footer-link mb-2">Yacht Guide</p>
                      <p class="footer-link mb-2">Documentation</p>
                      <p class="footer-link mb-2">Blog & News</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
                  <div class="footer-column">
                    <h4 class="footer-column-title mb-4">Help</h4>
                    <div class="footer-links">
                      <p class="footer-link mb-2">Customer Support</p>
                      <p class="footer-link mb-2">Terms & Conditions</p>
                      <p class="footer-link mb-2">Privacy Policy</p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <div class="footer-divider-section">
            <v-divider color="#0A142D" opacity="1"></v-divider>
            <div class="footer-chat-button-container">
              <v-btn class="chat-btn" size="large">
                <v-icon size="18" class="mr-2">mdi-chat-outline</v-icon>
                Start Live Chat
              </v-btn>
            </div>
          </div>
          <v-row class="py-1 mb-16">
            <v-col cols="12" sm="6">
              <p class="footer-copyright mb-0">
                Copyright © 2024 Yachtera
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="text-sm-right text-left">
              <p class="footer-copyright mb-0">
                Design By TokoTema
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
          availableDates: ['Aug 4 - 15, 2025', 'Aug 15 - 19, 2025', 'Aug 19 - 26, 2025', 'Aug 26 - 29, 2025'],
          nights: '7',
          startingPrice: '$50,000'
        },
        {
          id: 2,
          name: 'Nowhere Else',
          image: '/assets/treasure-hunter-11 3.png',
          availableDates: ['Aug 4 - 15, 2025', 'Aug 15 - 19, 2025', 'Aug 19 - 26, 2025', 'Aug 26 - 29, 2025'],
          nights: '7',
          startingPrice: '$65,000'
        },
        {
          id: 3,
          name: 'Home Away',
          image: '/assets/treasure-hunter-11 4 (1).png',
          availableDates: ['Aug 4 - 15, 2025', 'Aug 15 - 19, 2025', 'Aug 19 - 26, 2025', 'Aug 26 - 29, 2025'],
          nights: '7',
          startingPrice: '$55,000'
        }
      ],
      seasonalOffers: [
        {
          id: 1,
          title: 'Your ultimate summer yacht escape awaits, docked and ready for adventure',
          description: 'Experience the luxury of summer aboard our premium yachts',
          image: '/assets/Copy of express-exterior-4.jpg'
        },
        {
          id: 2,
          title: 'Savoring sun-drenched moments on deck, pure summer yacht bliss.',
          description: 'Indulge in perfect moments under the Mediterranean sun',
          image: '/assets/Copy of express-guests-11.jpg'
        },
        {
          id: 3,
          title: 'Elevate your summer voyage with exquisite drinks and refined luxury',
          description: 'Premium beverages and world-class service await',
          image: '/assets/Copy of express-service-7.jpg'
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inria+Serif:wght@300;400;700&family=Unna:wght@400;700&family=DM+Sans:wght@400;500;600;700&display=swap');

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
  font-family: 'Inria Serif', serif !important;
  font-weight: 400;
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

.book-now-btn {
  border: 2px solid white !important;
  color: white !important;
  font-family: 'Inria Serif', serif !important;
  font-weight: 400;
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
    linear-gradient(270.4deg, rgba(35, 53, 65, 0.1) 0.3%, rgba(23, 42, 54, 0.8) 98.23%),
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
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.hero-navbar {
  flex-shrink: 0;
  padding: 10px 0;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 100%;
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
  font-family: 'Inria Serif', serif;
  font-size: 4rem;
  font-weight: 400;
  color: white;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-family: 'Inria Serif', serif;
  font-size: 1.25rem;
  color: white;
  opacity: 0.95;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 0 auto;
}

.hero-cta {
  font-family: 'Inria Serif', serif;
  font-size: 1rem;
  color: white;
  opacity: 0.9;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
}

.booking-form {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 8px 8px #0380882E !important;
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
  border-radius: 0;
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
  border-radius: 0;
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
  font-family: 'Inria Serif', serif;
  font-size: 1rem;
  font-weight: 400;
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
  font-family: 'Inria Serif', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.modern-luxury-title {
  font-family: 'Inria Serif', serif;
  color: #135252 !important;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
}

.experiences-text {
  font-family: 'Inria Serif', serif;
  color: #31C9CA !important;
  font-weight: 400;
}

.explore-voyages-btn {
  font-family: 'Inria Serif', serif;
  background: #135252 !important;
  color: white !important;
  text-transform: none;
  font-weight: 400;
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

.caribbean-title {
  font-family: 'Inter', sans-serif !important;
  font-weight: 700 !important;
  font-style: normal !important;
  text-align: left !important;
  font-size: 22px !important;
  color: #135252 !important;
  margin: 0;
  line-height: 1.2;
}

.yacht-card-new {
  border-radius: 0 !important;
  overflow: hidden;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
}

.yacht-image-container {
  position: relative;
}

.yacht-image-new {
  border-radius: 0;
}

.yacht-size-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.yacht-content {
  padding: 20px !important;
}

.yacht-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #135252;
  text-align: center;
  margin: 0 0 10px 0;
}

.yacht-divider {
  border: none;
  height: 1px;
  background-color: #135252;
  margin: 15px 0;
}

.available-dates {
  margin: 20px 0;
}

.dates-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.date-chips {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 15px;
}

.date-chip {
  background-color: #f0f0f0 !important;
  color: #333 !important;
  font-size: 11px !important;
  height: auto !important;
  padding: 8px 6px !important;
  border-radius: 3px !important;
  font-weight: 400 !important;
  text-align: center !important;
  width: 100% !important;
  margin: 0 !important;
}

.yacht-pricing {
  margin: 15px 0;
  text-align: left;
}

.nights-info {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.price-info {
  font-size: 0.8rem;
  color: #666;
  font-weight: 400;
}

.yacht-buttons {
  margin-top: 20px;
}

.explore-btn-yacht {
  border: 1px solid #135252 !important;
  color: #135252 !important;
  font-weight: 600 !important;
  text-transform: uppercase;
  font-size: 0.8rem !important;
  height: 36px !important;
  border-radius: 0 !important;
}

.inquire-btn-yacht {
  background: #135252 !important;
  color: white !important;
  font-weight: 600 !important;
  text-transform: uppercase;
  font-size: 0.8rem !important;
  height: 36px !important;
  border-radius: 0 !important;
}

.explore-all-btn {
  background: #135252 !important;
  color: white !important;
  font-weight: 600 !important;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 0 !important;
  font-size: 0.9rem !important;
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
  border-radius: 0;
}

.world-class-content {
  padding: 20px 0;
}

.yachts-subtitle {
  font-family: 'Inria Serif', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.world-class-title {
  font-family: 'Inria Serif', serif !important;
  font-weight: 400 !important;
}

.world-class-description {
  font-family: 'Inria Serif', serif !important;
  font-weight: 400 !important;
}

.world-class-btn {
  font-family: 'Inria Serif', serif !important;
  font-weight: 400 !important;
  background: #135252 !important;
  color: white !important;
}

.explore-btn {
  text-transform: none;
  font-weight: 600;
  padding: 12px 32px;
}

/* Voyage 50 Section */
.voyage-50-section {
  background: white;
}

.voyage-50-subtitle {
  font-family: 'Inria Serif', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.voyage-50-title {
  font-family: 'Inria Serif', serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #333;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.voyage-50-description-container {
  max-width: 900px;
  margin: 0 auto;
}

.voyage-50-description {
  font-family: 'Inria Serif', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto;
}

.voyage-50-btn {
  font-family: 'Inria Serif', serif !important;
  font-weight: 400 !important;
  background: #135252 !important;
  color: white !important;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 0 !important;
  font-size: 0.9rem !important;
}

.voyage-50-image-full {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
}

.voyage-50-image {
  border-radius: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
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

.seasonal-subtitle {
  font-family: 'Inria Serif', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.seasonal-title {
  font-family: 'Inria Serif', serif;
  font-size: 60px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3;
}

.seasonal-text {
  color: #135252;
}

.offers-text {
  color: #31C9CA;
}

.seasonal-card-new {
  background: #ECECEC;
  border: none;
  border-radius: 0 !important;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.seasonal-image-container {
  position: relative;
  flex: 1;
}

.seasonal-image-new {
  border-radius: 0;
}

.yacht-experience-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #135252;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.seasonal-content {
  padding: 24px !important;
  background: #ECECEC;
}

.seasonal-offer-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  font-style: normal;
  color: #333;
  line-height: 1.4;
  margin-bottom: 12px;
}

.seasonal-offer-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  font-style: normal;
  color: #666;
  line-height: 1.5;
  margin: 0;
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
  background: white;
}

.fleet-section-title {
  font-family: 'Inria Serif', serif;
  font-size: 60px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 3rem;
}

.explore-text {
  color: #135252;
}

.fleet-text {
  color: #31C9CA;
}

.fleet-carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  overflow: visible;
}

.fleet-nav-dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 10;
}

.fleet-nav-left {
  position: absolute;
  left: -23px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.fleet-nav-right {
  position: absolute;
  right: -23px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.fleet-images-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 50px;
  overflow: visible;
}

.fleet-image-item {
  position: relative;
  overflow: visible;
  border-radius: 0;
}

.fleet-image-new {
  border-radius: 0;
  transition: transform 0.3s ease;
  width: 100%;
}

.fleet-image-item:hover .fleet-image-new {
  transform: scale(1.05);
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

@media (max-width: 960px) {
  .fleet-images-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .fleet-nav-left {
    left: -20px;
  }
  
  .fleet-nav-right {
    right: -20px;
  }
}

@media (max-width: 600px) {
  .fleet-images-grid {
    grid-template-columns: 1fr;
  }
  
  .fleet-section-title {
    font-size: 40px;
  }
}

/* Activities Section */
.activities-section {
  background: white;
}

.activities-section-title {
  font-family: 'Inria Serif', serif;
  font-size: 60px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 3rem;
}

.explore-activities-text {
  color: #135252;
}

.activities-text {
  color: #31C9CA;
}

.activities-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.activities-row-1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.activities-row-2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.activity-image-item {
  position: relative;
  overflow: hidden;
  border-radius: 0;
}

.activity-image-new {
  border-radius: 0;
  transition: transform 0.3s ease;
  width: 100%;
}

.activity-image-item:hover .activity-image-new {
  transform: scale(1.05);
}

.explore-activities-btn {
  font-family: 'Inria Serif', serif !important;
  font-weight: 400 !important;
  background: #135252 !important;
  color: white !important;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 0 !important;
  font-size: 0.9rem !important;
  margin-top: 6rem !important;
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

@media (max-width: 960px) {
  .activities-row-1,
  .activities-row-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .activities-section-title {
    font-size: 40px;
  }
}

@media (max-width: 600px) {
  .activities-row-1,
  .activities-row-2 {
    grid-template-columns: 1fr;
  }
  
  .activities-section-title {
    font-size: 30px;
  }
}

/* Consultant Section */
.consultant-section {
  background: #f5f5f5;
}

.consultant-content {
  padding-top: 2.5rem;
}

.consultant-section-title {
  font-family: 'Inria Serif', serif;
  font-size: 42px;
  font-weight: 400;
  line-height: 1.2;
  color: #135252;
  margin-bottom: 1.5rem;
  margin-top: 0;
}

.charter-consultant-text {
  color: #31C9CA;
}

.consultant-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #9499A6;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.contact-info-section {
  margin-top: 1rem;
}

.contact-info-group {
  margin-bottom: 1rem;
}

.contact-info-heading {
  font-family: 'Unna', serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #020713;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.contact-info-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-text {
  font-family: 'Unna', serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  color: #020713;
}

.contact-form-container {
  background: #F5F5F5;
  padding: 3rem;
  border-radius: 12px;
  margin-left: 0.5rem;
  width: 100%;
}

.contact-form {
  padding: 0;
  width: 100%;
}

.form-field-group {
  margin-bottom: 1.5rem;
  width: 100%;
}

.form-label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.contact-input {
  background: white;
  width: 100%;
}

.contact-input .v-field {
  background: white !important;
  border-radius: 8px !important;
  width: 100% !important;
  min-width: 100% !important;
}

.contact-input .v-field__input {
  font-size: 8px;
  color: #999;
  padding: 18px;
  min-height: 50px;
  width: 100% !important;
}

.contact-input .v-field__input::placeholder {
  font-size: 8px !important;
  color: #bbb !important;
}

.contact-input .v-field__outline {
  --v-field-border-opacity: 0.2;
  border-radius: 8px;
}

.contact-input .v-field--focused .v-field__outline {
  --v-field-border-opacity: 0.4;
  color: #135252;
}

.contact-input .v-field__outline__start,
.contact-input .v-field__outline__end {
  border-color: rgba(0, 0, 0, 0.2) !important;
}

.contact-input .v-field--focused .v-field__outline__start,
.contact-input .v-field--focused .v-field__outline__end {
  border-color: #135252 !important;
}

.form-button-container {
  margin-top: 1rem;
}

.send-message-btn {
  background: #135252 !important;
  color: white !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 500 !important;
  text-transform: none !important;
  padding: 12px 24px !important;
  border-radius: 30px !important;
  font-size: 13px !important;
  min-width: 120px;
  box-shadow: 0 3px 10px rgba(19, 82, 82, 0.3) !important;
  letter-spacing: 0.3px;
  height: 45px !important;
}

.send-message-btn:hover {
  background: #0f4444 !important;
  box-shadow: 0 6px 16px rgba(19, 82, 82, 0.4) !important;
  transform: translateY(-1px);
  transition: all 0.3s ease;
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

@media (max-width: 960px) {
  .consultant-section-title {
    font-size: 32px;
    text-align: center;
  }
  
  .consultant-description {
    text-align: center;
  }
  
  .contact-info-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .contact-info-items {
    align-items: center;
  }
}

/* Footer */
.footer-section {
  background: #135252 !important;
  color: white;
}

.footer-brand-title {
  font-family: 'Unna', serif;
  font-weight: 400;
  font-style: normal;
  color: #FFFFFF;
  font-size: 20px;
  display: inline-block;
  margin: 0;
}

.footer-description {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #9499A6;
  font-size: 16px;
  line-height: 1.6;
  max-width: 400px;
}

.footer-column-title {
  font-family: 'Unna', serif;
  font-weight: 400;
  font-style: normal;
  color: #FFFFFF;
  font-size: 18px;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-link {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #9499A6;
  font-size: 16px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #FFFFFF;
}

.footer-copyright {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #BCC3D8;
  font-size: 16px;
}

.chat-btn {
  background: #3B71FB !important;
  color: white !important;
  font-family: 'DM Sans', sans-serif !important;
  font-weight: 400 !important;
  text-transform: none !important;
  border-radius: 25px !important;
  font-size: 14px !important;
  padding: 12px 20px !important;
  box-shadow: 0 2px 8px rgba(59, 113, 251, 0.3) !important;
}

.chat-btn:hover {
  background: #2B5AE6 !important;
  box-shadow: 0 4px 12px rgba(59, 113, 251, 0.4) !important;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-divider-section {
  position: relative;
  margin: 3rem 0;
}

.footer-chat-button-container {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-120%);
  z-index: 2;
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
