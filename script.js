let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



function initialize() {
    //by default english
    $.ajax({
        url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,

        success: function (data) {

            console.log(data);

            changeLanguage(data);

        },

        error: function (err) {
            console.log(err);
            let articleEl = document.querySelector('.about-article');

            articleEl.innerHTML = "Something Went Wrong";
        }
    });
}

function changeToUrdu() {
    $.ajax({
        url: ` https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,

        success: function (data) {

            console.log(data);
            changeLanguage(data);

        },

        error: function (err) {
            console.log(err);
            let articleEl = document.querySelector('.about-article');

            articleEl.innerHTML = "Something Went Wrong";
        }
    });
}

function changeToChinese() {
    $.ajax({
        url: ` https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,

        success: function (data) {

            console.log(data);
            changeLanguage(data);

        },

        error: function (err) {
            console.log(err);
            let articleEl = document.querySelector('.about-article');

            articleEl.innerHTML = "Something Went Wrong";
        }
    });
}

function changeLanguage(index) {
    // for navbar
    let headerEl = document.querySelector('.sub-navbar');

    headerEl.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
         </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link sub-nav">${index.menuOptions[0]}</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link sub-nav">${index.menuOptions[1]}</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link sub-nav">${index.menuOptions[2]}</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link sub-nav">${index.menuOptions[3]}</a>
                    </li>

                </ul>
            </div>

        </nav>`;

    // for article

    let articleEl = document.querySelector('.about-article');

    let dateObj = new Date(index.date);
    let month = months[dateObj.getMonth()];
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    articleEl.innerHTML = `<div class="card flower-detail">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Whats new at TechKaro?</a>
                        </li>

                    </ul>
                </div>
                <img class="card-img-top" src="${index.imageURL}" alt="Card image cap">
                <div class="card-body">
                    <div class="date-and-courtesy">
                        <div class="date"><i class="fas fa-calendar-alt"></i> ${month} ${date}, ${year} - ${hours}h ${minutes}m</div>
                        <div class="courtesy"><i class="fas fa-user"></i> by <span class="green">TechKaro Community</span></div>
                    </div>
                    <h5 class="card-title flower-title">${index.info.heading}</h5>
                    <p class="card-text">${index.info.description}</p>
                </div>
            </div>

             <div class="card sale-detail">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#"><span class="active-bold">New at TechKaro?</span> Learn More <i class="fas fa-greater-than greater"></i></a>
                        </li>

                    </ul>
                </div>

                <div class="card-body">
                    <h5 class="card-title">${index.sale.heading}</h5>
                    <p class="card-text">${index.sale.description}</p>
                </div>
            </div>`;
}

// Write all your Javascript here!