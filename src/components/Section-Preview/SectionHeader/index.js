import React from 'react'
import TabsSection from './TabsSection'
import Title from './Title'

const SectionHeader = ({TITLE, TABS}) => {
  return (
   <>
    <Title TITLE={TITLE} />
    <TabsSection TITLE={TITLE} TABS={TABS}/>
   </>
  )
}

export default SectionHeader