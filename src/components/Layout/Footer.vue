<template>
  <div class="footer">
    <div class="container">
      <div class="logo">
        <!-- Placeholder for the logo -->
        <svg width="133" height="91" viewBox="0 0 133 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.175 90.25C4.475 90.25 0.775 87.05 0.775 81.35C0.775 75.575 4.5 72.25 9.95 72.25C11.25 72.25 12.4 72.35 13.4 72.5L13.6 75.825C12.35 75.625 11.475 75.55 10.525 75.55C6.85 75.55 4.75 77.35 4.75 81.125C4.75 85.05 7 86.95 10.55 86.95C11.775 86.95 12.65 86.85 13.75 86.675L13.55 90C12.7 90.125 11.425 90.25 10.175 90.25ZM22.9393 90.375C17.7893 90.375 14.7643 86.95 14.7643 81.3C14.7643 75.725 18.1893 72.125 23.2893 72.125C28.4393 72.125 31.4643 75.55 31.4643 81.2C31.4643 86.775 28.0143 90.375 22.9393 90.375ZM22.9893 87.1C25.6393 87.1 27.4643 85.075 27.4643 81.35C27.4643 77.675 25.8643 75.4 23.2143 75.4C20.5893 75.4 18.7393 77.425 18.7393 81.15C18.7393 84.85 20.3643 87.1 22.9893 87.1ZM37.7521 90H33.8771V72.5H38.8771C44.4271 72.5 46.5521 74.575 46.5521 77.925C46.5521 80.825 45.0021 82.6 42.5021 83.35C44.2771 83.875 45.1021 85.45 47.4021 90H42.7771C40.3271 83.975 40.3271 83.8 37.9771 83.8L38.0271 83.775H37.7521V90ZM39.3271 75.625H37.7521V81.275H39.2521C41.4521 81.275 42.6271 80.3 42.6271 78.325C42.6271 76.55 41.6521 75.625 39.3271 75.625ZM53.4992 90H49.6242V72.5H54.6242C60.1742 72.5 62.2992 74.575 62.2992 77.925C62.2992 80.825 60.7492 82.6 58.2492 83.35C60.0242 83.875 60.8492 85.45 63.1492 90H58.5242C56.0742 83.975 56.0742 83.8 53.7242 83.8L53.7742 83.775H53.4992V90ZM55.0742 75.625H53.4992V81.275H54.9992C57.1992 81.275 58.3742 80.3 58.3742 78.325C58.3742 76.55 57.3992 75.625 55.0742 75.625ZM76.7963 86.7V90H65.3713V72.5H76.7963V75.8H69.2463V79.675H75.7963V82.825H69.2463V86.7H76.7963ZM83.1779 90H79.6779V72.5H83.0029L90.6029 83.325V72.5H94.1279V90H90.7779L83.1779 79.15V90ZM109.389 86.7V90H97.9641V72.5H109.389V75.8H101.839V79.675H108.389V82.825H101.839V86.7H109.389ZM114.871 90H111.171L113.696 72.475H117.471C119.121 77 120.571 80.925 121.946 85.25C123.296 80.925 124.746 77 126.421 72.475H130.196L132.671 90H128.621C128.146 85.75 127.771 81.95 127.471 78.2C126.271 82 125.046 85.9 123.646 90H120.071C118.671 86.025 117.346 82.125 116.146 78.325C115.796 82.075 115.346 85.9 114.871 90Z" fill="#ECE5F0"/>
          <path d="M24.0093 37.4107C76.4386 14.3685 104.156 43.4129 109.583 56.7707C94.8891 15.3615 47.2463 21.4092 25.2616 29.897L24.0093 37.4107Z" fill="#ECE5F0"/>
          <path d="M19 21.2889C87.0413 7.51372 104.573 44.2477 110 57.6054C95.3064 16.1963 61.9954 10.0184 19 13.7752V21.2889Z" fill="#ECE5F0"/>
          <path d="M27.3487 6.26146C82.867 3.75688 102.904 40.4908 108.33 53.8486C93.6368 12.4394 61.1606 0 25.679 0L27.3487 6.26146Z" fill="#ECE5F0"/>
        </svg>
      </div>
      <div class="contact">
        <h4>Contato</h4>
        <p>contato@gmail.com</p>
      </div>
      <div class="menu">
        <h4>Opções sla</h4>
        <ul>
          <li><a href="#login" class="menu-item-footer">teste</a></li>
          <li><a href="#register" class="menu-item-footer">teste</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
// Import necessary elements and state if needed
</script>

<style lang="scss" scoped>
.footer  {
  margin-top: 16%;
  background: linear-gradient(91.2deg, #044884 0.06%, #000500 129.53%);
  color: var(--white); // Define this variable in your root styles or replace with actual color code
  padding: 20px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .logo {
    font-size: 1.5rem; // Adjust as needed
  }
  .contact, .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .menu {
    ul {
      padding: 0;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: var(--white);
          margin-bottom: 0.5rem; // Adjust as needed
          &:hover {
            text-decoration: underline;
          }
          &.btn-padrao {
            // Add styles for the "Register" button
          }
        }
      }
    }
  }
  // Add media query styles for responsiveness if needed
}
</style>
