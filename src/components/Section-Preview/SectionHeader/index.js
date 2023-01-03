import React from 'react'
import TabsSection from './TabsSection'
import Title from './Title'

const SectionHeader = ({PREVIEW_SECTION_TITLE, TABS}) => {
  return (
   <>
    <Title PREVIEW_SECTION_TITLE={PREVIEW_SECTION_TITLE} />
    <TabsSection PREVIEW_SECTION_TITLE={PREVIEW_SECTION_TITLE} TABS={TABS}/>
   </>
  )
}

export default SectionHeader