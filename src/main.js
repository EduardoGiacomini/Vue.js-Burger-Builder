import Vue from 'vue'
import App from './App.vue'
import Wrapper from '@vue/web-component-wrapper'

const wrappedElement = Wrapper(Vue, App)

window.customElements.define('v-burger', wrappedElement)
