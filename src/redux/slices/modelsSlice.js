import { createSlice } from "@reduxjs/toolkit";

const modelsSlice = createSlice({
    name: 'models',
    initialState: {
        models: [
          {
            id: 'AUTO-1',
            title: 'Lamborghini Revuelto',
            slogan: 'FROM NOW ON',
            description: 'Revuelto — это начало новой эры для Lamborghini, которая использовала возможности технологии гибридизации для создания первого HPEV (высокопроизводительного электрифицированного автомобиля). Отвечая на потребность в экологичности и мощных характеристиках, Lamborghini Revuelto переписывает все парадигмы и представляет собой технический шедевр, превосходящий чье-либо воображение. Знаменитый двигатель V12 обретает новую жизнь в этом футуристическом автомобильном шедевре, обеспечивающем непревзойденную производительность и эмоции от вождения.',
            overview: 'Накануне 60-летнего юбилея бренда Lamborghini представила Revuelto, первый гибридный суперкар класса HPEV (High Performance Electrified Vehicle = электромобиль с высокими эксплуатационными характеристиками). Создав Revuelto, Lamborghini установила новый эталон эксплуатационных характеристик, бортовых технологий и удовольствия от вождения. Невероятные впечатления от Revuelto достигаются благодаря силовой установке общей мощностью 1015 л.с., которая сочетает мощь качественно нового V-образного 12-цилиндрового двигателя внутреннего сгорания с тремя электродвигателями с высокой удельной мощностью и инновационную электрическую коробку передач с двойным поперечным сцеплением. Сила гибридизации используется для повышения эксплуатационных характеристик и эмоций от вождения на беспрецедентный уровень.',
            exterior: 'Revuelto глубоко чтит традиции Lamborghini и открывает новую эру также и в плане своего внешнего дизайна. В то время как силуэт автомобиля следует культовой единой центральной направляющей, четкие линии и плавные отрицательные радиусы создают хай-тек форму, благодаря которой Revuelto можно безошибочно отнести к новому поколению суперкаров Lamborghini. Культовый V-образный 12-цилиндровый двигатель очень хорошо заметен сзади.',
            interior: 'Интерьер Revuelto доводит концепцию «Почувствуй себя пилотом» до предельной степени ее выражения: простые объемы, симметрия и всецело ориентированный на водителя подход превращают кабину в место, беспрецедентно расширяющее возможности водителя. Футуристическая среда создает неразрывную связь между водителем и машиной, а эксклюзивные элементы в форме шестиугольника выполняют двойную миссию – вызывают ассоциации с прошлыми моделями и подчеркивают совершенно новые функциональные характеристики. ',
            images: ['./src/assets/images/revuelto.webp', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2023/11_06_refresh/over/revuelto_over_01.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2023/11_06_refresh/s/revuelto_s_01.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2023/11_06_refresh/s/revuelto_s_02.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2023/11_06_refresh/s/revuelto_s_03.jpg',],
            backgroundImage: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto.jpg",
            price: 608358,
            power: '1015CV',
            maxSpeed: 350,
            kmh: 2.5
          },
          {
            id: 'AUTO-2',
            title: 'Lamborghini Huracan',
            slogan: 'BEYOND THE CONCRETE',
            description: 'Из нашего прошлого мы научились совершенству. Так родилась первая модель Lamborghini Huracán. Больше производительности, больше контроля, больше инноваций. Huracán оснащен мощным двигателем V10 и новейшими технологиями, обеспечивающими максимальную производительность. Созданный для обеспечения максимальной производительности и управляемости в любых условиях вождения, он позволяет легко работать на пределе возможностей, не говоря уже о невероятном удовольствии, благодаря таким технологиям, как коробка передач с двойным сцеплением Lamborghini Doppia Frizione (LDF) и полный привод с электронным управлением. . Наслаждайтесь лучшими впечатлениями от вождения. Откройте для себя все модели Lamborghini Huracán.',
            overview: 'Huracán открывает новые горизонты удовольствия от вождения. Это первый суперспортивный автомобиль, созданный для того, чтобы дерзать даже там, где кончается асфальт. Автомобиль, оснащенный специальной версией системы Lamborghini Dinamica Veicolo Integrata (LDVI), имеющий специальные настройки режимов вождения Strada и Sport, дополнен режимом Rally. Подобно шедевру авангардного искусства, он представляет собой инновацию – оригинальное переосмысление концепции суперкара. ',
            exterior: 'Смелый дизайн экстерьера Huracán очаровывает с первого взгляда. Он готов дерзать, и это видно в каждой детали: высота увеличена на 44 мм по сравнению с Huracán EVO для большего хода подвесок, выросла также и колея колес. Культовый воздухозаборник на заднем капоте подчеркивает спортивный, смелый и дерзкий вид. Защита днища в передней части, пороги и колесные арки делают дизайн еще более мускулистым.',
            interior: 'Интерьер Huracán отражает философию "почувствуй себя пилотом", которая была принята с самого начала для моделей Huracán. Титановая задняя арка, четырехточечные ремни безопасности, спортивные сиденья из углеволокна с двойным каркасом и алюминиевые напольные панели принимают водителя в свое надежное лоно, созданное для комфортных и увлекательных путешествий. Тот, кто сидит за рулем, имеет простой доступ к функциям для полного контроля над автомобилем, интуитивно получая всю информацию с имеющихся в автомобиле экранов.',
            images: ['./src/assets/images/huracan.webp', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/gallery/2023/over_new.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/gallery/2023/ext_1_1.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/s/2023/ex2.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/s/2023/int1.jpg'],
            backgroundImage: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/11_30_sterrato/family_chooser_sterrato.jpg",
            price: 249865,
            power: '610 CV / 449 kW',
            maxSpeed: 260,
            kmh: 3.4
          },
          {
            id: 'AUTO-3',
            title: 'Lamborghini Urus',
            slogan: 'DARE TO LIVE MORE',
            description: 'Lamborghini Urus — первый в мире внедорожник, в котором эксклюзивность, спортивность и производительность сочетаются с комфортом и универсальностью. Он предлагает лучшую в своем классе динамику движения и неповторимую элегантность дизайна. Urus воплощает в себе характеристики нескольких душ: спортивный, элегантный и внедорожный. Модельный ряд ориентирован на будущее, открывая новую эру с первой версией роскошного супервнедорожника PHEV (гибридный электромобиль с подключаемым модулем). Lamborghini Urus с его непревзойденными характеристиками, удовольствием от вождения и новаторским духом далеко не типичен.',
            overview: 'Накануне 60-летнего юбилея бренда Lamborghini представила Revuelto, первый гибридный суперкар класса HPEV (High Performance Electrified Vehicle = электромобиль с высокими эксплуатационными характеристиками). Создав Revuelto, Lamborghini установила новый эталон эксплуатационных характеристик, бортовых технологий и удовольствия от вождения. Невероятные впечатления от Revuelto достигаются благодаря силовой установке общей мощностью 1015 л.с., которая сочетает мощь качественно нового V-образного 12-цилиндрового двигателя внутреннего сгорания с тремя электродвигателями с высокой удельной мощностью и инновационную электрическую коробку передач с двойным поперечным сцеплением. Сила гибридизации используется для повышения эксплуатационных характеристик и эмоций от вождения на беспрецедентный уровень.',
            exterior: '',
            interior: '',
            images: ['./src/assets/images/urus.webp', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/urus_se/new/overview_d.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/urus_se/s/image_s_1.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/urus_se/s/image_s_2.jpg', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/urus_se/s/image_s_3.jpg'],
            backgroundImage: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2024/family/family_d.jpeg",
            price: 245000,
            power: '800 CV / 588 kW',
            maxSpeed: 312,
            kmh: 3.4  
          }
        ],
    },
    reducers: { 
        
    },
})

export const { } = modelsSlice.actions;

export default modelsSlice.reducer;