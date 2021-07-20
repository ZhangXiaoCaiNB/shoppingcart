import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import bookslist from "./modules/bookslist"
import bookscart from "./modules/bookscart"
import booksinventory from "./modules/booksinventory"
import customeraccount from "./modules/customeraccount"

export default new Vuex.Store({
  modules: {
    bookscart,
    bookslist,
    booksinventory,
    customeraccount
  }
})
