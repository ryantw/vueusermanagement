import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import YesNoDialog from '@/components/YesNoDialog.vue'

// Hack to hide unneeded error message from using vue, vutify, and jest
// https://github.com/vuetifyjs/vuetify/issues/4068
const logError = console.error
console.error = (...args) => {
  if (
    args[0].includes('[Vuetify]') &&
    args[0].includes('https://github.com/vuetifyjs/vuetify/issues/4068')
  ) {
    return
  }
  logError(...args)
}
// End hack

describe('YesNoDialog.vue', () => {
  const showDialog = true
  const title = 'this is the test title'
  const text = 'this is the test text'
  const continueButton = 'continueButton'
  const cancelButton = 'cancelButton'

  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)

    wrapper = shallowMount(YesNoDialog, {
      localVue,
      propsData: { showDialog, title, text, continueButton, cancelButton }
    })
  })

  it('renders props when passed', () => {
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(text)
    expect(wrapper.text()).toMatch(continueButton)
    expect(wrapper.text()).toMatch(cancelButton)
  })
})
