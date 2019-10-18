<footer class="footer footer-index">
        <div class="wrapper footer-wrapper">
          <div class="footer-phone">
            <a href="tel:88008008880" class="footer-phone__link">8 800 800-88-80</a>
            <span class="footer-phone__text">звонок по России Бесплатный</span>
          </div>
          <div class="footer-socials">
            <a href="#" class="footer-socials__link">
              <i class="fab fa-vk  footer-socials__icon"></i>
            </a>
            <a href="#" class="footer-socials__link">
              <i class="fab fa-instagram footer-socials__icon"></i>
            </a>
          </div>
          <a href="#" class="footer-law">© 2019 Sсrap.center. <span class="footer-law_mobile">Все права защищены</span></a>
          <div class="footer-text">
              <a href="policy.php" class="footer-policy">Политика конфиденциальности</a>
              <a href="#" class="footer-licence">Пользовательское соглашение</a>
          </div>
        </div>
        <!-- /.wrapper -->
    </footer>
    <!-- /.footer -->

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/swiper.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/header.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/policy.js"></script>
    <script src="js/common.js"></script>
    <script src="js/select.js"></script>
    <!-- <script src="js/bootstrap.min.js"></script> -->

    <script>
        var mySwiper = new Swiper ('.slider-container', {
          // Optional parameters
          loop: true,
      
          // If we need pagination
          pagination: {
            el: '.slider-pagination',
          },
      
          // Navigation arrows
          navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
          }
        })

        var mySwiper = new Swiper ('.feedback-container', {
          // Optional parameters
          loop: true,
          slidesPerView: 1,
      
          // If we need pagination
          pagination: {
            el: '.feedback-pagination',
          },
      
          // Navigation arrows
          navigation: {
            nextEl: '.feedback-button-next',
            prevEl: '.feedback-button-prev',
          }
        })
    </script>
</body>
</html>