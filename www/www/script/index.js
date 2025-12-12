const modalFunc = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");

    const openModal = () => {
        modal.classList.add("open")
    };

    const closeModal = () => {
        modal.classList.remove("open")
    };

    cartBtn.addEventListener("click", () => {
        openModal();
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest(".cart-modal__header--close")
        ) {
            closeModal();
        }
    });
};

const restFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            titel: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-0.jpg',
        },
        {
            id: 1,
            titel: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-1.jpg',
        },
        {
            id: 2,
            titel: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-2.jpg',
        },
        {
            id: 3,
            titel: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-3.jpg',
        },
        {
            id: 4,
            titel: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-4.jpg',
        },
        {
            id: 5,
            titel: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-5.jpg',
        },
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка </p>'
    }

    //Отрисовка блоков магазинов
    const randerRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                        <a href="./goods.html?id=${card.id}" class="products-cart">
                            <div class="products-cart__image">
                                <img src="./images/rest/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-cart__description">
                                <div class="products-cart__description-row">
                                    <h4 class="products-cart__description--title">${card.titel}</h4>
                                    <div class="products-cart__description--badge">${card.time} мин</div>
                                </div>

                                <div class="products-cart__description-row">
                                    <div class="products-cart__description-info">
                                        <div class="products-cart__description-info--raiting">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-cart__description-info--price">
                                            От ${card.price} Р
                                        </div>
                                        <div class="products-cart__description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
        });

    }

    if (container) {
        loading()

        setTimeout(() => {
            randerRests(restArray)
        }, 2000)

    }



}




const goodsFunc = () => {
    const container = document.querySelector('#goods_container')

    const goodsArray = [
        {
            id: 0,
            name: 'Ролл угорь стандарт',
            text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'good-1.jpg',
       
        },
        {
            id: 1,
            name: 'Калифорния лосось стандарт',
            text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'good-2.jpg',
        },
        {
            id: 2,
            name: 'Окинава стандарт',
            text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'good-3.jpg',
        },
        {
            id: 3,
            name: 'Цезарь маки хl',
            text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'good-5.jpg',
        },
        {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'good-4.jpg',
        },

        {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'good-6.jpg',
        },
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка </p>'
    }

    //Отрисовка блоков магазинов
    const randerGoods = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                        <div class="products-card">
                            <div class="products-cart__image">
                                <img src="./images/goods/${card.image}" alt="good-1">
                            </div>
                            <div class="products-cart__description">
                                <div class="products-cart__description-row">
                                    <h5 class="products-cart__description--name">
                                        ${card.name}
                                    </h5>
                                </div>

                                <div class="products-cart__description-row">
                                    <p class="products-cart__description--text">
                                        ${card.text}
                                    </p>
                                </div>
                                <div class="products-cart__description-row">
                                    <div class="products-cart__description-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart-white">

                                        </button>
                                        <span class="products-cart__description-controls--price">${card.price} ₽</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                `)
        });

    }

    if (container) {
        loading()

        setTimeout(() => {
            randerGoods(goodsArray)
        }, 2000)

    }



}


modalFunc()
restFunc()
goodsFunc()