import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import ErrorLayout from '@/src/layouts/error.vue'

test('correctly shows 404 error text', (t) => {
  const wrapper = shallowMount(ErrorLayout, {
    propsData: {
      error: {
        statusCode: 404
      }
    },
    stubs: {
      NuxtLink: true
    }
  })
  const text = wrapper.find('h1').text()
  t.is(text, '404: Page not found')
})

test('correctly shows non-404 error text', (t) => {
  const wrapper = shallowMount(ErrorLayout, {
    propsData: {
      error: {
        statusCode: 500
      }
    },
    stubs: {
      NuxtLink: true
    }
  })
  const text = wrapper.find('h1').text()
  t.is(text, 'An error occurred')
})
