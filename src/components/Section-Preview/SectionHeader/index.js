import React from 'react'
import TabsSection from './TabsSection'
import Title from './Title'

const SectionHeader = ({previewSectionTitle, tabs}) => {
  return (
   <>
    <Title previewSectionTitle={previewSectionTitle} />
    <TabsSection previewSectionTitle={previewSectionTitle} tabs={tabs}/>
   </>
  )
}

export default SectionHeader