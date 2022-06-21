import { createStore } from 'vuex'

export default createStore({
  state: {
    nickname: '',
    password: '',
    checkbox: false,
    authorise: true,
    inputPostTitle: '',
    inputPostBody: '',
    inputPostImg: '',
    inputProductTitle: '',
    inputProductBody: '',
    inputProductImg: '',


    posts: [
      { id: Date.now(), title: 'Компьютер', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio nobis provident saepe nostrum officia, cumque neque maxime blanditiis", img: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      { id: Date.now(), title: 'Компьютер', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio nobis provident saepe nostrum officia, cumque neque maxime blanditiis", img: "https://images.unsplash.com/photo-1572314493295-09c6d5ec3cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" },
      { id: Date.now(), title: 'Компьютер', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio nobis provident saepe nostrum officia, cumque neque maxime blanditiis", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1265&q=80" },
      { id: Date.now(), title: 'Компьютер', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio nobis provident saepe nostrum officia, cumque neque maxime blanditiis", img: "https://images.unsplash.com/photo-1627281795244-0f5db916344a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" }
    ],

    products: [
      { id: Date.now(), title: "AMD Ryzen™ 7 PRO 4750", body: "Видеокарта AMD Radeon™ RX 6700 XT на базе архитектуры AMD RDNA™ 2, оснащенная 40 мощными улучшенными вычислительными блоками, абсолютно новой кэш-памятью AMD Infinity Cache и выделенной памятью GDDR6 объемом 12 ГБ, обеспечивает сверхвысокую частоту кадров и великолепные ощущения при игре с разрешением 1440p.", img: "https://images.unsplash.com/photo-1625633979481-bcbaa10165f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
      { id: Date.now(), title: "Radeon RX 6700 XT", body: "Созданные для современного бизнеса технологии AMD PRO обеспечивают различные уровни защиты, целостное управление и надежную долговечность.", img: "https://www.amd.com/system/files/2021-03/732516-amd-ryzen-pro-chip-keyboard-tech-1260x709.jpg" }
    ]
  },
  getters: {
  },
  mutations: {
    updateNickname(state, nick) {
      state.nickname = nick
    },

    updatePassword(state, password) {
      state.password = password
    },

    updateCheckbox(state, checkbox) {
      state.checkbox = checkbox
    },

    createPost(state) {
      let postItem = {
        id: Date.now(),
        title: state.inputPostTitle,
        body: state.inputPostBody,
        img: state.inputPostImg
      }

      state.posts.push(postItem)

      state.inputPostTitle = ''
      state.inputPostBody = ''
      state.inputPostImg = ''
    },

    createProduct(state) {
      let productItem = {
        id: Date.now(),
        title: state.inputProductTitle,
        body: state.inputProductBody,
        img: state.inputProductImg
      }

      state.products.push(productItem)

      state.inputProductTitle = ''
      state.inputProductBody = ''
      state.inputProductImg = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
