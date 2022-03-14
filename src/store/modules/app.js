// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  navItemsAppBar: [

    {
      name: 'Our products', routenpath: '', isMenuDropDown: true, menuDropDownItems: [
        { name: 'Breads', routeName: 'Breads'},
        { name: 'Pastries', routeName: 'Pastries' },
      ],
    },
    
    { name: 'Contact', routeName: 'Contact', isMenuDropDown: false, menuDropDownItems:[] },

  ],
}


const mutations = make.mutations(state)

const actions = make.actions(state)

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

