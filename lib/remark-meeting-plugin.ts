import { visit } from 'unist-util-visit'

export default function remarkMeetingPlugin() {
  return (tree) => {
    console.log('Plugin running...') // Debug: Confirm plugin executes
    visit(tree, 'paragraph', (node) => {
      const text = node.children[0]?.value || ''
      console.log('Paragraph found:', text) // Debug: See all paragraphs
      if (text.startsWith('Meeting:')) {
        const content = text.replace('Meeting:', '').trim()
        console.log('Transformed to:', `<Meeting>${content}</Meeting>`) // Debug: Confirm transformation
        node.type = 'jsx'
        node.value = `<Meeting>${content}</Meeting>`
      }
    })
  }
}
