import ScrollStack, { ScrollStackItem } from '@/reactBits/ScrollStack/ScrollStack'
import React from 'react'

const Faq = () => {
  return (
    <section>
      <ScrollStack>
        <ScrollStackItem>
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  )
}

export default Faq