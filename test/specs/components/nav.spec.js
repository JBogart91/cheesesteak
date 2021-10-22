import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import Nav from '@/src/components/nav.vue'

let wrapper
const items = [
  { href: '/cheese', label: 'Cheese' },
  { href: '/mushrooms', label: 'Mushrooms' }
]

const expectedLinks = [
  { href: '/cheese', label: 'Cheese', isActive: true },
  { href: '/mushrooms', label: 'Mushrooms', isActive: false }
]

test.before(() => {
  wrapper = shallowMount(Nav, {
    propsData: {
      items
    },
    mocks: {
      $route: {
        path: '/cheese'
      }
    },
    stubs: {
      'nuxt-link': {
        name: 'nuxt-link-stub',
        props: ['to'],
        template: '<a :href="to.path || to" class="nuxt-link"><slot></slot></a>'
      }
    }
  })
})

test('has the correct amount of items', t => {
  const generatedLinks = wrapper.findAll('.nuxt-link')
  t.is(generatedLinks.length, 2)
})

test('creates the correct set of links with the expected properties', t => {
  const generatedLinks = wrapper.findAll('.nuxt-link').wrappers.map(item => {
    const { to } = item.props()
    const { class: linkClass } = item.attributes()
    return {
      href: to,
      label: item.text(),
      isActive: linkClass.includes('active')
    }
  })
  t.deepEqual(generatedLinks, expectedLinks)
})
