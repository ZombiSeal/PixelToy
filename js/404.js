let btn = document.querySelector('.error-btn');
        btn.addEventListener('mouseover', function(e) {
            e.preventDefault();
            document.querySelector('.info').classList.add('info_active');
            document.querySelector('.error').classList.add('error_active');
            document.querySelector('.hero__wrapper').classList.add('hero__wrapper_active');

        })

        btn.addEventListener('mouseout', function(e) {
            e.preventDefault();
            document.querySelector('.info').classList.remove('info_active');
            document.querySelector('.error').classList.remove('error_active');
            document.querySelector('.hero__wrapper').classList.remove('hero__wrapper_active');


            // console.log('btb');
        })